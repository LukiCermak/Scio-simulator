# battery10_hard_metadata_source_notes

## Stav souboru
- status: pracovnĂ­ osnova pĹ™ipravenĂˇ pro autorovĂˇnĂ­ metadat Baterie 10
- batteryId: 10
- batteryLabel: Baterie 10
- batteryTitle: FinĂˇlnĂ­ nejtÄ›ĹľĹˇĂ­ vrstva â€“ legislativa, osobnosti a historickĂ© kotvy
- batterySubtitle: PĹ™esnĂˇ diferenÄŤnĂ­ vrstva na Ĺˇkolskou legislativu, dÄ›jiny speciĂˇlnĂ­ pedagogiky, logopedie, surdopedie, tyflopedie a diagnostickĂ© autory.
- purpose: PĹ™ipravit zdrojovou a autorovacĂ­ mezivrstvu pro budoucĂ­ rozĹˇĂ­Ĺ™enĂ­ hard metadat o Baterii 10 bez pĹ™Ă­mĂ©ho zĂˇpisu do produkÄŤnĂ­ho JS exportu.
- sourceDataset: FinĂˇlnĂ­ nejtÄ›ĹľĹˇĂ­ test 50 otĂˇzek
- sourceQuestionCount: 50
- scope: osnova + pĹ™edvyplnÄ›nĂ© zdrojovĂ© a klasifikaÄŤnĂ­ kotvy + mĂ­sta pro tutorovou vrstvu

## Jak s osnovou pracovat
1. U kaĹľdĂ© poloĹľky nejdĹ™Ă­v ovÄ›Ĺ™ `primarySourceSuggested` a doplĹ pĹ™esnĂ˝ paragraf / pĹ™esnou osobnostnĂ­ kotvu.
2. Potom doplĹ tutorovou vrstvu: `requiredDiscrimination`, `signalHint`, `explanationCorrect`, `explanationDistractor`, `commonMisconception`, `microLesson`.
3. AĹľ po answer-auditu pĹ™evĂˇdÄ›j poloĹľku do `data_source/hard/metadata/battery_10.source.json`.

## DoporuÄŤenĂˇ minimĂˇlnĂ­ pole pro finĂˇlnĂ­ metadata
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

## SpoleÄŤnĂ© TODO pro vĹˇechny poloĹľky
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
- ovÄ›Ĺ™it `trapPattern` proti finĂˇlnĂ­ formulaci distraktorĹŻ
- u legislativy vypsat pĹ™esnĂ˝ paragraf / odstavec / pĹ™Ă­lohu
- u osobnostĂ­ doplnit struÄŤnĂ© zdĹŻvodnÄ›nĂ­, proÄŤ je sprĂˇvnĂˇ prĂˇvÄ› tato osoba a proÄŤ ne blĂ­zkĂ˝ distraktor

## RychlĂˇ mapa tematickĂ˝ch blokĹŻ
### A. LegislativnÄ›-procesnĂ­ poloĹľky
- otĂˇzky: B10Q01, B10Q03, B10Q05, B10Q07, B10Q09, B10Q11, B10Q13, B10Q15, B10Q17, B10Q19, B10Q21, B10Q23, B10Q25, B10Q27, B10Q29, B10Q31, B10Q33, B10Q35, B10Q37, B10Q39, B10Q41, B10Q43, B10Q45, B10Q47, B10Q49
### B. ÄŚeskĂ© a slovenskĂ© osobnosti speciĂˇlnĂ­ pedagogiky
- otĂˇzky: B10Q02, B10Q04, B10Q06, B10Q14, B10Q16, B10Q18, B10Q48
### C. Psychopedie a ranĂ© dÄ›jiny diagnostiky
- otĂˇzky: B10Q08, B10Q10, B10Q12
### D. DÄ›jiny logopedie a foniatrie
- otĂˇzky: B10Q20, B10Q22, B10Q24, B10Q26, B10Q28, B10Q30
### E. Surdopedie â€“ historickĂ© smÄ›ry a osobnosti
- otĂˇzky: B10Q32, B10Q34, B10Q36, B10Q38
### F. Tyflopedie a diagnostika zrakovĂ©ho vnĂ­mĂˇnĂ­
- otĂˇzky: B10Q40, B10Q42, B10Q44, B10Q46, B10Q50

---
## B10Q01

```yaml
globalId: B10Q01
questionNumber: 1
questionText: "Ĺ kola poskytuje podpĹŻrnĂˇ opatĹ™enĂ­ druhĂ©ho aĹľ pĂˇtĂ©ho stupnÄ›"
options:
  A: "po obdrĹľenĂ­ doporuÄŤenĂ­ Ĺ PZ a po udÄ›lenĂ­ pĂ­semnĂ©ho informovanĂ©ho souhlasu, a to bezodkladnÄ›"
  B: "po doporuÄŤenĂ­ Ĺ PZ, i kdyĹľ informovanĂ˝ souhlas bude doplnÄ›n aĹľ po zahĂˇjenĂ­ podpory"
  C: "po ĂşstnĂ­m souhlasu zĂˇkonnĂ©ho zĂˇstupce a po nĂˇslednĂ©m zĂˇznamu tĹ™Ă­dnĂ­ho uÄŤitele"
  D: "po obdrĹľenĂ­ zprĂˇvy Ĺ PZ, i kdyĹľ jeĹˇtÄ› nebyl udÄ›len pĂ­semnĂ˝ informovanĂ˝ souhlas"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "po obdrĹľenĂ­ doporuÄŤenĂ­ Ĺ PZ a po udÄ›lenĂ­ pĂ­semnĂ©ho informovanĂ©ho souhlasu, a to bezodkladnÄ›"
discipline: "ĹˇkolskĂˇ legislativa / podpĹŻrnĂˇ opatĹ™enĂ­"
subtopic: "zahĂˇjenĂ­ poskytovĂˇnĂ­ PO 2.â€“5. stupnÄ›"
conceptFamily: "podpĹŻrnĂˇ opatĹ™enĂ­ a proces jejich poskytovĂˇnĂ­"
distinctionAxis: "doporuÄŤenĂ­ + pĂ­semnĂ˝ informovanĂ˝ souhlas vs neformĂˇlnĂ­ ÄŤi neĂşplnĂ˝ postup"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "doporuÄŤenĂ­ Ă— zprĂˇva Ă— souhlas"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 16 odst. 1"
  - "ZĂˇkon ÄŤ. 561/2004 Sb. Â§ 16"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q01"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: doporuÄŤenĂ­ + pĂ­semnĂ˝ informovanĂ˝ souhlas vs neformĂˇlnĂ­ ÄŤi neĂşplnĂ˝ postup.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ autor je spojen se starĹˇĂ­m, uĹľĹˇĂ­m a kategoriĂˇlnÄ› formulovanĂ˝m vymezenĂ­m speciĂˇlnĂ­ pedagogiky jako vÄ›dy o speciĂˇlnĂ­ vĂ˝chovÄ›, vyuÄŤovĂˇnĂ­ a vzdÄ›lĂˇvĂˇnĂ­ osob s postiĹľenĂ­m?"
options:
  A: "JiĹ™Ă­ Ĺ koda"
  B: "Karel DvoĹ™Ăˇk"
  C: "Josef SlowĂ­k"
  D: "SlavomĂ­r Fischer"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Karel DvoĹ™Ăˇk"
discipline: "historie speciĂˇlnĂ­ pedagogiky / terminologie"
subtopic: "starĹˇĂ­ kategoriĂˇlnĂ­ vymezenĂ­ oboru"
conceptFamily: "ÄŤeskĂ© osobnosti a vĂ˝voj definic speciĂˇlnĂ­ pedagogiky"
distinctionAxis: "starĹˇĂ­ uĹľĹˇĂ­ kategoriĂˇlnĂ­ pojetĂ­ vs souÄŤasnĂ© ĹˇirĹˇĂ­ funkÄŤnĂ­ pojetĂ­"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "historickĂˇ definice Ă— souÄŤasnĂ­ autoĹ™i"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Karel DvoĹ™Ăˇk"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "starĹˇĂ­ ÄŤeskĂ© kategoriĂˇlnĂ­ pojetĂ­ oboru"
personalityAnchor: "Karel DvoĹ™Ăˇk"
metadataSourceRef: "B10Q02"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: starĹˇĂ­ uĹľĹˇĂ­ kategoriĂˇlnĂ­ pojetĂ­ vs souÄŤasnĂ© ĹˇirĹˇĂ­ funkÄŤnĂ­ pojetĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Pokud Ĺˇkola nemĹŻĹľe doporuÄŤenĂ© podpĹŻrnĂ© opatĹ™enĂ­ zajistit bezodkladnÄ›, mĹŻĹľe"
options:
  A: "po schvĂˇlenĂ­ Ĺ™editelem Ĺˇkoly doÄŤasnÄ› poskytnout jakĂ©koli organizaÄŤnÄ› dosaĹľitelnĂ© opatĹ™enĂ­"
  B: "po informovĂˇnĂ­ zĂˇkonnĂ©ho zĂˇstupce odloĹľit poskytovĂˇnĂ­ opatĹ™enĂ­ do dalĹˇĂ­ho pololetĂ­"
  C: "po projednĂˇnĂ­ se Ĺ PZ a se souhlasem doÄŤasnÄ› poskytnout jinĂ© obdobnĂ© opatĹ™enĂ­ stejnĂ©ho stupnÄ›"
  D: "po projednĂˇnĂ­ s poradenskĂ˝m pracovnĂ­kem Ĺˇkoly doÄŤasnÄ› poskytnout opatĹ™enĂ­ niĹľĹˇĂ­ho stupnÄ›"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "po projednĂˇnĂ­ se Ĺ PZ a se souhlasem doÄŤasnÄ› poskytnout jinĂ© obdobnĂ© opatĹ™enĂ­ stejnĂ©ho stupnÄ›"
discipline: "ĹˇkolskĂˇ legislativa / podpĹŻrnĂˇ opatĹ™enĂ­"
subtopic: "nĂˇhradnĂ­ obdobnĂ© opatĹ™enĂ­ stejnĂ©ho stupnÄ›"
conceptFamily: "podpĹŻrnĂˇ opatĹ™enĂ­ a proces jejich poskytovĂˇnĂ­"
distinctionAxis: "bezodkladnost vs doÄŤasnĂ© obdobnĂ© opatĹ™enĂ­ stejnĂ©ho stupnÄ›"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "odklad Ă— niĹľĹˇĂ­ stupeĹ Ă— stejnost stupnÄ›"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 16 odst. 3"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q03"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: bezodkladnost vs doÄŤasnĂ© obdobnĂ© opatĹ™enĂ­ stejnĂ©ho stupnÄ›.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ autorka je v ÄŤeskĂ©m prostĹ™edĂ­ nejvĂ­ce spojovĂˇna se speciĂˇlnÄ›pedagogickou diagnostikou, funkÄŤnĂ­m posouzenĂ­m obtĂ­ĹľĂ­ a vymezovĂˇnĂ­m cĂ­lovĂ˝ch skupin speciĂˇlnĂ­ pedagogiky?"
options:
  A: "Lucie ZormanovĂˇ"
  B: "Marie VĂ­tkovĂˇ"
  C: "Marie RenotiĂ©rovĂˇ"
  D: "Jarmila PipekovĂˇ"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jarmila PipekovĂˇ"
discipline: "speciĂˇlnĂ­ pedagogika / diagnostika"
subtopic: "funkÄŤnĂ­ posouzenĂ­ obtĂ­ĹľĂ­ a cĂ­lovĂ© skupiny"
conceptFamily: "ÄŤeskĂ© osobnosti diagnostiky a souÄŤasnĂ©ho vymezenĂ­ oboru"
distinctionAxis: "diagnostickĂˇ a funkÄŤnĂ­ linie vs systematizace ÄŤi obecnÄ› inkluzivnĂ­ pojetĂ­"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "diagnostika Ă— systematizace Ă— inkluzivnĂ­ pojetĂ­"
institutionDomain: "dÄ›jiny oboru / diagnostika"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Jarmila PipekovĂˇ"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "souÄŤasnĂˇ ÄŤeskĂˇ diagnostickĂˇ linie"
personalityAnchor: "Jarmila PipekovĂˇ"
metadataSourceRef: "B10Q04"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: diagnostickĂˇ a funkÄŤnĂ­ linie vs systematizace ÄŤi obecnÄ› inkluzivnĂ­ pojetĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "LhĹŻta 4 mÄ›sĂ­cĹŻ, po jejĂ­mĹľ uplynutĂ­ Ĺˇkola projednĂˇvĂˇ vÄ›c se Ĺ PZ, bÄ›ĹľĂ­"
options:
  A: "ode dne vydĂˇnĂ­ doporuÄŤenĂ­ ĹˇkolskĂ˝m poradenskĂ˝m zaĹ™Ă­zenĂ­m"
  B: "ode dne, kdy Ĺˇkola ukonÄŤila vyhodnocenĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­ prvnĂ­ho stupnÄ›"
  C: "ode dne, kdy bylo opatĹ™enĂ­ poprvĂ© fakticky vyuĹľito ve vĂ˝uce"
  D: "ode dne, kdy Ĺˇkola obdrĹľela pĂ­semnĂ˝ informovanĂ˝ souhlas"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "ode dne vydĂˇnĂ­ doporuÄŤenĂ­ ĹˇkolskĂ˝m poradenskĂ˝m zaĹ™Ă­zenĂ­m"
discipline: "ĹˇkolskĂˇ legislativa / podpĹŻrnĂˇ opatĹ™enĂ­"
subtopic: "ÄŤtyĹ™mÄ›sĂ­ÄŤnĂ­ lhĹŻta pro projednĂˇnĂ­ se Ĺ PZ"
conceptFamily: "vyhodnocovĂˇnĂ­ a implementace podpĹŻrnĂ˝ch opatĹ™enĂ­"
distinctionAxis: "ode dne vydĂˇnĂ­ doporuÄŤenĂ­ vs jinĂ© moĹľnĂ© poÄŤĂˇtky bÄ›hu lhĹŻty"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "vydĂˇnĂ­ doporuÄŤenĂ­ Ă— souhlas Ă— faktickĂ© zahĂˇjenĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 16 odst. 4"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q05"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: ode dne vydĂˇnĂ­ doporuÄŤenĂ­ vs jinĂ© moĹľnĂ© poÄŤĂˇtky bÄ›hu lhĹŻty.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ slovenskĂ˝ speciĂˇlnĂ­ pedagog je spojen s komprehenzivnĂ­m a integrativnĂ­m pojetĂ­m speciĂˇlnĂ­ pedagogiky a s pĹ™esahem do tyflopedie i ĹˇkolskĂ© integrace?"
options:
  A: "Milan Valenta"
  B: "JĂˇn JesenskĂ˝"
  C: "Josef SlowĂ­k"
  D: "Viktor Lechta"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "JĂˇn JesenskĂ˝"
discipline: "historie speciĂˇlnĂ­ pedagogiky / osobnosti"
subtopic: "komprehenzivnĂ­ a integrativnĂ­ pojetĂ­"
conceptFamily: "slovenskĂ© osobnosti a integrativnĂ­ pojetĂ­ oboru"
distinctionAxis: "komprehenzivnĂ­ integrativnĂ­ pojetĂ­ vs jinĂ© souÄŤasnĂ© proudy"
questionTypeSuggested: "term-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "slovenskĂ˝ autor Ă— ÄŤeskĂ˝ autor Ă— oborovĂ˝ pĹ™esah"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ JĂˇn JesenskĂ˝"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "komprehenzivnĂ­ a integrativnĂ­ pojetĂ­"
personalityAnchor: "JĂˇn JesenskĂ˝"
metadataSourceRef: "B10Q06"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: komprehenzivnĂ­ integrativnĂ­ pojetĂ­ vs jinĂ© souÄŤasnĂ© proudy.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ© tvrzenĂ­ o kombinaci podpĹŻrnĂ˝ch opatĹ™enĂ­ je sprĂˇvnĂ©"
options:
  A: "Lze kombinovat pouze ta opatĹ™enĂ­, kterĂˇ majĂ­ stejnou normovanou finanÄŤnĂ­ nĂˇroÄŤnost"
  B: "Lze kombinovat pouze opatĹ™enĂ­ stejnĂ©ho stupnÄ›, pokud je schvĂˇlĂ­ Ĺ™editel Ĺˇkoly"
  C: "Lze kombinovat rĹŻznĂ© druhy a stupnÄ› podpory, ale konkrĂ©tnĂ­ druh opatĹ™enĂ­ jen v jednom stupni"
  D: "Lze kombinovat rĹŻznĂ© druhy podpory, ale vĹľdy jen v rĂˇmci jednoho stupnÄ› podpory"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "Lze kombinovat rĹŻznĂ© druhy a stupnÄ› podpory, ale konkrĂ©tnĂ­ druh opatĹ™enĂ­ jen v jednom stupni"
discipline: "ĹˇkolskĂˇ legislativa / podpĹŻrnĂˇ opatĹ™enĂ­"
subtopic: "kombinace druhĹŻ a stupĹĹŻ podpory"
conceptFamily: "podpĹŻrnĂˇ opatĹ™enĂ­ a jejich kombinace"
distinctionAxis: "rĹŻznĂ© druhy a stupnÄ› vs konkrĂ©tnĂ­ druh jen v jednom stupni"
questionTypeSuggested: "legislation-structure-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "kombinace stupĹĹŻ Ă— kombinace druhĹŻ"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 2 odst. 4"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q07"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: rĹŻznĂ© druhy a stupnÄ› vs konkrĂ©tnĂ­ druh jen v jednom stupni.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ psychiatr vymezoval idiocii jako trvalĂ˝ stav vrozenĂ©ho nebo ÄŤasnÄ› vzniklĂ©ho nedostatku rozumovĂ˝ch schopnostĂ­ a odliĹˇoval ji od duĹˇevnĂ­ nemoci?"
options:
  A: "Philippe Pinel"
  B: "Felix Platter"
  C: "John Langdon Down"
  D: "Jean-Ă‰tienne Dominique Esquirol"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jean-Ă‰tienne Dominique Esquirol"
discipline: "psychopedie / dÄ›jiny terminologie"
subtopic: "idiocie vs duĹˇevnĂ­ nemoc"
conceptFamily: "dÄ›jiny psychopedie a lĂ©kaĹ™sko-pedagogickĂ˝ch konceptĹŻ"
distinctionAxis: "ranĂ© psychiatrickĂ© vymezenĂ­ intelektovĂ©ho postiĹľenĂ­ vs jinĂ© historickĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "ranĂ˝ psychiatrickĂ˝ autor Ă— jinĂ˝ oborovĂ˝ prĹŻkopnĂ­k"
institutionDomain: "dÄ›jiny oboru / medicĂ­na"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Jean-Ă‰tienne Dominique Esquirol"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "ranĂˇ psychiatrickĂˇ klasifikace idiocie"
personalityAnchor: "Jean-Ă‰tienne Dominique Esquirol"
metadataSourceRef: "B10Q08"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: ranĂ© psychiatrickĂ© vymezenĂ­ intelektovĂ©ho postiĹľenĂ­ vs jinĂ© historickĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "O revizi doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­ mĹŻĹľe poĹľĂˇdat"
options:
  A: "zletilĂ˝ ĹľĂˇk nebo zĂˇkonnĂ˝ zĂˇstupce, ale takĂ© Ĺˇkola, ĹˇkolskĂ© zaĹ™Ă­zenĂ­ nebo orgĂˇn veĹ™ejnĂ© moci, pokud to zĂˇkon pĹ™ipouĹˇtĂ­"
  B: "pouze Ĺˇkola nebo ĹˇkolskĂ© zaĹ™Ă­zenĂ­, pokud majĂ­ za to, Ĺľe doporuÄŤenĂ­ neodpovĂ­dĂˇ moĹľnostem vzdÄ›lĂˇvĂˇnĂ­"
  C: "pouze orgĂˇn veĹ™ejnĂ© moci, pokud uĹľ dĹ™Ă­ve rozhodl o povinnosti vyuĹľĂ­t poradenskou pomoc"
  D: "pouze zletilĂ˝ ĹľĂˇk nebo zĂˇkonnĂ˝ zĂˇstupce ĹľĂˇka, nikoli Ĺˇkola ani ĹˇkolskĂ© zaĹ™Ă­zenĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "zletilĂ˝ ĹľĂˇk nebo zĂˇkonnĂ˝ zĂˇstupce, ale takĂ© Ĺˇkola, ĹˇkolskĂ© zaĹ™Ă­zenĂ­ nebo orgĂˇn veĹ™ejnĂ© moci, pokud to zĂˇkon pĹ™ipouĹˇtĂ­"
discipline: "ĹˇkolskĂˇ legislativa / revize doporuÄŤenĂ­"
subtopic: "oprĂˇvnÄ›nĂ© osoby k podĂˇnĂ­ ĹľĂˇdosti o revizi"
conceptFamily: "revize doporuÄŤenĂ­ a opravnĂ© procesy"
distinctionAxis: "okruh oprĂˇvnÄ›nĂ˝ch osob vs restriktivnÄ› zĂşĹľenĂ˝ vĂ˝klad"
questionTypeSuggested: "legislation-authority-discrimination"
distractorTypeSuggested: "authority-mixup"
trapPatternSeed: "kdo mĹŻĹľe podat revizi"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. Â§ 16b"
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ doporuÄŤenĂ­"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q09"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: okruh oprĂˇvnÄ›nĂ˝ch osob vs restriktivnÄ› zĂşĹľenĂ˝ vĂ˝klad.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo propojil psychopedii s medicĂ­nskou diagnostikou tĂ­m, Ĺľe popsal fenylketonurii jako metabolickou pĹ™Ă­ÄŤinu mentĂˇlnĂ­ho postiĹľenĂ­?"
options:
  A: "John Langdon Down"
  B: "Ivar AsbjĂ¶rn FĂ¸lling"
  C: "Samuel Torrey Orton"
  D: "Jean Demoor"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Ivar AsbjĂ¶rn FĂ¸lling"
discipline: "psychopedie / dÄ›jiny medicĂ­nskĂ© diagnostiky"
subtopic: "fenylketonurie jako metabolickĂˇ pĹ™Ă­ÄŤina mentĂˇlnĂ­ho postiĹľenĂ­"
conceptFamily: "medicĂ­nskĂ© kotvy psychopedie"
distinctionAxis: "metabolickĂˇ pĹ™Ă­ÄŤina mentĂˇlnĂ­ho postiĹľenĂ­ vs jinĂ© klinickĂ© ÄŤi pedagogickĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "geneticko-metabolickĂˇ kotva Ă— jinĂ© znĂˇmĂ© osobnosti psychopedie"
institutionDomain: "dÄ›jiny oboru / medicĂ­na"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Ivar AsbjĂ¶rn FĂ¸lling"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "fenylketonurie a psychopedie"
personalityAnchor: "Ivar AsbjĂ¶rn FĂ¸lling"
metadataSourceRef: "B10Q10"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: metabolickĂˇ pĹ™Ă­ÄŤina mentĂˇlnĂ­ho postiĹľenĂ­ vs jinĂ© klinickĂ© ÄŤi pedagogickĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ĺ˝Ăˇdost o revizi doporuÄŤenĂ­ se podĂˇvĂˇ ve lhĹŻtÄ›"
options:
  A: "do 15 dnĹŻ ode dne vyhotovenĂ­ doporuÄŤenĂ­ bez ohledu na jeho pĹ™evzetĂ­"
  B: "do 60 dnĹŻ ode dne, kdy Ĺˇkola potvrdila pĹ™evzetĂ­ doporuÄŤenĂ­ do svĂ© dokumentace"
  C: "do 30 dnĹŻ ode dne, kdy oprĂˇvnÄ›nĂˇ osoba doporuÄŤenĂ­ obdrĹľela"
  D: "do 30 dnĹŻ ode dne vyhotovenĂ­ doporuÄŤenĂ­, pokud jiĹľ bylo zahĂˇjeno poskytovĂˇnĂ­ podpory"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "do 30 dnĹŻ ode dne, kdy oprĂˇvnÄ›nĂˇ osoba doporuÄŤenĂ­ obdrĹľela"
discipline: "ĹˇkolskĂˇ legislativa / revize doporuÄŤenĂ­"
subtopic: "lhĹŻta pro podĂˇnĂ­ ĹľĂˇdosti o revizi"
conceptFamily: "revize doporuÄŤenĂ­ a opravnĂ© procesy"
distinctionAxis: "30 dnĹŻ od obdrĹľenĂ­ vs jinĂ© lhĹŻty a poÄŤĂˇtky bÄ›hu"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "obdrĹľenĂ­ Ă— vyhotovenĂ­ Ă— pĹ™evzetĂ­ Ĺˇkolou"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. Â§ 16b"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ provĂˇzĂˇnĂ­ s podpĹŻrnĂ˝mi opatĹ™enĂ­mi"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q11"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: 30 dnĹŻ od obdrĹľenĂ­ vs jinĂ© lhĹŻty a poÄŤĂˇtky bÄ›hu.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ belgickĂ˝ lĂ©kaĹ™ a pedagog je spojovĂˇn s diagnostickĂ˝mi tĹ™Ă­dami pro ĹľĂˇky s mentĂˇlnĂ­m postiĹľenĂ­m a s ÄŤinnostnĂ­, zĂˇjmovÄ› orientovanou pedagogikou?"
options:
  A: "Rudolf Steiner"
  B: "Jean Demoor"
  C: "Peter Petersen"
  D: "Ovide Decroly"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Ovide Decroly"
discipline: "psychopedie / dÄ›jiny pedagogiky"
subtopic: "diagnostickĂ© tĹ™Ă­dy a ÄŤinnostnĂ­ pedagogika"
conceptFamily: "dÄ›jiny psychopedie a speciĂˇlnĂ­ho ĹˇkolstvĂ­"
distinctionAxis: "diagnostickĂ© tĹ™Ă­dy a zĂˇjmovÄ› orientovanĂˇ pedagogika vs jinĂ© reformnĂ­ smÄ›ry"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Decroly Ă— Demoor Ă— jinĂ© reformnĂ­ proudy"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Jean Demoor"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "diagnostickĂ© tĹ™Ă­dy a ÄŤinnostnĂ­ pedagogika"
personalityAnchor: "Jean Demoor"
metadataSourceRef: "B10Q12"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: diagnostickĂ© tĹ™Ă­dy a zĂˇjmovÄ› orientovanĂˇ pedagogika vs jinĂ© reformnĂ­ smÄ›ry.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Pro vzdÄ›lĂˇvĂˇnĂ­ ĹľĂˇka lze v danĂ©m obdobĂ­ vydat"
options:
  A: "pouze jedno doporuÄŤenĂ­, s vĂ˝jimkami vĂ˝slovnÄ› stanovenĂ˝mi vyhlĂˇĹˇkou"
  B: "novĂ© doporuÄŤenĂ­ vĹľdy po uplynutĂ­ poloviny doby platnosti pĹ™edchozĂ­ho doporuÄŤenĂ­"
  C: "dvÄ› doporuÄŤenĂ­, pokud jedno upravuje vĂ˝uku a druhĂ© pouze pomĹŻcky nebo sluĹľby"
  D: "jedno doporuÄŤenĂ­ z PPP a jedno doporuÄŤenĂ­ ze SPC, pokud se obsahovÄ› nepĹ™ekrĂ˝vajĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "pouze jedno doporuÄŤenĂ­, s vĂ˝jimkami vĂ˝slovnÄ› stanovenĂ˝mi vyhlĂˇĹˇkou"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­"
subtopic: "poÄŤet doporuÄŤenĂ­ v jednom obdobĂ­"
conceptFamily: "doporuÄŤenĂ­ Ĺ PZ a jejich vydĂˇvĂˇnĂ­"
distinctionAxis: "jedno doporuÄŤenĂ­ s vĂ˝jimkami vs paralelnĂ­ vĂ­ce doporuÄŤenĂ­"
questionTypeSuggested: "legislation-document-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedno doporuÄŤenĂ­ Ă— vĂ­ce zaĹ™Ă­zenĂ­ Ă— vĂ­ce Ĺˇkol"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 15 odst. 4"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q13"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: jedno doporuÄŤenĂ­ s vĂ˝jimkami vs paralelnĂ­ vĂ­ce doporuÄŤenĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ ÄŤeskĂˇ osobnost je nejvĂ˝raznÄ›ji spojena s budovĂˇnĂ­m sĂ­tÄ› pomocnĂ˝ch Ĺˇkol, tvorbou osnov, pĹ™Ă­pravou uÄŤitelĹŻ a zĂˇkonnĂ˝m ukotvenĂ­m vzdÄ›lĂˇvĂˇnĂ­ ĹľĂˇkĹŻ s mentĂˇlnĂ­m postiĹľenĂ­m?"
options:
  A: "VĂˇclav PĹ™Ă­hoda"
  B: "Josef Zeman"
  C: "Milan Valenta"
  D: "FrantiĹˇek ÄŚĂˇda"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Josef Zeman"
discipline: "historie speciĂˇlnĂ­ pedagogiky / ÄŤeskĂ© osobnosti"
subtopic: "pomocnĂ© Ĺˇkoly, osnovy a pĹ™Ă­prava uÄŤitelĹŻ"
conceptFamily: "ÄŤeskĂ© dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ ĹľĂˇkĹŻ s mentĂˇlnĂ­m postiĹľenĂ­m"
distinctionAxis: "institucionĂˇlnĂ­ a legislativnĂ­ budovĂˇnĂ­ pomocnĂ˝ch Ĺˇkol vs obecnĂˇ pedagogika ÄŤi novÄ›jĹˇĂ­ autoĹ™i"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "pomocnĂ© Ĺˇkoly Ă— obecnĂˇ pedagogika Ă— souÄŤasnĂ­ autoĹ™i"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Josef Zeman"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "budovĂˇnĂ­ pomocnĂ˝ch Ĺˇkol v ÄŤeskĂ©m prostĹ™edĂ­"
personalityAnchor: "Josef Zeman"
metadataSourceRef: "B10Q14"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: institucionĂˇlnĂ­ a legislativnĂ­ budovĂˇnĂ­ pomocnĂ˝ch Ĺˇkol vs obecnĂˇ pedagogika ÄŤi novÄ›jĹˇĂ­ autoĹ™i.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "ZprĂˇva a doporuÄŤenĂ­ se vydĂˇvajĂ­"
options:
  A: "do 30 dnĹŻ od ukonÄŤenĂ­ posuzovĂˇnĂ­, nejpozdÄ›ji do 3 mÄ›sĂ­cĹŻ od pĹ™ijetĂ­ ĹľĂˇdosti"
  B: "do 60 dnĹŻ od ukonÄŤenĂ­ posuzovĂˇnĂ­, nejpozdÄ›ji do 4 mÄ›sĂ­cĹŻ od pĹ™ijetĂ­ ĹľĂˇdosti"
  C: "do 30 dnĹŻ od pĹ™ijetĂ­ ĹľĂˇdosti, nejpozdÄ›ji do 6 mÄ›sĂ­cĹŻ od zahĂˇjenĂ­ posuzovĂˇnĂ­"
  D: "do 15 dnĹŻ od zahĂˇjenĂ­ posuzovĂˇnĂ­, nejpozdÄ›ji do 2 mÄ›sĂ­cĹŻ od pĹ™ijetĂ­ ĹľĂˇdosti"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "do 30 dnĹŻ od ukonÄŤenĂ­ posuzovĂˇnĂ­, nejpozdÄ›ji do 3 mÄ›sĂ­cĹŻ od pĹ™ijetĂ­ ĹľĂˇdosti"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­ a zprĂˇva"
subtopic: "lhĹŻty vydĂˇnĂ­ zprĂˇvy a doporuÄŤenĂ­"
conceptFamily: "poradenskĂ˝ proces a vĂ˝stupy Ĺ PZ"
distinctionAxis: "30 dnĹŻ od ukonÄŤenĂ­ posuzovĂˇnĂ­ / nejpozdÄ›ji 3 mÄ›sĂ­ce od ĹľĂˇdosti vs jinĂ© lhĹŻty"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "ukonÄŤenĂ­ posuzovĂˇnĂ­ Ă— pĹ™ijetĂ­ ĹľĂˇdosti"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. â€“ lhĹŻty vĂ˝stupĹŻ poradenskĂ˝ch sluĹľeb"
  - "VyhlĂˇĹˇka ÄŤ. 46/2025 Sb. â€“ novela vyhlĂˇĹˇky 72/2005"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ provĂˇzĂˇnĂ­ s podpĹŻrnĂ˝mi opatĹ™enĂ­mi"
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q15"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: 30 dnĹŻ od ukonÄŤenĂ­ posuzovĂˇnĂ­ / nejpozdÄ›ji 3 mÄ›sĂ­ce od ĹľĂˇdosti vs jinĂ© lhĹŻty.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost je nejĂşĹľeji spojena s rozvojem brnÄ›nskĂ© rehabilitaÄŤnĂ­ a somatopedickĂ© linie a s institucĂ­ KociĂˇnka?"
options:
  A: "Otokar Chlup"
  B: "FrantiĹˇek KĂˇbele"
  C: "Jan Mauer"
  D: "Jan Chlup"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Jan Chlup"
discipline: "somatopedie / ÄŤeskĂ© osobnosti"
subtopic: "brnÄ›nskĂˇ rehabilitaÄŤnĂ­ linie a KociĂˇnka"
conceptFamily: "ÄŤeskĂ© dÄ›jiny somatopedie"
distinctionAxis: "rehabilitaÄŤnĂ­ a somatopedickĂˇ linie v BrnÄ› vs jinĂ© ÄŤeskĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "KociĂˇnka Ă— vysokoĹˇkolskĂˇ pĹ™Ă­prava Ă— obecnĂˇ pedagogika"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Jan Chlup"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "brnÄ›nskĂˇ somatopedickĂˇ a rehabilitaÄŤnĂ­ linie"
personalityAnchor: "Jan Chlup"
metadataSourceRef: "B10Q16"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: rehabilitaÄŤnĂ­ a somatopedickĂˇ linie v BrnÄ› vs jinĂ© ÄŤeskĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "PĹ™i doporuÄŤovĂˇnĂ­ konkrĂ©tnĂ­ch podpĹŻrnĂ˝ch opatĹ™enĂ­ ĹˇkolskĂ© poradenskĂ© zaĹ™Ă­zenĂ­ zjiĹˇĹĄuje takĂ©"
options:
  A: "moĹľnost vyuĹľitĂ­ personĂˇlnĂ­ch a materiĂˇlnĂ­ch podmĂ­nek Ĺˇkoly vytvoĹ™enĂ˝ch v souvislosti s podporou jinĂ˝ch ĹľĂˇkĹŻ"
  B: "pouze to, zda Ĺˇkola souhlasĂ­ s navrhovanĂ˝m stupnÄ›m podpory jeĹˇtÄ› pĹ™ed vydĂˇnĂ­m doporuÄŤenĂ­"
  C: "moĹľnost vyuĹľitĂ­ pouze personĂˇlnĂ­ch podmĂ­nek Ĺˇkoly, nikoli vĹˇak materiĂˇlnĂ­ch zdrojĹŻ a pomĹŻcek"
  D: "pouze to, zda Ĺˇkola dosud ÄŤerpala normovanou finanÄŤnĂ­ nĂˇroÄŤnost na obdobnĂˇ opatĹ™enĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "moĹľnost vyuĹľitĂ­ personĂˇlnĂ­ch a materiĂˇlnĂ­ch podmĂ­nek Ĺˇkoly vytvoĹ™enĂ˝ch v souvislosti s podporou jinĂ˝ch ĹľĂˇkĹŻ"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤovĂˇnĂ­ PO"
subtopic: "zjiĹˇĹĄovĂˇnĂ­ vyuĹľitelnosti personĂˇlnĂ­ch a materiĂˇlnĂ­ch podmĂ­nek Ĺˇkoly"
conceptFamily: "poradenskĂ˝ proces a doporuÄŤovĂˇnĂ­ opatĹ™enĂ­"
distinctionAxis: "personĂˇlnĂ­ i materiĂˇlnĂ­ podmĂ­nky Ĺˇkoly vs zĂşĹľenĂ© ÄŤi irelevantnĂ­ faktory"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "reĂˇlnĂ© podmĂ­nky Ĺˇkoly Ă— souhlas Ĺˇkoly Ă— financovĂˇnĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ postup pĹ™i doporuÄŤovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q17"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: personĂˇlnĂ­ i materiĂˇlnĂ­ podmĂ­nky Ĺˇkoly vs zĂşĹľenĂ© ÄŤi irelevantnĂ­ faktory.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost je spojovĂˇna s rozvojem somatopedie, s vysokoĹˇkolskou pĹ™Ă­pravou speciĂˇlnĂ­ch pedagogĹŻ a s novodobĂ˝m profilovĂˇnĂ­m oboru v BrnÄ›?"
options:
  A: "Augustin BartoĹˇ"
  B: "Lili MonatovĂˇ"
  C: "Marie RenotiĂ©rovĂˇ"
  D: "Jan Chlup"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Lili MonatovĂˇ"
discipline: "somatopedie / ÄŤeskĂ© osobnosti"
subtopic: "novodobĂ© profilovĂˇnĂ­ somatopedie v BrnÄ›"
conceptFamily: "ÄŤeskĂ© dÄ›jiny somatopedie"
distinctionAxis: "somatopedie a vysokoĹˇkolskĂˇ pĹ™Ă­prava vs jinĂ© brnÄ›nskĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "somatopedie Ă— olomouckĂˇ linie Ă— rehabilitace"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Lili MonatovĂˇ"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "novodobĂ© profilovĂˇnĂ­ somatopedie"
personalityAnchor: "Lili MonatovĂˇ"
metadataSourceRef: "B10Q18"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: somatopedie a vysokoĹˇkolskĂˇ pĹ™Ă­prava vs jinĂ© brnÄ›nskĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "PĹ™i zjiĹˇĹĄovĂˇnĂ­ podkladĹŻ potĹ™ebnĂ˝ch pro doporuÄŤenĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­ Ĺˇkola vĹŻÄŤi Ĺ PZ"
options:
  A: "pouze vyÄŤkĂˇvĂˇ na finĂˇlnĂ­ doporuÄŤenĂ­ a do procesu nevstupuje, dokud nenĂ­ vyzvĂˇna Ĺ™editelem"
  B: "nahrazuje ÄŤĂˇst diagnostiky vlastnĂ­m vyhodnocenĂ­m, pokud jde o ĹľĂˇka dlouhodobÄ› sledovanĂ©ho Ĺˇkolou"
  C: "poskytuje ĹˇkolskĂ©mu poradenskĂ©mu zaĹ™Ă­zenĂ­ souÄŤinnost"
  D: "vydĂˇvĂˇ vlastnĂ­ pĹ™edbÄ›ĹľnĂ© stanovisko, kterĂ© je pro ĹˇkolskĂ© poradenskĂ© zaĹ™Ă­zenĂ­ zĂˇvaznĂ©"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "poskytuje ĹˇkolskĂ©mu poradenskĂ©mu zaĹ™Ă­zenĂ­ souÄŤinnost"
discipline: "ĹˇkolskĂˇ legislativa / souÄŤinnost Ĺˇkoly"
subtopic: "souÄŤinnost Ĺˇkoly pĹ™i zjiĹˇĹĄovĂˇnĂ­ podkladĹŻ"
conceptFamily: "poradenskĂ˝ proces a role Ĺˇkoly"
distinctionAxis: "souÄŤinnost Ĺˇkoly vs nahrazovĂˇnĂ­ diagnostiky nebo zĂˇvaznĂ© stanovisko Ĺˇkoly"
questionTypeSuggested: "legislation-role-discrimination"
distractorTypeSuggested: "authority-mixup"
trapPatternSeed: "souÄŤinnost Ă— nĂˇhrada diagnostiky Ă— zĂˇvaznĂ© stanovisko"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ souÄŤinnost Ĺˇkoly se Ĺ PZ"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q19"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: souÄŤinnost Ĺˇkoly vs nahrazovĂˇnĂ­ diagnostiky nebo zĂˇvaznĂ© stanovisko Ĺˇkoly.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost logopedickĂ© tradice se stala symbolem cĂ­levÄ›domĂ©ho pĹ™ekonĂˇvĂˇnĂ­ Ĺ™eÄŤovĂ˝ch obtĂ­ĹľĂ­ a bĂ˝vĂˇ uvĂˇdÄ›na jako historickĂ˝ pĹ™Ă­klad intenzivnĂ­ho nĂˇcviku Ĺ™eÄŤi?"
options:
  A: "AristotelĂ©s"
  B: "Hippokrates"
  C: "IsokratĂ©s"
  D: "DĂ©mosthenĂ©s"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "DĂ©mosthenĂ©s"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "historickĂ˝ symbol intenzivnĂ­ho nĂˇcviku Ĺ™eÄŤi"
conceptFamily: "dÄ›jiny logopedie a historickĂ© precedenty"
distinctionAxis: "DĂ©mosthenĂ©s jako symbol Ĺ™eÄŤovĂ©ho trĂ©ninku vs jinĂ­ antiÄŤtĂ­ autoĹ™i"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "antiÄŤtĂ­ myslitelĂ© Ă— historickĂ˝ pĹ™Ă­klad logopedie"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ DĂ©mosthenĂ©s"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "historickĂ˝ symbol pĹ™ekonĂˇvĂˇnĂ­ Ĺ™eÄŤovĂ˝ch obtĂ­ĹľĂ­"
personalityAnchor: "DĂ©mosthenĂ©s"
metadataSourceRef: "B10Q20"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: DĂ©mosthenĂ©s jako symbol Ĺ™eÄŤovĂ©ho trĂ©ninku vs jinĂ­ antiÄŤtĂ­ autoĹ™i.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Je-li ĹľĂˇk v pĂ©ÄŤi odbornĂ©ho lĂ©kaĹ™e nebo klinickĂ©ho psychologa, Ĺ PZ pĹ™i stanovovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
options:
  A: "pĹ™ihlĂ­ĹľĂ­ ke klinickĂ© diagnĂłze a lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m odbornĂ©ho lĂ©kaĹ™e nebo klinickĂ©ho psychologa"
  B: "pĹ™ihlĂ­ĹľĂ­ pouze ke klinickĂ© diagnĂłze, nikoli vĹˇak k lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m stanovenĂ˝m odbornĂ­kem"
  C: "pĹ™ebĂ­rĂˇ jejich zĂˇvÄ›ry v plnĂ©m rozsahu bez moĹľnosti odbornĂ©ho posouzenĂ­ vzdÄ›lĂˇvacĂ­ situace"
  D: "pĹ™ihlĂ­ĹľĂ­ k jejich zĂˇvÄ›rĹŻm jen tehdy, pokud s nimi pĹ™edem pĂ­semnÄ› souhlasĂ­ Ĺ™editel Ĺˇkoly"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "pĹ™ihlĂ­ĹľĂ­ ke klinickĂ© diagnĂłze a lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m odbornĂ©ho lĂ©kaĹ™e nebo klinickĂ©ho psychologa"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤovĂˇnĂ­ PO"
subtopic: "pĹ™ihlĂ­ĹľenĂ­ ke klinickĂ© diagnĂłze a lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m"
conceptFamily: "poradenskĂ˝ proces a odbornĂ© podklady"
distinctionAxis: "pĹ™ihlĂ­ĹľenĂ­ k diagnĂłze i lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m vs mechanickĂ© pĹ™ebĂ­rĂˇnĂ­ zĂˇvÄ›rĹŻ nebo jejich ignorace"
questionTypeSuggested: "legislation-process-discrimination"
distractorTypeSuggested: "near-procedure"
trapPatternSeed: "pĹ™ihlĂ­ĹľenĂ­ Ă— pĹ™ebĂ­rĂˇnĂ­ Ă— ignorovĂˇnĂ­ klinickĂ˝ch podkladĹŻ"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­ / zdravotnictvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ podklady pro doporuÄŤenĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q21"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: pĹ™ihlĂ­ĹľenĂ­ k diagnĂłze i lĂ©ÄŤebnĂ˝m opatĹ™enĂ­m vs mechanickĂ© pĹ™ebĂ­rĂˇnĂ­ zĂˇvÄ›rĹŻ nebo jejich ignorace.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo bĂ˝vĂˇ oznaÄŤovĂˇn za zakladatele vÄ›decky pojatĂ© logopedie v nÄ›meckĂ©m prostĹ™edĂ­ a systematicky se vÄ›noval poruchĂˇm hlasu a Ĺ™eÄŤi?"
options:
  A: "Richard Luchsinger"
  B: "Hermann Gutzmann"
  C: "Charles Van Riper"
  D: "MiloĹˇ SovĂˇk"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Hermann Gutzmann"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "zakladatel vÄ›decky pojatĂ© logopedie v nÄ›meckĂ©m prostĹ™edĂ­"
conceptFamily: "dÄ›jiny logopedie a foniatrie"
distinctionAxis: "vÄ›deckĂˇ logopedie a poruchy hlasu/Ĺ™eÄŤi vs jinĂ­ pozdÄ›jĹˇĂ­ autoĹ™i"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "zakladatel nÄ›meckĂ© logopedie Ă— modernĂ­ autoĹ™i"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Hermann Gutzmann"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "vÄ›decky pojatĂˇ logopedie"
personalityAnchor: "Hermann Gutzmann"
metadataSourceRef: "B10Q22"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: vÄ›deckĂˇ logopedie a poruchy hlasu/Ĺ™eÄŤi vs jinĂ­ pozdÄ›jĹˇĂ­ autoĹ™i.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ dokument mĂˇ obsahovat pouÄŤenĂ­ o moĹľnosti podat ĹľĂˇdost o revizi doporuÄŤenĂ­ podle Â§ 16b ĹˇkolskĂ©ho zĂˇkona"
options:
  A: "plĂˇn pedagogickĂ© podpory, pokud pĹ™edchĂˇzel vydĂˇnĂ­ doporuÄŤenĂ­ Ĺ PZ"
  B: "informovanĂ˝ souhlas zletilĂ©ho ĹľĂˇka nebo zĂˇkonnĂ©ho zĂˇstupce ĹľĂˇka"
  C: "doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
  D: "zprĂˇva z vyĹˇetĹ™enĂ­ ĹľĂˇka, nikoli doporuÄŤenĂ­ pro Ĺˇkolu"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­"
subtopic: "pouÄŤenĂ­ o moĹľnosti podat revizi"
conceptFamily: "revize doporuÄŤenĂ­ a obsah dokumentĹŻ"
distinctionAxis: "doporuÄŤenĂ­ vs zprĂˇva vs informovanĂ˝ souhlas vs PLPP"
questionTypeSuggested: "document-function-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "funkce dokumentu"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. Â§ 16b"
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ doporuÄŤenĂ­"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q23"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: doporuÄŤenĂ­ vs zprĂˇva vs informovanĂ˝ souhlas vs PLPP.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost vedla univerzitnĂ­ hlasovou a Ĺ™eÄŤovou kliniku, spoluvytvĂˇĹ™ela ÄŤasopis Folia Phoniatrica a pĹŻsobila jako prezident mezinĂˇrodnĂ­ asociace logopedĹŻ a foniatrĹŻ?"
options:
  A: "Hermann Gutzmann"
  B: "Miloslav Seeman"
  C: "Eva Ĺ kodovĂˇ"
  D: "Richard Luchsinger"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Richard Luchsinger"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "Seeman, klinika a mezinĂˇrodnĂ­ foniatrie"
conceptFamily: "dÄ›jiny ÄŤeskĂ© logopedie a foniatrie"
distinctionAxis: "klinickĂ© a mezinĂˇrodnĂ­ foniatrickĂ© pĹŻsobenĂ­ vs jinĂ© logopedickĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Seeman Ă— Gutzmann Ă— Luchsinger"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Miloslav Seeman"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "ÄŤeskĂˇ foniatrickĂˇ a logopedickĂˇ tradice"
personalityAnchor: "Miloslav Seeman"
metadataSourceRef: "B10Q24"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: klinickĂ© a mezinĂˇrodnĂ­ foniatrickĂ© pĹŻsobenĂ­ vs jinĂ© logopedickĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ dokument mĂˇ obsahovat nĂˇvrh postupu pĹ™i poskytovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
options:
  A: "zĂˇznam Ĺˇkoly o vyhodnocenĂ­ poskytovanĂ˝ch podpĹŻrnĂ˝ch opatĹ™enĂ­ po uplynutĂ­ jejich ĂşÄŤinnosti"
  B: "zprĂˇva z vyĹˇetĹ™enĂ­, protoĹľe popisuje prĹŻbÄ›h a vĂ˝sledky diagnostiky ĹľĂˇka"
  C: "informovanĂ˝ souhlas, protoĹľe bez nÄ›ho nelze opatĹ™enĂ­ vĹŻbec konkretizovat"
  D: "doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­"
subtopic: "nĂˇvrh postupu pĹ™i poskytovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
conceptFamily: "obsah doporuÄŤenĂ­ a obsah zprĂˇvy"
distinctionAxis: "doporuÄŤenĂ­ jako dokument pro Ĺˇkolu vs zprĂˇva jako diagnostickĂ˝ vĂ˝stup"
questionTypeSuggested: "document-function-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "zprĂˇva Ă— doporuÄŤenĂ­ Ă— informovanĂ˝ souhlas"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ doporuÄŤenĂ­ a jeho obsah"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. â€“ vĂ˝stupy poradenskĂ© sluĹľby"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q25"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: doporuÄŤenĂ­ jako dokument pro Ĺˇkolu vs zprĂˇva jako diagnostickĂ˝ vĂ˝stup.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo je autorem prvnĂ­ ÄŤeskĂ© uÄŤebnice logopedie Vady Ĺ™eÄŤi z roku 1924?"
options:
  A: "Zikmund Janke"
  B: "Rudolf KratochvĂ­l"
  C: "Bohuslav BlĂˇha"
  D: "AntonĂ­n Haveroch"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Rudolf KratochvĂ­l"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "prvnĂ­ ÄŤeskĂˇ uÄŤebnice logopedie"
conceptFamily: "dÄ›jiny ÄŤeskĂ© logopedie"
distinctionAxis: "autor prvnĂ­ ÄŤeskĂ© uÄŤebnice logopedie vs dalĹˇĂ­ ÄŤeskĂ© logopedickĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "ÄŤasnĂ˝ autor uÄŤebnice Ă— pozdÄ›jĹˇĂ­ rozvoj logopedie"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Rudolf KratochvĂ­l"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "prvnĂ­ ÄŤeskĂˇ uÄŤebnice logopedie"
personalityAnchor: "Rudolf KratochvĂ­l"
metadataSourceRef: "B10Q26"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: autor prvnĂ­ ÄŤeskĂ© uÄŤebnice logopedie vs dalĹˇĂ­ ÄŤeskĂ© logopedickĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ĺ kolskĂ© poradenskĂ© zaĹ™Ă­zenĂ­ vyhodnocuje poskytovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­ obecnÄ›"
options:
  A: "vĹľdy jednou roÄŤnÄ›, bez vĂ˝jimky pro personĂˇlnĂ­ podpĹŻrnĂˇ opatĹ™enĂ­"
  B: "vĹľdy po 6 mÄ›sĂ­cĂ­ch od vydĂˇnĂ­ doporuÄŤenĂ­, nenĂ­-li ve zprĂˇvÄ› uvedeno jinak"
  C: "ve lhĹŻtÄ› pĹ™imÄ›Ĺ™enĂ© povaze speciĂˇlnĂ­ch vzdÄ›lĂˇvacĂ­ch potĹ™eb a dobÄ› platnosti doporuÄŤenĂ­"
  D: "vĹľdy po 3 mÄ›sĂ­cĂ­ch od zahĂˇjenĂ­ poskytovĂˇnĂ­, bez ohledu na povahu potĹ™eb ĹľĂˇka"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "ve lhĹŻtÄ› pĹ™imÄ›Ĺ™enĂ© povaze speciĂˇlnĂ­ch vzdÄ›lĂˇvacĂ­ch potĹ™eb a dobÄ› platnosti doporuÄŤenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / vyhodnocovĂˇnĂ­ PO"
subtopic: "obecnĂˇ lhĹŻta vyhodnocovĂˇnĂ­ poskytovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
conceptFamily: "vyhodnocovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
distinctionAxis: "lhĹŻta pĹ™imÄ›Ĺ™enĂˇ povaze potĹ™eb a dobÄ› platnosti doporuÄŤenĂ­ vs pevnĂˇ univerzĂˇlnĂ­ lhĹŻta"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-timing"
trapPatternSeed: "pevnĂˇ lhĹŻta Ă— pĹ™imÄ›Ĺ™enĂˇ lhĹŻta"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 16 odst. 4"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q27"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: lhĹŻta pĹ™imÄ›Ĺ™enĂˇ povaze potĹ™eb a dobÄ› platnosti doporuÄŤenĂ­ vs pevnĂˇ univerzĂˇlnĂ­ lhĹŻta.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ ÄŤeskĂ˝ prĹŻkopnĂ­k logopedie je spojen zejmĂ©na s afĂˇziemi, sloĹľitÄ›jĹˇĂ­mi poruchami Ĺ™eÄŤi a takĂ© s pojmem amerisie?"
options:
  A: "MiloĹˇ SovĂˇk"
  B: "Karel Neubauer"
  C: "Miloslav Seeman"
  D: "AntonĂ­n Haveroch"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "AntonĂ­n Haveroch"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "afĂˇzie, sloĹľitĂ© poruchy Ĺ™eÄŤi a pojem amerisie"
conceptFamily: "dÄ›jiny ÄŤeskĂ© logopedie"
distinctionAxis: "specifickĂ© odbornĂ© zamÄ›Ĺ™enĂ­ autora vs obecnÄ›jĹˇĂ­ postavenĂ­ jinĂ˝ch logopedĹŻ"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "afĂˇzie Ă— terĂ©nnĂ­ logopedie Ă— novodobĂˇ klinika"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ AntonĂ­n Haveroch"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "ÄŤeskĂˇ tradice afaziologie a logopedie"
personalityAnchor: "AntonĂ­n Haveroch"
metadataSourceRef: "B10Q28"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: specifickĂ© odbornĂ© zamÄ›Ĺ™enĂ­ autora vs obecnÄ›jĹˇĂ­ postavenĂ­ jinĂ˝ch logopedĹŻ.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "NejpozdÄ›ji do 1 roku od vydĂˇnĂ­ doporuÄŤenĂ­ se vyhodnocuje poskytovĂˇnĂ­"
options:
  A: "asistenta pedagoga, dalĹˇĂ­ho pedagogickĂ©ho pracovnĂ­ka, tlumoÄŤnĂ­ka ÄŤeskĂ©ho znakovĂ©ho jazyka, pĹ™episovatele pro neslyĹˇĂ­cĂ­ a obdobnĂ˝ch podpĹŻrnĂ˝ch osob"
  B: "pouze tÄ›ch podpĹŻrnĂ˝ch opatĹ™enĂ­, kterĂˇ byla doporuÄŤena na dobu delĹˇĂ­ neĹľ 12 mÄ›sĂ­cĹŻ"
  C: "vĹˇech podpĹŻrnĂ˝ch opatĹ™enĂ­ s normovanou finanÄŤnĂ­ nĂˇroÄŤnostĂ­ bez ohledu na jejich druh"
  D: "pouze asistenta pedagoga a dalĹˇĂ­ho pedagogickĂ©ho pracovnĂ­ka, nikoli vĹˇak tlumoÄŤnĂ­ka nebo pĹ™episovatele"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "asistenta pedagoga, dalĹˇĂ­ho pedagogickĂ©ho pracovnĂ­ka, tlumoÄŤnĂ­ka ÄŤeskĂ©ho znakovĂ©ho jazyka, pĹ™episovatele pro neslyĹˇĂ­cĂ­ a obdobnĂ˝ch podpĹŻrnĂ˝ch osob"
discipline: "ĹˇkolskĂˇ legislativa / vyhodnocovĂˇnĂ­ PO"
subtopic: "jednoroÄŤnĂ­ vyhodnocenĂ­ personĂˇlnĂ­ch podpĹŻrnĂ˝ch opatĹ™enĂ­"
conceptFamily: "vyhodnocovĂˇnĂ­ podpĹŻrnĂ˝ch opatĹ™enĂ­"
distinctionAxis: "specifickĂˇ personĂˇlnĂ­ opatĹ™enĂ­ vs vĹˇechna opatĹ™enĂ­ obecnÄ›"
questionTypeSuggested: "legislation-timing-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "specifickĂˇ personĂˇlnĂ­ opatĹ™enĂ­ Ă— vĹˇechna opatĹ™enĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. Â§ 16 odst. 4"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q29"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: specifickĂˇ personĂˇlnĂ­ opatĹ™enĂ­ vs vĹˇechna opatĹ™enĂ­ obecnÄ›.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo zaloĹľil LogopedickĂ˝ Ăşstav hlavnĂ­ho mÄ›sta Prahy, prosazoval terĂ©nnĂ­ pĂ©ÄŤi a vĂ˝znamnÄ› posĂ­lil postavenĂ­ logopedie jako samostatnĂ© disciplĂ­ny?"
options:
  A: "Karel Neubauer"
  B: "MiloĹˇ SovĂˇk"
  C: "Bohuslav BlĂˇha"
  D: "Miloslav Seeman"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "MiloĹˇ SovĂˇk"
discipline: "logopedie / dÄ›jiny oboru"
subtopic: "LogopedickĂ˝ Ăşstav hlavnĂ­ho mÄ›sta Prahy a terĂ©nnĂ­ pĂ©ÄŤe"
conceptFamily: "dÄ›jiny ÄŤeskĂ© logopedie"
distinctionAxis: "institucionĂˇlnĂ­ rozvoj logopedie vs jinĂ© odbornĂ© role ÄŤeskĂ˝ch logopedĹŻ"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "MiloĹˇ SovĂˇk Ă— Seeman Ă— pozdÄ›jĹˇĂ­ logopedi"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ MiloĹˇ SovĂˇk"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "institucionĂˇlnĂ­ posĂ­lenĂ­ ÄŤeskĂ© logopedie"
personalityAnchor: "MiloĹˇ SovĂˇk"
metadataSourceRef: "B10Q30"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: institucionĂˇlnĂ­ rozvoj logopedie vs jinĂ© odbornĂ© role ÄŤeskĂ˝ch logopedĹŻ.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Pokud ÄŤinnost Ĺˇkoly a ĹˇkolskĂ©ho zaĹ™Ă­zenĂ­ vykonĂˇvĂˇ jedna prĂˇvnickĂˇ osoba, jsou doporuÄŤenĂˇ opatĹ™enĂ­"
options:
  A: "uvedena v jednom doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
  B: "uvedena v jednom doporuÄŤenĂ­ pouze tehdy, jde-li o opatĹ™enĂ­ druhĂ©ho nebo tĹ™etĂ­ho stupnÄ›"
  C: "uvedena ve dvou doporuÄŤenĂ­ch, vĹľdy zvlĂˇĹˇĹĄ pro Ĺˇkolu a zvlĂˇĹˇĹĄ pro ĹˇkolskĂ© zaĹ™Ă­zenĂ­"
  D: "uvedena v tolika doporuÄŤenĂ­ch, kolik druhĹŻ podpĹŻrnĂ˝ch opatĹ™enĂ­ bylo doporuÄŤeno"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "uvedena v jednom doporuÄŤenĂ­ ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­"
subtopic: "jedna prĂˇvnickĂˇ osoba pro Ĺˇkolu a ĹˇkolskĂ© zaĹ™Ă­zenĂ­"
conceptFamily: "doporuÄŤenĂ­ a jejich organizaÄŤnĂ­ uspoĹ™ĂˇdĂˇnĂ­"
distinctionAxis: "jedno doporuÄŤenĂ­ vs oddÄ›lenĂˇ doporuÄŤenĂ­"
questionTypeSuggested: "document-structure-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedna prĂˇvnickĂˇ osoba Ă— dvÄ› entity"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ doporuÄŤenĂ­ pĹ™i jednĂ© prĂˇvnickĂ© osobÄ›"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q31"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: jedno doporuÄŤenĂ­ vs oddÄ›lenĂˇ doporuÄŤenĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ ranĂ˝ evropskĂ˝ prĹŻkopnĂ­k vĂ˝chovy neslyĹˇĂ­cĂ­ch bĂ˝vĂˇ spojovĂˇn s nejstarĹˇĂ­ liniĂ­ vĂ˝uky odezĂ­rĂˇnĂ­, psanĂ­ a artikulovanĂ© Ĺ™eÄŤi, kterĂˇ pĹ™edchĂˇzĂ­ pozdÄ›jĹˇĂ­m systematickĂ˝m metodĂˇm?"
options:
  A: "Juan Pablo Bonet"
  B: "Johann Konrad Amman"
  C: "Samuel Heinicke"
  D: "Pedro Ponce de LeĂłn"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Pedro Ponce de LeĂłn"
discipline: "surdopedie / dÄ›jiny oboru"
subtopic: "nejstarĹˇĂ­ linie odezĂ­rĂˇnĂ­, psanĂ­ a artikulovanĂ© Ĺ™eÄŤi"
conceptFamily: "dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ neslyĹˇĂ­cĂ­ch"
distinctionAxis: "ranĂ© pĹ™edsystematickĂ© poÄŤĂˇtky orĂˇlnĂ­ vĂ˝uky vs pozdÄ›jĹˇĂ­ systematiÄŤtÄ›jĹˇĂ­ autoĹ™i"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Ponce de LeĂłn Ă— Bonet Ă— Amman Ă— Heinicke"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Pedro Ponce de LeĂłn"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "ranĂ© poÄŤĂˇtky edukace neslyĹˇĂ­cĂ­ch"
personalityAnchor: "Pedro Ponce de LeĂłn"
metadataSourceRef: "B10Q32"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: ranĂ© pĹ™edsystematickĂ© poÄŤĂˇtky orĂˇlnĂ­ vĂ˝uky vs pozdÄ›jĹˇĂ­ systematiÄŤtÄ›jĹˇĂ­ autoĹ™i.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Pokud ÄŤinnost Ĺˇkoly a ĹˇkolskĂ©ho zaĹ™Ă­zenĂ­ vykonĂˇvajĂ­ rĹŻznĂ© prĂˇvnickĂ© osoby, pak Ĺ PZ"
options:
  A: "vydĂˇvĂˇ samostatnĂ© doporuÄŤenĂ­ pro vzdÄ›lĂˇvĂˇnĂ­ ĹľĂˇka ve ĹˇkolskĂ©m zaĹ™Ă­zenĂ­"
  B: "nevydĂˇvĂˇ dalĹˇĂ­ doporuÄŤenĂ­, pokud jiĹľ bylo vydĂˇno doporuÄŤenĂ­ pro Ĺˇkolu"
  C: "vydĂˇvĂˇ samostatnĂ© doporuÄŤenĂ­ jen v pĹ™Ă­padÄ›, Ĺľe jde o pĂˇtĂ˝ stupeĹ podpory"
  D: "vydĂˇvĂˇ spoleÄŤnĂ© doporuÄŤenĂ­, ale s oddÄ›lenou pĹ™Ă­lohou pro ĹˇkolskĂ© zaĹ™Ă­zenĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "vydĂˇvĂˇ samostatnĂ© doporuÄŤenĂ­ pro vzdÄ›lĂˇvĂˇnĂ­ ĹľĂˇka ve ĹˇkolskĂ©m zaĹ™Ă­zenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / doporuÄŤenĂ­"
subtopic: "rĹŻznĂ© prĂˇvnickĂ© osoby pro Ĺˇkolu a ĹˇkolskĂ© zaĹ™Ă­zenĂ­"
conceptFamily: "doporuÄŤenĂ­ a jejich organizaÄŤnĂ­ uspoĹ™ĂˇdĂˇnĂ­"
distinctionAxis: "oddÄ›lenĂˇ doporuÄŤenĂ­ pro oddÄ›lenĂ© prĂˇvnickĂ© osoby vs jednotnĂ© doporuÄŤenĂ­"
questionTypeSuggested: "document-structure-discrimination"
distractorTypeSuggested: "document-confusion"
trapPatternSeed: "jedna vs vĂ­ce prĂˇvnickĂ˝ch osob"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ doporuÄŤenĂ­ pĹ™i vĂ­ce prĂˇvnickĂ˝ch osobĂˇch"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q33"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: oddÄ›lenĂˇ doporuÄŤenĂ­ pro oddÄ›lenĂ© prĂˇvnickĂ© osoby vs jednotnĂ© doporuÄŤenĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ ĹˇvĂ˝carskĂ˝ lĂ©kaĹ™ pĹŻsobĂ­cĂ­ v Nizozemsku je povaĹľovĂˇn za zakladatele orĂˇlnĂ­ metody a zdĹŻrazĹoval odezĂ­rĂˇnĂ­ i hlasovou produkci?"
options:
  A: "Thomas Braidwood"
  B: "Johann Konrad Amman"
  C: "Charles-Michel de lâ€™Ă‰pĂ©e"
  D: "Samuel Heinicke"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Johann Konrad Amman"
discipline: "surdopedie / dÄ›jiny oboru"
subtopic: "zakladatel orĂˇlnĂ­ metody"
conceptFamily: "dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ neslyĹˇĂ­cĂ­ch"
distinctionAxis: "Ammanova orĂˇlnĂ­ linie vs jinĂ© nĂˇrodnĂ­ tradice"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Amman Ă— Heinicke Ă— de lâ€™Ă‰pĂ©e"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Johann Konrad Amman"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "poÄŤĂˇtky orĂˇlnĂ­ metody"
personalityAnchor: "Johann Konrad Amman"
metadataSourceRef: "B10Q34"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: Ammanova orĂˇlnĂ­ linie vs jinĂ© nĂˇrodnĂ­ tradice.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ve Ĺˇkole, tĹ™Ă­dÄ›, oddÄ›lenĂ­ nebo studijnĂ­ skupinÄ› zĹ™Ă­zenĂ© podle Â§ 16 odst. 9 zĂˇkona nelze standardnÄ› poskytovat"
options:
  A: "poradenskou pomoc Ĺˇkoly a ĹˇkolskĂ©ho poradenskĂ©ho zaĹ™Ă­zenĂ­"
  B: "Ăşpravu metod vĂ˝uky a individualizaci vzdÄ›lĂˇvacĂ­ho procesu"
  C: "pĹ™edmÄ›t speciĂˇlnÄ› pedagogickĂ© pĂ©ÄŤe, nenĂ­-li dĂˇn jinĂ˝ druh znevĂ˝hodnÄ›nĂ­ neĹľ ten, pro kterĂ˝ byla tato forma zĹ™Ă­zena"
  D: "prĹŻbÄ›ĹľnĂ© a formativnĂ­ hodnocenĂ­ pĹ™izpĹŻsobenĂ© vzdÄ›lĂˇvacĂ­m potĹ™ebĂˇm ĹľĂˇka"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "pĹ™edmÄ›t speciĂˇlnÄ› pedagogickĂ© pĂ©ÄŤe, nenĂ­-li dĂˇn jinĂ˝ druh znevĂ˝hodnÄ›nĂ­ neĹľ ten, pro kterĂ˝ byla tato forma zĹ™Ă­zena"
discipline: "ĹˇkolskĂˇ legislativa / Â§16 odst. 9"
subtopic: "co nelze standardnÄ› poskytovat ve speciĂˇlnĂ­ tĹ™Ă­dÄ› nebo skupinÄ›"
conceptFamily: "vzdÄ›lĂˇvĂˇnĂ­ podle Â§ 16 odst. 9 zĂˇkona"
distinctionAxis: "opatĹ™enĂ­ sluÄŤitelnĂˇ vs nesluÄŤitelnĂˇ se speciĂˇlnĂ­ tĹ™Ă­dou/skupinou"
questionTypeSuggested: "legislation-compatibility-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "co je jiĹľ obsaĹľeno v samotnĂ©m organizaÄŤnĂ­m opatĹ™enĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1 a pravidla PO pro Â§ 16 odst. 9"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q35"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: opatĹ™enĂ­ sluÄŤitelnĂˇ vs nesluÄŤitelnĂˇ se speciĂˇlnĂ­ tĹ™Ă­dou/skupinou.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo je povaĹľovĂˇn za otce francouzskĂ© tradice vzdÄ›lĂˇvĂˇnĂ­ neslyĹˇĂ­cĂ­ch, zaloĹľil veĹ™ejnĂ˝ Ăşstav pro neslyĹˇĂ­cĂ­ v PaĹ™Ă­Ĺľi a rozvĂ­jel znakovĂ© a manuĂˇlnĂ­ vyuÄŤovĂˇnĂ­?"
options:
  A: "Samuel Heinicke"
  B: "AbbĂ© Sicard"
  C: "Laurent Clerc"
  D: "Charles-Michel de lâ€™Ă‰pĂ©e"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Charles-Michel de lâ€™Ă‰pĂ©e"
discipline: "surdopedie / dÄ›jiny oboru"
subtopic: "otec francouzskĂ© znakovĂ© tradice"
conceptFamily: "dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ neslyĹˇĂ­cĂ­ch"
distinctionAxis: "francouzskĂˇ manuĂˇlnĂ­ tradice vs nÄ›meckĂˇ orĂˇlnĂ­ linie a jejĂ­ pokraÄŤovatelĂ©"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "de lâ€™Ă‰pĂ©e Ă— Sicard Ă— Clerc"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Charles-Michel de lâ€™Ă‰pĂ©e"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "francouzskĂˇ znakovĂˇ tradice"
personalityAnchor: "Charles-Michel de lâ€™Ă‰pĂ©e"
metadataSourceRef: "B10Q36"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: francouzskĂˇ manuĂˇlnĂ­ tradice vs nÄ›meckĂˇ orĂˇlnĂ­ linie a jejĂ­ pokraÄŤovatelĂ©.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "PĹ™i distanÄŤnĂ­ch prvcĂ­ch kombinovanĂ© vĂ˝uky mimo mĂ­sto vzdÄ›lĂˇvĂˇnĂ­ se podpĹŻrnĂˇ opatĹ™enĂ­ podle Â§ 16 odst. 2 pĂ­sm. g) a h)"
options:
  A: "neposkytujĂ­, s vĂ˝jimkou tlumoÄŤnĂ­ka ÄŤeskĂ©ho znakovĂ©ho jazyka a pĹ™episovatele pro neslyĹˇĂ­cĂ­"
  B: "poskytujĂ­ bez omezenĂ­, pokud je jejich rozsah vĂ˝slovnÄ› uveden v doporuÄŤenĂ­ Ĺ PZ"
  C: "poskytujĂ­ pouze ve ÄŤtvrtĂ©m a pĂˇtĂ©m stupni podpory pĹ™i dlouhodobĂ© nepĹ™Ă­tomnosti ĹľĂˇka"
  D: "neposkytujĂ­ bez jakĂ©koli vĂ˝jimky, protoĹľe se vztahujĂ­ vĂ˝luÄŤnÄ› na prezenÄŤnĂ­ vĂ˝uku"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "neposkytujĂ­, s vĂ˝jimkou tlumoÄŤnĂ­ka ÄŤeskĂ©ho znakovĂ©ho jazyka a pĹ™episovatele pro neslyĹˇĂ­cĂ­"
discipline: "ĹˇkolskĂˇ legislativa / distanÄŤnĂ­ prvky vĂ˝uky"
subtopic: "neposkytovĂˇnĂ­ PO podle Â§ 16 odst. 2 pĂ­sm. g) a h) s vĂ˝jimkami"
conceptFamily: "podpĹŻrnĂˇ opatĹ™enĂ­ pĹ™i kombinovanĂ© a distanÄŤnĂ­ vĂ˝uce"
distinctionAxis: "vĂ˝jimka pro tlumoÄŤnĂ­ka ÄŚZJ a pĹ™episovatele vs absolutnĂ­ zĂˇkaz ÄŤi plnĂ© poskytovĂˇnĂ­"
questionTypeSuggested: "legislation-exception-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "zĂˇkaz s vĂ˝jimkou Ă— absolutnĂ­ zĂˇkaz Ă— plnĂ© poskytovĂˇnĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. Â§ 16 â€“ aktuĂˇlnĂ­ znÄ›nĂ­"
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ nĂˇvaznĂˇ Ăşprava"
secondarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q37"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: vĂ˝jimka pro tlumoÄŤnĂ­ka ÄŚZJ a pĹ™episovatele vs absolutnĂ­ zĂˇkaz ÄŤi plnĂ© poskytovĂˇnĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost se stala hlavnĂ­ protivĂˇhou francouzskĂ© znakovĂ© tradice tĂ­m, Ĺľe rozvĂ­jela nÄ›meckou orĂˇlnĂ­ metodu a zdĹŻrazĹovala vĂ˝uku Ĺ™eÄŤi a odezĂ­rĂˇnĂ­?"
options:
  A: "Johann Konrad Amman"
  B: "Samuel Heinicke"
  C: "Thomas Braidwood"
  D: "Thomas Hopkins Gallaudet"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Samuel Heinicke"
discipline: "surdopedie / dÄ›jiny oboru"
subtopic: "Heinicke jako protivĂˇha francouzskĂ© znakovĂ© tradice"
conceptFamily: "dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ neslyĹˇĂ­cĂ­ch"
distinctionAxis: "nÄ›meckĂˇ orĂˇlnĂ­ metoda vs francouzskĂˇ manuĂˇlnĂ­ tradice"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Amman Ă— Heinicke Ă— Braidwood"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Samuel Heinicke"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "nÄ›meckĂˇ orĂˇlnĂ­ tradice"
personalityAnchor: "Samuel Heinicke"
metadataSourceRef: "B10Q38"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: nÄ›meckĂˇ orĂˇlnĂ­ metoda vs francouzskĂˇ manuĂˇlnĂ­ tradice.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ve tĹ™etĂ­m stupni podpory mĹŻĹľe bĂ˝t asistent pedagoga v nÄ›kterĂ˝ch variantĂˇch nastaven tak, Ĺľe"
options:
  A: "je pĹ™Ă­tomen pouze pĹ™i nepedagogickĂ˝ch ÄŤinnostech a nevstupuje do pĹ™Ă­mĂ© vĂ˝uky ĹľĂˇka"
  B: "mĹŻĹľe bĂ˝t vyuĹľĂ­vĂˇn i pro dalĹˇĂ­ ĹľĂˇky, ale pouze tehdy, majĂ­-li stejnĂ˝ druh znevĂ˝hodnÄ›nĂ­"
  C: "nemusĂ­ bĂ˝t pĹ™Ă­tomen po celou dobu vyuÄŤovĂˇnĂ­ a mĹŻĹľe bĂ˝t vyuĹľĂ­vĂˇn i pro dalĹˇĂ­ ĹľĂˇky s obdobnou potĹ™ebou"
  D: "je pĹ™Ă­tomen po celou dobu vyuÄŤovĂˇnĂ­ a pracuje vĂ˝hradnÄ› s jednĂ­m konkrĂ©tnĂ­m ĹľĂˇkem"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "nemusĂ­ bĂ˝t pĹ™Ă­tomen po celou dobu vyuÄŤovĂˇnĂ­ a mĹŻĹľe bĂ˝t vyuĹľĂ­vĂˇn i pro dalĹˇĂ­ ĹľĂˇky s obdobnou potĹ™ebou"
discipline: "ĹˇkolskĂˇ legislativa / asistent pedagoga"
subtopic: "varianty nastavenĂ­ asistenta pedagoga ve 3. stupni"
conceptFamily: "personĂˇlnĂ­ podpĹŻrnĂˇ opatĹ™enĂ­"
distinctionAxis: "sdĂ­lenĂ˝ a ÄŤasovÄ› omezenĂ˝ AP vs plnÄ› individuĂˇlnĂ­ celodennĂ­ pĹ™Ă­tomnost"
questionTypeSuggested: "legislation-support-variant-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "sdĂ­lenĂˇ podpora Ă— vĂ˝hradnĂ­ podpora"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1, 3. stupeĹ podpory"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q39"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: sdĂ­lenĂ˝ a ÄŤasovÄ› omezenĂ˝ AP vs plnÄ› individuĂˇlnĂ­ celodennĂ­ pĹ™Ă­tomnost.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo zaloĹľil v PaĹ™Ă­Ĺľi roku 1784 prvnĂ­ vĂ˝chovnÄ›-vzdÄ›lĂˇvacĂ­ Ăşstav pro nevidomĂ© na svÄ›tÄ› a pracoval s reliĂ©fnĂ­m tiskem?"
options:
  A: "Johann Wilhelm Klein"
  B: "Denis Diderot"
  C: "Louis Braille"
  D: "Valentin HaĂĽy"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Valentin HaĂĽy"
discipline: "tyflopedie / dÄ›jiny oboru"
subtopic: "prvnĂ­ Ăşstav pro nevidomĂ© v PaĹ™Ă­Ĺľi"
conceptFamily: "dÄ›jiny vzdÄ›lĂˇvĂˇnĂ­ osob se zrakovĂ˝m postiĹľenĂ­m"
distinctionAxis: "zakladatel prvnĂ­ho Ăşstavu pro nevidomĂ© vs pozdÄ›jĹˇĂ­ vĂ˝voj pĂ­sma a edukace"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "HaĂĽy Ă— Braille Ă— Diderot Ă— Klein"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Valentin HaĂĽy"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "poÄŤĂˇtky institucionĂˇlnĂ­ tyflopedie"
personalityAnchor: "Valentin HaĂĽy"
metadataSourceRef: "B10Q40"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: zakladatel prvnĂ­ho Ăşstavu pro nevidomĂ© vs pozdÄ›jĹˇĂ­ vĂ˝voj pĂ­sma a edukace.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ve tĹ™etĂ­m stupni podpĹŻrnĂ˝ch opatĹ™enĂ­ je moĹľnĂ© prodlouĹľit dĂ©lku vzdÄ›lĂˇvĂˇnĂ­"
options:
  A: "nejvĂ˝Ĺˇe o 1 rok"
  B: "nejvĂ˝Ĺˇe o 2 roky u vĹˇech ĹľĂˇkĹŻ bez rozdĂ­lu stupnÄ› vzdÄ›lĂˇvĂˇnĂ­"
  C: "nejvĂ˝Ĺˇe o 2 roky pouze u ĹľĂˇkĹŻ vzdÄ›lĂˇvanĂ˝ch podle Â§ 16 odst. 9 zĂˇkona"
  D: "nejvĂ˝Ĺˇe o 1 rok pouze ve stĹ™ednĂ­m a vyĹˇĹˇĂ­m odbornĂ©m vzdÄ›lĂˇvĂˇnĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "nejvĂ˝Ĺˇe o 1 rok"
discipline: "ĹˇkolskĂˇ legislativa / dĂ©lka vzdÄ›lĂˇvĂˇnĂ­"
subtopic: "prodlouĹľenĂ­ dĂ©lky vzdÄ›lĂˇvĂˇnĂ­ ve 3. stupni"
conceptFamily: "stupnÄ› podpory a Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­"
distinctionAxis: "nejvĂ˝Ĺˇe o 1 rok vs jinĂ© varianty prodlouĹľenĂ­"
questionTypeSuggested: "legislation-limit-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "1 rok Ă— 2 roky Ă— omezenĂ­ podle typu Ĺˇkoly"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1, 3. stupeĹ podpory"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q41"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: nejvĂ˝Ĺˇe o 1 rok vs jinĂ© varianty prodlouĹľenĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ˝ autor vyvinul bodovĂ© noÄŤnĂ­ pĂ­smo, z nÄ›hoĹľ Louis Braille pozdÄ›ji vyĹˇel pĹ™i tvorbÄ› vlastnĂ­ soustavy?"
options:
  A: "James Gall"
  B: "Josef Julius Barbier"
  C: "William Moon"
  D: "Thomas Mark Lucas"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Josef Julius Barbier"
discipline: "tyflopedie / dÄ›jiny pĂ­sma"
subtopic: "bodovĂ© noÄŤnĂ­ pĂ­smo jako pĹ™edchĹŻdce Braillova pĂ­sma"
conceptFamily: "dÄ›jiny komunikaÄŤnĂ­ch systĂ©mĹŻ pro nevidomĂ©"
distinctionAxis: "Barbierovo noÄŤnĂ­ pĂ­smo vs jinĂ© reliĂ©fnĂ­ soustavy"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Barbier Ă— Gall Ă— Moon Ă— Lucas"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Josef Julius Barbier"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "noÄŤnĂ­ pĂ­smo jako pĹ™edstupeĹ Braillovy soustavy"
personalityAnchor: "Josef Julius Barbier"
metadataSourceRef: "B10Q42"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: Barbierovo noÄŤnĂ­ pĂ­smo vs jinĂ© reliĂ©fnĂ­ soustavy.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Ve ÄŤtvrtĂ©m stupni podpĹŻrnĂ˝ch opatĹ™enĂ­ lze u ĹľĂˇkĹŻ uvedenĂ˝ch v Â§ 16 odst. 9 zĂˇkona prodlouĹľit dĂ©lku vzdÄ›lĂˇvĂˇnĂ­"
options:
  A: "nejvĂ˝Ĺˇe o 3 roky, jde-li o ĹľĂˇka vzdÄ›lĂˇvanĂ©ho ve speciĂˇlnĂ­ tĹ™Ă­dÄ›"
  B: "nelze prodluĹľovat dĂ©lku vzdÄ›lĂˇvĂˇnĂ­, ale jen mÄ›nit organizaci vĂ˝uky"
  C: "nejvĂ˝Ĺˇe o 2 roky, jde-li o ĹľĂˇka uvedenĂ©ho v Â§ 16 odst. 9 zĂˇkona"
  D: "nejvĂ˝Ĺˇe o 1 rok bez ohledu na typ Ĺˇkoly nebo vzdÄ›lĂˇvacĂ­ho programu"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "nejvĂ˝Ĺˇe o 2 roky, jde-li o ĹľĂˇka uvedenĂ©ho v Â§ 16 odst. 9 zĂˇkona"
discipline: "ĹˇkolskĂˇ legislativa / dĂ©lka vzdÄ›lĂˇvĂˇnĂ­"
subtopic: "prodlouĹľenĂ­ dĂ©lky vzdÄ›lĂˇvĂˇnĂ­ ve 4. stupni u Â§ 16 odst. 9"
conceptFamily: "stupnÄ› podpory a Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­"
distinctionAxis: "nejvĂ˝Ĺˇe o 2 roky u ĹľĂˇkĹŻ podle Â§ 16 odst. 9 vs jinĂ© limity"
questionTypeSuggested: "legislation-limit-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "2 roky Ă— 3 roky Ă— 1 rok"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1, 4. stupeĹ podpory"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q43"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: nejvĂ˝Ĺˇe o 2 roky u ĹľĂˇkĹŻ podle Â§ 16 odst. 9 vs jinĂ© limity.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Kdo pĹ™epracoval BarbierĹŻv systĂ©m do ĹˇestibodovĂ© soustavy, kterĂˇ zĂˇsadnÄ› zmÄ›nila moĹľnosti samostatnĂ©ho ÄŤtenĂ­ a psanĂ­ nevidomĂ˝ch?"
options:
  A: "Samuel Gridley Howe"
  B: "Oskar Picht"
  C: "Johann Wilhelm Klein"
  D: "Louis Braille"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Louis Braille"
discipline: "tyflopedie / dÄ›jiny pĂ­sma"
subtopic: "Braillova ĹˇestibodovĂˇ soustava"
conceptFamily: "dÄ›jiny komunikaÄŤnĂ­ch systĂ©mĹŻ pro nevidomĂ©"
distinctionAxis: "pĹ™epracovĂˇnĂ­ Barbierova systĂ©mu do ĹˇestibodovĂ© soustavy vs jinĂ© tyflopedickĂ© osobnosti"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Braille Ă— Picht Ă— Klein Ă— Howe"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Louis Braille"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "vznik ĹˇestibodovĂ© soustavy"
personalityAnchor: "Louis Braille"
metadataSourceRef: "B10Q44"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: pĹ™epracovĂˇnĂ­ Barbierova systĂ©mu do ĹˇestibodovĂ© soustavy vs jinĂ© tyflopedickĂ© osobnosti.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂ© tvrzenĂ­ o vyĹˇĹˇĂ­m stupni podpĹŻrnĂ©ho opatĹ™enĂ­ je sprĂˇvnĂ©"
options:
  A: "VyĹˇĹˇĂ­ stupeĹ zahrnuje opatĹ™enĂ­ stejnĂ©ho druhu z niĹľĹˇĂ­ch stupĹĹŻ jen v pĹ™Ă­padech uvedenĂ˝ch v ÄŤĂˇsti A a u poradenskĂ© pomoci, metod ÄŤi hodnocenĂ­"
  B: "VyĹˇĹˇĂ­ stupeĹ vĹľdy automaticky zahrnuje vĹˇechna opatĹ™enĂ­ niĹľĹˇĂ­ch stupĹĹŻ bez vĂ˝jimky"
  C: "VyĹˇĹˇĂ­ stupeĹ zahrnuje niĹľĹˇĂ­ stupeĹ pouze u pomĹŻcek a personĂˇlnĂ­ch podpĹŻrnĂ˝ch opatĹ™enĂ­"
  D: "VyĹˇĹˇĂ­ stupeĹ zahrnuje niĹľĹˇĂ­ stupeĹ pouze u organizace vĂ˝uky a prodlouĹľenĂ­ vzdÄ›lĂˇvĂˇnĂ­"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "VyĹˇĹˇĂ­ stupeĹ zahrnuje opatĹ™enĂ­ stejnĂ©ho druhu z niĹľĹˇĂ­ch stupĹĹŻ jen v pĹ™Ă­padech uvedenĂ˝ch v ÄŤĂˇsti A a u poradenskĂ© pomoci, metod ÄŤi hodnocenĂ­"
discipline: "ĹˇkolskĂˇ legislativa / konstrukce vyĹˇĹˇĂ­ho stupnÄ› PO"
subtopic: "zahrnovĂˇnĂ­ opatĹ™enĂ­ stejnĂ©ho druhu z niĹľĹˇĂ­ch stupĹĹŻ"
conceptFamily: "stupnÄ› podpory a logika sklĂˇdĂˇnĂ­ opatĹ™enĂ­"
distinctionAxis: "ÄŤĂˇsteÄŤnĂ© zahrnutĂ­ niĹľĹˇĂ­ch stupĹĹŻ jen v urÄŤenĂ˝ch pĹ™Ă­padech vs automatickĂ© zahrnutĂ­ vĹˇeho"
questionTypeSuggested: "legislation-structure-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "automatickĂ© zahrnutĂ­ Ă— omezenĂ© zahrnutĂ­"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1, obecnĂˇ pravidla vyĹˇĹˇĂ­ho stupnÄ›"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q45"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: ÄŤĂˇsteÄŤnĂ© zahrnutĂ­ niĹľĹˇĂ­ch stupĹĹŻ jen v urÄŤenĂ˝ch pĹ™Ă­padech vs automatickĂ© zahrnutĂ­ vĹˇeho.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ osobnost je spojena s reliĂ©fnĂ­m pĂ­smem, kterĂ© se uplatnilo zejmĂ©na u osob, jeĹľ ztratily zrak pozdÄ›ji a obtĂ­ĹľnÄ› se uÄŤily Braillovo pĂ­smo?"
options:
  A: "James Gall"
  B: "William Moon"
  C: "Oskar Picht"
  D: "Louis Braille"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "William Moon"
discipline: "tyflopedie / dÄ›jiny pĂ­sma"
subtopic: "Moonovo reliĂ©fnĂ­ pĂ­smo pro pozdÄ›ji osleplĂ©"
conceptFamily: "dÄ›jiny komunikaÄŤnĂ­ch systĂ©mĹŻ pro nevidomĂ©"
distinctionAxis: "Moonovo pĂ­smo vs Braille a jinĂ© reliĂ©fnĂ­ systĂ©my"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Moon Ă— Braille Ă— Picht Ă— Gall"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ William Moon"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "alternativnĂ­ reliĂ©fnĂ­ pĂ­smo pro pozdÄ›ji osleplĂ©"
personalityAnchor: "William Moon"
metadataSourceRef: "B10Q46"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: Moonovo pĂ­smo vs Braille a jinĂ© reliĂ©fnĂ­ systĂ©my.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "PedagogickĂˇ intervence je podle aktuĂˇlnĂ­ prĂˇvnĂ­ Ăşpravy"
options:
  A: "typickĂ˝m podpĹŻrnĂ˝m opatĹ™enĂ­m druhĂ©ho stupnÄ› pĹ™i pĹ™echodu od PLPP k doporuÄŤenĂ­ Ĺ PZ"
  B: "zvlĂˇĹˇtnĂ­m podpĹŻrnĂ˝m opatĹ™enĂ­m mimo systĂ©m pÄ›ti stupĹĹŻ podpory"
  C: "podpĹŻrnĂ˝m opatĹ™enĂ­m prvnĂ­ho stupnÄ›"
  D: "samostatnou sluĹľbou, kterĂˇ se vyuĹľĂ­vĂˇ pouze pĹ™i soubÄ›hu IVP a asistenta pedagoga"
sourceCorrectLetter: "C"
sourceCorrectOptionText: "podpĹŻrnĂ˝m opatĹ™enĂ­m prvnĂ­ho stupnÄ›"
discipline: "ĹˇkolskĂˇ legislativa / pedagogickĂˇ intervence"
subtopic: "aktuĂˇlnĂ­ prĂˇvnĂ­ status pedagogickĂ© intervence"
conceptFamily: "podpĹŻrnĂˇ opatĹ™enĂ­ a ĹˇkolnĂ­ podpĹŻrnĂ© ÄŤinnosti"
distinctionAxis: "PO 1. stupnÄ› vs 2. stupeĹ nebo zvlĂˇĹˇtnĂ­ samostatnĂˇ sluĹľba"
questionTypeSuggested: "legislation-category-discrimination"
distractorTypeSuggested: "terminology-confusion"
trapPatternSeed: "pedagogickĂˇ intervence Ă— podpĹŻrnĂ© opatĹ™enĂ­ Ă— samostatnĂˇ sluĹľba"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ aktuĂˇlnĂ­ znÄ›nĂ­"
  - "VyhlĂˇĹˇka ÄŤ. 46/2025 Sb. â€“ novela vyhlĂˇĹˇky 72/2005"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q47"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: PO 1. stupnÄ› vs 2. stupeĹ nebo zvlĂˇĹˇtnĂ­ samostatnĂˇ sluĹľba.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ ÄŤeskĂˇ osobnost je spojena se zaklĂˇdĂˇnĂ­m ĂşstavĹŻ pro vĂ˝chovu, lĂ©ÄŤenĂ­, zaopatĹ™enĂ­ a zamÄ›stnĂˇvĂˇnĂ­ nevidomĂ˝ch v Praze?"
options:
  A: "Jan Deyl"
  B: "VĂˇclav VejdovskĂ˝"
  C: "DrahomĂ­r HanĂˇk"
  D: "Alois KlĂˇr"
sourceCorrectLetter: "D"
sourceCorrectOptionText: "Alois KlĂˇr"
discipline: "tyflopedie / ÄŤeskĂ© osobnosti"
subtopic: "zaklĂˇdĂˇnĂ­ ĂşstavĹŻ pro nevidomĂ© v Praze"
conceptFamily: "ÄŤeskĂ© dÄ›jiny tyflopedie"
distinctionAxis: "zakladatelskĂˇ osobnost praĹľskĂ˝ch ĂşstavĹŻ vs pozdÄ›jĹˇĂ­ odbornĂ­ci"
questionTypeSuggested: "historical-person-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "Alois KlĂˇr Ă— Jan Deyl Ă— dalĹˇĂ­ ÄŤeskĂ© osobnosti"
institutionDomain: "dÄ›jiny oboru"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Alois KlĂˇr"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "poÄŤĂˇtky ÄŤeskĂ© tyflopedie a ĂşstavnictvĂ­"
personalityAnchor: "Alois KlĂˇr"
metadataSourceRef: "B10Q48"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: zakladatelskĂˇ osobnost praĹľskĂ˝ch ĂşstavĹŻ vs pozdÄ›jĹˇĂ­ odbornĂ­ci.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "Pro ÄŤtvrtĂ˝ stupeĹ podpĹŻrnĂ˝ch opatĹ™enĂ­ je typickĂ©, Ĺľe"
options:
  A: "jde o vĂ˝znamnĂ© Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­, zpravidla podloĹľenĂ© diagnostikou a pĹ™Ă­padnÄ› i Ăşpravou vĂ˝stupĹŻ"
  B: "postaÄŤujĂ­ jen minimĂˇlnĂ­ Ăşpravy metod a hodnocenĂ­ bez zĂˇsahu do organizace vzdÄ›lĂˇvĂˇnĂ­"
  C: "jde pouze o posĂ­lenĂ­ personĂˇlnĂ­ podpory bez moĹľnosti prodlouĹľenĂ­ dĂ©lky vzdÄ›lĂˇvĂˇnĂ­"
  D: "jde vĂ˝hradnÄ› o kompenzaÄŤnĂ­ pomĹŻcky bez vazby na diagnostiku a Ăşpravu vĂ˝stupĹŻ"
sourceCorrectLetter: "A"
sourceCorrectOptionText: "jde o vĂ˝znamnĂ© Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­, zpravidla podloĹľenĂ© diagnostikou a pĹ™Ă­padnÄ› i Ăşpravou vĂ˝stupĹŻ"
discipline: "ĹˇkolskĂˇ legislativa / 4. stupeĹ podpory"
subtopic: "charakteristika 4. stupnÄ› podpĹŻrnĂ˝ch opatĹ™enĂ­"
conceptFamily: "stupnÄ› podpory a Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­"
distinctionAxis: "vĂ˝znamnĂ© Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­ a pĹ™Ă­padnĂˇ Ăşprava vĂ˝stupĹŻ vs minimĂˇlnĂ­ nebo ÄŤistÄ› pomĹŻckovĂ© pojetĂ­"
questionTypeSuggested: "legislation-level-discrimination"
distractorTypeSuggested: "near-rule"
trapPatternSeed: "4. stupeĹ Ă— 1./2. stupeĹ Ă— jen pomĹŻcky"
institutionDomain: "ĹˇkolstvĂ­ / poradenstvĂ­"
timeSensitivity: "current"
primarySourceSuggested:
  - "VyhlĂˇĹˇka ÄŤ. 27/2016 Sb. â€“ pĹ™Ă­loha ÄŤ. 1, 4. stupeĹ podpory"
secondarySourceSuggested:
  - "ZĂˇkon ÄŤ. 561/2004 Sb. â€“ ĹˇkolskĂ˝ zĂˇkon"
  - "VyhlĂˇĹˇka ÄŤ. 72/2005 Sb. / VyhlĂˇĹˇka ÄŤ. 46/2025 Sb., pokud jde o poradenskĂ˝ proces"
legislationRef: ""
historicalAnchor: ""
personalityAnchor: ""
metadataSourceRef: "B10Q49"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: vĂ˝znamnĂ© Ăşpravy prĹŻbÄ›hu vzdÄ›lĂˇvĂˇnĂ­ a pĹ™Ă­padnĂˇ Ăşprava vĂ˝stupĹŻ vs minimĂˇlnĂ­ nebo ÄŤistÄ› pomĹŻckovĂ© pojetĂ­.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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
questionText: "KterĂˇ autorka je spojena s testem zrakovĂ©ho vnĂ­mĂˇnĂ­ vyuĹľĂ­vanĂ˝m zejmĂ©na u dÄ›tĂ­ s poruchami uÄŤenĂ­ a obtĂ­Ĺľemi ve vizuĂˇlnÄ›-percepÄŤnĂ­ oblasti?"
options:
  A: "Nancy Bayley"
  B: "Marianne Frostig"
  C: "Joan Reynell"
  D: "Lea HyvĂ¤rinen"
sourceCorrectLetter: "B"
sourceCorrectOptionText: "Marianne Frostig"
discipline: "speciĂˇlnÄ›pedagogickĂˇ diagnostika / zrakovĂ© vnĂ­mĂˇnĂ­"
subtopic: "Frostig test zrakovĂ©ho vnĂ­mĂˇnĂ­"
conceptFamily: "diagnostickĂ© nĂˇstroje a autorky testĹŻ"
distinctionAxis: "test zrakovĂ©ho vnĂ­mĂˇnĂ­ vs jinĂ© vĂ˝vojovĂ© a jazykovĂ© testy"
questionTypeSuggested: "test-author-discrimination"
distractorTypeSuggested: "near-personality"
trapPatternSeed: "diagnostickĂ˝ nĂˇstroj Ă— jinĂˇ autorka testu"
institutionDomain: "diagnostika"
timeSensitivity: "stable"
primarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ Marianne Frostig"
secondarySourceSuggested:
  - "Mini-wikipedie osobnostĂ­ â€“ ovÄ›Ĺ™it danou osobnost a blĂ­zkĂ© distraktory"
  - "DoplĹkovĂˇ oborovĂˇ reĹˇerĹˇe jen pokud bude potĹ™eba zpĹ™esnit historickĂ˝ detail"
legislationRef: ""
historicalAnchor: "diagnostika vizuĂˇlnÄ›-percepÄŤnĂ­ch obtĂ­ĹľĂ­"
personalityAnchor: "Marianne Frostig"
metadataSourceRef: "B10Q50"
authoringStatus: "outline-prepared"
```

### AutorovacĂ­ poznĂˇmka
- JĂˇdro poloĹľky: test zrakovĂ©ho vnĂ­mĂˇnĂ­ vs jinĂ© vĂ˝vojovĂ© a jazykovĂ© testy.
- PĹ™i dopracovĂˇnĂ­ drĹľ rozliĹˇenĂ­ mezi tĂ­m, co je testovanĂ© jĂˇdro otĂˇzky, a tĂ­m, co je jen vÄ›rohodnÄ› znÄ›jĂ­cĂ­ distraktor.
- U tĂ©to poloĹľky doplĹ struÄŤnĂ© zdĹŻvodnÄ›nĂ­ sprĂˇvnĂ© odpovÄ›di a minimĂˇlnÄ› jednu vÄ›tu ke kaĹľdĂ© rodinÄ› chybnĂ˝ch odpovÄ›dĂ­.

### Vyplnit pĹ™i dopracovĂˇnĂ­
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

