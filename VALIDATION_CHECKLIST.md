# Validation Checklist

## Účel
Tento checklist slouží k průběžnému ověřování, že optimalizace nemění chování aplikace pro uživatele a nerozbíjí review, Tutor, analytics ani repair flow.

## A. Start a načtení aplikace
- [ ] Aplikace se načte bez runtime chyby.
- [ ] Úvodní obrazovka se vykreslí správně.
- [ ] Funguje přepínání hlavních tabů.
- [ ] Zobrazí se počet otázek napříč režimy.
- [ ] Konfigurační panel funguje.

## B. Režimy a baterie
- [ ] Lze přepnout `basic`.
- [ ] Lze přepnout `hard`.
- [ ] Seznam baterií se vykreslí v obou režimech.
- [ ] Detail baterie se otevře a zavře.
- [ ] Baterie 8 se vykreslí stejně jako ostatní.

## C. Start testu
- [ ] Test lze spustit z detailu baterie.
- [ ] Session se vytvoří korektně.
- [ ] Timer běží.
- [ ] Lze odpovídat na otázky.
- [ ] Funguje navigace mezi otázkami.
- [ ] Funguje confidence.
- [ ] Funguje flag a revisit.
- [ ] Funguje reveal režim tam, kde má.
- [ ] Funguje autosave.

## D. Vyhodnocení
- [ ] Test lze dokončit ručně.
- [ ] Test se dokončí korektně po vypršení času.
- [ ] Skóre se vypočte stejně jako před refaktorem.
- [ ] Výsledkový panel se vykreslí korektně.
- [ ] Zobrazí se performance summary.
- [ ] Zobrazí se attention dashboard.
- [ ] Zobrazí se recommendations.
- [ ] Zobrazí se repair panel.

## E. Detailní rozbor otázek
- [ ] `Zobrazit detailní rozbor otázek` funguje.
- [ ] Všechny otázky se v review vykreslí.
- [ ] Tab `Výsledek` funguje.
- [ ] Tab `Výklad učitele` funguje.
- [ ] Zobrazí se správná odpověď.
- [ ] Zobrazí se uživatelova odpověď.
- [ ] Zobrazí se pravděpodobný typ chyby.
- [ ] Ruční oprava typu chyby se uloží.
- [ ] Vlastní reflexe se uloží.
- [ ] Přidání do cíleného opakování funguje.
- [ ] Tutor texty zůstaly obsahově beze změny.

## F. Tutor vrstva
- [ ] `Signální slovo / obrat` se zobrazuje.
- [ ] `Proč je správně` se zobrazuje.
- [ ] `Lákavý distraktor` se zobrazuje.
- [ ] `Teoretické okénko` se zobrazuje.
- [ ] `Diagnostika trenažéru` se zobrazuje.
- [ ] `Související opravný filtr` se zobrazuje.
- [ ] Review funguje i pro baterii 8.

## G. Repair flow
- [ ] Lze spustit repair z výsledků.
- [ ] Lze spustit repair podle chyb.
- [ ] Lze spustit repair podle revision queue.
- [ ] Lze spustit repair podle analytics filtrů.
- [ ] Repair session se korektně vytvoří.
- [ ] Repair mode funguje i po refaktoru dat.

## H. Statistiky a progress
- [ ] Historie se zapisuje.
- [ ] Progress se zapisuje.
- [ ] Stats tab se vykreslí.
- [ ] Weakness panel se vykreslí.
- [ ] Doporučení se generují.
- [ ] Dříve uložený progress zůstává použitelný.

## I. Kompatibilita uložených dat
- [ ] Obnovení rozpracované relace funguje.
- [ ] Obnovení dokončené relace funguje.
- [ ] Po refaktoru se staré session nepoškodí.
- [ ] `localStorage` klíče zůstávají kompatibilní nebo jsou korektně migrované.

## J. Baterie 8
- [ ] Lze ji vybrat stejně jako ostatní baterie.
- [ ] Lze ji spustit stejně jako ostatní baterie.
- [ ] Má korektní metadata.
- [ ] Review a Tutor fungují.
- [ ] Analytics a repair flow fungují.
- [ ] Nevyžaduje speciální runtime větev.

## K. Dokončovací kontrola
- [ ] Žádná změna nezasáhla student-facing obsah.
- [ ] Žádná změna nezměnila UX flow.
- [ ] Žádná změna nezměnila scoring.
- [ ] Chování aplikace zůstalo stejné.
