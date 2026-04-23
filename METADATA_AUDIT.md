# Metadata Audit

## Ucel
Tento dokument je rozhodovaci ramec pro audit metadata poli. Cilem je drzet v runtime jen to, co ma realny dopad na chod aplikace, a vse ostatni presunout mimo behovou vrstvu.

## Pravidla

### KEEP_RUNTIME
Pole zustava v runtime, pokud:
- ovlivnuje UI
- ovlivnuje review
- ovlivnuje Tutor
- ovlivnuje analytics
- ovlivnuje repair flow
- je male a uzitecne pro budouci editovatelnost bez zbytecneho nafouknuti runtime

### MOVE_OUT_OF_RUNTIME
Pole se presouva mimo runtime, pokud:
- je uzitecne pro kuraci obsahu
- ale nema primy vliv na beh aplikace ani na to, co vidi student

### REMOVE
Pole se odstrani, pokud:
- se nikde necte v aktualnim runtime
- neni soucasti Tutor vrstvy
- neni soucasti analytics ani repair flow
- nema realnou hodnotu ani jako male podporne pole

## Auditni tabulka

| Pole | Rozhodnuti | Poznamka |
|---|---|---|
| globalId | KEEP_RUNTIME | identita otazky |
| batteryId | KEEP_RUNTIME | vazba otazka-baterie |
| questionNumber | KEEP_RUNTIME | vazba metadata-otazka |
| sourceCorrectLetter | KEEP_RUNTIME | kontrola odpovedi |
| reviewedCorrectLetter | KEEP_RUNTIME | kontrola odpovedi |
| effectiveCorrectLetter | KEEP_RUNTIME | autoritativni spravna odpoved v runtime |
| discipline | KEEP_RUNTIME | analytics a Tutor |
| subtopic | KEEP_RUNTIME | analytics, Tutor, repair |
| conceptTags | KEEP_RUNTIME | tematicky kontext |
| questionType | KEEP_RUNTIME | analytics a repair |
| distractorType | KEEP_RUNTIME | analytics |
| trapPattern | KEEP_RUNTIME | Tutor a analytics |
| requiredDiscrimination | KEEP_RUNTIME | Tutor |
| signalPattern | KEEP_RUNTIME | Tutor |
| signalHint | KEEP_RUNTIME | Tutor |
| attentionRisk | KEEP_RUNTIME | heuristiky a analytics |
| formulationFlags | KEEP_RUNTIME | Tutor, analytics, repair |
| questionCore | KEEP_RUNTIME | Tutor fallback |
| explanationCorrect | KEEP_RUNTIME | Tutor obsah, nemenit |
| explanationDistractor | KEEP_RUNTIME | Tutor obsah, nemenit |
| commonMisconception | KEEP_RUNTIME | Tutor obsah, nemenit |
| whyWrongCategory | KEEP_RUNTIME | Tutor diagnostika |
| microLesson | KEEP_RUNTIME | Tutor obsah, nemenit |
| recommendedRecallPrompt | KEEP_RUNTIME | Tutor obsah, nemenit |
| likelyErrorTypes | KEEP_RUNTIME | analytics a auto-diagnostika |
| repairTags | KEEP_RUNTIME | repair flow |
| institutionPair | KEEP_RUNTIME | analytics, Tutor, repair |
| recommendedRepairFilters | KEEP_RUNTIME | Tutor a repair |
| revisionPriority | KEEP_RUNTIME | revision queue |
| distinctionAxis | KEEP_RUNTIME | tematicke rozliseni tam, kde je vyuzito v datech |
| batteryLabel | MOVE_OUT_OF_RUNTIME | runtime si vystaci s kontextem baterie |
| batteryTitle | MOVE_OUT_OF_RUNTIME | runtime si vystaci s kontextem baterie |
| batterySubtitle | REMOVE | neni potreba v runtime metadata |
| knowledgeDemandLevel | MOVE_OUT_OF_RUNTIME | kuratorske pole |
| processDemandLevel | MOVE_OUT_OF_RUNTIME | kuratorske pole |
| answerAuditStatus | MOVE_OUT_OF_RUNTIME | interni auditni pole |
| answerAuditNote | MOVE_OUT_OF_RUNTIME | interni auditni pole |
| metadataOrigin | MOVE_OUT_OF_RUNTIME | interni auditni pole |
| metadataSourceRef | MOVE_OUT_OF_RUNTIME | interni auditni pole |
| metadataConfidence | MOVE_OUT_OF_RUNTIME | interni auditni pole |
| curationStatus | MOVE_OUT_OF_RUNTIME | interni auditni pole |

## Implementovany vysledek
- Runtime metadata byla zmensena z 60 source klicu na 30 runtime klicu.
- Puvodni velke metadata exporty byly nahrazeny split strukturou po rezimech a bateriich.
- Kuratorska metadata zustala oddelena v `data_source/`.
