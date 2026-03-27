
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
  return `<div class="action-grid">${recommendations.map((item, idx) => `<div class="action-card"><h5>${escapeHtml(item.title)}</h5><p>${escapeHtml(item.message)}</p><small>${escapeHtml(item.reason || "")}</small><button class="btn btn-primary btn-sm" data-rec-index="${idx}" type="button">Spustit</button></div>`).join("")}</div>`;
}
  window.renderRecommendedTraining = renderRecommendedTraining;

  
function runRecommendation(item) {
  if (!item || !item.filters) return;
  const hasSessionQuestions = !!(appState.currentSession?.activeTest?.questions?.length);
  if (item.filters.institutionPair) return hasSessionQuestions ? startRepairModeByInstitutionPair(item.filters.institutionPair) : undefined;
  if (item.filters.subtopic) return hasSessionQuestions ? startRepairModeBySubtopic(item.filters.subtopic) : (typeof startTargetedPractice === "function" ? startTargetedPractice("subtopic", item.filters.subtopic) : undefined);
  if (item.filters.formulation) return hasSessionQuestions ? startRepairModeByFormulation(item.filters.formulation) : undefined;
  if (item.filters.errorType) return hasSessionQuestions ? startRepairModeByErrorType(item.filters.errorType) : (typeof startTargetedPractice === "function" ? startTargetedPractice("error-type", item.filters.errorType) : undefined);
  if (item.filters.highConfidenceWrong) return hasSessionQuestions ? startRepairModeHighConfidenceWrong() : undefined;
  if (item.filters.mode === "reading-training") {
    appState.settings.defaultMode = "reading-training";
    saveSettings();
    renderConfigPanel();
    return;
  }
}


  
function renderStartScreen() {
  const activeMap = typeof getActiveBatteryMap === "function" ? getActiveBatteryMap() : BATTERY_MAP;
  renderBatteryCards();
  renderBatteryDetail(appState.selectedBatteryId ? activeMap[appState.selectedBatteryId] : null);
  if (typeof updateSelectionState === "function") updateSelectionState();
  renderRestorePanel();
  renderWeaknessPanel();
  renderHistoryPanel();
}

  window.renderStartScreen = renderStartScreen;

  function renderWeaknessMap() {
  const summary = buildWeaknessSummary();
  const masteredTopics = summary.masteredSubtopics || [];
  const strongestDisciplines = summary.masteredDisciplines?.length ? summary.masteredDisciplines : (summary.strongestDisciplines || []);
  const totalTests = summary.finishedSessions || 0;
  const coverageLabel = `${summary.testedSubtopicCount || 0}/${summary.totalKnownSubtopics || 0}`;
  const diagnosticErrors = (summary.topErrors || []).filter(item => (item.count || 0) > 0);

  return `
    <div class="summary-stack">
      <div class="summary-section">
        <h5>Doporučený postup</h5>
        <div class="start-mini-grid">
          <div class="start-mini-card"><div class="label">Dokončené testy</div><div class="value">${totalTests}</div></div>
          <div class="start-mini-card"><div class="label">Celková úspěšnost</div><div class="value">${summary.overallRate || 0}%</div></div>
          <div class="start-mini-card"><div class="label">Vyhodnocená témata</div><div class="value">${coverageLabel}</div></div>
          <div class="start-mini-card"><div class="label">Jisté chybné odpovědi</div><div class="value">${summary.highConfidenceWrongCount || 0}</div></div>
        </div>
        <div class="dash-detail" style="margin-top:12px;">
          ${escapeHtml(totalTests ? `Máš za sebou ${totalTests} dokončen${totalTests === 1 ? "ý test" : totalTests >= 2 && totalTests <= 4 ? "é testy" : "ých testů"}.` : "Po prvním dokončeném testu se tady objeví dlouhodobější doporučení.")} ${escapeHtml(masteredTopics.length ? `U témat s 95 % a vyšší úspěšností už se začínají rýsovat stabilní silné stránky.` : `Silné stránky se zobrazí ve chvíli, kdy se některé téma dostane aspoň na 95 % při opakovaném ověření.`)}
        </div>
        <div style="margin-top:12px;">
          ${renderRecommendedTraining()}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:14px;">
        <div class="summary-section">
          <h5>Nejslabší témata a chyby</h5>
          <div class="dash-detail" style="margin:0 0 12px;">
            ${summary.weakestSubtopics.length ? `Sem spadají oblasti, které mají zatím nejnižší dlouhodobou úspěšnost.` : `Zatím se neoddělilo slabé téma s dostatkem dat.`}
          </div>
          <div style="display:grid; gap:12px;">
            <div>
              <strong style="display:block; margin-bottom:8px; color:#183b54;">Nejslabší témata</strong>
              <ul class="summary-list">${summary.weakestSubtopics.length ? summary.weakestSubtopics.map(item => `<li><strong>${escapeHtml(item.subtopic)}</strong> · ${item.rate}% · ${item.correct}/${item.seen}</li>`).join("") : `<li>Zatím není dost dat.</li>`}</ul>
            </div>
            <div>
              <strong style="display:block; margin-bottom:8px; color:#183b54;">Nejčastější diagnostikované chyby</strong>
              <ul class="summary-list">${diagnosticErrors.length ? diagnosticErrors.map(item => `<li><strong>${escapeHtml(item.label)}</strong> · ${item.count}×</li>`).join("") : `<li>V dokončených testech se zatím neukázal opakovaný typ chyby.</li>`}</ul>
            </div>
          </div>
        </div>

        <div class="summary-section">
          <h5>Zvládnutá témata a silné stránky</h5>
          <div class="dash-detail" style="margin:0 0 12px;">
            ${masteredTopics.length ? `Tady jsou témata, která držíš na 95 % a výš.` : `Jakmile se některé téma dlouhodobě ustálí na 95 % a víc, objeví se zde.`}
          </div>
          <div style="display:grid; gap:12px;">
            <div>
              <strong style="display:block; margin-bottom:8px; color:#183b54;">Zvládnutá témata</strong>
              <ul class="summary-list">${masteredTopics.length ? masteredTopics.map(item => `<li><strong>${escapeHtml(item.subtopic)}</strong> · ${item.rate}% · ${item.correct}/${item.seen}</li>`).join("") : `<li>Zatím se ještě neukázalo stabilně zvládnuté téma.</li>`}</ul>
            </div>
            <div>
              <strong style="display:block; margin-bottom:8px; color:#183b54;">Silné disciplíny</strong>
              <ul class="summary-list">${strongestDisciplines.length ? strongestDisciplines.map(item => `<li><strong>${escapeHtml(item.discipline)}</strong> · ${item.rate}% · ${item.correct}/${item.seen}</li>`).join("") : `<li>Zatím není dost dat pro stabilně silnou disciplínu.</li>`}</ul>
            </div>
            <div>
              <strong style="display:block; margin-bottom:8px; color:#183b54;">Co ještě chybí do mapy</strong>
              <ul class="summary-list">${summary.undertrainedSubtopics.length ? summary.undertrainedSubtopics.slice(0, 4).map(item => `<li><strong>${escapeHtml(item.subtopic)}</strong> · ${item.seen === 0 ? "zatím netestováno" : `${item.seen}×`}</li>`).join("") : `<li>Pokrytí témat je zatím dobré.</li>`}</ul>
            </div>
          </div>
        </div>
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
        <h4>Mapa silných a slabších stránek</h4>
        ${renderWeaknessMap()}
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
  const summary = buildWeaknessSummary();
  const weakDisciplines = (analytics.disciplineBreakdown || []).slice().sort((a, b) => a.rate - b.rate).slice(0, 4);
  const strongDisciplines = (analytics.disciplineBreakdown || []).slice().sort((a, b) => b.rate - a.rate).slice(0, 4);
  const weakSubtopics = (analytics.subtopicBreakdown || []).slice().sort((a, b) => a.rate - b.rate).slice(0, 5);
  const strongSubtopics = (analytics.subtopicBreakdown || []).slice().sort((a, b) => b.rate - a.rate).slice(0, 5);
  const errorList = (analytics.errorSummary || []).slice(0, 5);
  const formulationList = (analytics.formulationSummary || []).slice(0, 5);
  const institutionList = (analytics.institutionSummary || []).slice(0, 5);
  $("thematicWeaknesses").innerHTML = `
    <div class="dashboard">
      <h4>Mapa silných a slabších stránek</h4>
      <div class="summary-stack">
        <div class="summary-section"><h5>Nejslabší disciplíny v této relaci</h5><ul class="summary-list">${weakDisciplines.length ? weakDisciplines.map(item => `<li>${escapeHtml(item.discipline)} · ${item.rate}%</li>`).join("") : `<li>Bez výrazné slabiny.</li>`}</ul></div>
        <div class="summary-section"><h5>Nejslabší podtémata v této relaci</h5><ul class="summary-list">${weakSubtopics.length ? weakSubtopics.map(item => `<li>${escapeHtml(item.subtopic)} · ${item.rate}%</li>`).join("") : `<li>Bez výrazné slabiny.</li>`}</ul></div>
        <div class="summary-section"><h5>Silné disciplíny v této relaci</h5><ul class="summary-list">${strongDisciplines.length ? strongDisciplines.map(item => `<li>${escapeHtml(item.discipline)} · ${item.rate}%</li>`).join("") : `<li>Ještě není co vyhodnotit.</li>`}</ul></div>
        <div class="summary-section"><h5>Silná podtémata v této relaci</h5><ul class="summary-list">${strongSubtopics.length ? strongSubtopics.map(item => `<li>${escapeHtml(item.subtopic)} · ${item.rate}%</li>`).join("") : `<li>Ještě není co vyhodnotit.</li>`}</ul></div>
        <div class="summary-section"><h5>Dlouhodobě málo procvičeno</h5><ul class="summary-list">${summary.undertrainedSubtopics.length ? summary.undertrainedSubtopics.slice(0, 5).map(item => `<li>${escapeHtml(item.subtopic)} · ${item.seen === 0 ? "zatím netestováno" : `${item.seen}×`}</li>`).join("") : `<li>Pokrytí témat je zatím dobré.</li>`}</ul></div>
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
  const summary = buildWeaknessSummary();
  const weaknessItems = recommendations.filter(item => item.bucket === "weakness" || item.bucket === "process").slice(0, 3);
  const strengthItems = recommendations.filter(item => item.bucket === "strength").slice(0, 2);
  const coverageItems = recommendations.filter(item => item.bucket === "coverage").slice(0, 2);
  $("recommendationsPanel").innerHTML = `
    <div class="dashboard" style="background:#f4fafd; border-color:#d5e7f2;">
      <h4>Doporučení další práce</h4>
      <div class="summary-stack">
        <div class="summary-section"><h5>Co zpevnit hned teď</h5><ul class="summary-list">${weaknessItems.length ? weaknessItems.map(item => `<li><strong>${escapeHtml(item.title)}</strong> – ${escapeHtml(item.message)}</li>`).join("") : `<li>Dokonči další relaci a doporučení se zpřesní.</li>`}</ul></div>
        <div class="summary-section"><h5>Co už je silné</h5><ul class="summary-list">${strengthItems.length ? strengthItems.map(item => `<li><strong>${escapeHtml(item.title)}</strong> – ${escapeHtml(item.message)}</li>`).join("") : `<li>Zatím se ještě nevykreslila stabilní silná oblast.</li>`}</ul></div>
        <div class="summary-section"><h5>Co ještě nemá dost dat</h5><ul class="summary-list">${coverageItems.length ? coverageItems.map(item => `<li><strong>${escapeHtml(item.title)}</strong> – ${escapeHtml(item.message)}</li>`).join("") : `<li>Pokrytí témat je zatím dobré.</li>`}</ul></div>
        <div class="summary-section"><h5>Diagnostické shrnutí</h5><ul class="summary-list"><li><strong>Největší problém této relace:</strong> ${escapeHtml(getErrorLabel(diag.dominantErrorType) || "—")}</li><li><strong>Nejslabší dlouhodobé podtéma:</strong> ${escapeHtml(summary.weakestSubtopics[0]?.subtopic || diag.weakestSubtopic || diag.weakestDiscipline || "—")}</li><li><strong>Nejsilnější dlouhodobé podtéma:</strong> ${escapeHtml(summary.strongestSubtopics[0]?.subtopic || "—")}</li><li><strong>Trend:</strong> ${escapeHtml(trend.direction || "—")}</li></ul></div>
        <div class="summary-section"><h5>Jak číst cílené opakování</h5><div class="dash-detail">Do cíleného opakování patří hlavně otázky s falešnou jistotou, opakovanou záměnou institucí, kritickou formulací a ručním označením. Silná témata se vyplatí jen průběžně potvrzovat, ne přetěžovat.</div></div>
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

function getReviewOptionDescriptor(question, index) {
  if (!question || !Array.isArray(question.options) || index == null || index < 0 || index >= question.options.length) return "—";
  return `${LETTERS[index]}) ${question.options[index]}`;
}

function normalizeTutorText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function pickTutorSignal(question, metadata) {
  const patterns = Array.isArray(metadata?.signalPattern) ? metadata.signalPattern.map(item => normalizeTutorText(item)).filter(Boolean) : [];
  const direct = normalizeTutorText(metadata?.signalHint || "");
  if (patterns.length) return patterns[0];
  if (direct) {
    const parts = direct.split(/[:;,]/).map(part => normalizeTutorText(part)).filter(Boolean);
    return parts.find(part => part.length <= 48) || parts[0] || direct;
  }
  const source = String(question?.text || "");
  const match = source.match(/\b(není|nesprávně|neplatí|nejlépe|nejpřesněji|nejvhodnější|první krok|typicky|nejčastěji)\b/i);
  return match ? match[0] : "klíčové rozlišení";
}

function buildTutorCorrectReason(question, metadata) {
  const correctLabel = getReviewOptionDescriptor(question, question?.correct);
  const discrimination = normalizeTutorText(metadata?.requiredDiscrimination || metadata?.questionCore || "");
  const theory = normalizeTutorText(metadata?.microLesson || metadata?.explanationCorrect || "");
  const theoryTail = theory
    .replace(/^Správně je [A-D], protože\s*/i, "")
    .replace(/^Správná možnost\s*/i, "")
    .replace(/^tato možnost\s*/i, "Tato možnost ");
  const pieces = [
    `Správně je ${correctLabel}, protože jako jediná možnost drží jádro zadání.`,
    discrimination ? `V této otázce bylo potřeba rozlišit ${discrimination}.` : "",
    theoryTail || ""
  ].filter(Boolean);
  return pieces.join(" ");
}

function buildTutorDistractorText(question, state, metadata, isCorrect, isUnanswered) {
  const selectedLabel = state?.selectedAnswer == null ? "" : getReviewOptionDescriptor(question, state.selectedAnswer);
  const baseTrap = normalizeTutorText(metadata?.explanationDistractor || metadata?.commonMisconception || "");
  const discrimination = normalizeTutorText(metadata?.requiredDiscrimination || metadata?.questionCore || "");
  if (isUnanswered) {
    return [
      "Otázka zůstala bez odpovědi.",
      baseTrap ? `Nejvíc by zde mátla tato past: ${baseTrap}` : "",
      discrimination ? `Při návratu se soustřeď hlavně na rozdíl: ${discrimination}.` : ""
    ].filter(Boolean).join(" ");
  }
  if (isCorrect) {
    return [
      "Tentokrát jsi distraktoru odolal.",
      baseTrap ? `Lákavý byl hlavně proto, že ${baseTrap}` : "",
      discrimination ? `Rozhodující bylo udržet rozdíl: ${discrimination}.` : ""
    ].filter(Boolean).join(" ");
  }
  return [
    selectedLabel ? `Zvolená možnost ${selectedLabel} byla lákavá, protože patří do stejné tematické oblasti.` : "",
    baseTrap || "",
    discrimination ? `Nesedí ale v rozhodujícím rozlišení: ${discrimination}.` : ""
  ].filter(Boolean).join(" ");
}

function buildTutorTheoryText(metadata) {
  const lesson = normalizeTutorText(metadata?.microLesson || "");
  const recall = normalizeTutorText(metadata?.recommendedRecallPrompt || "");
  const discipline = normalizeTutorText(metadata?.discipline || "");
  const subtopic = normalizeTutorText(metadata?.subtopic || "");
  const parts = [
    lesson || "Vrať se k jádru otázky a teprve potom porovnávej možnosti.",
    recall ? `Pro upevnění: ${recall}` : "",
    (discipline || subtopic) ? `Okruh: ${[discipline, subtopic].filter(Boolean).join(" · ")}.` : ""
  ].filter(Boolean);
  return parts.join(" ");
}

function buildTutorDiagnostics(question, state, metadata, isCorrect, isUnanswered) {
  const errorLabel = getErrorLabel(state?.manualErrorType || state?.autoErrorType) || "";
  const confidenceText = state?.confidence === "high" ? "Odpověď byla jistá." : state?.confidence === "medium" ? "Odpověď byla spíše jistá." : state?.confidence === "guess" ? "Šlo spíš o tip." : "Jistota nebyla vyplněna.";
  const tempoText = (state?.timeSpentMs || 0) >= 60000 ? "Rozhodování bylo pomalejší." : (state?.timeSpentMs || 0) > 0 ? "Tempo bylo v normě." : "";
  const changeText = (state?.answerChanges || 0) >= 2 ? "Odpověď se vícekrát měnila." : ((state?.answerChanges || 0) === 1 ? "Odpověď byla jednou změněna." : "");
  if (isUnanswered) {
    return [confidenceText, tempoText, "Trenažér to bere jako neuzavřené rozhodnutí.", errorLabel ? `Nejbližší štítek chyby: ${errorLabel}.` : ""].filter(Boolean).join(" ");
  }
  if (isCorrect) {
    return [confidenceText, tempoText, changeText, "V této položce je výkon stabilní."].filter(Boolean).join(" ");
  }
  return [confidenceText, tempoText, changeText, errorLabel ? `Trenažér tuto chybu řadí jako: ${errorLabel}.` : "", normalizeTutorText(metadata?.whyWrongCategory || "")].filter(Boolean).join(" ");
}

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
  const { q, qs, qIndex, isCorrect, isUnanswered } = item;
  const m = q.metadata || {};
  return `
    <div class="review-content hidden" data-content="explanation">
      <div class="review-explainer-list">
        <div class="review-explainer-item"><strong>Signální slovo / obrat</strong>${escapeHtml(pickTutorSignal(q, m) || "—")}</div>
        <div class="review-explainer-item"><strong>Proč je správně</strong>${escapeHtml(buildTutorCorrectReason(q, m) || "—")}</div>
        <div class="review-explainer-item"><strong>Lákavý distraktor</strong>${escapeHtml(buildTutorDistractorText(q, qs, m, isCorrect, isUnanswered) || "—")}</div>
        <div class="review-explainer-item"><strong>Teoretické okénko</strong>${escapeHtml(buildTutorTheoryText(m) || "—")}</div>
        <div class="review-explainer-item"><strong>Diagnostika trenažéru</strong>${escapeHtml(buildTutorDiagnostics(q, qs, m, isCorrect, isUnanswered) || "—")}</div>
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
          <button class="review-tab" data-tab="explanation" type="button">Výklad učitele</button>
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
