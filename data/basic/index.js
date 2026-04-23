(function(){
  "use strict";
  const store = window.__SCIO_SPLIT_RUNTIME__ && window.__SCIO_SPLIT_RUNTIME__.basic;
  const batteries = Object.values((store && store.batteries) || {}).sort((a, b) => Number(a.id || 0) - Number(b.id || 0));
  const metadataItems = Object.values((store && store.metadata) || {}).flat().slice().sort((a, b) => {
    const batteryDiff = Number(a.batteryId || 0) - Number(b.batteryId || 0);
    if (batteryDiff !== 0) return batteryDiff;
    return Number(a.questionNumber || 0) - Number(b.questionNumber || 0);
  });
  window.SCIO_RAW_BATTERIES = batteries;
  window.SCIO_METADATA_BASIC = {
    schemaVersion: 1,
    datasetName: "split-runtime-basic",
    items: metadataItems
  };
  window.battery8Map = { schemaVersion: 1, items: [] };
})();
