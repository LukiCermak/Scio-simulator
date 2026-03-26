
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
  const ERROR_LABELS = {"knowledge-gap":"Neznalost","inattention":"Nepozornost","missed-negation":"Přehlédnutí negace","institution-confusion":"Záměna institucí","distractor-trap":"Past distraktoru","time-pressure":"Časový tlak","overthinking":"Přemýšlení","impulsive-click":"Impulzivní klik","no-answer":"Bez odpovědi"};

  // ═══════════════════════════════════════════
  // 2. DATA NORMALIZATION (WITH METADATA V3)
  // ═══════════════════════════════════════════
  const RAW_BATTERIES = Array.isArray(window.SCIO_V4_RAW_BATTERIES) ? window.SCIO_V4_RAW_BATTERIES : [];
  
  
  function loadMetadataExport() {
    return window.metadataExport || { schemaVersion: 0, items: [] };
  }
  function loadBattery8MetadataMap() {
    return window.battery8Map || { schemaVersion: 0, items: [] };
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
  const METADATA_INDEX = buildMetadataIndex(loadMetadataExport());
  const BATTERY8_MAP = buildBattery8MapIndex(loadBattery8MetadataMap());

  function inferFormulationFlagsFromText(text) {
    const src = String(text || "").toLowerCase();
    const flags = [];
    if (/není|nesprávně|neplatí|neodpovídá/.test(src)) flags.push("negace");
    if (/nejpřesněji|nejlépe|nejvhodnější|nejvýrazněji/.test(src)) flags.push("superlativní přesnost");
    if (/první krok/.test(src)) flags.push("první krok");
    if (/v rámci školství|v rámci zdravotnictví|v rámci sociální oblasti/.test(src)) flags.push("systémová hranice");
    if (/role|odpovědnost|kompetenc/.test(src)) flags.push("odpovědnost role");
    if (/dokument|zpráva|doporučen/.test(src)) flags.push("funkce dokumentu");
    if (/typicky|nejčastěji/.test(src)) flags.push("typičnost");
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
  function normalizeQuestionMetadata(question, context) {
    const { batteryId, batteryLabel, questionNumber, globalId } = context;
    let metadataItem = null;
    if (batteryId === 8 && BATTERY8_MAP[globalId]) metadataItem = BATTERY8_MAP[globalId].resolvedMetadata;
    else if (METADATA_INDEX[globalId]) metadataItem = METADATA_INDEX[globalId];
    const fallback = buildReviewFallbacks(question, batteryLabel);
    const merged = { ...fallback, ...(metadataItem || {}) };
    merged.globalId = merged.globalId || globalId;
    merged.batteryId = merged.batteryId || batteryId;
    merged.questionNumber = merged.questionNumber || questionNumber;
    merged.formulationFlags = Array.from(new Set([...(merged.formulationFlags || []), ...inferFormulationFlagsFromText(question?.text || "")]));
    merged.institutionPair = inferInstitutionPair(merged, question?.text || "");
    if (!merged.signalPattern?.length && merged.formulationFlags.length) merged.signalPattern = merged.formulationFlags.slice(0, 3);
    if (!merged.recommendedRepairFilters?.length) {
      merged.recommendedRepairFilters = [merged.subtopic, merged.discipline, merged.questionType, merged.institutionPair].filter(Boolean);
    }
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

  function normalizeBattery(b, i) {
    const bId = Number.isInteger(b?.id) ? b.id : i + 1;
    const bLabel = String(b?.label ?? `Baterie ${i+1}`).trim();
    const questions = Array.isArray(b?.questions) ? b.questions.map((q, qi) => normalizeQuestion(q, qi, bId, bLabel)) : [];
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
      validation: b?.validation ?? null
    };
  }

  const BATTERIES = RAW_BATTERIES.map((b,i) => normalizeBattery(b,i)).sort((a,b) => a.id - b.id);
  const BATTERY_MAP = Object.fromEntries(BATTERIES.map(b => [b.id, b]));

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

  // ═══════════════════════════════════════════
  // 3. UTILITIES
  // ═══════════════════════════════════════════
  function generateId() { return Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
  function escapeHtml(t) { const d=document.createElement("div"); d.textContent=t; return d.innerHTML; }
  function formatTime(s) { const m=Math.floor(s/60),sec=s%60; return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`; }
  function formatDate(iso) { if(!iso) return "—"; try{const d=new Date(iso); return d.toLocaleDateString("cs-CZ",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch(e){return "—";} }
  function median(arr) { if(!arr.length) return 0; const s=[...arr].sort((a,b)=>a-b); const m=Math.floor(s.length/2); return s.length%2?s[m]:(s[m-1]+s[m])/2; }
  function safeParse(json, fb) { if(!json) return fb; try { const r = JSON.parse(json); return r!==null ? r : fb; } catch(e) { return fb; } }
  function shuffleArray(items) { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function $(id) { return document.getElementById(id); }

  // ═══════════════════════════════════════════
  // 4. STORAGE API
  // ═══════════════════════════════════════════
  function loadSettings() {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    const s = safeParse(raw, null);
    if (s && s.schemaVersion === SCHEMA_VERSION) return s;
    return getDefaultSettings();
  }
  function saveSettings() { try { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(appState.settings)); } catch(e){} }
  function loadHistory() { return safeParse(localStorage.getItem(STORAGE_KEYS.HISTORY), []).slice(0, MAX_HISTORY); }
  function saveHistory() { try { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(appState.history.slice(0, MAX_HISTORY))); } catch(e){} }
  function addHistoryEntry(entry) { appState.history.unshift(entry); if(appState.history.length>MAX_HISTORY) appState.history.length=MAX_HISTORY; saveHistory(); }
  function loadProgress() { return safeParse(localStorage.getItem(STORAGE_KEYS.PROGRESS), { subtopics: {}, errorTypes: {}, testCount: 0 }); }
  function saveProgress() { try { localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(appState.progress)); } catch(e){} }
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
    return { schemaVersion:SCHEMA_VERSION, restoreSessionOnLoad:true, defaultMode:"simulation", defaultGoal:"attention", showKeywordHighlights:false, requireConfidence:false, hideSidebarDuringReading:false, focusModeDefault:false, showQuestionFirst:false, autoSave:true };
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
    const sessionQs = battery.questions.map((q,i) => {
      const remapped = remapQuestionOptions(q, targets[i]);
      return {...remapped, sourceBatteryId:battery.id, sourceQuestionNumber:q.number, tags:battery.tags||[]};
    });
    const dist = sessionQs.reduce((a,q)=>{a[LETTERS[q.correct]]++;return a;},{A:0,B:0,C:0,D:0});
    const mode = modeConfig?.mode || "simulation";
    const goal = modeConfig?.goal || "attention";
    const now = new Date();
    const endsAt = new Date(now.getTime() + (battery.durationMinutes||30)*60*1000);
    return {
      schemaVersion:SCHEMA_VERSION, sessionId:generateId(), createdAt:now.toISOString(), updatedAt:now.toISOString(),
      mode, goal, batteryId:battery.id, batteryLabel:battery.label, batteryTitle:battery.title,
      activeTest:{ id:battery.id, label:battery.label, title:battery.title, durationMinutes:battery.durationMinutes||30, questions:sessionQs, sessionDistribution:dist },
      timing:{ startedAt:now.toISOString(), endsAt:endsAt.toISOString(), finishedAt:null },
      ui:{ currentQuestionIndex:0, reviewVisible:false, focusMode:false, optionsHiddenUntilReady:modeConfig?.showQuestionFirst||mode==="reading-training", showKeywordHighlights:modeConfig?.showKeywordHighlights!==false, requireConfidence:modeConfig?.requireConfidence!==false },
      metrics:{ totalViews:0, totalAnswerChanges:0, totalFlagged:0 },
      questionStates: sessionQs.map((_,i)=>createQuestionState(i)),
      results:{ finished:false, timeExpired:false, score:null, analytics:null, repairCandidateIndexes:[] }
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
    const s = appState.currentSession; if (!s || s.mode === "repair") return;
    const p = appState.progress;
    p.testCount++;
    s.questionStates.forEach((qs, i) => {
      const q = s.activeTest.questions[i];
      const subtopic = q.metadata?.subtopic || "Neznámé";
      if (!p.subtopics[subtopic]) p.subtopics[subtopic] = { seen: 0, correct: 0 };
      p.subtopics[subtopic].seen++;
      if (qs.selectedAnswer === q.correct) {
        p.subtopics[subtopic].correct++;
      } else {
        const err = qs.manualErrorType || qs.autoErrorType;
        if (err) {
          if (!p.errorTypes[err]) p.errorTypes[err] = 0;
          p.errorTypes[err]++;
        }
      }
    });
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
    const grid=$("batteryGrid");
    grid.innerHTML=BATTERIES.map(b=>{
      const sel=b.id===appState.selectedBatteryId?"selected":"";
      return `<button type="button" class="battery-card ${sel}" data-battery="${b.id}"><div class="battery-card-head"><span class="battery-label">${escapeHtml(b.label)} – ${escapeHtml(b.title)}</span><span class="battery-badge">${b.id===8?"+1":b.id}</span></div><p class="battery-subtitle">${escapeHtml(b.subtitle)}</p><div class="battery-meta"><span class="chip">${b.questionCount} otázek</span><span class="chip">${b.durationMinutes} minut</span><span class="chip">${escapeHtml(b.difficulty)}</span></div></button>`;
    }).join("");
    grid.querySelectorAll(".battery-card").forEach(c=>{c.addEventListener("click",()=>selectBattery(Number(c.dataset.battery)));});
  }
  function renderBatteryDetail(battery) {
    const top=$("batteryDetail").querySelector(".detail-top");
    if(!battery){
      top.innerHTML='<div><h3>Vyber baterii</h3><p>Po kliknutí se tady zobrazí účel, dominantní obsah, tematický rozpis a role baterie.</p></div><span class="badge">—</span>';
      $("detailPurpose").innerHTML="<p>Zatím není vybraná žádná baterie.</p>";
      $("detailDominant").innerHTML="";$("detailBreakdown").innerHTML="";
      $("detailProfile").innerHTML="<p>Vybraná baterie tady dostane svůj profil.</p>";
      return;
    }
    top.innerHTML=`<div><h3>${escapeHtml(battery.label)} – ${escapeHtml(battery.title)}</h3><p>${escapeHtml(battery.subtitle)}</p></div><span class="badge">${battery.id===8?"+1":battery.id}</span>`;
    const dc=BATTERY_DETAIL_COPY[battery.id]||{};
    $("detailPurpose").innerHTML=`<p>${escapeHtml(dc.purposeText||battery.purpose)}</p>`;
    $("detailDominant").innerHTML=battery.dominant.map(x=>`<span class="chip">${escapeHtml(x)}</span>`).join("");
    $("detailBreakdown").innerHTML=battery.breakdown.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
    $("detailProfile").innerHTML=(dc.profileParagraphs||[]).map(x=>`<p>${escapeHtml(x)}</p>`).join("");
  }
  function renderRestorePanel() {
    const panel=$("restorePanel");
    const saved=loadCurrentSession();
    if(!saved){panel.classList.add("hidden");panel.innerHTML="";return;}
    panel.classList.remove("hidden");
    const status=saved.results?.finished?"dokončeno":"rozpracováno";
    const remaining=saved.results?.finished?"":", zbývá "+formatTime(Math.max(0,Math.floor((new Date(saved.timing.endsAt).getTime()-new Date(saved.updatedAt).getTime())/1000)));
    panel.innerHTML=`<div class="restore-panel"><h4>Poslední session</h4><div class="restore-info"><strong>${escapeHtml(saved.batteryLabel)}</strong> – ${escapeHtml(saved.batteryTitle||"")}<br>Režim: ${escapeHtml(saved.mode)} · Stav: ${status}${remaining}<br>Uloženo: ${formatDate(saved.updatedAt)}</div><div class="restore-actions"><button class="btn btn-primary btn-sm" id="restoreSessionBtn">Obnovit session</button><button class="btn btn-light btn-sm" id="newSessionBtn">Nový pokus</button><button class="btn btn-danger btn-sm" id="deleteSessionBtn">Smazat session</button></div></div>`;
    $("restoreSessionBtn")?.addEventListener("click",resumeSession);
    $("newSessionBtn")?.addEventListener("click",()=>{clearCurrentSession();renderRestorePanel();});
    $("deleteSessionBtn")?.addEventListener("click",()=>{clearCurrentSession();renderRestorePanel();});
  }
  function startTargetedPractice(type, param) {
    let allQs = [];
    BATTERIES.forEach(b => {
      if (b.id === 8) return; 
      b.questions.forEach(q => { allQs.push({ ...q, sourceBatteryId: b.id }); });
    });
    let filtered = []; let title = "";
    if (type === "weakest-subtopic") {
      filtered = allQs.filter(q => q.metadata?.subtopic === param);
      title = `Slabina: ${param}`;
    } else if (type === "error-type") {
      filtered = allQs.filter(q => {
        const m = q.metadata || {};
        if (param === "distractor-trap" && (m.trapPattern === "near-category" || m.trapPattern === "distractor-trap")) return true;
        if (m.likelyErrorTypes && m.likelyErrorTypes.includes(param)) return true;
        if (param === "missed-negation" && /\\bnenì\\b|\\bnení\\b|\\bnesprávně\\b|\\bneplatí\\b|\\bneodpovídá\\b/i.test(q.text)) return true;
        return false;
      });
      title = `Typ chyby: ${ERROR_LABELS[param] || param}`;
    }
    if (filtered.length === 0) { alert("Nenalezeny žádné otázky pro tento filtr."); return; }
    const sessionQs = shuffleArray(filtered).slice(0, 20);
    const dummyBattery = { id: "tgt-" + Date.now(), label: "Cílený trénink", title: title, durationMinutes: Math.max(5, Math.ceil(sessionQs.length * 0.6)), questions: sessionQs };
    const s = appState.settings;
    appState.currentSession = buildSessionBattery(dummyBattery, { mode: "simulation", goal: "accuracy", showQuestionFirst: false, showKeywordHighlights: true, requireConfidence: s.requireConfidence });
    appState.selectedBatteryId = null;
    saveCurrentSession(); setAppMode("test");
    renderQuestionGrid(); updateMeta();
    beginQuestionView(0); renderQuestion();
    applyFocusMode(); startTimer();
  }
  function renderWeaknessPanel() {
    const wp = $("weaknessPanel");
    const summary = buildWeaknessSummary();
    const p = appState.progress;
    
    if (!p || p.testCount === 0) {
      wp.classList.add("hidden");
      return;
    }
    wp.classList.remove("hidden");
    const recs = buildRecommendations();
    const recsHtml = recs.map(r => `<li>${escapeHtml(r)}</li>`).join("");
    
    const subsHtml = summary.weakestSubtopics.length > 0
      ? summary.weakestSubtopics.map(s => {
          return `<div class="dash-card"><div class="dash-value" style="font-size:18px;">${s.rate}%</div><div class="dash-label" style="font-size:13px; font-weight:700; color:#355266; margin-bottom:8px;">${escapeHtml(s.subtopic)}</div><div class="dash-label" style="margin-bottom:12px;">Úspěšnost (z ${s.seen} otázek)</div><button class="btn btn-primary btn-sm btn-practice" data-type="weakest-subtopic" data-param="${escapeHtml(s.subtopic)}">Procvičit téma</button></div>`;
        }).join("")
      : "<p style='color:#60758a; font-size:13px;'>Zatím nemáte dostatek dat z konkrétních témat.</p>";

    const errsHtml = summary.topErrors.length > 0
      ? summary.topErrors.map(e => {
          return `<div class="dash-card"><div class="dash-value" style="font-size:18px;">${e.count}×</div><div class="dash-label" style="font-size:13px; font-weight:700; color:#9a2f2f; margin-bottom:12px;">${escapeHtml(e.label)}</div><button class="btn btn-outline btn-sm btn-practice" data-type="error-type" data-param="${escapeHtml(e.type)}">Opravit chybu</button></div>`;
        }).join("")
      : "";

    wp.innerHTML = `
      <div class="dashboard" style="margin-top: 20px; border-color: #b9dff2;">
        <h4 style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
          <div>Mapa slabin a doporučení</div>
          <div class="badge" style="font-size:11px;">Odehráno testů: ${p.testCount}</div>
        </h4>
        <div style="margin-bottom:16px;">
          <strong style="font-size:13px; color:#183b54;">Doporučený postup:</strong>
          <ul class="compact-list" style="margin-top:8px;">${recsHtml}</ul>
        </div>
        
        <strong style="font-size:13px; color:#183b54;">Nejslabší témata:</strong>
        <div class="dash-grid" style="margin-top:10px; margin-bottom: 16px;">
          ${subsHtml}
        </div>
        
        ${errsHtml ? `<strong style="font-size:13px; color:#183b54;">Nejčastější diagnostikované chyby:</strong>
        <div class="dash-grid" style="margin-top:10px;">
          ${errsHtml}
        </div>` : ""}
      </div>
    `;
    wp.querySelectorAll(".btn-practice").forEach(b => {
      b.addEventListener("click", () => startTargetedPractice(b.dataset.type, b.dataset.param));
    });
  }
  function renderHistoryPanel() {
    const panel=$("historyPanel"); const h=appState.history;
    if(!h.length){panel.classList.add("hidden");return;}
    panel.classList.remove("hidden");
    const items=h.slice(0,3).map(e=>`<div class="history-item"><span>${escapeHtml(e.batteryLabel||"")} · ${escapeHtml(e.mode||"")} · ${formatDate(e.date)}</span><span class="history-score">${e.score}/${e.total} (${e.percentage}%)</span></div>`).join("");
    panel.innerHTML=`<div class="history-panel"><h4>Poslední pokusy</h4><div class="history-list">${items}</div></div>`;
  }
  function renderConfigPanel() {
    const s=appState.settings;
    if(s.defaultMode==="reading-training") s.showQuestionFirst=true;
    document.querySelectorAll("#configMode .config-opt").forEach(b=>{b.classList.toggle("active",b.dataset.mode===s.defaultMode);b.addEventListener("click",()=>{s.defaultMode=b.dataset.mode;saveSettings();renderConfigPanel();});});
    document.querySelectorAll("#configGoal .config-opt").forEach(b=>{b.classList.toggle("active",b.dataset.goal===s.defaultGoal);b.addEventListener("click",()=>{s.defaultGoal=b.dataset.goal;saveSettings();renderConfigPanel();});});
    $("optShowQuestionFirst").checked=s.showQuestionFirst;$("optHighlightKeywords").checked=s.showKeywordHighlights;$("optRequireConfidence").checked=s.requireConfidence;$("optAutoSave").checked=s.autoSave;$("optRestoreSession").checked=s.restoreSessionOnLoad;
    $("optShowQuestionFirst").onchange=function(){s.showQuestionFirst=this.checked;saveSettings();};
    $("optHighlightKeywords").onchange=function(){s.showKeywordHighlights=this.checked;saveSettings();};
    $("optRequireConfidence").onchange=function(){s.requireConfidence=this.checked;saveSettings();};
    $("optAutoSave").onchange=function(){s.autoSave=this.checked;saveSettings();};
    $("optRestoreSession").onchange=function(){s.restoreSessionOnLoad=this.checked;saveSettings();};
    const repBtn=$("repairModeOpt");
    const hasCandidates=appState.history.length>0||loadCurrentSession()?.results?.finished;
    if(repBtn){repBtn.disabled=!hasCandidates;}
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
    const s=appState.currentSession; if(!s) return;
    $("answeredCount").textContent=String(getAnsweredCount());
    $("answeredTotal").textContent=String(s.activeTest.questions.length);
    $("metaCount").textContent=String(s.activeTest.questions.length);
    $("sidebarBatteryLabel").textContent=`Aktivní baterie: ${s.activeTest.label} – ${s.activeTest.title}`;
    $("activeBatteryPill").textContent=s.activeTest.label;
    const mb=$("sidebarModeBadge");
    mb.innerHTML=`<span class="mode-badge ${s.mode}">${s.mode==="reading-training"?"trénink čtení":s.mode==="repair"?"opravný režim":"simulace testu"}</span>`;
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
    const p = appState.progress;
    if (!p || p.testCount === 0) return { weakestSubtopics: [], topErrors: [] };
    const subs = Object.keys(p.subtopics).map(k => {
      const s = p.subtopics[k];
      return { subtopic: k, seen: s.seen, correct: s.correct, rate: Math.round(s.correct/s.seen * 100) };
    }).filter(s => s.seen >= 3).sort((a,b) => a.rate - b.rate);
    const errs = Object.keys(p.errorTypes).map(k => {
      return { type: k, count: p.errorTypes[k], label: ERROR_LABELS[k] || k };
    }).sort((a,b) => b.count - a.count);
    return { weakestSubtopics: subs.slice(0, 5), topErrors: errs.slice(0, 3) };
  }
  function buildRecommendations() {
    const w = buildWeaknessSummary();
    if (!w.weakestSubtopics.length && !w.topErrors.length) return ["Zatím nemáme dostatek dat. Dokonči alespoň jeden test."];
    const recs = [];
    if (w.weakestSubtopics.length > 0) {
      recs.push(`Zaměř se na téma: ${w.weakestSubtopics[0].subtopic} (úspěšnost ${w.weakestSubtopics[0].rate}%).`);
    }
    if (w.topErrors.length > 0) {
      if (w.topErrors[0].type === "impulsive-click") recs.push("Nejčastěji chybuješ kvůli zbrklosti. Zpomal a čti všechny možnosti.");
      else if (w.topErrors[0].type === "inattention" || w.topErrors[0].type === "missed-negation") recs.push("Dávej větší pozor na klíčová slova a negace v zadání.");
      else recs.push(`Nejčastější typ chyby je: ${w.topErrors[0].label}.`);
    }
    return recs;
  }
  function renderResults(timeExpired) {
    const s=appState.currentSession; if(!s) return;
    const score=calculateScore();
    const metrics=calculateAttentionMetrics();
    inferAutoErrorTypes();
    updateProgressFromSession();
    s.results.score=score; s.results.analytics=metrics;
    s.results.repairCandidateIndexes=buildRepairCandidateIndexes("all");
    const un=score.total-score.answered;
    const prefix=timeExpired?"Časový limit vypršel. ":"";
    $("scoreMain").textContent=`${score.correct} / ${score.total} bodů (${score.percentage} %)`;
    $("scoreSub").textContent=`${prefix}Zodpovězeno: ${score.answered} z ${score.total}. Nezodpovězené: ${un}.`;
    $("resultsBatteryLabel").textContent=`Vyhodnocená baterie: ${s.activeTest.label} – ${s.activeTest.title}`;
    renderPerformanceSummary(score,metrics);
    renderAttentionDashboard(metrics);
    renderThematicWeaknesses();
    renderRecommendationsPanel();
    renderRepairPanel();
    saveCurrentSession();
  }
  function renderPerformanceSummary(score,metrics) {
    const el=$("performanceSummary");
    el.innerHTML=`<div class="dashboard"><h4>Výkon</h4><div class="dash-grid"><div class="dash-card"><div class="dash-value">${score.correct}</div><div class="dash-label">Správně</div></div><div class="dash-card"><div class="dash-value">${score.total-score.answered}</div><div class="dash-label">Nezodpovězeno</div></div><div class="dash-card"><div class="dash-value">${score.percentage}%</div><div class="dash-label">Úspěšnost</div></div><div class="dash-card"><div class="dash-value">${metrics.guesses||0}</div><div class="dash-label">Tipy</div></div></div></div>`;
  }
  function renderAttentionDashboard(metrics) {
    const el=$("attentionDashboard");
    const slowList=metrics.slowIdxs?.map(i=>`#${i+1}`).join(", ")||"—";
    const fastList=metrics.fastWrongIdxs?.map(i=>`#${i+1}`).join(", ")||"—";
    el.innerHTML=`<div class="dashboard"><h4>Pozornostní dashboard</h4><div class="dash-grid"><div class="dash-card"><div class="dash-value">${(metrics.avgTime/1000).toFixed(1)}s</div><div class="dash-label">Průměrný čas</div></div><div class="dash-card"><div class="dash-value">${(metrics.medTime/1000).toFixed(1)}s</div><div class="dash-label">Medián času</div></div><div class="dash-card"><div class="dash-value">${metrics.changes||0}</div><div class="dash-label">Změny odpovědi</div></div><div class="dash-card"><div class="dash-value">${metrics.flagged||0}</div><div class="dash-label">Označené</div></div><div class="dash-card"><div class="dash-value">${metrics.revisits||0}</div><div class="dash-label">Návraty k otázkám</div></div><div class="dash-card"><div class="dash-value">${metrics.highConf||0}</div><div class="dash-label">Jistých odpovědí</div></div></div><div class="dash-detail"><strong>Nejpomalejší:</strong> ${slowList}<br><strong>Rychlé špatné kliky:</strong> ${fastList}<br><strong>Chyby po dlouhém čtení:</strong> ${metrics.longReadErrors||0}</div></div>`;
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
    appState.selectedBatteryId=id;
    const b=BATTERY_MAP[id];
    const note=$("selectionNote");
    note.innerHTML=b?`<strong>Vybraná baterie:</strong> ${escapeHtml(b.label)} – ${escapeHtml(b.title)}`:`<strong>Vybraná baterie:</strong> zatím není zvolena žádná varianta.`;
    $("startTestBtn").disabled=!b;
    renderBatteryCards(); renderBatteryDetail(b);
  }
  function startBattery(id) {
    const battery=BATTERY_MAP[id]; if(!battery) return;
    const s=appState.settings;
    const modeConfig={mode:s.defaultMode,goal:s.defaultGoal,showQuestionFirst:s.showQuestionFirst||s.defaultMode==="reading-training",showKeywordHighlights:s.showKeywordHighlights,requireConfidence:s.requireConfidence};
    appState.currentSession=buildSessionBattery(battery,modeConfig);
    appState.selectedBatteryId=id;
    saveCurrentSession();
    setAppMode("test");
    renderQuestionGrid(); updateMeta();
    beginQuestionView(0); renderQuestion();
    applyFocusMode(); startTimer();
  }
  function resumeSession() {
    const saved=loadCurrentSession();
    if(!saved) return;
    appState.currentSession=saved;
    appState.selectedBatteryId=saved.batteryId;
    if(saved.results.finished) {
      setAppMode("results");
      renderResults(saved.results.timeExpired);
      if(saved.ui.reviewVisible) showReview();
    } else {
      const rem=getRemainingSeconds();
      if(rem<=0) { setAppMode("test"); renderQuestionGrid(); updateMeta(); finishTest(true); return; }
      setAppMode("test");
      renderQuestionGrid(); updateMeta();
      beginQuestionView(saved.ui.currentQuestionIndex); renderQuestion();
      applyFocusMode(); startTimer();
    }
  }
  function restartBattery() {
    const s=appState.currentSession; if(!s) return;
    startBattery(s.batteryId);
  }
  function finishTest(timeExpired=false) {
    const s=appState.currentSession; if(!s||s.results.finished) return;
    endQuestionView(s.ui.currentQuestionIndex);
    s.results.finished=true; s.results.timeExpired=timeExpired;
    s.timing.finishedAt=new Date().toISOString();
    stopTimer();
    const score=calculateScore();
    addHistoryEntry({sessionId:s.sessionId,date:new Date().toISOString(),batteryId:s.batteryId,batteryLabel:s.batteryLabel,mode:s.mode,score:score.correct,total:score.total,percentage:score.percentage,timeExpired,averageTimeMs:calculateAttentionMetrics().avgTime||0,guessCount:s.questionStates.filter(q=>q.confidence==="guess").length,flaggedCount:s.questionStates.filter(q=>q.flagged).length});
    setAppMode("results"); renderResults(timeExpired);
    saveCurrentSession();
  }
  function backToSelection() {
    const s=appState.currentSession;
    if(s&&!s.results.finished) { if(!confirm("Opravdu se chceš vrátit? Rozpracovaný test bude uložen.")) return; saveCurrentSession(); }
    stopTimer(); document.body.classList.remove("focus-mode");
    setAppMode("start"); renderBatteryCards(); renderRestorePanel(); renderWeaknessPanel(); renderHistoryPanel();
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
    appState.settings=loadSettings();
    appState.history=loadHistory();
    appState.progress=loadProgress();
    if($("statQuestions")) $("statQuestions").textContent=String(BATTERIES.reduce((s,b)=>s+b.questions.length,0));
    renderConfigPanel();
    renderBatteryCards();
    renderBatteryDetail(null);
    renderRestorePanel();
    renderWeaknessPanel();
    renderHistoryPanel();
    // Auto-restore session
    if(appState.settings.restoreSessionOnLoad) {
      const saved=loadCurrentSession();
      if(saved) { resumeSession(); return; }
    }
    setAppMode("start");
  }
  window.initSCIOV4 = initApp;
  window.SCIO_V4_SHARED = { LETTERS, STORAGE_KEYS, LEGACY_STORAGE_KEYS, SLOW_THRESHOLD_MS, FAST_THRESHOLD_MS, REVISIT_THRESHOLD, MAX_HISTORY, RISK_PATTERNS, BATTERIES, BATTERY_MAP, ERROR_LABELS, loadMetadataExport, loadBattery8MetadataMap, buildMetadataIndex, buildBattery8MapIndex, normalizeMetadataItem, normalizeBattery8MapItem, normalizeQuestionMetadata, buildReviewFallbacks, attachMetadataToBatteryQuestions, resolveQuestionEffectiveCorrect };
 function normalizeQuestion(q, qi, bId, bLabel) {
    const opts = Array.isArray(q?.options) ? q.options.slice(0,4).map(o => String(o??"").trim()) : [];
    if (opts.length !== 4) throw new Error(`Otázka ${qi+1} nemá přesně 4 možnosti.`);
    const qNum = Number.isInteger(q?.number) ? q.number : qi+1;
    const globalId = `B${String(bId).padStart(2, '0')}Q${String(qNum).padStart(2, '0')}`;
    const metadata = normalizeQuestionMetadata(q, { batteryId: bId, batteryLabel: bLabel, questionNumber: qNum, globalId });
    const c = resolveQuestionEffectiveCorrect(q, metadata);
    return {
      number: qNum,
      globalId,
      text: String(q?.text??"").trim(),
      options: opts,
      correct: c,
      correctLetter: LETTERS[c],
      metadata
    };
  }
   