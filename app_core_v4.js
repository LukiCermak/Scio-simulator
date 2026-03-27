
  "use strict";
  // ═══════════════════════════════════════════
  // 1. CONSTANTS & SCHEMA
  // ═══════════════════════════════════════════
  const SCHEMA_VERSION = 4;
  const LETTERS = ["A","B","C","D"];
  const STORAGE_KEYS = { CURRENT_SESSION:"sciosim_v4_currentSession", HISTORY:"sciosim_v4_history", SETTINGS:"sciosim_v4_settings", PROGRESS:"sciosim_v4_progress" };
  const LEGACY_STORAGE_KEYS = { CURRENT_SESSION:"sciosim_v3_currentSession", HISTORY:"sciosim_v3_history", SETTINGS:"sciosim_v3_settings", PROGRESS:"sciosim_v3_progress" };
  const SLOW_THRESHOLD_MS = 60000;
  const FAST_THRESHOLD_MS = 5000;
  const REVISIT_THRESHOLD = 3;
  const MAX_HISTORY = 50;
  const RISK_PATTERNS = [/\bnenì\b/gi,/\bnení\b/gi,/\bnejspíše\b/gi,/\bprimárně\b/gi,/\bnejpřesněji\b/gi,/\bnejčastěji\b/gi,/\btypicky\b/gi,/\bv rámci školství\b/gi,/\bv rámci zdravotnictví\b/gi,/\bv rámci sociální oblasti\b/gi,/\bprvní krok\b/gi,/\bnejvhodnější\b/gi,/\bnejvýrazněji\b/gi,/\bnejlépe\b/gi,/\bnesprávně\b/gi,/\bneplatí\b/gi,/\bneodpovídá\b/gi];
  const ERROR_LABELS = {
    "no-answer":"Bez odpovědi",
    "missed-negation":"Přehlédnutá negace",
    "institution-confusion":"Záměna institucí",
    "concept-confusion":"Záměna pojmů",
    "terminology-confusion":"Záměna terminologie",
    "misread-question":"Odpověď na jinak pochopenou otázku",
    "reading-misalignment":"Odpověď na jinak pochopenou otázku",
    "impulsive-click":"Ukvapené rozhodnutí",
    "impulsive-decision":"Ukvapené rozhodnutí",
    "overthinking":"Překombinování",
    "time-pressure":"Tlak času",
    "false-confidence":"Falešná jistota",
    "distractor-trap":"Past distraktoru",
    "attention-slip":"Nepozornost",
    "inattention":"Nepozornost",
    "knowledge-gap":"Obsahová slabina"
  };

  const analyticsBridge = {
    normalizeProgress: typeof window.normalizeProgressV4 === "function" ? window.normalizeProgressV4 : null,
    buildStudyDashboardSummary: typeof window.buildStudyDashboardSummary === "function" ? window.buildStudyDashboardSummary : (typeof window.buildWeaknessSummary === "function" ? window.buildWeaknessSummary : null),
    buildRecommendations: typeof window.buildRecommendations === "function" ? window.buildRecommendations : null,
    updateProgressFromSession: typeof window.updateProgressFromSession === "function" ? window.updateProgressFromSession : null,
    buildTrendSummary: typeof window.buildTrendSummary === "function" ? window.buildTrendSummary : null,
    getErrorLabel: typeof window.getErrorLabel === "function" ? window.getErrorLabel : null,
    startRepairModeByDiscipline: typeof window.startRepairModeByDiscipline === "function" ? window.startRepairModeByDiscipline : null,
    startRepairModeBySubtopic: typeof window.startRepairModeBySubtopic === "function" ? window.startRepairModeBySubtopic : null,
    startRepairModeByErrorType: typeof window.startRepairModeByErrorType === "function" ? window.startRepairModeByErrorType : null,
    startRepairModeByFormulation: typeof window.startRepairModeByFormulation === "function" ? window.startRepairModeByFormulation : null,
    startRepairModeByInstitutionPair: typeof window.startRepairModeByInstitutionPair === "function" ? window.startRepairModeByInstitutionPair : null,
    startRepairModeHighConfidenceWrong: typeof window.startRepairModeHighConfidenceWrong === "function" ? window.startRepairModeHighConfidenceWrong : null,
    startRepairModeSlowQuestions: typeof window.startRepairModeSlowQuestions === "function" ? window.startRepairModeSlowQuestions : null,
    startRepairModeRevisionQueue: typeof window.startRepairModeRevisionQueue === "function" ? window.startRepairModeRevisionQueue : null
  };



// ═══════════════════════════════════════════
// 2. DATA NORMALIZATION (BASE + HARD)
// ═══════════════════════════════════════════
const RAW_BATTERIES_BASE = Array.isArray(window.SCIO_V4_RAW_BATTERIES) ? window.SCIO_V4_RAW_BATTERIES : [];
const RAW_BATTERIES_HARD = Array.isArray(window.SCIO_V4_RAW_BATTERIES_HARD) ? window.SCIO_V4_RAW_BATTERIES_HARD : [];

function normalizeDifficultyMode(value) {
  return String(value || "").trim().toLowerCase() === "hard" ? "hard" : "basic";
}
function getDifficultyModeLabel(mode) {
  return normalizeDifficultyMode(mode) === "hard" ? "Pokročilá" : "Základní";
}
function loadMetadataExport(mode = "basic") {
  return normalizeDifficultyMode(mode) === "hard"
    ? (window.metadataExportHard || { schemaVersion: 0, items: [] })
    : (window.metadataExport || { schemaVersion: 0, items: [] });
}
function loadBattery8MetadataMap(mode = "basic") {
  return normalizeDifficultyMode(mode) === "hard"
    ? (window.battery8MapHard || { schemaVersion: 0, items: [] })
    : (window.battery8Map || { schemaVersion: 0, items: [] });
}
function normalizeMetadataItem(item) {
  const base = item && typeof item === "object" ? item : {};
  return {
    globalId: String(base.globalId || "").trim(),
    batteryId: Number(base.batteryId || 0),
    batteryLabel: String(base.batteryLabel || "").trim(),
    batteryTitle: String(base.batteryTitle || "").trim(),
    batterySubtitle: String(base.batterySubtitle || "").trim(),
    questionNumber: Number(base.questionNumber || 0),
    sourceCorrectLetter: String(base.sourceCorrectLetter || base.correctLetter || "").trim().toUpperCase(),
    reviewedCorrectLetter: String(base.reviewedCorrectLetter || base.correctLetter || base.sourceCorrectLetter || "").trim().toUpperCase(),
    effectiveCorrectLetter: String(base.effectiveCorrectLetter || base.reviewedCorrectLetter || base.correctLetter || base.sourceCorrectLetter || "").trim().toUpperCase(),
    discipline: String(base.discipline || "speciální pedagogika").trim(),
    subtopic: String(base.subtopic || "obecné téma").trim(),
    conceptTags: Array.isArray(base.conceptTags) ? base.conceptTags.map(String) : [],
    questionType: String(base.questionType || "general-discrimination").trim(),
    distractorType: String(base.distractorType || "general").trim(),
    trapPattern: String(base.trapPattern || "general").trim(),
    requiredDiscrimination: String(base.requiredDiscrimination || "Rozlišit správné jádro otázky.").trim(),
    signalPattern: Array.isArray(base.signalPattern) ? base.signalPattern.map(String) : [],
    signalHint: String(base.signalHint || "").trim(),
    attentionRisk: String(base.attentionRisk || "medium").trim(),
    formulationFlags: Array.isArray(base.formulationFlags) ? base.formulationFlags.map(String) : [],
    questionCore: String(base.questionCore || "").trim(),
    explanationCorrect: String(base.explanationCorrect || "").trim(),
    explanationDistractor: String(base.explanationDistractor || "").trim(),
    commonMisconception: String(base.commonMisconception || "").trim(),
    whyWrongCategory: String(base.whyWrongCategory || "").trim(),
    microLesson: String(base.microLesson || "").trim(),
    recommendedRecallPrompt: String(base.recommendedRecallPrompt || base.recallPrompt || "").trim(),
    likelyErrorTypes: Array.isArray(base.likelyErrorTypes) ? base.likelyErrorTypes.map(String) : [],
    repairTags: Array.isArray(base.repairTags) ? base.repairTags.map(String) : [],
    institutionPair: String(base.institutionPair || "").trim(),
    knowledgeDemandLevel: String(base.knowledgeDemandLevel || "medium").trim(),
    processDemandLevel: String(base.processDemandLevel || "medium").trim(),
    recommendedRepairFilters: Array.isArray(base.recommendedRepairFilters) ? base.recommendedRepairFilters.map(String) : [],
    revisionPriority: String(base.revisionPriority || "medium").trim(),
    answerAuditStatus: String(base.answerAuditStatus || "unknown").trim(),
    answerAuditNote: String(base.answerAuditNote || "").trim(),
    metadataOrigin: String(base.metadataOrigin || "metadata-export").trim(),
    metadataSourceRef: String(base.metadataSourceRef || base.globalId || "").trim(),
    metadataConfidence: base.metadataConfidence ?? base.matchConfidence ?? 0.5,
    curationStatus: String(base.curationStatus || "auto-curated-v1").trim()
  };
}
function normalizeBattery8MapItem(item) {
  const base = item && typeof item === "object" ? item : {};
  const globalId = `B08Q${String(base.questionNumber || 0).padStart(2, "0")}`;
  const resolved = normalizeMetadataItem({
    globalId,
    batteryId: 8,
    batteryLabel: base.batteryLabel || "Baterie 8",
    batteryTitle: base.batteryTitle || "",
    questionNumber: base.questionNumber || 0,
    sourceCorrectLetter: base.correctLetter || "",
    reviewedCorrectLetter: base.correctLetter || "",
    effectiveCorrectLetter: base.correctLetter || "",
    metadataOrigin: base.metadataOrigin || "battery8-bridge",
    metadataSourceRef: base.metadataSourceRef || base.primarySourceGlobalId || globalId,
    metadataConfidence: base.matchConfidence ?? 0.5,
    curationStatus: (base.resolvedMetadata && base.resolvedMetadata.curationStatus) || base.curationStatus || "battery8-derived-v1",
    ...(base.resolvedMetadata || {})
  });
  return { ...base, globalId, resolvedMetadata: resolved };
}
function buildMetadataIndex(metadataExport) {
  const index = {};
  const items = Array.isArray(metadataExport?.items) ? metadataExport.items : [];
  items.forEach(item => {
    const normalized = normalizeMetadataItem(item);
    if (normalized.globalId) index[normalized.globalId] = normalized;
  });
  return index;
}
function buildBattery8MapIndex(battery8Map) {
  const index = {};
  const items = Array.isArray(battery8Map?.items) ? battery8Map.items : [];
  items.forEach(item => {
    const normalized = normalizeBattery8MapItem(item);
    if (normalized.globalId) index[normalized.globalId] = normalized;
  });
  return index;
}

const METADATA_EXPORT_BASE = loadMetadataExport("basic");
const METADATA_EXPORT_HARD = loadMetadataExport("hard");
const BATTERY8_EXPORT_BASE = loadBattery8MetadataMap("basic");
const BATTERY8_EXPORT_HARD = loadBattery8MetadataMap("hard");

const METADATA_INDEX_BASE = buildMetadataIndex(METADATA_EXPORT_BASE);
const METADATA_INDEX_HARD = buildMetadataIndex(METADATA_EXPORT_HARD);
const BATTERY8_MAP_BASE = buildBattery8MapIndex(BATTERY8_EXPORT_BASE);
const BATTERY8_MAP_HARD = buildBattery8MapIndex(BATTERY8_EXPORT_HARD);

function inferFormulationFlagsFromText(text) {
  const src = String(text || "").toLowerCase();
  const flags = [];
  if (/\bnenì\b|\bnení\b|\bnesprávně\b|\bneplatí\b|\bneodpovídá\b/.test(src)) flags.push("negace");
  if (/\bnejpřesněji\b|\bnejlépe\b|\bnejvhodnější\b|\bnejvýrazněji\b/.test(src)) flags.push("superlativní přesnost");
  if (/\bprvní krok\b/.test(src)) flags.push("první krok");
  if (/\bv rámci školství\b|\bv rámci zdravotnictví\b|\bv rámci sociální oblasti\b/.test(src)) flags.push("systémová hranice");
  if (/\brole\b|\bodpovědnost\b|\bkompetenc/.test(src)) flags.push("odpovědnost role");
  if (/\bdokument\b|\bzpráva\b|\bdoporučen/.test(src)) flags.push("funkce dokumentu");
  if (/\btypicky\b|\bnejčastěji\b/.test(src)) flags.push("typičnost");
  return flags;
}
function inferInstitutionPair(metadata, questionText) {
  if (metadata?.institutionPair) return metadata.institutionPair;
  const src = `${questionText || ""} ${(metadata?.questionCore) || ""} ${(metadata?.requiredDiscrimination) || ""}`;
  const pairs = [
    "PPP vs SPC","ŠPZ vs škola","ŠPP vs ŠPZ","škola vs rodina","škola vs sociální služba","škola vs zdravotnické zařízení",
    "klinický logoped vs školská podpora","SVP vs PPP","SPC vs běžná školní podpora","zpráva vs doporučení","PLPP vs IVP",
    "diagnostika vs realizace podpory","odborné posouzení vs každodenní odpovědnost školy","školství vs zdravotnictví vs sociální oblast","MŠMT vs MPSV"
  ];
  return pairs.find(pair => src.toLowerCase().includes(pair.toLowerCase())) || "";
}
function buildReviewFallbacks(question, batteryLabel) {
  const qText = typeof question === "string" ? question : String(question?.text || "");
  const battery = typeof question === "string" ? (batteryLabel || "Neznámá baterie") : (batteryLabel || question?.batteryLabel || "Neznámá baterie");
  return {
    globalId: "",
    batteryId: 0,
    questionNumber: 0,
    discipline: "speciální pedagogika",
    subtopic: "obecné téma",
    conceptTags: [battery],
    questionType: "general-discrimination",
    distractorType: "general",
    trapPattern: "general",
    requiredDiscrimination: "Rozlišit, která možnost nejlépe odpovídá zadání.",
    signalPattern: [],
    signalHint: "Hledej výraz, který mění význam otázky.",
    attentionRisk: "medium",
    formulationFlags: inferFormulationFlagsFromText(qText),
    questionCore: "Rozhodnout, která odpověď nejlépe vystihuje jádro zadání.",
    explanationCorrect: "Správná možnost odpovídá jádru otázky přesněji než ostatní varianty.",
    explanationDistractor: "Lákavé možnosti jsou tematicky blízké, ale posouvají význam jinam.",
    commonMisconception: "Častou chybou je povrchní čtení nebo záměna blízkých pojmů.",
    whyWrongCategory: "Chyba obvykle souvisí s nepřesným rozlišením významu nebo formulace.",
    microLesson: "Vrať se k jádru otázky a nejdřív si pojmenuj, co přesně máš rozlišit.",
    recommendedRecallPrompt: "Jaký rozdíl bylo potřeba v otázce rozlišit?",
    likelyErrorTypes: ["concept-confusion"],
    repairTags: [battery, "general-discrimination"],
    institutionPair: inferInstitutionPair(null, qText),
    knowledgeDemandLevel: "medium",
    processDemandLevel: "medium",
    recommendedRepairFilters: [],
    revisionPriority: "medium",
    sourceCorrectLetter: "",
    reviewedCorrectLetter: "",
    effectiveCorrectLetter: "",
    answerAuditStatus: "fallback",
    answerAuditNote: "",
    metadataOrigin: "fallback",
    metadataSourceRef: "",
    metadataConfidence: 0.2,
    curationStatus: "fallback"
  };
}
function resolveQuestionEffectiveCorrect(question, metadataItem) {
  const letter = String(metadataItem?.effectiveCorrectLetter || metadataItem?.reviewedCorrectLetter || metadataItem?.sourceCorrectLetter || question?.correctLetter || LETTERS[Number(question?.correct || 0)] || "A").toUpperCase();
  const idx = LETTERS.indexOf(letter);
  return idx >= 0 ? idx : Number.isInteger(question?.correct) ? question.correct : 0;
}
function getMetadataIndexes(datasetKey = "basic") {
  return normalizeDifficultyMode(datasetKey) === "hard"
    ? { metadataIndex: METADATA_INDEX_HARD, battery8Map: BATTERY8_MAP_HARD }
    : { metadataIndex: METADATA_INDEX_BASE, battery8Map: BATTERY8_MAP_BASE };
}
function normalizeQuestionMetadata(question, context) {
  const { batteryId, batteryLabel, questionNumber, globalId, datasetKey } = context;
  const indexes = getMetadataIndexes(datasetKey);
  let metadataItem = null;
  if (batteryId === 8 && indexes.battery8Map[globalId]) metadataItem = indexes.battery8Map[globalId].resolvedMetadata;
  else if (indexes.metadataIndex[globalId]) metadataItem = indexes.metadataIndex[globalId];
  const fallback = buildReviewFallbacks(question, batteryLabel);
  const merged = { ...fallback, ...(metadataItem || {}) };
  merged.globalId = merged.globalId || globalId;
  merged.batteryId = merged.batteryId || batteryId;
  merged.questionNumber = merged.questionNumber || questionNumber;
  merged.formulationFlags = Array.from(new Set([...(merged.formulationFlags || []), ...inferFormulationFlagsFromText(question?.text || "")]));
  merged.institutionPair = inferInstitutionPair(merged, question?.text || "");
  if (!merged.signalPattern?.length && merged.formulationFlags.length) merged.signalPattern = merged.formulationFlags.slice(0, 3);
  if (!merged.recommendedRepairFilters?.length) merged.recommendedRepairFilters = [merged.subtopic, merged.discipline, merged.questionType, merged.institutionPair].filter(Boolean);
  if (!merged.likelyErrorTypes?.length) merged.likelyErrorTypes = [merged.institutionPair ? "institution-confusion" : "concept-confusion"];
  if (!merged.repairTags?.length) merged.repairTags = [merged.discipline, merged.subtopic, merged.questionType].filter(Boolean);
  if (!merged.questionCore) merged.questionCore = fallback.questionCore;
  if (!merged.explanationCorrect) merged.explanationCorrect = fallback.explanationCorrect;
  if (!merged.explanationDistractor) merged.explanationDistractor = fallback.explanationDistractor;
  if (!merged.microLesson) merged.microLesson = fallback.microLesson;
  if (!merged.recommendedRecallPrompt) merged.recommendedRecallPrompt = fallback.recommendedRecallPrompt;
  return merged;
}
function attachMetadataToBatteryQuestions(questions, context) {
  return questions.map((q, i) => {
    const questionNumber = Number.isInteger(q?.number) ? q.number : i + 1;
    const globalId = `B${String(context.batteryId).padStart(2, "0")}Q${String(questionNumber).padStart(2, "0")}`;
    return { ...q, metadata: normalizeQuestionMetadata(q, { ...context, questionNumber, globalId }) };
  });
}

function normalizeBattery(b, i, datasetKey = "basic") {
  const bId = Number.isInteger(b?.id) ? b.id : i + 1;
  const bLabel = String(b?.label ?? `Baterie ${i + 1}`).trim();
  const questions = Array.isArray(b?.questions) ? b.questions.map((q, qi) => normalizeQuestion(q, qi, bId, bLabel, datasetKey)) : [];
  return {
    id: bId,
    label: bLabel,
    title: String(b?.title ?? "").trim(),
    subtitle: String(b?.subtitle ?? "").trim(),
    purpose: String(b?.purpose ?? "").trim(),
    difficulty: String(b?.difficulty ?? "střední").trim(),
    dominant: Array.isArray(b?.dominant) ? b.dominant.map(x => String(x).trim()) : [],
    breakdown: Array.isArray(b?.breakdown) ? b.breakdown.map(x => String(x).trim()) : [],
    tags: Array.isArray(b?.tags) ? b.tags.map(x => String(x).trim()) : [],
    durationMinutes: Number.isFinite(Number(b?.durationMinutes)) ? Number(b.durationMinutes) : 30,
    questionCount: questions.length,
    questions,
    validation: b?.validation ?? null,
    datasetKey: normalizeDifficultyMode(datasetKey)
  };
}

const BASIC_BATTERIES = RAW_BATTERIES_BASE.map((b, i) => normalizeBattery(b, i, "basic")).sort((a, b) => a.id - b.id);
const HARD_BATTERIES = RAW_BATTERIES_HARD.map((b, i) => normalizeBattery(b, i, "hard")).sort((a, b) => a.id - b.id);

const BASIC_BATTERY_MAP = Object.fromEntries(BASIC_BATTERIES.map(b => [b.id, b]));
const HARD_BATTERY_MAP = Object.fromEntries(HARD_BATTERIES.map(b => [b.id, b]));

const DATASETS = {
  basic: {
    key: "basic",
    label: getDifficultyModeLabel("basic"),
    batteries: BASIC_BATTERIES,
    batteryMap: BASIC_BATTERY_MAP,
    metadataExport: METADATA_EXPORT_BASE,
    battery8Map: BATTERY8_EXPORT_BASE
  },
  hard: {
    key: "hard",
    label: getDifficultyModeLabel("hard"),
    batteries: HARD_BATTERIES,
    batteryMap: HARD_BATTERY_MAP,
    metadataExport: METADATA_EXPORT_HARD,
    battery8Map: BATTERY8_EXPORT_HARD
  }
};

const BATTERIES = BASIC_BATTERIES;
const BATTERY_MAP = BASIC_BATTERY_MAP;

function getDatasetByMode(mode = "basic") {
  const key = normalizeDifficultyMode(mode);
  if (key === "hard" && DATASETS.hard.batteries.length) return DATASETS.hard;
  return DATASETS.basic;
}
function getActiveDifficultyMode() {
  const preferred = appState?.settings?.difficultyMode || appState?.currentSession?.difficultyMode || "basic";
  return getDatasetByMode(preferred).key;
}
function getActiveDataset() { return getDatasetByMode(getActiveDifficultyMode()); }
function getActiveBatteries() { return getActiveDataset().batteries; }
function getActiveBatteryMap() { return getActiveDataset().batteryMap; }
function getAllDatasetsQuestionCount() {
  return Object.values(DATASETS).reduce((sum, dataset) => sum + dataset.batteries.reduce((acc, battery) => acc + battery.questions.length, 0), 0);
}
function getBatteryDisplayBadge(batteryId) { return batteryId === 8 ? "+1" : batteryId; }
function formatDifficultyBadgeText(mode) { return `obtížnost: ${getDifficultyModeLabel(mode)}`; }

  const BATTERY_DETAIL_COPY = {
    1:{purposeText:"Baterie buduje pevnou orientaci v klasickém disciplinárním členění speciální pedagogiky a v současném širším rámci oboru.",profileParagraphs:["V celé bance funguje jako vstupní základ. Kdo tady chybuje v rozlišení psychopedie, somatopedie, tyflopedie, surdopedie, etopedie a logopedie, přenáší tyto chyby i do intervencí, poradenství a komunikace.","Smyslem není encyklopedie názvů, ale stabilní oborová orientace."]},
    2:{purposeText:"Baterie přesouvá pozornost od názvů ke konkrétním projevům a funkčním dopadům znevýhodnění.",profileParagraphs:["Je to most mezi definicí a praxí. Nestačí poznat skupinu; musíš rozumět tomu, jak se charakteristiky promítají do učení a adaptivního fungování.","Silná stránka je diferenciální rozlišování: podobné jevy vypadají blízce, ale mají jinou podstatu."]},
    3:{purposeText:"Tato baterie testuje intervenční uvažování: ne jen co daný problém je, ale co se s ním odborně dělá.",profileParagraphs:["Je klíčová pro převod znalosti do podpory.","Baterie hlídá profesní přesnost: správný postup není libovolná dobrá vůle."]},
    4:{purposeText:"Baterie ověřuje komunikaci jako profesní kompetenci speciálního pedagoga.",profileParagraphs:["Zkouší komunikaci s osobami s různým typem znevýhodnění i s rodiči.","V přípravě je důležitá proto, že komunikační chyba nevzniká jen neznalostí diagnózy."]},
    5:{purposeText:"Baterie cílí na školské poradenství a orientaci v systému MŠMT.",profileParagraphs:["Je to systémová osa celé banky.","Smyslem není memorovat zkratky, ale chápat poradenský proces."]},
    6:{purposeText:"Tato baterie rozšiřuje přípravu mimo školství směrem k sociálním službám a zdravotnictví.",profileParagraphs:["Patří sem raná péče, osobní asistence, OSPOD, ale i hranice mezi školskou, sociální a zdravotnickou oblastí.","V praxi právě tady často vznikají záměny."]},
    7:{purposeText:"Tato profilová baterie staví speciální pedagogiku jako poradenský obor.",profileParagraphs:["Těžiště je v poradenském procesu, interpretaci potřeb klienta.","Baterie sleduje etiku, hranice kompetencí a meziresortní orientaci."]},
    8:{purposeText:"Finální syntetická baterie je nejtvrdší simulace přijímačkového testu.",profileParagraphs:["Je postavená na rozlišování velmi podobných možností a na práci s distraktory.","V přípravě funguje jako závěrečný stres test."]}
  };


function getBatteryDetailCopy(battery) {
  if (!battery) return null;
  const baseCopy = BATTERY_DETAIL_COPY[battery.id] || {};
  if ((battery.datasetKey || getActiveDifficultyMode()) !== "hard") return baseCopy;
  return {
    purposeText: battery.purpose || baseCopy.purposeText || "",
    profileParagraphs: [
      "Toto je pokročilá paralelní vrstva stejné tematické oblasti. Počítá s vyšší potřebou diferenciace, syntézy a procesního rozhodování.",
      "Dashboard dál agreguje výsledky napříč základním i pokročilým režimem, ale výběr baterie a samotný běh čerpají jen z právě zvolené vrstvy."
    ]
  };
}
function updateSelectionState() {
  const activeMap = getActiveBatteryMap();
  const activeMode = getActiveDifficultyMode();
  const battery = activeMap[appState.selectedBatteryId] || null;
  const note = $("selectionNote");
  if (note) {
    note.innerHTML = battery
      ? `<strong>Vybraná baterie:</strong> ${escapeHtml(battery.label)} – ${escapeHtml(battery.title)} <span class="inline-mode-chip">${escapeHtml(getDifficultyModeLabel(activeMode))}</span>`
      : `<strong>Vybraná baterie:</strong> zatím není zvolena žádná varianta. <span class="inline-mode-chip">${escapeHtml(getDifficultyModeLabel(activeMode))}</span>`;
  }
  if ($("startTestBtn")) $("startTestBtn").disabled = !battery;
}

  // ═══════════════════════════════════════════
  // 3. UTILITIES
  // ═══════════════════════════════════════════
  function generateId() { return Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
  function escapeHtml(t) { const d=document.createElement("div"); d.textContent=t; return d.innerHTML; }
function escapeAttr(v) { return String(v ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function formatTime(s) { const m=Math.floor(s/60),sec=s%60; return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`; }
  function formatDate(iso) { if(!iso) return "—"; try{const d=new Date(iso); return d.toLocaleDateString("cs-CZ",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch(e){return "—";} }
  function formatModeLabel(mode) { return mode==="reading-training" ? "Trénink čtení zadání" : mode==="repair" ? "Opravná sada" : "Simulace"; }
  function hasConfidenceTracking(session) {
    const s = session || appState.currentSession;
    if (!s) return false;
    return !!(s.ui?.requireConfidence || s.questionStates?.some(q => q.confidence !== null));
  }
  function renderMiniQuestionBadges(indexes, emptyLabel = "—") {
    if (!Array.isArray(indexes) || indexes.length === 0) return `<span>${escapeHtml(emptyLabel)}</span>`;
    return `<span class="mini-q-badge-list">${indexes.map(idx => `<span class="mini-q-badge" title="Otázka ${idx + 1}">${idx + 1}</span>`).join("")}</span>`;
  }
  function median(arr) { if(!arr.length) return 0; const s=[...arr].sort((a,b)=>a-b); const m=Math.floor(s.length/2); return s.length%2?s[m]:(s[m-1]+s[m])/2; }
  function safeParse(json, fb) { if(!json) return fb; try { const r = JSON.parse(json); return r!==null ? r : fb; } catch(e) { return fb; } }
  function shuffleArray(items) { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function $(id) { return document.getElementById(id); }

  // ═══════════════════════════════════════════
  // 4. STORAGE API
  // ═══════════════════════════════════════════
  
function loadSettings() {
  const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  const saved = safeParse(raw, null);
  const defaults = getDefaultSettings();
  if (saved && saved.schemaVersion === SCHEMA_VERSION) {
    return {
      ...defaults,
      ...saved,
      difficultyMode: getDatasetByMode(saved.difficultyMode || defaults.difficultyMode).key
    };
  }
  return defaults;
}

  function saveSettings() { try { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(appState.settings)); } catch(e){} }
  function loadHistory() { return safeParse(localStorage.getItem(STORAGE_KEYS.HISTORY), []).slice(0, MAX_HISTORY); }
  function saveHistory() { try { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(appState.history.slice(0, MAX_HISTORY))); } catch(e){} }
  function addHistoryEntry(entry) { appState.history.unshift(entry); if(appState.history.length>MAX_HISTORY) appState.history.length=MAX_HISTORY; saveHistory(); }
  function loadProgress() {
    const raw = safeParse(localStorage.getItem(STORAGE_KEYS.PROGRESS), null);
    if (analyticsBridge.normalizeProgress) return analyticsBridge.normalizeProgress(raw || {});
    return raw || { subtopics: {}, errorTypes: {}, testCount: 0 };
  }
  function saveProgress() {
    try {
      const payload = analyticsBridge.normalizeProgress ? analyticsBridge.normalizeProgress(appState.progress || {}) : appState.progress;
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(payload));
    } catch(e){}
  }
  function loadCurrentSession() {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    const s = safeParse(raw, null);
    if (s && s.schemaVersion === SCHEMA_VERSION) return s;
    return null;
  }
  function saveCurrentSession() { if(!appState.currentSession) return; try { appState.currentSession.updatedAt=new Date().toISOString(); localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(appState.currentSession)); } catch(e){} }
  function clearCurrentSession() { appState.currentSession=null; try { localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION); } catch(e){} }
  function migrateStorageIfNeeded() { 
    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS) && localStorage.getItem("sciosim_v2_settings")) {
      const oldSettings = safeParse(localStorage.getItem("sciosim_v2_settings"), null);
      if (oldSettings) { oldSettings.schemaVersion = SCHEMA_VERSION; localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(oldSettings)); }
    }
    if (!localStorage.getItem(STORAGE_KEYS.HISTORY) && localStorage.getItem("sciosim_v2_history")) {
      const oldHistory = safeParse(localStorage.getItem("sciosim_v2_history"), null);
      if (oldHistory) { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(oldHistory)); }
    }
  }

  // ═══════════════════════════════════════════
  // 5. APP STATE
  // ═══════════════════════════════════════════
  
function getDefaultSettings() {
  return {
    schemaVersion: SCHEMA_VERSION,
    difficultyMode: "basic",
    restoreSessionOnLoad: true,
    defaultMode: "simulation",
    defaultGoal: "attention",
    showKeywordHighlights: false,
    requireConfidence: false,
    hideSidebarDuringReading: false,
    focusModeDefault: false,
    showQuestionFirst: false,
    autoSave: true
  };
}

  const appState = { schemaVersion:SCHEMA_VERSION, appMode:"start", selectedBatteryId:null, currentSession:null, history:[], settings:null, progress:null };

  function createQuestionState(index) {
    return { questionIndex:index, selectedAnswer:null, firstAnswer:null, confidence:null, flagged:false, revisitLater:false, note:"", viewedAtLeastOnce:false, viewCount:0, firstViewedAt:null, lastViewedAt:null, timeSpentMs:0, currentViewStartedAt:null, answerChanges:0, optionsWereInitiallyHidden:false, optionsRevealedAt:null, resolvedStatus:"unanswered", autoErrorType:null, manualErrorType:null };
  }

  // ═══════════════════════════════════════════
  // 6. SESSION BUILDER
  // ═══════════════════════════════════════════
  function buildBalancedTargetIndexes(total) {
    const base=Math.floor(total/LETTERS.length), rem=total%LETTERS.length;
    const counts=Array(LETTERS.length).fill(base);
    shuffleArray([0,1,2,3]).slice(0,rem).forEach(i=>{counts[i]++;});
    return shuffleArray(counts.flatMap((c,i)=>Array(c).fill(i)));
  }
  function remapQuestionOptions(question, targetIdx) {
    const correctOpt = question.options[question.correct];
    const wrongOpts = shuffleArray(question.options.filter((_,i)=>i!==question.correct));
    const mapped=[]; let wp=0;
    for(let i=0;i<LETTERS.length;i++){if(i===targetIdx){mapped.push(correctOpt);}else{mapped.push(wrongOpts[wp]);wp++;}}
    return {...question, options:mapped, correct:targetIdx, correctLetter:LETTERS[targetIdx]};
  }
  
function buildSessionBattery(battery, modeConfig) {
  const targets = buildBalancedTargetIndexes(battery.questions.length);
  const difficultyMode = getDatasetByMode(modeConfig?.difficultyMode || battery?.datasetKey || appState?.settings?.difficultyMode || "basic").key;
  const difficultyLabel = getDifficultyModeLabel(difficultyMode);
  const sessionQs = battery.questions.map((q, i) => {
    const remapped = remapQuestionOptions(q, targets[i]);
    return {
      ...remapped,
      sourceBatteryId: battery.id,
      sourceQuestionNumber: q.number,
      tags: battery.tags || [],
      difficultyMode,
      difficultyLabel
    };
  });
  const dist = sessionQs.reduce((a, q) => { a[LETTERS[q.correct]]++; return a; }, { A:0, B:0, C:0, D:0 });
  const mode = modeConfig?.mode || "simulation";
  const goal = modeConfig?.goal || "attention";
  const now = new Date();
  const endsAt = new Date(now.getTime() + (battery.durationMinutes || 30) * 60 * 1000);
  return {
    schemaVersion: SCHEMA_VERSION,
    sessionId: generateId(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    mode,
    goal,
    difficultyMode,
    difficultyLabel,
    batteryId: battery.id,
    batteryLabel: battery.label,
    batteryTitle: battery.title,
    activeTest: {
      id: battery.id,
      label: battery.label,
      title: battery.title,
      durationMinutes: battery.durationMinutes || 30,
      questions: sessionQs,
      sessionDistribution: dist,
      difficultyMode,
      difficultyLabel
    },
    timing: { startedAt: now.toISOString(), endsAt: endsAt.toISOString(), finishedAt: null },
    ui: {
      currentQuestionIndex: 0,
      reviewVisible: false,
      focusMode: false,
      optionsHiddenUntilReady: modeConfig?.showQuestionFirst || mode === "reading-training",
      showKeywordHighlights: modeConfig?.showKeywordHighlights !== false,
      requireConfidence: modeConfig?.requireConfidence !== false
    },
    metrics: { totalViews: 0, totalAnswerChanges: 0, totalFlagged: 0, totalRevisits: 0 },
    questionStates: sessionQs.map((_, idx) => createQuestionState(idx)),
    results: {
      finished: false,
      timeExpired: false,
      score: null,
      analytics: null,
      diagnosticSummary: null,
      repairCandidateIndexes: [],
      recommendations: [],
      progressCommitted: false,
      progressCommittedAt: null
    }
  };
}

  function buildRepairSessionFromResults(srcSession, candidateIndexes) {
    if(!srcSession || !candidateIndexes.length) return null;
    const srcQs = srcSession.activeTest.questions;
    const repairQs = candidateIndexes.map((ci,i) => ({...srcQs[ci], number:i+1, sourceBatteryId:srcSession.batteryId, sourceQuestionNumber:srcQs[ci].number}));
    const now = new Date();
    const dur = Math.max(10, Math.ceil(repairQs.length * 0.6));
    const endsAt = new Date(now.getTime()+dur*60*1000);
    const dist = repairQs.reduce((a,q)=>{a[LETTERS[q.correct]]++;return a;},{A:0,B:0,C:0,D:0});
    return {
      schemaVersion:SCHEMA_VERSION, sessionId:generateId(), createdAt:now.toISOString(), updatedAt:now.toISOString(),
      mode:"repair", goal:srcSession.goal||"attention", batteryId:srcSession.batteryId, batteryLabel:srcSession.batteryLabel, batteryTitle:`Opravná sada – ${srcSession.batteryLabel}`,
      activeTest:{ id:srcSession.batteryId, label:srcSession.batteryLabel, title:`Opravná sada (${repairQs.length} otázek)`, durationMinutes:dur, questions:repairQs, sessionDistribution:dist },
      timing:{ startedAt:now.toISOString(), endsAt:endsAt.toISOString(), finishedAt:null },
      ui:{ currentQuestionIndex:0, reviewVisible:false, focusMode:false, optionsHiddenUntilReady:false, showKeywordHighlights:true, requireConfidence:appState.settings.requireConfidence },
      metrics:{ totalViews:0, totalAnswerChanges:0, totalFlagged:0 },
      questionStates:repairQs.map((_,i)=>createQuestionState(i)),
      results:{ finished:false, timeExpired:false, score:null, analytics:null, repairCandidateIndexes:[] }
    };
  }

  // ═══════════════════════════════════════════
  // 7. TIMER
  // ═══════════════════════════════════════════
  let timerHandle = null;
  function getRemainingSeconds() {
    const s = appState.currentSession;
    if(!s || !s.timing.endsAt) return 0;
    return Math.max(0, Math.floor((new Date(s.timing.endsAt).getTime()-Date.now())/1000));
  }
  function tickTimer() {
    const rem = getRemainingSeconds();
    const el = $("timer");
    if(el) { el.textContent=formatTime(rem); el.classList.toggle("urgent",rem<120); }
    if(rem<=0) { stopTimer(); finishTest(true); }
  }
  function startTimer() { stopTimer(); tickTimer(); timerHandle=setInterval(tickTimer,1000); }
  function stopTimer() { if(timerHandle){clearInterval(timerHandle);timerHandle=null;} }

  // ═══════════════════════════════════════════
  // 8. ANALYTICS / TRACKING
  // ═══════════════════════════════════════════
  function beginQuestionView(idx) {
    const s=appState.currentSession; if(!s) return;
    const qs=s.questionStates[idx]; if(!qs) return;
    const now=Date.now();
    qs.viewCount++; qs.viewedAtLeastOnce=true;
    if(!qs.firstViewedAt) qs.firstViewedAt=new Date(now).toISOString();
    qs.lastViewedAt=new Date(now).toISOString();
    qs.currentViewStartedAt=now;
    s.metrics.totalViews++;
  }
  function endQuestionView(idx) {
    const s=appState.currentSession; if(!s) return;
    const qs=s.questionStates[idx]; if(!qs||!qs.currentViewStartedAt) return;
    qs.timeSpentMs+=Date.now()-qs.currentViewStartedAt;
    qs.currentViewStartedAt=null;
  }
  function getAnsweredCount() {
    const s=appState.currentSession; if(!s) return 0;
    return s.questionStates.filter(qs=>qs.selectedAnswer!==null).length;
  }
  function calculateScore() {
    const s=appState.currentSession; if(!s) return {correct:0,total:0,answered:0,percentage:0};
    let correct=0; const qs=s.activeTest.questions;
    qs.forEach((q,i)=>{ if(s.questionStates[i].selectedAnswer===q.correct) correct++; });
    return { correct, total:qs.length, answered:getAnsweredCount(), percentage:Math.round(correct/qs.length*100) };
  }
  function calculateAttentionMetrics() {
    const s=appState.currentSession; if(!s) return {};
    const states=s.questionStates; const times=states.map(q=>q.timeSpentMs).filter(t=>t>0);
    const avgTime=times.length?Math.round(times.reduce((a,b)=>a+b,0)/times.length):0;
    const medTime=Math.round(median(times));
    const slowIdxs=states.map((q,i)=>({i,t:q.timeSpentMs})).filter(x=>x.t>=SLOW_THRESHOLD_MS).sort((a,b)=>b.t-a.t).slice(0,5).map(x=>x.i);
    const fastWrongIdxs=states.map((q,i)=>({i,t:q.timeSpentMs,ans:q.selectedAnswer})).filter(x=>x.t>0&&x.t<FAST_THRESHOLD_MS&&x.ans!==null&&x.ans!==s.activeTest.questions[x.i].correct).map(x=>x.i);
    const changes=states.reduce((a,q)=>a+q.answerChanges,0);
    const flagged=states.filter(q=>q.flagged).length;
    const guesses=states.filter(q=>q.confidence==="guess").length;
    const highConf=states.filter(q=>q.confidence==="high").length;
    const revisits=states.filter(q=>q.viewCount>1).length;
    const longReadErrors=states.filter((q,i)=>q.timeSpentMs>=SLOW_THRESHOLD_MS&&q.selectedAnswer!==null&&q.selectedAnswer!==s.activeTest.questions[i].correct).length;
    return { avgTime, medTime, slowIdxs, fastWrongIdxs, changes, flagged, guesses, highConf, revisits, longReadErrors, totalAnswered:getAnsweredCount() };
  }
  function inferAutoErrorTypes() {
    const s=appState.currentSession; if(!s) return;
    s.questionStates.forEach((qs,i)=>{
      const q=s.activeTest.questions[i]; if(qs.selectedAnswer===null){qs.autoErrorType="no-answer";return;}
      if(qs.selectedAnswer===q.correct){qs.autoErrorType=null;return;}
      const t=qs.timeSpentMs; const hasNeg=/\bnenì\b|\bnení\b|\bnesprávně\b|\bneplatí\b|\bneodpovídá\b/i.test(q.text);
      if(hasNeg) { qs.autoErrorType="missed-negation"; return; }
      if(t<FAST_THRESHOLD_MS) { qs.autoErrorType="impulsive-click"; return; }
      if(t>=SLOW_THRESHOLD_MS&&qs.answerChanges>=2) { qs.autoErrorType="overthinking"; return; }
      
      const m = q.metadata || {};
      const trap = m.trapPattern || "";
      if (trap === "near-category" || trap === "distractor-trap") { qs.autoErrorType = "distractor-trap"; return; }
      
      if(qs.confidence==="high") { qs.autoErrorType="knowledge-gap"; return; }
      if(qs.flagged) { qs.autoErrorType="inattention"; return; }
      if(/\bv rámci\b/i.test(q.text)) { qs.autoErrorType="institution-confusion"; return; }
      
      const likely = Array.isArray(m.likelyErrorTypes) ? m.likelyErrorTypes[0] : null;
      if (likely && likely !== "concept-confusion" && likely !== "terminology-confusion") {
        qs.autoErrorType = likely; 
        return;
      }
      
      qs.autoErrorType="knowledge-gap";
    });
  }
  function updateProgressFromSession() {
    if (analyticsBridge.updateProgressFromSession) return analyticsBridge.updateProgressFromSession(appState.currentSession);
    const s = appState.currentSession; if (!s || s.mode === "repair") return;
    const p = appState.progress || { subtopics: {}, errorTypes: {}, testCount: 0 };
    p.testCount = Number(p.testCount || 0) + 1;
    s.questionStates.forEach((qs, i) => {
      const q = s.activeTest.questions[i];
      const subtopic = q.metadata?.subtopic || "Neznámé";
      if (!p.subtopics[subtopic]) p.subtopics[subtopic] = { seen: 0, correct: 0 };
      p.subtopics[subtopic].seen++;
      if (qs.selectedAnswer === q.correct) p.subtopics[subtopic].correct++;
      else {
        const err = qs.manualErrorType || qs.autoErrorType;
        if (err) p.errorTypes[err] = (p.errorTypes[err] || 0) + 1;
      }
    });
    appState.progress = p;
    saveProgress();
  }
  function buildRepairCandidateIndexes(filterType) {
    const s=appState.currentSession; if(!s) return [];
    const qs=s.questionStates; const questions=s.activeTest.questions;
    let candidates=[];
    qs.forEach((q,i)=>{
      const isWrong=q.selectedAnswer!==null&&q.selectedAnswer!==questions[i].correct;
      const isUnanswered=q.selectedAnswer===null;
      const isGuess=q.confidence==="guess";
      const isSlow=q.timeSpentMs>=SLOW_THRESHOLD_MS;
      const isChanged=q.answerChanges>=1;
      const isFlagged=q.flagged;
      let include=false;
      switch(filterType||"errors") {
        case "errors": include=isWrong||isUnanswered; break;
        case "errors-guesses": include=isWrong||isUnanswered||isGuess; break;
        case "errors-guesses-slow": include=isWrong||isUnanswered||isGuess||isSlow; break;
        case "flagged": include=isFlagged; break;
        case "all": include=isWrong||isUnanswered||isGuess||isSlow||isChanged||isFlagged; break;
        default: include=isWrong||isUnanswered;
      }
      if(include) candidates.push(i);
    });
    return candidates;
  }

  // ═══════════════════════════════════════════
  // 9. RENDERING
  // ═══════════════════════════════════════════
  function highlightRiskKeywords(text) {
    let safe=escapeHtml(text);
    if(appState.currentSession?.ui?.showKeywordHighlights) {
      RISK_PATTERNS.forEach(p=>{ safe=safe.replace(p,'<span class="risk-word">$&</span>'); });
    }
    return safe;
  }
  function setAppMode(mode) {
    appState.appMode=mode;
    const ss=$("startScreen"), ts=$("testScreen"), tp=$("testPane"), rp=$("resultsPane");
    if(mode==="start"){ss.classList.remove("hidden");ts.classList.add("hidden");}
    else{ss.classList.add("hidden");ts.classList.remove("hidden");}
    if(mode==="test"){tp.classList.remove("hidden");rp.classList.add("hidden");}
    if(mode==="results"){tp.classList.add("hidden");rp.classList.remove("hidden");}
  }
  
function renderBatteryCards() {
  const grid = $("batteryGrid");
  const batteries = getActiveBatteries();
  grid.innerHTML = batteries.map(b => {
    const sel = b.id === appState.selectedBatteryId ? "selected" : "";
    return `<button type="button" class="battery-card ${sel}" data-battery="${b.id}">
      <div class="battery-card-head">
        <span class="battery-label">${escapeHtml(b.label)} – ${escapeHtml(b.title)}</span>
        <span class="battery-badge">${getBatteryDisplayBadge(b.id)}</span>
      </div>
      <p class="battery-subtitle">${escapeHtml(b.subtitle)}</p>
      <div class="battery-meta">
        <span class="chip">${b.questionCount} otázek</span>
        <span class="chip">${b.durationMinutes} minut</span>
        <span class="chip">${escapeHtml(b.difficulty)}</span>
        <span class="chip ${b.datasetKey === "hard" ? "warn" : "ok"}">${escapeHtml(getDifficultyModeLabel(b.datasetKey))}</span>
      </div>
    </button>`;
  }).join("");
  grid.querySelectorAll(".battery-card").forEach(card => {
    card.onclick = () => selectBattery(Number(card.dataset.battery));
  });
}

  
function renderBatteryDetail(battery) {
  const top = $("batteryDetail").querySelector(".detail-top");
  if (!battery) {
    top.innerHTML = '<div><h3>Vyber baterii</h3><p>Po kliknutí se tady zobrazí účel, dominantní obsah, tematický rozpis a role baterie.</p></div><span class="badge">—</span>';
    $("detailPurpose").innerHTML = "<p>Zatím není vybraná žádná baterie.</p>";
    $("detailDominant").innerHTML = "";
    $("detailBreakdown").innerHTML = "";
    $("detailProfile").innerHTML = "<p>Vybraná baterie tady dostane svůj profil.</p>";
    return;
  }
  const detailCopy = getBatteryDetailCopy(battery);
  top.innerHTML = `<div><h3>${escapeHtml(battery.label)} – ${escapeHtml(battery.title)}</h3><p>${escapeHtml(battery.subtitle)}</p></div><span class="badge">${getBatteryDisplayBadge(battery.id)}</span>`;
  $("detailPurpose").innerHTML = `<p>${escapeHtml(detailCopy?.purposeText || battery.purpose)}</p>`;
  $("detailDominant").innerHTML = (battery.dominant || []).map(item => `<span class="chip">${escapeHtml(item)}</span>`).join("");
  $("detailBreakdown").innerHTML = (battery.breakdown || []).map(item => `<li>${escapeHtml(item)}</li>`).join("");
  $("detailProfile").innerHTML = (detailCopy?.profileParagraphs || []).map(item => `<p>${escapeHtml(item)}</p>`).join("");
}

  
function renderRestorePanel() {
  const panel = $("restorePanel");
  const saved = loadCurrentSession();
  if (!saved) { panel.classList.add("hidden"); panel.innerHTML = ""; return; }
  panel.classList.remove("hidden");
  const status = saved.results?.finished ? "dokončeno" : "rozpracováno";
  const remaining = saved.results?.finished ? "" : ", zbývá " + formatTime(Math.max(0, Math.floor((new Date(saved.timing.endsAt).getTime() - new Date(saved.updatedAt).getTime()) / 1000)));
  const difficultyLabel = getDifficultyModeLabel(saved.difficultyMode || "basic");
  panel.innerHTML = `<div class="restore-panel">
    <h4>Poslední uložená relace</h4>
    <div class="restore-info">
      <strong>${escapeHtml(saved.batteryLabel)}</strong> – ${escapeHtml(saved.batteryTitle || "")}<br>
      Obtížnost: ${escapeHtml(difficultyLabel)} · Režim práce: ${escapeHtml(formatModeLabel(saved.mode))} · Stav: ${status}${remaining}<br>
      Uloženo: ${formatDate(saved.updatedAt)}
    </div>
    <div class="restore-actions">
      <button class="btn btn-primary btn-sm" id="restoreSessionBtn">Obnovit relaci</button>
      <button class="btn btn-light btn-sm" id="newSessionBtn">Začít znovu</button>
      <button class="btn btn-danger btn-sm" id="deleteSessionBtn">Smazat uloženou relaci</button>
    </div>
  </div>`;
  $("restoreSessionBtn")?.addEventListener("click", resumeSession);
  $("newSessionBtn")?.addEventListener("click", () => { clearCurrentSession(); renderRestorePanel(); });
  $("deleteSessionBtn")?.addEventListener("click", () => { clearCurrentSession(); renderRestorePanel(); });
}

  
function startTargetedPractice(type, param) {
  let allQs = [];
  const activeDifficulty = getActiveDifficultyMode();
  getActiveBatteries().forEach(b => {
    if (b.id === 8) return;
    b.questions.forEach(q => { allQs.push({ ...q, sourceBatteryId: b.id, difficultyMode: activeDifficulty, difficultyLabel: getDifficultyModeLabel(activeDifficulty) }); });
  });
  let filtered = [];
  let title = "";
  if (type === "weakest-subtopic" || type === "subtopic" || type === "maintain-subtopic" || type === "undertrained-subtopic") {
    filtered = allQs.filter(q => q.metadata?.subtopic === param);
    title = `Téma: ${param}`;
  } else if (type === "discipline") {
    filtered = allQs.filter(q => q.metadata?.discipline === param);
    title = `Disciplína: ${param}`;
  } else if (type === "error-type") {
    filtered = allQs.filter(q => {
      const m = q.metadata || {};
      if (param === "distractor-trap" && (m.trapPattern === "near-category" || m.trapPattern === "distractor-trap")) return true;
      if (m.likelyErrorTypes && m.likelyErrorTypes.includes(param)) return true;
      if (param === "missed-negation" && /\bnenì\b|\bnení\b|\bnesprávně\b|\bneplatí\b|\bneodpovídá\b/i.test(q.text)) return true;
      return false;
    });
    title = `Typ chyby: ${(analyticsBridge.getErrorLabel ? analyticsBridge.getErrorLabel(param) : (ERROR_LABELS[param] || param))}`;
  }
  if (filtered.length === 0) { alert("Nenalezeny žádné otázky pro tento filtr."); return; }
  const sessionQs = shuffleArray(filtered).slice(0, 20);
  const dummyBattery = {
    id: "tgt-" + Date.now(),
    label: "Cílený trénink",
    title: title,
    durationMinutes: Math.max(5, Math.ceil(sessionQs.length * 0.6)),
    questions: sessionQs,
    datasetKey: activeDifficulty
  };
  const s = appState.settings;
  appState.currentSession = buildSessionBattery(dummyBattery, {
    mode: "simulation",
    goal: "accuracy",
    showQuestionFirst: false,
    showKeywordHighlights: true,
    requireConfidence: s.requireConfidence,
    difficultyMode: activeDifficulty
  });
  appState.selectedBatteryId = null;
  saveCurrentSession();
  setAppMode("test");
  renderQuestionGrid();
  updateMeta();
  beginQuestionView(0);
  renderQuestion();
  applyFocusMode();
  startTimer();
}

  function getSummaryMetricValue(summary, key, fallback) {
    const value = summary && summary[key];
    return value == null || value === "" ? fallback : value;
  }


  function normalizeDashboardSummary(summary) {
    const base = summary && typeof summary === "object" ? summary : {};
    const thresholds = base.thresholds || { weakRate: 70, riskyRate: 50, strongRate: 85, masteredRate: 95 };
    const trend = base.trend || (analyticsBridge.buildTrendSummary ? analyticsBridge.buildTrendSummary() : { direction: "none", series: [] });
    return {
      ...base,
      weakestSubtopics: Array.isArray(base.weakestSubtopics) ? base.weakestSubtopics : [],
      riskySubtopics: Array.isArray(base.riskySubtopics) ? base.riskySubtopics : [],
      strongestSubtopics: Array.isArray(base.strongestSubtopics) ? base.strongestSubtopics : [],
      masteredSubtopics: Array.isArray(base.masteredSubtopics) ? base.masteredSubtopics : [],
      undertrainedSubtopics: Array.isArray(base.undertrainedSubtopics) ? base.undertrainedSubtopics : [],
      weakestDisciplines: Array.isArray(base.weakestDisciplines) ? base.weakestDisciplines : [],
      riskyDisciplines: Array.isArray(base.riskyDisciplines) ? base.riskyDisciplines : [],
      strongestDisciplines: Array.isArray(base.strongestDisciplines) ? base.strongestDisciplines : [],
      masteredDisciplines: Array.isArray(base.masteredDisciplines) ? base.masteredDisciplines : [],
      undertrainedDisciplines: Array.isArray(base.undertrainedDisciplines) ? base.undertrainedDisciplines : [],
      disciplineInsights: Array.isArray(base.disciplineInsights) ? base.disciplineInsights : [],
      subtopicInsights: Array.isArray(base.subtopicInsights) ? base.subtopicInsights : [],
      topErrors: Array.isArray(base.topErrors) ? base.topErrors : [],
      topFormulations: Array.isArray(base.topFormulations) ? base.topFormulations : [],
      topInstitutionPairs: Array.isArray(base.topInstitutionPairs) ? base.topInstitutionPairs : [],
      overallRate: Number(base.overallRate || 0),
      finishedSessions: Number(base.finishedSessions || base.testCount || 0),
      answeredCount: Number(base.answeredCount || 0),
      correctCount: Number(base.correctCount || 0),
      wrongCount: Number(base.wrongCount || 0),
      unansweredCount: Number(base.unansweredCount || 0),
      highConfidenceWrongCount: Number(base.highConfidenceWrongCount || 0),
      testedSubtopicCount: Number(base.testedSubtopicCount || 0),
      totalKnownSubtopics: Number(base.totalKnownSubtopics || base.testedSubtopicCount || 0),
      testedDisciplineCount: Number(base.testedDisciplineCount || 0),
      totalKnownDisciplines: Number(base.totalKnownDisciplines || base.testedDisciplineCount || 0),
      subtopicCoverageRate: Number(base.subtopicCoverageRate || 0),
      disciplineCoverageRate: Number(base.disciplineCoverageRate || 0),
      thresholds,
      trend
    };
  }

  function formatDashboardStatus(status) {
    switch (status) {
      case "zvládnuté": return "zvládnuto";
      case "silné": return "silná stránka";
      case "slabé": return "k posílení";
      case "rizikové": return "vysoká priorita";
      case "málo-dat": return "zatím málo pokusů";
      case "neprocvičeno": return "ještě neprocvičeno";
      default: return "průběžně stabilní";
    }
  }

  function getDashboardStatusDescription(status) {
    switch (status) {
      case "zvládnuté": return "Téma má velmi vysokou úspěšnost a současně už dost pokusů, aby šlo mluvit o stabilní silné stránce.";
      case "silné": return "Téma se dlouhodobě drží vysoko, ale stále je dobré ho občas potvrdit dalším tréninkem.";
      case "slabé": return "Téma už má dost pokusů a současně nižší úspěšnost, proto stojí za cílené posílení.";
      case "rizikové": return "Téma vychází dlouhodobě nejhůř a mělo by být mezi prvními na procvičení.";
      case "málo-dat": return "Téma už se objevilo, ale zatím je pokusů málo, takže závěr je jen předběžný.";
      case "neprocvičeno": return "Téma se ve vašich dokončených testech ještě neobjevilo, nebo na něj zatím nejsou použitelná data.";
      default: return "Výkon je zatím bez výrazné silné nebo slabé odchylky.";
    }
  }

  function getDashboardStatusClass(status) {
    switch (status) {
      case "zvládnuté": return "mastered";
      case "silné": return "strong";
      case "slabé": return "weak";
      case "rizikové": return "risky";
      case "málo-dat": return "undertrained";
      case "neprocvičeno": return "unseen";
      default: return "steady";
    }
  }

  function getDashboardTrendClass(trend) {
    switch (trend) {
      case "roste": return "up";
      case "klesá": return "down";
      case "kolísá": return "swing";
      default: return "steady";
    }
  }

  function formatDashboardTrendLabel(trend, mode) {
    const variant = mode || "full";
    switch (trend) {
      case "roste": return variant === "short" ? "roste" : "výkon roste";
      case "klesá": return variant === "short" ? "klesá" : "výkon klesá";
      case "kolísá": return variant === "short" ? "kolísá" : "výkon kolísá";
      case "none": return variant === "short" ? "zatím bez směru" : "zatím bez jasného směru";
      default: return variant === "short" ? "stabilní" : "výkon je stabilní";
    }
  }

  function getDashboardTrendDescription(trend) {
    switch (trend) {
      case "roste": return "V posledních dokončených testech se výkon zlepšuje.";
      case "klesá": return "V posledních dokončených testech se výkon zhoršuje a stojí za kontrolu.";
      case "kolísá": return "Výkon je nevyrovnaný: jednou vysoko, jindy níž.";
      case "none": return "Na směr je zatím málo dokončených testů nebo je výsledek příliš podobný.";
      default: return "Výkon se zatím drží bez větší změny.";
    }
  }

  function getDashboardConfidenceClass(level) {
    switch (level) {
      case "vysoká": return "high";
      case "střední": return "mid";
      default: return "low";
    }
  }

  function formatDashboardConfidenceLabel(level) {
    switch (level) {
      case "vysoká": return "dobře ověřeno";
      case "střední": return "částečně ověřeno";
      default: return "zatím předběžné";
    }
  }

  function getDashboardConfidenceDescription(level) {
    switch (level) {
      case "vysoká": return "Téma už má dost pokusů a výsledek je poměrně spolehlivý.";
      case "střední": return "Téma už má slušný základ, ale ještě se může posunout.";
      default: return "Téma má zatím menší počet pokusů, takže závěr berte spíš orientačně.";
    }
  }

  function renderDashboardHelp(helpText) {
    if (!helpText) return "";
    return `<span class="dashboard-help" tabindex="0" aria-label="${escapeAttr(helpText)}" title="${escapeAttr(helpText)}">?</span>`;
  }

  function getDashboardStatusColors(status) {
    switch (status) {
      case "zvládnuté": return { line: "#2d8b57", soft: "#edf9f1", text: "#236844" };
      case "silné": return { line: "#2b92c9", soft: "#eef7ff", text: "#17597a" };
      case "slabé": return { line: "#d2871c", soft: "#fff7df", text: "#9c6b11" };
      case "rizikové": return { line: "#c94b4b", soft: "#fff1f1", text: "#a23535" };
      case "málo-dat": return { line: "#8091a3", soft: "#f5f7fa", text: "#516578" };
      case "neprocvičeno": return { line: "#9aaaba", soft: "#f8fafc", text: "#60758a" };
      default: return { line: "#60758a", soft: "#f5f7fa", text: "#516578" };
    }
  }

  function renderDashboardBadge(text, status, helpText) {
    const attrs = helpText ? ` title="${escapeAttr(helpText)}" aria-label="${escapeAttr(`${text}. ${helpText}`)}"` : "";
    return `<span class="dashboard-status status-${getDashboardStatusClass(status)}"${attrs}>${escapeHtml(text)}</span>`;
  }

  function renderDashboardTrendBadge(text, trend, helpText) {
    const attrs = helpText ? ` title="${escapeAttr(helpText)}" aria-label="${escapeAttr(`${text}. ${helpText}`)}"` : "";
    return `<span class="dashboard-pill trend-${getDashboardTrendClass(trend)}"${attrs}>${escapeHtml(text)}</span>`;
  }

  function renderDashboardMetaPill(text, tone, helpText) {
    const attrs = helpText ? ` title="${escapeAttr(helpText)}" aria-label="${escapeAttr(`${text}. ${helpText}`)}"` : "";
    return `<span class="dashboard-pill ${tone ? `tone-${escapeAttr(tone)}` : ""}"${attrs}>${escapeHtml(text)}</span>`;
  }

  function renderDashboardStatCard(label, value, detail, tone, helpText) {
    const toneClass = tone ? ` is-${tone}` : "";
    return `<div class="dash-card dash-stat-card${toneClass}">
      <div class="dash-value">${escapeHtml(String(value))}</div>
      <div class="dash-label dashboard-label-with-help"><span>${escapeHtml(label)}</span>${renderDashboardHelp(helpText)}</div>
      ${detail ? `<small>${escapeHtml(detail)}</small>` : ""}
    </div>`;
  }

  function renderDashboardMeter(item, status) {
    const seen = Math.max(0, Number(item?.seen || 0));
    if (!seen) return `<div class="dashboard-meter-empty">Zatím bez záznamu.</div>`;
    const correct = Math.max(0, Number(item?.correct || 0));
    const wrong = Math.max(0, Number(item?.wrong || 0));
    const unanswered = Math.max(0, Number(item?.unanswered || Math.max(0, seen - correct - wrong)));
    const correctPct = Math.round(correct / seen * 100);
    const wrongPct = Math.round(wrong / seen * 100);
    const unansweredPct = Math.max(0, 100 - correctPct - wrongPct);
    return `<div class="dashboard-meter-wrap">
      <div class="dashboard-meter status-${getDashboardStatusClass(status)}">
        <span class="seg-correct" style="width:${correctPct}%;"></span>
        <span class="seg-wrong" style="width:${wrongPct}%;"></span>
        <span class="seg-empty" style="width:${unansweredPct}%;"></span>
      </div>
      <div class="dashboard-meter-legend">
        <span><i class="seg-dot dot-correct"></i>správně ${correct}</span>
        <span><i class="seg-dot dot-wrong"></i>chybně ${wrong}</span>
        <span><i class="seg-dot dot-empty"></i>bez odpovědi ${unanswered}</span>
      </div>
    </div>`;
  }

  function renderDashboardSparkline(historyInput, status, ariaLabel) {
    const history = Array.isArray(historyInput) ? historyInput.filter(Boolean).slice(0, 8).reverse() : [];
    const values = history.map(item => Number(typeof item === "number" ? item : item.rate || 0)).filter(value => Number.isFinite(value));
    if (values.length < 2) return `<div class="dashboard-sparkline-empty">Graf vývoje se doplní po dalších dokončených testech.</div>`;
    const width = 220;
    const height = 56;
    const min = Math.min(...values, 0);
    const max = Math.max(...values, 100);
    const span = Math.max(1, max - min);
    const step = values.length > 1 ? width / (values.length - 1) : width;
    const points = values.map((value, index) => {
      const x = Math.round(index * step);
      const y = Math.round(height - ((value - min) / span) * (height - 12) - 6);
      return `${x},${y}`;
    }).join(" ");
    const colors = getDashboardStatusColors(status);
    return `<div class="dashboard-sparkline" aria-label="${escapeAttr(ariaLabel || "Trend")}">
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img" aria-hidden="true">
        <polyline fill="none" stroke="${colors.line}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${points}"></polyline>
        ${values.map((value, index) => {
          const x = Math.round(index * step);
          const y = Math.round(height - ((value - min) / span) * (height - 12) - 6);
          return `<circle cx="${x}" cy="${y}" r="3.5" fill="${colors.line}"></circle>`;
        }).join("")}
      </svg>
      <div class="dashboard-sparkline-meta">
        <span>${values[0]} %</span>
        <span>${values[values.length - 1]} %</span>
      </div>
    </div>`;
  }

  function renderDashboardTopicCard(item, kind, headingTone) {
    if (!item) return "";
    const label = item.subtopic || item.discipline || item.label || item.key || "Neznámé téma";
    const rate = Number(item.rate || 0);
    const seen = Number(item.seen || 0);
    const sessions = Number(item.sessionCount || 0);
    const status = item.status || (rate >= 95 ? "zvládnuté" : rate >= 85 ? "silné" : rate < 50 ? "rizikové" : rate < 70 ? "slabé" : "stabilní");
    const buttonLabel = kind === "discipline" ? "Procvičit disciplínu" : "Procvičit téma";
    const trend = item.trend || "stabilní";
    const confidence = item.confidenceLevel || "nízká";
    const recentRate = Number(item.recentRate || rate);
    const sessionLabel = sessions === 1 ? "relaci" : (sessions >= 2 && sessions <= 4 ? "relacích" : "relacích");
    const recentSessionCount = Array.isArray(item.recentSessionRates) ? item.recentSessionRates.length : 0;
    const comparisonLine = recentSessionCount >= 2
      ? `V posledních pokusech ${recentRate} % · celkově ${rate} %`
      : `Zatím je k dispozici menší počet pokusů, proto ber výsledek spíš orientačně.`;
    return `<article class="dash-card dashboard-topic-card status-${getDashboardStatusClass(status)} tone-${escapeAttr(headingTone || "neutral")}">
      <div class="dashboard-topic-top">
        <div>
          <div class="dash-value dashboard-topic-rate">${rate}%</div>
          <div class="dash-label dashboard-topic-title">${escapeHtml(label)}</div>
        </div>
        ${renderDashboardBadge(formatDashboardStatus(status), status, getDashboardStatusDescription(status))}
      </div>
      <div class="dashboard-chip-row">
        ${renderDashboardMetaPill(`Vyzkoušeno v ${seen} otázkách`, "neutral", "Kolikrát se toto téma objevilo v dokončených testech.")}
        ${renderDashboardMetaPill(`Ověřeno v ${sessions} ${sessionLabel}`, "neutral", "Počet dokončených testů, ve kterých se toto téma objevilo.")}
        ${renderDashboardMetaPill(`Hodnocení: ${formatDashboardConfidenceLabel(confidence)}`, getDashboardConfidenceClass(confidence), getDashboardConfidenceDescription(confidence))}
        ${renderDashboardTrendBadge(`Vývoj: ${formatDashboardTrendLabel(trend, "short")}`, trend, getDashboardTrendDescription(trend))}
      </div>
      <div class="dashboard-topic-insight">
        <div class="dashboard-topic-insight-line">
          <strong>Srovnání výkonu:</strong> ${comparisonLine}
        </div>
      </div>
      ${renderDashboardSparkline(item.recentSessionRates || [], status, `Vývoj tématu ${label}`)}
      ${renderDashboardMeter(item, status)}
      <div class="dashboard-topic-footer">
        <div class="dashboard-topic-footnote">${item.lastSeenAt ? `Naposledy zaznamenáno ${escapeHtml(formatDate(item.lastSeenAt))}` : "Vyhodnocení z dokončených testů."}</div>
        <button class="btn ${status === "rizikové" || status === "slabé" ? "btn-primary" : "btn-outline"} btn-sm dashboard-topic-btn" data-kind="${escapeAttr(kind)}" data-label="${escapeAttr(label)}" type="button">${buttonLabel}</button>
      </div>
    </article>`;
  }

  function renderDashboardErrorCard(item) {
    if (!item) return "";
    const label = item.label || item.type || "Neznámá chyba";
    return `<div class="dash-card dashboard-error-card">
      <div class="dashboard-error-top">
        <div class="dash-value dashboard-topic-rate">${Number(item.count || 0)}×</div>
        ${renderDashboardBadge("častá chyba", "rizikové", "Tento typ chyby se vrací opakovaně napříč dokončenými testy.")}
      </div>
      <div class="dash-label dashboard-topic-title dashboard-error-title">${escapeHtml(label)}</div>
      <div class="dashboard-topic-insight">
        <div class="dashboard-topic-insight-line">Tento typ chyby se opakuje napříč dokončenými testy a vyplatí se na něj navázat opravnou sadou.</div>
      </div>
      <div class="dashboard-topic-footer">
        <div class="dashboard-topic-footnote">Spusť opravnou sadu zaměřenou na tento typ chyby.</div>
        <button class="btn btn-outline btn-sm dashboard-error-btn" data-error-type="${escapeAttr(item.type || "")}" type="button">Opravit chybu</button>
      </div>
    </div>`;
  }

  function buildDashboardTopicMix(summary, primaryKey, secondaryKey, limit) {
    const out = [];
    const seen = new Set();
    [ ...(summary[primaryKey] || []), ...(summary[secondaryKey] || []) ].forEach(item => {
      const label = item?.subtopic || item?.discipline || item?.key;
      if (!label || seen.has(label)) return;
      seen.add(label);
      out.push(item);
    });
    return out.slice(0, limit || 5);
  }

  function renderDashboardTopicGrid(items, kind, tone, emptyText) {
    if (!items.length) return `<div class="inline-muted">${escapeHtml(emptyText)}</div>`;
    return `<div class="dash-grid dashboard-topic-grid">${items.map(item => renderDashboardTopicCard(item, kind, tone)).join("")}</div>`;
  }

  function renderDashboardErrorGrid(items) {
    if (!items.length) return `<div class="inline-muted">Zatím se neopakuje jeden výrazný typ chyby.</div>`;
    return `<div class="dash-grid tight dashboard-error-grid">${items.map(renderDashboardErrorCard).join("")}</div>`;
  }

  function renderDashboardTrend(summary) {
    const trend = summary.trend || { direction: "none", series: [] };
    const series = Array.isArray(trend.series) ? trend.series.slice().reverse() : [];
    if (!series.length) return `<div class="inline-muted">Vývoj se zobrazí po dalších dokončených testech.</div>`;
    const chartSeries = series.map(item => ({ rate: Number(item.percentage || 0), at: item.date || "" }));
    const trendTone = trend.direction === "klesá" ? "rizikové" : trend.direction === "roste" ? "silné" : "stabilní";
    return `
      <div class="dashboard-trend-panel">
        <div class="dashboard-trend-head">
          ${renderDashboardTrendBadge(`Vývoj: ${formatDashboardTrendLabel(trend.direction, "short")}`, trend.direction || "stabilní", getDashboardTrendDescription(trend.direction))}
          <div class="dashboard-topic-footnote">Srovnání posledních ${series.length} dokončených testů.</div>
        </div>
        ${renderDashboardSparkline(chartSeries, trendTone, "Vývoj posledních testů")}
        <div class="dash-grid tight dashboard-trend-grid">
          ${series.map(item => `<div class="dash-card dashboard-trend-card">
            <div class="dash-value" style="font-size:18px;">${Number(item.percentage || 0)}%</div>
            <div class="dash-label">${escapeHtml(formatModeLabel(item.mode || "simulation"))}</div>
            <small>${escapeHtml(formatDate(item.date))}</small>
          </div>`).join("")}
        </div>
      </div>`;
  }

  function renderDashboardPlan(summary) {
    const cards = [];
    const repair = summary.riskySubtopics[0] || summary.weakestSubtopics[0];
    const maintain = summary.masteredSubtopics[0] || summary.strongestSubtopics[0];
    const coverage = summary.undertrainedSubtopics.find(item => Number(item.seen || 0) > 0) || summary.undertrainedDisciplines.find(item => Number(item.seen || 0) > 0);

    if (repair) {
      cards.push(`<div class="action-card">
        <h5>Teď zpevnit</h5>
        <p>Zaměř se na téma <strong>${escapeHtml(repair.subtopic || repair.discipline || repair.key || "—")}</strong>. Dlouhodobě tu vychází úspěšnost ${Number(repair.rate || 0)} %.</p>
        <button class="btn btn-primary btn-sm dashboard-topic-btn" data-kind="${escapeAttr(repair.subtopic ? "subtopic" : "discipline")}" data-label="${escapeAttr(repair.subtopic || repair.discipline || repair.key || "")}" type="button">Spustit cílený trénink</button>
      </div>`);
    }

    if (maintain) {
      cards.push(`<div class="action-card">
        <h5>Udržovat</h5>
        <p>${(maintain.status === "zvládnuté" ? "Stabilně zvládáš" : "Dobře držíš")} téma <strong>${escapeHtml(maintain.subtopic || maintain.discipline || maintain.key || "—")}</strong>. Stačí průběžné potvrzení.</p>
        <button class="btn btn-outline btn-sm dashboard-topic-btn" data-kind="${escapeAttr(maintain.subtopic ? "subtopic" : "discipline")}" data-label="${escapeAttr(maintain.subtopic || maintain.discipline || maintain.key || "")}" type="button">Procvičit pro udržení</button>
      </div>`);
    }

    if (coverage) {
      cards.push(`<div class="action-card">
        <h5>Doplnit pokrytí</h5>
        <p>U ${escapeHtml(coverage.subtopic || coverage.discipline || coverage.key || "vybraného tématu")} zatím nemá dost pokusů. Potvrď si ho ještě dalším průchodem.</p>
        <button class="btn btn-outline btn-sm dashboard-topic-btn" data-kind="${escapeAttr(coverage.subtopic ? "subtopic" : "discipline")}" data-label="${escapeAttr(coverage.subtopic || coverage.discipline || coverage.key || "")}" type="button">Doplnit téma</button>
      </div>`);
    }

    if (!cards.length) return `<div class="inline-muted">Po dokončení dalších relací se zde objeví doporučený další krok.</div>`;
    return `<div class="action-grid">${cards.join("")}</div>`;
  }

  
function runDashboardPracticeAction(kind, value) {
  const label = String(value || "").trim();
  const hasSessionQuestions = !!(appState.currentSession?.activeTest?.questions?.length);
  if (!kind) return;
  switch (kind) {
    case "discipline":
      if (hasSessionQuestions && analyticsBridge.startRepairModeByDiscipline) return analyticsBridge.startRepairModeByDiscipline(label);
      return startTargetedPractice("discipline", label);
    case "subtopic":
    case "maintain-subtopic":
    case "undertrained-subtopic":
      if (hasSessionQuestions && analyticsBridge.startRepairModeBySubtopic) return analyticsBridge.startRepairModeBySubtopic(label);
      return startTargetedPractice("subtopic", label);
    case "error-type":
      if (hasSessionQuestions && analyticsBridge.startRepairModeByErrorType) return analyticsBridge.startRepairModeByErrorType(label);
      return startTargetedPractice("error-type", label);
    case "formulation":
      if (hasSessionQuestions && analyticsBridge.startRepairModeByFormulation) return analyticsBridge.startRepairModeByFormulation(label);
      return;
    case "institution":
      if (hasSessionQuestions && analyticsBridge.startRepairModeByInstitutionPair) return analyticsBridge.startRepairModeByInstitutionPair(label);
      return;
    case "high-confidence":
      if (hasSessionQuestions && analyticsBridge.startRepairModeHighConfidenceWrong) return analyticsBridge.startRepairModeHighConfidenceWrong();
      return;
    case "slow":
      if (hasSessionQuestions && analyticsBridge.startRepairModeSlowQuestions) return analyticsBridge.startRepairModeSlowQuestions();
      return;
    case "revision":
      if (hasSessionQuestions && analyticsBridge.startRepairModeRevisionQueue) return analyticsBridge.startRepairModeRevisionQueue();
      return;
  }
}



  function buildHistoryOnlyDashboardSummary() {
    const history = Array.isArray(appState.history) ? appState.history : [];
    const totalSessions = history.length;
    const totalQuestions = history.reduce((sum, item) => sum + Number(item.total || 0), 0);
    const totalCorrect = history.reduce((sum, item) => sum + Number(item.score || 0), 0);
    const overallRate = totalQuestions ? Math.round(totalCorrect / totalQuestions * 100) : 0;
    const trend = analyticsBridge.buildTrendSummary ? analyticsBridge.buildTrendSummary() : { direction: "none", series: [] };
    return normalizeDashboardSummary({
      finishedSessions: totalSessions,
      overallRate,
      answeredCount: totalQuestions,
      correctCount: totalCorrect,
      wrongCount: Math.max(0, totalQuestions - totalCorrect),
      unansweredCount: 0,
      testedSubtopicCount: 0,
      totalKnownSubtopics: 0,
      testedDisciplineCount: 0,
      totalKnownDisciplines: 0,
      highConfidenceWrongCount: 0,
      topErrors: [],
      weakestSubtopics: [],
      riskySubtopics: [],
      strongestSubtopics: [],
      masteredSubtopics: [],
      undertrainedSubtopics: [],
      weakestDisciplines: [],
      riskyDisciplines: [],
      strongestDisciplines: [],
      masteredDisciplines: [],
      undertrainedDisciplines: [],
      topFormulations: [],
      topInstitutionPairs: [],
      trend,
      source: "history-only"
    });
  }

  function resolveDashboardSummaryForStart() {
    let summary = normalizeDashboardSummary((analyticsBridge.buildStudyDashboardSummary || buildWeaknessSummary)());
    let totalSessions = Number(summary.finishedSessions || appState.progress?.testCount || 0);
    const historyCount = Array.isArray(appState.history) ? appState.history.length : 0;
    const currentFinished = !!(appState.currentSession && appState.currentSession.results?.finished);

    if (!totalSessions && currentFinished && analyticsBridge.updateProgressFromSession) {
      try {
        appState.currentSession.results = appState.currentSession.results || {};
        appState.currentSession.results.progressCommitted = false;
        analyticsBridge.updateProgressFromSession(appState.currentSession);
        saveCurrentSession();
        summary = normalizeDashboardSummary((analyticsBridge.buildStudyDashboardSummary || buildWeaknessSummary)());
        totalSessions = Number(summary.finishedSessions || appState.progress?.testCount || 0);
      } catch (err) {
        console.error("SCIO v4: nepodařilo se obnovit progress pro dashboard.", err);
      }
    }

    if (!totalSessions && currentFinished && typeof window.buildSessionDashboardSummaryFallback === "function") {
      try {
        const fallbackSummary = window.buildSessionDashboardSummaryFallback(appState.currentSession);
        if (fallbackSummary) {
          summary = normalizeDashboardSummary(fallbackSummary);
          totalSessions = Number(summary.finishedSessions || 0);
        }
      } catch (err) {
        console.error("SCIO v4: nepodařilo se sestavit fallback dashboard z aktuální relace.", err);
      }
    }

    if (!totalSessions && historyCount > 0) {
      summary = buildHistoryOnlyDashboardSummary();
      totalSessions = Number(summary.finishedSessions || historyCount || 0);
    }

    return normalizeDashboardSummary(summary);
  }

  function renderWeaknessPanel() {
    const wp = $("weaknessPanel");
    if (!wp) return;

    let summary;
    try {
      summary = resolveDashboardSummaryForStart();
    } catch (err) {
      console.error("SCIO v4: chyba při přípravě dashboard summary.", err);
      summary = normalizeDashboardSummary({});
    }

    const totalSessions = Number(summary.finishedSessions || appState.progress?.testCount || (appState.history?.length || 0) || 0);

    if (!totalSessions) {
      wp.classList.add("hidden");
      wp.innerHTML = "";
      return;
    }

    try {
      const weakTopics = buildDashboardTopicMix(summary, "riskySubtopics", "weakestSubtopics", 4);
      const strongTopics = buildDashboardTopicMix(summary, "masteredSubtopics", "strongestSubtopics", 4);
      const undertrainedTopics = (summary.undertrainedSubtopics || []).filter(item => Number(item.seen || 0) > 0).slice(0, 6);
      const notSeenTopics = Math.max(0, Number(summary.totalKnownSubtopics || 0) - Number(summary.testedSubtopicCount || 0));
      const strongDisciplines = (summary.masteredDisciplines && summary.masteredDisciplines.length ? summary.masteredDisciplines : summary.strongestDisciplines || []).slice(0, 4);
      const weakDisciplines = (summary.riskyDisciplines && summary.riskyDisciplines.length ? summary.riskyDisciplines : summary.weakestDisciplines || []).slice(0, 3);
      const trendDirection = summary.trend?.direction || "stabilní";
      const quickActions = [
        { label: "Procvičit nejslabší téma", kind: weakTopics[0]?.subtopic ? "subtopic" : "", value: weakTopics[0]?.subtopic || "" , tone:"primary", help:"Zaměří se na nejproblematičtější téma."},
        { label: "Procvičit nejslabší disciplínu", kind: weakDisciplines[0]?.discipline ? "discipline" : "", value: weakDisciplines[0]?.discipline || "", tone:"primary", help:"Vezme širší problémovou oblast."},
        { label: "Jistě, ale chybně", kind: summary.highConfidenceWrongCount > 0 ? "high-confidence" : "", value: "", tone:"outline", help:"Vrátí otázky, u kterých byla vysoká jistota, ale chybná odpověď."},
        { label: "Pomalé otázky", kind: analyticsBridge.startRepairModeSlowQuestions ? "slow" : "", value: "", tone:"outline", help:"Vrátí otázky s delším rozhodováním."},
        { label: "Cílené opakování", kind: analyticsBridge.startRepairModeRevisionQueue ? "revision" : "", value: "", tone:"outline", help:"Vrátí otázky z fronty opakování."}
      ].filter(item => item.kind);

      const answeredBase = summary.answeredCount || (summary.correctCount + summary.wrongCount) || 0;

      wp.classList.remove("hidden");
      wp.innerHTML = `
        <div class="dashboard study-dashboard" style="margin-top:20px;border-color:#b9dff2;">
          <div class="dashboard-head">
            <div>
              <h4>Studijní dashboard</h4>
              <p class="dashboard-headline">${summary.source === "history-only" ? "Souhrn je obnovený hlavně z historie pokusů. Detailní tematická mapa se doplní po dalších dokončených relacích." : "Dlouhodobý přehled napříč dokončenými testy. Ukazuje, co máš už zvládnuté, co potřebuje posílit a co zatím ještě není dost ověřené. Na značku ? můžeš najet myší pro vysvětlení."}</p>
            <div class="dashboard-legend-note">Na značku ? můžeš najet myší a zobrazí se vysvětlivka.</div>
            </div>
            <div class="dashboard-meta">
              ${renderDashboardTrendBadge(`Vývoj: ${formatDashboardTrendLabel(trendDirection, "short")}`, trendDirection, getDashboardTrendDescription(trendDirection))}
              ${renderDashboardMetaPill(`Dokončeno testů: ${totalSessions}`, "neutral", "Počet dokončených testů, ze kterých dashboard vychází.")}
            </div>
          </div>

          <div class="dash-grid tight dashboard-stat-grid" style="margin-bottom:14px;">
            ${renderDashboardStatCard("Celková úspěšnost", `${summary.overallRate}%`, `${summary.correctCount}/${answeredBase || summary.correctCount} zodpovězených správně`, "primary", "Podíl správných odpovědí ze všech zodpovězených otázek napříč dokončenými testy.")}
            ${renderDashboardStatCard("Pokrytí témat", `${summary.testedSubtopicCount}/${summary.totalKnownSubtopics || summary.testedSubtopicCount}`, `${summary.subtopicCoverageRate}% známých témat`, "neutral", "Kolik různých témat už se objevilo v dokončených testech oproti celé bance témat.")}
            ${renderDashboardStatCard("Zvládnutá témata", String((summary.masteredSubtopics || []).length), `práh ${Number(summary.thresholds.masteredRate || 95)} %`, "success", "Témata s velmi vysokou úspěšností a dostatečným počtem pokusů.")}
            ${renderDashboardStatCard("Silné oblasti", String((summary.strongestDisciplines || []).length), "dlouhodobě nadprůměrné", "primary", "Širší oblasti, ve kterých se výkon drží vysoko napříč více testy.")}
            ${renderDashboardStatCard("Témata k prioritě", String((summary.riskySubtopics || []).length), "potřebují posílit jako první", "danger", "Témata, kde je výkon dlouhodobě nejslabší a mají přednost v procvičení.")}
            ${renderDashboardStatCard("Jistě, ale chybně", String(summary.highConfidenceWrongCount || 0), "chyby s vysokou jistotou", "warning", "Počet odpovědí, u kterých byla vysoká jistota, ale výběr byl chybný.")}
          </div>

          <div class="summary-section dashboard-summary-panel" style="margin-bottom:14px;">
            <div class="dashboard-section-head">
              <div>
                <h5>Doporučený postup</h5>
                <p>Začni tím, co už má dost dat a současně drží nízkou úspěšnost. Silná témata jen potvrzuj a málo procvičené oblasti postupně doplňuj.</p>
              </div>
              <div class="dashboard-chip-row compact">
                ${renderDashboardMetaPill(`Pokryté oblasti ${summary.testedDisciplineCount}/${summary.totalKnownDisciplines || summary.testedDisciplineCount}`, "neutral", "Kolik širších oblastí už bylo v dokončených testech zastoupeno.")}
                ${renderDashboardMetaPill(`Bez odpovědi ${summary.unansweredCount || 0}`, "neutral", "Kolikrát byla otázka ponechána bez odpovědi napříč dokončenými testy.")}
              </div>
            </div>
            <div class="dashboard-callout">
              Máš za sebou <strong>${summary.finishedSessions}</strong> dokončen${summary.finishedSessions === 1 ? "ý test" : summary.finishedSessions >= 2 && summary.finishedSessions <= 4 ? "é testy" : "ých testů"},
              celkovou úspěšnost <strong>${summary.overallRate} %</strong> a pokryto <strong>${summary.testedSubtopicCount}</strong> z
              <strong>${summary.totalKnownSubtopics || summary.testedSubtopicCount}</strong> známých témat.
              Vývoj výkonu je nyní <strong>${escapeHtml(formatDashboardTrendLabel(trendDirection, "short"))}</strong>. ${summary.source === "history-only" ? "Detail témat se bude dál zpřesňovat po nových dokončených testech." : ""}
            </div>
            ${renderDashboardPlan(summary)}
          </div>

          <div class="dashboard-columns">
            <section class="summary-section">
              <div class="dashboard-section-head">
                <div>
                  <h5>Slabší stránky</h5>
                  <p>Zde jsou témata, která už mají dost pokusů a současně nižší úspěšnost.</p>
                </div>
                ${weakDisciplines.length ? `<div class="dashboard-chip-row compact">${weakDisciplines.map(item => renderDashboardBadge(`${item.discipline} · ${item.rate}%`, item.status || "slabé")).join("")}</div>` : ""}
              </div>
              <h6 class="dashboard-subhead">Nejslabší témata</h6>
              ${renderDashboardTopicGrid(weakTopics, "subtopic", weakTopics[0]?.status === "rizikové" ? "risk" : "warn", "Zatím se neukázalo téma, které by dlouhodobě a spolehlivě vycházelo jako slabina.")}
              <div class="dashboard-divider"></div>
              <h6 class="dashboard-subhead">Nejčastější diagnostikované chyby</h6>
              ${renderDashboardErrorGrid((summary.topErrors || []).slice(0, 3))}
            </section>

            <section class="summary-section">
              <div class="dashboard-section-head">
                <div>
                  <h5>Silné stránky</h5>
                  <p>Zde jsou témata a širší oblasti, které se drží vysoko dlouhodobě, ne jen v jednom testu.</p>
                </div>
                ${strongDisciplines.length ? `<div class="dashboard-chip-row compact">${strongDisciplines.map(item => renderDashboardBadge(`${item.discipline} · ${item.rate}%`, item.status || "silné")).join("")}</div>` : ""}
              </div>
              <h6 class="dashboard-subhead">Zvládnutá témata</h6>
              ${renderDashboardTopicGrid(strongTopics, "subtopic", "strong", "Zatím se ještě nevytvořila stabilně silná témata s dostatkem pokusů.")}
              <div class="dashboard-divider"></div>
              <h6 class="dashboard-subhead">Co už má stabilní základ</h6>
              <div class="dashboard-callout soft">
                ${strongTopics.length ? `Silná témata stačí průběžně potvrzovat, ale nemusí být teď nejvyšší prioritou.` : `Silné stránky se začnou ukazovat po dalších dokončených testech.`}
              </div>
            </section>
          </div>

          <div class="dashboard-columns dashboard-columns-secondary">
            <section class="summary-section">
              <div class="dashboard-section-head">
                <div>
                  <h5>Co zatím není dost ověřené</h5>
                  <p>Tato témata nejsou slabina. Jen zatím nemáme dost pokusů pro spolehlivý závěr.</p>
                </div>
              </div>
              <div class="dash-grid tight dashboard-undertrained-stats">
                ${renderDashboardStatCard("Jen pár otázek", String(undertrainedTopics.length), "téma se už objevilo, ale zatím málo", "neutral", "Témata, která už se objevila, ale ještě jich bylo málo pro jistý závěr.")}
                ${renderDashboardStatCard("Ještě se neobjevilo", String(notSeenTopics), "témata mimo dosavadní pokrytí", "neutral", "Témata, která se ve vašich dokončených testech zatím vůbec neobjevila.")}
                ${renderDashboardStatCard("Pokrytí oblastí", `${summary.disciplineCoverageRate}%`, `${summary.testedDisciplineCount}/${summary.totalKnownDisciplines || summary.testedDisciplineCount}`, "neutral", "Kolik širších oblastí už bylo v dokončených testech ověřeno.")}
              </div>
              <div class="dashboard-chip-cloud">
                ${undertrainedTopics.length ? undertrainedTopics.map(item => renderDashboardMetaPill(`${item.subtopic || item.key} · ${item.seen} ${Number(item.seen || 0) === 1 ? "otázka" : (Number(item.seen || 0) >= 2 && Number(item.seen || 0) <= 4 ? "otázky" : "otázek")}`, "undertrained", "Téma už se objevilo, ale zatím na něj není dost pokusů pro jisté hodnocení.")).join("") : `<div class="inline-muted">Témata s malým počtem pokusů se začnou ukazovat po dalších dokončených testech.</div>`}
              </div>
            </section>

            <section class="summary-section">
              <div class="dashboard-section-head">
                <div>
                  <h5>Vývoj posledních testů</h5>
                  <p>Rychlý přehled, jestli se výkon zlepšuje, kolísá, nebo oslabuje.</p>
                </div>
              </div>
              ${renderDashboardTrend(summary)}
            </section>
          </div>

          <div class="summary-section dashboard-summary-panel" style="margin-top:14px;">
            <div class="dashboard-section-head">
              <div>
                <h5>Navázat dalším tréninkem</h5>
                <p>Jedním klikem můžeš navázat cíleným procvičením podle toho, co dashboard ukázal.</p>
              </div>
            </div>
            ${quickActions.length ? `<div class="action-grid dashboard-quick-grid">${quickActions.map(item => `<div class="action-card dashboard-quick-card"><h5>${escapeHtml(item.label)}</h5><p>${escapeHtml(item.help)}</p><button class="btn ${item.tone === "primary" ? "btn-primary" : "btn-outline"} btn-sm dashboard-quick-btn" data-kind="${escapeAttr(item.kind)}" data-value="${escapeAttr(item.value || "")}" type="button">Spustit</button></div>`).join("")}</div>` : `<div class="inline-muted">Navázat dalším tréninkem se doplní s rostoucím množstvím dat.</div>`}
          </div>
        </div>
      `;

      wp.querySelectorAll(".dashboard-topic-btn").forEach(btn => {
        btn.addEventListener("click", () => runDashboardPracticeAction(btn.dataset.kind, btn.dataset.label));
      });
      wp.querySelectorAll(".dashboard-error-btn").forEach(btn => {
        btn.addEventListener("click", () => runDashboardPracticeAction("error-type", btn.dataset.errorType));
      });
      wp.querySelectorAll(".dashboard-quick-btn").forEach(btn => {
        btn.addEventListener("click", () => runDashboardPracticeAction(btn.dataset.kind, btn.dataset.value));
      });
    } catch (err) {
      console.error("SCIO v4: chyba v renderWeaknessPanel.", err);
      const weakTopics = (summary.riskySubtopics && summary.riskySubtopics.length ? summary.riskySubtopics : summary.weakestSubtopics || []).slice(0, 5);
      const strongTopics = (summary.masteredSubtopics && summary.masteredSubtopics.length ? summary.masteredSubtopics : summary.strongestSubtopics || []).slice(0, 5);
      const topErrors = (summary.topErrors || []).slice(0, 3);
      wp.classList.remove("hidden");
      wp.innerHTML = `
        <div class="dashboard" style="margin-top:20px;border-color:#b9dff2;">
          <h4>Studijní dashboard</h4>
          <div class="dash-grid">
            <div class="dash-card"><div class="dash-value">${summary.overallRate || 0}%</div><div class="dash-label">Celková úspěšnost</div></div>
            <div class="dash-card"><div class="dash-value">${summary.finishedSessions || totalSessions}</div><div class="dash-label">Dokončené testy</div></div>
            <div class="dash-card"><div class="dash-value">${summary.testedSubtopicCount || 0}</div><div class="dash-label">Vyhodnocená témata</div></div>
            <div class="dash-card"><div class="dash-value">${summary.highConfidenceWrongCount || 0}</div><div class="dash-label">Jisté chybné odpovědi</div></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-top:14px;">
            <div class="summary-section">
              <h5>Doporučený postup</h5>
              <p class="inline-muted">Prioritu mají témata s dostatkem dat a nízkou úspěšností. Silná témata stačí průběžně potvrzovat. Málo procvičené oblasti zatím nehodnoť jako slabinu.</p>
              <div class="dashboard-chip-cloud">
                ${weakTopics.length ? weakTopics.map(item => renderDashboardMetaPill(`${item.subtopic || item.key} · ${item.rate}%`, "warn")).join("") : `<div class="inline-muted">Zatím se neukázalo téma, které by dlouhodobě a spolehlivě vycházelo jako slabina.</div>`}
              </div>
            </div>
            <div class="summary-section">
              <h5>Silné stránky</h5>
              <div class="dashboard-chip-cloud">
                ${strongTopics.length ? strongTopics.map(item => renderDashboardMetaPill(`${item.subtopic || item.key} · ${item.rate}%`, "success")).join("") : `<div class="inline-muted">Silné stránky se doplní s dalším množstvím dat.</div>`}
              </div>
            </div>
          </div>
          <div class="summary-section" style="margin-top:14px;">
            <h5>Nejčastější diagnostikované chyby</h5>
            ${topErrors.length ? `<div class="dash-grid">${topErrors.map(item => `<div class="dash-card"><div class="dash-value">${item.count}×</div><div class="dash-label">${escapeHtml(item.label || item.type || "—")}</div></div>`).join("")}</div>` : `<div class="inline-muted">Zatím tu nejsou diagnostikované chyby s dostatečnou četností.</div>`}
          </div>
        </div>
      `;
    }
  }

  
function renderHistoryPanel() {
  const panel = $("historyPanel");
  const history = appState.history;
  if (!history.length) { panel.classList.add("hidden"); return; }
  panel.classList.remove("hidden");
  const items = history.slice(0, 3).map(entry => {
    const difficultyLabel = getDifficultyModeLabel(entry.difficultyMode || "basic");
    return `<div class="history-item">
      <span>${escapeHtml(entry.batteryLabel || "")} · ${escapeHtml(difficultyLabel)} · ${escapeHtml(formatModeLabel(entry.mode || "simulation"))} · ${formatDate(entry.date)}</span>
      <span class="history-score">${entry.score}/${entry.total} (${entry.percentage}%)</span>
    </div>`;
  }).join("");
  panel.innerHTML = `<div class="history-panel"><h4>Poslední pokusy</h4><div class="history-list">${items}</div></div>`;
}

  
function renderConfigPanel() {
  const s = appState.settings;
  s.difficultyMode = getDatasetByMode(s.difficultyMode || "basic").key;
  if (s.defaultMode === "reading-training") s.showQuestionFirst = true;

  document.querySelectorAll("#configDifficulty .config-opt").forEach(btn => {
    const mode = getDatasetByMode(btn.dataset.difficulty || "basic").key;
    btn.disabled = mode === "hard" && !DATASETS.hard.batteries.length;
    btn.classList.toggle("active", mode === s.difficultyMode);
    btn.onclick = () => {
      const nextMode = getDatasetByMode(btn.dataset.difficulty || "basic").key;
      if (nextMode === s.difficultyMode) return;
      s.difficultyMode = nextMode;
      saveSettings();
      renderConfigPanel();
      renderBatteryCards();
      renderBatteryDetail(appState.selectedBatteryId ? getActiveBatteryMap()[appState.selectedBatteryId] : null);
      updateSelectionState();
    };
  });

  document.querySelectorAll("#configMode .config-opt").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === s.defaultMode);
    btn.onclick = () => { s.defaultMode = btn.dataset.mode; saveSettings(); renderConfigPanel(); };
  });

  document.querySelectorAll("#configGoal .config-opt").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.goal === s.defaultGoal);
    btn.onclick = () => { s.defaultGoal = btn.dataset.goal; saveSettings(); renderConfigPanel(); };
  });

  $("optShowQuestionFirst").checked = s.showQuestionFirst;
  $("optHighlightKeywords").checked = s.showKeywordHighlights;
  $("optRequireConfidence").checked = s.requireConfidence;
  $("optAutoSave").checked = s.autoSave;
  $("optRestoreSession").checked = s.restoreSessionOnLoad;

  $("optShowQuestionFirst").onchange = function(){ s.showQuestionFirst = this.checked; saveSettings(); };
  $("optHighlightKeywords").onchange = function(){ s.showKeywordHighlights = this.checked; saveSettings(); };
  $("optRequireConfidence").onchange = function(){ s.requireConfidence = this.checked; saveSettings(); };
  $("optAutoSave").onchange = function(){ s.autoSave = this.checked; saveSettings(); };
  $("optRestoreSession").onchange = function(){ s.restoreSessionOnLoad = this.checked; saveSettings(); };

  const repBtn = $("repairModeOpt");
  const hasCandidates = appState.history.length > 0 || loadCurrentSession()?.results?.finished;
  if (repBtn) repBtn.disabled = !hasCandidates;

  const difficultyHelp = $("difficultyHelp");
  if (difficultyHelp) {
    const activeDataset = getActiveDataset();
    difficultyHelp.textContent = `${getDifficultyModeLabel(activeDataset.key)} režim právě zobrazuje ${activeDataset.batteries.length} baterií. Dashboard dál agreguje výsledky napříč základním i pokročilým režimem.`;
  }
}

  function renderQuestionGrid() {
    const s=appState.currentSession; if(!s) return;
    const grid=$("questionGrid");
    grid.innerHTML=s.activeTest.questions.map((_,i)=>`<button class="q-nav" data-index="${i}" type="button">${i+1}</button>`).join("");
    grid.querySelectorAll(".q-nav").forEach(b=>{b.addEventListener("click",()=>goToQuestion(Number(b.dataset.index)));});
    refreshQuestionGrid();
  }
  function refreshQuestionGrid() {
    const s=appState.currentSession; if(!s) return;
    const ci=s.ui.currentQuestionIndex;
    $("questionGrid").querySelectorAll(".q-nav").forEach((b,i)=>{
      const qs=s.questionStates[i];
      b.className="q-nav";
      if(i===ci) b.classList.add("current");
      if(qs.selectedAnswer!==null&&qs.flagged) b.classList.add("answered-flagged");
      else if(qs.flagged) b.classList.add("flagged");
      else if(qs.selectedAnswer!==null) b.classList.add("answered");
      if(qs.timeSpentMs>=SLOW_THRESHOLD_MS) b.classList.add("slow");
      if(qs.confidence==="guess") b.classList.add("low-confidence");
    });
  }
  
function updateMeta() {
  const s = appState.currentSession; if (!s) return;
  $("answeredCount").textContent = String(getAnsweredCount());
  $("answeredTotal").textContent = String(s.activeTest.questions.length);
  $("metaCount").textContent = String(s.activeTest.questions.length);
  $("sidebarBatteryLabel").textContent = `Aktivní baterie: ${s.activeTest.label} – ${s.activeTest.title}`;
  $("activeBatteryPill").textContent = s.activeTest.label;
  const badgeWrap = $("sidebarModeBadge");
  const difficultyMode = s.difficultyMode || "basic";
  badgeWrap.innerHTML = `
    <span class="mode-badge ${s.mode}">${s.mode === "reading-training" ? "trénink čtení" : s.mode === "repair" ? "opravný režim" : "simulace testu"}</span>
    <span class="mode-badge difficulty ${difficultyMode}">${formatDifficultyBadgeText(difficultyMode)}</span>
  `;
}

  function renderQuestion() {
    const s=appState.currentSession; if(!s) return;
    const ci=s.ui.currentQuestionIndex;
    const q=s.activeTest.questions[ci];
    const qs=s.questionStates[ci];
    const sub = q.metadata?.subtopic ? ` · ${q.metadata.subtopic}` : "";
    $("questionMeta").textContent=`Otázka ${ci+1} z ${s.activeTest.questions.length}${sub}`;
    $("questionText").innerHTML=highlightRiskKeywords(q.text);
    const optionsHidden=s.ui.optionsHiddenUntilReady&&!qs.optionsRevealedAt&&qs.selectedAnswer===null;
    const ow=$("optionsWrap"), rw=$("revealWrap");
    if(optionsHidden){ow.classList.add("hidden");rw.classList.remove("hidden");}
    else{ow.classList.remove("hidden");rw.classList.add("hidden");renderOptions(q,qs,ci);}
    renderConfidenceControls(qs,ci);
    renderQuickActions(qs,ci);
    const nw=$("noteWrap"), ni=$("noteInput");
    nw.style.display="block"; ni.value=qs.note||"";
    ni.oninput=function(){setQuestionNote(this.value);};
    $("prevBtn").disabled=ci===0;
    $("nextBtn").disabled=ci===s.activeTest.questions.length-1;
    updateMeta(); refreshQuestionGrid();
  }
  function renderOptions(q,qs,ci) {
    const ow=$("optionsWrap");
    ow.innerHTML=q.options.map((opt,i)=>{
      const sel=qs.selectedAnswer===i?"selected":"";
      return `<button class="option-btn ${sel}" data-index="${i}" type="button"><div class="option-row"><span class="option-label">${LETTERS[i]}</span><span>${escapeHtml(opt)}</span></div></button>`;
    }).join("");
    ow.querySelectorAll(".option-btn").forEach(b=>{b.addEventListener("click",()=>selectAnswer(Number(b.dataset.index)));});
  }
  function renderConfidenceControls(qs,ci) {
    const s=appState.currentSession; if(!s) return;
    const cw=$("confidenceWrap");
    const required = s.ui.requireConfidence;
    if(qs.selectedAnswer===null || (!required && qs.confidence === null)){
      cw.classList.add("hidden");
      return;
    }
    cw.classList.remove("hidden");
    const levels=[{key:"high",label:"Jistý"},{key:"medium",label:"Spíš jistý"},{key:"guess",label:"Tip"}];
    cw.innerHTML=`<div class="confidence-wrap"><div class="conf-label">Jak si jistý odpovědí?</div><div class="confidence-btns">${levels.map(l=>`<button class="conf-btn ${qs.confidence===l.key?"active-"+l.key:""}" data-conf="${l.key}" type="button">${l.label}</button>`).join("")}</div></div>`;
    cw.querySelectorAll(".conf-btn").forEach(b=>{b.addEventListener("click",()=>setConfidence(b.dataset.conf));});
  }
  function renderQuickActions(qs,ci) {
    const qa=$("quickActionsWrap");
    qa.innerHTML=`<button class="action-btn ${qs.flagged?"is-active":""}" id="flagBtn" type="button">${qs.flagged?"★ Označeno":"☆ Označit"}</button><button class="action-btn ${qs.revisitLater?"is-active":""}" id="revisitBtn" type="button">${qs.revisitLater?"↻ Vrátit se":"↻ Vrátit se později"}</button><button class="action-btn" id="clearBtn" type="button">✕ Smazat odpověď</button>`;
    $("flagBtn").addEventListener("click",toggleFlag);
    $("revisitBtn").addEventListener("click",toggleRevisitLater);
    $("clearBtn").addEventListener("click",clearAnswer);
  }
  function buildWeaknessSummary() {
    if (analyticsBridge.buildStudyDashboardSummary) return analyticsBridge.buildStudyDashboardSummary();
    const p = appState.progress || { subtopics: {}, errorTypes: {}, testCount: 0 };
    if (!p || Number(p.testCount || 0) === 0) {
      return {
        weakestSubtopics: [],
        riskySubtopics: [],
        strongestSubtopics: [],
        masteredSubtopics: [],
        undertrainedSubtopics: [],
        weakestDisciplines: [],
        strongestDisciplines: [],
        masteredDisciplines: [],
        undertrainedDisciplines: [],
        topErrors: [],
        topFormulations: [],
        topInstitutionPairs: [],
        highConfidenceWrongCount: 0,
        overallRate: 0,
        finishedSessions: 0,
        answeredCount: 0,
        correctCount: 0,
        wrongCount: 0,
        unansweredCount: 0,
        testedSubtopicCount: 0,
        totalKnownSubtopics: 0,
        testedDisciplineCount: 0,
        totalKnownDisciplines: 0,
        subtopicCoverageRate: 0,
        disciplineCoverageRate: 0,
        thresholds: { weakRate: 70, riskyRate: 50, strongRate: 85, masteredRate: 95 },
        trend: analyticsBridge.buildTrendSummary ? analyticsBridge.buildTrendSummary() : { direction: "none", series: [] }
      };
    }
    const subtopics = Object.keys(p.subtopics || {}).map(k => {
      const item = p.subtopics[k] || {};
      const seen = Number(item.seen || 0);
      const correct = Number(item.correct || 0);
      const wrong = Math.max(0, seen - correct);
      const rate = seen ? Math.round(correct / seen * 100) : 0;
      const status = seen < 3 ? "málo-dat" : rate >= 95 ? "zvládnuté" : rate >= 85 ? "silné" : rate < 50 ? "rizikové" : rate < 70 ? "slabé" : "stabilní";
      return { subtopic: k, seen, correct, wrong, unanswered: 0, rate, status, sessionCount: 1, trend: "stabilní", confidenceLevel: seen >= 5 ? "střední" : "nízká" };
    });
    const topErrors = Object.keys(p.errorTypes || {}).map(k => ({ type: k, count: Number(p.errorTypes[k] || 0), label: analyticsBridge.getErrorLabel ? analyticsBridge.getErrorLabel(k) : (ERROR_LABELS[k] || k) })).sort((a,b)=>b.count-a.count);
    const answered = subtopics.reduce((sum, item) => sum + item.seen, 0);
    const correct = subtopics.reduce((sum, item) => sum + item.correct, 0);
    return {
      weakestSubtopics: subtopics.filter(item => item.seen >= 3).sort((a,b)=>a.rate-b.rate).slice(0, 5),
      riskySubtopics: subtopics.filter(item => item.seen >= 3 && item.rate < 50).sort((a,b)=>a.rate-b.rate).slice(0, 5),
      strongestSubtopics: subtopics.filter(item => item.rate >= 85).sort((a,b)=>b.rate-a.rate).slice(0, 5),
      masteredSubtopics: subtopics.filter(item => item.rate >= 95 && item.seen >= 5).sort((a,b)=>b.rate-a.rate).slice(0, 5),
      undertrainedSubtopics: subtopics.filter(item => item.seen < 3).sort((a,b)=>a.seen-b.seen).slice(0, 5),
      weakestDisciplines: [],
      strongestDisciplines: [],
      masteredDisciplines: [],
      undertrainedDisciplines: [],
      topErrors: topErrors.slice(0, 4),
      topFormulations: [],
      topInstitutionPairs: [],
      highConfidenceWrongCount: 0,
      overallRate: answered ? Math.round(correct / answered * 100) : 0,
      finishedSessions: Number(p.testCount || 0),
      answeredCount: answered,
      correctCount: correct,
      wrongCount: Math.max(0, answered - correct),
      unansweredCount: 0,
      testedSubtopicCount: subtopics.filter(item => item.seen > 0).length,
      totalKnownSubtopics: subtopics.filter(item => item.seen > 0).length,
      testedDisciplineCount: 0,
      totalKnownDisciplines: 0,
      subtopicCoverageRate: 100,
      disciplineCoverageRate: 0,
      thresholds: { weakRate: 70, riskyRate: 50, strongRate: 85, masteredRate: 95 },
      trend: analyticsBridge.buildTrendSummary ? analyticsBridge.buildTrendSummary() : { direction: "none", series: [] }
    };
  }
  function buildRecommendations() {
    if (analyticsBridge.buildRecommendations) return analyticsBridge.buildRecommendations();
    const summary = buildWeaknessSummary();
    const recs = [];
    const repair = summary.riskySubtopics?.[0] || summary.weakestSubtopics?.[0];
    const maintain = summary.masteredSubtopics?.[0] || summary.strongestSubtopics?.[0];
    const coverage = summary.undertrainedSubtopics?.[0];
    if (repair) recs.push({ title: "Zpevni rizikové téma", message: `Začni tématem ${repair.subtopic}.`, filters: { subtopic: repair.subtopic }, bucket: "repair" });
    if (coverage) recs.push({ title: "Doplň málo procvičené téma", message: `Potvrď si ještě téma ${coverage.subtopic}.`, filters: { subtopic: coverage.subtopic }, bucket: "coverage" });
    if (maintain) recs.push({ title: "Udrž silné téma", message: `Průběžně si potvrzuj téma ${maintain.subtopic}.`, filters: { subtopic: maintain.subtopic }, bucket: "maintain" });
    return recs;
  }
  function renderResults(timeExpired) {
    const s=appState.currentSession; if(!s) return;
    const score=calculateScore();
    const metrics=calculateAttentionMetrics();
    s.results.score=score; s.results.analytics=metrics;
    s.results.repairCandidateIndexes=buildRepairCandidateIndexes("all");
    const un=score.total-score.answered;
    const prefix=timeExpired?"Časový limit vypršel. ":"";
    $("scoreMain").textContent=`${score.correct} / ${score.total} bodů (${score.percentage} %)`;
    $("scoreSub").textContent=`${prefix}Zodpovězeno: ${score.answered} z ${score.total}. Nezodpovězené: ${un}.`;
    $("resultsBatteryLabel").textContent=`Vyhodnocená baterie: ${s.activeTest.label} – ${s.activeTest.title}`;

    try {
      inferAutoErrorTypes();
      updateProgressFromSession();
    } catch (err) {
      console.error("SCIO v4: chyba při zápisu progressu.", err);
    }

    try { renderPerformanceSummary(score,metrics); } catch (err) { console.error("SCIO v4: chyba v renderPerformanceSummary.", err); }
    try { renderAttentionDashboard(metrics); } catch (err) { console.error("SCIO v4: chyba v renderAttentionDashboard.", err); }
    try { renderThematicWeaknesses(); } catch (err) { console.error("SCIO v4: chyba v renderThematicWeaknesses.", err); $("thematicWeaknesses").innerHTML = `<div class="dashboard"><h4>Tematická mapa (z tohoto testu)</h4><div class="dash-detail">Tematický rozbor se teď nepodařilo načíst, ale výsledek testu je uložený správně.</div></div>`; }
    try { renderRecommendationsPanel(); } catch (err) { console.error("SCIO v4: chyba v renderRecommendationsPanel.", err); $("recommendationsPanel").innerHTML = `<div class="dashboard" style="background:#f4fafd; border-color:#d5e7f2;"><h4 style="color:#17597a; margin-bottom:8px;">Doporučení pro další postup</h4><div class="dash-detail">Doporučení se teď nepodařilo dopočítat. Výsledek testu je ale zapsaný.</div></div>`; }
    try { renderRepairPanel(); } catch (err) { console.error("SCIO v4: chyba v renderRepairPanel.", err); $("repairPanel")?.classList.add("hidden"); }

    saveCurrentSession();
  }
  function renderPerformanceSummary(score,metrics) {
    const el=$("performanceSummary");
    const s=appState.currentSession; if(!s) return;
    const cards=[
      `<div class="dash-card"><div class="dash-value">${score.correct}</div><div class="dash-label">Správně</div></div>`,
      `<div class="dash-card"><div class="dash-value">${score.total-score.answered}</div><div class="dash-label">Nezodpovězeno</div></div>`,
      `<div class="dash-card"><div class="dash-value">${score.percentage}%</div><div class="dash-label">Úspěšnost</div></div>`
    ];
    if (hasConfidenceTracking(s)) cards.push(`<div class="dash-card"><div class="dash-value">${metrics.guesses||0}</div><div class="dash-label">Tipy</div></div>`);
    el.innerHTML=`<div class="dashboard"><h4>Výkon</h4><div class="dash-grid">${cards.join("")}</div></div>`;
  }
  function renderAttentionDashboard(metrics) {
    const s=appState.currentSession; if(!s) return;
    const el=$("attentionDashboard");
    const slowList=renderMiniQuestionBadges(metrics.slowIdxs);
    const fastList=renderMiniQuestionBadges(metrics.fastWrongIdxs);
    const cards=[
      `<div class="dash-card"><div class="dash-value">${(metrics.avgTime/1000).toFixed(1)}s</div><div class="dash-label">Průměrný čas</div></div>`,
      `<div class="dash-card"><div class="dash-value">${(metrics.medTime/1000).toFixed(1)}s</div><div class="dash-label">Medián času</div></div>`,
      `<div class="dash-card"><div class="dash-value">${metrics.changes||0}</div><div class="dash-label">Změny odpovědi</div></div>`,
      `<div class="dash-card"><div class="dash-value">${metrics.flagged||0}</div><div class="dash-label">Označené</div></div>`,
      `<div class="dash-card"><div class="dash-value">${metrics.revisits||0}</div><div class="dash-label">Návraty k otázkám</div></div>`
    ];
    if (hasConfidenceTracking(s)) cards.push(`<div class="dash-card"><div class="dash-value">${metrics.highConf||0}</div><div class="dash-label">Jistých odpovědí</div></div>`);
    el.innerHTML=`<div class="dashboard"><h4>Pozornostní dashboard</h4><div class="dash-grid">${cards.join("")}</div><div class="dash-detail"><strong>Nejpomalejší:</strong> ${slowList}<br><strong>Rychlé špatné kliky:</strong> ${fastList}<br><strong>Chyby po dlouhém čtení:</strong> ${metrics.longReadErrors||0}</div></div>`;
  }
  function renderThematicWeaknesses() {
    const s = appState.currentSession; if (!s) return;
    const el = $("thematicWeaknesses");
    const subtopics = {}; const errorTypes = {};
    s.questionStates.forEach((qs, i) => {
      const q = s.activeTest.questions[i];
      if (qs.selectedAnswer === null) return;
      const sub = q.metadata?.subtopic || "Neznámé téma";
      if (!subtopics[sub]) subtopics[sub] = { seen: 0, correct: 0 };
      subtopics[sub].seen++;
      if (qs.selectedAnswer === q.correct) subtopics[sub].correct++;
      else {
        const err = qs.manualErrorType || qs.autoErrorType;
        if (err) { if (!errorTypes[err]) errorTypes[err] = 0; errorTypes[err]++; }
      }
    });
    const subs = Object.keys(subtopics)
      .map(k => ({ subtopic: k, seen: subtopics[k].seen, correct: subtopics[k].correct, rate: Math.round(subtopics[k].correct/subtopics[k].seen*100) }))
      .filter(x => x.rate < 80)
      .sort((a,b) => a.rate - b.rate);
    const errs = Object.keys(errorTypes)
      .map(k => ({ type: k, count: errorTypes[k], label: ERROR_LABELS[k] || k }))
      .sort((a,b) => b.count - a.count);
    if (subs.length === 0 && errs.length === 0) {
      el.innerHTML = `<div class="dashboard"><h4>Tematická mapa (z tohoto testu)</h4><div class="dash-detail" style="border-color:#bfe2ca; background:#edf9f1; color:#1c6f44;">V tomto testu nemáte žádné výrazné slabiny. Cíle bylo dosaženo!</div></div>`;
      return;
    }
    const subsHtml = subs.map(s => `<div class="dash-card"><div class="dash-value" style="font-size:18px;">${s.rate}%</div><div class="dash-label" style="font-size:13px; font-weight:700; color:#355266;">${escapeHtml(s.subtopic)}</div><div class="dash-label" style="font-size:11px;">Úspěšnost (z ${s.seen})</div></div>`).join("");
    const errsHtml = errs.map(e => `<div class="dash-card"><div class="dash-value" style="font-size:18px;">${e.count}×</div><div class="dash-label" style="font-size:13px; font-weight:700; color:#9a2f2f;">${escapeHtml(e.label)}</div></div>`).join("");
    el.innerHTML = `<div class="dashboard"><h4>Tematická mapa (z tohoto testu)</h4>${subs.length > 0 ? `<div class="dash-grid" style="margin-bottom:12px;">${subsHtml}</div>` : ""}${errs.length > 0 ? `<strong style="font-size:13px; color:#183b54;">Identifikované chyby:</strong><div class="dash-grid" style="margin-top:8px;">${errsHtml}</div>` : ""}</div>`;
  }
  function renderRecommendationsPanel() {
    const s = appState.currentSession; if (!s) return;
    const el = $("recommendationsPanel");
    const metrics = s.results.analytics || calculateAttentionMetrics();
    const wrong = s.questionStates.filter((qs,i) => qs.selectedAnswer !== null && qs.selectedAnswer !== s.activeTest.questions[i].correct);
    let recs = [];
    if (metrics.fastWrongIdxs?.length > 2) {
      recs.push("Máš hodně rychlých chyb. Zkus v dalším testu přepnout na <strong>Trénink čtení zkráceného textu</strong>, abys zpomalil a lépe vnímal zadání.");
    }
    const knowledgeGaps = wrong.filter(qs => qs.autoErrorType === "knowledge-gap" || qs.confidence === "high").length;
    if (knowledgeGaps > 3) {
      recs.push(`Udělal(a) jsi ${knowledgeGaps} chyb u otázek, kde sis byl(a) relativně jistý(á). U těchto otázek si po testu vždy pečlivě projdi <em>Výklad učitele</em> v sekci rozbor.`);
    } else if (wrong.length === 0 && metrics.revisits > 3 && metrics.avgTime < 45000) {
      recs.push("Výborný výsledek! Dobré tempo a vysoká přesnost. Zkus pro příště <strong>zkrátit časový záměr</strong> a test si projet pod tlakem.");
    } else if (wrong.length > 0) {
      recs.push("Doporučujeme využít <strong>Opravný režim</strong> (tlačítko níže) a podat si chybné s sady otázek znovu, dokud si text zadání ještě pamatuješ.");
    }
    if (recs.length === 0) recs.push("Pokračuj stejným tempem a s rozvahou do další baterie.");

    el.innerHTML = `<div class="dashboard" style="background:#f4fafd; border-color:#d5e7f2;"><h4 style="color:#17597a; margin-bottom:8px;">Doporučení pro další postup</h4><ul class="compact-list" style="margin-top:0;">${recs.map(r => `<li style="color:#2a4358; margin-bottom:6px;">${r}</li>`).join("")}</ul></div>`;
  }
  function renderRepairPanel() {
    const s=appState.currentSession; if(!s) return;
    const candidates=buildRepairCandidateIndexes("errors");
    const el=$("repairPanel");
    if(candidates.length===0){el.classList.add("hidden");return;}
    el.classList.remove("hidden");
    const filters=[{key:"errors",label:`Jen chyby (${buildRepairCandidateIndexes("errors").length})`},{key:"errors-guesses",label:`Chyby+tipy (${buildRepairCandidateIndexes("errors-guesses").length})`},{key:"errors-guesses-slow",label:`+pomalé (${buildRepairCandidateIndexes("errors-guesses-slow").length})`},{key:"flagged",label:`Označené (${buildRepairCandidateIndexes("flagged").length})`},{key:"all",label:`Vše (${buildRepairCandidateIndexes("all").length})`}];
    el.innerHTML=`<div class="repair-panel"><h4>Opravný režim</h4><div class="repair-filters">${filters.map(f=>`<button class="repair-filter" data-filter="${f.key}" type="button">${f.label}</button>`).join("")}</div><div class="repair-info">Vyberte filtr a spusťte opravnou sadu.</div><button class="btn btn-purple btn-sm" id="startRepairBtn" type="button">Spustit opravný režim</button></div>`;
    let selectedFilter="errors";
    el.querySelectorAll(".repair-filter").forEach(b=>{
      b.addEventListener("click",()=>{selectedFilter=b.dataset.filter;el.querySelectorAll(".repair-filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");});
    });
    el.querySelector(".repair-filter").classList.add("active");
    $("startRepairBtn")?.addEventListener("click",()=>startRepairModeFromResults(selectedFilter));
  }
  function renderReview() {
    const s=appState.currentSession; if(!s) return;
    const rw=$("reviewWrap"); rw.innerHTML="";
    s.activeTest.questions.forEach((_,i)=>{ rw.appendChild(renderReviewItem(i)); });
  }
  function renderReviewItem(qIndex) {
    const s = appState.currentSession;
    const q = s.activeTest.questions[qIndex];
    const qs = s.questionStates[qIndex];
    const isCorrect = qs.selectedAnswer === q.correct;
    const isUnanswered = qs.selectedAnswer === null;
    const statusClass = isUnanswered ? "unanswered" : (isCorrect ? "correct" : "incorrect");
    const statusText = isUnanswered ? "bez odpovědi" : (isCorrect ? "správně" : "chybně");
    const statusPill = isUnanswered ? "neutral" : (isCorrect ? "correct" : "wrong");

    const item = document.createElement("div");
    item.className = "review-item";
    
    const head = `<div class="review-head ${statusClass}"><span>Otázka ${qIndex + 1}</span><span class="pill ${statusPill}">${statusText}</span></div>`;
    
    // TAB BUTTONS
    const tabs = `
      <div class="review-tabs">
        <button class="review-tab active" data-tab="qa" type="button">Zadání a odpověď</button>
        <button class="review-tab" data-tab="tutor" type="button">Výklad učitele (Tutor)</button>
      </div>
    `;

    // TAB 1: QA
    let tabQA = `<div class="review-content" data-content="qa">`;
    tabQA += `<div style="margin-bottom:12px;">${highlightRiskKeywords(q.text)}</div>`;
    tabQA += `<div class="review-options">`;
    q.options.forEach((opt, oi) => {
      let cls = "review-option";
      if (oi === q.correct) cls += " correct";
      if (qs.selectedAnswer === oi && qs.selectedAnswer !== q.correct) cls += " user-wrong";
      let extra = "";
      if (oi === q.correct) extra += ' <span class="pill correct">správná odpověď</span>';
      if (qs.selectedAnswer === oi && qs.selectedAnswer !== q.correct) extra += ' <span class="pill wrong">tvá odpověď</span>';
      tabQA += `<div class="${cls}"><strong>${LETTERS[oi]})</strong> ${escapeHtml(opt)}${extra}</div>`;
    });
    tabQA += `</div>`;
    tabQA += `<div class="review-meta-grid" style="margin-top:12px;">
      <div class="review-meta-item"><strong>Tvá volba</strong>${isUnanswered ? "—" : LETTERS[qs.selectedAnswer]}</div>
      <div class="review-meta-item"><strong>Správně</strong>${LETTERS[q.correct]}</div>
      <div class="review-meta-item"><strong>Čas</strong>${(qs.timeSpentMs / 1000).toFixed(1)}s</div>
      <div class="review-meta-item"><strong>Jistota</strong>${qs.confidence || "—"}</div>
    </div>`;
    tabQA += `</div>`;

    // TAB 2: TUTOR
    let tabTutor = `<div class="review-content hidden" data-content="tutor">`;
    
    const m = q.metadata || {};
    
    // Core & Signal
    if (m.explanationCore) tabTutor += `<div class="review-explanation" style="margin-bottom:10px;"><strong>Podstata otázky:</strong> ${escapeHtml(m.explanationCore)}</div>`;
    if (m.signalHint) tabTutor += `<div class="review-explanation" style="margin-bottom:10px;"><strong>Signální slovo:</strong> <span style="color:#d4820a; font-weight:700;">${escapeHtml(m.signalHint)}</span></div>`;
    
    // Why Correct / Why Distractor
    if (m.explanationCorrect) tabTutor += `<div class="review-explanation" style="margin-bottom:10px;"><strong>Proč je ${LETTERS[q.correct]} správně:</strong> ${escapeHtml(m.explanationCorrect)}</div>`;
    if (m.explanationDistractor && !isCorrect && !isUnanswered) {
      tabTutor += `<div class="review-explanation" style="margin-bottom:10px; border-color:#f3c9c9;"><strong>Lákavý distraktor:</strong> ${escapeHtml(m.explanationDistractor)}</div>`;
    }

    // Micro-lesson & Recall
    if (m.microLesson) tabTutor += `<div class="review-explanation tutor-lesson" style="margin-bottom:10px;"><strong>Teoretické okénko:</strong> ${escapeHtml(m.microLesson)}</div>`;
    if (m.recallPrompt) tabTutor += `<div class="review-explanation tutor-recall" style="margin-bottom:10px;"><strong>Otázka k zapamatování:</strong> ${escapeHtml(m.recallPrompt)}</div>`;

    // Diagnostic Diagnosis
    if (!isCorrect && !isUnanswered) {
      const autoErr = qs.autoErrorType ? ERROR_LABELS[qs.autoErrorType] : "nezjištěno";
      tabTutor += `<div class="review-explanation" style="background:#fffcf5; border-style:dashed;">`;
      tabTutor += `<strong>Diagnostika trenažéru:</strong> Pravděpodobný důvod chyby: <em>${autoErr}</em>`;
      tabTutor += `<div style="margin-top:8px;"><strong>Manuální oprava:</strong> <select class="error-type-select" data-qi="${qIndex}">${Object.entries(ERROR_LABELS).map(([k, v]) => `<option value="${k}" ${(qs.manualErrorType || qs.autoErrorType) === k ? "selected" : ""}>${v}</option>`).join("")}</select></div>`;
      tabTutor += `</div>`;
    }

    if (qs.note) tabTutor += `<div class="review-explanation" style="margin-top:10px;"><strong>Tvá poznámka:</strong> ${escapeHtml(qs.note)}</div>`;
    
    tabTutor += `</div>`;

    item.innerHTML = head + `<div class="review-body">` + tabs + tabQA + tabTutor + `</div>`;

    // Event Listeners for Tabs
    const btns = item.querySelectorAll(".review-tab");
    const contents = item.querySelectorAll(".review-content");
    btns.forEach(b => {
      b.addEventListener("click", () => {
        const target = b.dataset.tab;
        btns.forEach(x => x.classList.toggle("active", x.dataset.tab === target));
        contents.forEach(c => c.classList.toggle("hidden", c.dataset.content !== target));
      });
    });

    const sel = item.querySelector(".error-type-select");
    if (sel) sel.addEventListener("change", function () {
      s.questionStates[qIndex].manualErrorType = this.value;
      saveCurrentSession();
    });

    return item;
  }
  function applyFocusMode() {
    const s=appState.currentSession;
    document.body.classList.toggle("focus-mode",s?.ui?.focusMode||false);
    const btn=$("focusModeBtn");
    if(btn) btn.textContent=s?.ui?.focusMode?"⊟ Zrušit soustředění":"⊞ Režim soustředění";
  }

  // ═══════════════════════════════════════════
  // 10. INTERACTIONS
  // ═══════════════════════════════════════════
  
function selectBattery(id) {
  appState.selectedBatteryId = id;
  const battery = getActiveBatteryMap()[id] || null;
  updateSelectionState();
  renderBatteryCards();
  renderBatteryDetail(battery);
}

  
function startBattery(id, options = {}) {
  const difficultyMode = getDatasetByMode(options.difficultyMode || appState.settings.difficultyMode || "basic").key;
  const battery = getDatasetByMode(difficultyMode).batteryMap[id];
  if (!battery) return;
  const s = appState.settings;
  s.difficultyMode = difficultyMode;
  saveSettings();
  const modeConfig = {
    mode: s.defaultMode,
    goal: s.defaultGoal,
    difficultyMode,
    showQuestionFirst: s.showQuestionFirst || s.defaultMode === "reading-training",
    showKeywordHighlights: s.showKeywordHighlights,
    requireConfidence: s.requireConfidence
  };
  appState.currentSession = buildSessionBattery(battery, modeConfig);
  appState.selectedBatteryId = id;
  saveCurrentSession();
  setAppMode("test");
  renderQuestionGrid();
  updateMeta();
  beginQuestionView(0);
  renderQuestion();
  applyFocusMode();
  startTimer();
}

  
function resumeSession() {
  const saved = loadCurrentSession();
  if (!saved) return;
  const difficultyMode = getDatasetByMode(saved.difficultyMode || "basic").key;
  appState.settings.difficultyMode = difficultyMode;
  saveSettings();
  appState.currentSession = saved;
  appState.currentSession.difficultyMode = difficultyMode;
  appState.currentSession.difficultyLabel = getDifficultyModeLabel(difficultyMode);
  appState.selectedBatteryId = saved.batteryId;
  renderConfigPanel();
  if (saved.results.finished) {
    setAppMode("results");
    renderResults(saved.results.timeExpired);
    if (saved.ui.reviewVisible) showReview();
  } else {
    const rem = getRemainingSeconds();
    if (rem <= 0) { setAppMode("test"); renderQuestionGrid(); updateMeta(); finishTest(true); return; }
    setAppMode("test");
    renderQuestionGrid();
    updateMeta();
    beginQuestionView(saved.ui.currentQuestionIndex);
    renderQuestion();
    applyFocusMode();
    startTimer();
  }
}

  
function restartBattery() {
  const session = appState.currentSession;
  if (!session) return;
  startBattery(session.batteryId, { difficultyMode: session.difficultyMode || appState.settings.difficultyMode || "basic" });
}

  
function finishTest(timeExpired = false) {
  const s = appState.currentSession; if (!s || s.results.finished) return;
  endQuestionView(s.ui.currentQuestionIndex);
  s.results.finished = true;
  s.results.timeExpired = timeExpired;
  s.timing.finishedAt = new Date().toISOString();
  stopTimer();
  const score = calculateScore();
  addHistoryEntry({
    sessionId: s.sessionId,
    date: new Date().toISOString(),
    batteryId: s.batteryId,
    batteryLabel: s.batteryLabel,
    batteryTitle: s.batteryTitle,
    difficultyMode: s.difficultyMode || "basic",
    difficultyLabel: s.difficultyLabel || getDifficultyModeLabel(s.difficultyMode || "basic"),
    mode: s.mode,
    score: score.correct,
    total: score.total,
    percentage: score.percentage,
    timeExpired,
    averageTimeMs: calculateAttentionMetrics().avgTime || 0,
    guessCount: s.questionStates.filter(q => q.confidence === "guess").length,
    flaggedCount: s.questionStates.filter(q => q.flagged).length
  });
  setAppMode("results");
  renderResults(timeExpired);
  saveCurrentSession();
}

  
function backToSelection() {
  const s = appState.currentSession;
  if (s && !s.results.finished) {
    if (!confirm("Opravdu se chceš vrátit? Rozpracovaný test bude uložen.")) return;
    saveCurrentSession();
  }
  stopTimer();
  document.body.classList.remove("focus-mode");
  setAppMode("start");
  renderConfigPanel();
  renderBatteryCards();
  renderBatteryDetail(appState.selectedBatteryId ? getActiveBatteryMap()[appState.selectedBatteryId] : null);
  updateSelectionState();
  renderRestorePanel();
  renderWeaknessPanel();
  renderHistoryPanel();
}

  function goToQuestion(index) {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    endQuestionView(s.ui.currentQuestionIndex);
    s.ui.currentQuestionIndex=index;
    beginQuestionView(index); renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function goNext() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    if(s.ui.currentQuestionIndex<s.activeTest.questions.length-1) goToQuestion(s.ui.currentQuestionIndex+1);
  }
  function goPrev() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    if(s.ui.currentQuestionIndex>0) goToQuestion(s.ui.currentQuestionIndex-1);
  }
  function selectAnswer(index) {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    const ci=s.ui.currentQuestionIndex, qs=s.questionStates[ci];
    if(qs.selectedAnswer!==null&&qs.selectedAnswer!==index) qs.answerChanges++;
    if(qs.firstAnswer===null) qs.firstAnswer=index;
    qs.selectedAnswer=index;
    qs.resolvedStatus=qs.flagged?"answered-flagged":"answered";
    s.metrics.totalAnswerChanges+=qs.answerChanges>0?1:0;
    renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function clearAnswer() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    const ci=s.ui.currentQuestionIndex, qs=s.questionStates[ci];
    qs.selectedAnswer=null; qs.confidence=null;
    qs.resolvedStatus=qs.flagged?"flagged":"unanswered";
    renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function setConfidence(level) {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    s.questionStates[s.ui.currentQuestionIndex].confidence=level;
    renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function toggleFlag() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    const qs=s.questionStates[s.ui.currentQuestionIndex];
    qs.flagged=!qs.flagged;
    qs.resolvedStatus=qs.selectedAnswer!==null?(qs.flagged?"answered-flagged":"answered"):(qs.flagged?"flagged":"unanswered");
    s.metrics.totalFlagged=s.questionStates.filter(q=>q.flagged).length;
    renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function toggleRevisitLater() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    s.questionStates[s.ui.currentQuestionIndex].revisitLater=!s.questionStates[s.ui.currentQuestionIndex].revisitLater;
    renderQuestion();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  function setQuestionNote(note) {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    s.questionStates[s.ui.currentQuestionIndex].note=note;
  }
  function revealOptions() {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    const ci=s.ui.currentQuestionIndex, qs=s.questionStates[ci];
    qs.optionsRevealedAt=new Date().toISOString();
    qs.optionsWereInitiallyHidden=true;
    renderQuestion();
  }
  function toggleFocusMode() {
    const s=appState.currentSession; if(!s) return;
    s.ui.focusMode=!s.ui.focusMode;
    applyFocusMode();
    if(appState.settings.autoSave) saveCurrentSession();
  }
  let reviewRendered=false;
  function showReview() {
    if(!reviewRendered){renderReview();reviewRendered=true;}
    $("reviewWrap").classList.remove("hidden");
    $("showReviewBtn").classList.add("hidden");
    $("hideReviewBtn").classList.remove("hidden");
    if(appState.currentSession){appState.currentSession.ui.reviewVisible=true;saveCurrentSession();}
  }
  function hideReview() {
    $("reviewWrap").classList.add("hidden");
    $("showReviewBtn").classList.remove("hidden");
    $("hideReviewBtn").classList.add("hidden");
    if(appState.currentSession){appState.currentSession.ui.reviewVisible=false;saveCurrentSession();}
  }
  function startRepairModeFromResults(filterType) {
    const s=appState.currentSession; if(!s) return;
    const candidates=buildRepairCandidateIndexes(filterType||"errors");
    if(!candidates.length){alert("Žádné otázky pro opravu.");return;}
    const repairSession=buildRepairSessionFromResults(s,candidates);
    if(!repairSession) return;
    appState.currentSession=repairSession;
    reviewRendered=false;
    saveCurrentSession();
    setAppMode("test");
    renderQuestionGrid(); updateMeta();
    beginQuestionView(0); renderQuestion();
    applyFocusMode(); startTimer();
  }

  // ═══════════════════════════════════════════
  // 11. EVENT HANDLERS
  // ═══════════════════════════════════════════
  $("startTestBtn").addEventListener("click",()=>{if(appState.selectedBatteryId) startBattery(appState.selectedBatteryId);});
  $("prevBtn").addEventListener("click",goPrev);
  $("nextBtn").addEventListener("click",goNext);
  $("changeBatteryBtn").addEventListener("click",backToSelection);
  $("finishBtn").addEventListener("click",()=>{
    const s=appState.currentSession; if(!s||s.results.finished) return;
    if(confirm("Opravdu chceš test vyhodnotit?")) finishTest(false);
  });
  $("restartBtn").addEventListener("click",()=>{reviewRendered=false;restartBattery();});
  $("backToSelectionBtn").addEventListener("click",backToSelection);
  $("showReviewBtn").addEventListener("click",showReview);
  $("hideReviewBtn").addEventListener("click",hideReview);
  $("focusModeBtn").addEventListener("click",toggleFocusMode);
  $("fmChangeBatteryBtn")?.addEventListener("click",backToSelection);
  $("fmExitFocusBtn")?.addEventListener("click",toggleFocusMode);
  $("revealOptionsBtn").addEventListener("click",revealOptions);
  $("clearSessionBtn").addEventListener("click",()=>{clearCurrentSession();backToSelection();});
  $("repairBtn").addEventListener("click",()=>{
    const s=appState.currentSession;
    if(!s||!s.results.finished) return;
    startRepairModeFromResults("errors");
  });

  window.addEventListener("keydown",(e)=>{
    const s=appState.currentSession; if(!s||s.results.finished) return;
    if(document.activeElement&&(document.activeElement.tagName==="TEXTAREA"||document.activeElement.tagName==="INPUT")) return;
    const key=e.key.toUpperCase();
    if(["A","B","C","D"].includes(key)){selectAnswer(LETTERS.indexOf(key));e.preventDefault();}
    if(e.key==="ArrowLeft"){goPrev();e.preventDefault();}
    if(e.key==="ArrowRight"){goNext();e.preventDefault();}
    if(key==="F"){toggleFlag();e.preventDefault();}
    if(key==="R"){revealOptions();e.preventDefault();}
    if(key==="1") setConfidence("high");
    if(key==="2") setConfidence("medium");
    if(key==="3") setConfidence("guess");
    if(e.key===" "){toggleFocusMode();e.preventDefault();}
    if(e.key==="Enter"){
      const ci=s.ui.currentQuestionIndex, qs=s.questionStates[ci];
      if(s.ui.optionsHiddenUntilReady&&!qs.optionsRevealedAt) revealOptions();
      e.preventDefault();
    }
  });

  document.addEventListener("visibilitychange",()=>{
    if(document.hidden&&appState.currentSession&&!appState.currentSession.results.finished){
      endQuestionView(appState.currentSession.ui.currentQuestionIndex);
      saveCurrentSession();
    } else if(!document.hidden&&appState.currentSession&&!appState.currentSession.results.finished){
      beginQuestionView(appState.currentSession.ui.currentQuestionIndex);
    }
  });

  window.addEventListener("beforeunload",(e)=>{
    if(appState.currentSession&&!appState.currentSession.results.finished){
      endQuestionView(appState.currentSession.ui.currentQuestionIndex);
      saveCurrentSession();
      e.preventDefault(); e.returnValue="";
    }
  });

  // ═══════════════════════════════════════════
  // 12. BOOTSTRAP
  // ═══════════════════════════════════════════
  
function initApp() {
  migrateStorageIfNeeded();
  appState.settings = loadSettings();
  appState.history = loadHistory();
  appState.progress = loadProgress();
  if ($("statQuestions")) $("statQuestions").textContent = String(getAllDatasetsQuestionCount());
  renderConfigPanel();
  renderBatteryCards();
  renderBatteryDetail(null);
  updateSelectionState();
  renderRestorePanel();
  renderWeaknessPanel();
  renderHistoryPanel();
  if (appState.settings.restoreSessionOnLoad) {
    const saved = loadCurrentSession();
    if (saved) { resumeSession(); return; }
  }
  setAppMode("start");
}

  window.initSCIOV4 = initApp;
  window.getActiveBatteries = getActiveBatteries;
  window.getActiveBatteryMap = getActiveBatteryMap;
  window.getActiveDataset = getActiveDataset;
  window.getDifficultyModeLabel = getDifficultyModeLabel;
  window.normalizeDifficultyMode = normalizeDifficultyMode;
  window.SCIO_V4_SHARED = {
    LETTERS,
    STORAGE_KEYS,
    LEGACY_STORAGE_KEYS,
    SLOW_THRESHOLD_MS,
    FAST_THRESHOLD_MS,
    REVISIT_THRESHOLD,
    MAX_HISTORY,
    RISK_PATTERNS,
    BATTERIES,
    BATTERY_MAP,
    DATASETS,
    ERROR_LABELS,
    loadMetadataExport,
    loadBattery8MetadataMap,
    buildMetadataIndex,
    buildBattery8MapIndex,
    normalizeMetadataItem,
    normalizeBattery8MapItem,
    normalizeQuestionMetadata,
    buildReviewFallbacks,
    attachMetadataToBatteryQuestions,
    resolveQuestionEffectiveCorrect,
    getActiveBatteries,
    getActiveBatteryMap,
    getActiveDataset,
    getDifficultyModeLabel,
    normalizeDifficultyMode
  };
  
function normalizeQuestion(q, qi, bId, bLabel, datasetKey) {
  const opts = Array.isArray(q?.options) ? q.options.slice(0, 4).map(o => String(o ?? "").trim()) : [];
  if (opts.length !== 4) throw new Error(`Otázka ${qi + 1} nemá přesně 4 možnosti.`);
  const qNum = Number.isInteger(q?.number) ? q.number : qi + 1;
  const globalId = `B${String(bId).padStart(2, "0")}Q${String(qNum).padStart(2, "0")}`;
  const metadata = normalizeQuestionMetadata(q, {
    batteryId: bId,
    batteryLabel: bLabel,
    questionNumber: qNum,
    globalId,
    datasetKey: normalizeDifficultyMode(datasetKey || "basic")
  });
  const c = resolveQuestionEffectiveCorrect(q, metadata);
  return {
    number: qNum,
    globalId,
    text: String(q?.text ?? "").trim(),
    options: opts,
    correct: c,
    correctLetter: LETTERS[c],
    metadata
  };
}

   