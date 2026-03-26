(function(){
  "use strict";
  let booted = false;

  function getReviewTabPair(item) {
    if (!item) return null;
    const tabs = Array.from(item.querySelectorAll(".review-tab")).map(btn => btn.dataset.tab).filter(Boolean);
    if (tabs.includes("qa") && tabs.includes("tutor")) return { primary: "qa", secondary: "tutor" };
    if (tabs.includes("result") && tabs.includes("explanation")) return { primary: "result", secondary: "explanation" };
    return tabs.length >= 2 ? { primary: tabs[0], secondary: tabs[1] } : null;
  }

  function toggleReviewTabForAll() {
    const wrap = $("reviewWrap");
    if (!wrap || wrap.classList.contains("hidden")) return false;
    const firstItem = wrap.querySelector(".review-item");
    const pair = getReviewTabPair(firstItem);
    if (!pair) return false;

    const currentSaved = appState?.currentSession?.ui?.reviewTab;
    const current = currentSaved === pair.secondary ? pair.secondary : pair.primary;
    const target = current === pair.primary ? pair.secondary : pair.primary;

    wrap.querySelectorAll(".review-item").forEach(item => {
      item.querySelectorAll(".review-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === target));
      item.querySelectorAll(".review-content").forEach(content => content.classList.toggle("hidden", content.dataset.content !== target));
    });

    if (appState?.currentSession?.ui) appState.currentSession.ui.reviewTab = target;
    if (typeof saveCurrentSession === "function") saveCurrentSession();
    return true;
  }

  window.addEventListener("keydown", function(e){
    const active = document.activeElement;
    if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT" || active.tagName === "SELECT")) return;
    if (e.key.toUpperCase() === "T" && appState?.currentSession?.results?.finished && !$("reviewWrap")?.classList.contains("hidden")) {
      if (toggleReviewTabForAll()) e.preventDefault();
    }
  });

  function bootApp() {
    if (booted || typeof window.initSCIOV4 !== "function") return;
    booted = true;
    window.initSCIOV4();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootApp, { once: true });
  } else {
    bootApp();
  }
})();
