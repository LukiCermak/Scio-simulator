
(function(){
  "use strict";

  const ERROR_LABELS_MAP = {
    "no-answer": "Bez odpovÄ›di",
    "missed-negation": "PĹ™ehlĂ©dnutĂˇ negace",
    "institution-confusion": "ZĂˇmÄ›na institucĂ­ a kompetencĂ­",
    "concept-confusion": "ZĂˇmÄ›na pojmĹŻ",
    "terminology-confusion": "ZĂˇmÄ›na terminologie",
    "misread-question": "NepĹ™esnĂ© pĹ™eÄŤtenĂ­ zadĂˇnĂ­",
    "reading-misalignment": "NepĹ™esnĂ© pĹ™eÄŤtenĂ­ zadĂˇnĂ­",
    "impulsive-click": "UkvapenĂ© rozhodnutĂ­",
    "impulsive-decision": "UkvapenĂ© rozhodnutĂ­",
    "overthinking": "PĹ™ekombinovĂˇnĂ­",
    "time-pressure": "Tlak ÄŤasu",
    "false-confidence": "FaleĹˇnĂˇ jistota",
    "distractor-trap": "SvedenĂ­ blĂ­zkou, ale nepĹ™esnou moĹľnostĂ­",
    "attention-slip": "Nepozornost",
    "inattention": "Nepozornost",
    "knowledge-gap": "ObsahovĂˇ slabina"
  };

  const ERROR_LABEL_OVERRIDES = {
    "output-content-confusion": "ZĂˇmÄ›na formy odpovÄ›di a skuteÄŤnĂ© znalosti",
    "access-content-confusion": "ZĂˇmÄ›na pĹ™Ă­stupu k informaci a porozumÄ›nĂ­",
    "access-production-confusion": "ZĂˇmÄ›na pĹ™Ă­stupu k informaci a formy vĂ˝konu",
    "category-before-function": "ZĂˇmÄ›na kategorie a skuteÄŤnĂ© funkce",
    "function-vs-appearance": "ZĂˇmÄ›na podstaty obtĂ­Ĺľe a nĂˇpadnĂ©ho projevu",
    "environment-vs-function": "ZĂˇmÄ›na vlivu prostĹ™edĂ­ a skuteÄŤnĂ© funkce",
    "goal-mechanism-mixup": "ZĂˇmÄ›na cĂ­le zĂˇsahu a jeho mechanismu",
    "goal-route-confusion": "ZĂˇmÄ›na cĂ­le podpory a cesty k nÄ›mu",
    "goal-domain-error": "ZĂˇmÄ›na cĂ­le podpory a oblasti zĂˇsahu",
    "device-vs-process": "ZĂˇmÄ›na pomĹŻcky a postupu",
    "document-confusion": "ZĂˇmÄ›na dokumentĹŻ",
    "document-function-mixup": "ZĂˇmÄ›na funkce dokumentĹŻ",
    "document-origin-confusion": "ZĂˇmÄ›na pĹŻvodu dokumentu",
    "authority-mixup": "ZĂˇmÄ›na rozhodujĂ­cĂ­ho orgĂˇnu",
    "competence-mixup": "ZĂˇmÄ›na kompetencĂ­",
    "institution-mixup": "ZĂˇmÄ›na institucĂ­",
    "benefit-vs-service": "ZĂˇmÄ›na dĂˇvky a sluĹľby",
    "decision-vs-payment-confusion": "ZĂˇmÄ›na rozhodovĂˇnĂ­ a vĂ˝platy",
    "metoda-pomĹŻcka-zĂˇmÄ›na": "ZĂˇmÄ›na metody a pomĹŻcky",
    "kompenzace-reedukace-zĂˇmÄ›na": "ZĂˇmÄ›na kompenzace a reedukace",
    "augmentativnĂ­-alternativnĂ­-zĂˇmÄ›na": "ZĂˇmÄ›na augmentativnĂ­ a alternativnĂ­ komunikace",
    "evaluation-confusion": "ZĂˇmÄ›na vyhodnocenĂ­ a samotnĂ©ho zĂˇsahu",
    "framework-confusion": "ZĂˇmÄ›na odbornĂ˝ch rĂˇmcĹŻ",
    "historical-anchor-confusion": "ZĂˇmÄ›na historickĂ˝ch souvislostĂ­",
    "authority-role-mixup": "ZĂˇmÄ›na role a rozhodovacĂ­ pravomoci"
  };

  function normalizeErrorCode(code) {
    const raw = String(code || "").trim();
    if (!raw) return "";
    const value = raw.toLowerCase();

    if (ERROR_LABELS_MAP[value]) return value;
    if (ERROR_LABEL_OVERRIDES[value]) return value;

    if (/^(no-answer|bez-odpovedi|bez-odpovÄ›di|unanswered)$/.test(value)) return "no-answer";
    if (/(missed-negation|negation|negative|negativnĂ­-ÄŤtenĂ­|negative-reading)/.test(value)) return "missed-negation";
    if (/(impulsive|fast-|hasty|ukvapen)/.test(value)) return "impulsive-decision";
    if (/(overthinking|slow-|time-pressure|pressure|pĹ™ekombin)/.test(value)) return "overthinking";
    if (/(false-confidence|high-confidence|confidence)/.test(value)) return "false-confidence";
    if (/(attention-slip|inattention|nepozornost)/.test(value)) return "inattention";
    if (/(distractor|trap|halo|bias|shortcut|lure|near-category)/.test(value)) return "distractor-trap";
    if (/(misread|reading|question|first-step|formulation|superlativ|doslovnost|exception-ignorance|context-omission|administrative-reduction|abbreviation-overread|chunking-misread)/.test(value)) return "misread-question";

    if (/(institution|document|clientele|facility|court|school|role|competence|kompetenc|process|sv[pbp]|Ĺˇpp|Ĺˇpz|ppp|spc|ospod|ĂşĹ™ad|urad|soud|Ĺ™editel|reditel|rodiÄŤ|rodic|client|benefit|service|payment|allowance|dĂˇvk|davk|prĹŻkaz|prukaz|ztp|mobilit|pomĹŻc|pomuc|vozid|legal-|issuance|hospitalization|higher-ed|gifted-outside-system|inside-outside-role|cross-system|decision-vs-payment|broad-public-help|school-level|school-type|authority|kompetence|kompetenc)/.test(value)) {
      return "institution-confusion";
    }

    if (/(terminology|terminolog|author|personality|histor|anchor|term-|jmĂ©no|jmeno|autor|osobnost|kotv|lechta|neubauer|valenta|ludĂ­kovĂˇ|ludikovĂˇ|van-riper|frankl|kĂˇbele|kabele|redl|makarenko|komensk|itard|sovĂˇk|sovak)/.test(value)) {
      return "terminology-confusion";
    }

    if (/(concept|pojem|pojmov|category|classification|classif|axis|osa|zĂˇmÄ›na|zamen|swap|mixup|confusion|blur|collapse|hierarchie|discipl|domain|framework|frame|klasifika|kategorie|oblast|preling|postling|kongenit|zĂ­skan|ziskane|pas-|fm-|mkn|balbuties|tumultus|dysfonie|rinolalie|fonemat|pragmat|hlas|komunikaÄŤnĂ­|komunikacni|adaptivnĂ­|adaptivni|output-content|category-before-function|function-vs-appearance|environment-vs-function|goal-|device-vs-process|metoda-|pomĹŻcka|pomucka|reeduk|kompenz|augmentativ|alternativnĂ­|alternativni|evaluation|framework)/.test(value)) {
      return "concept-confusion";
    }

    return "knowledge-gap";
  }

  function resolveErrorLabel(code) {
    const raw = String(code || "").trim();
    const lower = raw.toLowerCase();
    if (ERROR_LABEL_OVERRIDES[lower]) return ERROR_LABEL_OVERRIDES[lower];
    const normalized = normalizeErrorCode(raw);
    return ERROR_LABELS_MAP[normalized] || (window.SCIO_SHARED?.ERROR_LABELS?.[normalized]) || "ObsahovĂˇ slabina";
  }


  const DASHBOARD_THRESHOLDS = {
    weakRate: 70,
    riskyRate: 50,
    strongRate: 85,
    masteredRate: 95,
    minSeenWeak: 4,
    minSeenRisky: 3,
    minSeenStrong: 4,
    minSeenMastered: 5,
    minSessionStrong: 1,
    minSessionMastered: 2,
    undertrainedSeen: 3,
    undertrainedSessions: 2,
    recentWindow: 5,
    historyWindow: 8
  };

  function getErrorLabel(code) {
    return resolveErrorLabel(code);
  }
  window.getErrorLabel = getErrorLabel;

  function getEmptyProgress() {
    return {
      schemaVersion: 4,
      testCount: 0,
      totals: {
        seen: 0,
        answered: 0,
        correct: 0,
        wrong: 0,
        unanswered: 0,
        finishedSessions: 0,
        repairSessions: 0,
        highConfidenceWrong: 0
      },
      disciplines: {},
      subtopics: {},
      topicAreas: {},
      errorTypes: {},
      formulations: {},
      signalPatterns: {},
      trapPatterns: {},
      distractorTypes: {},
      questionTypes: {},
      institutionConfusions: {},
      confidenceByTopic: {},
      timingByTopic: {},
      highConfidenceWrong: {},
      revisionQueue: {},
      trends: { recentSessions: [] }
    };
  }
  window.getEmptyProgress = getEmptyProgress;

function normalizeDifficultyForProgress(value) {
  return String(value || "").trim().toLowerCase() === "hard" ? "hard" : "basic";
}
function getQuestionProgressKey(question, session) {
  const globalId = String(question?.globalId || "").trim();
  const difficultyMode = normalizeDifficultyForProgress(question?.difficultyMode || session?.difficultyMode || session?.activeTest?.difficultyMode || appState?.settings?.difficultyMode || "basic");
  return globalId ? `${difficultyMode}::${globalId}` : `${difficultyMode}::unknown`;
}


  function safeClone(obj, fallback) {
    try { return JSON.parse(JSON.stringify(obj)); } catch(e) { return fallback; }
  }

  function buildRegistryEntry() {
    return {
      seen: 0,
      correct: 0,
      wrong: 0,
      unanswered: 0,
      highConfidenceWrong: 0,
      avgTimeMs: 0,
      lastSeenAt: "",
      relatedErrors: {},
      sessionCount: 0,
      sessionsPerfect: 0,
      sessionsWithWrong: 0,
      lastOutcome: "",
      recentSessionRates: []
    };
  }

  function normalizeRegistryEntry(value, treatAsCorrectRate) {
    const base = buildRegistryEntry();
    if (value && typeof value === "object") {
      const seen = Number(value.seen || value.count || 0);
      const correct = Number(value.correct || 0);
      return {
        ...base,
        seen,
        correct: treatAsCorrectRate ? (correct || seen) : correct,
        wrong: Number(value.wrong || Math.max(0, seen - correct - Number(value.unanswered || 0))),
        unanswered: Number(value.unanswered || 0),
        highConfidenceWrong: Number(value.highConfidenceWrong || 0),
        avgTimeMs: Number(value.avgTimeMs || 0),
        lastSeenAt: value.lastSeenAt || "",
        relatedErrors: safeClone(value.relatedErrors || {}, {}),
        sessionCount: Number(value.sessionCount || (seen > 0 ? 1 : 0)),
        sessionsPerfect: Number(value.sessionsPerfect || 0),
        sessionsWithWrong: Number(value.sessionsWithWrong || 0),
        lastOutcome: value.lastOutcome || "",
        recentSessionRates: Array.isArray(value.recentSessionRates) ? safeClone(value.recentSessionRates.slice(0, DASHBOARD_THRESHOLDS.historyWindow), []) : []
      };
    }
    const seen = Number(value || 0);
    return {
      ...base,
      seen,
      correct: treatAsCorrectRate ? seen : 0,
      wrong: treatAsCorrectRate ? 0 : seen,
      sessionCount: seen > 0 ? 1 : 0
    };
  }

  function normalizeRegistryObject(oldObj, treatAsCorrectRate) {
    const out = {};
    Object.entries(oldObj || {}).forEach(([key, value]) => {
      out[key] = normalizeRegistryEntry(value, treatAsCorrectRate);
    });
    return out;
  }

  function normalizeErrorRegistryObject(oldObj) {
    const out = {};
    Object.entries(oldObj || {}).forEach(([key, value]) => {
      const normalizedKey = normalizeErrorCode(key);
      if (!normalizedKey) return;
      const nextEntry = normalizeRegistryEntry(value, false);
      if (!out[normalizedKey]) {
        out[normalizedKey] = nextEntry;
        return;
      }
      const prev = out[normalizedKey];
      out[normalizedKey] = {
        ...prev,
        seen: Number(prev.seen || 0) + Number(nextEntry.seen || 0),
        correct: Number(prev.correct || 0) + Number(nextEntry.correct || 0),
        wrong: Number(prev.wrong || 0) + Number(nextEntry.wrong || 0),
        unanswered: Number(prev.unanswered || 0) + Number(nextEntry.unanswered || 0),
        highConfidenceWrong: Number(prev.highConfidenceWrong || 0) + Number(nextEntry.highConfidenceWrong || 0),
        avgTimeMs: Math.round((((Number(prev.avgTimeMs || 0) * Number(prev.seen || 0)) + (Number(nextEntry.avgTimeMs || 0) * Number(nextEntry.seen || 0))) / Math.max(1, Number(prev.seen || 0) + Number(nextEntry.seen || 0)))),
        lastSeenAt: [prev.lastSeenAt, nextEntry.lastSeenAt].filter(Boolean).sort().slice(-1)[0] || "",
        relatedErrors: { ...(prev.relatedErrors || {}), ...(nextEntry.relatedErrors || {}) },
        sessionCount: Number(prev.sessionCount || 0) + Number(nextEntry.sessionCount || 0),
        sessionsPerfect: Number(prev.sessionsPerfect || 0) + Number(nextEntry.sessionsPerfect || 0),
        sessionsWithWrong: Number(prev.sessionsWithWrong || 0) + Number(nextEntry.sessionsWithWrong || 0),
        lastOutcome: nextEntry.lastOutcome || prev.lastOutcome || "",
        recentSessionRates: [...(prev.recentSessionRates || []), ...(nextEntry.recentSessionRates || [])].slice(0, DASHBOARD_THRESHOLDS.historyWindow)
      };
      out[normalizedKey].recentSessionRates = out[normalizedKey].recentSessionRates.filter(v => Number.isFinite(Number(v))).map(Number);
    });
    return out;
  }

  function normalizeProgress(progress) {
    const src = progress && typeof progress === "object" ? progress : {};
    const normalized = getEmptyProgress();
    normalized.schemaVersion = 4;
    normalized.testCount = Number(src.testCount || src.totals?.finishedSessions || 0);
    normalized.totals = {
      ...normalized.totals,
      ...(src.totals || {})
    };
    normalized.disciplines = normalizeRegistryObject(src.disciplines || {}, false);
    normalized.subtopics = normalizeRegistryObject(src.subtopics || {}, false);
    normalized.topicAreas = normalizeRegistryObject(src.topicAreas || {}, false);
    normalized.errorTypes = normalizeErrorRegistryObject(src.errorTypes || {});
    normalized.formulations = normalizeRegistryObject(src.formulations || {}, false);
    normalized.signalPatterns = normalizeRegistryObject(src.signalPatterns || {}, false);
    normalized.trapPatterns = normalizeRegistryObject(src.trapPatterns || {}, false);
    normalized.distractorTypes = normalizeRegistryObject(src.distractorTypes || {}, false);
    normalized.questionTypes = normalizeRegistryObject(src.questionTypes || {}, false);
    normalized.institutionConfusions = normalizeRegistryObject(src.institutionConfusions || {}, false);
    normalized.confidenceByTopic = safeClone(src.confidenceByTopic || {}, {});
    normalized.timingByTopic = safeClone(src.timingByTopic || {}, {});
    normalized.highConfidenceWrong = safeClone(src.highConfidenceWrong || {}, {});
    normalized.revisionQueue = safeClone(src.revisionQueue || {}, {});
    normalized.trends = {
      recentSessions: Array.isArray(src.trends?.recentSessions) ? safeClone(src.trends.recentSessions.slice(0, 12), []) : []
    };
    return normalized;
  }
  window.normalizeProgress = normalizeProgress;

  function migrateRegistryObject(oldObj, treatAsCorrectRate) {
    return normalizeRegistryObject(oldObj, treatAsCorrectRate);
  }

  function migrateLegacyProgress(oldProgress) {
    const migrated = getEmptyProgress();
    const src = oldProgress && typeof oldProgress === "object" ? oldProgress : {};
    migrated.testCount = Number(src.testCount || src.totals?.finishedSessions || 0);
    migrated.totals.finishedSessions = migrated.testCount;
    migrated.subtopics = migrateRegistryObject(src.subtopics || {}, true);
    migrated.errorTypes = migrateRegistryObject(src.errorTypes || {}, false);
    if (src.totals && typeof src.totals === "object") migrated.totals = { ...migrated.totals, ...src.totals, finishedSessions: migrated.testCount };
    return normalizeProgress(migrated);
  }
  window.migrateLegacyProgress = migrateLegacyProgress;

  function loadSettings() {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    const parsed = safeParse(raw, null);
    if (parsed && parsed.schemaVersion === 4) return parsed;
    if (parsed && parsed.schemaVersion === 3) {
      return {
        ...getDefaultSettings(),
        ...parsed,
        schemaVersion: 4,
        defaultMode: parsed.defaultMode || "simulation",
        defaultGoal: parsed.defaultGoal || "attention"
      };
    }
    return getDefaultSettings();
  }
  window.loadSettings = loadSettings;

  function loadHistory() {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const parsed = safeParse(raw, []);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
  }
  window.loadHistory = loadHistory;

  function saveHistory() {
    try { localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify((appState.history || []).slice(0, MAX_HISTORY))); } catch(e) {}
  }
  window.saveHistory = saveHistory;

  function loadCurrentSession() {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    const parsed = safeParse(raw, null);
    if (!parsed) return null;
    if (parsed.schemaVersion === 4) return parsed;
    if (parsed.schemaVersion === 3) {
      parsed.schemaVersion = 4;
      parsed.questionStates = Array.isArray(parsed.questionStates) ? parsed.questionStates.map((qs, idx) => ({
        autoErrorType: null,
        autoErrorConfidence: null,
        evidence: null,
        manualErrorType: qs.manualErrorType || null,
        learningNeed: null,
        addedToRevision: false,
        userReflection: "",
        revisitReason: qs.revisitLater ? "VrĂˇtit se pozdÄ›ji" : "",
        revisionPriority: "medium",
        ...qs,
        questionIndex: Number(qs.questionIndex ?? idx)
      })) : [];
      parsed.results = { finished:false, timeExpired:false, score:null, analytics:null, repairCandidateIndexes:[], recommendations:[], ...(parsed.results || {}) };
      return parsed;
    }
    return null;
  }
  window.loadCurrentSession = loadCurrentSession;

  function saveCurrentSession() {
    if (!appState.currentSession) return;
    try {
      appState.currentSession.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(appState.currentSession));
    } catch(e) {}
  }
  window.saveCurrentSession = saveCurrentSession;

  function clearCurrentSession() {
    appState.currentSession = null;
    try { localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION); } catch(e) {}
  }
  window.clearCurrentSession = clearCurrentSession;

  function loadProgress() {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const parsed = safeParse(raw, null);
    if (!parsed) return getEmptyProgress();
    if (parsed.schemaVersion === 4) return normalizeProgress(parsed);
    return migrateLegacyProgress(parsed);
  }
  window.loadProgress = loadProgress;

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(appState.progress || getEmptyProgress())); } catch(e) {}
  }
  window.saveProgress = saveProgress;

  function migrateStorageIfNeeded() {
    const pairs = [
      [LEGACY_STORAGE_KEYS.SETTINGS, STORAGE_KEYS.SETTINGS],
      [LEGACY_STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY],
      [LEGACY_STORAGE_KEYS.CURRENT_SESSION, STORAGE_KEYS.CURRENT_SESSION],
      [LEGACY_STORAGE_KEYS.PROGRESS, STORAGE_KEYS.PROGRESS],
      ["sciosim_v2_settings", STORAGE_KEYS.SETTINGS],
      ["sciosim_v2_history", STORAGE_KEYS.HISTORY]
    ];
    pairs.forEach(([oldKey, newKey]) => {
      if (!localStorage.getItem(newKey) && localStorage.getItem(oldKey)) {
        localStorage.setItem(newKey, localStorage.getItem(oldKey));
      }
    });
    const migratedSettings = loadSettings();
    try { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(migratedSettings)); } catch(e) {}
    const migratedProgress = loadProgress();
    try { localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(migratedProgress)); } catch(e) {}
    const migratedSession = loadCurrentSession();
    if (migratedSession) {
      try { localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(migratedSession)); } catch(e) {}
    }
  }
  window.migrateStorageIfNeeded = migrateStorageIfNeeded;

  function createQuestionState(index) {
    return {
      questionIndex: index,
      selectedAnswer: null,
      firstAnswer: null,
      confidence: null,
      flagged: false,
      revisitLater: false,
      note: "",
      viewedAtLeastOnce: false,
      viewCount: 0,
      firstViewedAt: null,
      lastViewedAt: null,
      timeSpentMs: 0,
      currentViewStartedAt: null,
      answerChanges: 0,
      optionsWereInitiallyHidden: false,
      optionsRevealedAt: null,
      resolvedStatus: "unanswered",
      autoErrorType: null,
      autoErrorConfidence: null,
      evidence: null,
      manualErrorType: null,
      learningNeed: null,
      addedToRevision: false,
      userReflection: "",
      revisitReason: "",
      revisionPriority: "medium"
    };
  }
  window.createQuestionState = createQuestionState;

  function buildBalancedTargetIndexes(total) {
    const counts = Array(LETTERS.length).fill(Math.floor(total / LETTERS.length));
    const remaining = total % LETTERS.length;
    shuffleArray([0, 1, 2, 3]).slice(0, remaining).forEach(idx => counts[idx]++);
    return shuffleArray(counts.flatMap((count, idx) => Array(count).fill(idx)));
  }

  function remapQuestionOptions(question, targetIdx) {
    const correctOpt = question.options[question.correct];
    const wrongOpts = shuffleArray(question.options.filter((_, i) => i !== question.correct));
    const mapped = [];
    let wrongPtr = 0;
    for (let i = 0; i < LETTERS.length; i++) {
      if (i === targetIdx) mapped.push(correctOpt);
      else mapped.push(wrongOpts[wrongPtr++]);
    }
    return { ...question, options: mapped, correct: targetIdx, correctLetter: LETTERS[targetIdx] };
  }

  function buildSessionBattery(battery, modeConfig) {
    const targets = buildBalancedTargetIndexes(battery.questions.length);
    const sessionQs = battery.questions.map((q, i) => {
      const remapped = remapQuestionOptions(q, targets[i]);
      return { ...remapped, sourceBatteryId: battery.id, sourceQuestionNumber: q.number, tags: battery.tags || [] };
    });
    const distribution = sessionQs.reduce((acc, q) => { acc[LETTERS[q.correct]]++; return acc; }, { A:0, B:0, C:0, D:0 });
    const mode = modeConfig?.mode || "simulation";
    const goal = modeConfig?.goal || "attention";
    const now = new Date();
    const endsAt = new Date(now.getTime() + (battery.durationMinutes || 30) * 60 * 1000);
    return {
      schemaVersion: 4,
      sessionId: generateId(),
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      mode,
      goal,
      batteryId: battery.id,
      batteryLabel: battery.label,
      batteryTitle: battery.title,
      activeTest: {
        id: battery.id,
        label: battery.label,
        title: battery.title,
        durationMinutes: battery.durationMinutes || 30,
        questions: sessionQs,
        sessionDistribution: distribution
      },
      timing: { startedAt: now.toISOString(), endsAt: endsAt.toISOString(), finishedAt: null },
      ui: {
        currentQuestionIndex: 0,
        reviewVisible: false,
        reviewTab: "result",
        focusMode: false,
        optionsHiddenUntilReady: modeConfig?.showQuestionFirst || mode === "reading-training",
        showKeywordHighlights: modeConfig?.showKeywordHighlights !== false,
        requireConfidence: modeConfig?.requireConfidence !== false
      },
      metrics: {
        totalViews: 0,
        totalAnswerChanges: 0,
        totalFlagged: 0,
        totalRevisits: 0
      },
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
  window.buildSessionBattery = buildSessionBattery;

  
function buildRepairSessionFromResults(srcSession, candidateIndexes) {
  const indexes = Array.isArray(candidateIndexes) ? candidateIndexes : buildRepairCandidateIndexes(candidateIndexes);
  if (!srcSession || !indexes.length) return null;
  const srcQuestions = srcSession.activeTest.questions;
  const difficultyMode = normalizeDifficultyForProgress(srcSession.difficultyMode || srcSession.activeTest?.difficultyMode || "basic");
  const difficultyLabel = difficultyMode === "hard" ? "PokroÄŤilĂˇ" : "ZĂˇkladnĂ­";
  const repairQuestions = indexes.map((idx, i) => ({
    ...srcQuestions[idx],
    number: i + 1,
    sourceBatteryId: srcSession.batteryId,
    sourceQuestionNumber: srcQuestions[idx].number,
    difficultyMode,
    difficultyLabel
  }));
  const now = new Date();
  const durationMinutes = Math.max(10, Math.ceil(repairQuestions.length * 0.7));
  const endsAt = new Date(now.getTime() + durationMinutes * 60 * 1000);
  return {
    schemaVersion: 4,
    sessionId: generateId(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    mode: "repair",
    goal: srcSession.goal || "attention",
    difficultyMode,
    difficultyLabel,
    batteryId: srcSession.batteryId,
    batteryLabel: srcSession.batteryLabel,
    batteryTitle: `OpravnĂˇ sada â€“ ${srcSession.batteryLabel}`,
    activeTest: {
      id: srcSession.batteryId,
      label: srcSession.batteryLabel,
      title: `OpravnĂˇ sada (${repairQuestions.length} otĂˇzek)`,
      durationMinutes,
      questions: repairQuestions,
      difficultyMode,
      difficultyLabel,
      sessionDistribution: repairQuestions.reduce((acc, q) => { acc[LETTERS[q.correct]]++; return acc; }, { A:0, B:0, C:0, D:0 })
    },
    timing: { startedAt: now.toISOString(), endsAt: endsAt.toISOString(), finishedAt: null },
    ui: {
      currentQuestionIndex: 0,
      reviewVisible: false,
      reviewTab: "result",
      focusMode: false,
      optionsHiddenUntilReady: false,
      showKeywordHighlights: true,
      requireConfidence: appState.settings.requireConfidence
    },
    metrics: { totalViews:0, totalAnswerChanges:0, totalFlagged:0, totalRevisits:0 },
    questionStates: repairQuestions.map((_, idx) => createQuestionState(idx)),
    results: {
      finished: false,
      timeExpired: false,
      score: null,
      analytics: null,
      diagnosticSummary: null,
      repairCandidateIndexes: indexes.slice(),
      recommendations: [],
      progressCommitted: false,
      progressCommittedAt: null
    },
    repairSource: {
      sourceSessionId: srcSession.sessionId,
      candidateIndexes: indexes.slice(),
      createdFromMode: srcSession.mode,
      difficultyMode
    }
  };
}

  window.buildRepairSessionFromResults = buildRepairSessionFromResults;

  function medianFromList(list) {
    return Math.round(median((list || []).filter(v => Number.isFinite(v) && v >= 0)) || 0);
  }

  function updateQuestionTime(index) {
    const s = appState.currentSession; if (!s) return 0;
    const qs = s.questionStates[index];
    if (!qs || !qs.currentViewStartedAt) return qs?.timeSpentMs || 0;
    return qs.timeSpentMs + (Date.now() - qs.currentViewStartedAt);
  }
  window.updateQuestionTime = updateQuestionTime;

  function calculateScore() {
    const s = appState.currentSession; if (!s) return { correct:0, total:0, answered:0, unanswered:0, percentage:0 };
    let correct = 0;
    let answered = 0;
    s.activeTest.questions.forEach((q, idx) => {
      const ans = s.questionStates[idx].selectedAnswer;
      if (ans !== null) answered++;
      if (ans === q.correct) correct++;
    });
    const total = s.activeTest.questions.length;
    return { correct, total, answered, unanswered: total - answered, percentage: total ? Math.round(correct / total * 100) : 0 };
  }
  window.calculateScore = calculateScore;

  function calculateAttentionMetrics() {
    const s = appState.currentSession; if (!s) return {};
    const states = s.questionStates;
    const wrongIndexes = [];
    const answeredTimes = [];
    const slowIdxs = [];
    const fastWrongIdxs = [];
    const changedWrongIdxs = [];
    const highConfidenceWrongIdxs = [];
    let guesses = 0;
    let highConf = 0;
    let changes = 0;
    let flagged = 0;
    let revisits = 0;
    let longReadErrors = 0;
    let unanswered = 0;
    states.forEach((qs, idx) => {
      const totalTime = updateQuestionTime(idx);
      const isWrong = qs.selectedAnswer !== null && qs.selectedAnswer !== s.activeTest.questions[idx].correct;
      if (qs.selectedAnswer === null) unanswered++;
      if (qs.selectedAnswer !== null) answeredTimes.push(totalTime);
      if (isWrong) wrongIndexes.push(idx);
      if (totalTime >= SLOW_THRESHOLD_MS) slowIdxs.push(idx);
      if (totalTime > 0 && totalTime < FAST_THRESHOLD_MS && isWrong) fastWrongIdxs.push(idx);
      if (qs.answerChanges > 0) changes += qs.answerChanges;
      if (qs.flagged) flagged++;
      if (qs.viewCount > 1) revisits++;
      if (qs.answerChanges > 0 && isWrong) changedWrongIdxs.push(idx);
      if (qs.confidence === "guess") guesses++;
      if (qs.confidence === "high") highConf++;
      if (qs.confidence === "high" && isWrong) highConfidenceWrongIdxs.push(idx);
      if (totalTime >= SLOW_THRESHOLD_MS && isWrong) longReadErrors++;
    });
    const avgTime = answeredTimes.length ? Math.round(answeredTimes.reduce((a,b)=>a+b,0) / answeredTimes.length) : 0;
    const medTime = medianFromList(answeredTimes);
    return {
      avgTime,
      medTime,
      slowIdxs: slowIdxs.sort((a,b)=>states[b].timeSpentMs - states[a].timeSpentMs).slice(0, 5),
      fastWrongIdxs,
      changedWrongIdxs,
      highConfidenceWrongIdxs,
      highConfidenceWrongCount: highConfidenceWrongIdxs.length,
      changes,
      flagged,
      guesses,
      highConf,
      revisits,
      longReadErrors,
      unanswered,
      totalAnswered: calculateScore().answered,
      timePressureErrors: wrongIndexes.filter(idx => updateQuestionTime(idx) > 25000 && getRemainingSeconds && getRemainingSeconds() < 300).length
    };
  }
  window.calculateAttentionMetrics = calculateAttentionMetrics;

  function buildDiagnosticEvidence(question, questionState) {
    const text = String(question?.text || "");
    const metadata = question?.metadata || {};
    const formulationFlags = Array.isArray(metadata.formulationFlags) ? metadata.formulationFlags : [];
    const signalPattern = Array.isArray(metadata.signalPattern) ? metadata.signalPattern : [];
    const timeSpent = questionState?.timeSpentMs || 0;
    const isWrong = questionState?.selectedAnswer !== null && questionState?.selectedAnswer !== question?.correct;
    return {
      hasNegation: formulationFlags.includes("negace") || /\bnenĂ­\b|\bnesprĂˇvnÄ›\b|\bneplatĂ­\b|\bneodpovĂ­dĂˇ\b/i.test(text),
      hasSuperlative: formulationFlags.includes("superlativnĂ­ pĹ™esnost") || /\bnejpĹ™esnÄ›ji\b|\bnejlĂ©pe\b|\bnejvhodnÄ›jĹˇĂ­\b/i.test(text),
      systemBoundarySignal: formulationFlags.includes("systĂ©movĂˇ hranice") || /\bv rĂˇmci ĹˇkolstvĂ­\b|\bv rĂˇmci zdravotnictvĂ­\b|\bv rĂˇmci sociĂˇlnĂ­ oblasti\b/i.test(text),
      firstStepSignal: formulationFlags.includes("prvnĂ­ krok") || /\bprvnĂ­ krok\b/i.test(text),
      documentSignal: formulationFlags.includes("funkce dokumentu") || /\bzprĂˇva\b|\bdoporuÄŤen|\bplpp\b|\bivp\b/i.test(text),
      roleSignal: formulationFlags.includes("odpovÄ›dnost role") || /\bkdo\b.*\bodpovĂ­dĂˇ\b|\brole\b/i.test(text),
      institutionPair: metadata.institutionPair || "",
      fastWrong: isWrong && timeSpent > 0 && timeSpent < FAST_THRESHOLD_MS,
      slowOverthink: isWrong && timeSpent >= SLOW_THRESHOLD_MS && ((questionState?.answerChanges || 0) > 0 || (questionState?.viewCount || 0) > 1),
      highConfidenceWrong: isWrong && questionState?.confidence === "high",
      changedAnswer: (questionState?.answerChanges || 0) > 0,
      revisitCount: Math.max(0, (questionState?.viewCount || 1) - 1),
      distractorTrap: metadata.trapPattern || "",
      questionType: metadata.questionType || "",
      distractorType: metadata.distractorType || "",
      trapPattern: metadata.trapPattern || "",
      signalPattern,
      formulationFlags,
      likelyErrorTypes: Array.isArray(metadata.likelyErrorTypes) ? metadata.likelyErrorTypes : [],
      attentionRisk: metadata.attentionRisk || "medium"
    };
  }
  window.buildDiagnosticEvidence = buildDiagnosticEvidence;

  function inferAutoErrorTypes() {
    const s = appState.currentSession; if (!s) return;
    s.questionStates.forEach((qs, idx) => {
      const q = s.activeTest.questions[idx];
      const evidence = buildDiagnosticEvidence(q, qs);
      qs.evidence = evidence;
      qs.autoErrorConfidence = "low";
      qs.learningNeed = null;
      const isWrong = qs.selectedAnswer !== null && qs.selectedAnswer !== q.correct;
      if (qs.selectedAnswer === null) {
        qs.autoErrorType = "no-answer";
        qs.autoErrorConfidence = "high";
        qs.learningNeed = "process";
      } else if (!isWrong) {
        qs.autoErrorType = null;
        qs.autoErrorConfidence = null;
        qs.learningNeed = qs.confidence === "guess" ? "stabilize" : null;
      } else if (evidence.highConfidenceWrong && (evidence.institutionPair || evidence.likelyErrorTypes.includes("institution-confusion"))) {
        qs.autoErrorType = "false-confidence";
        qs.autoErrorConfidence = "high";
        qs.learningNeed = "combined";
      } else if (evidence.hasNegation && evidence.fastWrong) {
        qs.autoErrorType = "missed-negation";
        qs.autoErrorConfidence = "high";
        qs.learningNeed = "process";
      } else if (evidence.institutionPair && (evidence.systemBoundarySignal || evidence.roleSignal || evidence.documentSignal)) {
        qs.autoErrorType = "institution-confusion";
        qs.autoErrorConfidence = evidence.highConfidenceWrong ? "high" : "medium";
        qs.learningNeed = evidence.fastWrong ? "combined" : "content";
      } else if (evidence.fastWrong) {
        qs.autoErrorType = "impulsive-decision";
        qs.autoErrorConfidence = "high";
        qs.learningNeed = "process";
      } else if (evidence.slowOverthink) {
        qs.autoErrorType = "overthinking";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = "process";
      } else if (evidence.hasSuperlative || evidence.firstStepSignal || evidence.formulationFlags.length) {
        qs.autoErrorType = "misread-question";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = evidence.likelyErrorTypes.includes("concept-confusion") ? "combined" : "process";
      } else if (evidence.likelyErrorTypes.includes("terminology-confusion")) {
        qs.autoErrorType = "terminology-confusion";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = "content";
      } else if (evidence.likelyErrorTypes.includes("concept-confusion")) {
        qs.autoErrorType = "concept-confusion";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = "content";
      } else if (evidence.distractorTrap && evidence.distractorTrap !== "general") {
        qs.autoErrorType = "distractor-trap";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = qs.confidence === "high" ? "combined" : "content";
      } else if (qs.confidence === "high") {
        qs.autoErrorType = "false-confidence";
        qs.autoErrorConfidence = "medium";
        qs.learningNeed = "combined";
      } else if (getRemainingSeconds && getRemainingSeconds() < 120) {
        qs.autoErrorType = "time-pressure";
        qs.autoErrorConfidence = "low";
        qs.learningNeed = "process";
      } else {
        qs.autoErrorType = "knowledge-gap";
        qs.autoErrorConfidence = "low";
        qs.learningNeed = "content";
      }
      qs.revisionPriority = q.metadata?.revisionPriority || (qs.autoErrorType === "false-confidence" ? "high" : "medium");
    });
  }
  window.inferAutoErrorTypes = inferAutoErrorTypes;

  function inferLearningNeeds() {
    const s = appState.currentSession; if (!s) return;
    inferAutoErrorTypes();
    return s.questionStates.map(qs => qs.learningNeed);
  }
  window.inferLearningNeeds = inferLearningNeeds;

  function ensureRegistryEntry(target, key) {
    if (!key) return null;
    if (!target[key]) target[key] = buildRegistryEntry();
    else target[key] = normalizeRegistryEntry(target[key], false);
    return target[key];
  }

  function bumpRegistry(target, key, payload) {
    if (!key) return;
    const entry = ensureRegistryEntry(target, key);
    if (!entry) return;
    entry.seen += 1;
    if (payload.correct) entry.correct += 1;
    else if (payload.answered) entry.wrong += 1;
    else entry.unanswered += 1;
    if (payload.highConfidenceWrong) entry.highConfidenceWrong += 1;
    entry.lastSeenAt = payload.at;
    entry.lastOutcome = payload.correct ? "correct" : (payload.answered ? "wrong" : "unanswered");
    if (payload.timeSpentMs) {
      entry.avgTimeMs = entry.avgTimeMs ? Math.round(((entry.avgTimeMs * (entry.seen - 1)) + payload.timeSpentMs) / entry.seen) : payload.timeSpentMs;
    }
    if (payload.errorType) entry.relatedErrors[payload.errorType] = (entry.relatedErrors[payload.errorType] || 0) + 1;
  }

  function bumpSessionRegistry(map, key, payload) {
    if (!key) return;
    if (!map[key]) map[key] = { seen: 0, correct: 0, wrong: 0, unanswered: 0 };
    map[key].seen += 1;
    if (payload.correct) map[key].correct += 1;
    else if (payload.answered) map[key].wrong += 1;
    else map[key].unanswered += 1;
  }

  function applySessionStatsToRegistry(target, statsMap, sessionId, at) {
    Object.entries(statsMap || {}).forEach(([key, stats]) => {
      const entry = ensureRegistryEntry(target, key);
      if (!entry) return;
      entry.sessionCount += 1;
      if ((stats.correct || 0) === (stats.seen || 0) && (stats.seen || 0) > 0) entry.sessionsPerfect += 1;
      if ((stats.wrong || 0) > 0 || (stats.unanswered || 0) > 0) entry.sessionsWithWrong += 1;
      entry.lastOutcome = (stats.correct || 0) === (stats.seen || 0) && (stats.seen || 0) > 0
        ? "correct"
        : ((stats.wrong || 0) > 0 ? "wrong" : ((stats.unanswered || 0) > 0 ? "unanswered" : "mixed"));
      entry.recentSessionRates = Array.isArray(entry.recentSessionRates) ? entry.recentSessionRates : [];
      entry.recentSessionRates.unshift({
        sessionId: sessionId || "",
        at: at || "",
        seen: Number(stats.seen || 0),
        correct: Number(stats.correct || 0),
        wrong: Number(stats.wrong || 0),
        unanswered: Number(stats.unanswered || 0),
        rate: stats.seen ? Math.round((stats.correct || 0) / stats.seen * 100) : 0
      });
      entry.recentSessionRates = entry.recentSessionRates.slice(0, DASHBOARD_THRESHOLDS.historyWindow);
    });
  }

  

const DASHBOARD_TOPIC_AREA_RULES = [
  { label: "FunkÄŤnĂ­ rozbor obtĂ­Ĺľe a hlavnĂ­ bariĂ©ry", patterns: [/funkÄŤnĂ­\s+ÄŤtenĂ­|hlavnĂ­\s+bariĂ©r|sekundĂˇrnĂ­\s+projev|forma\s+vĂ˝konu|pĹ™Ă­stup\s+k\s+informaci|porozumÄ›nĂ­|podmĂ­nky\s+vĂ˝konu|dostupnost\s+sdÄ›lenĂ­|dostupnost\s+zadĂˇnĂ­|vizuĂˇlnĂ­\s+pĹ™Ă­stup|strukturace\s+zadĂˇnĂ­|strukturace\s+Ăşkolu|stabilita\s+obtĂ­Ĺľe|prostĹ™edĂ­\s+a\s+vĂ˝kon|cĂ­lovĂˇ\s+situace|podmĂ­nky\s+zpracovĂˇnĂ­|porozumÄ›nĂ­\s+textu/i] },
  { label: "Psychologie, vĂ˝voj a poradenskĂˇ komunikace", patterns: [/psycholog|ontogenez|akomod|asimil|frustr|depriv|obrann|freud|jung|rogers|maslow|erikson|piaget|vygotsk|pavlov|empati|parafrĂˇz|parafraz|naslouch|dialog|rozhovor|poradenskĂ©\s+minimum|komunikace\s+a\s+poradenstvĂ­|sociokulturn/i] },
  { label: "DisciplĂ­ny a klasifikace speciĂˇlnĂ­ pedagogiky", patterns: [/logoped|surdoped|tyfloped|somatoped|psychoped|etoped|pedi[eiĂ­]|preling|postling|kongenit|zĂ­skan|ziskane|pas\b|fonemat|balbuties|tumultus|dysfonie|rinolalie|prozo|klasifika|terminologickĂ©\s+rozliĹˇenĂ­|disciplinĂˇrnĂ­\s+rozliĹˇenĂ­/i] },
  { label: "Intervence, metody a podpĹŻrnĂ© strategie", patterns: [/reeduk|kompenz|teacch|aak\b|augmentativ|alternativnĂ­\s+komunik|alternativni\s+komunik|ergoter|fyzioter|bazĂˇlnĂ­|bazalni|logoter|pomĹŻcka|pomucka|metoda|Ăşprava\s+prostĹ™edĂ­|uprava\s+prostredi|evaluace\s+podpory|interven|terapie|strategie\s+podpory/i] },
  { label: "Ĺ kolskĂ© poradenstvĂ­, dokumenty a podpĹŻrnĂˇ opatĹ™enĂ­", patterns: [/Ĺˇkolsk|skolsk|po1\b|plpp\b|ivp\b|Ĺˇpz|spc\b|ppp\b|svp\b|doporuÄŤen|zprĂˇv|zprav|typy\s+Ĺˇkol|typy\s+skol|prĂˇvnĂ­\s+reĹľim|pravni\s+rezim|podpĹŻrnĂˇ\s+opatĹ™enĂ­|podpurna\s+opatreni|Ĺ™editel|reditel|Ĺˇkola\s+vs|adresĂˇti\s+poradenskĂ˝ch\s+sluĹľeb|adresati\s+poradenskych\s+sluzeb/i] },
  { label: "SociĂˇlnĂ­ systĂ©m, dĂˇvky a instituce", patterns: [/dĂˇvk|davk|ztp|prĹŻkaz|prukaz|ĂşĹ™ad\s+prĂˇce|urad\s+prace|ospod|soud|diagnostick|dÄ›tskĂ˝\s+domov|detsky\s+domov|vĂ˝chovnĂ˝\s+Ăşstav|vychovny\s+ustav|sluĹľb|sluzb|veĹ™ejnĂˇ\s+sprĂˇva|verejna\s+sprava|mobilit|vozid|financov|orgĂˇny|organy|meziresort|veĹ™ejnĂ©\s+sprĂˇvy|verejne\s+spravy|sociĂˇlnÄ›-legislativnĂ­|socialne-legislativni/i] },
  { label: "Historie oboru a osobnosti", patterns: [/histor|osobnost|autor|pedro\s+ponce|komensk|itard|haĂĽy|braille|frankl|van\s+riper|redl|kĂˇbele|kabele|lechta|neubauer|valenta|ludĂ­kovĂˇ|ludikova|matÄ›jÄŤek|matejcek|sovĂˇk|sovak|makarenko|ÄŤeskĂˇ\s+tradice|ceska\s+tradice|periodizace/i] }
];

function normalizeTopicAreaSourceText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function deriveDashboardTopicArea(source) {
  const base = source && typeof source === "object" ? source : { subtopic: source };
  const text = [
    base.topicArea,
    base.conceptFamily,
    base.subtopic,
    base.discipline,
    base.institutionDomain,
    Array.isArray(base.conceptTags) ? base.conceptTags.join(" ") : "",
    base.questionCore,
    base.requiredDiscrimination,
    base.questionText
  ].filter(Boolean).join(" | ");
  const normalized = normalizeTopicAreaSourceText(text);

  for (const rule of DASHBOARD_TOPIC_AREA_RULES) {
    if (rule.patterns.some(pattern => pattern.test(normalized))) return rule.label;
  }

  if (/poraden/.test(normalized)) return "Ĺ kolskĂ© poradenstvĂ­, dokumenty a podpĹŻrnĂˇ opatĹ™enĂ­";
  if (/interven|terapi|podpora/.test(normalized)) return "Intervence, metody a podpĹŻrnĂ© strategie";
  if (/histor|autor|osobnost/.test(normalized)) return "Historie oboru a osobnosti";
  if (/psycholog|komunik|vyvoj|ontogen/.test(normalized)) return "Psychologie, vĂ˝voj a poradenskĂˇ komunikace";
  if (/social|davk|instituc|verejn/.test(normalized)) return "SociĂˇlnĂ­ systĂ©m, dĂˇvky a instituce";
  return "SpeciĂˇlnÄ›pedagogickĂˇ orientace a poradenstvĂ­";
}
window.getDashboardTopicAreaLabel = deriveDashboardTopicArea;

function mergeRegistryEntries(prev, next) {
  const a = normalizeRegistryEntry(prev || {}, false);
  const b = normalizeRegistryEntry(next || {}, false);
  const totalSeen = Number(a.seen || 0) + Number(b.seen || 0);
  return {
    ...a,
    seen: totalSeen,
    correct: Number(a.correct || 0) + Number(b.correct || 0),
    wrong: Number(a.wrong || 0) + Number(b.wrong || 0),
    unanswered: Number(a.unanswered || 0) + Number(b.unanswered || 0),
    highConfidenceWrong: Number(a.highConfidenceWrong || 0) + Number(b.highConfidenceWrong || 0),
    avgTimeMs: totalSeen ? Math.round((((Number(a.avgTimeMs || 0) * Number(a.seen || 0)) + (Number(b.avgTimeMs || 0) * Number(b.seen || 0))) / Math.max(1, totalSeen))) : 0,
    lastSeenAt: [a.lastSeenAt, b.lastSeenAt].filter(Boolean).sort().slice(-1)[0] || "",
    relatedErrors: { ...(a.relatedErrors || {}), ...(b.relatedErrors || {}) },
    sessionCount: Number(a.sessionCount || 0) + Number(b.sessionCount || 0),
    sessionsPerfect: Number(a.sessionsPerfect || 0) + Number(b.sessionsPerfect || 0),
    sessionsWithWrong: Number(a.sessionsWithWrong || 0) + Number(b.sessionsWithWrong || 0),
    lastOutcome: b.lastOutcome || a.lastOutcome || "",
    recentSessionRates: [...(a.recentSessionRates || []), ...(b.recentSessionRates || [])].slice(0, DASHBOARD_THRESHOLDS.historyWindow)
  };
}

function aggregateRegistryByClassifier(registry, classifier) {
  const out = {};
  Object.entries(registry || {}).forEach(([label, value]) => {
    const targetLabel = classifier(label, value);
    if (!targetLabel) return;
    out[targetLabel] = mergeRegistryEntries(out[targetLabel], value);
  });
  return out;
}


function getMetadataCoverageCatalog() {
  const exports = [
    Array.isArray(window.SCIO_METADATA_BASIC?.items) ? window.SCIO_METADATA_BASIC.items : [],
    Array.isArray(window.SCIO_METADATA_HARD?.items) ? window.SCIO_METADATA_HARD.items : []
  ];
  const disciplines = new Set();
  const subtopics = new Set();
  const topicAreas = new Set();
  const subtopicToTopicArea = {};
  const disciplineToTopicArea = {};
  exports.flat().forEach(item => {
    const discipline = item?.discipline || item?.metadata?.discipline;
    const subtopic = item?.subtopic || item?.metadata?.subtopic;
    const topicArea = deriveDashboardTopicArea(item?.metadata || item || {});
    if (discipline) {
      disciplines.add(discipline);
      if (topicArea && !disciplineToTopicArea[discipline]) disciplineToTopicArea[discipline] = topicArea;
    }
    if (subtopic) {
      subtopics.add(subtopic);
      if (topicArea && !subtopicToTopicArea[subtopic]) subtopicToTopicArea[subtopic] = topicArea;
    }
    if (topicArea) topicAreas.add(topicArea);
  });
  return { disciplines, subtopics, topicAreas, subtopicToTopicArea, disciplineToTopicArea };
}



  function getEntryRecentRate(entry) {
    const history = Array.isArray(entry?.recentSessionRates) ? entry.recentSessionRates.slice(0, DASHBOARD_THRESHOLDS.recentWindow) : [];
    if (!history.length) return entry?.seen ? Math.round((entry.correct || 0) / entry.seen * 100) : 0;
    const totalSeen = history.reduce((sum, item) => sum + Number(item.seen || 0), 0);
    const totalCorrect = history.reduce((sum, item) => sum + Number(item.correct || 0), 0);
    return totalSeen ? Math.round(totalCorrect / totalSeen * 100) : 0;
  }

  function getEntryTrend(entry) {
    const history = Array.isArray(entry?.recentSessionRates) ? entry.recentSessionRates.slice(0, DASHBOARD_THRESHOLDS.recentWindow).reverse() : [];
    if (history.length < 2) return "stabilnĂ­";
    const deltas = [];
    for (let i = 1; i < history.length; i++) deltas.push((history[i].rate || 0) - (history[i - 1].rate || 0));
    const avgDelta = deltas.length ? deltas.reduce((sum, value) => sum + value, 0) / deltas.length : 0;
    if (avgDelta >= 4) return "roste";
    if (avgDelta <= -4) return "klesĂˇ";
    if (deltas.some(value => value > 0) && deltas.some(value => value < 0)) return "kolĂ­sĂˇ";
    return "stabilnĂ­";
  }

  function getEntryConfidenceLevel(entry) {
    const seen = Number(entry?.seen || 0);
    const sessions = Number(entry?.sessionCount || 0);
    if (seen >= DASHBOARD_THRESHOLDS.minSeenMastered && sessions >= DASHBOARD_THRESHOLDS.minSessionMastered) return "vysokĂˇ";
    if (seen >= DASHBOARD_THRESHOLDS.minSeenStrong && sessions >= 1) return "stĹ™ednĂ­";
    return "nĂ­zkĂˇ";
  }

  function classifyTopicEntry(entry) {
    const seen = Number(entry?.seen || 0);
    const rate = seen ? Math.round((entry.correct || 0) / seen * 100) : 0;
    const sessionCount = Number(entry?.sessionCount || 0);
    if (seen === 0) return "neprocviÄŤeno";
    if (seen < DASHBOARD_THRESHOLDS.undertrainedSeen || sessionCount < DASHBOARD_THRESHOLDS.undertrainedSessions) return "mĂˇlo-dat";
    if (rate >= DASHBOARD_THRESHOLDS.masteredRate && seen >= DASHBOARD_THRESHOLDS.minSeenMastered && sessionCount >= DASHBOARD_THRESHOLDS.minSessionMastered) return "zvlĂˇdnutĂ©";
    if (rate >= DASHBOARD_THRESHOLDS.strongRate && seen >= DASHBOARD_THRESHOLDS.minSeenStrong) return "silnĂ©";
    if (rate < DASHBOARD_THRESHOLDS.riskyRate && seen >= DASHBOARD_THRESHOLDS.minSeenRisky) return "rizikovĂ©";
    if (rate < DASHBOARD_THRESHOLDS.weakRate && seen >= DASHBOARD_THRESHOLDS.minSeenWeak) return "slabĂ©";
    return "stabilnĂ­";
  }

  function buildTopicInsightList(registry, labelKey, knownSet) {
    const entries = Object.entries(registry || {});
    const out = entries.map(([label, rawValue]) => {
      const value = normalizeRegistryEntry(rawValue, false);
      const seen = Number(value.seen || 0);
      const correct = Number(value.correct || 0);
      const wrong = Number(value.wrong || 0);
      const unanswered = Number(value.unanswered || 0);
      const rate = seen ? Math.round(correct / seen * 100) : 0;
      return {
        key: label,
        [labelKey]: label,
        seen,
        correct,
        wrong,
        unanswered,
        rate,
        recentRate: getEntryRecentRate(value),
        sessionCount: Number(value.sessionCount || 0),
        sessionsPerfect: Number(value.sessionsPerfect || 0),
        sessionsWithWrong: Number(value.sessionsWithWrong || 0),
        highConfidenceWrong: Number(value.highConfidenceWrong || 0),
        avgTimeMs: Number(value.avgTimeMs || 0),
        confidenceLevel: getEntryConfidenceLevel(value),
        trend: getEntryTrend(value),
        status: classifyTopicEntry(value),
        lastSeenAt: value.lastSeenAt || "",
        isKnown: knownSet ? knownSet.has(label) : true
      };
    });
    if (knownSet) {
      knownSet.forEach(label => {
        if (!registry?.[label]) {
          out.push({
            key: label,
            [labelKey]: label,
            seen: 0,
            correct: 0,
            wrong: 0,
            unanswered: 0,
            rate: 0,
            recentRate: 0,
            sessionCount: 0,
            sessionsPerfect: 0,
            sessionsWithWrong: 0,
            highConfidenceWrong: 0,
            avgTimeMs: 0,
            confidenceLevel: "nĂ­zkĂˇ",
            trend: "stabilnĂ­",
            status: "neprocviÄŤeno",
            lastSeenAt: "",
            isKnown: true
          });
        }
      });
    }
    const onlySeen = out.filter(item => item.seen > 0);
    const sortWeak = (a, b) => (a.rate - b.rate) || (b.seen - a.seen) || String(a.key).localeCompare(String(b.key), "cs");
    const sortStrong = (a, b) => (b.rate - a.rate) || (b.sessionCount - a.sessionCount) || (b.seen - a.seen) || String(a.key).localeCompare(String(b.key), "cs");
    const sortUndertrained = (a, b) => {
      const aScore = (a.seen === 0 ? -1 : a.seen);
      const bScore = (b.seen === 0 ? -1 : b.seen);
      return aScore - bScore || a.sessionCount - b.sessionCount || String(a.key).localeCompare(String(b.key), "cs");
    };
    return {
      all: out.slice().sort((a, b) => String(a.key).localeCompare(String(b.key), "cs")),
      weak: onlySeen.filter(item => item.status === "slabĂ©" || item.status === "rizikovĂ©").sort(sortWeak),
      risky: onlySeen.filter(item => item.status === "rizikovĂ©").sort(sortWeak),
      strong: onlySeen.filter(item => item.status === "silnĂ©" || item.status === "zvlĂˇdnutĂ©").sort(sortStrong),
      mastered: onlySeen.filter(item => item.status === "zvlĂˇdnutĂ©").sort(sortStrong),
      undertrained: out.filter(item => item.status === "mĂˇlo-dat" || item.status === "neprocviÄŤeno").sort(sortUndertrained)
    };
  }

  function buildDisciplineBreakdown(session) {
    const s = session || appState.currentSession; if (!s) return [];
    const map = {};
    s.questionStates.forEach((qs, idx) => {
      const discipline = s.activeTest.questions[idx].metadata?.discipline || "obecnĂˇ disciplĂ­na";
      if (!map[discipline]) map[discipline] = { discipline, seen:0, correct:0, wrong:0, rate:0 };
      map[discipline].seen += 1;
      if (qs.selectedAnswer === s.activeTest.questions[idx].correct) map[discipline].correct += 1;
      else map[discipline].wrong += 1;
    });
    return Object.values(map).map(item => ({ ...item, rate: item.seen ? Math.round(item.correct / item.seen * 100) : 0 })).sort((a,b)=>a.rate-b.rate);
  }
  window.buildDisciplineBreakdown = buildDisciplineBreakdown;

  function buildSubtopicBreakdown(session) {
    const s = session || appState.currentSession; if (!s) return [];
    const map = {};
    s.questionStates.forEach((qs, idx) => {
      const subtopic = s.activeTest.questions[idx].metadata?.subtopic || "obecnĂ© tĂ©ma";
      if (!map[subtopic]) map[subtopic] = { subtopic, seen:0, correct:0, wrong:0, rate:0 };
      map[subtopic].seen += 1;
      if (qs.selectedAnswer === s.activeTest.questions[idx].correct) map[subtopic].correct += 1;
      else map[subtopic].wrong += 1;
    });
    return Object.values(map).map(item => ({ ...item, rate: item.seen ? Math.round(item.correct / item.seen * 100) : 0 })).sort((a,b)=>a.rate-b.rate);
  }
  window.buildSubtopicBreakdown = buildSubtopicBreakdown;

  function buildFormulationRiskSummary(session) {
    const s = session || appState.currentSession; if (!s) return [];
    const map = {};
    s.questionStates.forEach((qs, idx) => {
      const question = s.activeTest.questions[idx];
      const flags = question.metadata?.formulationFlags || [];
      flags.forEach(flag => {
        if (!map[flag]) map[flag] = { flag, seen:0, wrong:0, highConfidenceWrong:0 };
        map[flag].seen += 1;
        const isWrong = qs.selectedAnswer !== null && qs.selectedAnswer !== question.correct;
        if (isWrong) map[flag].wrong += 1;
        if (isWrong && qs.confidence === "high") map[flag].highConfidenceWrong += 1;
      });
    });
    return Object.values(map).map(item => ({ ...item, risk: item.seen ? Math.round(item.wrong / item.seen * 100) : 0 })).sort((a,b)=>b.risk-a.risk);
  }
  window.buildFormulationRiskSummary = buildFormulationRiskSummary;

  function buildInstitutionRiskSummary(session) {
    const s = session || appState.currentSession; if (!s) return [];
    const map = {};
    s.questionStates.forEach((qs, idx) => {
      const pair = s.activeTest.questions[idx].metadata?.institutionPair;
      if (!pair) return;
      if (!map[pair]) map[pair] = { pair, seen:0, wrong:0, highConfidenceWrong:0 };
      map[pair].seen += 1;
      const isWrong = qs.selectedAnswer !== null && qs.selectedAnswer !== s.activeTest.questions[idx].correct;
      if (isWrong) map[pair].wrong += 1;
      if (isWrong && qs.confidence === "high") map[pair].highConfidenceWrong += 1;
    });
    return Object.values(map).map(item => ({ ...item, risk: item.seen ? Math.round(item.wrong / item.seen * 100) : 0 })).sort((a,b)=>b.risk-a.risk);
  }
  window.buildInstitutionRiskSummary = buildInstitutionRiskSummary;

  function buildTrendSummary() {
    const recent = (appState.progress?.trends?.recentSessions || []).slice(0, 5);
    if (!recent.length) return { direction: "none", series: [] };
    const series = recent.slice().reverse();
    const deltas = [];
    for (let i = 1; i < series.length; i++) deltas.push(series[i].percentage - series[i-1].percentage);
    const avgDelta = deltas.length ? deltas.reduce((a,b)=>a+b,0) / deltas.length : 0;
    let direction = "stagnace";
    if (avgDelta >= 4) direction = "zlepĹˇenĂ­";
    else if (avgDelta <= -4) direction = "zhorĹˇenĂ­";
    else if (deltas.some(d=>d>0) && deltas.some(d=>d<0)) direction = "kolĂ­sĂˇnĂ­";
    return {
      direction,
      series: recent,
      effectOfRepair: recent.filter(item => item.mode === "repair").slice(0, 2)
    };
  }
  window.buildTrendSummary = buildTrendSummary;

  function summarizeErrorTypes(session) {
    const s = session || appState.currentSession; if (!s) return [];
    const map = {};
    s.questionStates.forEach(qs => {
      const key = normalizeErrorCode(qs.manualErrorType || qs.autoErrorType);
      if (!key) return;
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([type, count]) => ({ type, count, label: getErrorLabel(type) })).sort((a,b)=>b.count-a.count);
  }


  function buildSessionDashboardSummaryFallback(session) {
    const s = session || appState.currentSession;
    if (!s || !Array.isArray(s.questionStates) || !s.activeTest?.questions) return null;

    const thresholds = { ...DASHBOARD_THRESHOLDS };
    const catalog = getMetadataCoverageCatalog();
    const score = typeof calculateScore === "function" ? calculateScore() : { correct: 0, total: s.questionStates.length || 0, answered: 0, percentage: 0 };
    const disciplineRows = buildDisciplineBreakdown(s);
    const subtopicRows = buildSubtopicBreakdown(s);
    const topErrors = summarizeErrorTypes(s).slice(0, 5);
    const topFormulations = buildFormulationRiskSummary(s).slice(0, 5);
    const topInstitutionPairs = buildInstitutionRiskSummary(s).slice(0, 5);

    function mapRow(row, labelKey) {
      const label = String(row?.[labelKey] || row?.key || "obecnĂ© tĂ©ma");
      const seen = Number(row?.seen || 0);
      const correct = Number(row?.correct || 0);
      const wrong = Number(row?.wrong || Math.max(0, seen - correct));
      const rate = seen ? Math.round(correct / seen * 100) : 0;
      const masteredReady = seen >= thresholds.minSeenMastered && 1 >= thresholds.minSessionMastered;
      const strongReady = seen >= thresholds.minSeenStrong && 1 >= thresholds.minSessionStrong;
      let status = "mĂˇlo-dat";
      if (seen === 0) status = "neprocviÄŤeno";
      else if (rate < thresholds.riskyRate && seen >= thresholds.minSeenRisky) status = "rizikovĂ©";
      else if (rate < thresholds.weakRate && seen >= thresholds.minSeenWeak) status = "slabĂ©";
      else if (rate >= thresholds.masteredRate && masteredReady) status = "zvlĂˇdnutĂ©";
      else if (rate >= thresholds.strongRate && strongReady) status = "silnĂ©";
      return {
        key: label,
        [labelKey]: label,
        seen,
        correct,
        wrong,
        unanswered: 0,
        rate,
        recentRate: rate,
        sessionCount: 1,
        sessionsPerfect: seen > 0 && correct === seen ? 1 : 0,
        sessionsWithWrong: wrong > 0 ? 1 : 0,
        highConfidenceWrong: 0,
        avgTimeMs: 0,
        confidenceLevel: "nĂ­zkĂˇ",
        trend: "stabilnĂ­",
        status,
        lastSeenAt: s.updatedAt || s.timing?.finishedAt || new Date().toISOString()
      };
    }

    const disciplineInsights = disciplineRows.map(item => mapRow(item, "discipline"));
    const subtopicInsights = subtopicRows.map(item => mapRow(item, "subtopic"));

    return {
      weakestDisciplines: disciplineInsights.slice().sort((a, b) => (a.rate - b.rate) || (b.seen - a.seen)).slice(0, 3),
      weakestSubtopics: subtopicInsights.slice().sort((a, b) => (a.rate - b.rate) || (b.seen - a.seen)).slice(0, 5),
      strongestDisciplines: disciplineInsights.slice().sort((a, b) => (b.rate - a.rate) || (b.seen - a.seen)).slice(0, 3),
      strongestSubtopics: subtopicInsights.slice().sort((a, b) => (b.rate - a.rate) || (b.seen - a.seen)).slice(0, 5),
      masteredDisciplines: disciplineInsights.filter(item => item.rate >= thresholds.masteredRate).slice(0, 5),
      masteredSubtopics: subtopicInsights.filter(item => item.rate >= thresholds.masteredRate).slice(0, 8),
      undertrainedDisciplines: disciplineInsights.slice().sort((a, b) => (a.seen - b.seen) || String(a.key).localeCompare(String(b.key), "cs")).slice(0, 5),
      undertrainedSubtopics: subtopicInsights.slice().sort((a, b) => (a.seen - b.seen) || String(a.key).localeCompare(String(b.key), "cs")).slice(0, 8),
      riskyDisciplines: disciplineInsights.filter(item => item.rate < thresholds.riskyRate).slice(0, 3),
      riskySubtopics: subtopicInsights.filter(item => item.rate < thresholds.riskyRate).slice(0, 5),
      disciplineInsights,
      subtopicInsights,
      topErrors,
      topFormulations,
      topInstitutionPairs,
      highConfidenceWrongCount: Number(calculateAttentionMetrics?.().highConfidenceWrongCount || 0),
      overallRate: Number(score.percentage || 0),
      finishedSessions: 1,
      answeredCount: Number(score.answered || 0),
      correctCount: Number(score.correct || 0),
      wrongCount: Math.max(0, Number(score.answered || 0) - Number(score.correct || 0)),
      unansweredCount: Math.max(0, Number(score.total || 0) - Number(score.answered || 0)),
      testedDisciplineCount: disciplineInsights.length,
      testedSubtopicCount: subtopicInsights.length,
      totalKnownDisciplines: catalog.disciplines.size || disciplineInsights.length,
      totalKnownSubtopics: catalog.subtopics.size || subtopicInsights.length,
      disciplineCoverageRate: catalog.disciplines.size ? Math.round(disciplineInsights.length / catalog.disciplines.size * 100) : 0,
      subtopicCoverageRate: catalog.subtopics.size ? Math.round(subtopicInsights.length / catalog.subtopics.size * 100) : 0,
      thresholds,
      trend: buildTrendSummary(),
      source: "current-session-fallback"
    };
  }
  window.buildSessionDashboardSummaryFallback = buildSessionDashboardSummaryFallback;

  
function buildWeaknessSummary() {
  const p = normalizeProgress(appState.progress || getEmptyProgress());
  const totals = p.totals || {};
  const catalog = getMetadataCoverageCatalog();

  const disciplineInsights = buildTopicInsightList(p.disciplines || {}, "discipline", catalog.disciplines);
  const subtopicInsights = buildTopicInsightList(p.subtopics || {}, "subtopic", catalog.subtopics);

  const topicAreaRegistry = Object.keys(p.topicAreas || {}).length
    ? p.topicAreas
    : aggregateRegistryByClassifier(p.subtopics || {}, (subtopicLabel) => catalog.subtopicToTopicArea[subtopicLabel] || deriveDashboardTopicArea({ subtopic: subtopicLabel }));

  const topicAreaInsights = buildTopicInsightList(topicAreaRegistry, "topicArea", catalog.topicAreas);

  const overallRate = totals.answered ? Math.round((totals.correct || 0) / totals.answered * 100) : 0;
  const testedDisciplineCount = disciplineInsights.all.filter(item => item.seen > 0).length;
  const testedSubtopicCount = subtopicInsights.all.filter(item => item.seen > 0).length;
  const testedTopicAreaCount = topicAreaInsights.all.filter(item => item.seen > 0).length;
  const verifiedTopicAreas = topicAreaInsights.all.filter(item => item.status !== "neprocviÄŤeno" && item.status !== "mĂˇlo-dat");
  const undertrainedSeenTopicAreas = topicAreaInsights.all.filter(item => item.status === "mĂˇlo-dat");
  const notSeenTopicAreas = topicAreaInsights.all.filter(item => item.status === "neprocviÄŤeno");
  const priorityTopicAreas = topicAreaInsights.all
    .filter(item => item.status === "rizikovĂ©" || item.status === "slabĂ©")
    .sort((a, b) => (a.rate - b.rate) || (b.highConfidenceWrong - a.highConfidenceWrong) || (b.seen - a.seen) || String(a.topicArea).localeCompare(String(b.topicArea), "cs"));

  const totalKnownDisciplines = catalog.disciplines.size || testedDisciplineCount;
  const totalKnownSubtopics = catalog.subtopics.size || testedSubtopicCount;
  const totalKnownTopicAreas = catalog.topicAreas.size || testedTopicAreaCount;

  const topErrors = Object.entries(p.errorTypes || {}).map(([type, value]) => ({
    type: normalizeErrorCode(type),
    count: value.wrong || value.seen || 0,
    label: getErrorLabel(type)
  })).sort((a,b)=>b.count-a.count).slice(0, 5);

  const topFormulations = Object.entries(p.formulations || {}).map(([flag, value]) => ({
    flag,
    risk: value.seen ? Math.round((value.wrong || 0) / value.seen * 100) : 0,
    count: value.wrong || 0
  })).filter(item => item.count > 0 || item.risk > 0).sort((a,b)=>(b.risk-a.risk) || (b.count-a.count)).slice(0, 5);

  const topInstitutionPairs = Object.entries(p.institutionConfusions || {}).map(([pair, value]) => ({
    pair,
    risk: value.seen ? Math.round((value.wrong || 0) / value.seen * 100) : 0,
    count: value.wrong || 0
  })).filter(item => item.count > 0 || item.risk > 0).sort((a,b)=>(b.count-a.count) || (b.risk-a.risk)).slice(0, 5);

  const strongDomains = disciplineInsights.mastered.length ? disciplineInsights.mastered.slice(0, 4) : disciplineInsights.strong.slice(0, 4);
  const studentHeadline = totals.answered
    ? `ZodpovÄ›zeno mĂˇĹˇ ${totals.answered} otĂˇzek, z toho ${totals.correct || 0} sprĂˇvnÄ›, ${totals.wrong || 0} chybnÄ› a ${totals.unanswered || 0} bez odpovÄ›di.`
    : "Po prvnĂ­m dokonÄŤenĂ©m testu se tady objevĂ­ pĹ™ehled silnĂ˝ch a slabĹˇĂ­ch okruhĹŻ.";
  const coverageHeadline = totalKnownTopicAreas
    ? `ZatĂ­m ses dotkl(a) ${testedTopicAreaCount} z ${totalKnownTopicAreas} hlavnĂ­ch okruhĹŻ a u ${verifiedTopicAreas.length} z nich uĹľ je dost dat pro rozumnĂ˝ zĂˇvÄ›r.`
    : "TematickĂ© okruhy se zaÄŤnou sklĂˇdat po prvnĂ­ch vĂ˝sledcĂ­ch.";

  const summary = {
    weakestDisciplines: disciplineInsights.weak.slice(0, 3),
    weakestSubtopics: subtopicInsights.weak.slice(0, 5),
    strongestDisciplines: disciplineInsights.strong.slice(0, 3),
    strongestSubtopics: subtopicInsights.strong.slice(0, 5),
    masteredDisciplines: disciplineInsights.mastered.slice(0, 5),
    masteredSubtopics: subtopicInsights.mastered.slice(0, 8),
    undertrainedDisciplines: disciplineInsights.undertrained.slice(0, 5),
    undertrainedSubtopics: subtopicInsights.undertrained.slice(0, 8),
    riskyDisciplines: disciplineInsights.risky.slice(0, 3),
    riskySubtopics: subtopicInsights.risky.slice(0, 5),

    topicAreaInsights: topicAreaInsights.all,
    weakestTopicAreas: topicAreaInsights.weak.slice(0, 4),
    strongestTopicAreas: topicAreaInsights.strong.slice(0, 4),
    masteredTopicAreas: topicAreaInsights.mastered.slice(0, 5),
    undertrainedTopicAreas: undertrainedSeenTopicAreas.slice(0, 6),
    notSeenTopicAreas: notSeenTopicAreas.slice(0, 6),
    verifiedTopicAreas: verifiedTopicAreas,
    priorityTopicAreas: priorityTopicAreas.slice(0, 5),

    disciplineInsights: disciplineInsights.all,
    subtopicInsights: subtopicInsights.all,
    topErrors,
    topFormulations,
    topInstitutionPairs,
    highConfidenceWrongCount: totals.highConfidenceWrong || 0,
    overallRate,
    finishedSessions: totals.finishedSessions || p.testCount || 0,
    answeredCount: totals.answered || 0,
    correctCount: totals.correct || 0,
    wrongCount: totals.wrong || 0,
    unansweredCount: totals.unanswered || 0,
    testedDisciplineCount,
    testedSubtopicCount,
    testedTopicAreaCount,
    verifiedTopicAreaCount: verifiedTopicAreas.length,
    totalKnownDisciplines,
    totalKnownSubtopics,
    totalKnownTopicAreas,
    disciplineCoverageRate: totalKnownDisciplines ? Math.round(testedDisciplineCount / totalKnownDisciplines * 100) : 0,
    subtopicCoverageRate: totalKnownSubtopics ? Math.round(testedSubtopicCount / totalKnownSubtopics * 100) : 0,
    topicAreaCoverageRate: totalKnownTopicAreas ? Math.round(testedTopicAreaCount / totalKnownTopicAreas * 100) : 0,
    topicAreaVerificationRate: totalKnownTopicAreas ? Math.round(verifiedTopicAreas.length / totalKnownTopicAreas * 100) : 0,
    strongDomains,
    studentHeadline,
    coverageHeadline,
    thresholds: { ...DASHBOARD_THRESHOLDS },
    trend: buildTrendSummary()
  };

  return summary;
}
function buildStudyDashboardSummary() {
  return buildWeaknessSummary();
}
window.buildStudyDashboardSummary = buildStudyDashboardSummary;

  window.buildWeaknessSummary = buildWeaknessSummary;
  window.buildStudyDashboardSummary = buildWeaknessSummary;

  function buildRecommendations() {
    const session = appState.currentSession;
    const weakness = buildWeaknessSummary();
    const trend = buildTrendSummary();
    const recs = [];

    if (weakness.riskySubtopics[0]) {
      recs.push({
        type: "subtopic-drill",
        priority: "high",
        bucket: "repair",
        title: "Zpevni rizikovĂ© tĂ©ma",
        message: `ZaÄŤni tĂ©matem ${weakness.riskySubtopics[0].subtopic}.`,
        reason: `V tomto tĂ©matu mĂˇĹˇ zatĂ­m jen ${weakness.riskySubtopics[0].rate} % a uĹľ dost dat pro spolehlivĂ© hodnocenĂ­.`,
        filters: { subtopic: weakness.riskySubtopics[0].subtopic }
      });
    } else if (weakness.weakestSubtopics[0]) {
      recs.push({
        type: "subtopic-drill",
        priority: "high",
        bucket: "repair",
        title: "ProcviÄŤ nejslabĹˇĂ­ tĂ©ma",
        message: `Dnes procviÄŤ hlavnÄ› tĂ©ma ${weakness.weakestSubtopics[0].subtopic}.`,
        reason: `DlouhodobÄ› mĂˇĹˇ v tomto tĂ©matu ĂşspÄ›Ĺˇnost ${weakness.weakestSubtopics[0].rate} %.`,
        filters: { subtopic: weakness.weakestSubtopics[0].subtopic }
      });
    }

    if (weakness.undertrainedSubtopics[0] && weakness.undertrainedSubtopics[0].seen > 0) {
      recs.push({
        type: "coverage-drill",
        priority: "medium",
        bucket: "coverage",
        title: "DoplĹ mĂˇlo procviÄŤenĂ© tĂ©ma",
        message: `JeĹˇtÄ› si potvrÄŹ tĂ©ma ${weakness.undertrainedSubtopics[0].subtopic}.`,
        reason: "ZatĂ­m je o nÄ›m mĂˇlo dat, takĹľe profil nenĂ­ stabilnĂ­.",
        filters: { subtopic: weakness.undertrainedSubtopics[0].subtopic }
      });
    }

    if (weakness.topFormulations[0]) {
      recs.push({
        type: "formulation-drill",
        priority: "medium",
        bucket: "repair",
        title: "ProcviÄŤ rizikovĂ© formulace",
        message: `ZamÄ›Ĺ™ se na formulaci ${weakness.topFormulations[0].flag}.`,
        reason: "PrĂˇvÄ› tato formulace ti dlouhodobÄ› dÄ›lĂˇ nejvÄ›tĹˇĂ­ potĂ­Ĺľe.",
        filters: { formulation: weakness.topFormulations[0].flag }
      });
    }

    if ((weakness.highConfidenceWrongCount || 0) > 0) {
      recs.push({
        type: "false-confidence-drill",
        priority: "high",
        bucket: "repair",
        title: "VraĹĄ se k jistĂ˝m chybnĂ˝m odpovÄ›dĂ­m",
        message: "Projdi otĂˇzky, kde jsi chyboval(a) s vysokou jistotou.",
        reason: `V historii mĂˇĹˇ ${weakness.highConfidenceWrongCount} jistĂ˝ch chybnĂ˝ch odpovÄ›dĂ­.`,
        filters: { highConfidenceWrong: true }
      });
    }

    if (weakness.masteredSubtopics[0]) {
      recs.push({
        type: "maintenance",
        priority: "low",
        bucket: "maintain",
        title: "UdrĹľ silnĂ© tĂ©ma aktivnĂ­",
        message: `TĂ©ma ${weakness.masteredSubtopics[0].subtopic} uĹľ drĹľĂ­Ĺˇ velmi dobĹ™e.`,
        reason: "StaÄŤĂ­ ho prĹŻbÄ›ĹľnÄ› potvrzovat lehÄŤĂ­m nĂˇvratem.",
        filters: { subtopic: weakness.masteredSubtopics[0].subtopic }
      });
    }

    if (session && session.results?.diagnosticSummary?.topInstitutionConfusion) {
      recs.push({
        type: "institution-drill",
        priority: "medium",
        bucket: "repair",
        title: "ProcviÄŤ zĂˇmÄ›ny institucĂ­",
        message: `ProcviÄŤ ${session.results.diagnosticSummary.topInstitutionConfusion}.`,
        reason: "V poslednĂ­ relaci se opakovala zĂˇmÄ›na institucĂ­.",
        filters: { institutionPair: session.results.diagnosticSummary.topInstitutionConfusion }
      });
    }

    if (trend.direction === "zhorĹˇenĂ­") {
      recs.push({
        type: "stabilization",
        priority: "medium",
        bucket: "stabilize",
        title: "Zpomal a stabilizuj vĂ˝kon",
        message: "V dalĹˇĂ­ch dvou relacĂ­ch upĹ™ednostni pĹ™esnost pĹ™ed tempem.",
        reason: "Trend poslednĂ­ch pokusĹŻ je klesajĂ­cĂ­.",
        filters: { mode: "reading-training" }
      });
    }

    if (session && session.results?.diagnosticSummary?.dominantProcessWeakness) {
      recs.push({
        type: "process-fix",
        priority: "medium",
        bucket: "repair",
        title: "Oprav procesnĂ­ chybu",
        message: `NejvÄ›tĹˇĂ­ procesnĂ­ problĂ©m relace: ${getErrorLabel(session.results.diagnosticSummary.dominantProcessWeakness)}.`,
        reason: "VyplatĂ­ se nejdĹ™Ă­v stabilizovat zpĹŻsob ÄŤtenĂ­ a rozhodovĂˇnĂ­.",
        filters: { errorType: session.results.diagnosticSummary.dominantProcessWeakness }
      });
    }

    return recs.slice(0, 6);
  }
  window.buildRecommendations = buildRecommendations;

  
function updateProgressFromSession(session) {
  const s = session || appState.currentSession; if (!s || s.results?.progressCommitted) return;
  inferAutoErrorTypes();
  const p = normalizeProgress(appState.progress || getEmptyProgress());
  p.testCount = Number(p.testCount || 0) + 1;
  p.totals.finishedSessions += 1;
  if (s.mode === "repair") p.totals.repairSessions += 1;
  const now = new Date().toISOString();
  const errorSummary = summarizeErrorTypes(s);
  const sessionTopicMaps = { disciplines: {}, subtopics: {}, topicAreas: {} };

  s.questionStates.forEach((qs, idx) => {
    const q = s.activeTest.questions[idx];
    const metadata = q.metadata || {};
    const answered = qs.selectedAnswer !== null;
    const correct = answered && qs.selectedAnswer === q.correct;
    const highConfidenceWrong = answered && !correct && qs.confidence === "high";
    const errorType = normalizeErrorCode(qs.manualErrorType || qs.autoErrorType);
    const payload = { answered, correct, highConfidenceWrong, at: now, timeSpentMs: qs.timeSpentMs || 0, errorType };
    const progressKey = getQuestionProgressKey(q, s);

    p.totals.seen += 1;
    if (answered) p.totals.answered += 1;
    else p.totals.unanswered += 1;
    if (correct) p.totals.correct += 1;
    else if (answered) p.totals.wrong += 1;
    if (highConfidenceWrong) p.totals.highConfidenceWrong += 1;

    const disciplineKey = metadata.discipline || "obecnĂˇ disciplĂ­na";
    const subtopicKey = metadata.subtopic || "obecnĂ© tĂ©ma";
    const topicAreaKey = metadata.topicArea || deriveDashboardTopicArea(metadata);
    bumpRegistry(p.disciplines, disciplineKey, payload);
    bumpRegistry(p.subtopics, subtopicKey, payload);
    bumpRegistry(p.topicAreas, topicAreaKey, payload);
    bumpSessionRegistry(sessionTopicMaps.disciplines, disciplineKey, payload);
    bumpSessionRegistry(sessionTopicMaps.subtopics, subtopicKey, payload);
    bumpSessionRegistry(sessionTopicMaps.topicAreas, topicAreaKey, payload);

    (metadata.formulationFlags || []).forEach(flag => bumpRegistry(p.formulations, flag, payload));
    (metadata.signalPattern || []).forEach(signal => bumpRegistry(p.signalPatterns, signal, payload));
    if (metadata.trapPattern) bumpRegistry(p.trapPatterns, metadata.trapPattern, payload);
    if (metadata.distractorType) bumpRegistry(p.distractorTypes, metadata.distractorType, payload);
    if (metadata.questionType) bumpRegistry(p.questionTypes, metadata.questionType, payload);
    if (metadata.institutionPair) bumpRegistry(p.institutionConfusions, metadata.institutionPair, payload);
    if (errorType) bumpRegistry(p.errorTypes, errorType, payload);

    const confidenceKey = metadata.subtopic || metadata.discipline || "obecnĂ© tĂ©ma";
    if (!p.timingByTopic[confidenceKey]) p.timingByTopic[confidenceKey] = { seen:0, totalMs:0, slowCount:0 };
    p.timingByTopic[confidenceKey].seen += 1;
    p.timingByTopic[confidenceKey].totalMs += (qs.timeSpentMs || 0);
    if ((qs.timeSpentMs || 0) >= SLOW_THRESHOLD_MS) p.timingByTopic[confidenceKey].slowCount += 1;

    if (highConfidenceWrong) {
      p.highConfidenceWrong[progressKey] = {
        progressKey,
        globalId: q.globalId,
        difficultyMode: normalizeDifficultyForProgress(s.difficultyMode),
        count: (p.highConfidenceWrong[progressKey]?.count || 0) + 1,
        subtopic: subtopicKey,
        discipline: disciplineKey,
        lastSeenAt: now
      };
    }

    const shouldQueue = qs.addedToRevision || highConfidenceWrong || (!correct && (metadata.revisionPriority === "high" || metadata.institutionPair || (metadata.formulationFlags || []).length));
    if (shouldQueue) {
      p.revisionQueue[progressKey] = {
        progressKey,
        globalId: q.globalId,
        difficultyMode: normalizeDifficultyForProgress(s.difficultyMode),
        reason: Array.from(new Set([
          ...(p.revisionQueue[progressKey]?.reason || []),
          ...(qs.addedToRevision ? ["manual"] : []),
          ...(highConfidenceWrong ? ["high-confidence-wrong"] : []),
          ...(errorType ? [errorType] : []),
          ...(metadata.institutionPair ? [metadata.institutionPair] : [])
        ].filter(Boolean))),
        priority: qs.revisionPriority || metadata.revisionPriority || "medium",
        addedAt: p.revisionQueue[progressKey]?.addedAt || now,
        timesReturned: (p.revisionQueue[progressKey]?.timesReturned || 0)
      };
    }
  });

  applySessionStatsToRegistry(p.disciplines, sessionTopicMaps.disciplines, s.sessionId, now);
  applySessionStatsToRegistry(p.subtopics, sessionTopicMaps.subtopics, s.sessionId, now);
  applySessionStatsToRegistry(p.topicAreas, sessionTopicMaps.topicAreas, s.sessionId, now);

  const score = calculateScore();
  const sessionSummary = {
    sessionId: s.sessionId,
    date: s.updatedAt || now,
    mode: s.mode,
    difficultyMode: normalizeDifficultyForProgress(s.difficultyMode),
    percentage: score.percentage,
    correct: score.correct,
    total: score.total,
    dominantErrorType: errorSummary[0]?.type || "",
    dominantContentWeakness: errorSummary.find(item => ["concept-confusion","terminology-confusion","institution-confusion","knowledge-gap"].includes(item.type))?.type || "",
    dominantProcessWeakness: errorSummary.find(item => ["missed-negation","impulsive-decision","overthinking","time-pressure","attention-slip","no-answer","misread-question"].includes(item.type))?.type || ""
  };
  p.trends.recentSessions = [sessionSummary, ...(p.trends.recentSessions || []).filter(item => item?.sessionId !== s.sessionId)].slice(0, 12);

  appState.progress = p;
  s.results.progressCommitted = true;
  s.results.progressCommittedAt = now;
  saveProgress();
  saveCurrentSession();
}

  window.updateProgressFromSession = updateProgressFromSession;

  
function questionMatchesFilters(question, qs, filterConfig) {
  const config = typeof filterConfig === "string" ? { type: filterConfig } : (filterConfig || {});
  const metadata = question.metadata || {};
  const isWrong = qs.selectedAnswer !== null && qs.selectedAnswer !== question.correct;
  const isUnanswered = qs.selectedAnswer === null;
  const isGuess = qs.confidence === "guess";
  const isSlow = (qs.timeSpentMs || 0) >= SLOW_THRESHOLD_MS;
  const isChanged = (qs.answerChanges || 0) > 0;
  const isFlagged = !!qs.flagged || !!qs.revisitLater;
  const isHighConfidenceWrong = isWrong && qs.confidence === "high";
  const errorType = normalizeErrorCode(qs.manualErrorType || qs.autoErrorType);
  const progressKey = getQuestionProgressKey(question, appState.currentSession);
  switch (config.type || "errors") {
    case "errors": return isWrong || isUnanswered;
    case "unanswered": return isUnanswered;
    case "guesses": return isGuess;
    case "slow": return isSlow;
    case "changed": return isChanged;
    case "flagged": return isFlagged;
    case "high-confidence-wrong": return isHighConfidenceWrong;
    case "errors-guesses": return isWrong || isUnanswered || isGuess;
    case "errors-guesses-slow": return isWrong || isUnanswered || isGuess || isSlow;
    case "revisionQueue": return !!(appState.progress?.revisionQueue?.[progressKey]);
    case "discipline": return metadata.discipline === config.discipline;
    case "subtopic": return metadata.subtopic === config.subtopic;
    case "errorType": {
      const wanted = normalizeErrorCode(config.errorType);
      return errorType === wanted || (metadata.likelyErrorTypes || []).some(type => normalizeErrorCode(type) === wanted);
    }
    case "formulation": return (metadata.formulationFlags || []).includes(config.formulation);
    case "signalPattern": return (metadata.signalPattern || []).includes(config.signalPattern);
    case "trapPattern": return metadata.trapPattern === config.trapPattern;
    case "distractorType": return metadata.distractorType === config.distractorType;
    case "questionType": return metadata.questionType === config.questionType;
    case "institutionPair": return metadata.institutionPair === config.institutionPair;
    case "all": return isWrong || isUnanswered || isGuess || isSlow || isChanged || isFlagged || isHighConfidenceWrong;
    default: return isWrong || isUnanswered;
  }
}


  function buildRepairCandidateIndexes(filterConfig) {
    const s = appState.currentSession; if (!s) return [];
    const out = [];
    s.questionStates.forEach((qs, idx) => {
      if (questionMatchesFilters(s.activeTest.questions[idx], qs, filterConfig)) out.push(idx);
    });
    return out;
  }
  window.buildRepairCandidateIndexes = buildRepairCandidateIndexes;

  function startRepairModeFromResults(filterConfig) {
    const s = appState.currentSession; if (!s) return;
    const candidates = buildRepairCandidateIndexes(filterConfig || "errors");
    if (!candidates.length) { alert("Pro tuto opravnou sadu teÄŹ nejsou ĹľĂˇdnĂ© otĂˇzky."); return; }
    const repairSession = buildRepairSessionFromResults(s, candidates);
    if (!repairSession) return;
    appState.currentSession = repairSession;
    reviewRendered = false;
    saveCurrentSession();
    setAppMode("test");
    renderQuestionGrid();
    updateMeta();
    beginQuestionView(0);
    renderQuestion();
    applyFocusMode();
    startTimer();
  }
  window.startRepairModeFromResults = startRepairModeFromResults;

  function startRepairModeByDiscipline(discipline) { startRepairModeFromResults({ type: "discipline", discipline }); }
  function startRepairModeBySubtopic(subtopic) { startRepairModeFromResults({ type: "subtopic", subtopic }); }
  function startRepairModeByErrorType(errorType) { startRepairModeFromResults({ type: "errorType", errorType }); }
  function startRepairModeByFormulation(formulation) { startRepairModeFromResults({ type: "formulation", formulation }); }
  function startRepairModeByInstitutionPair(institutionPair) { startRepairModeFromResults({ type: "institutionPair", institutionPair }); }
  function startRepairModeHighConfidenceWrong() { startRepairModeFromResults({ type: "high-confidence-wrong" }); }
  function startRepairModeSlowQuestions() { startRepairModeFromResults({ type: "slow" }); }
  function startRepairModeRevisionQueue() { startRepairModeFromResults({ type: "revisionQueue" }); }
  window.startRepairModeByDiscipline = startRepairModeByDiscipline;
  window.startRepairModeBySubtopic = startRepairModeBySubtopic;
  window.startRepairModeByErrorType = startRepairModeByErrorType;
  window.startRepairModeByFormulation = startRepairModeByFormulation;
  window.startRepairModeByInstitutionPair = startRepairModeByInstitutionPair;
  window.startRepairModeHighConfidenceWrong = startRepairModeHighConfidenceWrong;
  window.startRepairModeSlowQuestions = startRepairModeSlowQuestions;
  window.startRepairModeRevisionQueue = startRepairModeRevisionQueue;

  function setManualErrorType(questionIndex, errorType) {
    const s = appState.currentSession; if (!s) return;
    if (!s.questionStates[questionIndex]) return;
    s.questionStates[questionIndex].manualErrorType = errorType;
    saveCurrentSession();
  }
  function addQuestionToRevision(questionIndex) {
    const s = appState.currentSession; if (!s) return;
    const qs = s.questionStates[questionIndex];
    if (!qs) return;
    qs.addedToRevision = !qs.addedToRevision;
    qs.revisionPriority = qs.addedToRevision ? "high" : (qs.revisionPriority || "medium");
    saveCurrentSession();
  }
  function setUserReflection(questionIndex, text) {
    const s = appState.currentSession; if (!s) return;
    if (!s.questionStates[questionIndex]) return;
    s.questionStates[questionIndex].userReflection = String(text || "").trim();
    saveCurrentSession();
  }
  window.setManualErrorType = setManualErrorType;
  window.addQuestionToRevision = addQuestionToRevision;
  window.setUserReflection = setUserReflection;
})();

