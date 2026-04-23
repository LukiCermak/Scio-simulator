# battery10_hard_metadata_source_notes

## Stav souboru
- status: pracovní osnova připravená pro autorování metadat Baterie 10
- batteryId: 10
- batteryLabel: Baterie 10
- batteryTitle: Finální nejtěžší vrstva – legislativa, osobnosti a historické kotvy
- batterySubtitle: Přesná diferenční vrstva na školskou legislativu, dějiny speciální pedagogiky, logopedie, surdopedie, tyflopedie a diagnostické autory.
- purpose: Připravit zdrojovou a autorovací mezivrstvu pro budoucí rozšíření hard metadat o Baterii 10 bez přímého zápisu do produkčního JS exportu.
- sourceDataset: Finální nejtěžší test 50 otázek
- sourceQuestionCount: 50
- scope: osnova + předvyplněné zdrojové a klasifikační kotvy + místa pro tutorovou vrstvu

## Jak s osnovou pracovat
1. U každé položky nejdřív ověř `primarySourceSuggested` a doplň přesný paragraf / přesnou osobnostní kotvu.
2. Potom doplň tutorovou vrstvu: `requiredDiscrimination`, `signalHint`, `explanationCorrect`, `explanationDistractor`, `commonMisconception`, `microLesson`.
3. Až po answer-auditu převáděj položku do `data_source/hard/metadata/battery_10.source.json`.

## Doporučená minimální pole pro finální metadata
- globalId
- batteryId
- batteryLabel
- batteryTitle
- batterySubtitle
- questionNumber
- questionText
- options
- correctOptionText
- discipline
- subtopic
- conceptFamily
- distinctionAxis
- questionType
- distractorType
- trapPattern
- institutionDomain
- timeSensitivity
- legislationRef
- historicalAnchor
- personalityAnchor
- requiredDiscrimination
- signalPattern
- signalHint
- explanationCorrect
- explanationDistractor
- commonMisconception
- whyWrongCategory
- microLesson
- recommendedRecallPrompt
- metadataSourceRef

## Společné TODO pro všechny položky
- doplnit `requiredDiscrimination`
- doplnit `signalPattern`
- doplnit `signalHint`
- doplnit `explanationCorrect`
- doplnit `explanationDistractor`
- doplnit `commonMisconception`
- doplnit `whyWrongCategory`
- doplnit `microLesson`
- doplnit `recommendedRecallPrompt`
- doplnit `repairTags`
- ověřit `trapPattern` proti finální formulaci distraktorů
- u legislativy vypsat přesný paragraf / odstavec / přílohu
- u osobností doplnit stručné zdůvodnění, proč je správná právě tato osoba a proč ne blízký distraktor

## Rychlá mapa tematických bloků
### A. Legislativně-procesní položky
- otázky: B10Q01, B10Q03, B10Q05, B10Q07, B10Q09, B10Q11, B10Q13, B10Q15, B10Q17, B10Q19, B10Q21, B10Q23, B10Q25, B10Q27, B10Q29, B10Q31, B10Q33, B10Q35, B10Q37, B10Q39, B10Q41, B10Q43, B10Q45, B10Q47, B10Q49
### B. České a slovenské osobnosti speciální pedagogiky
- otázky: B10Q02, B10Q04, B10Q06, B10Q14, B10Q16, B10Q18, B10Q48
### C. Psychopedie a rané dějiny diagnostiky
- otázky: B10Q08, B10Q10, B10Q12
### D. Dějiny logopedie a foniatrie
- otázky: B10Q20, B10Q22, B10Q24, B10Q26, B10Q28, B10Q30
### E. Surdopedie – historické směry a osobnosti
- otázky: B10Q32, B10Q34, B10Q36, B10Q38
### F. Tyflopedie a diagnostika zrakového vnímání
- otázky: B10Q40, B10Q42, B10Q44, B10Q46, B10Q50

---
## B10Q01

```yaml
globalId: B10Q01
questionNumber: 1
questionText: "Škola poskytuje podpůrná opatření druhého až pátého stupně"
options:
  A: "po obdržení doporučení ŠPZ a po udělení písemného informovaného souhlasu, a to bezodkladně"
  B: "po doporučení ŠPZ, i když informovaný souhlas bude doplněn až po zahájení podpory"
  C: "po ústním souhlasu zákonného zástupce a po následném záznamu třídního učitele"
  D: "po obdržení zprávy ŠPZ, i když ještě nebyl udělen písemný informovaný souhlas"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "po obdržení doporučení ŠPZ a po udělení písemného informovaného souhlasu, a to bezodkladně"
discipline: "školská legislativa / podpůrná opatření"
subtopic: "zahájení poskytování PO 2.–5. stupně"
conceptFamily: "podpůrná opatření a proces jejich poskytování"
distinctionAxis: "doporučení + písemný informovaný souhlas vs neformální či neúplný postup"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "doporučení × zpráva × souhlas"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 16 odst. 1"
  - "Zákon č. 561/2004 Sb. § 16"
secondarySourceSuggested:
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q01"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: doporučení + písemný informovaný souhlas vs neformální či neúplný postup.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q02

```yaml
globalId: B10Q02
questionNumber: 2
questionText: "Který autor je spojen se starším, užším a kategoriálně formulovaným vymezením speciální pedagogiky jako vědy o speciální výchově, vyučování a vzdělávání osob s postižením?"
options:
  A: "Jiří Škoda"
  B: "Karel Dvořák"
  C: "Josef Slowík"
  D: "Slavomír Fischer"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Karel Dvořák"
discipline: "historie speciální pedagogiky / terminologie"
subtopic: "starší kategoriální vymezení oboru"
conceptFamily: "české osobnosti a vývoj definic speciální pedagogiky"
distinctionAxis: "starší užší kategoriální pojetí vs současné širší funkční pojetí"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "historická definice × současní autoři"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Karel Dvořák"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "starší české kategoriální pojetí oboru"
personalityAnchor: "Karel Dvořák"
metadataSourceRef: "B10Q02"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: starší užší kategoriální pojetí vs současné širší funkční pojetí.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q03

```yaml
globalId: B10Q03
questionNumber: 3
questionText: "Pokud škola nemůže doporučené podpůrné opatření zajistit bezodkladně, může"
options:
  A: "po schválení ředitelem školy dočasně poskytnout jakékoli organizačně dosažitelné opatření"
  B: "po informování zákonného zástupce odložit poskytování opatření do dalšího pololetí"
  C: "po projednání se ŠPZ a se souhlasem dočasně poskytnout jiné obdobné opatření stejného stupně"
  D: "po projednání s poradenským pracovníkem školy dočasně poskytnout opatření nižšího stupně"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "po projednání se ŠPZ a se souhlasem dočasně poskytnout jiné obdobné opatření stejného stupně"
discipline: "školská legislativa / podpůrná opatření"
subtopic: "náhradní obdobné opatření stejného stupně"
conceptFamily: "podpůrná opatření a proces jejich poskytování"
distinctionAxis: "bezodkladnost vs dočasné obdobné opatření stejného stupně"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "odklad × nižší stupeň × stejnost stupně"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 16 odst. 3"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q03"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: bezodkladnost vs dočasné obdobné opatření stejného stupně.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q04

```yaml
globalId: B10Q04
questionNumber: 4
questionText: "Která autorka je v českém prostředí nejvíce spojována se speciálněpedagogickou diagnostikou, funkčním posouzením obtíží a vymezováním cílových skupin speciální pedagogiky?"
options:
  A: "Lucie Zormanová"
  B: "Marie Vítková"
  C: "Marie Renotiérová"
  D: "Jarmila Pipeková"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jarmila Pipeková"
discipline: "speciální pedagogika / diagnostika"
subtopic: "funkční posouzení obtíží a cílové skupiny"
conceptFamily: "české osobnosti diagnostiky a současného vymezení oboru"
distinctionAxis: "diagnostická a funkční linie vs systematizace či obecně inkluzivní pojetí"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "diagnostika × systematizace × inkluzivní pojetí"
institutionDomain: "dějiny oboru / diagnostika"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Jarmila Pipeková"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "současná česká diagnostická linie"
personalityAnchor: "Jarmila Pipeková"
metadataSourceRef: "B10Q04"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: diagnostická a funkční linie vs systematizace či obecně inkluzivní pojetí.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q05

```yaml
globalId: B10Q05
questionNumber: 5
questionText: "Lhůta 4 měsíců, po jejímž uplynutí škola projednává věc se ŠPZ, běží"
options:
  A: "ode dne vydání doporučení školským poradenským zařízením"
  B: "ode dne, kdy škola ukončila vyhodnocení podpůrných opatření prvního stupně"
  C: "ode dne, kdy bylo opatření poprvé fakticky využito ve výuce"
  D: "ode dne, kdy škola obdržela písemný informovaný souhlas"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "ode dne vydání doporučení školským poradenským zařízením"
discipline: "školská legislativa / podpůrná opatření"
subtopic: "čtyřměsíční lhůta pro projednání se ŠPZ"
conceptFamily: "vyhodnocování a implementace podpůrných opatření"
distinctionAxis: "ode dne vydání doporučení vs jiné možné počátky běhu lhůty"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "vydání doporučení × souhlas × faktické zahájení"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 16 odst. 4"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q05"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: ode dne vydání doporučení vs jiné možné počátky běhu lhůty.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q06

```yaml
globalId: B10Q06
questionNumber: 6
questionText: "Který slovenský speciální pedagog je spojen s komprehenzivním a integrativním pojetím speciální pedagogiky a s přesahem do tyflopedie i školské integrace?"
options:
  A: "Milan Valenta"
  B: "Ján Jesenský"
  C: "Josef Slowík"
  D: "Viktor Lechta"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Ján Jesenský"
discipline: "historie speciální pedagogiky / osobnosti"
subtopic: "komprehenzivní a integrativní pojetí"
conceptFamily: "slovenské osobnosti a integrativní pojetí oboru"
distinctionAxis: "komprehenzivní integrativní pojetí vs jiné současné proudy"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "slovenský autor × český autor × oborový přesah"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Ján Jesenský"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "komprehenzivní a integrativní pojetí"
personalityAnchor: "Ján Jesenský"
metadataSourceRef: "B10Q06"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: komprehenzivní integrativní pojetí vs jiné současné proudy.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q07

```yaml
globalId: B10Q07
questionNumber: 7
questionText: "Které tvrzení o kombinaci podpůrných opatření je správné"
options:
  A: "Lze kombinovat pouze ta opatření, která mají stejnou normovanou finanční náročnost"
  B: "Lze kombinovat pouze opatření stejného stupně, pokud je schválí ředitel školy"
  C: "Lze kombinovat různé druhy a stupně podpory, ale konkrétní druh opatření jen v jednom stupni"
  D: "Lze kombinovat různé druhy podpory, ale vždy jen v rámci jednoho stupně podpory"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "Lze kombinovat různé druhy a stupně podpory, ale konkrétní druh opatření jen v jednom stupni"
discipline: "školská legislativa / podpůrná opatření"
subtopic: "kombinace druhů a stupňů podpory"
conceptFamily: "podpůrná opatření a jejich kombinace"
distinctionAxis: "různé druhy a stupně vs konkrétní druh jen v jednom stupni"
questionTypeSuggested: "legislation-structure-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "kombinace stupňů × kombinace druhů"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 2 odst. 4"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q07"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: různé druhy a stupně vs konkrétní druh jen v jednom stupni.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q08

```yaml
globalId: B10Q08
questionNumber: 8
questionText: "Který psychiatr vymezoval idiocii jako trvalý stav vrozeného nebo časně vzniklého nedostatku rozumových schopností a odlišoval ji od duševní nemoci?"
options:
  A: "Philippe Pinel"
  B: "Felix Platter"
  C: "John Langdon Down"
  D: "Jean-Étienne Dominique Esquirol"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jean-Étienne Dominique Esquirol"
discipline: "psychopedie / dějiny terminologie"
subtopic: "idiocie vs duševní nemoc"
conceptFamily: "dějiny psychopedie a lékařsko-pedagogických konceptů"
distinctionAxis: "rané psychiatrické vymezení intelektového postižení vs jiné historické osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "raný psychiatrický autor × jiný oborový průkopník"
institutionDomain: "dějiny oboru / medicína"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Jean-Étienne Dominique Esquirol"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "raná psychiatrická klasifikace idiocie"
personalityAnchor: "Jean-Étienne Dominique Esquirol"
metadataSourceRef: "B10Q08"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: rané psychiatrické vymezení intelektového postižení vs jiné historické osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q09

```yaml
globalId: B10Q09
questionNumber: 9
questionText: "O revizi doporučení školského poradenského zařízení může požádat"
options:
  A: "zletilý žák nebo zákonný zástupce, ale také škola, školské zařízení nebo orgán veřejné moci, pokud to zákon připouští"
  B: "pouze škola nebo školské zařízení, pokud mají za to, že doporučení neodpovídá možnostem vzdělávání"
  C: "pouze orgán veřejné moci, pokud už dříve rozhodl o povinnosti využít poradenskou pomoc"
  D: "pouze zletilý žák nebo zákonný zástupce žáka, nikoli škola ani školské zařízení"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "zletilý žák nebo zákonný zástupce, ale také škola, školské zařízení nebo orgán veřejné moci, pokud to zákon připouští"
discipline: "školská legislativa / revize doporučení"
subtopic: "oprávněné osoby k podání žádosti o revizi"
conceptFamily: "revize doporučení a opravné procesy"
distinctionAxis: "okruh oprávněných osob vs restriktivně zúžený výklad"
questionTypeSuggested: "legislation-authority-discrimination"
distractorTypeSuggested: "authority-mixup"
trapPatternSeed: "kdo může podat revizi"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Zákon č. 561/2004 Sb. § 16b"
  - "Vyhláška č. 27/2016 Sb. – doporučení"
secondarySourceSuggested:
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q09"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: okruh oprávněných osob vs restriktivně zúžený výklad.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q10

```yaml
globalId: B10Q10
questionNumber: 10
questionText: "Kdo propojil psychopedii s medicínskou diagnostikou tím, že popsal fenylketonurii jako metabolickou příčinu mentálního postižení?"
options:
  A: "John Langdon Down"
  B: "Ivar Asbjörn Følling"
  C: "Samuel Torrey Orton"
  D: "Jean Demoor"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Ivar Asbjörn Følling"
discipline: "psychopedie / dějiny medicínské diagnostiky"
subtopic: "fenylketonurie jako metabolická příčina mentálního postižení"
conceptFamily: "medicínské kotvy psychopedie"
distinctionAxis: "metabolická příčina mentálního postižení vs jiné klinické či pedagogické osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "geneticko-metabolická kotva × jiné známé osobnosti psychopedie"
institutionDomain: "dějiny oboru / medicína"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Ivar Asbjörn Følling"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "fenylketonurie a psychopedie"
personalityAnchor: "Ivar Asbjörn Følling"
metadataSourceRef: "B10Q10"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: metabolická příčina mentálního postižení vs jiné klinické či pedagogické osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q11

```yaml
globalId: B10Q11
questionNumber: 11
questionText: "Žádost o revizi doporučení se podává ve lhůtě"
options:
  A: "do 15 dnů ode dne vyhotovení doporučení bez ohledu na jeho převzetí"
  B: "do 60 dnů ode dne, kdy škola potvrdila převzetí doporučení do své dokumentace"
  C: "do 30 dnů ode dne, kdy oprávněná osoba doporučení obdržela"
  D: "do 30 dnů ode dne vyhotovení doporučení, pokud již bylo zahájeno poskytování podpory"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "do 30 dnů ode dne, kdy oprávněná osoba doporučení obdržela"
discipline: "školská legislativa / revize doporučení"
subtopic: "lhůta pro podání žádosti o revizi"
conceptFamily: "revize doporučení a opravné procesy"
distinctionAxis: "30 dnů od obdržení vs jiné lhůty a počátky běhu"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "obdržení × vyhotovení × převzetí školou"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Zákon č. 561/2004 Sb. § 16b"
secondarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – provázání s podpůrnými opatřeními"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q11"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: 30 dnů od obdržení vs jiné lhůty a počátky běhu.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q12

```yaml
globalId: B10Q12
questionNumber: 12
questionText: "Který belgický lékař a pedagog je spojován s diagnostickými třídami pro žáky s mentálním postižením a s činnostní, zájmově orientovanou pedagogikou?"
options:
  A: "Rudolf Steiner"
  B: "Jean Demoor"
  C: "Peter Petersen"
  D: "Ovide Decroly"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Ovide Decroly"
discipline: "psychopedie / dějiny pedagogiky"
subtopic: "diagnostické třídy a činnostní pedagogika"
conceptFamily: "dějiny psychopedie a speciálního školství"
distinctionAxis: "diagnostické třídy a zájmově orientovaná pedagogika vs jiné reformní směry"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Decroly × Demoor × jiné reformní proudy"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Jean Demoor"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "diagnostické třídy a činnostní pedagogika"
personalityAnchor: "Jean Demoor"
metadataSourceRef: "B10Q12"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: diagnostické třídy a zájmově orientovaná pedagogika vs jiné reformní směry.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q13

```yaml
globalId: B10Q13
questionNumber: 13
questionText: "Pro vzdělávání žáka lze v daném období vydat"
options:
  A: "pouze jedno doporučení, s výjimkami výslovně stanovenými vyhláškou"
  B: "nové doporučení vždy po uplynutí poloviny doby platnosti předchozího doporučení"
  C: "dvě doporučení, pokud jedno upravuje výuku a druhé pouze pomůcky nebo služby"
  D: "jedno doporučení z PPP a jedno doporučení ze SPC, pokud se obsahově nepřekrývají"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "pouze jedno doporučení, s výjimkami výslovně stanovenými vyhláškou"
discipline: "školská legislativa / doporučení"
subtopic: "počet doporučení v jednom období"
conceptFamily: "doporučení ŠPZ a jejich vydávání"
distinctionAxis: "jedno doporučení s výjimkami vs paralelní více doporučení"
questionTypeSuggested: "legislation-document-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedno doporučení × více zařízení × více škol"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 15 odst. 4"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q13"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: jedno doporučení s výjimkami vs paralelní více doporučení.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q14

```yaml
globalId: B10Q14
questionNumber: 14
questionText: "Která česká osobnost je nejvýrazněji spojena s budováním sítě pomocných škol, tvorbou osnov, přípravou učitelů a zákonným ukotvením vzdělávání žáků s mentálním postižením?"
options:
  A: "Václav Příhoda"
  B: "Josef Zeman"
  C: "Milan Valenta"
  D: "František Čáda"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Josef Zeman"
discipline: "historie speciální pedagogiky / české osobnosti"
subtopic: "pomocné školy, osnovy a příprava učitelů"
conceptFamily: "české dějiny vzdělávání žáků s mentálním postižením"
distinctionAxis: "institucionální a legislativní budování pomocných škol vs obecná pedagogika či novější autoři"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "pomocné školy × obecná pedagogika × současní autoři"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Josef Zeman"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "budování pomocných škol v českém prostředí"
personalityAnchor: "Josef Zeman"
metadataSourceRef: "B10Q14"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: institucionální a legislativní budování pomocných škol vs obecná pedagogika či novější autoři.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q15

```yaml
globalId: B10Q15
questionNumber: 15
questionText: "Zpráva a doporučení se vydávají"
options:
  A: "do 30 dnů od ukončení posuzování, nejpozději do 3 měsíců od přijetí žádosti"
  B: "do 60 dnů od ukončení posuzování, nejpozději do 4 měsíců od přijetí žádosti"
  C: "do 30 dnů od přijetí žádosti, nejpozději do 6 měsíců od zahájení posuzování"
  D: "do 15 dnů od zahájení posuzování, nejpozději do 2 měsíců od přijetí žádosti"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "do 30 dnů od ukončení posuzování, nejpozději do 3 měsíců od přijetí žádosti"
discipline: "školská legislativa / doporučení a zpráva"
subtopic: "lhůty vydání zprávy a doporučení"
conceptFamily: "poradenský proces a výstupy ŠPZ"
distinctionAxis: "30 dnů od ukončení posuzování / nejpozději 3 měsíce od žádosti vs jiné lhůty"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "ukončení posuzování × přijetí žádosti"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 72/2005 Sb. – lhůty výstupů poradenských služeb"
  - "Vyhláška č. 46/2025 Sb. – novela vyhlášky 72/2005"
secondarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – provázání s podpůrnými opatřeními"
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q15"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: 30 dnů od ukončení posuzování / nejpozději 3 měsíce od žádosti vs jiné lhůty.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q16

```yaml
globalId: B10Q16
questionNumber: 16
questionText: "Která osobnost je nejúžeji spojena s rozvojem brněnské rehabilitační a somatopedické linie a s institucí Kociánka?"
options:
  A: "Otokar Chlup"
  B: "František Kábele"
  C: "Jan Mauer"
  D: "Jan Chlup"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jan Chlup"
discipline: "somatopedie / české osobnosti"
subtopic: "brněnská rehabilitační linie a Kociánka"
conceptFamily: "české dějiny somatopedie"
distinctionAxis: "rehabilitační a somatopedická linie v Brně vs jiné české osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Kociánka × vysokoškolská příprava × obecná pedagogika"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Jan Chlup"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "brněnská somatopedická a rehabilitační linie"
personalityAnchor: "Jan Chlup"
metadataSourceRef: "B10Q16"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: rehabilitační a somatopedická linie v Brně vs jiné české osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q17

```yaml
globalId: B10Q17
questionNumber: 17
questionText: "Při doporučování konkrétních podpůrných opatření školské poradenské zařízení zjišťuje také"
options:
  A: "možnost využití personálních a materiálních podmínek školy vytvořených v souvislosti s podporou jiných žáků"
  B: "pouze to, zda škola souhlasí s navrhovaným stupněm podpory ještě před vydáním doporučení"
  C: "možnost využití pouze personálních podmínek školy, nikoli však materiálních zdrojů a pomůcek"
  D: "pouze to, zda škola dosud čerpala normovanou finanční náročnost na obdobná opatření"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "možnost využití personálních a materiálních podmínek školy vytvořených v souvislosti s podporou jiných žáků"
discipline: "školská legislativa / doporučování PO"
subtopic: "zjišťování využitelnosti personálních a materiálních podmínek školy"
conceptFamily: "poradenský proces a doporučování opatření"
distinctionAxis: "personální i materiální podmínky školy vs zúžené či irelevantní faktory"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "reálné podmínky školy × souhlas školy × financování"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – postup při doporučování podpůrných opatření"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q17"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: personální i materiální podmínky školy vs zúžené či irelevantní faktory.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q18

```yaml
globalId: B10Q18
questionNumber: 18
questionText: "Která osobnost je spojována s rozvojem somatopedie, s vysokoškolskou přípravou speciálních pedagogů a s novodobým profilováním oboru v Brně?"
options:
  A: "Augustin Bartoš"
  B: "Lili Monatová"
  C: "Marie Renotiérová"
  D: "Jan Chlup"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Lili Monatová"
discipline: "somatopedie / české osobnosti"
subtopic: "novodobé profilování somatopedie v Brně"
conceptFamily: "české dějiny somatopedie"
distinctionAxis: "somatopedie a vysokoškolská příprava vs jiné brněnské osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "somatopedie × olomoucká linie × rehabilitace"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Lili Monatová"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "novodobé profilování somatopedie"
personalityAnchor: "Lili Monatová"
metadataSourceRef: "B10Q18"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: somatopedie a vysokoškolská příprava vs jiné brněnské osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q19

```yaml
globalId: B10Q19
questionNumber: 19
questionText: "Při zjišťování podkladů potřebných pro doporučení podpůrných opatření škola vůči ŠPZ"
options:
  A: "pouze vyčkává na finální doporučení a do procesu nevstupuje, dokud není vyzvána ředitelem"
  B: "nahrazuje část diagnostiky vlastním vyhodnocením, pokud jde o žáka dlouhodobě sledovaného školou"
  C: "poskytuje školskému poradenskému zařízení součinnost"
  D: "vydává vlastní předběžné stanovisko, které je pro školské poradenské zařízení závazné"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "poskytuje školskému poradenskému zařízení součinnost"
discipline: "školská legislativa / součinnost školy"
subtopic: "součinnost školy při zjišťování podkladů"
conceptFamily: "poradenský proces a role školy"
distinctionAxis: "součinnost školy vs nahrazování diagnostiky nebo závazné stanovisko školy"
questionTypeSuggested: "legislation-role-discrimination"
distractorTypeSuggested: "authority-mixup"
trapPatternSeed: "součinnost × náhrada diagnostiky × závazné stanovisko"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – součinnost školy se ŠPZ"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q19"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: součinnost školy vs nahrazování diagnostiky nebo závazné stanovisko školy.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q20

```yaml
globalId: B10Q20
questionNumber: 20
questionText: "Která osobnost logopedické tradice se stala symbolem cílevědomého překonávání řečových obtíží a bývá uváděna jako historický příklad intenzivního nácviku řeči?"
options:
  A: "Aristotelés"
  B: "Hippokrates"
  C: "Isokratés"
  D: "Démosthenés"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Démosthenés"
discipline: "logopedie / dějiny oboru"
subtopic: "historický symbol intenzivního nácviku řeči"
conceptFamily: "dějiny logopedie a historické precedenty"
distinctionAxis: "Démosthenés jako symbol řečového tréninku vs jiní antičtí autoři"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "antičtí myslitelé × historický příklad logopedie"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Démosthenés"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "historický symbol překonávání řečových obtíží"
personalityAnchor: "Démosthenés"
metadataSourceRef: "B10Q20"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: Démosthenés jako symbol řečového tréninku vs jiní antičtí autoři.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q21

```yaml
globalId: B10Q21
questionNumber: 21
questionText: "Je-li žák v péči odborného lékaře nebo klinického psychologa, ŠPZ při stanovování podpůrných opatření"
options:
  A: "přihlíží ke klinické diagnóze a léčebným opatřením odborného lékaře nebo klinického psychologa"
  B: "přihlíží pouze ke klinické diagnóze, nikoli však k léčebným opatřením stanoveným odborníkem"
  C: "přebírá jejich závěry v plném rozsahu bez možnosti odborného posouzení vzdělávací situace"
  D: "přihlíží k jejich závěrům jen tehdy, pokud s nimi předem písemně souhlasí ředitel školy"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "přihlíží ke klinické diagnóze a léčebným opatřením odborného lékaře nebo klinického psychologa"
discipline: "školská legislativa / doporučování PO"
subtopic: "přihlížení ke klinické diagnóze a léčebným opatřením"
conceptFamily: "poradenský proces a odborné podklady"
distinctionAxis: "přihlížení k diagnóze i léčebným opatřením vs mechanické přebírání závěrů nebo jejich ignorace"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "přihlížení × přebírání × ignorování klinických podkladů"
institutionDomain: "školství / poradenství / zdravotnictví"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – podklady pro doporučení podpůrných opatření"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q21"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: přihlížení k diagnóze i léčebným opatřením vs mechanické přebírání závěrů nebo jejich ignorace.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q22

```yaml
globalId: B10Q22
questionNumber: 22
questionText: "Kdo bývá označován za zakladatele vědecky pojaté logopedie v německém prostředí a systematicky se věnoval poruchám hlasu a řeči?"
options:
  A: "Richard Luchsinger"
  B: "Hermann Gutzmann"
  C: "Charles Van Riper"
  D: "Miloš Sovák"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Hermann Gutzmann"
discipline: "logopedie / dějiny oboru"
subtopic: "zakladatel vědecky pojaté logopedie v německém prostředí"
conceptFamily: "dějiny logopedie a foniatrie"
distinctionAxis: "vědecká logopedie a poruchy hlasu/řeči vs jiní pozdější autoři"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "zakladatel německé logopedie × moderní autoři"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Hermann Gutzmann"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "vědecky pojatá logopedie"
personalityAnchor: "Hermann Gutzmann"
metadataSourceRef: "B10Q22"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: vědecká logopedie a poruchy hlasu/řeči vs jiní pozdější autoři.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q23

```yaml
globalId: B10Q23
questionNumber: 23
questionText: "Který dokument má obsahovat poučení o možnosti podat žádost o revizi doporučení podle § 16b školského zákona"
options:
  A: "plán pedagogické podpory, pokud předcházel vydání doporučení ŠPZ"
  B: "informovaný souhlas zletilého žáka nebo zákonného zástupce žáka"
  C: "doporučení školského poradenského zařízení"
  D: "zpráva z vyšetření žáka, nikoli doporučení pro školu"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "doporučení školského poradenského zařízení"
discipline: "školská legislativa / doporučení"
subtopic: "poučení o možnosti podat revizi"
conceptFamily: "revize doporučení a obsah dokumentů"
distinctionAxis: "doporučení vs zpráva vs informovaný souhlas vs PLPP"
questionTypeSuggested: "document-function-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "funkce dokumentu"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Zákon č. 561/2004 Sb. § 16b"
  - "Vyhláška č. 27/2016 Sb. – doporučení"
secondarySourceSuggested:
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q23"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: doporučení vs zpráva vs informovaný souhlas vs PLPP.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q24

```yaml
globalId: B10Q24
questionNumber: 24
questionText: "Která osobnost vedla univerzitní hlasovou a řečovou kliniku, spoluvytvářela časopis Folia Phoniatrica a působila jako prezident mezinárodní asociace logopedů a foniatrů?"
options:
  A: "Hermann Gutzmann"
  B: "Miloslav Seeman"
  C: "Eva Škodová"
  D: "Richard Luchsinger"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Richard Luchsinger"
discipline: "logopedie / dějiny oboru"
subtopic: "Seeman, klinika a mezinárodní foniatrie"
conceptFamily: "dějiny české logopedie a foniatrie"
distinctionAxis: "klinické a mezinárodní foniatrické působení vs jiné logopedické osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Seeman × Gutzmann × Luchsinger"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Miloslav Seeman"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "česká foniatrická a logopedická tradice"
personalityAnchor: "Miloslav Seeman"
metadataSourceRef: "B10Q24"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: klinické a mezinárodní foniatrické působení vs jiné logopedické osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q25

```yaml
globalId: B10Q25
questionNumber: 25
questionText: "Který dokument má obsahovat návrh postupu při poskytování podpůrných opatření"
options:
  A: "záznam školy o vyhodnocení poskytovaných podpůrných opatření po uplynutí jejich účinnosti"
  B: "zpráva z vyšetření, protože popisuje průběh a výsledky diagnostiky žáka"
  C: "informovaný souhlas, protože bez něho nelze opatření vůbec konkretizovat"
  D: "doporučení školského poradenského zařízení"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "doporučení školského poradenského zařízení"
discipline: "školská legislativa / doporučení"
subtopic: "návrh postupu při poskytování podpůrných opatření"
conceptFamily: "obsah doporučení a obsah zprávy"
distinctionAxis: "doporučení jako dokument pro školu vs zpráva jako diagnostický výstup"
questionTypeSuggested: "document-function-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "zpráva × doporučení × informovaný souhlas"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – doporučení a jeho obsah"
  - "Vyhláška č. 72/2005 Sb. – výstupy poradenské služby"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q25"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: doporučení jako dokument pro školu vs zpráva jako diagnostický výstup.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q26

```yaml
globalId: B10Q26
questionNumber: 26
questionText: "Kdo je autorem první české učebnice logopedie Vady řeči z roku 1924?"
options:
  A: "Zikmund Janke"
  B: "Rudolf Kratochvíl"
  C: "Bohuslav Bláha"
  D: "Antonín Haveroch"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Rudolf Kratochvíl"
discipline: "logopedie / dějiny oboru"
subtopic: "první česká učebnice logopedie"
conceptFamily: "dějiny české logopedie"
distinctionAxis: "autor první české učebnice logopedie vs další české logopedické osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "časný autor učebnice × pozdější rozvoj logopedie"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Rudolf Kratochvíl"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "první česká učebnice logopedie"
personalityAnchor: "Rudolf Kratochvíl"
metadataSourceRef: "B10Q26"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: autor první české učebnice logopedie vs další české logopedické osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q27

```yaml
globalId: B10Q27
questionNumber: 27
questionText: "Školské poradenské zařízení vyhodnocuje poskytování podpůrných opatření obecně"
options:
  A: "vždy jednou ročně, bez výjimky pro personální podpůrná opatření"
  B: "vždy po 6 měsících od vydání doporučení, není-li ve zprávě uvedeno jinak"
  C: "ve lhůtě přiměřené povaze speciálních vzdělávacích potřeb a době platnosti doporučení"
  D: "vždy po 3 měsících od zahájení poskytování, bez ohledu na povahu potřeb žáka"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "ve lhůtě přiměřené povaze speciálních vzdělávacích potřeb a době platnosti doporučení"
discipline: "školská legislativa / vyhodnocování PO"
subtopic: "obecná lhůta vyhodnocování poskytování podpůrných opatření"
conceptFamily: "vyhodnocování podpůrných opatření"
distinctionAxis: "lhůta přiměřená povaze potřeb a době platnosti doporučení vs pevná univerzální lhůta"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "pevná lhůta × přiměřená lhůta"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 16 odst. 4"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q27"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: lhůta přiměřená povaze potřeb a době platnosti doporučení vs pevná univerzální lhůta.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q28

```yaml
globalId: B10Q28
questionNumber: 28
questionText: "Který český průkopník logopedie je spojen zejména s afáziemi, složitějšími poruchami řeči a také s pojmem amerisie?"
options:
  A: "Miloš Sovák"
  B: "Karel Neubauer"
  C: "Miloslav Seeman"
  D: "Antonín Haveroch"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Antonín Haveroch"
discipline: "logopedie / dějiny oboru"
subtopic: "afázie, složité poruchy řeči a pojem amerisie"
conceptFamily: "dějiny české logopedie"
distinctionAxis: "specifické odborné zaměření autora vs obecnější postavení jiných logopedů"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "afázie × terénní logopedie × novodobá klinika"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Antonín Haveroch"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "česká tradice afaziologie a logopedie"
personalityAnchor: "Antonín Haveroch"
metadataSourceRef: "B10Q28"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: specifické odborné zaměření autora vs obecnější postavení jiných logopedů.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q29

```yaml
globalId: B10Q29
questionNumber: 29
questionText: "Nejpozději do 1 roku od vydání doporučení se vyhodnocuje poskytování"
options:
  A: "asistenta pedagoga, dalšího pedagogického pracovníka, tlumočníka českého znakového jazyka, přepisovatele pro neslyšící a obdobných podpůrných osob"
  B: "pouze těch podpůrných opatření, která byla doporučena na dobu delší než 12 měsíců"
  C: "všech podpůrných opatření s normovanou finanční náročností bez ohledu na jejich druh"
  D: "pouze asistenta pedagoga a dalšího pedagogického pracovníka, nikoli však tlumočníka nebo přepisovatele"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "asistenta pedagoga, dalšího pedagogického pracovníka, tlumočníka českého znakového jazyka, přepisovatele pro neslyšící a obdobných podpůrných osob"
discipline: "školská legislativa / vyhodnocování PO"
subtopic: "jednoroční vyhodnocení personálních podpůrných opatření"
conceptFamily: "vyhodnocování podpůrných opatření"
distinctionAxis: "specifická personální opatření vs všechna opatření obecně"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "specifická personální opatření × všechna opatření"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. § 16 odst. 4"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q29"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: specifická personální opatření vs všechna opatření obecně.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q30

```yaml
globalId: B10Q30
questionNumber: 30
questionText: "Kdo založil Logopedický ústav hlavního města Prahy, prosazoval terénní péči a významně posílil postavení logopedie jako samostatné disciplíny?"
options:
  A: "Karel Neubauer"
  B: "Miloš Sovák"
  C: "Bohuslav Bláha"
  D: "Miloslav Seeman"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Miloš Sovák"
discipline: "logopedie / dějiny oboru"
subtopic: "Logopedický ústav hlavního města Prahy a terénní péče"
conceptFamily: "dějiny české logopedie"
distinctionAxis: "institucionální rozvoj logopedie vs jiné odborné role českých logopedů"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Miloš Sovák × Seeman × pozdější logopedi"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Miloš Sovák"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "institucionální posílení české logopedie"
personalityAnchor: "Miloš Sovák"
metadataSourceRef: "B10Q30"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: institucionální rozvoj logopedie vs jiné odborné role českých logopedů.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q31

```yaml
globalId: B10Q31
questionNumber: 31
questionText: "Pokud činnost školy a školského zařízení vykonává jedna právnická osoba, jsou doporučená opatření"
options:
  A: "uvedena v jednom doporučení školského poradenského zařízení"
  B: "uvedena v jednom doporučení pouze tehdy, jde-li o opatření druhého nebo třetího stupně"
  C: "uvedena ve dvou doporučeních, vždy zvlášť pro školu a zvlášť pro školské zařízení"
  D: "uvedena v tolika doporučeních, kolik druhů podpůrných opatření bylo doporučeno"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "uvedena v jednom doporučení školského poradenského zařízení"
discipline: "školská legislativa / doporučení"
subtopic: "jedna právnická osoba pro školu a školské zařízení"
conceptFamily: "doporučení a jejich organizační uspořádání"
distinctionAxis: "jedno doporučení vs oddělená doporučení"
questionTypeSuggested: "document-structure-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedna právnická osoba × dvě entity"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – doporučení při jedné právnické osobě"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q31"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: jedno doporučení vs oddělená doporučení.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q32

```yaml
globalId: B10Q32
questionNumber: 32
questionText: "Který raný evropský průkopník výchovy neslyšících bývá spojován s nejstarší linií výuky odezírání, psaní a artikulované řeči, která předchází pozdějším systematickým metodám?"
options:
  A: "Juan Pablo Bonet"
  B: "Johann Konrad Amman"
  C: "Samuel Heinicke"
  D: "Pedro Ponce de León"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Pedro Ponce de León"
discipline: "surdopedie / dějiny oboru"
subtopic: "nejstarší linie odezírání, psaní a artikulované řeči"
conceptFamily: "dějiny vzdělávání neslyšících"
distinctionAxis: "rané předsystematické počátky orální výuky vs pozdější systematičtější autoři"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Ponce de León × Bonet × Amman × Heinicke"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Pedro Ponce de León"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "rané počátky edukace neslyšících"
personalityAnchor: "Pedro Ponce de León"
metadataSourceRef: "B10Q32"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: rané předsystematické počátky orální výuky vs pozdější systematičtější autoři.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q33

```yaml
globalId: B10Q33
questionNumber: 33
questionText: "Pokud činnost školy a školského zařízení vykonávají různé právnické osoby, pak ŠPZ"
options:
  A: "vydává samostatné doporučení pro vzdělávání žáka ve školském zařízení"
  B: "nevydává další doporučení, pokud již bylo vydáno doporučení pro školu"
  C: "vydává samostatné doporučení jen v případě, že jde o pátý stupeň podpory"
  D: "vydává společné doporučení, ale s oddělenou přílohou pro školské zařízení"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "vydává samostatné doporučení pro vzdělávání žáka ve školském zařízení"
discipline: "školská legislativa / doporučení"
subtopic: "různé právnické osoby pro školu a školské zařízení"
conceptFamily: "doporučení a jejich organizační uspořádání"
distinctionAxis: "oddělená doporučení pro oddělené právnické osoby vs jednotné doporučení"
questionTypeSuggested: "document-structure-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedna vs více právnických osob"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – doporučení při více právnických osobách"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q33"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: oddělená doporučení pro oddělené právnické osoby vs jednotné doporučení.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q34

```yaml
globalId: B10Q34
questionNumber: 34
questionText: "Který švýcarský lékař působící v Nizozemsku je považován za zakladatele orální metody a zdůrazňoval odezírání i hlasovou produkci?"
options:
  A: "Thomas Braidwood"
  B: "Johann Konrad Amman"
  C: "Charles-Michel de l’Épée"
  D: "Samuel Heinicke"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Johann Konrad Amman"
discipline: "surdopedie / dějiny oboru"
subtopic: "zakladatel orální metody"
conceptFamily: "dějiny vzdělávání neslyšících"
distinctionAxis: "Ammanova orální linie vs jiné národní tradice"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Amman × Heinicke × de l’Épée"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Johann Konrad Amman"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "počátky orální metody"
personalityAnchor: "Johann Konrad Amman"
metadataSourceRef: "B10Q34"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: Ammanova orální linie vs jiné národní tradice.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q35

```yaml
globalId: B10Q35
questionNumber: 35
questionText: "Ve škole, třídě, oddělení nebo studijní skupině zřízené podle § 16 odst. 9 zákona nelze standardně poskytovat"
options:
  A: "poradenskou pomoc školy a školského poradenského zařízení"
  B: "úpravu metod výuky a individualizaci vzdělávacího procesu"
  C: "předmět speciálně pedagogické péče, není-li dán jiný druh znevýhodnění než ten, pro který byla tato forma zřízena"
  D: "průběžné a formativní hodnocení přizpůsobené vzdělávacím potřebám žáka"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "předmět speciálně pedagogické péče, není-li dán jiný druh znevýhodnění než ten, pro který byla tato forma zřízena"
discipline: "školská legislativa / §16 odst. 9"
subtopic: "co nelze standardně poskytovat ve speciální třídě nebo skupině"
conceptFamily: "vzdělávání podle § 16 odst. 9 zákona"
distinctionAxis: "opatření slučitelná vs neslučitelná se speciální třídou/skupinou"
questionTypeSuggested: "legislation-compatibility-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "co je již obsaženo v samotném organizačním opatření"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1 a pravidla PO pro § 16 odst. 9"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q35"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: opatření slučitelná vs neslučitelná se speciální třídou/skupinou.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q36

```yaml
globalId: B10Q36
questionNumber: 36
questionText: "Kdo je považován za otce francouzské tradice vzdělávání neslyšících, založil veřejný ústav pro neslyšící v Paříži a rozvíjel znakové a manuální vyučování?"
options:
  A: "Samuel Heinicke"
  B: "Abbé Sicard"
  C: "Laurent Clerc"
  D: "Charles-Michel de l’Épée"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Charles-Michel de l’Épée"
discipline: "surdopedie / dějiny oboru"
subtopic: "otec francouzské znakové tradice"
conceptFamily: "dějiny vzdělávání neslyšících"
distinctionAxis: "francouzská manuální tradice vs německá orální linie a její pokračovatelé"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "de l’Épée × Sicard × Clerc"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Charles-Michel de l’Épée"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "francouzská znaková tradice"
personalityAnchor: "Charles-Michel de l’Épée"
metadataSourceRef: "B10Q36"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: francouzská manuální tradice vs německá orální linie a její pokračovatelé.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q37

```yaml
globalId: B10Q37
questionNumber: 37
questionText: "Při distančních prvcích kombinované výuky mimo místo vzdělávání se podpůrná opatření podle § 16 odst. 2 písm. g) a h)"
options:
  A: "neposkytují, s výjimkou tlumočníka českého znakového jazyka a přepisovatele pro neslyšící"
  B: "poskytují bez omezení, pokud je jejich rozsah výslovně uveden v doporučení ŠPZ"
  C: "poskytují pouze ve čtvrtém a pátém stupni podpory při dlouhodobé nepřítomnosti žáka"
  D: "neposkytují bez jakékoli výjimky, protože se vztahují výlučně na prezenční výuku"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "neposkytují, s výjimkou tlumočníka českého znakového jazyka a přepisovatele pro neslyšící"
discipline: "školská legislativa / distanční prvky výuky"
subtopic: "neposkytování PO podle § 16 odst. 2 písm. g) a h) s výjimkami"
conceptFamily: "podpůrná opatření při kombinované a distanční výuce"
distinctionAxis: "výjimka pro tlumočníka ČZJ a přepisovatele vs absolutní zákaz či plné poskytování"
questionTypeSuggested: "legislation-exception-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "zákaz s výjimkou × absolutní zákaz × plné poskytování"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Zákon č. 561/2004 Sb. § 16 – aktuální znění"
  - "Vyhláška č. 27/2016 Sb. – návazná úprava"
secondarySourceSuggested:
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q37"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: výjimka pro tlumočníka ČZJ a přepisovatele vs absolutní zákaz či plné poskytování.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q38

```yaml
globalId: B10Q38
questionNumber: 38
questionText: "Která osobnost se stala hlavní protiváhou francouzské znakové tradice tím, že rozvíjela německou orální metodu a zdůrazňovala výuku řeči a odezírání?"
options:
  A: "Johann Konrad Amman"
  B: "Samuel Heinicke"
  C: "Thomas Braidwood"
  D: "Thomas Hopkins Gallaudet"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Samuel Heinicke"
discipline: "surdopedie / dějiny oboru"
subtopic: "Heinicke jako protiváha francouzské znakové tradice"
conceptFamily: "dějiny vzdělávání neslyšících"
distinctionAxis: "německá orální metoda vs francouzská manuální tradice"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Amman × Heinicke × Braidwood"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Samuel Heinicke"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "německá orální tradice"
personalityAnchor: "Samuel Heinicke"
metadataSourceRef: "B10Q38"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: německá orální metoda vs francouzská manuální tradice.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q39

```yaml
globalId: B10Q39
questionNumber: 39
questionText: "Ve třetím stupni podpory může být asistent pedagoga v některých variantách nastaven tak, že"
options:
  A: "je přítomen pouze při nepedagogických činnostech a nevstupuje do přímé výuky žáka"
  B: "může být využíván i pro další žáky, ale pouze tehdy, mají-li stejný druh znevýhodnění"
  C: "nemusí být přítomen po celou dobu vyučování a může být využíván i pro další žáky s obdobnou potřebou"
  D: "je přítomen po celou dobu vyučování a pracuje výhradně s jedním konkrétním žákem"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "nemusí být přítomen po celou dobu vyučování a může být využíván i pro další žáky s obdobnou potřebou"
discipline: "školská legislativa / asistent pedagoga"
subtopic: "varianty nastavení asistenta pedagoga ve 3. stupni"
conceptFamily: "personální podpůrná opatření"
distinctionAxis: "sdílený a časově omezený AP vs plně individuální celodenní přítomnost"
questionTypeSuggested: "legislation-support-variant-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "sdílená podpora × výhradní podpora"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1, 3. stupeň podpory"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q39"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: sdílený a časově omezený AP vs plně individuální celodenní přítomnost.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q40

```yaml
globalId: B10Q40
questionNumber: 40
questionText: "Kdo založil v Paříži roku 1784 první výchovně-vzdělávací ústav pro nevidomé na světě a pracoval s reliéfním tiskem?"
options:
  A: "Johann Wilhelm Klein"
  B: "Denis Diderot"
  C: "Louis Braille"
  D: "Valentin Haüy"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Valentin Haüy"
discipline: "tyflopedie / dějiny oboru"
subtopic: "první ústav pro nevidomé v Paříži"
conceptFamily: "dějiny vzdělávání osob se zrakovým postižením"
distinctionAxis: "zakladatel prvního ústavu pro nevidomé vs pozdější vývoj písma a edukace"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Haüy × Braille × Diderot × Klein"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Valentin Haüy"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "počátky institucionální tyflopedie"
personalityAnchor: "Valentin Haüy"
metadataSourceRef: "B10Q40"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: zakladatel prvního ústavu pro nevidomé vs pozdější vývoj písma a edukace.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q41

```yaml
globalId: B10Q41
questionNumber: 41
questionText: "Ve třetím stupni podpůrných opatření je možné prodloužit délku vzdělávání"
options:
  A: "nejvýše o 1 rok"
  B: "nejvýše o 2 roky u všech žáků bez rozdílu stupně vzdělávání"
  C: "nejvýše o 2 roky pouze u žáků vzdělávaných podle § 16 odst. 9 zákona"
  D: "nejvýše o 1 rok pouze ve středním a vyšším odborném vzdělávání"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "nejvýše o 1 rok"
discipline: "školská legislativa / délka vzdělávání"
subtopic: "prodloužení délky vzdělávání ve 3. stupni"
conceptFamily: "stupně podpory a úpravy průběhu vzdělávání"
distinctionAxis: "nejvýše o 1 rok vs jiné varianty prodloužení"
questionTypeSuggested: "legislation-limit-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "1 rok × 2 roky × omezení podle typu školy"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1, 3. stupeň podpory"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q41"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: nejvýše o 1 rok vs jiné varianty prodloužení.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q42

```yaml
globalId: B10Q42
questionNumber: 42
questionText: "Který autor vyvinul bodové noční písmo, z něhož Louis Braille později vyšel při tvorbě vlastní soustavy?"
options:
  A: "James Gall"
  B: "Josef Julius Barbier"
  C: "William Moon"
  D: "Thomas Mark Lucas"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Josef Julius Barbier"
discipline: "tyflopedie / dějiny písma"
subtopic: "bodové noční písmo jako předchůdce Braillova písma"
conceptFamily: "dějiny komunikačních systémů pro nevidomé"
distinctionAxis: "Barbierovo noční písmo vs jiné reliéfní soustavy"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Barbier × Gall × Moon × Lucas"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Josef Julius Barbier"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "noční písmo jako předstupeň Braillovy soustavy"
personalityAnchor: "Josef Julius Barbier"
metadataSourceRef: "B10Q42"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: Barbierovo noční písmo vs jiné reliéfní soustavy.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q43

```yaml
globalId: B10Q43
questionNumber: 43
questionText: "Ve čtvrtém stupni podpůrných opatření lze u žáků uvedených v § 16 odst. 9 zákona prodloužit délku vzdělávání"
options:
  A: "nejvýše o 3 roky, jde-li o žáka vzdělávaného ve speciální třídě"
  B: "nelze prodlužovat délku vzdělávání, ale jen měnit organizaci výuky"
  C: "nejvýše o 2 roky, jde-li o žáka uvedeného v § 16 odst. 9 zákona"
  D: "nejvýše o 1 rok bez ohledu na typ školy nebo vzdělávacího programu"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "nejvýše o 2 roky, jde-li o žáka uvedeného v § 16 odst. 9 zákona"
discipline: "školská legislativa / délka vzdělávání"
subtopic: "prodloužení délky vzdělávání ve 4. stupni u § 16 odst. 9"
conceptFamily: "stupně podpory a úpravy průběhu vzdělávání"
distinctionAxis: "nejvýše o 2 roky u žáků podle § 16 odst. 9 vs jiné limity"
questionTypeSuggested: "legislation-limit-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "2 roky × 3 roky × 1 rok"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1, 4. stupeň podpory"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q43"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: nejvýše o 2 roky u žáků podle § 16 odst. 9 vs jiné limity.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q44

```yaml
globalId: B10Q44
questionNumber: 44
questionText: "Kdo přepracoval Barbierův systém do šestibodové soustavy, která zásadně změnila možnosti samostatného čtení a psaní nevidomých?"
options:
  A: "Samuel Gridley Howe"
  B: "Oskar Picht"
  C: "Johann Wilhelm Klein"
  D: "Louis Braille"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Louis Braille"
discipline: "tyflopedie / dějiny písma"
subtopic: "Braillova šestibodová soustava"
conceptFamily: "dějiny komunikačních systémů pro nevidomé"
distinctionAxis: "přepracování Barbierova systému do šestibodové soustavy vs jiné tyflopedické osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Braille × Picht × Klein × Howe"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Louis Braille"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "vznik šestibodové soustavy"
personalityAnchor: "Louis Braille"
metadataSourceRef: "B10Q44"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: přepracování Barbierova systému do šestibodové soustavy vs jiné tyflopedické osobnosti.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q45

```yaml
globalId: B10Q45
questionNumber: 45
questionText: "Které tvrzení o vyšším stupni podpůrného opatření je správné"
options:
  A: "Vyšší stupeň zahrnuje opatření stejného druhu z nižších stupňů jen v případech uvedených v části A a u poradenské pomoci, metod či hodnocení"
  B: "Vyšší stupeň vždy automaticky zahrnuje všechna opatření nižších stupňů bez výjimky"
  C: "Vyšší stupeň zahrnuje nižší stupeň pouze u pomůcek a personálních podpůrných opatření"
  D: "Vyšší stupeň zahrnuje nižší stupeň pouze u organizace výuky a prodloužení vzdělávání"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "Vyšší stupeň zahrnuje opatření stejného druhu z nižších stupňů jen v případech uvedených v části A a u poradenské pomoci, metod či hodnocení"
discipline: "školská legislativa / konstrukce vyššího stupně PO"
subtopic: "zahrnování opatření stejného druhu z nižších stupňů"
conceptFamily: "stupně podpory a logika skládání opatření"
distinctionAxis: "částečné zahrnutí nižších stupňů jen v určených případech vs automatické zahrnutí všeho"
questionTypeSuggested: "legislation-structure-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "automatické zahrnutí × omezené zahrnutí"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1, obecná pravidla vyššího stupně"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q45"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: částečné zahrnutí nižších stupňů jen v určených případech vs automatické zahrnutí všeho.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q46

```yaml
globalId: B10Q46
questionNumber: 46
questionText: "Která osobnost je spojena s reliéfním písmem, které se uplatnilo zejména u osob, jež ztratily zrak později a obtížně se učily Braillovo písmo?"
options:
  A: "James Gall"
  B: "William Moon"
  C: "Oskar Picht"
  D: "Louis Braille"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "William Moon"
discipline: "tyflopedie / dějiny písma"
subtopic: "Moonovo reliéfní písmo pro později osleplé"
conceptFamily: "dějiny komunikačních systémů pro nevidomé"
distinctionAxis: "Moonovo písmo vs Braille a jiné reliéfní systémy"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Moon × Braille × Picht × Gall"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – William Moon"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "alternativní reliéfní písmo pro později osleplé"
personalityAnchor: "William Moon"
metadataSourceRef: "B10Q46"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: Moonovo písmo vs Braille a jiné reliéfní systémy.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q47

```yaml
globalId: B10Q47
questionNumber: 47
questionText: "Pedagogická intervence je podle aktuální právní úpravy"
options:
  A: "typickým podpůrným opatřením druhého stupně při přechodu od PLPP k doporučení ŠPZ"
  B: "zvláštním podpůrným opatřením mimo systém pěti stupňů podpory"
  C: "podpůrným opatřením prvního stupně"
  D: "samostatnou službou, která se využívá pouze při souběhu IVP a asistenta pedagoga"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "podpůrným opatřením prvního stupně"
discipline: "školská legislativa / pedagogická intervence"
subtopic: "aktuální právní status pedagogické intervence"
conceptFamily: "podpůrná opatření a školní podpůrné činnosti"
distinctionAxis: "PO 1. stupně vs 2. stupeň nebo zvláštní samostatná služba"
questionTypeSuggested: "legislation-category-discrimination"
distractorTypeSuggested: "terminology-confusion"
trapPatternSeed: "pedagogická intervence × podpůrné opatření × samostatná služba"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – aktuální znění"
  - "Vyhláška č. 46/2025 Sb. – novela vyhlášky 72/2005"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q47"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: PO 1. stupně vs 2. stupeň nebo zvláštní samostatná služba.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q48

```yaml
globalId: B10Q48
questionNumber: 48
questionText: "Která česká osobnost je spojena se zakládáním ústavů pro výchovu, léčení, zaopatření a zaměstnávání nevidomých v Praze?"
options:
  A: "Jan Deyl"
  B: "Václav Vejdovský"
  C: "Drahomír Hanák"
  D: "Alois Klár"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Alois Klár"
discipline: "tyflopedie / české osobnosti"
subtopic: "zakládání ústavů pro nevidomé v Praze"
conceptFamily: "české dějiny tyflopedie"
distinctionAxis: "zakladatelská osobnost pražských ústavů vs pozdější odborníci"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Alois Klár × Jan Deyl × další české osobnosti"
institutionDomain: "dějiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Alois Klár"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "počátky české tyflopedie a ústavnictví"
personalityAnchor: "Alois Klár"
metadataSourceRef: "B10Q48"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: zakladatelská osobnost pražských ústavů vs pozdější odborníci.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q49

```yaml
globalId: B10Q49
questionNumber: 49
questionText: "Pro čtvrtý stupeň podpůrných opatření je typické, že"
options:
  A: "jde o významné úpravy průběhu vzdělávání, zpravidla podložené diagnostikou a případně i úpravou výstupů"
  B: "postačují jen minimální úpravy metod a hodnocení bez zásahu do organizace vzdělávání"
  C: "jde pouze o posílení personální podpory bez možnosti prodloužení délky vzdělávání"
  D: "jde výhradně o kompenzační pomůcky bez vazby na diagnostiku a úpravu výstupů"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "jde o významné úpravy průběhu vzdělávání, zpravidla podložené diagnostikou a případně i úpravou výstupů"
discipline: "školská legislativa / 4. stupeň podpory"
subtopic: "charakteristika 4. stupně podpůrných opatření"
conceptFamily: "stupně podpory a úpravy průběhu vzdělávání"
distinctionAxis: "významné úpravy průběhu vzdělávání a případná úprava výstupů vs minimální nebo čistě pomůckové pojetí"
questionTypeSuggested: "legislation-level-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "4. stupeň × 1./2. stupeň × jen pomůcky"
institutionDomain: "školství / poradenství"
timeSensitivity: "current"
primarySourceSuggested:
  - "Vyhláška č. 27/2016 Sb. – příloha č. 1, 4. stupeň podpory"
secondarySourceSuggested:
  - "Zákon č. 561/2004 Sb. – školský zákon"
  - "Vyhláška č. 72/2005 Sb. / Vyhláška č. 46/2025 Sb., pokud jde o poradenský proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q49"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: významné úpravy průběhu vzdělávání a případná úprava výstupů vs minimální nebo čistě pomůckové pojetí.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---
## B10Q50

```yaml
globalId: B10Q50
questionNumber: 50
questionText: "Která autorka je spojena s testem zrakového vnímání využívaným zejména u dětí s poruchami učení a obtížemi ve vizuálně-percepční oblasti?"
options:
  A: "Nancy Bayley"
  B: "Marianne Frostig"
  C: "Joan Reynell"
  D: "Lea Hyvärinen"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Marianne Frostig"
discipline: "speciálněpedagogická diagnostika / zrakové vnímání"
subtopic: "Frostig test zrakového vnímání"
conceptFamily: "diagnostické nástroje a autorky testů"
distinctionAxis: "test zrakového vnímání vs jiné vývojové a jazykové testy"
questionTypeSuggested: "test-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "diagnostický nástroj × jiná autorka testu"
institutionDomain: "diagnostika"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobností – Marianne Frostig"
secondarySourceSuggested:
  - "Mini-wikipedie osobností – ověřit danou osobnost a blízké distraktory"
  - "Doplňková oborová rešerše jen pokud bude potřeba zpřesnit historický detail"
legislationRef: ""
historicalAnchor: "diagnostika vizuálně-percepčních obtíží"
personalityAnchor: "Marianne Frostig"
metadataSourceRef: "B10Q50"
authoringStatus: "outline-prepared"
```

### Autorovací poznámka
- Jádro položky: test zrakového vnímání vs jiné vývojové a jazykové testy.
- Při dopracování drž rozlišení mezi tím, co je testované jádro otázky, a tím, co je jen věrohodně znějící distraktor.
- U této položky doplň stručné zdůvodnění správné odpovědi a minimálně jednu větu ke každé rodině chybných odpovědí.

### Vyplnit při dopracování
- requiredDiscrimination:
- signalPattern:
- signalHint:
- explanationCorrect:
- explanationDistractor:
- commonMisconception:
- whyWrongCategory:
- microLesson:
- recommendedRecallPrompt:
- repairTags:
- formulationFlags:
- answerAuditNote:

---

