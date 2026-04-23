# Optimalization Master Plan

## Cile
- zmensit a procistit data a metadata
- odstranit nepouzivana pole
- sjednotit baterii 8 s ostatnimi bateriemi
- rozdelit data po rezimech a bateriich do mensich souboru
- zachovat stejne chovani aplikace pro uzivatele

## Omezeni
- nemenit otazky ani Tutor obsah
- nemenit UX flow bez dalsiho souhlasu
- zachovat kompatibilitu s existujicimi `localStorage` daty
- nepresouvat do runtime pole, ktera slouzi jen internimu obsahu a kuraci

## Poradi realizace
1. audit a ocista
2. sjednoceni baterie 8
3. rozdeleni souboru
4. zavedeni jednotne loader vrstvy
5. cisteni runtime normalizace
6. validace po kazde fazi

## Cileny technicky stav
- runtime metadata obsahuji jen skutecne potrebna pole
- kazdy rezim ma vlastni slozku
- kazda baterie ma vlastni soubor otazek
- kazda baterie ma vlastni soubor runtime metadat
- baterie 8 nema specialni runtime vetev
- hlavni projektove soubory nejsou verzovane v nazvech

## Rizika
- rozbiti review nebo Tutor vrstvy pri mazani metadat
- ticha regrese po presunech datovych souboru
- ztrata kompatibility ulozenych session nebo progress dat

## Ridici pravidlo
Kazda dalsi zmena se musi opirat o:
- `METADATA_AUDIT.md`
- `OPTIMIZATION_CHECKLIST.md`
- `VALIDATION_CHECKLIST.md`
