# SCIO simulátor

## Přehled

Tento projekt je čistě klientská webová aplikace pro simulaci testu, detailní rozbor odpovědí, Tutor výklad, dlouhodobé statistiky a navazující opravné procvičování.

## Hlavní struktura

- `index.html`: vstupní stránka aplikace
- `styles.css`: styly aplikace
- `analytics.js`: progress, diagnostika, doporučení a repair logika
- `render.js`: render výsledků, review a dashboardu
- `app_core.js`: session, test flow, normalizace dat a hlavní orchestrační logika
- `bootstrap.js`: start aplikace a globální klávesové ovládání review

## Data

- `data/basic`: runtime data pro základní režim
- `data/hard`: runtime data pro pokročilý režim
- `data_source`: plná kurátorská metadata mimo runtime vrstvu

Každý režim má:

- samostatné soubory otázek po bateriích
- samostatná runtime metadata po bateriích
- vlastní `index.js`, který skládá dataset do jednotného runtime exportu

## Zásady aktuální architektury

- Runtime vrstva obsahuje jen pole potřebná pro UI, review, Tutor, analytics a repair flow.
- Student-facing obsah nebyl při optimalizaci měněn.
- 
- Velké původní monolitické datové soubory byly odstraněny.

## Kompatibilita

- Aplikace zachovává kompatibilitu se stávajícími `localStorage` daty.
- V kódu zůstávají jen minimální legacy aliasy tam, kde jsou potřeba pro bezpečný přechod.
- Nové názvy souborů a projektová struktura už nejsou verzované.

## Dokumentace pro další úpravy

- `OPTIMIZATION_MASTER_PLAN.md`
- `METADATA_AUDIT.md`
- `DATASET_SCHEMA.md`
- `OPTIMIZATION_CHECKLIST.md`
- `VALIDATION_CHECKLIST.md`

## Doporučený postup dalších úprav

- Menší úpravy baterií dělat lokálně jen v odpovídajících souborech v `data/` a `data_source/`.
- Technické refaktory oddělovat od změn Tutor obsahu a textů pro studenta.
- Před větší změnou projít `VALIDATION_CHECKLIST.md`.
