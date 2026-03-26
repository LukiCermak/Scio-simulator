
(function(){
  "use strict";
  window.addEventListener("keydown", function(e){
    const active = document.activeElement;
    if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT" || active.tagName === "SELECT")) return;
    if (e.key.toUpperCase() === "T" && appState?.currentSession?.results?.finished && !$("reviewWrap")?.classList.contains("hidden")) {
      const current = appState.currentSession.ui.reviewTab === "explanation" ? "result" : "explanation";
      appState.currentSession.ui.reviewTab = current;
      const firstItem = $("reviewWrap")?.querySelector(".review-item");
      if (firstItem) {
        firstItem.querySelectorAll(".review-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === current));
        firstItem.querySelectorAll(".review-content").forEach(content => content.classList.toggle("hidden", content.dataset.content !== current));
      }
      saveCurrentSession();
      e.preventDefault();
    }
  });
  if (window.initSCIOV4) window.initSCIOV4();
})();
