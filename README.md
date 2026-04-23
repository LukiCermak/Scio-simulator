# SCIO simulator

## Prehled
Tento projekt je ciste klientska webova aplikace pro simulaci testu, detailni rozbor odpovedi, Tutor vyklad, dlouhodobe statistiky a navazujici opravne procvicovani.

## Hlavni struktura
- `index.html`: vstupni stranka aplikace
- `styles.css`: styly aplikace
- `analytics.js`: progress, diagnostika, doporuceni a repair logika
- `render.js`: render vysledku, review a dashboardu
- `app_core.js`: session, test flow, normalizace dat a hlavni orchestracni logika
- `bootstrap.js`: start aplikace a globalni klavesove ovladani review

## Data
- `data/basic`: runtime data pro zakladni rezim
- `data/hard`: runtime data pro pokrocily rezim
- `data_source`: plna kuratorska metadata mimo runtime vrstvu

Kazdy rezim ma:
- samostatne soubory otazek po bateriich
- samostatne runtime metadata po bateriich
- vlastni `index.js`, ktery sklada dataset do jednotneho runtime exportu

## Zasady aktualni architektury
- Runtime vrstva obsahuje jen pole potrebna pro UI, review, Tutor, analytics a repair flow.
- Student-facing obsah nebyl pri optimalizaci menen.
- Baterie 8 funguje stejne jako ostatni baterie a nema specialni runtime vetve.
- Velke puvodni monoliticke datove soubory byly odstraneny.

## Kompatibilita
- Aplikace zachovava kompatibilitu se stavajicimi `localStorage` daty.
- V kodu zustavaji jen minimalni legacy aliasy tam, kde jsou potreba pro bezpecny prechod.
- Nove nazvy souboru a projektova struktura uz nejsou verzovane.

## Dokumentace pro dalsi upravy
- `OPTIMIZATION_MASTER_PLAN.md`
- `METADATA_AUDIT.md`
- `DATASET_SCHEMA.md`
- `OPTIMIZATION_CHECKLIST.md`
- `VALIDATION_CHECKLIST.md`

## Doporuceny postup dalsich uprav
- Men baterie upravovat lokalne jen v odpovidajicich souborech v `data/` a `data_source/`.
- Technicke refaktory oddelovat od zmen Tutor obsahu a textu pro studenta.
- Pred vetsi zmenou projit `VALIDATION_CHECKLIST.md`.
