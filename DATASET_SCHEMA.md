# Dataset Schema

## Ucel
Tento dokument popisuje aktualni datovou strukturu po optimalizaci runtime vrstvy.

## Adresarova struktura

```text
data/
  manifest.json
  basic/
    index.js
    batteries/
      battery_01.js
      ...
      battery_08.js
    metadata/
      battery_01.metadata.js
      ...
      battery_08.metadata.js
  hard/
    index.js
    batteries/
      battery_01.js
      ...
      battery_09.js
    metadata/
      battery_01.metadata.js
      ...
      battery_09.metadata.js

data_source/
  basic/
    metadata/
      battery_01.source.json
      ...
      battery_08.source.json
  hard/
    metadata/
      battery_01.source.json
      ...
      battery_09.source.json
```

## Runtime battery soubor
Kazdy soubor v `data/<mode>/batteries/` registruje jednu baterii do `window.__SCIO_SPLIT_RUNTIME__`.

### Pole baterie
- `id`
- `label`
- `title`
- `subtitle`
- `purpose`
- `difficulty`
- `dominant`
- `breakdown`
- `tags`
- `durationMinutes`
- `questions`

### Pole otazky
- `number`
- `text`
- `options`
- `correct`
- `correctLetter`

## Runtime metadata soubor
Kazdy soubor v `data/<mode>/metadata/` zapisuje metadata jedne baterie do `window.__SCIO_SPLIT_RUNTIME__`.

### Pole runtime metadat
- `globalId`
- `batteryId`
- `questionNumber`
- `sourceCorrectLetter`
- `reviewedCorrectLetter`
- `effectiveCorrectLetter`
- `discipline`
- `subtopic`
- `conceptTags`
- `questionType`
- `distractorType`
- `trapPattern`
- `requiredDiscrimination`
- `signalPattern`
- `signalHint`
- `attentionRisk`
- `formulationFlags`
- `questionCore`
- `explanationCorrect`
- `explanationDistractor`
- `commonMisconception`
- `whyWrongCategory`
- `microLesson`
- `recommendedRecallPrompt`
- `likelyErrorTypes`
- `repairTags`
- `institutionPair`
- `recommendedRepairFilters`
- `revisionPriority`
- `distinctionAxis`

## Runtime index soubor
Kazdy `data/<mode>/index.js` sklada split registry do jednotnych runtime exportu:
- `window.SCIO_RAW_BATTERIES`
- `window.SCIO_RAW_BATTERIES_HARD`
- `window.SCIO_METADATA_BASIC`
- `window.SCIO_METADATA_HARD`

Kvuli bezpecnemu prechodu zustavaji nastavene i legacy aliasy pro stare globalni symboly, ale aplikace ma odted preferovat genericke exporty.

## Source metadata
Soubory v `data_source/<mode>/metadata/` obsahuji plnou kuratorskou verzi metadat.

Tato vrstva:
- neni nacitana do runtime
- zachovava interni auditni a autorske informace
- slouzi pro budouci lokalni editaci obsahu

## Baterie 8
- Baterie 8 je soucasti stejneho runtime exportu jako ostatni baterie.
- Runtime lookup funguje pres stejne `globalId` schema jako u ostatnich baterii.
- Specialni bridge logika pro B8 uz neni soucasti bezneho datoveho toku.

## Kompatibilita
- `localStorage` klice zustavaji zachovane kvuli ulozenym datum uzivatelu.
- Student-facing chovani se refaktorem nema menit.
