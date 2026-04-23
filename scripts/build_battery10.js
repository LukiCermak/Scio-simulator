const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function toAscii(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function cleanValue(value) {
  const trimmed = String(value || "").trim();
  const quoted = trimmed.match(/^"([\s\S]*)"$/);
  return quoted ? quoted[1] : trimmed;
}

function dedupe(list) {
  const out = [];
  for (const item of list) {
    const value = String(item || "").trim();
    if (!value || out.includes(value)) continue;
    out.push(value);
  }
  return out;
}

function findSourceFile(matchers) {
  const fileName = fs.readdirSync(root).find((name) => {
    const normalized = toAscii(name);
    return matchers.every((matcher) => normalized.includes(matcher)) && name.endsWith(".md");
  });
  if (!fileName) throw new Error(`Missing source file for matchers: ${matchers.join(", ")}`);
  return path.join(root, fileName);
}

function parseQuestions(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const questions = [];
  let i = 0;

  while (i < lines.length) {
    const header = lines[i].trim();
    const match = header.match(/^###\s+(\d+)$/);
    if (!match) {
      i += 1;
      continue;
    }

    const number = Number(match[1]);
    i += 1;
    while (i < lines.length && !lines[i].trim()) i += 1;
    const questionText = (lines[i] || "").trim();
    i += 1;

    const options = [];
    while (i < lines.length && options.length < 4) {
      const line = lines[i].trim();
      const optionMatch = line.match(/^([A-D])\)\s*(.*)$/);
      if (optionMatch) options.push(optionMatch[2].trim());
      i += 1;
    }

    if (!questionText || options.length !== 4) {
      throw new Error(`Malformed question block ${number}`);
    }

    questions.push({ number, text: questionText, options });
  }

  return questions;
}

function parseYamlBlock(block) {
  const out = {};
  let currentKey = null;

  for (const rawLine of block.split("\n")) {
    const line = rawLine.replace(/\t/g, "    ");
    const topLevel = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (topLevel) {
      const [, key, rawValue] = topLevel;
      currentKey = key;
      if (rawValue === "") {
        if (key === "options") out[key] = {};
        else if (["primarySourceSuggested", "secondarySourceSuggested", "signalPattern", "repairTags", "formulationFlags"].includes(key)) out[key] = [];
        else out[key] = "";
      } else {
        out[key] = cleanValue(rawValue);
      }
      continue;
    }

    if (currentKey === "options") {
      const optionMatch = line.match(/^\s*([A-D]):\s*(.*)$/);
      if (optionMatch) out.options[optionMatch[1]] = cleanValue(optionMatch[2]);
      continue;
    }

    if (Array.isArray(out[currentKey])) {
      const itemMatch = line.match(/^\s*-\s*(.*)$/);
      if (itemMatch) out[currentKey].push(cleanValue(itemMatch[1]));
    }
  }

  return out;
}

function parseMetadataSections(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const sections = new Map();
  let currentId = null;
  let buffer = [];

  function flush() {
    if (!currentId) return;
    const sectionText = buffer.join("\n");
    const yamlStart = sectionText.indexOf("```yaml");
    const yamlEnd = sectionText.indexOf("```", yamlStart + 7);
    if (yamlStart >= 0 && yamlEnd > yamlStart) {
      const yamlBlock = sectionText.slice(yamlStart + 7, yamlEnd).trim();
      sections.set(currentId, parseYamlBlock(yamlBlock));
    }
  }

  for (const line of lines) {
    const match = line.trim().match(/^##\s+(B10Q\d{2})$/);
    if (match) {
      flush();
      currentId = match[1];
      buffer = [];
      continue;
    }
    if (currentId) buffer.push(line);
  }
  flush();

  return sections;
}

function extractHeaderValue(text, key) {
  const match = text.match(new RegExp(`^- ${key}:\\s*(.+)$`, "m"));
  return match ? match[1].trim() : "";
}

function findLegislationRef(meta) {
  if (meta.legislationRef) return cleanValue(meta.legislationRef);
  if (!Array.isArray(meta.primarySourceSuggested)) return "";
  return meta.primarySourceSuggested.find((item) => {
    const value = toAscii(item);
    return value.includes("vyhlaska") || value.includes("zakon") || item.includes("§");
  }) || "";
}

function extractSignalPattern(meta, correctText) {
  const fromMeta = Array.isArray(meta.signalPattern) ? meta.signalPattern : [];
  if (fromMeta.length) return dedupe(fromMeta);

  const parts = [];
  if (meta.legislationRef) parts.push(meta.legislationRef);
  if (meta.personalityAnchor) parts.push(meta.personalityAnchor);
  if (meta.historicalAnchor) parts.push(String(meta.historicalAnchor));
  if (meta.subtopic) parts.push(meta.subtopic);
  if (meta.conceptFamily) parts.push(meta.conceptFamily);
  if (!parts.length) parts.push(correctText);
  return dedupe(parts).slice(0, 4);
}

function deriveSignalHint(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);
  const qType = toAscii(meta.questionTypeSuggested || "");

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return "Sleduj přesnou podmínku, lhůtu, dokument nebo oprávněnou osobu. Distraktory jsou blízké, ale právně nebo procesně nepřesné.";
  }
  if (qType.includes("author") || qType.includes("person") || discipline.includes("historie") || meta.personalityAnchor) {
    return "Nestačí poznat známé jméno. Rozhodující je přesně přiřadit osobnost, směr nebo historickou kotvu k tomu, co je pro ni skutečně typické.";
  }
  if (discipline.includes("diagnostika")) {
    return "Všímej si, zda otázka míří na autora, nástroj nebo typickou oblast využití. Distraktory zůstávají ve stejném odborném okruhu.";
  }
  return "Nehledej jen povědomě správně znějící možnost. Rozhodnout má přesné rozlišení jádra otázky a blízkých distraktorů.";
}

function deriveExplanationCorrect(meta, correctText) {
  const axis = meta.requiredDiscrimination || meta.distinctionAxis || meta.subtopic || "jádro otázky";
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);
  const qType = toAscii(meta.questionTypeSuggested || "");

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return `Správná možnost odpovídá pravidlu, že ${correctText}. Rozhodující bylo přesně odlišit ${axis}.`;
  }
  if (qType.includes("author") || qType.includes("person") || discipline.includes("historie") || meta.personalityAnchor) {
    return `Správná možnost odpovídá tomu, že ${correctText}. Rozhodující bylo přesně přiřadit osobnost, směr nebo historickou kotvu k tomu, co je pro ni typické.`;
  }
  return `Správná možnost odpovídá tomu, že ${correctText}. Rozhodující bylo odlišit ${axis}.`;
}

function deriveExplanationDistractor(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);
  const trap = meta.trapPatternSeed || meta.trapPattern || "blízké odborné možnosti";

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return `Distraktory zaměňují blízké lhůty, dokumenty, oprávnění nebo procedury. Past otázky stojí hlavně na záměně typu: ${trap}.`;
  }
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) {
    return "Distraktory pracují s reálnými jmény, směry nebo mezníky ze stejného okruhu. Past vzniká tehdy, když je téma povědomé, ale chybí přesné přiřazení.";
  }
  if (discipline.includes("diagnostika")) {
    return "Distraktory zůstávají ve stejném odborném poli, ale zaměňují autora, nástroj nebo oblast využití. Typická chyba vzniká z neúplného vybavení přesného páru pojem - funkce.";
  }
  return "Distraktory jsou významově blízké správné odpovědi a testují, zda student rozlišuje přesné jádro otázky, ne jen obecně známý okruh.";
}

function deriveCommonMisconception(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return "Častou chybou je zaměnit právně přesný postup za možnost, která zní věrohodně, ale neodpovídá přesnému pravidlu nebo kompetenci.";
  }
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) {
    return "Častou chybou je vybavit si správný okruh, ale už ne přesnou osobnost, rok nebo směr, a proto zaměnit dvě blízké historické kotvy.";
  }
  return "Častou chybou je vybavit si jen obecné téma, ale ne přesné rozlišení, na kterém je otázka postavená.";
}

function deriveWhyWrong(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return "Chybná odpověď obvykle ukazuje na záměnu dokumentů, kompetencí, lhůt nebo podmínek v poradenském a školském procesu.";
  }
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) {
    return "Chybná odpověď obvykle ukazuje na nejistotu v historických souvislostech nebo na záměnu osobností a jejich typických přínosů.";
  }
  if (discipline.includes("diagnostika")) {
    return "Chybná odpověď obvykle ukazuje na záměnu autora, nástroje nebo diagnostické funkce.";
  }
  return "Chybná odpověď obvykle ukazuje na nepřesné rozlišení dvou významově blízkých možností.";
}

function deriveMicroLesson(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return "U legislativních a procesních položek pomáhá učit se vždy trojici: kdo rozhoduje, za jakých podmínek a v jaké lhůtě nebo dokumentu.";
  }
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) {
    return "U historických a osobnostních otázek se uč vždy dvojici nebo trojici: jméno - typický přínos - případně rok či směr.";
  }
  if (discipline.includes("diagnostika")) {
    return "U diagnostických položek si neukládej jen název autora nebo testu, ale i to, k čemu se nástroj nebo pojetí používá.";
  }
  return "Při opakování si vždy zkus pojmenovat přesné rozlišení, na kterém otázka stojí, ne jen obecné téma.";
}

function deriveRecallPrompt(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return "Zkus bez nápovědy říct přesné pravidlo, podmínku nebo lhůtu, kterou tato položka testuje.";
  }
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) {
    return "Zkus bez nápovědy přiřadit osobnost nebo historický mezník k jejímu typickému přínosu, roku nebo směru.";
  }
  if (discipline.includes("diagnostika")) {
    return "Zkus bez nápovědy pojmenovat autora nebo nástroj a říct, s jakou oblastí či funkcí je spojen.";
  }
  return "Zkus vlastními slovy vysvětlit, jaké přesné rozlišení bylo v této otázce rozhodující.";
}

function deriveLikelyErrors(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);
  const qType = toAscii(meta.questionTypeSuggested || "");

  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) {
    return dedupe(["institution-confusion", "authority-mixup", "document-confusion"]);
  }
  if (qType.includes("author") || qType.includes("person") || meta.personalityAnchor) {
    return dedupe(["terminology-confusion", "historical-anchor-confusion", "personality-confusion"]);
  }
  if (discipline.includes("diagnostika")) {
    return dedupe(["concept-confusion", "terminology-confusion"]);
  }
  return dedupe(["concept-confusion", "knowledge-gap"]);
}

function deriveRepairTags(meta) {
  return dedupe([
    meta.conceptFamily,
    meta.subtopic,
    meta.personalityAnchor,
    meta.historicalAnchor,
    meta.discipline,
    "hard mode",
    "baterie 10"
  ]).slice(0, 6);
}

function deriveAttentionRisk(meta) {
  const discipline = toAscii(`${meta.discipline || ""} ${meta.institutionDomain || ""}`);
  if (discipline.includes("legislativa") || discipline.includes("poradenstvi") || discipline.includes("skolstvi")) return "high";
  if (discipline.includes("historie") || meta.personalityAnchor || meta.historicalAnchor) return "medium-high";
  return "medium-high";
}

function deriveInstitutionPair(questionText, correctText) {
  const combined = toAscii(`${questionText} ${correctText}`);
  if (combined.includes("spz") && combined.includes("skol")) return "škola × ŠPZ";
  if (combined.includes("zprava") && combined.includes("doporucen")) return "zpráva × doporučení";
  if (combined.includes("ppp") && combined.includes("spc")) return "PPP × SPC";
  return "";
}

const questionPath = findSourceFile(["finalni nejt", "50 otazek"]);
const notesPath = findSourceFile(["battery10_hard_metadata_source_notes"]);
const questionsText = fs.readFileSync(questionPath, "utf8");
const notesText = fs.readFileSync(notesPath, "utf8");

const batteryLabel = extractHeaderValue(notesText, "batteryLabel") || "Baterie 10";
const batteryTitle = extractHeaderValue(notesText, "batteryTitle") || "Legislativa, osobnosti a dějiny oboru";
const batterySubtitle = extractHeaderValue(notesText, "batterySubtitle") || "Přesně rozlišovací baterie zaměřená na školskou legislativu, dějiny speciální pedagogiky, logopedii, surdopedii, tyflopedii a diagnostické autory.";
const batteryPurpose = "Ověřit finální výběrovou připravenost v hard režimu: přesně rozlišit blízké legislativní postupy, odborné osobnosti, historické mezníky a diagnostické autory bez opory ve stylu zadání.";

const questionMap = new Map(parseQuestions(questionsText).map((item) => [item.number, item]));
const sectionMap = parseMetadataSections(notesText);

if (questionMap.size !== 50) throw new Error(`Expected 50 questions, got ${questionMap.size}`);
if (sectionMap.size !== 50) throw new Error(`Expected 50 metadata sections, got ${sectionMap.size}`);

const sourceItems = [];
const runtimeItems = [];
const batteryQuestions = [];

for (let number = 1; number <= 50; number += 1) {
  const globalId = `B10Q${String(number).padStart(2, "0")}`;
  const question = questionMap.get(number);
  const meta = sectionMap.get(globalId);
  if (!question || !meta) throw new Error(`Missing source for ${globalId}`);

  const sourceCorrectLetter = cleanValue(meta.sourceCorrectLetter || "").toUpperCase();
  const correctIndex = ["A", "B", "C", "D"].indexOf(sourceCorrectLetter);
  if (correctIndex < 0) throw new Error(`Invalid correct letter for ${globalId}`);

  const correctOptionText = question.options[correctIndex];
  const requiredDiscrimination = cleanValue(
    meta.requiredDiscrimination ||
    meta.distinctionAxis ||
    `Odlišit ${correctOptionText} od blízkých možností v rámci ${meta.subtopic || "daného tématu"}.`
  );
  const questionType = cleanValue(meta.questionType || meta.questionTypeSuggested || "general-discrimination");
  const distractorType = cleanValue(meta.distractorType || meta.distractorTypeSuggested || "general");
  const trapPattern = cleanValue(meta.trapPattern || meta.trapPatternSeed || "general");
  const conceptFamily = cleanValue(meta.conceptFamily || meta.subtopic || meta.discipline || "hard mode");
  const legislationRef = findLegislationRef(meta);
  const historicalAnchor = cleanValue(meta.historicalAnchor || "");
  const personalityAnchor = cleanValue(meta.personalityAnchor || "");
  const signalPattern = extractSignalPattern(meta, correctOptionText);
  const signalHint = cleanValue(meta.signalHint || deriveSignalHint(meta));
  const explanationCorrect = cleanValue(meta.explanationCorrect || deriveExplanationCorrect(meta, correctOptionText));
  const explanationDistractor = cleanValue(meta.explanationDistractor || deriveExplanationDistractor(meta));
  const commonMisconception = cleanValue(meta.commonMisconception || deriveCommonMisconception(meta));
  const whyWrongCategory = cleanValue(meta.whyWrongCategory || deriveWhyWrong(meta));
  const microLesson = cleanValue(meta.microLesson || deriveMicroLesson(meta));
  const recommendedRecallPrompt = cleanValue(meta.recommendedRecallPrompt || deriveRecallPrompt(meta));
  const likelyErrorTypes = deriveLikelyErrors(meta);
  const repairTags = deriveRepairTags({ ...meta, conceptFamily });
  const recommendedRepairFilters = dedupe([conceptFamily, cleanValue(meta.subtopic), questionType]);
  const attentionRisk = deriveAttentionRisk(meta);
  const institutionPair = deriveInstitutionPair(question.text, correctOptionText);
  const formulationFlags = [];
  const conceptTags = dedupe([conceptFamily, cleanValue(meta.subtopic), cleanValue(meta.discipline), "hard mode", "baterie 10"]);

  batteryQuestions.push({
    number,
    text: question.text,
    options: question.options,
    correct: correctIndex,
    correctLetter: sourceCorrectLetter
  });

  const sourceItem = {
    globalId,
    batteryId: 10,
    batteryLabel,
    batteryTitle,
    batterySubtitle,
    questionNumber: number,
    questionText: question.text,
    options: {
      A: question.options[0],
      B: question.options[1],
      C: question.options[2],
      D: question.options[3]
    },
    correctOptionText,
    discipline: cleanValue(meta.discipline),
    subtopic: cleanValue(meta.subtopic),
    conceptFamily,
    conceptTags,
    distinctionAxis: cleanValue(meta.distinctionAxis || requiredDiscrimination),
    questionType,
    distractorType,
    trapPattern,
    institutionDomain: cleanValue(meta.institutionDomain || ""),
    timeSensitivity: cleanValue(meta.timeSensitivity || "stable"),
    legislationRef,
    historicalAnchor,
    personalityAnchor,
    requiredDiscrimination,
    signalPattern,
    signalHint,
    explanationCorrect,
    explanationDistractor,
    commonMisconception,
    whyWrongCategory,
    microLesson,
    recommendedRecallPrompt,
    metadataSourceRef: cleanValue(meta.metadataSourceRef || globalId),
    likelyErrorTypes,
    repairTags,
    attentionRisk,
    metadataConfidence: "0.78",
    curationStatus: "generated-from-outline-integrated",
    sourceCorrectLetter,
    reviewedCorrectLetter: sourceCorrectLetter,
    effectiveCorrectLetter: sourceCorrectLetter,
    sourceCorrectOptionText: correctOptionText,
    reviewedCorrectOptionText: correctOptionText,
    answerAuditStatus: "source-note-aligned",
    answerAuditNote: "Položka byla vygenerována z finálního testového markdownu a z autorovacích source notes; runtime metadata byla zúžena na aktuálně používané pole simulátoru.",
    answerAuditConfidence: "medium",
    knowledgeTarget: requiredDiscrimination,
    styleParityCheck: "Možnosti mají zůstat věcně blízko a rozhodovat má přesné obsahové rozlišení, ne stylistická nápověda.",
    keyProof: correctOptionText,
    legalFreshnessRequired: toAscii(meta.timeSensitivity || "").includes("current"),
    authoringVersion: "battery10-generated-v1",
    formulationFlags,
    institutionPair,
    knowledgeDemandLevel: "high",
    processDemandLevel: "high",
    recommendedRepairFilters,
    revisionPriority: "high",
    metadataOrigin: "battery10-source-outline",
    schoolLevelMatrix: "hard final / bez omezení",
    benefitOrEntitlementType: "",
    authoringStatus: "generated-from-outline-and-integrated"
  };
  sourceItems.push(sourceItem);

  runtimeItems.push({
    globalId,
    batteryId: 10,
    questionNumber: number,
    sourceCorrectLetter,
    reviewedCorrectLetter: sourceCorrectLetter,
    effectiveCorrectLetter: sourceCorrectLetter,
    discipline: sourceItem.discipline,
    subtopic: sourceItem.subtopic,
    conceptTags,
    questionType,
    distractorType,
    trapPattern,
    requiredDiscrimination,
    signalPattern,
    signalHint,
    attentionRisk,
    formulationFlags,
    questionCore: sourceItem.subtopic,
    explanationCorrect,
    explanationDistractor,
    commonMisconception,
    whyWrongCategory,
    microLesson,
    recommendedRecallPrompt,
    likelyErrorTypes,
    repairTags,
    institutionPair,
    recommendedRepairFilters,
    revisionPriority: "high",
    distinctionAxis: sourceItem.distinctionAxis
  });
}

const batteryObject = {
  id: 10,
  label: batteryLabel,
  title: batteryTitle,
  subtitle: batterySubtitle,
  purpose: batteryPurpose,
  difficulty: "velmi vysoká",
  dominant: [
    "školská legislativa a poradenský proces",
    "historie speciální pedagogiky a oborové osobnosti",
    "dějiny logopedie a foniatrie",
    "surdopedické směry a osobnosti",
    "tyflopedie a diagnostika zrakového vnímání",
    "přesné rozlišování blízkých pravidel, autorů a historických kotev"
  ],
  breakdown: [
    "25× legislativně-procesní položky",
    "7× české a slovenské osobnosti speciální pedagogiky",
    "3× psychopedie a rané dějiny diagnostiky",
    "6× dějiny logopedie a foniatrie",
    "4× surdopedie – směry a osobnosti",
    "5× tyflopedie a zraková diagnostika"
  ],
  tags: [
    "finální nejtěžší baterie",
    "legislativa",
    "osobnosti oboru",
    "logopedie",
    "surdopedie",
    "tyflopedie",
    "UPOL"
  ],
  durationMinutes: 30,
  questions: batteryQuestions
};

const runtimeBatteryJs = `(function(){\n  "use strict";\n  window.__SCIO_SPLIT_RUNTIME__ = window.__SCIO_SPLIT_RUNTIME__ || { basic: { batteries: {}, metadata: {} }, hard: { batteries: {}, metadata: {} } };\n  window.__SCIO_SPLIT_RUNTIME__.hard.batteries["10"] = ${JSON.stringify(batteryObject, null, 2)};\n})();\n`;

const runtimeMetadataJs = `(function(){\n  "use strict";\n  window.__SCIO_SPLIT_RUNTIME__ = window.__SCIO_SPLIT_RUNTIME__ || { basic: { batteries: {}, metadata: {} }, hard: { batteries: {}, metadata: {} } };\n  window.__SCIO_SPLIT_RUNTIME__.hard.metadata["10"] = ${JSON.stringify(runtimeItems, null, 2)};\n})();\n`;

const sourceJson = JSON.stringify({ batteryId: 10, itemCount: sourceItems.length, items: sourceItems }, null, 2) + "\n";

fs.writeFileSync(path.join(root, "data", "hard", "batteries", "battery_10.js"), runtimeBatteryJs, "utf8");
fs.writeFileSync(path.join(root, "data", "hard", "metadata", "battery_10.metadata.js"), runtimeMetadataJs, "utf8");
fs.writeFileSync(path.join(root, "data_source", "hard", "metadata", "battery_10.source.json"), sourceJson, "utf8");

console.log(JSON.stringify({
  questionFile: path.basename(questionPath),
  metadataNotesFile: path.basename(notesPath),
  questions: batteryQuestions.length,
  runtimeMetadata: runtimeItems.length
}, null, 2));
