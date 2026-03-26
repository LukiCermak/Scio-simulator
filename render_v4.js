
(function(){
  "use strict";

  function escapeAttr(value) {
    return escapeHtml(String(value == null ? "" : value)).replace(/"/g, "&quot;");
  }

  function renderTrendPanel() {
    const trend = buildTrendSummary();
    if (!trend.series.length) return `<div class="inline-muted">Trend se ukáže po dokončení více relací.</div>`;
    return `<div class="summary-section"><h5>Trend posledních 5 relací</h5><div class="dash-grid tight">${trend.series.map(item => `<div class="dash-card"><div class="dash-value">${item.percentage}%</div><div class="dash-label">${escapeHtml(item.mode === "repair" ? "Opravná sada" : item.mode === "reading-training" ? "Trénink čtení zadání" : "Simulace")}</div><small>${escapeHtml(formatDate(item.date))}</small></div>`).join("")}</div><div class="dash-detail"><strong>Směr:</strong> ${escapeHtml(trend.direction)}</div></div>`;
  }
  window.renderTrendPanel = renderTrendPanel;

  function renderRecommendedTraining() {
    const recommendations = buildRecommendations();
    if (!recommendations.length) return `<div class="inline-muted">Doporučení se objeví po prvních výsledcích.</div>`;
    return `<div class="action-grid">${recommendations.map((item, idx) => `<div class="action-card"><h5>${escapeHtml(item.title)}</h5><p>${escapeHtml(item.message)}</p><button class="btn btn-primary btn-sm" data-rec-index="${idx}" type="button">Spustit</button></div>`).join("")}</div>`;
  }
  window.renderRecommendedTraining = renderRecommendedTraining;

  function runRecommendation(item) {
    if (!item || !item.filters) return;
    if (item.filters.institutionPair) return startRepairModeByInstitutionPair(item.filters.institutionPair);
    if (item.filters.subtopic) return startRepairModeBySubtopic(item.filters.subtopic);
    if (item.filters.formulation) return startRepairModeByFormulation(item.filters.formulation);
    if (item.filters.errorType) return startRepairModeByErrorType(item.filters.errorType);
    if (item.filters.highConfidenceWrong) return startRepairModeHighConfidenceWrong();
    if (item.filters.mode === "reading-training") {
      appState.settings.defaultMode = "reading-training";
      saveSettings();
      renderConfigPanel();
      return;
    }
  }

  function renderStartScreen() {
    renderBatteryCards();
    renderBatteryDetail(appState.selectedBatteryId ? BATTERY_MAP[appState.selectedBatteryId] : null);
    renderRestorePanel();
    renderWeaknessPanel();
    renderHistoryPanel();
  }
  window.renderStartScreen = renderStartScreen;

  function renderWeaknessMap() {
    const summary = buildWeaknessSummary();
    return `
      <div class="summary-stack">
        <div class="summary-section">
          <h5>Mapa slabých míst</h5>
          <div class="start-mini-grid">
            <div class="start-mini-card"><div class="label">Jisté chybné odpovědi</div><div class="value">${summary.highConfidenceWrongCount || 0}</div></div>
            <div class="start-mini-card"><div class="label">Nejčastější typ chyby</div><div class="value">${escapeHtml(summary.topErrors[0]?.label || "—")}</div></div>
            <div class="start-mini-card"><div class="label">Nejrizikovější formulace</div><div class="value">${escapeHtml(summary.topFormulations[0]?.flag || "—")}</div></div>
            <div class="start-mini-card"><div class="label">Nejčastější záměna</div><div class="value">${escapeHtml(summary.topInstitutionPairs[0]?.pair || "—")}</div></div>
          </div>
        </div>
        <div class="summary-section">
          <h5>3 nejslabší disciplíny</h5>
          <ul class="summary-list">${summary.weakestDisciplines.length ? summary.weakestDisciplines.map(item => `<li><strong>${escapeHtml(item.discipline)}</strong> · ${item.rate}%</li>`).join("") : `<li>Zatím není dost dat.</li>`}</ul>
        </div>
        <div class="summary-section">
          <h5>5 nejslabších podtémat</h5>
          <ul class="summary-list">${summary.weakestSubtopics.length ? summary.weakestSubtopics.map(item => `<li><strong>${escapeHtml(item.subtopic)}</strong> · ${item.rate}%</li>`).join("") : `<li>Zatím není dost dat.</li>`}</ul>
        </div>
        ${renderTrendPanel()}
      </div>`;
  }
  window.renderWeaknessMap = renderWeaknessMap;

  function renderWeaknessPanel() {
    const panel = $("weaknessPanel");
    const progress = appState.progress;
    if (!progress || !(progress.totals?.finishedSessions || progress.testCount)) {
      panel.classList.add("hidden");
      panel.innerHTML = "";
      return;
    }
    panel.classList.remove("hidden");
    panel.innerHTML = `
      <div class="dashboard" style="margin-top:20px;">
        <h4>Mapa slabých míst</h4>
        ${renderWeaknessMap()}
        <div class="summary-section" style="margin-top:14px;">
          <h5>Doporučený dnešní trénink</h5>
          ${renderRecommendedTraining()}
        </div>
        <div class="summary-section" style="margin-top:14px;">
          <h5>Rychlé akce</h5>
          <div class="action-grid">
            <div class="action-card"><h5>Spustit cílenou opravnou sadu</h5><p>Vrátí chybné a nezodpovězené otázky.</p><button class="btn btn-primary btn-sm" data-quick="errors" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit nejslabší disciplínu</h5><p>Vezme otázky z nejslabší dlouhodobé disciplíny.</p><button class="btn btn-primary btn-sm" data-quick="discipline" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit nejslabší podtéma</h5><p>Zaměří se na jedno problémové podtéma.</p><button class="btn btn-primary btn-sm" data-quick="subtopic" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit negace</h5><p>Vrátí otázky s formulací negace.</p><button class="btn btn-outline btn-sm" data-quick="negace" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit záměny institucí</h5><p>Zaměří se na institucionální rozlišení.</p><button class="btn btn-outline btn-sm" data-quick="institution" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit jisté chybné odpovědi</h5><p>Vrátí otázky s falešnou jistotou.</p><button class="btn btn-outline btn-sm" data-quick="high-confidence" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit pomalé otázky</h5><p>Vrátí otázky s dlouhým rozhodováním.</p><button class="btn btn-outline btn-sm" data-quick="slow" type="button">Spustit</button></div>
            <div class="action-card"><h5>Procvičit cílené opakování</h5><p>Vrátí otázky, které sis přidal do opakování.</p><button class="btn btn-outline btn-sm" data-quick="revision" type="button">Spustit</button></div>
          </div>
        </div>
      </div>`;
    const recs = buildRecommendations();
    panel.querySelectorAll("[data-rec-index]").forEach(btn => btn.addEventListener("click", () => runRecommendation(recs[Number(btn.dataset.recIndex)])));
    panel.querySelectorAll("[data-quick]").forEach(btn => btn.addEventListener("click", () => {
      const summary = buildWeaknessSummary();
      switch (btn.dataset.quick) {
        case "errors": return startRepairModeFromResults({ type: "errors" });
        case "discipline": return summary.weakestDisciplines[0] && startRepairModeByDiscipline(summary.weakestDisciplines[0].discipline);
        case "subtopic": return summary.weakestSubtopics[0] && startRepairModeBySubtopic(summary.weakestSubtopics[0].subtopic);
        case "negace": return startRepairModeByFormulation("negace");
        case "institution": return summary.topInstitutionPairs[0] && startRepairModeByInstitutionPair(summary.topInstitutionPairs[0].pair);
        case "high-confidence": return startRepairModeHighConfidenceWrong();
        case "slow": return startRepairModeSlowQuestions();
        case "revision": return startRepairModeRevisionQueue();
      }
    }));
  }
  window.renderWeaknessPanel = renderWeaknessPanel;

  function renderResults(timeExpired) {
    const s = appState.currentSession; if (!s) return;
    inferAutoErrorTypes();
    inferLearningNeeds();
    const score = calculateScore();
    const attention = calculateAttentionMetrics();
    const disciplineBreakdown = buildDisciplineBreakdown(s);
    const subtopicBreakdown = buildSubtopicBreakdown(s);
    const formulationSummary = buildFormulationRiskSummary(s);
    const institutionSummary = buildInstitutionRiskSummary(s);
    const errorSummary = (function(){ const map={}; s.questionStates.forEach(qs=>{ const key=qs.manualErrorType||qs.autoErrorType; if(key) map[key]=(map[key]||0)+1; }); return Object.entries(map).map(([type,count])=>({type,count,label:getErrorLabel(type)})).sort((a,b)=>b.count-a.count); })();
    s.results.score = score;
    s.results.analytics = { attention, disciplineBreakdown, subtopicBreakdown, formulationSummary, institutionSummary, errorSummary };
    s.results.diagnosticSummary = {
      dominantErrorType: errorSummary[0]?.type || "",
      dominantContentWeakness: errorSummary.find(item => ["concept-confusion","terminology-confusion","institution-confusion","knowledge-gap"].includes(item.type))?.type || "",
      dominantProcessWeakness: errorSummary.find(item => ["missed-negation","impulsive-decision","overthinking","time-pressure","attention-slip","no-answer","misread-question"].includes(item.type))?.type || "",
      weakestDiscipline: disciplineBreakdown[0]?.discipline || "",
      weakestSubtopic: subtopicBreakdown[0]?.subtopic || "",
      topFormulationRisk: formulationSummary[0]?.flag || "",
      topInstitutionConfusion: institutionSummary[0]?.pair || "",
      highConfidenceWrongCount: attention.highConfidenceWrongCount || 0,
      repairCandidateIndexes: buildRepairCandidateIndexes("all")
    };
    s.results.repairCandidateIndexes = buildRepairCandidateIndexes("all");
    updateProgressFromSession(s);
    s.results.recommendations = buildRecommendations();
    $("scoreMain").textContent = `${score.correct} / ${score.total} bodů (${score.percentage} %)`;
    $("scoreSub").textContent = `${timeExpired ? "Čas vypršel. " : ""}Zodpovězeno ${score.answered} z ${score.total}. Bez odpovědi ${score.unanswered}.`;
    $("resultsBatteryLabel").textContent = `Vyhodnocená baterie: ${s.activeTest.label} – ${s.activeTest.title}`;
    renderPerformanceSummary();
    renderAttentionDashboard();
    renderTopicWeaknessSummary();
    renderRecommendations();
    renderRepairPanel();
    saveCurrentSession();
  }
  window.renderResults = renderResults;

  function renderPerformanceSummary() {
    const s = appState.currentSession; if (!s) return;
    const score = s.results.score || calculateScore();
    const timeText = s.results.timeExpired ? "Vypršel čas" : `Do konce zbylo ${formatTime(Math.max(0, Math.floor((new Date(s.timing.endsAt).getTime() - new Date(s.timing.finishedAt || s.updatedAt).getTime()) / 1000)))}`;
    $("performanceSummary").innerHTML = `
      <div class="dashboard">
        <h4>Výkon</h4>
        <div class="dash-grid tight">
          <div class="dash-card"><div class="dash-value">${score.correct}</div><div class="dash-label">Body</div></div>
          <div class="dash-card"><div class="dash-value">${score.percentage}%</div><div class="dash-label">Úspěšnost</div></div>
          <div class="dash-card"><div class="dash-value">${score.answered}</div><div class="dash-label">Zodpovězeno</div></div>
          <div class="dash-card"><div class="dash-value">${score.unanswered}</div><div class="dash-label">Bez odpovědi</div></div>
        </div>
        <div class="dash-detail"><strong>Čas:</strong> ${escapeHtml(timeText)}</div>
      </div>`;
  }
  window.renderPerformanceSummary = renderPerformanceSummary;

  function renderAttentionDashboard() {
    const s = appState.currentSession; if (!s) return;
    const m = s.results.analytics?.attention || calculateAttentionMetrics();
    $("attentionDashboard").innerHTML = `
      <div class="dashboard">
        <h4>Pozornost a rozhodování</h4>
        <div class="dash-grid tight">
          <div class="dash-card"><div class="dash-value">${(m.avgTime / 1000).toFixed(1)} s</div><div class="dash-label">Průměrný čas</div></div>
          <div class="dash-card"><div class="dash-value">${(m.medTime / 1000).toFixed(1)} s</div><div class="dash-label">Medián času</div></div>
          <div class="dash-card"><div class="dash-value">${m.changes || 0}</div><div class="dash-label">Změněná odpověď</div></div>
          <div class="dash-card"><div class="dash-value">${m.revisits || 0}</div><div class="dash-label">Návraty k otázkám</div></div>
          <div class="dash-card"><div class="dash-value">${m.guesses || 0}</div><div class="dash-label">Tip</div></div>
          <div class="dash-card"><div class="dash-value">${m.highConf || 0}</div><div class="dash-label">Jistá odpověď</div></div>
          <div class="dash-card"><div class="dash-value">${m.highConfidenceWrongCount || 0}</div><div class="dash-label">Jistá chybná odpověď</div></div>
          <div class="dash-card"><div class="dash-value">${m.fastWrongIdxs?.length || 0}</div><div class="dash-label">Rychlé chybné odpovědi</div></div>
        </div>
        <div class="dash-detail"><strong>Nejpomalejší otázky:</strong> ${(m.slowIdxs || []).map(i => `#${i+1}`).join(", ") || "—"}<br><strong>Chyby po dlouhém čtení:</strong> ${m.longReadErrors || 0}</div>
      </div>`;
  }
  window.renderAttentionDashboard = renderAttentionDashboard;

  function renderTopicWeaknessSummary() {
    const s = appState.currentSession; if (!s) return;
    const analytics = s.results.analytics || {};
    const disciplineList = (analytics.disciplineBreakdown || []).slice(0, 5);
    const subtopicList = (analytics.subtopicBreakdown || []).slice(0, 5);
    const errorList = (analytics.errorSummary || []).slice(0, 5);
    const formulationList = (analytics.formulationSummary || []).slice(0, 5);
    const institutionList = (analytics.institutionSummary || []).slice(0, 5);
    $("thematicWeaknesses").innerHTML = `
      <div class="dashboard">
        <h4>Tematická diagnostika</h4>
        <div class="summary-stack">
          <div class="summary-section"><h5>Nejslabší disciplíny</h5><ul class="summary-list">${disciplineList.length ? disciplineList.map(item => `<li>${escapeHtml(item.discipline)} · ${item.rate}%</li>`).join("") : `<li>Žádná výrazná slabina.</li>`}</ul></div>
          <div class="summary-section"><h5>Nejslabší podtémata</h5><ul class="summary-list">${subtopicList.length ? subtopicList.map(item => `<li>${escapeHtml(item.subtopic)} · ${item.rate}%</li>`).join("") : `<li>Žádná výrazná slabina.</li>`}</ul></div>
          <div class="summary-section"><h5>Nejčastější typy chyb</h5><ul class="summary-list">${errorList.length ? errorList.map(item => `<li>${escapeHtml(item.label)} · ${item.count}×</li>`).join("") : `<li>Bez výrazného vzorce.</li>`}</ul></div>
          <div class="summary-section"><h5>Nejrizikovější formulace</h5><ul class="summary-list">${formulationList.length ? formulationList.map(item => `<li>${escapeHtml(item.flag)} · ${item.risk}%</li>`).join("") : `<li>Bez výrazného vzorce.</li>`}</ul></div>
          <div class="summary-section"><h5>Nejčastější institucionální záměny</h5><ul class="summary-list">${institutionList.length ? institutionList.map(item => `<li>${escapeHtml(item.pair)} · ${item.risk}%</li>`).join("") : `<li>Bez výrazného vzorce.</li>`}</ul></div>
        </div>
      </div>`;
  }
  window.renderTopicWeaknessSummary = renderTopicWeaknessSummary;
  window.renderThematicWeaknesses = renderTopicWeaknessSummary;

  function renderRecommendations() {
    const s = appState.currentSession; if (!s) return;
    const recommendations = s.results.recommendations || buildRecommendations();
    const diag = s.results.diagnosticSummary || {};
    const trend = buildTrendSummary();
    $("recommendationsPanel").innerHTML = `
      <div class="dashboard" style="background:#f4fafd; border-color:#d5e7f2;">
        <h4>Doporučení další práce</h4>
        <div class="summary-stack">
          <div class="summary-section"><h5>Co opakovat dnes</h5><ul class="summary-list">${recommendations.length ? recommendations.map(item => `<li><strong>${escapeHtml(item.title)}</strong> – ${escapeHtml(item.message)}</li>`).join("") : `<li>Dokonči další relaci a doporučení se zpřesní.</li>`}</ul></div>
          <div class="summary-section"><h5>Diagnostické shrnutí</h5><ul class="summary-list"><li><strong>Největší problém této relace:</strong> ${escapeHtml(getErrorLabel(diag.dominantErrorType) || "—")}</li><li><strong>Největší dlouhodobá slabina:</strong> ${escapeHtml(diag.weakestSubtopic || diag.weakestDiscipline || "—")}</li><li><strong>Trend:</strong> ${escapeHtml(trend.direction || "—")}</li></ul></div>
          <div class="summary-section"><h5>Otázky k cílenému opakování</h5><div class="dash-detail">Do cíleného opakování patří hlavně otázky s falešnou jistotou, opakovanou záměnou institucí, kritickou formulací a ručním označením.</div></div>
        </div>
      </div>`;
  }
  window.renderRecommendations = renderRecommendations;
  window.renderRecommendationsPanel = renderRecommendations;

  function renderRepairPanel() {
    const s = appState.currentSession; if (!s) return;
    const stats = [
      { key: { type: "errors" }, label: "Jen chyby" },
      { key: { type: "unanswered" }, label: "Bez odpovědi" },
      { key: { type: "guesses" }, label: "Tipy" },
      { key: { type: "slow" }, label: "Pomalé otázky" },
      { key: { type: "changed" }, label: "Změněná odpověď" },
      { key: { type: "flagged" }, label: "Označeno k návratu" },
      { key: { type: "high-confidence-wrong" }, label: "Falešná jistota" },
      { key: { type: "revisionQueue" }, label: "Cílené opakování" }
    ].map(item => ({ ...item, count: buildRepairCandidateIndexes(item.key).length }));
    const visible = stats.filter(item => item.count > 0);
    const panel = $("repairPanel");
    if (!visible.length) { panel.classList.add("hidden"); panel.innerHTML = ""; return; }
    panel.classList.remove("hidden");
    panel.innerHTML = `<div class="dashboard"><h4>Opravné sady v4</h4><div class="action-grid">${visible.map((item, idx) => `<div class="action-card"><h5>${escapeHtml(item.label)}</h5><p>${item.count} otázek</p><button class="btn btn-primary btn-sm" data-repair-index="${idx}" type="button">Spustit opravnou sadu</button></div>`).join("")}</div></div>`;
    panel.querySelectorAll("[data-repair-index]").forEach(btn => btn.addEventListener("click", () => startRepairModeFromResults(visible[Number(btn.dataset.repairIndex)].key)));
  }
  window.renderRepairPanel = renderRepairPanel;

  function renderReview() {
    const s = appState.currentSession; if (!s) return;
    const wrap = $("reviewWrap");
    wrap.innerHTML = "";
    s.activeTest.questions.forEach((_, idx) => wrap.appendChild(renderReviewItem(idx)));
  }
  window.renderReview = renderReview;

  function renderReviewResultTab(item) {
    const { q, qs, qIndex, isCorrect, isUnanswered } = item;
    return `
      <div class="review-content" data-content="result">
        <div style="margin-bottom:12px;">${highlightRiskKeywords(q.text)}</div>
        <div class="review-options">${q.options.map((opt, oi) => {
          let cls = "review-option";
          if (oi === q.correct) cls += " correct";
          if (qs.selectedAnswer === oi && oi !== q.correct) cls += " user-wrong";
          const badge = [
            oi === q.correct ? '<span class="pill correct">správná odpověď</span>' : '',
            qs.selectedAnswer === oi && oi !== q.correct ? '<span class="pill wrong">tvoje odpověď</span>' : '',
            qs.selectedAnswer === oi && oi === q.correct ? '<span class="pill correct">tvoje odpověď</span>' : ''
          ].join(' ');
          return `<div class="${cls}"><strong>${LETTERS[oi]})</strong> ${escapeHtml(opt)} ${badge}</div>`;
        }).join("")}</div>
        <div class="review-kv">
          <div class="review-meta-item"><strong>Tvá odpověď</strong>${isUnanswered ? "—" : LETTERS[qs.selectedAnswer]}</div>
          <div class="review-meta-item"><strong>Správná odpověď</strong>${LETTERS[q.correct]}</div>
          <div class="review-meta-item"><strong>Výsledek</strong>${isUnanswered ? "bez odpovědi" : isCorrect ? "správně" : "chybně"}</div>
          <div class="review-meta-item"><strong>Čas</strong>${(qs.timeSpentMs / 1000).toFixed(1)} s</div>
          <div class="review-meta-item"><strong>Jistota</strong>${qs.confidence === "high" ? "Jistá odpověď" : qs.confidence === "medium" ? "Spíše jistá odpověď" : qs.confidence === "guess" ? "Tip" : "—"}</div>
          <div class="review-meta-item"><strong>Počet návštěv</strong>${qs.viewCount || 0}</div>
          <div class="review-meta-item"><strong>Počet změn</strong>${qs.answerChanges || 0}</div>
          <div class="review-meta-item"><strong>Označeno k návratu</strong>${qs.flagged || qs.revisitLater ? "ano" : "ne"}</div>
          <div class="review-meta-item"><strong>Pravděpodobný typ chyby</strong>${escapeHtml(getErrorLabel(qs.manualErrorType || qs.autoErrorType) || "—")}</div>
        </div>
        <div class="review-actions-row">
          <label><strong>Ruční oprava typu chyby</strong><br><select class="error-type-select" data-qi="${qIndex}">${Object.keys({
            "no-answer":1,"missed-negation":1,"institution-confusion":1,"concept-confusion":1,"terminology-confusion":1,
            "misread-question":1,"impulsive-decision":1,"overthinking":1,"time-pressure":1,"false-confidence":1,
            "distractor-trap":1,"attention-slip":1,"knowledge-gap":1
          }).map(key => `<option value="${key}" ${(qs.manualErrorType || qs.autoErrorType) === key ? "selected" : ""}>${escapeHtml(getErrorLabel(key))}</option>`).join("")}</select></label>
        </div>
        <div class="review-actions-row">
          <label style="flex:1 1 100%;"><strong>Vlastní reflexe</strong><textarea class="review-reflection" data-qi="${qIndex}" placeholder="Co tě u této otázky zmátlo?">${escapeHtml(qs.userReflection || "")}</textarea></label>
        </div>
      </div>`;
  }
  window.renderReviewResultTab = renderReviewResultTab;

  function renderReviewExplanationTab(item) {
    const { q, qs, qIndex } = item;
    const m = q.metadata || {};
    return `
      <div class="review-content hidden" data-content="explanation">
        <div class="review-explainer-list">
          <div class="review-explainer-item"><strong>Jádro otázky</strong>${escapeHtml(m.questionCore || "—")}</div>
          <div class="review-explainer-item"><strong>Rozhodující signál</strong>${escapeHtml(m.signalHint || (m.signalPattern || []).join(", ") || "—")}</div>
          <div class="review-explainer-item"><strong>Správná logika</strong>${escapeHtml(m.explanationCorrect || "—")}</div>
          <div class="review-explainer-item"><strong>Proč byl distraktor lákavý</strong>${escapeHtml(m.explanationDistractor || m.commonMisconception || "—")}</div>
          <div class="review-explainer-item"><strong>Co chyba pravděpodobně znamená</strong>${escapeHtml(m.whyWrongCategory || getErrorLabel(qs.manualErrorType || qs.autoErrorType) || "—")}</div>
          <div class="review-explainer-item"><strong>Mikrolekce</strong>${escapeHtml(m.microLesson || "—")}</div>
          <div class="review-explainer-item"><strong>Aktivní vybavení</strong>${escapeHtml(m.recommendedRecallPrompt || "—")}</div>
          <div class="review-explainer-item"><strong>Disciplína a podtéma</strong>${escapeHtml(m.discipline || "—")} · ${escapeHtml(m.subtopic || "—")}</div>
          <div class="review-explainer-item"><strong>Související opravný filtr</strong>${escapeHtml((m.recommendedRepairFilters || []).join(", ") || m.subtopic || "—")}</div>
        </div>
        <div class="review-actions-row">
          <button class="btn btn-outline btn-sm add-revision-btn" data-qi="${qIndex}" type="button">${qs.addedToRevision ? "Odebrat z cíleného opakování" : "Přidat do cíleného opakování"}</button>
        </div>
      </div>`;
  }
  window.renderReviewExplanationTab = renderReviewExplanationTab;

  function renderReviewItem(qIndex) {
    const s = appState.currentSession; if (!s) return document.createElement("div");
    const q = s.activeTest.questions[qIndex];
    const qs = s.questionStates[qIndex];
    const isCorrect = qs.selectedAnswer === q.correct;
    const isUnanswered = qs.selectedAnswer === null;
    const statusText = isUnanswered ? "bez odpovědi" : isCorrect ? "správně" : "chybně";
    const statusPill = isUnanswered ? "neutral" : isCorrect ? "correct" : "wrong";
    const item = document.createElement("div");
    item.className = "review-item";
    const data = { q, qs, qIndex, isCorrect, isUnanswered };
    item.innerHTML = `
      <div class="review-head ${isUnanswered ? "unanswered" : isCorrect ? "correct" : "incorrect"}"><span>Otázka ${qIndex + 1}</span><span class="pill ${statusPill}">${statusText}</span></div>
      <div class="review-body">
        <div class="review-tabs">
          <button class="review-tab active" data-tab="result" type="button">Výsledek</button>
          <button class="review-tab" data-tab="explanation" type="button">Výklad</button>
        </div>
        ${renderReviewResultTab(data)}
        ${renderReviewExplanationTab(data)}
      </div>`;
    item.querySelectorAll(".review-tab").forEach(btn => btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      item.querySelectorAll(".review-tab").forEach(x => x.classList.toggle("active", x.dataset.tab === tab));
      item.querySelectorAll(".review-content").forEach(content => content.classList.toggle("hidden", content.dataset.content !== tab));
      if (appState.currentSession) {
        appState.currentSession.ui.reviewTab = tab;
        saveCurrentSession();
      }
    }));
    const select = item.querySelector(".error-type-select");
    if (select) select.addEventListener("change", function(){ setManualErrorType(qIndex, this.value); });
    const reflection = item.querySelector(".review-reflection");
    if (reflection) reflection.addEventListener("input", function(){ setUserReflection(qIndex, this.value); });
    const revisionBtn = item.querySelector(".add-revision-btn");
    if (revisionBtn) revisionBtn.addEventListener("click", function(){ addQuestionToRevision(qIndex); this.textContent = s.questionStates[qIndex].addedToRevision ? "Odebrat z cíleného opakování" : "Přidat do cíleného opakování"; });
    return item;
  }
  window.renderReviewItem = renderReviewItem;

})();
