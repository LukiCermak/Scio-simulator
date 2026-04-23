# Optimization Checklist

## Audit a ocista
- [x] Vypsat vsechny datove a metadata exporty v projektu.
- [x] Vypsat metadata pole pro oba rezimy.
- [x] Zmapovat runtime pouziti poli v hlavnich aplikaich souborech.
- [x] Oznacit pole potrebna pro Tutor, analytics a repair flow.
- [x] Oznacit kandidaty na odstraneni nebo presun mimo runtime.

## Sjednoceni baterie 8
- [x] Zmapovat puvodni specialni vetve pro B8.
- [x] Sjednotit metadata lookup B8 s ostatnimi bateriemi.
- [x] Odstranit specialni runtime cestu pro B8.
- [ ] Projit B8 v testu, vysledcich, review a repair flow v browseru.

## Rozdeleni souboru
- [x] Rozdelit otazky po rezimech a bateriich.
- [x] Rozdelit runtime metadata po rezimech a bateriich.
- [x] Vytvorit agregacni index pro `basic`.
- [x] Vytvorit agregacni index pro `hard`.

## Loader a runtime cisteni
- [x] Zavest genericke runtime exporty pro datasety.
- [x] Omezit primou zavislost na historickych globalnich exportech.
- [x] Zjednodusit metadata normalizaci.
- [x] Odstranit runtime vyjimky pro konkretni baterie.
- [x] Izolovat legacy aliasy jen na kompatibilni vrstvu.

## Stabilizace
- [ ] Projit browser smoke test cele aplikace.
- [ ] Zkontrolovat review vrstvu po realnem dojeti testu.
- [ ] Overit kompatibilitu stavajicich ulozenych dat.
- [ ] Udrzet stejne student-facing chovani.
