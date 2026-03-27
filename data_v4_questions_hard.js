// Konsolidovaný hard-mode dataset – Baterie 1 až 8.
// Paralelní pokročilá vrstva pro budoucí samostatné načítání.
// Nevkládat do základního runtime prostoru místo data_v4_questions.js.
// Tento soubor pouze exportuje questions dataset přes window.SCIO_V4_RAW_BATTERIES_HARD.

window.SCIO_V4_RAW_BATTERIES_HARD = [
  {
    "id": 1,
    "label": "Baterie 1",
    "title": "Funkční čtení obtíže",
    "subtitle": "Hlavní bariéra, funkční dopad, sekundární projevy a jádro podpory napříč znevýhodněním.",
    "purpose": "Testovat, zda uchazeč umí číst obtíž funkčně, ne jen kategoriálně: rozlišit hlavní bariéru, její dopad do vzdělávání a participace, sekundární projevy a co z toho plyne pro podporu.",
    "difficulty": "vysoká",
    "dominant": [
      "hlavní bariéra vs sekundární projev",
      "funkční dopad obtíže",
      "diagnóza vs konkrétní fungování",
      "přístup k informaci a komunikaci",
      "adaptivní fungování a participace",
      "forma výkonu vs obsahové porozumění",
      "regulace, prostředí a předvídatelnost",
      "nadání a maskovaná bariéra"
    ],
    "breakdown": [
      "26× syntetické mikrokazuistiky profilu žáka nebo klienta",
      "12× funkční interpretace: hlavní bariéra × sekundární projev",
      "8× nejlepší další krok v podpoře nebo ve čtení situace",
      "4× minimální konceptové a strategické kotvy"
    ],
    "tags": [
      "funkční čtení obtíže",
      "hlavní bariéra",
      "sekundární projev",
      "participace",
      "forma výkonu",
      "UPOL hard mode"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Dva žáci mají stejnou oční diagnózu. Jeden čte se zvětšením, druhý spoléhá hlavně na hmatové materiály. Který závěr je nejpřesnější?",
        "options": [
          "Rozhodující je stejný název diagnózy, proto má být podpora v obou případech zásadně stejná.",
          "Rozdíl ukazuje hlavně na odlišnou motivaci k práci, ne na funkční profil.",
          "První žák potřebuje spíše reedukaci čtení, druhý spíše snížení obsahových nároků.",
          "Podpora se musí odvíjet od funkčního způsobu přístupu k informaci, ne jen od názvu diagnózy."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 2,
        "text": "Žák v hluku často nereaguje na pokyny, ale při rozhovoru tváří v tvář s oporou o zápis pracuje přesně. Co je nejspíš hlavní bariéra?",
        "options": [
          "Nízká motivace ke školní práci, která se zlepšuje jen při individuální pozornosti dospělého.",
          "Dostupnost mluvené informace v akusticky náročném prostředí.",
          "Globálně snížené rozumové schopnosti, které se maskují dobrým chováním.",
          "Primárně porucha chování, protože žák reaguje selektivně jen v některých situacích."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Dítě komolí hlásky, ale dobře rozumí instrukcím, slyší i tichou řeč a v sociálním kontaktu reaguje přiměřeně. Které čtení je nejpřesnější?",
        "options": [
          "Těžiště je v komunikační produkci, ne v samotné sluchové dostupnosti nebo sociálním porozumění.",
          "Jde hlavně o sluchovou vadu, protože chybnější výslovnost bývá jejím nejspolehlivějším znakem.",
          "Jde hlavně o PAS, protože nepřesná řeč obvykle znamená oslabenou reciprocitu.",
          "Jde hlavně o lehčí poruchu intelektového vývoje, protože artikulační chyby ukazují na širší oslabení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 4,
        "text": "Žák odpovídá ústně přesně, ale výrazně nestíhá psaní, přesuny a manipulaci s pomůckami. Co je pro vzdělávací podporu nejdůležitější?",
        "options": [
          "Snížit obsah učiva, protože pomalé tempo práce nejlépe ukazuje na nižší porozumění.",
          "Primárně řešit vztah k autoritě, protože zdržování bývá často pasivní odpor.",
          "Rozlišit bariéru ve fyzickém provedení a organizaci výkonu od samotného porozumění učivu.",
          "Předpokládat logopedické těžiště, protože pomalé tempo často souvisí s expresí."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 5,
        "text": "Žák zvládá individuální práci, ale při nečekané změně programu, hluku a skupinové spolupráci rychle ztrácí regulaci. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o nedostatek hranic, protože skutečná obtíž by se projevovala stejně ve všech situacích.",
          "Těžiště je ve zpracování změny, sociální a senzorické zátěže, ne jen v prosté neposlušnosti.",
          "Jde hlavně o sluchové postižení, protože hluk bývá klíčovým ukazatelem.",
          "Jde hlavně o poruchu intelektového vývoje, protože skupinová práce vyžaduje vyšší abstrakci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 6,
        "text": "Žák má dobré známky, ale výrazně selhává v sebeobsluze, orientaci v čase, penězích a samostatném rozhodování. Co má pro podporu největší váhu?",
        "options": [
          "Úroveň adaptivního fungování v běžném životě, ne jen školní známky.",
          "To, že školní výkon vylučuje významnější potřebu podpory v každodennosti.",
          "Hlavně grafomotorika, protože ta bývá společným základem všech uvedených obtíží.",
          "Především vztah k rodině, protože adaptivní fungování nelze spojovat se vzdělávací podporou."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 7,
        "text": "Učitel mluví k tabuli a během výkladu nezapisuje klíčová slova. Žák pak působí, jako by nerozuměl, ale z písemné opory pracuje dobře. Které čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedickou obtíž, protože bez zápisu žák obtížně aktivuje slovník.",
          "Jde hlavně o potíž v dostupnosti mluvené řeči v reálné situaci výuky.",
          "Jde hlavně o poruchu chování, protože žák potřebuje permanentní kontrolu učitele.",
          "Jde hlavně o nízkou míru snahy, protože s oporou pracuje až příliš dobře."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 8,
        "text": "Žák rozumí obsahu při poslechu, ale hustý tisk a nízký kontrast ho rychle vyčerpávají a zpomalují. Co je nejpřesnější interpretace?",
        "options": [
          "Těžiště je v oslabené slovní zásobě, protože při poslechu není kladen tak vysoký nárok na jazyk.",
          "Těžiště je v poruše intelektového vývoje, protože čtení bývá náročnější než poslech.",
          "Jádro je v přístupu k vizuální informaci, ne v samotném porozumění obsahu.",
          "Jádro je hlavně v nedostatku pracovních návyků, protože únava ze čtení je většinou sekundární."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 9,
        "text": "Nadaný žák řeší ústně složité úlohy, ale písemný výstup je nečitelný, velmi pomalý a neúplný. Který závěr je nejpřesnější?",
        "options": [
          "Nejspíše jde jen o nízkou vytrvalost, protože skutečné nadání se projeví v každé formě výkonu.",
          "Je třeba uvažovat o vysokém potenciálu i o bariéře formy výkonu; silná stránka a obtíž se mohou maskovat.",
          "Jde hlavně o poruchu intelektového vývoje, protože rozdíl mezi ústní a písemnou formou ukazuje na nestabilní myšlení.",
          "Jde hlavně o problém motivace, protože odborně nadaný žák si formu výkonu obvykle uhlídá sám."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 10,
        "text": "Žák dobře slyší, ale má potíže s formulací vět, hledáním slov a souvislým vyprávěním. Co je hlavní těžiště obtíže?",
        "options": [
          "Primárně sluchová dostupnost, protože potíže ve větách obvykle ukazují na nedostatečný příjem řeči.",
          "Primárně zrakový přístup k informaci, protože vyprávění zatěžuje vizuální paměť.",
          "Primárně sociální maladaptace, protože nesouvislé vyprávění zhoršuje vztahy.",
          "Primárně širší komunikační a jazykový profil, ne samotný sluchový vstup."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 11,
        "text": "Dva žáci mají stejnou diagnózu PAS. Jeden potřebuje hlavně předvídatelnost a senzorické úpravy, druhý podporu v porozumění sociálním významům. Co z toho plyne?",
        "options": [
          "Název diagnózy nestačí; podpora se musí odvíjet od konkrétního funkčního profilu bariéry.",
          "První žák má ve skutečnosti etopedické obtíže a druhý logopedické, protože jejich potřeby se liší.",
          "Oba potřebují stejná opatření, jinak by nebylo možné mluvit o stejné diagnóze.",
          "Rozdíl ukazuje jen na rozdílnou rodinnou výchovu, nikoli na odborně významný profil."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 12,
        "text": "Žák po léčbě onkologického onemocnění dobře chápe učivo, ale výrazně se unaví, nestíhá přesuny a odpoledne výkon klesá. Jaké čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o oslabení motivace, protože porozumění učivu je zachované.",
          "Jde hlavně o logopedickou obtíž, protože únava nejvíce zasahuje verbální projev.",
          "Jde hlavně o poruchu chování, protože kolísající výkon bývá známkou nedisciplinovanosti.",
          "Jádrem je zdravotní a fyzická zátěž, která mění podmínky výkonu a participace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Neslyšící žák plynně znakuje, ale ve psané češtině dělá výrazné morfologické chyby. Která interpretace je nejpřesnější?",
        "options": [
          "Jde hlavně o důkaz nižšího intelektu, protože plynulé myšlení se v češtině musí projevit automaticky.",
          "Je třeba rozlišit komunikační jazykovou dostupnost a vztah k psané češtině; nejde jen o „nepozornost v pravopisu“.",
          "Jde hlavně o zrakové postižení, protože psaný jazyk je vizuální formát.",
          "Jde hlavně o poruchu chování, protože opakované chyby ukazují na nízkou kontrolu výkonu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 14,
        "text": "Žák čte slova obstojně, ale ztrácí se na známých trasách při změně rozložení a naráží do překážek mimo centrální zorné pole. Co má podpora nejvíc zohlednit?",
        "options": [
          "Primárně rozvoj plynulosti čtení, protože orientace v prostoru obvykle kopíruje čtenářskou úroveň.",
          "Funkční orientaci a mobilitu, ne jen výkon při práci s textem.",
          "Primárně sociální dovednosti, protože narážení do překážek zhoršuje vztahy s vrstevníky.",
          "Primárně pracovní morálku, protože opakované ztrácení na trase ukazuje na nízkou odpovědnost."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Dítě lépe chápe postup, když je názorně rozfázovaný a opřený o konkrétní situace. Při čistě abstraktním slovním výkladu rychle selhává. Jaké čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o potřebu funkčně a názorně strukturovaného učení, ne o prostou nepozornost.",
          "Jde hlavně o sluchové postižení, protože slovní výklad bývá pro tuto skupinu náročný.",
          "Jde hlavně o zrakové postižení, protože názornost bývá potřebná při ztrátě zraku.",
          "Jde hlavně o poruchu chování, protože selhání při výkladu ukazuje na nízkou sebekontrolu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 16,
        "text": "Žák doslovně chápe ironii, hůře čte sociální narážky a v přímé odborné debatě ale podává velmi přesné výkony. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o nedostatek zájmu o vrstevníky, který s odbornými výkony nesouvisí.",
          "Jde hlavně o lehčí poruchu intelektového vývoje, protože sociální narážky vyžadují abstrakci.",
          "Jde hlavně o sluchovou vadu, protože ironie bývá akusticky náročnější než přímé sdělení.",
          "Je třeba odlišit sociálně-komunikační interpretaci situací od úrovně věcného odborného uvažování."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Dítě plynule vysvětluje látku, ale při diktátu a opisování z tabule ztrácí přesnost, tempo i čitelnost. Co je nejméně přesné vysvětlení?",
        "options": [
          "Že by mohlo jít o bariéru ve formě výkonu, nikoli automaticky o slabší porozumění obsahu.",
          "Že je třeba oddělit vědění od způsobu, jak se právě musí projevit v písemné podobě.",
          "Že je nejspíš méně nadané, protože skutečné porozumění se musí projevit stejně dobře v každé formě.",
          "Že podpora má mířit i na to, jak výkon zprostředkovat spravedlivěji a funkčněji."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 18,
        "text": "Žák reaguje opožděně na rychlé skupinové instrukce, ale při klidném individuálním zadání s oporou pracuje bez potíží. Co je nejspíš sekundární projev, ne jádro obtíže?",
        "options": [
          "Napětí a nejistota při zátěžové komunikaci.",
          "Obtíž v zachycení a zpracování skupinově podané instrukce.",
          "Kolísání výkonu podle komunikačních podmínek.",
          "Domněnka, že je žák obecně méně schopný."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 19,
        "text": "Dítě při běžné třídní práci odpovídá velmi málo, ale doma i v individuálním hovoru používá bohatý jazyk. Co je nejméně přesná interpretace?",
        "options": [
          "Že výkon může být silně závislý na komunikačním a sociálním kontextu.",
          "Že je třeba zkoumat, zda třída sama nevytváří bariéru pro projev a participaci.",
          "Že chudý projev ve třídě automaticky znamená trvale omezené jazykové schopnosti.",
          "Že je nutné rozlišit mezi tím, co dítě umí, a tím, co v daném kontextu dokáže projevit."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Žák s omezenou hybností používá AAC a přes zařízení odpovídá věcně i abstraktně přesně. Co je pro čtení situace nejdůležitější?",
        "options": [
          "Vyšší náročnost komunikace sama o sobě nevypovídá o úrovni porozumění nebo myšlení.",
          "AAC se používá hlavně tam, kde je vždy zároveň výrazně snížen intelekt.",
          "Těžiště je v logopedii, protože každé zařízení znamená primárně poruchu řeči.",
          "Zařízení samo nahrazuje potřebu individualizace hodnocení a organizace výkonu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 21,
        "text": "Žák při poslechu textu rozumí obsahu, ale při samostatném čtení běžného tisku rychle ztrácí místo a unaví se. Co je nejpřesnější závěr?",
        "options": [
          "Jde hlavně o poruchu porozumění textu, protože stejné potíže se vždy projeví i při poslechu.",
          "Jde hlavně o nízkou motivaci ke čtení, protože obsah textu je při správném vysvětlení dostupný.",
          "Jádrem je spíše přístup k vizuální informaci než samotné jazykové porozumění.",
          "Jádrem je porucha chování, protože čtenářská zátěž často vede k úniku od úkolu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 22,
        "text": "Dítě při rozhovoru opakuje části otázek, potřebuje více času na zpracování a v rušném prostředí reaguje chaoticky. Které čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o nevychovanost v komunikaci, protože dítě neodpovídá rovnou a přesně.",
          "Jde hlavně o nízké kognitivní možnosti, protože opakování otázky vždy znamená poruchu intelektového vývoje.",
          "Jde hlavně o neochotu spolupracovat, protože v klidu by dítě bez potíží odpovídalo ihned.",
          "Je třeba uvažovat o komunikačně-regulační obtíži a nepřečíst echolalii nebo prodlevu jen jako vzdor či nízkou schopnost."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 23,
        "text": "Žák se sluchovým postižením dobře pracuje v individuálním rozhovoru, ale ve spontánní skupinové debatě mu uniká návaznost a vstupuje se zpožděním. Co je hlavní bariéra?",
        "options": [
          "Nízká sociální motivace, protože při skupinové práci je méně aktivní než ostatní.",
          "Omezený přístup k rychle se měnící mluvené komunikaci více mluvčích.",
          "Nedostatečná slovní zásoba, protože v debatě reaguje kratšími větami.",
          "Primárně porucha chování, protože nerespektuje plynulost společné práce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 24,
        "text": "Žák mluví kultivovaně a má široké znalosti, ale opakovaně se ztrácí v denním režimu, neodhadne čas, zapomíná základní kroky sebeobsluhy a potřebuje vedení v běžných situacích. Který závěr je nejpřesnější?",
        "options": [
          "Dobrá verbální stránka sama nevylučuje významné obtíže v adaptivním fungování.",
          "Jde hlavně o lenost a nízkou odpovědnost, protože jazyková úroveň ukazuje na dostatečnou samostatnost.",
          "Jde hlavně o sluchové postižení, protože ztrácení v režimu bývá důsledkem nepřesně zachycených instrukcí.",
          "Jde hlavně o zrakové postižení, protože orientace v čase a prostoru bývá primárně vizuální problém."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 25,
        "text": "Dítě používá jednoduché věty, ale hlavní obtíž se projeví zejména tehdy, když má pochopit nepřímé sociální významy, sdílet pozornost a pružně přepnout mezi tématy. Co je nejpřesnější čtení?",
        "options": [
          "Jde hlavně o izolovanou dyslálii, protože věty nejsou jazykově bohaté.",
          "Jde hlavně o sluchové postižení, protože obtíže se ukazují v dialogu.",
          "Jádro může být spíše v sociálně-komunikačním porozumění a flexibilitě než v samotné formě řeči.",
          "Jde hlavně o tělesné postižení, protože přepínání mezi tématy ukazuje na únavu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 26,
        "text": "Žák po úrazu ruky řeší úlohy správně, ale písemný výkon je dočasně velmi omezený. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o dlouhodobou poruchu intelektového vývoje, protože písemný výkon je výrazně pod úrovní vědomostí.",
          "Jde hlavně o narušenou komunikační schopnost, protože psaní je součástí jazyka.",
          "Je třeba primárně pracovat na kázeňské složce výkonu, aby se žák naučil větší odolnosti.",
          "Je nutné oddělit obsahové porozumění od momentálně omezené formy výkonu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 27,
        "text": "Dítě se zrakovým postižením při čtení využívá zbytek zraku, ale po delší době výrazně zpomaluje a roste chybovost. Který závěr je nejpřesnější?",
        "options": [
          "Je vhodné přejít bez dalšího na jediný univerzální formát, protože únava dokazuje neúčinnost jakéhokoli zrakového čtení.",
          "Podpora má vycházet z funkčního využití zraku včetně únavy a nároků úkolu, ne jen z názvu kategorie.",
          "Jde hlavně o poruchu pozornosti, protože tempo při delší práci klesá téměř u všech obtíží.",
          "Jde hlavně o nedostatečnou snahu, protože skutečný problém by se projevil hned na začátku čtení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 28,
        "text": "Rodič i učitel popisují u dítěte časté afekty. V záznamu je ale patrné, že přicházejí hlavně při zahlcení řečí, změně pravidel a sociální nepředvídatelnosti. Které čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o izolovanou poruchu hlasu, protože afekty vznikají v komunikačních situacích.",
          "Jde hlavně o poruchu chování bez dalšího, protože afekt je vždy primárně behaviorální problém.",
          "Afekt může být sekundárním projevem přetížení a regulačního selhání, ne automaticky jádrem obtíže.",
          "Jde hlavně o tělesné postižení, protože změna pravidel zvyšuje motorické nároky."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 29,
        "text": "Žák bez potíží chápe odborný obsah, ale ve větší třídě ztrácí linii výkladu, pokud mluvčí není vidět a klíčové informace nejsou vizuálně zachyceny. Který další krok v podpoře je nejpřesnější?",
        "options": [
          "Zvýšit dostupnost řeči a klíčových informací v prostoru výuky.",
          "Snížit obsahové nároky, protože ztrácení v linii výkladu ukazuje na slabší porozumění látce.",
          "Přenést odpovědnost hlavně na spolužáky, aby mu po hodině vše dopovídali.",
          "Zaměřit se primárně na grafomotorický nácvik, protože při výkladu chybí písemná opora."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Žák s chronickým onemocněním bývá některé dny výkonově bez potíží a jindy výrazně zpomalený. Který závěr je nejpřesnější?",
        "options": [
          "Kolísání samo o sobě zpochybňuje reálnost obtíží, protože skutečné postižení bývá stabilní.",
          "Proměnlivost zdravotního stavu je součást funkčního profilu a má být zohledněna v organizaci práce.",
          "Jde hlavně o psychologický problém, protože biologická obtíž by nekolísala podle dne.",
          "Rozhodující je hodnotit jen dny s plným výkonem, protože ty ukazují skutečný potenciál žáka."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Dítě s těžší motorickou bariérou potřebuje více času na přesun a manipulaci, ale při práci na tabletu řeší úlohy rychle a přesně. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu chování, protože rozdíl mezi situacemi ukazuje na výběrovou snahu.",
          "Jádrem je spíše bariéra fyzické realizace výkonu než porozumění obsahu.",
          "Jde hlavně o narušenou komunikační schopnost, protože tablet zlepšil expresi.",
          "Jde hlavně o zrakové postižení, protože digitální forma bývá pro zrak vždy snazší."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 32,
        "text": "Dítě rychle selhává v otevřených sociálních situacích, ale při jasně daných pravidlech a předvídatelném formátu podává stabilní výkon. Co je nejpřesnější závěr?",
        "options": [
          "Jde hlavně o nízkou motivaci, protože dítě pracuje jen tehdy, když je to pro něj pohodlné.",
          "Jde hlavně o poruchu intelektového vývoje, protože bez struktury nefunguje samostatně.",
          "Jde hlavně o sluchové postižení, protože sociální situace jsou komunikačně náročnější.",
          "Struktura prostředí zde pravděpodobně snižuje regulační a sociálně-komunikační zátěž."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Dítě rozumí jednotlivým slovům, ale v delším ústním zadání bez členění rychle ztrácí smysl instrukce. Který další krok je nejpřesnější pro čtení situace?",
        "options": [
          "Zkoumat, zda je hlavní bariéra v délce, struktuře a zpracování instrukce, ne jen v ochotě poslouchat.",
          "Uzavřít situaci jako poruchu chování, protože dítě nevydrží vnímavě poslouchat delší dobu.",
          "Předpokládat automaticky nízký intelekt, protože delší instrukci nezvládá udržet.",
          "Odložit jakékoli závěry, protože bez diagnózy nelze funkční čtení situace vůbec zahájit."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Dítě má časté konflikty s vrstevníky. Při bližším sledování ale vychází najevo, že špatně chápe sociální narážky, pravidla hry odvozuje doslovně a obtížně odhaduje záměr druhých. Co je nejpřesnější závěr?",
        "options": [
          "Jde hlavně o záměrnou agresivitu, protože konflikty s vrstevníky jsou vždy otázkou chování.",
          "Jde hlavně o sluchové postižení, protože konflikt často vzniká nedorozuměním.",
          "Jde hlavně o tělesné postižení, protože vrstevnické hry jsou pohybově náročné.",
          "Je třeba rozlišit, zda konflikty nejsou sekundárně podmíněné sociálně-komunikačním neporozuměním."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 35,
        "text": "Žák při skupinovém diktátu nestíhá zachytit mluvené instrukce, ale při individuálním tempu s vizuální oporou je práce přesná. Co je hlavní těžiště obtíže?",
        "options": [
          "Těžiště je hlavně v dostupnosti instrukce a tempu zpracování, ne nutně v samotném pravopisu.",
          "Těžiště je hlavně v poruše intelektového vývoje, protože bez skupinové opory nezvládá běžné tempo.",
          "Těžiště je hlavně v tělesné únavě, protože diktát je sedavá činnost.",
          "Těžiště je hlavně v chování, protože žák při skupinové práci zjevně nezvládá tlak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 36,
        "text": "Dítě s poruchou intelektového vývoje zvládá známé činnosti, ale v nové situaci bez modelu rychle selhává. Které čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o neochotu přemýšlet samostatně, protože známé úkoly zvládá.",
          "Jde hlavně o zrakové postižení, protože v nových situacích chybí vizuální orientační body.",
          "Nová situace klade vyšší nároky na generalizaci, porozumění a adaptivní přenos než nacvičený úkol.",
          "Jde hlavně o poruchu chování, protože bez známého rámce dítě odmítá spolupracovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 37,
        "text": "Žák má výrazné potíže se psaným projevem, ale při odpovědi přes hlasový záznam je obsah strukturovaný a věcně správný. Co je nejpřesnější závěr?",
        "options": [
          "Psaný projev je jediný spolehlivý ukazatel úrovně vědomostí, protože je školně standardní.",
          "Je pravděpodobné, že forma výkonu zakrývá skutečnou úroveň obsahové kompetence.",
          "Hlasový záznam nelze brát vážně, protože snižuje náročnost myšlení.",
          "Jde hlavně o zrakové postižení, protože psaný projev bývá vizuálně zatěžující."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 38,
        "text": "Žák se zrakovým postižením čte pomalu, ale po zvětšení a úpravě kontrastu přesnost výrazně stoupá. Co je nejpřesnější interpretace účinku podpory?",
        "options": [
          "Podpora pravděpodobně zasáhla hlavní bariéru v přístupu k vizuální informaci.",
          "Úprava ukazuje hlavně na to, že původní problém byl v motivaci ke čtení.",
          "Úprava ukazuje hlavně na nízký intelekt, protože bez ní žák podával slabý výkon.",
          "Úprava ukazuje hlavně na poruchu chování, protože dítě reagovalo na změnu podmínek."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 39,
        "text": "Dítě s PAS má vysokou slovní zásobu, ale při skupinové práci nerozpozná, kdy je vhodné vstoupit do hovoru a kdy je potřeba změnit strategii. Který závěr je nejpřesnější?",
        "options": [
          "Silná slovní zásoba znamená, že komunikační oblast není pro podporu důležitá.",
          "Jde hlavně o sluchové postižení, protože problém se ukazuje v rozhovoru více lidí.",
          "Jde hlavně o poruchu intelektového vývoje, protože dítě nevolí vhodnou strategii.",
          "Formální jazyková úroveň nevylučuje obtíž v pragmatice a sociální koordinaci komunikace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 40,
        "text": "Dítě při práci s konkrétními předměty chápe vztahy dobře, ale při čistě verbálním a abstraktním zadání bez opory rychle chybuje. Co je hlavní význam tohoto rozdílu?",
        "options": [
          "Ukazuje hlavně neochotu přemýšlet bez pomůcek.",
          "Ukazuje hlavně sluchové postižení, protože verbální zadání je méně dostupné.",
          "Ukazuje rozdíl mezi zvládnutím učiva s názornou oporou a nároky na abstrakci bez opory.",
          "Ukazuje hlavně poruchu chování, protože dítě nechce nést vyšší kognitivní zátěž."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 41,
        "text": "Dítě používá AAC, ale okolí z jeho pomalejší odpovědi vyvozuje nižší porozumění. Jaké čtení je nejpřesnější?",
        "options": [
          "Rychlost odpovědi přes AAC automaticky ukazuje úroveň intelektu.",
          "Je třeba oddělit čas potřebný k vyjádření od úrovně myšlení a porozumění.",
          "Pomalá odpověď přes AAC ukazuje hlavně na sluchové postižení.",
          "Jde primárně o etopedický problém, protože okolí vnímá komunikaci jako nepřiměřeně pomalou."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 42,
        "text": "Žák působí ve třídě nepozorně, ale ukáže se, že hlavní problém vzniká při rychlém střídání vizuálních a mluvených informací bez struktury. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu chování, protože nepozornost je ve škole nejviditelnější.",
          "Jde hlavně o nízkou inteligenci, protože žák nestíhá více kanálů najednou.",
          "Jde hlavně o zrakové postižení, protože vizuální informace jsou v zadání přítomné.",
          "Je třeba číst, zda problém neleží v organizaci vstupu a zpracování, ne v prosté nepozornosti."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 43,
        "text": "U dítěte se stejnou diagnózou jako u jiného spolužáka se ale obtíž projevuje hlavně v participaci o přestávkách, ne při samotné výuce. Co je nejpřesnější závěr?",
        "options": [
          "Rozhodující je, v jaké situaci a funkční oblasti se bariéra nejvíc projevuje.",
          "Diagnóza určuje stejnou povahu potíží ve všech částech školního dne.",
          "Pokud výuka funguje, obtíž už není pro školu relevantní.",
          "Přestávky nejsou součástí školního fungování, proto je není třeba do podpory zahrnovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 44,
        "text": "Dítě s bohatým odborným zájmem selhává hlavně tehdy, když má rychle shrnout myšlenku do stručného psaného výstupu pod časem. Co je nejpřesnější čtení?",
        "options": [
          "Silná obsahová stránka sama stačí; forma školního výkonu není pro podporu podstatná.",
          "Jde hlavně o nízkou motivaci ke školním úkolům, protože dítě raději mluví než píše.",
          "Je třeba zvažovat, zda bariéra neleží ve formě, tempu a organizaci výstupu, nikoli v samotném porozumění.",
          "Jde hlavně o sluchové postižení, protože ústní forma je úspěšnější než písemná."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 45,
        "text": "Žák při orientaci ve třídě a na chodbě potřebuje opakovaně slovní popis prostoru, ale učivo při poslechu chápe velmi dobře. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu intelektového vývoje, protože samostatná orientace bývá součástí školní zralosti.",
          "Jde hlavně o komunikační obtíž, protože žák potřebuje slovní podporu.",
          "Jde hlavně o poruchu chování, protože se při přesunech stává závislým na dospělém.",
          "Těžiště je spíše v prostorové orientaci a mobilitě než v porozumění učivu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 46,
        "text": "Žák s poruchou intelektového vývoje v jedné známé trase funguje samostatně, ale při drobné změně pořadí kroků nebo prostředí rychle znejistí. Co je nejpřesnější interpretace?",
        "options": [
          "Zvládnutá rutina ještě sama neznamená stabilní adaptivní samostatnost v proměnlivé situaci.",
          "Jakmile žák jednu trasu zvládne, je adaptivní samostatnost v této oblasti vyřešena.",
          "Jde hlavně o zrakové postižení, protože změna prostředí zvyšuje prostorové nároky.",
          "Jde hlavně o poruchu chování, protože změnu odmítá."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 47,
        "text": "Dítě reaguje na humor doslovně, ale v přesně vymezených vědomostních otázkách odpovídá velmi dobře. Co je pro podporu důležitější než samotný název diagnózy?",
        "options": [
          "Jak se obtíž konkrétně promítá do sociálního porozumění a participace.",
          "Které písmeno diagnózy je uvedeno v dokumentaci.",
          "Jak rychle dítě zvládne napsat test bez ohledu na typ úloh.",
          "Zda učitel považuje chování dítěte za sympatické."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 48,
        "text": "Dítě má při hlasitém čtení nápadné chyby, ale při tichém čtení zvětšeného textu a následném obsahu odpovídá přesně. Co je nejpřesnější závěr?",
        "options": [
          "Jádrem je určitě porucha hlasu, protože chyba je nejvíc vidět při hlasitém čtení.",
          "Jádrem je určitě porucha intelektového vývoje, protože hlasité čtení je základní školní dovednost.",
          "Je třeba odlišit techniku a podmínky čtení od porozumění obsahu.",
          "Jádrem je určitě porucha chování, protože dítě mění výkon podle situace."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 49,
        "text": "Žák s obtížemi v komunikaci dobře reaguje na vizuální plán, rozfázování a předem oznámené změny. Co je nejpřesnější interpretace tohoto účinku?",
        "options": [
          "Ukazuje hlavně, že žák je pohodlný a bez podpory by mohl fungovat stejně.",
          "Ukazuje, že předvídatelnost a explicitní struktura snižují část komunikační a regulační zátěže.",
          "Ukazuje hlavně na tělesné postižení, protože plán usnadňuje organizaci pohybu.",
          "Ukazuje hlavně na nízkou inteligenci, protože žák potřebuje zjednodušený režim."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 50,
        "text": "Které pravidlo je pro hard-mode funkční čtení obtíže nejpřesnější?",
        "options": [
          "Vyjít hlavně z toho, která diagnóza zní nejzávažněji.",
          "Vyjít hlavně z toho, co je ve škole organizačně nejsnazší.",
          "Vyjít z toho, co je v konkrétní situaci hlavní bariéra, jaký má funkční dopad a co z ní plyne pro podporu.",
          "Vyjít hlavně z prvního nápadného znaku, protože ten bývá zpravidla nejdůležitější."
        ],
        "correct": 2,
        "correctLetter": "C"
      }
    ],
    "validation": {
      "answerDistribution": {
        "D": 12,
        "B": 13,
        "A": 13,
        "C": 12
      },
      "distributionTarget": "13/13/12/12 bez rytmického vzorce",
      "distributionBalanced": true
    }
  },
  {
    "id": 2,
    "label": "Baterie 2",
    "title": "Diferenciální rozlišení blízkých rámců",
    "subtitle": "Jemné odborné rozlišování mezi podobnými interpretačními rámci speciální pedagogiky a poradenství.",
    "purpose": "Testovat, zda uchazeč umí rozhodnout, který z blízkých rámců je v dané situaci přesnější: logopedie × surdopedie, psychopedie × širší vývojový rámec, PAS × nepřístupná komunikace či prostředí, etopedie × sekundární reakce na dlouhodobé selhávání a tyflopedie × somatopedie × kombinovaný profil.",
    "difficulty": "vysoká",
    "dominant": [
      "logopedický × surdopedický rámec",
      "psychopedie × širší vývojový rámec",
      "PAS × nepřístupná komunikace nebo prostředí",
      "etopedie × sekundární reakce na dlouhodobé selhávání",
      "tyflopedický × somatopedický × kombinovaný profil",
      "hlavní těžiště × sekundární projev"
    ],
    "breakdown": [
      "10× logopedie × surdopedie × komunikační přístupnost",
      "8× psychopedie × širší vývojový rámec",
      "10× PAS × nepřístupná komunikace a prostředí",
      "10× etopedie × sekundární reakce na dlouhodobé selhávání",
      "8× tyflopedie × somatopedie × kombinovaný profil",
      "4× syntetické diferenciální položky"
    ],
    "tags": [
      "diferenciální rozlišení",
      "blízké rámce",
      "funkční interpretace",
      "sekundární projevy",
      "UPOL hard mode"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Žák při rozhovoru tváří v tvář odpovídá přesně, ale při výkladu z větší vzdálenosti a v hluku ztrácí obsah. Který závěr je nejpřesnější?",
        "options": [
          "Jádro je hlavně v artikulaci, protože skupinový výklad vždy nejvíc zatěžuje výslovnost.",
          "Jádro je spíše v přístupu k mluvené informaci a komunikačních podmínkách než v samotné produkci řeči.",
          "Jádro je hlavně v nízké motivaci, protože v individuálním kontaktu se žák přirozeně více snaží.",
          "Jádro je hlavně v grafomotorice, protože ztráta obsahu ve třídě bývá spojena s tempem zápisu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 2,
        "text": "Dítě má nápadně nepřesnou výslovnost několika hlásek, ale dobře rozumí instrukcím, reaguje i při běžném tempu řeči a ve třídě se neztrácí v obsahu. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o PAS, protože nepřesná výslovnost obvykle ukazuje na širší sociálně-komunikační rámec.",
          "Jde hlavně o psychopedický problém, protože chyba ve výslovnosti bývá projevem nižší úrovně rozumových schopností.",
          "Jde hlavně o etopedický problém, protože nepřesná výslovnost vede často k odmítání pravidel.",
          "Jádro je spíše logopedické, protože těžiště je v produkci řeči, ne v přístupu k obsahu sdělení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 3,
        "text": "Žák opakovaně žádá o zopakování, když učitel mluví otočený k tabuli, ale při přímém kontaktu odpovídá bez potíží. Která interpretace je nejpřesnější?",
        "options": [
          "Těžiště je spíše v komunikační dostupnosti řeči a podmínkách odezírání či poslechu než v poruše formulace odpovědi.",
          "Těžiště je spíše v neochotě spolupracovat, protože žák reaguje selektivně podle osoby.",
          "Těžiště je spíše v poruše intelektového vývoje, protože proměnlivý výkon bývá známkou nízké rozumové úrovně.",
          "Těžiště je spíše v jemné motorice, protože práce u tabule zvyšuje celkovou zátěž."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 4,
        "text": "Žák s kochleárním implantátem mluví srozumitelně, ale po delším poslechu rychle roste únava a klesá přesnost zachycení detailů. Který závěr je nejpřesnější?",
        "options": [
          "Je vhodné uzavřít situaci hlavně jako emoční labilitu, protože únava po výuce bývá především psychická.",
          "Je vhodné uzavřít situaci hlavně jako grafomotorický problém, protože detailní poslech zatěžuje zápis.",
          "Je vhodné číst situaci především surdopedicky: srozumitelná řeč neznamená, že dlouhodobý auditivní příjem je bez bariéry.",
          "Je vhodné číst situaci především logopedicky, protože srozumitelnost řeči je hlavním ukazatelem jádra obtíže."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 5,
        "text": "Žák má dlouhodobě chrapot, hlas se po kratší zátěži zhoršuje, ale porozumění běžné mluvené komunikaci je bez nápadné bariéry. Který rámec je přesnější?",
        "options": [
          "Těžiště je spíše logopedické, protože problém je hlavně v hlasové produkci, ne v přístupu k obsahu sdělení.",
          "Těžiště je spíše surdopedické, protože každá nápadná odchylka hlasu ukazuje na potíže se sluchem.",
          "Těžiště je spíše etopedické, protože kolísání hlasu bývá výrazem napětí a nespolupráce.",
          "Těžiště je spíše tyflopedické, protože přetížení hlasu souvisí s kompenzací zrakových bariér."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Ve třídě se žák jeví jako „neposlouchající“, ale při titulcích, psaném zadání a jasném vizuálním kontaktu pracuje výrazně lépe. Které čtení situace je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu chování, protože selektivní výkon ukazuje na účelové rozhodování.",
          "Jde hlavně o psychopedický problém, protože lepší výkon s titulky ukazuje na nižší kapacitu porozumění.",
          "Jde hlavně o logopedický problém, protože psané zadání ulevuje artikulaci.",
          "Jde spíše o bariéru v dostupnosti mluvené informace a je třeba promyslet přístupnější komunikační podmínky."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 7,
        "text": "Dítě má omezenou slovní zásobu a zjednodušenou větnou stavbu, ale zároveň není hlavní potíž v tom, že by neslyšelo pokyny ve třídě. Co je nejpřesnější?",
        "options": [
          "Nejpřesnější je hned uzavřít somatopedický rámec, protože chudší řeč často souvisí s tělesným oslabením.",
          "Bližší je logopedický či širší jazykový vývojový rámec než surdopedické čtení založené na přístupu ke zvuku.",
          "Cílem je číst situaci hlavně etopedicky, protože omezená slovní zásoba bývá zdrojem vzdoru.",
          "Důvodem je pravděpodobně především zraková bariéra, protože zjednodušené věty bývají reakcí na vizuální zátěž."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 8,
        "text": "Žák ve skupinové debatě často mine otázku, ale v klidném individuálním rozhovoru formuluje věcně a přesně. Který závěr je nejpřesnější jako první?",
        "options": [
          "Jde hlavně o nízkou inteligenci, protože skupinová debata odhaluje skutečný strop porozumění.",
          "Běžná skupinová debata je vždy především etopedická zátěž, proto je třeba vycházet z kázně.",
          "Cílem je nejdřív rozlišit, zda je jádro v komunikačních podmínkách a dostupnosti informace, ne v samotné formulaci obsahu.",
          "Dítě je třeba číst primárně logopedicky, protože přesná formulace v rozhovoru ukazuje na artikulační kompenzaci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 9,
        "text": "Dospívající má izolovanou přetrvávající chybu v několika hláskách, jinak vede běžný dialog, chápe nadsázku i obsah výuky. Co je nejpřesnější?",
        "options": [
          "Jde spíše o dílčí logopedický problém, nikoli o širší sociálně-komunikační nebo sluchový rámec.",
          "Jde spíše o PAS, protože přetrvávající chyba ve výslovnosti bývá typická pro sociální nepružnost.",
          "Jde spíše o surdopedický problém, protože jakákoli dlouhodobá odchylka řeči ukazuje na sluchovou bariéru.",
          "Jde spíše o psychopedický problém, protože přesná výuka a dialog vylučují jiný rámec."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Při diktátu žák výrazně ztrácí obsah, ale po předložení téhož zadání písemně postupuje samostatně a přesně. Která interpretace je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu chování, protože písemný úkol je pro žáka méně náročný na sebekázeň.",
          "Bariéra je hlavně v jemné motorice, protože diktát klade vyšší nároky na zápis.",
          "Cílem je číst situaci hlavně psychopedicky, protože diktát nejlépe odhaluje schopnost abstrakce.",
          "Důležitější než logopedická produkce je zde rozlišení přístupu k auditivní informaci oproti písemné opoře."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 11,
        "text": "Žák má v některých školních oblastech natrénované rutiny, ale výrazně zaostává v samostatném plánování, orientaci v čase a penězích i v běžné sebeobsluze. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o etopedický problém, protože selhávání v rutinách ukazuje na nízkou disciplínu.",
          "Běžnější je uvažovat jen o specifické poruše učení, protože školy sledují především akademické oblasti.",
          "Cílem je číst situaci psychopedicky přes adaptivní fungování, ne jen přes jednotlivé nacvičené školní dovednosti.",
          "Důležitější je logopedický rámec, protože plánování času a peněz souvisí s pojmenováním pojmů."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Dítě po delším období oslabené stimulace působí ve škole opožděně, ale při cílené opoře rychle dohání nové postupy a v běžné sebeobsluze funguje přiměřeně. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je hned uzavřít poruchu intelektového vývoje, protože opožděnost ve škole má zpravidla stabilní jádro.",
          "Bližší je širší vývojový či sociální kontext a potřeba dalšího sledování než rychlé psychopedické uzavření.",
          "Cílem je číst situaci primárně tyflopedicky, protože opožděnost bývá často reakcí na vizuální oslabení.",
          "Důležitější je etopedický rámec, protože opožděnost po delší zátěži ukazuje na rezistenci vůči učení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 13,
        "text": "Žák zvládá mechanicky naučené učivo, ale selhává v přenosu do nové situace, v sociálním odhadu a ve funkční samostatnosti. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o zrakové postižení, protože přenos do nové situace je typicky vizuální problém.",
          "Běžnější je uzavřít izolovanou poruchu artikulace, protože funkční samostatnost souvisí s verbálním vyjádřením.",
          "Cílem je číst situaci hlavně jako nechuť riskovat, protože přenos do nové situace vyžaduje odvahu.",
          "Důležitější je psychopedické čtení přes omezenou generalizaci a adaptivní fungování než přes izolovanou školní chybu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 14,
        "text": "V předškolním věku je dítě opožděné napříč více oblastmi, ale profil je zatím nestabilní a vývoj se při podpoře proměňuje. Jaký závěr je nejpřesnější?",
        "options": [
          "Je vhodnější pracovat se širším vývojovým rámcem a průběžným sledováním než s definitivním psychopedickým uzávěrem.",
          "Je vhodnější hned rozhodnout, že jde o etopedii, protože proměnlivý profil bývá projevem regulačních potíží.",
          "Je vhodnější uzavřít čistě logopedický rámec, protože víceoborová opožděnost začíná zpravidla v řeči.",
          "Je vhodnější předpokládat především surdopedický problém, protože proměnlivost výkonu bývá dána sluchem."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 15,
        "text": "Žák má slabý školní výkon, ale v běžných každodenních situacích se orientuje přiměřeně, chápe sociální pravidla a rychle se učí při názorné opoře. Co je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít somatopedický problém, protože názorná opora vždy ukazuje na potřebu fyzického přizpůsobení.",
          "Bližší je psychopedický rámec, protože každé školní oslabení znamená sníženou rozumovou úroveň.",
          "Cílem je rozlišit širší výukový nebo vývojový kontext od psychopedického čtení, protože adaptivní fungování zde není hlavní oslabenou oblastí.",
          "Důležitější je etopedické čtení, protože slabý školní výkon a rychlé učení při opoře ukazují na výběrovou spolupráci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Rodič opírá závěr hlavně o nízký výsledek jednoho inteligenčního testu, ale učitel popisuje samostatnost, přiměřenou sebeobsluhu a dobré sociální učení v běžných situacích. Co je nejpřesnější?",
        "options": [
          "Stačí převzít testový výsledek, protože psychopedický závěr je na něm postaven přímo a bez širšího kontextu.",
          "Běžnější je neuzavírat rámec jen podle jednoho testového skóru a zohlednit i adaptivní fungování a další kontexty.",
          "Cílem je číst situaci především surdopedicky, protože testový výkon bývá zkreslen sluchem.",
          "Důležitější je etopedické čtení, protože nesoulad mezi školou a testem ukazuje na manipulaci chováním."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 17,
        "text": "Žák je v běžných činnostech zranitelný v sociálním úsudku, orientaci v penězích a samostatném plánování, přesto ale umí v některých školních úlohách podat překvapivě dobrý výkon. Co je nejpřesnější?",
        "options": [
          "Takový rozpor psychopedický rámec nevylučuje; rozhodující je širší adaptivní fungování, ne jen ostrůvky výkonu.",
          "Takový rozpor automaticky ukazuje na PAS, protože dobré dílčí výkony a slabší sociální úsudek patří vždy tam.",
          "Cílem je uzavřít logopedii, protože plánování a peníze souvisejí hlavně se slovní zásobou.",
          "Důležitější je zrakový rámec, protože ostrůvky výkonu bývají kompenzací vizuální zátěže."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Žák působí ve škole „nezrale“, ale hlavní obtíže se týkají konceptuálního porozumění, sociálního úsudku a praktické samostatnosti v běžném životě. Který závěr je nejpřesnější?",
        "options": [
          "Je nejpřesnější zůstat u obecného dojmu nezralosti, protože ten pro plán podpory plně stačí.",
          "Běžnější je uzavřít etopedii, protože sociální nezralost přirozeně vede k problémům s chováním.",
          "Cílem je uvažovat hlavně o specifické poruše učení, protože běžný život do školy nepatří.",
          "Důležitější je pojmenovat širší psychopedické/adaptivní těžiště než zůstat u vágního dojmu nezralosti."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 19,
        "text": "Žák se rozruší hlavně při nečekané změně postupu, nejasném zadání a rušném přesunu. V předvídatelném režimu spolupracuje. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o poruchu chování, protože spolupráce v klidu ukazuje na účelové rozhodování.",
          "Bližší je číst situaci přes potřebu předvídatelnosti a úpravu komunikace či prostředí než jen přes kázeňský rámec.",
          "Cílem je uzavřít logopedický problém, protože nejasné zadání zatěžuje výslovnost.",
          "Důležitější je psychopedický rámec, protože změna postupu odhaluje nízkou schopnost abstrakce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 20,
        "text": "Ve třídní diskusi žák často mlčí a ztrácí se, ale v klidném rozhovoru jeden na jednoho vede smysluplný kontakt. Co je nejpřesnější jako první interpretace?",
        "options": [
          "Jde hlavně o psychopedický problém, protože skupinová diskuse nejlépe odhaluje rozumové možnosti.",
          "Důležitější je logopedický rámec, protože individuální rozhovor kompenzuje poruchu artikulace.",
          "Cílem je uzavřít etopedii, protože mlčení ve skupině bývá pasivní odpor.",
          "Běžnější je myslet na sociálně-komunikační či senzorické zatížení situace, ne jen na nízký zájem o lidi."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Žák rozumí doslovným pokynům, ale selhává hlavně u neurčitých, obrazných a implicitních zadání. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o zrakový problém, protože neurčitá zadání kladou větší nároky na vizuální orientaci.",
          "Běžnější je uzavřít etopedii, protože nerespektování implicitního zadání bývá vzdor.",
          "Důležitější je somatopedický rámec, protože obrazné zadání zatěžuje držení těla a tempo práce.",
          "Cílem je číst situaci přes potřebu explicitní a přístupnější komunikace spíše než jako pouhou neochotu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 22,
        "text": "Žák si při školním shromáždění zakrývá uši, odchází z prostoru a po návratu do klidné třídy se rychle stabilizuje. Co je nejpřesnější?",
        "options": [
          "Je vhodnější číst situaci přes senzorické přetížení a nároky prostředí než jako prostou neposlušnost.",
          "Je vhodnější uzavřít primárně psychopedii, protože hromadná akce prověřuje adaptivní úroveň.",
          "Je vhodnější uzavřít logopedii, protože reakce ve velkém prostoru bývají hlasovým problémem.",
          "Je vhodnější uzavřít etopedii, protože opuštění prostoru je samo o sobě kázeňský přestupek."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 23,
        "text": "Žák nezačne pracovat po ústní vícekrokové instrukci, ale po vizuálně rozloženém postupu úkol plní. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít nízkou motivaci, protože žák začne až ve chvíli, kdy je úkol jednodušší.",
          "Běžnější je uzavřít poruchu intelektového vývoje, protože bez vizuální opory není práce možná.",
          "Cílem je rozlišit nepřístupnou formu zadání od skutečné neochoty nebo neschopnosti zahájit práci.",
          "Důležitější je somatopedický rámec, protože vizuální krokování snižuje motorické nároky."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Dospívající v kolektivu naráží na nepsaná pravidla vrstevníků, reaguje nepřiměřeně přímočaře a až následně se dostává do konfliktů. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o etopedii, protože konflikty s vrstevníky vždy ukazují na poruchu chování.",
          "Důležitější je logopedický rámec, protože přímočarost ve vyjadřování je hlavně otázka artikulace.",
          "Cílem je uzavřít surdopedii, protože nepsaná pravidla se nejlépe učí sluchem.",
          "Bližší je sociálně-komunikační interpretace a potřeba explicitnější podpory vztahových pravidel než rychlé morální hodnocení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Žák opakovaně žádá dopředu přesný plán výletu, změna harmonogramu zvyšuje úzkost a kvalita spolupráce klesá. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o manipulaci, protože předem položené otázky slouží k ovládnutí situace.",
          "Běžnější je logopedický problém, protože potřeba přesného plánu souvisí s jazykovým nácvikem.",
          "Cílem je uzavřít etopedii, protože úzkost ze změny je formou odporu.",
          "Důležitější je číst potřebu předvídatelnosti a explicitní struktury než samotný povrch opakovaných dotazů."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 26,
        "text": "Žák mluví plynule a bohatě o vlastním tématu, ale v běžném rozhovoru přehlíží střídání rolí a potřebu reagovat na perspektivu druhého. Co je nejpřesnější?",
        "options": [
          "Jde spíše o PAS či pragmatickou bariéru v sociální komunikaci než o samotnou technickou stránku řeči.",
          "Jde spíše o surdopedii, protože plynulá řeč o vlastním tématu ukazuje na kompenzaci sluchu.",
          "Cílem je uzavřít psychopedii, protože jednostranné téma bývá znakem nižší inteligence.",
          "Důležitější je etopedický rámec, protože nerespektování střídání rolí je projev nevychovanosti."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 27,
        "text": "Při rušném přesunu a souběhu více pokynů žák „nevnímá“, ale po rozdělení instrukce na krátké explicitní kroky spolupracuje. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o somatopedii, protože krátké kroky snižují motorickou náročnost.",
          "Bližší je číst situaci jako potíž se zpracováním nepřehledné komunikace a prostředí než jako prostou nepozornost.",
          "Cílem je uzavřít logopedii, protože krátké kroky zlepšují artikulaci.",
          "Důležitější je etopedické čtení, protože v rušném prostředí se žák snadněji rozhoduje pravidla porušit."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 28,
        "text": "Žák před každou novou situací opakuje stejné dotazy, i když odpověď už dostal. Které čtení je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedickou perseveraci, protože opakované otázky patří k produkci řeči.",
          "Běžnější je uzavřít etopedii, protože opakováním si žák vynucuje pozornost.",
          "Cílem je rozlišit, zda opakované otázky fungují jako sebeujišťování v nejistotě a hledání stability, ne jen jako nevhodný zvyk.",
          "Důležitější je surdopedický rámec, protože opakované otázky vždy znamenají, že žák špatně slyší odpověď."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 29,
        "text": "Žák ruší hlavně při práci s delším textem, ale v praktických a ústních úkolech spolupracuje přiměřeně. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o zrakový problém, protože delší text automaticky znamená potíž se čtením zraku.",
          "Běžnější je číst rušení jako sekundární reakci na opakované akademické selhávání, ne hned jako samostatné etopedické těžiště.",
          "Cílem je uzavřít logopedii, protože delší text zvyšuje nároky na výslovnost.",
          "Důležitější je psychopedie, protože rušení při textu vždy ukazuje na nízkou inteligenci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 30,
        "text": "Dítě reaguje výbušně hlavně při veřejné opravě chyb, po individuálním klidném vedení se zapojí. Co je nejpřesnější?",
        "options": [
          "Běžnější je číst situaci jako ochrannou reakci na ohrožení a zahanbení než jako čistě primární etopedii.",
          "Jde hlavně o surdopedii, protože veřejná oprava zvyšuje nároky na poslech.",
          "Cílem je uzavřít psychopedii, protože emoční výbuch po opravě ukazuje na nízkou frustraci z důvodu nižších schopností.",
          "Důležitější je logopedický rámec, protože individuální klidné vedení snižuje tlak na řeč."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 31,
        "text": "Dospívající vynechává hlavně předměty, v nichž dlouhodobě selhává a zažívá ponížení, zatímco v jiných hodinách je docházka stabilnější. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o somatopedii, protože selektivní vyhýbání se hodinám ukazuje na únavu.",
          "Běžnější je logopedický rámec, protože selhání v předmětu bývá důsledkem jazykových obtíží.",
          "Cílem je zjišťovat funkci úniku a vazbu na dlouhodobé selhávání místo rychlého uzávěru o obecné delikvenci.",
          "Důležitější je zrakový rámec, protože ponížení bývá typické pro práci s tabulí."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Žák v kontaktu s důvěryhodným dospělým umí popsat své potíže, ale ve třídě reaguje sarkasmem a odmítáním. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedii, protože sarkasmus patří do řečové produkce.",
          "Bližší je chápat sarkasmus jako obranný způsob zvládání ohrožení než jako jediný důkaz samostatného etopedického těžiště.",
          "Cílem je uzavřít psychopedii, protože schopnost popsat potíže v rozhovoru vyvrací jiný rámec.",
          "Důležitější je surdopedie, protože sarkasmus vzniká z nejistoty v poslechu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 33,
        "text": "Žák získává status tím, že ruší výuku, zejména poté, co byl opakovaně označován za slabého a neúspěšného. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o tyflopedii, protože potřeba statusu bývá kompenzací zrakové nejistoty.",
          "Běžnější je uzavřít čistě morální selhání, protože hledání statusu vždy znamená vědomé zlo.",
          "Cílem je číst, jak selhávání a sociální pozice ve třídě spoluvytvářejí funkci chování, ne jen trestat vnější projev.",
          "Důležitější je logopedický rámec, protože označování slabý mění kvalitu řeči."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 34,
        "text": "Při čtenářsky náročném úkolu žák opouští místo, ale u jednodušeji přístupné práce zůstává a zapojí se. Který závěr je nejpřesnější?",
        "options": [
          "Bližší je číst útěk jako reakci na nepřiměřenou zátěž a selhávání než jako automatickou etopedii.",
          "Jde hlavně o psychopedii, protože odchod od místa je běžným znakem nižší rozumové úrovně.",
          "Cílem je uzavřít surdopedii, protože čtenářsky náročný úkol zvyšuje nároky na sluch.",
          "Důležitější je somatopedický rámec, protože odchod od místa znamená potřebu pohybu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 35,
        "text": "Žák je konfliktní téměř výhradně při diktátu a psaní, zatímco v ústních nebo praktických činnostech je regulace výrazně lepší. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o etopedii, protože konfliktnost ve škole je sama o sobě dostatečný důkaz.",
          "Bližší je hledat vazbu na opakovaně selhávající oblast a odlišit sekundární reakci od primárního etopedického rámce.",
          "Cílem je uzavřít logopedii, protože diktát zatěžuje mluvenou řeč.",
          "Důležitější je zrakový rámec, protože praktické činnosti jsou méně vizuální."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 36,
        "text": "Dítě po sérii neúspěchů začíná tvrdit, že „je mu to jedno“, a ruší spolužáky hlavně ve chvíli, kdy už samo nestíhá. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o surdopedii, protože nestíhání je typický znak potíží ve slyšení.",
          "Běžnější je uzavřít somatopedii, protože zpoždění práce ukazuje na fyzickou únavu.",
          "Cílem je číst projevy jako ochrannou strategii po opakovaném neúspěchu, ne jen jako autonomní etopedické jádro.",
          "Důležitější je logopedický rámec, protože tvrzení „je mi to jedno“ ukazuje na jazykové zjednodušení."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 37,
        "text": "Po náhlém zhoršení školních výsledků a opakovaném neporozumění zadání začíná žák působit vzdorovitě. Který první závěr je nejpřesnější?",
        "options": [
          "Je vhodnější nejprve zkoumat, zda vzdor není sekundární reakcí na novou bariéru v přístupu k úkolu, než ho ihned etopedicky uzavřít.",
          "Je vhodnější hned trestat, protože chování musí být řešeno odděleně od příčiny.",
          "Cílem je uzavřít psychopedii, protože zhoršení výsledků automaticky znamená snížení intelektu.",
          "Důležitější je logopedický rámec, protože nové neporozumění zadání vždy vzniká z artikulace."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "V rodině je dlouhodobě vysoký chaos, požadavky se mění a domácí příprava je pro žáka nepředvídatelná. Ve škole se to projevuje opozicí k úkolům. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedii, protože nepředvídatelnost doma narušuje výslovnost.",
          "Běžnější je uzavřít čistou etopedii, protože odpor k úkolům je sám o sobě dostatečný znak.",
          "Cílem je uzavřít zrakový rámec, protože chaos doma zvyšuje orientační zátěž.",
          "Důležitější je vnímat i kontext a podmínky, které mohou opozici spoluutvářet, ne redukovat situaci jen na morální vadu dítěte."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 39,
        "text": "Žák učivu rozumí, ale zpomalují ho přesuny, manipulace s pomůckami a fyzická výdrž; přístup k vizuální informaci je relativně zachovaný. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o psychopedii, protože zpomalení práce vždy ukazuje na nižší úroveň rozumových schopností.",
          "Běžnější je logopedický rámec, protože manipulace s pomůckami souvisí s řečí.",
          "Cílem je číst těžiště spíše somatopedicky než tyflopedicky, protože problém je v motorickém výkonu a účasti.",
          "Důležitější je etopedie, protože zpomalení práce bývá formou pasivního odporu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Žák si při čtení a práci s tabulí musí výrazně přibližovat materiál, vadí mu oslnění a drobný tisk, ale manipulace s pomůckami a mobilita jsou bez větších obtíží. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o psychopedii, protože čtenářská námaha vždy znamená nižší rozumové schopnosti.",
          "Bližší je tyflopedické čtení přes přístup k vizuální informaci než somatopedické čtení motorického výkonu.",
          "Cílem je uzavřít etopedii, protože přibližování materiálu je snaha vyhnout se náročné práci.",
          "Důležitější je logopedický rámec, protože drobný tisk zatěžuje jazykové zpracování."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 41,
        "text": "U dítěte jsou současně výrazné obtíže v orientaci v prostoru i v manipulaci s materiály kvůli omezené hybnosti horních končetin. Co je nejpřesnější?",
        "options": [
          "Je třeba uvažovat kombinovaný funkční profil a nevnucovat situaci jen do čistě tyflopedického nebo čistě somatopedického rámce.",
          "Je nejpřesnější vybrat jen jeden dominantní obor, protože kombinovaná interpretace bývá příliš široká.",
          "Cílem je uzavřít etopedii, protože více obtíží najednou často vede k frustraci.",
          "Důležitější je logopedie, protože práce s materiály je součástí komunikace."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Žák má potíže hlavně s jemnými schématy, mapami a malými vizuálními detaily, ale přesuny i tělesná výdrž jsou přiměřené. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o psychopedii, protože mapa je abstraktní školní úloha.",
          "Běžnější je uzavřít somatopedii, protože práce s mapou vyžaduje posturální výdrž.",
          "Cílem je uzavřít etopedii, protože vyhýbání se detailu bývá pohodlnost.",
          "Důležitější je tyflopedické čtení bariéry v přístupu k vizuálním detailům než somatopedické čtení mobility."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 43,
        "text": "Žák potřebuje více času hlavně kvůli přesunům, polohování a organizaci pracovního místa, zatímco porozumění zadání je přiměřené. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedii, protože více času obvykle souvisí s verbálním zpracováním.",
          "Běžnější je číst situaci etopedicky, protože pomalost práce vede k vyhýbání.",
          "Cílem je číst těžiště somatopedicky přes organizaci účasti a výkonu, ne psychopedicky přes porozumění.",
          "Důležitější je tyflopedie, protože polohování pracovního místa souvisí s viděním."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Dítě používá hmatové a orientační strategie, ale současně má omezenou funkci rukou, což komplikuje běžné zacházení s materiály. Který rámec je nejpřesnější?",
        "options": [
          "Jde hlavně o logopedii, protože hmatové strategie nahrazují mluvenou řeč.",
          "Bližší je kombinovaný tyflopedicko-somatopedický profil než redukce jen na jeden obor.",
          "Cílem je uzavřít psychopedii, protože kombinace obtíží znamená nižší intelekt.",
          "Důležitější je etopedie, protože komplikace s materiály zvyšují riziko frustrace."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 45,
        "text": "Žák se vyhýbá delší práci po období léčby, rychle se unaví a potřebuje režimové úpravy, ale neukazuje se hlavní bariéra v přístupu k textu ani v porozumění. Co je nejpřesnější?",
        "options": [
          "Jde spíše o zdravotní oslabení či somatopedický rámec než o morální neochotu k práci.",
          "Běžnější je uzavřít etopedii, protože vyhýbání se práci vždy znamená odpor vůči povinnostem.",
          "Cílem je uzavřít tyflopedii, protože únava vzniká hlavně z vizuálního přetížení.",
          "Důležitější je logopedický rámec, protože léčba často zhorší artikulaci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Dítě naráží do překážek hlavně za šera, nejisté je v prostoru, ale jemná manipulace i fyzická výdrž jsou přiměřené. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o psychopedii, protože prostorová nejistota vždy znamená nižší úsudek.",
          "Běžnější je etopedie, protože narážení do překážek bývá nepozornost.",
          "Cílem je uzavřít somatopedii, protože nejistý pohyb je vždy motorický problém.",
          "Důležitější je tyflopedické čtení orientační bariéry v závislosti na zrakových podmínkách."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 47,
        "text": "Žák s kochleárním implantátem má srozumitelnou řeč, ale při hodině prokazatelně ztrácí obsah, když učitel mluví od tabule a bez vizuální opory. Která interpretace je nejpřesnější?",
        "options": [
          "Jádro je hlavně v poruše výslovnosti, protože srozumitelná řeč bývá u implantátu nestabilní.",
          "Jádro je spíše v dostupnosti mluvené informace v konkrétních komunikačních podmínkách než v samotné produkci řeči.",
          "Jádro je hlavně v etopedii, protože žák reaguje selektivně podle uspořádání hodiny.",
          "Jádro je hlavně v psychopedii, protože ztráta obsahu při výkladu ukazuje na nižší rozumovou úroveň."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 48,
        "text": "Po letech čtenářského neúspěchu začne žák před textem vtipkovat, rušit a zlehčovat práci, ale při ústním shrnutí obsahu se orientuje lépe. Co je nejpřesnější?",
        "options": [
          "Jde hlavně o surdopedii, protože ústní shrnutí snižuje nároky na sluch.",
          "Běžnější je uzavřít čistou etopedii, protože vtipkování a rušení jsou samostatné poruchové projevy.",
          "Cílem je číst projevy jako sekundární obranu proti oblasti opakovaného selhávání, ne jen jako primární chování.",
          "Důležitější je logopedie, protože ústní shrnutí kompenzuje výslovnost."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 49,
        "text": "Žák mluví plynule, ale v hluku a v nejasně strukturované skupinové práci se ztrácí, reaguje doslovně a konfliktně. Která interpretace je nejpřesnější?",
        "options": [
          "Těžiště je spíše v sociálně-komunikačním a situačním zpracování než v samotné technické produkci řeči.",
          "Těžiště je hlavně v logopedii, protože plynulá řeč bývá u širších rámců vzácná.",
          "Cílem je uzavřít psychopedii, protože konfliktnost ve skupině ukazuje na nižší úroveň myšlení.",
          "Důležitější je somatopedie, protože skupinová práce bývá motoricky náročnější."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Dítě se zrakovým omezením a omezenou hybností potřebuje plánovat orientaci, komunikaci s materiály i manipulaci jako propojený celek. Který závěr je nejpřesnější?",
        "options": [
          "Stačí zvolit pouze tyflopedický rámec, protože zraková složka v podobných případech vždy převáží.",
          "Bližší je kombinovaný funkční profil, v němž se tyflopedické a somatopedické těžiště navzájem ovlivňují.",
          "Cílem je číst situaci hlavně etopedicky, protože více omezení zvyšuje riziko frustrace.",
          "Důležitější je logopedie, protože komunikace s materiály je primárně řečový problém."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "B": 13,
        "D": 12,
        "A": 13,
        "C": 12
      },
      "distributionTarget": "13/13/12/12 bez rytmického vzorce",
      "distributionBalanced": true
    }
  },
  {
    "id": 3,
    "label": "Baterie 3",
    "title": "Volba podpory a intervence",
    "subtitle": "Převod bariéry do nejpřiměřenější podpory, úpravy výkonu a samostatnosti bez přehnané úlevy.",
    "purpose": "Testovat, zda uchazeč umí převést rozpoznanou bariéru do nejvhodnější podpory: rozlišit reedukaci, kompenzaci, rehabilitační a edukační těžiště, úpravu formy výkonu, přiměřenost opatření a hranici mezi podporou samostatnosti a převzetím výkonu za žáka.",
    "difficulty": "vysoká",
    "dominant": [
      "bariéra → volba podpory",
      "reedukace × kompenzace × rehabilitace",
      "úprava formy výkonu × neadekvátní úleva",
      "AAK a komunikační opory",
      "zrakové a sluchové přístupové úpravy",
      "PAS a strukturování prostředí",
      "somatopedie a přístup výkonu",
      "psychopedie a adaptivní fungování",
      "pomůcka + nácvik používání",
      "samostatnost a participace"
    ],
    "breakdown": [
      "25× bariéra → nejpřiměřenější podpora",
      "10× podpora → proč právě tato",
      "10× nevhodné vs nejvhodnější opatření",
      "5× základové opěrné body"
    ],
    "tags": [
      "intervence",
      "podpora",
      "AAK",
      "pomůcky",
      "samostatnost"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Která volba nejpřesněji odpovídá reedukaci ve speciálněpedagogické práci?",
        "options": [
          "Cílený nácvik oslabené funkce s průběžným ověřováním, zda se výkon skutečně zlepšuje.",
          "Volba jiné cesty k výkonu bez očekávání výrazného posílení oslabené funkce.",
          "Širší podpora soběstačnosti a participace napříč více oblastmi života.",
          "Úprava organizace a hodnocení tak, aby prostředí kladlo méně bariér."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Žák s výraznou dysgrafií rozumí učivu, ale při delším ručním zápisu se jeho výkon rozpadá. Co je teď nejvhodnější?",
        "options": [
          "Zachovat stejný rozsah psaní a trénovat hlavně vyšší pracovní tempo.",
          "Oddělit obsah odpovědi od grafomotorické náročnosti a nabídnout přístupnější formu záznamu.",
          "Nechat většinu odpovědí zapisovat druhou osobou bez snahy o vlastní výkon žáka.",
          "Plošně snížit očekávání ve všech předmětech bez vazby na konkrétní bariéru."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Žák se zrakovým postižením čte plynule při zvětšení a vysokém kontrastu, bez těchto úprav se rychle ztrácí. Která podpora je nejpřiměřenější?",
        "options": [
          "Přesunout těžiště podpory hlavně k nácviku rychlejšího tichého čtení bez technických úprav.",
          "Snížit obsahové nároky v textu, protože přístupnost čtení znamená menší schopnost porozumění.",
          "Zajistit přístupné materiály se zvětšením a kontrastem a podle potřeby upravit vizuální formu zadání.",
          "Omezit samostatné čtení a text žákovi průběžně převyprávět, aby se nezatěžoval."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Žák se sluchovým postižením při frontální výuce ztrácí obsah hlavně tehdy, když učitel mluví otočený k tabuli a ve třídě je hluk. Co je nejvhodnější?",
        "options": [
          "Zadávat mu více samostatné práce, aby nebyl odkázán na mluvené instrukce ve třídě.",
          "Přesunout podporu hlavně k intenzivnějšímu nácviku artikulace, aby lépe sledoval výklad.",
          "Nechat spolužáka průběžně dopovídat vše, co žák neslyšel, bez dalších úprav výuky.",
          "Zvýšit dostupnost mluvené informace: práce čelem k žákovi, omezení hluku, jasné instrukce a vhodná technická opora."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Žák s PAS zvládá učivo, ale selhává při náhlých změnách režimu a nepřímých pravidlech. Který postup je nejpřiměřenější?",
        "options": [
          "Zavést předvídatelnou strukturu, vizuální opory a jasně formulovaná očekávání pro změnové situace.",
          "Zvýšit náhodnost zadání, aby si rychleji zvykl fungovat bez opor.",
          "Soustředit se hlavně na delší rozbory pocitů po každém selhání bez úprav prostředí.",
          "Omezit podporu na častější napomínání, aby si osvojil běžný třídní režim."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Dítě s těžce omezenou mluvenou řečí potřebuje ve škole opravdu komunikovat, nejen cvičit. Jaký krok je nejvhodnější?",
        "options": [
          "Vyčkat, zda se nerozvine běžná řeč, a jiné komunikační cesty zatím nezavádět.",
          "Volit AAK podle reálných schopností uživatele a situací, ve kterých potřebuje skutečně něco sdělit.",
          "Vybrat řešení hlavně podle toho, co je technicky nejmodernější, i kdyby s ním dítě neumělo zacházet.",
          "Omezit komunikaci jen na terapeutické situace, aby se dítě v běžném provozu nepřetěžovalo."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Žák s tělesným postižením ví správné odpovědi, ale psaní je pro něj velmi pomalé a únavné. Co je nejpřiměřenější při ověřování znalostí?",
        "options": [
          "Zachovat stejný písemný formát a hodnotit, jak rychle se mu podaří dopsat celý test.",
          "Přesunout většinu výkonu na asistenta, aby byl výsledek technicky čistší.",
          "Upravit formu výstupu a čas tak, aby mohl prokázat znalost bez zbytečné motorické bariéry.",
          "Snížit obsah zadání v každém předmětu, protože pomalé psaní znamená nižší vzdělávací potenciál."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Dítě s poruchou intelektového vývoje se učí ranní školní rutinu, ale bez opory ji nedokáže samo dokončit. Která podpora je nejvhodnější?",
        "options": [
          "Zrychlit přechod k abstraktním pokynům, aby si vytvořilo obecnější pravidla.",
          "Nechat rutinu trvale provádět dospělého, protože samostatnost v této oblasti není realistická.",
          "Přenést těžiště hlavně na dlouhé vysvětlování významu každého kroku bez praktického nácviku.",
          "Rozložit rutinu do konkrétních kroků, nacvičovat ji v opakujícím se režimu a postupně opory ubírat."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Žák rozumí mluveným instrukcím, ale kvůli těžké dysartrii je jeho řeč pro okolí obtížně srozumitelná. Co je nyní nejvhodnější?",
        "options": [
          "Rozšířit možnosti vyjádření pomocí AAK a multimodální komunikace, nečekat jen na zlepšení mluvené řeči.",
          "Těžiště přesunout na ještě častější veřejné mluvené výkony před třídou.",
          "Komunikaci ve škole omezit na uzavřené otázky ano/ne, aby byl provoz rychlejší.",
          "Snížit nároky na obsah sdělení, protože nesrozumitelná řeč znamená menší porozumění."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Žák s výrazným koktáním při tichém individuálním rozhovoru odpovídá obsahově dobře, ale veřejné čtení ho výrazně destabilizuje. Co je nejpřiměřenější?",
        "options": [
          "Zachovat veřejné čtení jako hlavní způsob ověřování, aby si postupně zvykl na tlak třídy.",
          "Oddělit obsahovou evaluaci od nejnáročnější mluvní situace a volit přístupnější formu ověření.",
          "Přesunout hodnocení hlavně k výslovnostní správnosti, aby se sledoval řečový pokrok.",
          "Ukončit veškeré ústní odpovědi, protože mluvený výkon je pro něj zcela nevhodný."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Škola pořídila kompenzační pomůcku, ale žák ji v běžné výuce skoro nepoužívá. Který závěr je nejpřesnější pro další podporu?",
        "options": [
          "Pořízení pomůcky samo o sobě obvykle stačí; nižší používání ukazuje hlavně na slabou motivaci žáka.",
          "Nejprve je vhodné pomůcku odložit a vrátit se k ní až po několika měsících bez další podpory.",
          "Pomůcka potřebuje nácvik v reálných situacích a sladění s vyučováním, jinak zůstane formální.",
          "Pokud pomůcka není hned používána spontánně, je lepší ji nahradit jinou bez analýzy bariér."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Žák s kombinovanými obtížemi zvládá práci jen v kratších úsecích a ke konci dopoledne výrazně zpomaluje. Jaké opatření je nejpřiměřenější?",
        "options": [
          "Ponechat stejný rozsah i tempo a spoléhat, že se výkon časem srovná bez úprav režimu.",
          "Přesunout podporu hlavně k častějšímu napomínání za zpomalení, aby se zlepšila výdrž.",
          "Omezit podporu jen na méně náročné úlohy, protože únava znamená nižší učební potenciál.",
          "Pracovat s rytmem zátěže: kratší úseky, rozvržení nároků, přestávky a prioritizace klíčových úkolů."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Žák na vozíku se má účastnit laboratorní práce, ale pracovní místo je uspořádáno tak, že se k materiálu nedostane. Co je nejpřiměřenější?",
        "options": [
          "Upravit prostor a organizaci úkolu tak, aby mohl aktivně pracovat s dostupnými pomůckami a rolí v týmu.",
          "Zadání nahradit jen pozorováním spolužáků, protože fyzická účast je v laboratoři druhořadá.",
          "Uvolnit ho z praktické části úplně, aby se předešlo riziku zdržení třídy.",
          "Nechat asistenta vykonat většinu úkolu za něj a výsledek hodnotit jako společnou práci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Dítě se sluchovým postižením při skupinové práci neztrácí kvůli obsahu, ale kvůli překrývajícím se hlasům a nejasnému střídání mluvčích. Co je nejvhodnější?",
        "options": [
          "Přesunout podporu hlavně k nácviku psaných výpisků po skupinové práci.",
          "Nastavit pravidla střídání mluvčích, vizuální signalizaci a dostupnější organizaci skupinové komunikace.",
          "Vyloučit dítě z většiny skupinových aktivit, aby pracovalo v klidnějším individuálním režimu.",
          "Požadovat, aby si obsah doplnilo až doma z poznámek spolužáků."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Žák s nízkou úrovní čtení kvůli dyslexii rozumí probíranému tématu při poslechu a diskuzi, ale v písemném testu nestačí číst zadání. Jaká podpora je nejpřiměřenější?",
        "options": [
          "Snížit náročnost učiva ve všech předmětech, protože čtenářská bariéra omezuje i porozumění obsahu.",
          "Zachovat stejnou časovou dotaci a počítat s tím, že čtení je součást výkonu bez další úpravy.",
          "Upravit přístup k zadání a formu práce s textem tak, aby se oddělila čtenářská bariéra od ověřovaného obsahu.",
          "Přesunout těžiště podpory hlavně k tréninku rychlého hlasitého čtení přímo během každého testu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Který krok je u zrakově postiženého žáka při práci s novou trasou po škole nejvhodnější?",
        "options": [
          "Nechat ho trasu vždy absolvovat pouze v doprovodu, aby se vyhnul chybám a nejistotě.",
          "Přesunout podporu hlavně k delším slovním popisům budovy bez praktického nácviku trasy.",
          "Počkat, až si prostředí zvykne samo přirozenou expozicí, bez strukturované podpory.",
          "Zajistit orientační nácvik trasy s vhodnými oporami a postupně posilovat samostatný pohyb."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Dítě s PAS zvládá třídu lépe než jídelnu, kde je hluk, nejasná pravidla a změny pořadí. Jaká podpora je nyní nejpřiměřenější?",
        "options": [
          "Upravit organizaci jídelny a přidat předvídatelné opory pro konkrétně zatěžující situaci.",
          "Soustředit se jen na rozhovory o tom, proč je důležité jídelnu tolerovat jako ostatní děti.",
          "Úplně ukončit pobyt v jídelně bez hledání přiměřenější formy zapojení.",
          "Vyčkat, zda obtíž sama neodezní, protože ve třídě dítě funguje dobře."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Žák s tělesným postižením při praktické práci rychle ztrácí stabilitu ruky, ale při vhodném usazení a delším čase pracuje přesněji. Co je nejvhodnější?",
        "options": [
          "Zachovat standardní tempo práce, aby bylo hodnocení spravedlivé vůči celé třídě.",
          "Přesunout podporu hlavně k většímu počtu domácích úkolů na jemnou motoriku.",
          "Nechat praktickou část provádět trvale spolužáka, aby se šetřila energie žáka.",
          "Upravit podmínky výkonu: stabilizace polohy, vhodné pomůcky a realistický čas na dokončení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 19,
        "text": "Dítě s poruchou intelektového vývoje se učí nakupovat ve školním bufetu. Který přístup je nejpřiměřenější?",
        "options": [
          "Nechat nákup většinou vyřídit dospělým, aby dítě nezažívalo chyby a zdržení.",
          "Přesunout těžiště hlavně k procvičování peněžních pojmů na pracovních listech bez reálné situace.",
          "Propojovat konkrétní nácvik v přirozené situaci s vizuální oporou a postupným osamostatňováním.",
          "Požadovat rychlé zvládnutí celé dovednosti bez mezikroků, aby se vytvořil silnější výkonový tlak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Žák s těžkou poruchou porozumění delším verbálním instrukcím se při více krocích rychle ztrácí. Jaká podpora je nejvhodnější?",
        "options": [
          "Zachovat dlouhé ústní instrukce a čekat, zda si na jejich délku postupně zvykne.",
          "Instrukce členit, vizualizovat a ověřovat porozumění po menších úsecích.",
          "Snížit obsah úkolů na minimum, aby nebylo potřeba tolik instrukcí.",
          "Přenést odpovědnost za pochopení hlavně na spolužáky, kteří mu budou zadání průběžně překládat."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 21,
        "text": "Žákovi bylo doporučeno používání digitální kompenzační pomůcky, ale učitel ji dovoluje jen při individuální práci mimo běžnou výuku. Co je nejpřesnější?",
        "options": [
          "Podpora zůstane polovičatá, pokud pomůcka není dostupná i v situacích, kde má reálně odstraňovat bariéru.",
          "Takové omezení je vhodné, protože pomůcky mají sloužit hlavně mimo společnou výuku.",
          "Nejlepší je zatím pomůcku nepoužívat vůbec, aby si žák nevytvářel závislost.",
          "Jde hlavně o otázku motivace; pokud by žák chtěl, pomůcku by nepotřeboval."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Žák se sluchovým postižením má při testu potíž hlavně s porozuměním ústně sděleným pokynům, nikoli s řešením samotných úloh. Co je nejvhodnější?",
        "options": [
          "Test nahradit jiným obsahem, protože sluchová bariéra zpochybňuje celé ověření znalosti.",
          "Zpřístupnit instrukce v dostupné formě a oddělit porozumění pokynu od ověřovaného obsahu.",
          "Přesunout podporu hlavně k nácviku psaní odpovědí, aby se zvýšila samostatnost.",
          "Nechat spolužáka pošeptat pokyny během testu bez dalších úprav organizačních pravidel."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Žák se zrakovým postižením pracuje v zeměpise s mapou, ale běžná drobná legenda je pro něj nepřístupná. Co je nejpřiměřenější?",
        "options": [
          "Přesunout výuku zeměpisu hlavně k poslechu výkladu bez práce s mapovými podklady.",
          "Snížit očekávání v tématu map natolik, aby je žák nemusel vůbec řešit.",
          "Zajistit přístupnou podobu mapy a legendy, například zvětšením, kontrastem nebo vhodnou hmatovou oporou podle profilu žáka.",
          "Nechat spolužáka legendu vždy rychle přečíst a dál s ní samostatně nepracovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Žák se při vícefázovém zadání neztrácí kvůli neochotě, ale kvůli slabé pracovní paměti a rozptýlení. Co je nejvhodnější?",
        "options": [
          "Vyžadovat, aby si celé zadání vždy zapamatoval bez opor, protože to posiluje samostatnost.",
          "Omezit všechny úkoly na jediný krok, aby se předešlo jakémukoli přetížení.",
          "Soustředit se hlavně na sankce za nedokončení, aby se zvýšila koncentrace.",
          "Rozdělit úkol do zvládnutelných částí, externě opřít kroky a průběžně vracet pozornost k cíli."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Žák s PAS chápe obsah pravidel, ale otevřené a neurčité pokyny typu „udělej to rozumně“ vedou k opakovaným chybám. Co je nejpřiměřenější?",
        "options": [
          "Převést neurčité pokyny do konkrétních kritérií a příkladů žádoucího postupu.",
          "Zachovat neurčitost, aby si žák osvojil běžnou flexibilitu bez dalších úprav.",
          "Přenést rozhodování na spolužáky, kteří mu v každé situaci řeknou, co má dělat.",
          "Vyhodnotit problém hlavně jako neochotu respektovat autoritu učitele."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Které vysvětlení nejlépe odůvodňuje kompenzační postup ve škole?",
        "options": [
          "Kompenzace znamená, že se obsah učení raději nahradí jednodušší látkou, aby žák méně selhával.",
          "Kompenzace hledá jinou funkční cestu k témuž cíli tam, kde je přímý výkon bariérový nebo nepřiměřeně náročný.",
          "Kompenzace se používá až tehdy, když byla reedukace definitivně ukončena a už nic dalšího nelze dělat.",
          "Kompenzace je vhodná hlavně tehdy, když škola potřebuje rychlé administrativní řešení bez větší práce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Proč je u žáka se sluchovým postižením v hlučné třídě vhodnější zvyšovat dostupnost signálu než jen mluvit hlasitěji?",
        "options": [
          "Protože hlasitější řeč automaticky zlepší i porozumění slovní zásobě a gramatice.",
          "Protože hlasitost sama o sobě odstraní i problém s odezíráním a orientací v řeči.",
          "Protože podstatné je zlepšit srozumitelnost a podíl užitečné informace vůči hluku, ne jen zvýšit hlas.",
          "Protože při sluchovém postižení je vhodnější omezit mluvenou komunikaci úplně."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Proč je u žáka s PAS při náročných přechodech mezi činnostmi vhodný vizuální plán?",
        "options": [
          "Protože vizuální plán nahrazuje potřebu jakékoli verbální komunikace.",
          "Protože vizuální plán funguje jako univerzální řešení pro všechny obtíže bez další individualizace.",
          "Protože jde hlavně o estetické zpestření výuky a zvýšení motivace k práci.",
          "Protože snižuje nejistotu, zpřehledňuje posloupnost kroků a podporuje předvídatelnost situace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Proč není u žáka s výraznou grafomotorickou bariérou ústní zkoušení automaticky „úleva navíc“, ale může být adekvátní úpravou?",
        "options": [
          "Protože může lépe oddělit znalost od bariéry v ručním zápisu, pokud je ověřovaným cílem obsah.",
          "Protože je ústní zkoušení vždy jednodušší než písemné, a proto snižuje nároky spravedlivě.",
          "Protože učiteli šetří čas při opravování, což je hlavní argument pro úpravy výkonu.",
          "Protože každá motorická obtíž automaticky vylučuje jakoukoli písemnou práci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Proč je při nácviku adaptivní dovednosti důležité, aby podpora postupně slábla?",
        "options": [
          "Protože častější změny podpory vedou automaticky k rychlejšímu zobecnění v každém prostředí.",
          "Protože cílem je, aby se výkon co nejvíce přesouval na samotného žáka a nezůstával trvale nesen okolím.",
          "Protože úplné odebrání podpory co nejdříve je vždy účinnější než postupné kroky.",
          "Protože adaptivní dovednosti se mají po nácviku procvičovat jen teoreticky, nikoli v běžném životě."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Žák s obtížemi v porozumění delšímu textu potřebuje ve výuce dějepisu podporu. Který krok je vzhledem k jádru bariéry příliš široký a méně vhodný než ostatní?",
        "options": [
          "Doplnit práci s textem o zvýraznění klíčových informací a menší úseky čtení.",
          "Předem vymezit, na které otázky se má při četbě soustředit.",
          "Přenést žáka do jiného vzdělávacího programu jen proto, že v této oblasti dočasně potřebuje přístupnější práci s textem.",
          "Ověřovat porozumění průběžně a nečekat až na úplný konec dlouhého textu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Který postup je u žáka s motorickou bariérou nejméně vhodný, protože nahrazuje výkon žáka místo podpory jeho samostatnosti?",
        "options": [
          "Upravit pracovní místo a pomůcky tak, aby byly dosažitelné a stabilní.",
          "Prodlužovat čas na dokončení úkolu, pokud jádrem obtíže není porozumění.",
          "Rozdělit úkol do menších kroků a některé části předem připravit.",
          "Nechat dospělého pravidelně vykonat klíčové části úkolu za žáka i tam, kde by je mohl s podporou zvládnout sám."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Žák se zrakovým postižením pracuje s notebookem, ale odpoledne ho výrazně zhoršuje oslnění displeje. Co je nejpřiměřenější?",
        "options": [
          "Upravit světelné podmínky, polohu zařízení a digitální nastavení tak, aby se snížilo oslnění a vizuální zátěž.",
          "Přesunout veškerou práci zpět do tištěné podoby bez ohledu na dosavadní funkčnost notebooku.",
          "Snížit množství učiva v odpoledních hodinách, protože oslnění ukazuje na nižší kapacitu žáka.",
          "Vyčkat, zda si na zrakovou zátěž postupně nezvykne bez dalších úprav."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Žák po získaném neurologickém poškození rozumí lépe kratším větám a potřebuje více času na formulaci odpovědi. Co je ve škole nejvhodnější?",
        "options": [
          "Těžiště přesunout hlavně k hodnocení rychlosti reakce, aby se sledoval návrat k běžnému tempu.",
          "Zpřístupnit komunikaci kratšími větami, časem na reakci a multimodální oporou odpovědi.",
          "Snížit nároky na obsah v celé výuce, protože pomalejší odpověď znamená nižší kognitivní úroveň.",
          "Vyhnout se mluvené komunikaci úplně a ponechat jen písemné úlohy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Při skupinové práci se žák se sluchovým postižením nejvíce ztrácí tehdy, když všichni mluví najednou a zadání se průběžně mění. Co je nejvhodnější?",
        "options": [
          "Nechat situaci beze změny, protože skupinová práce má být přirozeně dynamická.",
          "Požadovat, aby žák po skončení práce dopsal vše z poznámek spolužáků.",
          "Nastavit pravidlo jednoho mluvčího, zviditelnit změny zadání a průběžně shrnovat dohodnuté kroky.",
          "Přesunout žáka výhradně do individuálního režimu bez skupinové práce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Žák s výraznou čtecí bariérou dostal doporučení sedět v první lavici. Kdy je takové opatření nejspíše nedostatečné?",
        "options": [
          "Když se žák navíc při práci často opožďuje kvůli pomalejšímu psaní.",
          "Když učitel používá při výuce i tabuli a pracovní listy.",
          "Když žák nemá rád změny místa v učebně.",
          "Když hlavní bariéra spočívá v přístupu k textu a zadání, který samotné sezení vpředu neřeší."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Které vymezení nejlépe odpovídá rehabilitačnímu těžišti v širším speciálněpedagogickém kontextu?",
        "options": [
          "Podpora funkční samostatnosti a zapojení do běžného života, často s mezioborovým přesahem.",
          "Výhradně nácvik jedné školní dovednosti bez vazby na každodenní fungování.",
          "Především administrativní zajištění doporučení školy bez praktické práce s výkonem.",
          "Pouze náhradní způsob čtení a psaní bez širších cílů v participaci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Žák s výraznou dyspraxií chápe geometrii, ale při rýsování ztrácí přesnost v motorickém provedení. Co je nejpřiměřenější?",
        "options": [
          "Hodnotit geometrii hlavně podle kvality ručního rýsování, aby bylo zřejmé, kdo je skutečně pečlivý.",
          "Volit takové nástroje a formu práce, které sníží motorickou bariéru a zachovají možnost ukázat porozumění geometrickému vztahu.",
          "Zcela vypustit geometrii z hodnocení, protože motorická bariéra ji činí nereálnou.",
          "Nechat spolužáka rýsovat za žáka a převzít výsledek jako jeho vlastní výkon."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "U žáka s těžkým motorickým omezením a velmi omezenou řečí škola uvažuje o high-tech AAK. Kdy je takový krok nejpřiměřenější?",
        "options": [
          "Když škola chce působit moderně a mít ve třídě technologicky pokročilé řešení.",
          "Když se předpokládá, že samotné zařízení nahradí potřebu nácviku a podpory okolí.",
          "Když zvolený způsob ovládání odpovídá motorickým možnostem žáka a systém bude použitelný v reálných komunikačních situacích.",
          "Když je cílem omezit běžnou komunikaci jen na hotové přednastavené věty bez dalšího rozvoje."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Žák s poruchou intelektového vývoje si osvojuje postup mytí rukou ve škole i doma. Co je pro podporu nejdůležitější?",
        "options": [
          "Co nejrychleji přejít k verbálnímu popisu postupu bez vizuálních opor, aby se zabránilo závislosti.",
          "Nechat dovednost dlouhodobě vykonávat dospělým, aby byl výsledek hygienicky jistý.",
          "Procvičovat krok jen na obrázcích, protože přirozená situace bývá pro nácvik rušivá.",
          "Učit postup v konkrétním sledu, s názornými oporami a přenosem do opakovaných běžných situací."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Žák právě začal používat sluchadla. Který závěr o školní podpoře je nejpřesnější?",
        "options": [
          "Technická kompenzace sama ještě neznamená, že není třeba upravovat komunikaci a podmínky výuky.",
          "Po nasazení sluchadel už bývá vhodné ukončit většinu podpory ve třídě, aby si žák rychle zvykl.",
          "Nejlepší je vyčkat několik měsíců bez dalších úprav a teprve potom sledovat dopad na výuku.",
          "Hlavní školní úkol se nyní přesouvá k hodnocení, zda žák mluví stejně jako vrstevníci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Proč není u žáka s výraznou dysgrafií nejlepším řešením, aby za něj dlouhodobě zapisoval vše asistent?",
        "options": [
          "Protože by to bylo organizačně náročnější než běžná výuka.",
          "Protože by se tím snadno zafixovalo převzetí výkonu druhou osobou místo hledání funkčnější a samostatnější formy práce.",
          "Protože asistent nesmí být ve třídě přítomen při písemné práci.",
          "Protože každá podpora asistenta automaticky snižuje validitu hodnocení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Žák s PAS je výrazně rozkolísaný před hodinou se suplujícím učitelem. Co je nyní nejpřiměřenější?",
        "options": [
          "Nechat situaci bez úprav, aby si zvykal na běžnou nepředvídatelnost školy.",
          "Vyhodnotit reakci hlavně jako nekázeň a řešit ji až po hodině kázeňským pohovorem.",
          "Předem co nejkonkrétněji zviditelnit změnu, stručně popsat průběh hodiny a opřít ji o známé body režimu.",
          "Žáka z výuky automaticky uvolnit pokaždé, když se změní vyučující."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Žák se zrakovým postižením čte z obrazovky pomaleji, protože musí více skenovat zvětšený text. Co je nejpřiměřenější při samostatné práci?",
        "options": [
          "Vrátit veškeré digitální materiály do tištěné podoby bez ohledu na dosavadní funkčnost obrazovky.",
          "Zachovat stejný čas jako ostatním, protože pomalejší skenování je součást běžného výkonu.",
          "Snížit náročnost učiva, aby bylo možné pracovat v kratším rozsahu textu.",
          "Pracovat s přístupným digitálním nastavením a realistickým časem, protože bariéra je i v tempu vizuálního přístupu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Při ústním zkoušení žáka se sluchovým postižením je cílem ověřit znalost, ne schopnost zachytit rychlou a skrytou řeč. Co je nejpřiměřenější?",
        "options": [
          "Mluvit čelně, přehledně strukturovat otázku a případně doplnit klíčová slova dostupnou formou.",
          "Udržet otázky co nejpřirozeněji neformální a spontánní, aby byla zkouška autentická.",
          "Spoléhat, že žák vše zachytí z kontextu, i když nevidí dobře na mluvčího.",
          "Převést zkoušení automaticky do písemné podoby bez zvažování jiných úprav."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Které vymezení je pro reedukaci nejpřesnější jako základová kotva?",
        "options": [
          "Je to širší mezioborová podpora soběstačnosti a participace v běžném životě.",
          "Je to cílený rozvoj oslabené funkce nebo dovednosti s opakovaným nácvikem a ověřováním pokroku.",
          "Je to náhradní cesta k výkonu bez očekávání změny oslabené funkce.",
          "Je to hlavně úprava prostředí a organizace práce ve třídě."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Které tvrzení nejlépe vystihuje kompenzaci jako základový opěrný bod?",
        "options": [
          "Kompenzace je vždy poslední možnost až po úplném selhání reedukace.",
          "Kompenzace znamená především snížení nároků na žáka, aby nemusel řešit náročnou oblast.",
          "Kompenzace nabízí jinou funkční cestu k témuž cíli tam, kde přímý výkon naráží na bariéru.",
          "Kompenzace je totéž co trvalá pomoc druhé osoby při všech činnostech."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Který princip nejlépe odpovídá současné logice podpůrných opatření ve škole jako základový opěrný bod?",
        "options": [
          "Podporu je vhodné spouštět až po dlouhodobém selhání ve všech předmětech bez výjimky.",
          "Rozhodující je především název diagnózy, podle něhož se přebírá hotový postup pro celou kategorii žáků.",
          "Podpora má být hlavně úlevou od nároků, aby se předešlo frustraci bez dalšího plánování.",
          "Vychází se z funkčního dopadu bariéry a podle něj se upravují metody, organizace, komunikace i hodnocení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Který princip je při zavádění AAK jako základový opěrný bod nejpřesnější?",
        "options": [
          "Systém se volí podle toho, co uživatel zvládne a v jakých situacích potřebuje skutečně komunikovat.",
          "AAK je vhodné zavádět až tehdy, když se definitivně potvrdí, že běžná řeč už nevznikne.",
          "Nejvhodnější bývá vždy technicky nejpokročilejší řešení bez ohledu na přístupové možnosti.",
          "AAK má zůstat hlavně v terapeutické místnosti, aby nebyla běžná komunikace příliš zatížena."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které pravidlo nejlépe vystihuje kvalitní podporu napříč různými typy bariér?",
        "options": [
          "Nejspolehlivější je převzít za žáka co nejvíce činností, aby nezažíval neúspěch.",
          "Podpora má odstraňovat bariéru tak, aby co nejvíce zachovala participaci, výkon a růst samostatnosti žáka.",
          "Správná podpora se pozná hlavně podle toho, že je pro školu organizačně nejjednodušší.",
          "Jednou zvolený postup už není vhodné měnit, aby podpora působila konzistentně."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12",
      "distributionBalanced": true
    }
  },
  {
    "id": 4,
    "label": "Baterie 4",
    "title": "Profesní komunikace jako odborné rozhodnutí",
    "subtitle": "Hard mode: rozhovor, hranice, přístupnost a oprava porozumění v poradenské nejistotě.",
    "purpose": "Prověřit, zda student zvolí profesně nejpřesnější komunikační krok tam, kde se střetává obsah, emoce, role aktérů, přístupnost a další praktický krok.",
    "difficulty": "vyšší až vysoká",
    "dominant": [
      "řízení rozhovoru v nejistotě",
      "sdělování citlivých a neúplných závěrů",
      "vyvažování hlasu klienta, rodiny a školy",
      "profesní hranice a bezpečné sdílení",
      "přístupná komunikace a oprava porozumění"
    ],
    "breakdown": [
      "12× vedení a struktura rozhovoru",
      "10× sdělování nejistoty, závěru a dalšího kroku",
      "10× rodina, adolescent a vyvažování hlasů",
      "8× profesní hranice, role a bezpečné sdílení",
      "10× přístupná komunikace a reparace porozumění"
    ],
    "tags": [
      "komunikace",
      "poradenství",
      "hranice",
      "přístupnost",
      "hard mode"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Rodič přichází na první konzultaci výrazně rozrušený a hned žádá „hlavně říct, co s tím dítětem vlastně je“. Který úvod rozhovoru je profesně nejpřesnější?",
        "options": [
          "„Hlavní je uklidnit emoce; k obsahu se můžeme vrátit, až budete reagovat méně citlivě.“",
          "„Nejspolehlivější bude, když se teď soustředíme jen na diagnózu a další témata otevřeme až příště.“",
          "„Nejdřív vám vysvětlím celý odborný rámec a pak se případně dostaneme k tomu, co je pro vás teď důležité.“",
          "„Nejdřív krátce pojmenujme, co vás sem přivedlo a co teď nejvíc potřebujete vědět; potom si řekneme, co už víme a co zatím ještě ne.“"
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 2,
        "text": "Po vyšetření máš pracovní hypotézu, ale část obrazu zůstává nejednoznačná. Která formulace při sdělování závěru rodiči je nejprofesnější?",
        "options": [
          "„Závěr vám řeknu až tehdy, kdy budeme mít úplnou jistotu ve všech detailech.“",
          "„Nejlepší je teď mluvit jednoznačně, aby vás nejistota zbytečně neznervózňovala.“",
          "„To, co vidíme, dává poměrně jasný směr, ale ne všechno je uzavřené; řeknu vám, co je teď opřené o data a co ještě potřebujeme sledovat.“",
          "„Výsledek je sice nejistý, ale pro školu bude praktičtější podat ho jako hotový.“"
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 3,
        "text": "Učitel po telefonu říká: „Jen potřebuji vědět, jestli je to spíš ADHD, nebo autismus.“ Jaká reakce je komunikačně nejpřesnější?",
        "options": [
          "„Podle vašeho popisu to zní víc jako autismus, ale podrobnosti můžeme dořešit později.“",
          "„Nejdřív potřebuji slyšet, v jakých situacích se obtíž objevuje, co jí předchází a co naopak funguje; bez toho bych vám dával spíš nálepku než užitečný závěr.“",
          "„Pro školu je nakonec jedno, o co jde; hlavní je dítě na problémové situace přísně připravit.“",
          "„Na telefonu se to stejně poznat nedá, takže teď nemá smysl řešit nic.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 4,
        "text": "Na konzultaci je dospívající klient i rodič. Rodič odpovídá za dítě téměř na každou otázku. Jaký komunikační krok je nejpřiměřenější jako další?",
        "options": [
          "Nechat rodiče mluvit dál a dospívajícího zapojit až v závěru, aby se necítil pod tlakem.",
          "Obrátit další otázku přímo na dospívajícího, stručně vysvětlit proč a rodiče ponechat jako důležitý doplňující zdroj.",
          "Pokračovat hlavně s rodičem, protože jeho výpověď bude věcnější a časově úspornější.",
          "Požádat rodiče, aby odešel z místnosti, protože přímá komunikace s klientem má vždy absolutní přednost."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 5,
        "text": "Schůzka s rodičem se sluchovým postižením začíná v rušné místnosti, kde část sdělení zaniká. Co je komunikačně nejvhodnější udělat nejdřív?",
        "options": [
          "Mluvit výrazně hlasitěji a zrychlit tempo, aby se stihlo probrat vše důležité.",
          "Předat rodiči hlavní obsah písemně a osobní rozhovor zkrátit na minimum.",
          "Upravit podmínky rozhovoru tak, aby byla řeč vizuálně i akusticky dostupná, a teprve potom pokračovat v obsahu.",
          "Přejít rovnou na stručné body bez další úpravy podmínek, protože rodič se případně doptá."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 6,
        "text": "Dítě s omezenou verbální komunikací používá znaky a komunikační kartu. Rodič začne odpovídat za něj i na jednoduché otázky typu „Co tě teď nejvíc štve ve škole?“. Jaký přístup je nejprofesnější?",
        "options": [
          "Držet otázku u dítěte, dát mu čas a využít jeho komunikační kanál; rodiče přizvat až poté k doplnění kontextu.",
          "Položit rodiči detailní otázky a dítě oslovit jen na konci, aby nezažívalo komunikační zátěž.",
          "Přijmout, že rodič mluví za dítě, protože to bude obsahově bohatší a komunikačně plynulejší.",
          "Zjednodušit rozhovor tak, že se bude mluvit už jen s rodičem a dítě bude pouze přítomné."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 7,
        "text": "Na týmové schůzce učitel a rodič používají stále silnější hodnocení toho, „kdo za to může“. Jaký vstup speciálního pedagoga je nejvhodnější?",
        "options": [
          "Nechat konflikt doznít, protože ventilace emocí obvykle sama přinese řešení.",
          "Uzavřít, že bez přesnější diagnózy nemá smysl v rozhovoru pokračovat.",
          "Podpořit více tu stranu, která mluví klidněji, aby se schůzka rychle stabilizovala.",
          "Vrátit rozhovor k pozorovatelným situacím, shrnout společný cíl a vymezit, co kdo potřebuje pro další krok vědět nebo udělat."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 8,
        "text": "Učitel píše: „Žák je líný, nevyzrálý a při práci pořád zlobí.“ Která odpověď speciálního pedagoga je nejpřesnější?",
        "options": [
          "„Podle popisu to zní na výrazný problém v motivaci; bylo by vhodné nastavit přísnější důsledky.“",
          "„Takové formulace jsou nevhodné; bez další diskuse je prosím příště nepoužívejte.“",
          "„Pokud vás žák vyčerpává, je nejlepší doporučit co nejrychleji změnu vzdělávací cesty.“",
          "„Můžete prosím popsat, v jakých konkrétních situacích se to děje, co tomu obvykle předchází a jak žák reaguje na různé typy zadání?“"
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Rodič po sdělení závěru pláče a opakuje: „Takže jsme to zase zanedbali.“ Co je jako bezprostřední reakce nejvhodnější?",
        "options": [
          "Ujistit rodiče, že pocity viny jsou v této situaci zbytečné, a pokračovat bez dalšího zastavení.",
          "Vyžádat si podrobný rodinný rozbor, aby bylo možné přesně posoudit, odkud vina rodiče pramení.",
          "Rychle přejít k doporučením, aby se rozhovor nezasekl v emocích.",
          "Zastavit tempo, uznat emoční zátěž a vrátit sdělení od sebeobviňování k tomu, co je teď podstatné pro porozumění a další krok."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 10,
        "text": "Klient se zrakovým postižením dostává při konzultaci více písemných materiálů najednou a ztrácí se v tom, co je hlavní. Který komunikační postup je nejpřesnější?",
        "options": [
          "Shrnout vše velmi stručně ústně a písemné materiály ponechat bez komentáře na pozdější samostatné zpracování.",
          "Předat všechny materiály naráz, aby měl klient maximální svobodu vracet se k nim vlastním tempem.",
          "Předpokládat, že když je klient zvyklý pracovat kompenzačně, rozsáhlejší orientace v materiálech už pro něj nebude problém.",
          "Průběžně verbálně strukturovat, co je právě probíráno, materiály dávkovat a ověřovat, zda klient ví, k čemu který podklad slouží."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 11,
        "text": "Učitel po několika neúspěšných úpravách říká: „Řekněte mi prostě, co mám zítra udělat jinak.“ Jaká odpověď je nejprofesnější?",
        "options": [
          "„Nejdřív si musíte znovu pročíst celý odborný závěr; bez toho by byla jakákoli rada zjednodušující.“",
          "„Řeknu vám první konkrétní krok pro zítřek, ale zároveň potřebujeme domluvit, podle čeho poznáme, jestli opravdu pomohl.“",
          "„Když úpravy nefungovaly dosud, bývá nejlepší už dál do komunikace se školou nezasahovat.“",
          "„Nejspolehlivější bude počkat, až se k tomu vyjádří ještě další odborník.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 12,
        "text": "Kolega během supervize začne podrobně vyprávět jiný případ, který nesouvisí s právě řešenou zakázkou, a používá rozpoznatelné detaily rodiny. Jaká reakce je nejvhodnější?",
        "options": [
          "Vrátit debatu k účelu konzultace a upozornit, že pro tuto zakázku nejsou identifikující detaily jiné rodiny potřebné.",
          "Přerušit schůzku s tím, že jakýkoli ne zcela anonymní příklad je vždy nepřípustný bez výjimky.",
          "Nechat kolegu domluvit, protože bohatší kontext obvykle zvyšuje odbornou přesnost.",
          "Zapsat si detaily, protože mohou později pomoci při porovnání vzorců rodinného fungování."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 13,
        "text": "Rodič se po rozhovoru ptá: „Takže je to určitě autismus?“ Přitom máš popsané jen některé rysy a část obrazu může mít i jiné vysvětlení. Co je komunikačně nejpřesnější?",
        "options": [
          "„Některé rysy tomu směru odpovídají, ale teď by bylo předčasné uzavírat to jedním slovem; důležité je, co z těchto obtíží plyne pro další pozorování a podporu.“",
          "„Ano, řekněme to takto už teď, protože rodině obvykle pomůže jednoznačný název.“",
          "„V těchto situacích je lepší diagnózu vůbec nepojmenovávat, aby nevzniklo stigma.“",
          "„Na to vám nesmím odpovědět, dokud nebude uzavřené úplně všechno.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Na schůzce mluví učitel velmi aktivně, rodič jen přikyvuje a téměř nevstupuje. Co je jako další komunikační krok nejpřesnější?",
        "options": [
          "Vyhodnotit ticho rodiče jako souhlas a přejít rovnou k doporučením.",
          "Pokračovat s učitelem, protože zjevně přináší nejvíce použitelných dat a rodič by jinak rozhovor zpomaloval.",
          "Nejprve rodiče požádat, aby zhodnotil práci učitele, protože tím se obvykle rychle aktivizuje.",
          "Zastavit proud informací, explicitně otevřít prostor rodiči a položit mu konkrétní otázku k jeho zkušenosti nebo prioritě."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 15,
        "text": "Při rozhovoru s klientem s lehčí poruchou intelektového vývoje zjišťuješ, že přikyvuje, ale následně neplní domluvené kroky. Který komunikační postup je nejvhodnější?",
        "options": [
          "Předat klientovi vše písemně, protože text je přesnější než rozhovor.",
          "Rozdělit sdělení do menších kroků a průběžně si ověřovat, jak klient každému kroku rozumí a co z něj odnáší.",
          "Mluvit už jen s doprovázející osobou, aby bylo jisté, že instrukce někdo pochopil správně.",
          "Ponechat tempo stejné, protože zpomalování může působit nepatřičně nebo infantilizujícím dojmem."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 16,
        "text": "Škola žádá po telefonu „rychlý odborný verdikt“, aby mohla hned rozhodnout o postupu. Nemáš ale dost dat a situace je vícevrstevná. Co je profesně nejpřesnější odpověď?",
        "options": [
          "Odmítnout jakýkoli komentář, protože bez plného obrazu je vždy lepší neříct nic.",
          "Požádat školu, aby se do té doby řídila především vlastním dojmem a průběžně situaci řešila disciplinárně.",
          "Vymezit, co lze teď říct předběžně, co z toho pro školu plyne už dnes a co bez dalších informací uzavřít nelze.",
          "Dát škole co nejpravděpodobnější závěr, protože provoz školy potřebuje jednoznačnost."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 17,
        "text": "Rodič během konzultace opakovaně vrací rozhovor k tomu, jak předchozí škola „všechno pokazila“. Co je komunikačně nejpřesnější jako další krok?",
        "options": [
          "Přidat vlastní kritiku předchozí školy, aby rodič cítil, že stojíš plně na jeho straně.",
          "Uznat význam předchozí zkušenosti, ale vrátit rozhovor k tomu, co je teď potřeba porozumět a změnit v současné situaci.",
          "Nechat rodiče dlouze ventilovat, protože tím se obvykle vytvoří nejlepší základ pro odborný závěr.",
          "Téma minulosti uzavřít s tím, že o minulosti nemá smysl vůbec mluvit."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 18,
        "text": "Rodič nerozumí formulaci v odborném závěru a vrací se k jediné větě, kterou chápe jako „dítě prostě nebude zvládat běžnou školu“. Co je komunikačně nejvhodnější?",
        "options": [
          "Trvat na původní formulaci, protože zjednodušení by oslabilo odbornou přesnost.",
          "Přeložit odbornou větu do běžného jazyka, vysvětlit její praktický význam a zkontrolovat, jak jí rodič rozumí ve vztahu k dalším krokům.",
          "Upravit význam věty tak, aby zněla co nejoptimističtěji, i kdyby to nebylo zcela přesné.",
          "Přejít rychle k dalším částem zprávy, aby rodič neulpěl na jedné formulaci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Při práci s dítětem se sluchovým postižením probíhá část instrukce z větší vzdálenosti a bez jasné vizuální dostupnosti mluvčího. Jaká komunikační úprava míří nejpřesněji na jádro problému?",
        "options": [
          "Zajistit přehlednost mluvčího, vhodnou vzdálenost a ověřit hlavní body sdělení místo pouhého zesílení hlasu.",
          "Ponechat podmínky stejné a pracovat jen s vyšší mírou tolerance k chybám v plnění úkolu.",
          "Omezit instrukci jen na písemný zápis, protože ten nahradí všechny situace, kde se řeč špatně zachytává.",
          "Mluvit výrazněji a rychleji, aby se zmenšila časová ztráta při zadávání instrukce."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 20,
        "text": "Na konci schůzky všichni odcházejí s pocitem, že „se toho hodně probralo“, ale není jasné, co se stane dál. Jaké uzavření je profesně nejpřesnější?",
        "options": [
          "Shrnutí vynechat, protože dospělí účastníci by si měli odnést hlavní body sami.",
          "Stručně shrnout, na čem je shoda, co z toho plyne pro jednotlivé aktéry a kdy se ověří, jestli domluvený krok funguje.",
          "Předat závěrečné slovo tomu, kdo mluvil nejvíce, protože ten pravděpodobně drží hlavní linii případu.",
          "Uzavřít schůzku pozitivním povzbuzením a nechat další kroky otevřené, aby zůstala zachována flexibilita."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 21,
        "text": "Učitel popisuje „agresivní výbuchy“, ale neumí říct, co jim předchází. Která otázka je v této fázi nejprofesnější?",
        "options": [
          "„Kdo podle vás nese za tyto výbuchy hlavní zodpovědnost?“",
          "„Myslíte, že je hlavní problém spíš v tom, že dítě potřebuje pevnější hranice?“",
          "„V jaké části dne nebo typu úkolu se to objevuje nejčastěji a co těsně předtím obvykle vidíte?“",
          "„Byl už někdo z týmu nakloněný závěru, že jde o těžší poruchu chování?“"
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 22,
        "text": "Rodič se ptá, zda bys mohl doporučit „něco na uklidnění“, protože dítě večer nezvládá usínání. Co je komunikačně nejpřesnější?",
        "options": [
          "Převzít odpovědnost za celé rozhodnutí, protože rodič v tuto chvíli zjevně potřebuje jistotu.",
          "Vymezit svou roli, krátce pojmenovat, co z oblasti režimu a podpory lze probrat, a pro léčebné otázky odkázat na příslušného zdravotnického odborníka.",
          "Téma hned ukončit s tím, že zdravotní oblast do speciální pedagogiky vůbec nepatří.",
          "Dát rodiči několik neformálních tipů na medikaci, pokud zdůrazníš, že nejde o závazné doporučení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Na interní poradě chce kolega otevřít citlivé rodinné detaily, které s plánovanou podporou nesouvisejí. Jaký zásah je nejpřesnější?",
        "options": [
          "Detailní sdílení přijmout, protože širší osobní kontext bývá vždy užitečný pro hlubší porozumění případu.",
          "Odložit reakci, aby se nenarušila otevřenost týmové spolupráce.",
          "Zeptat se, jak navrhovaná informace souvisí s aktuálním rozhodnutím; pokud nesouvisí, vrátit tým k relevantním údajům.",
          "Téma rázně zakázat bez dalšího, protože jakákoli rodinná informace je na poradě předem nevhodná."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Po společné schůzce s rodinou a školou má být rozeslán stručný zápis. Jaká podoba sdělení je profesně nejvhodnější?",
        "options": [
          "Vyzdvihnout hlavně svůj odborný závěr a ostatní perspektivy ponechat bez explicitního zachycení.",
          "Poslat jen obecné poděkování za setkání a podrobnosti ponechat na individuálních výkladech účastníků.",
          "Krátce oddělit, na čem je shoda, které otázky zůstávají otevřené, kdo co udělá a do kdy se znovu ověří výsledek.",
          "Rozeslat doslovný přepis celé schůzky, aby nic důležitého nezaniklo ve zkratce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 25,
        "text": "Rodič nerozumí odborným termínům a zároveň se stydí přiznat, že se ve sdělení ztrácí. Co je v takové situaci komunikačně nejpřesnější?",
        "options": [
          "Průběžně převádět odborné pojmy do běžného jazyka a aktivně ověřovat význam způsobem, který rodiče nezesměšňuje ani nestaví do defenzivy.",
          "Vyhnout se odborným pojmům úplně, protože přesnost je v takové situaci méně důležitá než plynulost.",
          "Předat rodiči glosář pojmů a pokračovat ve standardním odborném jazyce.",
          "Požádat rodiče, aby vždy sám řekl, kterému termínu nerozumí; jinak by bylo neprofesionální význam zjednodušovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Dospívající klient při konzultaci mlčí, rodič vyplňuje každou pauzu a žádá „ať to máme rychle za sebou“. Jaký komunikační krok je nejpřiměřenější?",
        "options": [
          "Obrátit se k rodiči s prosbou, aby za dítě odpovídal už systematicky, když je zjevně komunikativnější.",
          "Nechat ticho bez rámce, protože jakýkoli zásah by mohl působit nátlakově.",
          "Zachovat strukturu, dát klientovi čas a explicitně vymezit, že chceš slyšet i jeho pohled, i když bude stručný.",
          "Přijmout, že mlčení znamená nezájem, a získat potřebné informace výhradně od rodiče."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 27,
        "text": "Žák s PAS se při nové skupinové aktivitě ztrácí v neurčitých instrukcích. Které sdělení je komunikačně nejpřesnější?",
        "options": [
          "„Teď máš tři kroky: vyber si jeden text, podtrhni dvě důležité informace a potom je řekneš dvojici.“",
          "„Hlavní je nebát se improvizovat; když něco nevyjde, skupina to zachytí.“",
          "„Podle situace si sám odhadni, co od tebe skupina zrovna potřebuje.“",
          "„Zkus se do práce zapojit co nejpřirozeněji podle toho, jak se bude skupina vyvíjet.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 28,
        "text": "Třídní učitel se ptá, zda má spolužákům sdělit diagnózu žáka, „aby ho víc chápali“. Jaká odpověď je komunikačně nejpřesnější?",
        "options": [
          "Doporučit diagnózu sdělit, protože spolužáci bez ní obtížím stejně správně neporozumí.",
          "Nechat rozhodnutí plně na učiteli, protože třídu vede on a zná ji nejlépe.",
          "Zakázat jakoukoli komunikaci se třídou, protože o odlišnostech je bezpečnější nemluvit vůbec.",
          "Vrátit otázku k tomu, jakou podporu a jaké informace třída skutečně potřebuje, aniž by se automaticky otevíraly citlivé osobní údaje."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Rodič po několika větách říká: „Vy už jste si stejně udělali názor.“ Co je komunikačně nejvhodnější jako oprava rozhovoru?",
        "options": [
          "Rychle rodiče ujistit, že to tak není, a bez dalšího pokračovat v plánované linii rozhovoru.",
          "Zastavit se, pojmenovat možné vyznění a otevřít prostor, co v dosavadním průběhu vedlo rodiče k tomuto dojmu.",
          "Zdůraznit, že odborník si názor tvoří vždy, a proto je podobná reakce pochopitelná, ale zbytečná.",
          "Vysvětlit, že emoce často zkreslují interpretaci rozhovoru, a vrátit se k obsahu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 30,
        "text": "Dítě používající komunikační tabulku reaguje pomaleji a dospělí kolem něj mají tendenci doplňovat odpovědi. Jaký postup je profesně nejpřesnější?",
        "options": [
          "Nastavit tempo tak, aby bylo místo pro čekání a potvrzení sdělení, místo aby okolí odpověď předjímalo za dítě.",
          "Klást už jen uzavřené otázky ano/ne, aby byl rozhovor efektivnější bez zdržení.",
          "Převést většinu rozhovoru na rodiče, protože ten komunikační systém dítěte zná nejlépe.",
          "Zrychlit rozhovor tím, že dospělí budou průběžně nabízet nejpravděpodobnější odpovědi k odsouhlasení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 31,
        "text": "Škole máš po telefonátu poslat krátké písemné shrnutí. Informací je hodně, ale učitel žádá „hlavně tři věci, které z toho plynou zítra do třídy“. Co je nejpřesnější komunikační řešení?",
        "options": [
          "Odpovědět jen heslovitě bez vysvětlení, aby učitel nebyl zahlcen dalším čtením.",
          "Poslat celý odborný text beze změny, protože výběr několika bodů by příliš zploštil složitost případu.",
          "Požádat učitele, aby si z původních materiálů vybral tři body sám; tím se nejlépe ověří jeho porozumění.",
          "Vybrat několik prioritních, proveditelných bodů s krátkým vysvětlením jejich smyslu a nechat vedle toho prostor pro pozdější doplnění širšího rámce."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 32,
        "text": "Učitel volá těsně před hodinou a je zjevně ve stresu. Potřebuje rychlou oporu pro dnešní práci s žákem. Co je komunikačně nejvhodnější?",
        "options": [
          "Dát jeden krátký proveditelný krok pro dnešek a domluvit si pozdější prostor pro širší rozbor situace.",
          "Začít s učitelem detailně rozebírat celý vývoj obtíží, aby měl opravdu kvalitní základ pro rozhodnutí.",
          "Vysvětlit, že bez přesného studia dokumentace nelze doporučit vůbec nic.",
          "Odložit rozhovor, protože ve stresu nemá smysl domlouvat ani žádné dílčí kroky."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 33,
        "text": "Učitel o žákovi opakovaně říká „je prostě líný“. Která odpověď speciálního pedagoga je nejpřesnější?",
        "options": [
          "„Pokud to tak vnímáte dlouhodobě, bude v tom pravděpodobně hlavně motivační problém.“",
          "„Takto to učitelé někdy popisují, když už dítě vyčerpalo jejich trpělivost.“",
          "„Takové slovo je nevhodné; pojďme raději mluvit úplně obecně bez konkrétních situací.“",
          "„Zkusme místo toho pojmenovat, u kterých typů úkolu se obtíž objevuje a co se změní, když má žák jinou strukturu nebo podporu.“"
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 34,
        "text": "Klient během konzultace začne otevírat velmi intimní téma, které přesahuje účel setkání i tvou roli, ale zjevně potřebuje, aby nebyl odmítnut. Jaký postup je komunikačně nejpřesnější?",
        "options": [
          "Citlivě uznat význam tématu, stručně vymezit hranici své role a domluvit bezpečný další krok nebo vhodné navázání na kompetentní službu.",
          "Téma rychle uzavřít větou, že to nespadá do tvé kompetence, a vrátit se k původnímu plánu bez dalšího.",
          "Převzít celé téma do své péče, pokud klient projeví důvěru a preferuje právě tebe.",
          "Nechat klienta mluvit bez omezení, protože přerušení by bylo neempatické."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 35,
        "text": "Rodič chce po jedné návštěvě „stoprocentní jistotu“, co je příčinou obtíží. Co je komunikačně nejpřesnější?",
        "options": [
          "Potvrdit nejpravděpodobnější vysvětlení jako hotový závěr, aby se rodina mohla konečně opřít o něco pevného.",
          "Vysvětlit, co už lze opřít o současná data, co zatím zůstává otevřené a proč je pro dobrý závěr důležité sledovat obraz v čase a situacích.",
          "Odmítnout jakoukoli úvahu o příčinách, dokud nebude k dispozici úplně kompletní dokumentace.",
          "Přesunout rozhovor od příčin pouze k chování, protože vysvětlování příčin rodiče obvykle mate."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 36,
        "text": "Na poradě panuje zmatek, kdo má co řešit: škola čeká na „odborníky“, rodina čeká na školu a zdravotnické doporučení je chápáno jako hotový plán pro výuku. Jaké sdělení speciálního pedagoga je nejpřesnější?",
        "options": [
          "Oddělit, co je odborné posouzení, co je každodenní odpovědnost školy a co patří do rozhodování rodiny či jiné služby, a z toho vyvodit konkrétní další kroky.",
          "Nechat rozdělení rolí otevřené, protože přílišná přesnost může ztížit spolupráci.",
          "Přijmout, že hlavní odpovědnost nese ten odborník, který napsal poslední zprávu, protože má nejaktuálnější pohled.",
          "Doporučit všem vyčkat, dokud nebude úplná shoda mezi všemi zúčastněnými aktéry."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 37,
        "text": "Online konzultace s rodičem se sluchovým postižením probíhá se zpožděným obrazem a častým překrýváním řeči. Jaký krok je komunikačně nejpřesnější?",
        "options": [
          "Mluvit výrazněji a delšími bloky, aby bylo zřejmé, kdo zrovna drží slovo.",
          "Přesunout veškerý obsah do chatu a rezignovat na rozhovor v reálném čase.",
          "Zpomalit rytmus, mluvit po menších celcích, nepřekrývat se a průběžně ověřovat, co z hlavních bodů bylo zachyceno.",
          "Ponechat běžné tempo, protože technické podmínky se během hovoru obvykle samy stabilizují."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 38,
        "text": "Rodič se ptá, zda potíže dítěte nejsou „hlavně tím, že jsme byli moc měkcí“. Jaká odpověď je komunikačně nejpřesnější?",
        "options": [
          "Rodiče rychle ujistit, že rodina s tím nesouvisí vůbec nijak, a dál téma neotvírat.",
          "Vyhnout se otázce příčin úplně, protože bývá vždy zbytečně citlivá.",
          "Vrátit se od sebeobviňujícího vysvětlení k vícevrstevnému obrazu obtíží a k tomu, jak se projevují v konkrétních situacích.",
          "Potvrdit, že výchovná nedůslednost bývá ve většině podobných případů hlavní příčinou."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 39,
        "text": "Na konci emočně náročné konzultace rodič přikyvuje, ale není jisté, co si odnáší. Co je komunikačně nejpřesnější udělat před uzavřením?",
        "options": [
          "Ještě jednou celý závěr zopakovat stejnými slovy, aby bylo sdělení odborně konzistentní.",
          "Požádat rodiče, aby vlastními slovy shrnul, co je pro něj teď hlavní závěr a jakému prvnímu kroku rozumí.",
          "Považovat přikyvování za dostatečný důkaz porozumění a šetřit rodiče dalšími otázkami.",
          "Zakončit schůzku povzbuzením a ponechat ověření porozumění až na další setkání."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 40,
        "text": "Dospívající s ADHD po sérii neúspěchů reaguje na rady větou „to je stejně jedno“. Jaká odpověď je komunikačně nejpřesnější?",
        "options": [
          "Téma odlehčit humorem a přejít k jinému okruhu, aby se snížil odpor.",
          "Nezačínat další sérií rad, ale vrátit se k tomu, kde přesně se dosavadní pokusy rozpadaly a co by pro něj byl únosný první krok.",
          "Zdůraznit, že bez aktivní motivace nemůže pomoc fungovat a je na něm, zda ji využije.",
          "Posílit tlak na zodpovědnost tím, že dostane jasný seznam povinností k okamžitému plnění."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 41,
        "text": "Kolega navrhuje poslat citlivé poznámky z rozhovoru neformálně přes běžný chat, „ať je to rychlé“. Jaká reakce je nejprofesnější?",
        "options": [
          "Upozornit, že forma sdílení musí odpovídat citlivosti informací a účelu práce s nimi; nabídnout bezpečnější a přiměřený způsob předání relevantního obsahu.",
          "Poslat jen neformální shrnutí bez jmen, protože pak už nejde o citlivou komunikaci.",
          "Souhlasit, pokud se zpráva po přečtení smaže a skupina je malá.",
          "Odmítnout sdílet jakýkoli obsah případu mimo osobní schůzku, protože jen ta je profesionální."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Učitel chce „přesnou větu“, kterou má zítra použít při zadání obtížného úkolu žákovi, jenž se snadno ztrácí v delších instrukcích. Co je komunikačně nejpřesnější odpověď?",
        "options": [
          "Nabídnout krátkou modelovou formulaci a dodat, podle čeho učitel pozná, že jí žák opravdu porozuměl.",
          "Poslat několik odborných principů, z nichž si učitel může sám vyvodit formulaci podle citu.",
          "Zdůraznit hlavně to, aby učitel mluvil klidným hlasem; konkrétní struktura sdělení je méně důležitá.",
          "Vysvětlit, že univerzální formulace neexistuje, takže konkrétní větu není vhodné dávat vůbec."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 43,
        "text": "Rodiče se na schůzce rozcházejí v tom, co je hlavní problém. Jeden zdůrazňuje chování, druhý přetížení a únavu. Jaký komunikační postup je nejpřesnější?",
        "options": [
          "Přiklonit se k tomu rodiči, který mluví přesvědčivěji a působí informovaněji.",
          "Nechat zaznít oba pohledy, hledat, v jakých situacích se který obraz objevuje, a teprve potom je převádět do společného pracovního rámce.",
          "Vyžadovat, aby se rodiče nejprve mezi sebou shodli, jinak nemá smysl v rozhovoru pokračovat.",
          "Zvolit střední cestu a oba pohledy zprůměrovat do jedné obecné formulace bez další diferenciace."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 44,
        "text": "Klient opakuje poslední slova otázky, ale z dalších projevů není jisté, že jejich významu opravdu rozumí. Jaký komunikační postup je nejpřesnější?",
        "options": [
          "Rychle změnit téma, protože opakování slov obvykle ukazuje jen na únavu z rozhovoru.",
          "Přestat klást otázky slovně a přejít výhradně na neverbální vedení bez dalšího ověřování.",
          "Přijmout zopakování otázky jako důkaz, že instrukce byla zachycena správně.",
          "Nevyhodnocovat echolalickou odpověď automaticky jako porozumění a ověřit význam jinou, dostupnou cestou."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Rodič má nízkou čtenářskou jistotu a po konzultaci si z dlouhého textu zprávy pravděpodobně neodnese praktické jádro. Jaká komunikace je nejpřesnější?",
        "options": [
          "Zprávu zkrátit na minimum a vypustit z ní vše odbornější, aby působila co nejjednodušeji.",
          "Spolehnout se na to, že zprávu může rodiči doma vysvětlit někdo jiný, kdo čte jistěji.",
          "Ústně vytáhnout několik hlavních bodů v běžném jazyce, zapsat je stručně a ověřit, jak jim rodič rozumí v praxi.",
          "Ponechat text beze změny; srozumění písemnému stylu je zodpovědností příjemce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 46,
        "text": "Které tvrzení nejpřesněji vystihuje hard-mode profesní komunikaci v poradenské práci?",
        "options": [
          "Je to hlavně schopnost mluvit klidně a nezvyšovat napětí, i kdyby některé významy zůstaly neuzavřené.",
          "Je to umění rychle vytvořit dohodu mezi všemi stranami, i když některé perspektivy zůstanou nevyřčené.",
          "Nejde jen o srozumitelnou formulaci, ale o volbu takového komunikačního kroku, který současně drží význam, vztah, hranice role a další praktický krok.",
          "Je to především důsledné používání odborné terminologie, která chrání přesnost sdělení před zjednodušením."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 47,
        "text": "Které jednání je při sdělování nejistého závěru profesně nejméně vhodné?",
        "options": [
          "Spojit míru jistoty s tím, co lze dělat už teď a co je potřeba ještě doplnit.",
          "Vysvětlit, proč některé otázky potřebují ověření v čase nebo v dalších situacích.",
          "Pojmenovat, co je opřené o data a co je zatím pracovní hypotéza.",
          "Zvolit co nejjednoznačnější nálepku, aby se druhá strana nemusela zabývat nejistotou a otevřenými otázkami."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 48,
        "text": "V průběhu rozhovoru sis všiml, že pojem „porucha“ byl rodičem slyšen jako „trvalé odepsání možností dítěte“. Jaká komunikační oprava je nejpřesnější?",
        "options": [
          "Vyhnout se tomu slovu dál úplně, aby se rozhovor znovu nezatížil.",
          "Nahradit slovo výrazně mírnější formulací, i kdyby tím došlo ke ztrátě přesnosti.",
          "Zdůraznit, že jde o odborný termín, který se nemá chápat emocionálně, a pokračovat bez dalšího vysvětlení.",
          "Zastavit se u významu slova, přeložit ho do funkčního vysvětlení a ověřit, jak rodič novému vymezení rozumí ve vztahu k podpoře."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Na mezioborové schůzce každý mluví z jiného úhlu: škola o výkonu, rodič o domácím vyčerpání a další služba o zdravotním režimu. Jaký závěr moderace je komunikačně nejpřesnější?",
        "options": [
          "Krátce propojit, co z jednotlivých perspektiv plyne pro společný obraz fungování, a převést to do navazujících úkolů po jednotlivých aktérech.",
          "Ponechat jednotlivé perspektivy oddělené, protože jejich propojování může být předčasné a sporné.",
          "Vybrat jeden dominantní rámec a podle něj podřídit ostatní vstupy jako doplňkové.",
          "Uzavřít schůzku s tím, že každý aktér bude dál řešit svou část samostatně bez společného závěru."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které uzavření rozhovoru je v poradenské práci nejméně vhodné?",
        "options": [
          "„Shrnu teď dvě hlavní věci, které si odnášíte, a domluvíme si, co bude první krok.“",
          "„Pojďme si říct, kdo teď udělá který krok a kdy budeme vědět, jestli to pomáhá.“",
          "„Když bude cokoli, ozvěte se; teď už to nechme otevřené a uvidíte sami, co z dneška využijete.“",
          "„Ještě si ověřme, jak rozumíte tomu, co dnes bylo pro vás nejdůležitější.“"
        ],
        "correct": 2,
        "correctLetter": "C"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12 nebo jiná vyvážená distribuce bez převažujícího písmene",
      "distributionBalanced": true
    }
  },
  {
    "id": 5,
    "label": "Baterie 5",
    "title": "Školní podpora, ŠPZ a proces",
    "subtitle": "Hard mode: škola, ŠPP, ŠPZ, PPP, SPC, dokumenty podpory a procesně správný další krok.",
    "purpose": "Ověřit, zda uchazeč umí v systému školního poradenství rozhodovat procesně: kdy ještě škola řeší situaci sama, kdy je na místě ŠPZ, kdo je nejpřesnější partner, jakou funkci mají dokumenty a co škola dělá po odborném závěru.",
    "difficulty": "vysoká",
    "dominant": [
      "škola a první zachycení obtíží",
      "přechod školy k ŠPZ",
      "PPP × SPC × SVP",
      "PLPP, IVP, zpráva a doporučení",
      "role školy po doporučení",
      "školní poradenské role",
      "mimořádné nadání v poradenském rámci"
    ],
    "breakdown": [
      "20× škola → další krok a procesní logika podpory",
      "10× PPP × SPC × škola × ŠPZ",
      "10× dokument v procesu a funkce výstupů",
      "5× role pracovníků ve škole",
      "5× mimořádné nadání a šíře poradenského rámce"
    ],
    "tags": [
      "hard mode",
      "školské poradenství",
      "ŠPZ/škola",
      "PPP/SPC",
      "PLPP/IVP",
      "nadání"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Třídní učitel několik týdnů pozoruje, že žák při složitějších instrukcích tápe, ale v individuálním vedení pracuje podstatně jistěji. Který první krok školy je nejpřesnější?",
        "options": [
          "Zachytit konkrétní situace obtíží, upravit zadávání a průběžně sledovat, co žákovi pomáhá.",
          "Požádat rodiče, aby nejprve zajistili odborný závěr mimo školu, a do té doby nic neměnit.",
          "Sepsat rovnou IVP, aby bylo zřejmé, že škola obtíže bere vážně.",
          "Doporučit přestup do jiné třídy, protože proměna prostředí bývá nejrychlejším řešením."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Škola už zavedla několik cílených úprav práce, ale efekt je jen částečný a obtíže se vracejí napříč předměty. Jaký další krok je nejpřesnější?",
        "options": [
          "Vyčkat do dalšího pololetí, aby se ukázalo, zda potíže nezmizí samy.",
          "Na základě školního pozorování a vyhodnocené podpory otevřít s rodinou krok k odbornému posouzení v ŠPZ.",
          "Okamžitě ukončit všechny dosavadní úpravy, protože bez doporučení ŠPZ nemají význam.",
          "Požádat třídu, aby žákovi běžně více pomáhala, a tím nahradit další poradenský proces."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Škola obdržela doporučení ke vzdělávání žáka. Které shrnutí role školy po převzetí dokumentu je nejpřesnější?",
        "options": [
          "Doporučení se uloží do dokumentace a další práci už určuje pouze rodina.",
          "Doporučení má hlavně kontrolní funkci; škola se jím řídí jen při inspekci.",
          "Škola doporučení převádí do konkrétní každodenní podpory, rozděluje odpovědnosti a sleduje účinek opatření.",
          "Doporučení nahrazuje potřebu další pedagogické práce, protože klíčová část procesu už proběhla v ŠPZ."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Rodič přináší škole zdravotnický nález a žádá: „Jen to přepište do IVP, ať je to hotové.“ Jaká reakce školy je nejpřesnější?",
        "options": [
          "Stačí převzít formulace z nálezu, protože každý odborný závěr se ve škole používá beze změn.",
          "Nejprve je vhodné počkat, až škola dostane i konečnou klasifikaci na vysvědčení.",
          "Škola by neměla s rodinou o podpoře vůbec diskutovat, dokud nemá hotový IVP.",
          "Je potřeba vyjasnit vzdělávací dopad zjištění a teprve potom volit, jak se promítne do konkrétní školní podpory a dokumentace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Žák při běžném tempu výuky ztrácí jistotu, ale při menších krocích a předvídatelném zadání pracuje lépe. Učitel říká, že bez „papíru z poradny“ nemůže dělat nic. Co je nejpřesnější?",
        "options": [
          "Škola může už nyní upravovat organizaci práce a sledovat, jak se změny promítají do fungování žáka.",
          "Jakákoli změna bez doporučení ŠPZ by byla v rozporu se školským systémem.",
          "Do vyšetření je nejčistší zachovat stejný režim, aby nebyl zkreslen budoucí odborný závěr.",
          "Nejpřesnější je žáka co nejméně zatěžovat a omezit jeho účast v běžné výuce."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Po několika týdnech školní podpory zůstává nejasné, zda jádro obtíží souvisí hlavně s učením, pozorností a širším vývojovým profilem, bez vazby na konkrétní smyslové či tělesné postižení. Který partner je nejpřesnější?",
        "options": [
          "SPC, protože specializace na konkrétní druh postižení je potřebná v každé nejasné situaci.",
          "PPP, protože jde o širší vzdělávací a vývojovou zakázku bez zjevného těžiště v jednom specifickém druhu postižení.",
          "SVP, protože každá déle trvající obtíž patří především do preventivně-výchovné péče.",
          "Pouze školní metodik prevence, protože externí služba by byla předčasná vždy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Žák s významným zrakovým postižením nastupuje do nové školy a tým řeší přístupnost materiálů, orientaci v budově i vhodné kompenzační pomůcky. Který externí partner je nejpřesnější?",
        "options": [
          "PPP, protože každá školní změna je primárně otázkou obecného školního poradenství.",
          "SVP, protože změna školy sama o sobě znamená potřebu preventivně-výchovné péče.",
          "SPC, protože situace vyžaduje specializovanou podporu navázanou na konkrétní druh postižení a jeho vzdělávací dopad.",
          "Pouze zdravotnické zařízení, protože přístupnost školy nespadá do poradenského systému."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "U žáka se hromadí závažné konflikty, útěky z výuky a opakované porušování pravidel. Škola automaticky uvažuje o SPC. Které shrnutí je v této fázi nejpřesnější?",
        "options": [
          "SPC je vždy první volbou, protože poruchy chování se ve škole řeší stejným způsobem jako smyslové postižení.",
          "Stačí vyčkat na další kázeňské opatření, protože poradenský systém by se aktivoval až po jeho neúspěchu.",
          "Nejpřesnější je řešit vše jen interně, protože externí podpora by oslabovala autoritu školy.",
          "Je třeba zvážit, zda těžiště zakázky neleží spíše v preventivně-výchovné péči a širším procesu kolem rizikového chování než v SPC."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Učitel po prvním odborném rozhovoru se školním speciálním pedagogem říká: „Teď už za to ručí poradna, my jedeme dál postaru.“ Co je nejpřesnější korekce?",
        "options": [
          "Odpovědnost školy za každodenní realizaci podpory nekončí; poradenský závěr je třeba převést do praxe a průběžně vyhodnocovat.",
          "Po předání podnětu do poradenského systému je nejbezpečnější neměnit nic, aby škola nepřekročila roli.",
          "Další odpovědnost přebírá výhradně rodina, protože škola už o obtížích ví dost.",
          "Správný postup je ponechat podporu pouze školnímu speciálnímu pedagogovi bez vazby na výuku."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Který krok nejlépe uzavírá kvalitní školní poradenský cyklus po zavedení podpory?",
        "options": [
          "Formální založení dokumentů do spisu a ponechání dalšího vývoje na třídním učiteli.",
          "Průběžné vyhodnocení účinku podpory a případná úprava postupu podle toho, co se v praxi ukazuje.",
          "Uzavření tématu ve chvíli, kdy byl jednou zvolen typ podpůrného opatření.",
          "Doplnění odborných termínů do dokumentace, aby výstup vypadal přesněji."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Škola chce každou nejistotu předávat rovnou externímu zařízení, „aby nic nepokazila“. Které shrnutí je nejpřesnější?",
        "options": [
          "Je to nejlepší cesta, protože školní podpora před zapojením ŠPZ nemá velký význam.",
          "Škola by měla předávat externě jen otázky týkající se hodnocení a klasifikace.",
          "Předčasné předávání bez vlastního zachycení a vyhodnocení obtíží bývá poradensky nepřesné a oslabuje kvalitu další zakázky.",
          "Naopak je správné externí služby vůbec nezapojovat, aby škola zůstala plně autonomní."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Rodič žádá po škole okamžitě konkrétní formu podpory, ale dosavadní popis je velmi obecný a obtíže nejsou funkčně popsány. Jaký krok je nejpřesnější?",
        "options": [
          "Zpracovat IVP jako náhradu za funkční popis, aby bylo možné jednat bez zdržení.",
          "Vyhovět žádosti hned, protože rychlé přidělení formy podpory je vždy důležitější než kvalita popisu potřeby.",
          "Odkázat rodinu pouze na zdravotnictví, protože funkční popis obtíží škola nevytváří.",
          "Nejprve přesně popsat situace, v nichž se obtíž objevuje, co již bylo zkoušeno a s jakým efektem, a teprve poté volit další procesní krok."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Škola řeší žáka s podezřením na dvojí výjimečnost: v některých úlohách výrazně převyšuje třídu, jinde selhává v organizaci práce a porozumění zadání. Který partner bývá v této fázi nejpřesnější?",
        "options": [
          "PPP, protože může pracovat se širším vzdělávacím a vývojovým profilem včetně nadání a současných obtíží.",
          "SPC, protože nadání se v poradenském systému standardně řeší specializací na konkrétní druh postižení.",
          "SVP, protože nerovnoměrný výkon obvykle znamená preventivně-výchovnou zakázku.",
          "Pouze třídní učitel, protože externí partner pro nadání do školského poradenství nespadá."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Škola má doporučení z externího zařízení, ale učitelé říkají, že ve třídě mají jiné podmínky než v popisovaném modelovém příkladu. Co je nejpřesnější?",
        "options": [
          "Doporučení se v takovém případě nepoužije, protože neodpovídá doslova každé situaci.",
          "Je třeba přeložit doporučení do konkrétních školních podmínek, rolí a organizace práce, aniž by se ztratilo jeho jádro.",
          "Je vhodné převzít přesné formulace dokumentu bez ohledu na reálné podmínky školy.",
          "Nejpřesnější je přenechat interpretaci doporučení jen rodině, protože škola může být v konfliktu zájmů."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Kdy bývá přechod školy ke specializovanému SPC procesně přesnější než krok k PPP?",
        "options": [
          "Když škola potřebuje hlavně potvrdit běžné organizační změny rozvrhu a třídní evidence.",
          "Když rodiče žádají rychlé řešení, i když není popsán konkrétní vzdělávací dopad obtíží.",
          "Když je jádro zakázky v konkrétním druhu postižení a v jeho specializovaném dopadu na přístupnost a vzdělávání.",
          "Když škola chce pouze zkrátit administrativní cestu k některému podpůrnému opatření."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Škola po odeslání podnětu do ŠPZ přestane systematicky sledovat, co ve výuce funguje. Které hodnocení je nejpřesnější?",
        "options": [
          "Je to v pořádku, protože po zahájení externího procesu už školní data ztrácejí význam.",
          "Je to vhodné jen tehdy, když rodina dodá navíc zdravotnickou zprávu.",
          "Je to povinný krok, aby škola neovlivnila odborné posouzení.",
          "Je to slabé procesní místo, protože škola má dál sledovat reálné fungování žáka a tím zpřesňovat podporu i poradenskou zakázku."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Která otázka učitele bývá před krokem k ŠPZ pro poradenský proces nejcennější?",
        "options": [
          "Ve kterých konkrétních situacích se obtíž objevuje, co jí předchází a co naopak pomáhá?",
          "Kdo za žáka nejrychleji vyřídí všechny potřebné formuláře?",
          "Jak rychle lze bez dalšího popisu určit kategorii obtíží?",
          "Kdo z rodiny nese za neúspěch ve škole hlavní odpovědnost?"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Škola argumentuje: „Máme PLPP, takže do další kontroly už na podpoře nic neměníme.“ Co je nejpřesnější?",
        "options": [
          "Je to správně, protože jakákoli změna PLPP by zneplatnila dosavadní práci školy.",
          "PLPP je pracovní školní nástroj, který má smysl právě tehdy, když se podle průběžného efektu upravuje.",
          "PLPP je jen interní evidenční list a nemá vztah k reálné podpoře.",
          "PLPP se používá pouze tehdy, když už bylo vydáno doporučení vyšších stupňů podpory."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Které shrnutí nejlépe vystihuje procesní chybu školy v této situaci: rodiče mají obstarat další potvrzení a škola mezitím „nemůže nic dělat“?",
        "options": [
          "Jde o vhodné oddělení rolí, protože škola se má držet pouze výsledného papíru.",
          "Jde o správný postup pouze tehdy, když je žák ve druhém stupni vzdělávání.",
          "Jde o procesní chybu, protože škola tím bezdůvodně přesouvá odpovědnost mimo sebe a rezignuje na průběžnou podporu.",
          "Jde o formální nedostatek, který nemá přímý dopad na kvalitu podpory."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Které shrnutí rozdílu PPP a SPC je pro volbu partnera ve škole nejpřesnější?",
        "options": [
          "Rozdíl mezi PPP a SPC je dnes jen historický a pro školní proces už nemá význam.",
          "PPP řeší pouze chování a SPC pouze klasifikaci podpůrných opatření.",
          "PPP patří do školy a SPC je externí jen ve výjimečných případech.",
          "PPP častěji řeší širší vzdělávací a vývojové obtíže, zatímco SPC bývá navázáno na konkrétní druh postižení nebo kombinovaný profil."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Žák se sluchovým postižením potřebuje řešit dostupnost komunikace napříč předměty, práci s technikou a podmínky porozumění ve třídě. Který partner je nejpřesnější?",
        "options": [
          "SPC, protože jde o specializovanou podporu navázanou na konkrétní smyslové postižení a jeho školní dopad.",
          "PPP, protože technická stránka výuky nemá vazbu na typ postižení.",
          "SVP, protože problém se projevuje v chování při skupinové práci.",
          "Pouze zdravotnická ambulance, protože škola sama s komunikací pracovat nemůže."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "U žáka se hromadí školní neúspěch, nejistota při práci se zadáním, oslabená pozornost a nízká pracovní výdrž, bez jasného těžiště v konkrétním postižení. Který partner bývá nejpřesnější?",
        "options": [
          "SPC, protože bez specializace na postižení se poradenský proces neotevírá.",
          "PPP, protože jde o širší poradenskou zakázku spojenou s učením a vývojem, ne o jedno specializované postižení.",
          "SVP, protože každá opakovaná školní neúspěšnost je primárně výchovný problém.",
          "Jen třídní učitel, protože širší vzdělávací obtíže nejsou tématem školského poradenství."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Školní psycholog říká rodiči: „Doporučení vám tady sepíšu rovnou ve škole, není potřeba ŠPZ.“ Jaké hodnocení je nejpřesnější?",
        "options": [
          "Je to přesné, protože každý člen ŠPP může vydávat stejné výstupy jako PPP nebo SPC.",
          "Je to přesné jen tehdy, když rodič požádá písemně a škola souhlasí.",
          "Je to nepřesné, protože školní odborník může podporovat proces a interpretaci ve škole, ale doporučení jako odborný výstup této povahy patří do ŠPZ.",
          "Je to přesné u podpůrných opatření prvního stupně, ale i tehdy dokument vydává škola jako ŠPZ."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Který partner bývá přesnější při mimořádném nadání bez zjevného těžiště ve smyslovém nebo tělesném postižení?",
        "options": [
          "Žádný, protože školské poradenství je určeno jen pro deficity a selhávání.",
          "SPC, protože nadání je specializovaná odchylka stejně jako každé postižení.",
          "SVP, protože vysoký výkon často vede ke konfliktnosti a ta je v systému rozhodující.",
          "PPP, protože i mimořádné nadání patří do školského poradenského rámce a může vyžadovat odborné posouzení vzdělávacích potřeb."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Škola zaměňuje SVP se školským poradenským zařízením. Které shrnutí je nejpřesnější?",
        "options": [
          "SVP není totéž co PPP nebo SPC; jde o zařízení preventivně-výchovné péče s jiným těžištěm služby.",
          "SVP je druh regionální PPP, jen více zaměřený na metodiku prevence.",
          "SVP je standardní součást každé školy, podobně jako výchovný poradce.",
          "SVP je dokument školy používaný při rizikovém chování."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Žák s tělesným postižením potřebuje řešit přístupnost prostoru, polohování, kompenzační pomůcky a organizaci školních činností. Který partner je nejpřesnější?",
        "options": [
          "PPP, protože prostorové podmínky školy nejsou navázány na konkrétní typ postižení.",
          "SPC, protože jde o specializovanou podporu spojenou s konkrétním druhem postižení a jeho vzdělávacím dopadem.",
          "SVP, protože větší nároky na organizaci bývají primárně výchovný problém.",
          "Pouze třídní učitel, protože přístupnost budovy je mimo poradenský proces."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Učitel říká: „Až poradna rozhodne, začne podpora; do té doby s tím nic není.“ Které shrnutí je systémově nejpřesnější?",
        "options": [
          "Je to přesné, protože externí služba realizuje podporu a škola ji jen technicky přebírá.",
          "Je to přesné pouze u středních škol, nikoli u základních.",
          "Je to nepřesné, protože škola není pouhým příjemcem rozhodnutí; část podpory nese a realizuje už v průběhu procesu i po něm.",
          "Je to přesné tehdy, když už rodina dodala zdravotnický nález."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Jaký vztah školy a ŠPZ po zahájení poradenského procesu je nejpřesnější?",
        "options": [
          "Role školy a ŠPZ jsou v zásadě totožné; rozdíl je jen v místě výkonu práce.",
          "ŠPZ postupně přebírá každodenní práci školy, aby bylo zajištěno jednotné vedení žáka.",
          "Škola je po zahájení procesu hlavně zdrojem podpisů a administrativy, nikoli odborných informací.",
          "Škola přináší kontext a realizuje podporu, ŠPZ odborně posuzuje a doporučuje; jejich role se mají doplňovat, ne nahrazovat."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Které tvrzení o volbě partnera je nejpřesnější?",
        "options": [
          "Rozhodující je povaha vzdělávací zakázky a typ potřebné specializace, ne samotná atraktivita názvu nebo rychlost administrativy.",
          "Partner se volí hlavně podle toho, která zkratka zní pro rodiče důvěryhodněji.",
          "Jakmile se objeví dokumentace školy, externí partner už není třeba nikdy volit.",
          "Nejpřesnější je vždy začít ve SPC, protože to pokrývá i širší školní obtíže."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Škola v první fázi podpory potřebuje zachytit, jaké obtíže se ve výuce objevují, jaká opatření zkouší a s jakým efektem. Který dokument je s touto fází nejvíce spojen?",
        "options": [
          "Zpráva ze ŠPZ.",
          "PLPP jako školní pracovní nástroj podpory.",
          "Doporučení ŠPZ.",
          "Rozhodnutí o přijetí ke vzdělávání."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Kterou dvojici výstupů standardně vydává ŠPZ při odborném posouzení vzdělávacích potřeb?",
        "options": [
          "PLPP a IVP.",
          "Program poradenských služeb a preventivní program školy.",
          "Zprávu a doporučení ke vzdělávání žáka.",
          "Záznam z třídnické hodiny a školní metodický pokyn."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Škola má doporučení a potřebuje konkretizovat podobu vzdělávání jednoho žáka v podmínkách školy. Který dokument je v této rovině nejpřesnější?",
        "options": [
          "Program poradenských služeb ve škole.",
          "Zpráva ze ŠPZ.",
          "Preventivní program školy.",
          "IVP, pokud pro danou situaci dává smysl a konkretizuje podmínky vzdělávání žáka ve škole."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Které rozlišení zprávy a doporučení je nejpřesnější?",
        "options": [
          "Zpráva shrnuje odborná zjištění, zatímco doporučení je převádí do konkrétní vzdělávací podpory.",
          "Doporučení zachycuje anamnézu, zatímco zpráva už převádí vše do organizace výuky.",
          "Zpráva je školní dokument a doporučení externí dokument jen pro rodiče.",
          "Zpráva i doporučení jsou stejné dokumenty; rozdíl je jen v rozsahu textu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Který dokument zachycuje celkový rámec poradenských služeb poskytovaných ve škole?",
        "options": [
          "Individuální doporučení ŠPZ pro konkrétního žáka.",
          "Program poradenských služeb ve škole.",
          "Žádost rodiče o vyšetření v PPP nebo SPC.",
          "Zpráva z preventivně-výchovného pobytu v SVP."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Které shrnutí vztahu PLPP, IVP, zprávy a doporučení je nejpřesnější?",
        "options": [
          "PLPP i IVP jsou odborné výstupy ŠPZ, zatímco zpráva a doporučení vytváří škola.",
          "Všechny čtyři dokumenty patří výhradně rodině a škola s nimi pracuje jen okrajově.",
          "PLPP a IVP jsou školní nástroje podpory, zatímco zpráva a doporučení jsou odborné výstupy ŠPZ.",
          "PLPP a IVP slouží jen administrativě, kdežto zpráva a doporučení už tvoří skutečnou podporu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Učitel říká: „Máme doporučení, takže není potřeba nic dál rozpracovávat.“ Co je nejpřesnější korekce?",
        "options": [
          "Doporučení se v praxi používá jen při kontrolní návštěvě zvenčí.",
          "Doporučení nahrazuje jen PLPP, ale nikdy IVP.",
          "Doporučení má význam hlavně pro evidenci, nikoli pro samotnou výuku.",
          "Doporučení samo nenahrazuje školní rozpracování podpory a její každodenní realizaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Rodina chce pro školu hlavně konkrétní návod, co má být ve výuce a hodnocení upraveno. Který dokument tuto rovinu typicky nese nejvíce?",
        "options": [
          "Doporučení ŠPZ, protože převádí odborný závěr do konkrétní vzdělávací podpory.",
          "Program poradenských služeb ve škole.",
          "Třídní výkaz školy.",
          "Zdravotnický nález bez vztahu ke vzdělávacím podmínkám."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Škola sepisuje IVP dříve, než má jasně vyjasněno, jaké potřeby a cíle má tento dokument konkretizovat. V čem je hlavní slabina postupu?",
        "options": [
          "V tom, že IVP smí vznikat jen z podnětu třídního učitele.",
          "V tom, že dokument předbíhá proces a nahrazuje porozumění vzdělávací potřebě pouhou formulářovou činností.",
          "V tom, že IVP musí vždy předcházet zprávě, nikoli doporučení.",
          "V tom, že IVP se používá jen tehdy, když žák mění školu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Které shrnutí dokumentace v poradenském procesu je nejpřesnější?",
        "options": [
          "Škola a ŠPZ vedou v zásadě tutéž dokumentaci, jen v jiném grafickém formátu.",
          "Jakmile existuje zpráva ze ŠPZ, školní dokumentace už není potřeba.",
          "Škola vede dokumentaci vlastní podpory, ŠPZ vede dokumentaci svého odborného procesu; jejich funkce se nemají směšovat.",
          "Dokumentaci vede vždy hlavně rodina, škola i ŠPZ ji používají jen podpůrně."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Která role v rámci školy má nejpřesnější těžiště v prevenci a práci s rizikovým chováním?",
        "options": [
          "Výchovný poradce jako jediný koordinátor všech preventivních témat.",
          "Školní speciální pedagog.",
          "Pracovník SPC docházející do školy.",
          "Školní metodik prevence."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Která role ve škole nejčastěji nese speciálněpedagogické metodické přemýšlení o bariéře, přístupnosti a úpravě vzdělávací práce?",
        "options": [
          "Školní speciální pedagog.",
          "Školní metodik prevence.",
          "Výchovný poradce.",
          "Třídní důvěrník rodičů."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Učitel potřebuje uvnitř školy konzultovat vztah mezi třídním klimatem, emoční zátěží žáka a tím, jak se to promítá do fungování ve škole. Která role bývá nejpřesnější?",
        "options": [
          "Školní metodik prevence, protože každé emoční téma je primárně prevence.",
          "Školní psycholog, protože může nést pohled na psychické fungování žáka a jeho školní kontext.",
          "Pracovník PPP, protože uvnitř školy k tomu není žádná vhodná role.",
          "Pracovník SVP, protože školní klima patří vždy do preventivně-výchovné péče."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Která role ve škole bývá nejpřesněji spojena s výchovným a studijním poradenstvím, koordinací informací a vzdělávací dráhou žáka?",
        "options": [
          "Školní speciální pedagog.",
          "Školní metodik prevence.",
          "Výchovný poradce.",
          "Pracovník SPC."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Škola má školního speciálního pedagoga a část týmu začíná považovat podporu žáka za „jeho věc“. Které shrnutí je nejpřesnější?",
        "options": [
          "Je to správně, protože speciální pedagog přebírá veškeré rozhodování o výuce.",
          "Je to správně, protože každý žák se SVP by měl mít ve škole jednoho výhradního nositele podpory.",
          "Je to správně jen tehdy, když existuje doporučení z PPP.",
          "Školní role se mají doplňovat; speciální pedagog nenahrazuje každodenní odpovědnost učitele ani týmovou spolupráci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Nadaný žák plní úkoly rychle, ale ve škole začíná působit rušivě a odmítá rutinní práci. Jaké čtení situace je nejpřesnější jako první školní rámec?",
        "options": [
          "Je třeba zvažovat i nedostatečnou přiměřenost nároků a potřebu úprav pro nadaného žáka, ne jen hodnotit chování odděleně od vzdělávací situace.",
          "Jádrem je hlavně kázeňský problém, takže poradenský rámec není v této fázi potřebný.",
          "Nejpřesnější je ihned doporučit pobyt v SVP, protože nespokojenost ve výuce obvykle přechází do rizikového chování.",
          "Stačí přidat více stejné práce, aby se žák naučil vytrvalosti bez dalších změn."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Které tvrzení o mimořádném nadání ve školském poradenství je nejpřesnější?",
        "options": [
          "Mimořádné nadání řeší škola jen neformálně; do poradenského systému nepatří.",
          "Školské poradenství se může týkat i mimořádného nadání a navrhování vzdělávací podpory pro tyto žáky.",
          "Mimořádné nadání je čistě psychologické téma bez vztahu ke vzdělávacím podmínkám.",
          "Mimořádné nadání se řeší stejně jako každé konkrétní smyslové postižení, a proto vždy spadá do SPC."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Žák s výrazným nadáním zároveň selhává v organizaci práce a při dlouhém písemném výkonu. Který další krok je nejpřesnější?",
        "options": [
          "Soustředit se jen na podporu slabé stránky a nadání v procesu dočasně nechat stranou.",
          "Řešit jen rozvoj nadání, protože obtíže v organizaci práce jsou u vysokého výkonu vždy druhotné.",
          "Uvažovat profil komplexně, tedy současně o silných stránkách i bariérách, a podle potřeby zapojit poradenského partnera pro širší posouzení.",
          "Rozdělit situaci na dvě oddělené zakázky, aby se vzájemně neovlivňovaly, a každou řešit jinde."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Škola má nadaného žáka, který dlouhodobě podává podprůměrný výkon, protože úkoly jsou pro něj příliš jednotvárné a bez možnosti volby. Který školní krok je nejpřesnější?",
        "options": [
          "Odložit jakoukoli změnu, dokud externí zařízení nevydá definitivní kategorický závěr.",
          "Ponechat stejný režim, aby si žák nevytvářel očekávání zvláštního zacházení.",
          "Zvýšit počet stejných úloh, aby se oddělilo nadání od motivace.",
          "Upravit hloubku, tempo nebo podobu úloh tak, aby bylo možné sledovat skutečný dopad přiměřené vzdělávací nabídky na výkon žáka."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Které shrnutí nejlépe vystihuje šíři poradenského rámce ve škole?",
        "options": [
          "Poradenský rámec zahrnuje nejen obtíže a bariéry, ale i nadání, variabilitu profilu a potřebu převádět zjištění do funkční školní podpory.",
          "Poradenský rámec školy se týká jen krizových situací, nikoli běžného vzdělávacího rozvoje.",
          "Těžištěm systému je administrace dokumentů; samotná podpora je až druhotná.",
          "Poradenský systém je určen hlavně pro žáky s oficiálně potvrzeným postižením; ostatní oblasti řeší škola mimo něj."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které shrnutí nejlépe vystihuje kvalitní první školní reakci na žáka, jehož výkon je výrazně kolísavý a škola zvažuje jak nadání, tak možnou bariéru v organizaci učení?",
        "options": [
          "Rozhodnout co nejrychleji, která hypotéza je pravdivá, a druhou úplně odložit.",
          "Současně sledovat situace vysokého výkonu i místa selhávání, podle toho upravovat práci a teprve z takto zpřesněného obrazu volit případný další poradenský krok.",
          "Předat žáka přímo do SPC, protože kombinace silných a slabých stránek je vždy specializovaná zakázka.",
          "Nechat vše beze změny, aby škola neovlivnila případné budoucí odborné závěry."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12 nebo jiná vyvážená distribuce bez převažujícího písmene",
      "distributionBalanced": true
    }
  },
  {
    "id": 6,
    "label": "Baterie 6",
    "title": "Sociální a zdravotní přesah",
    "subtitle": "Hard mode: škola, sociální služby, OSPOD, zdravotnictví a meziresortní koordinace bez resortových zkratek jako nápovědy.",
    "purpose": "Ověřit, zda uchazeč umí myslet meziresortně: kdy školská podpora nestačí sama, kdy je relevantní sociální služba, kdy zdravotnická návaznost a kdy je rozhodující koordinace bez falešného buď–anebo.",
    "difficulty": "vysoká",
    "dominant": [
      "sociální služby v konkrétní potřebě",
      "škola × sociální oblast",
      "škola × zdravotnictví",
      "OSPOD a práh ohrožení dítěte",
      "raná péče a včasná podpora rodiny",
      "klinický logoped × školská podpora",
      "meziresortní koordinace"
    ],
    "breakdown": [
      "15× sociální služby v konkrétní potřebě",
      "10× škola × sociální oblast",
      "10× škola × zdravotnictví",
      "10× meziresortní koordinace a práh OSPOD",
      "5× logopedie, zdravotnictví a školská podpora"
    ],
    "tags": [
      "hard mode",
      "sociální služby",
      "zdravotnictví",
      "OSPOD",
      "meziresortní orientace",
      "koordinace"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Matka osmiletého chlapce s těžším tělesným postižením zvládá školní ranní režim, ale odpoledne už nezvládá přesuny na kroužek, hygienu a doprovod ven. Který závěr je nejpřesnější?",
        "options": [
          "Rozšířit roli asistenta pedagoga i na odpolední péči mimo školu, aby podpora zůstala v jedné linii.",
          "Vedle školní podpory může být na místě i sociální služba, protože potřeba zjevně přesahuje vzdělávání.",
          "Převést celou podporu do zdravotnictví, protože jde o kombinaci pohybu a hygieny.",
          "Vyčkat, zda se situace nezlepší sama po adaptačním období školního roku."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Sedmnáctiletá studentka s neuromuskulárním onemocněním zvládá výuku dobře, ale při pohybu po městě, při vyřizování osobních záležitostí a při vstupu do volnočasových aktivit potřebuje průběžnou pomoc druhé osoby. Která volba je nejpřesnější?",
        "options": [
          "Pečovatelská služba, protože cílí hlavně na domácnost a tím pokryje i pohyb po městě.",
          "Osobní asistence, protože potřeba se týká podpory v přirozeném prostředí a napříč běžnými činnostmi.",
          "Školní poradenské pracoviště, protože škola má nést hlavní odpovědnost za celou participaci studentky.",
          "OSPOD, protože jde o mladistvou osobu a zvýšenou míru závislosti na okolí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Rodina pečuje nepřetržitě o dítě s kombinovaným postižením. Potřebuje občas převzít péči tak, aby si pečující mohli odpočinout nebo zařídit nezbytné záležitosti. Co je nejpřesnější těžiště podpory?",
        "options": [
          "Sociální rehabilitace, protože hlavním cílem je rozvoj dovedností dítěte mimo rodinu.",
          "Pedagogická intervence školy, protože při vysoké zátěži je třeba posílit domácí přípravu.",
          "Odlehčovací služba, protože řeší přetížení pečujících a dočasné převzetí péče.",
          "PPP, protože přetížení rodiny se nejlépe řeší poradenským doporučením ke vzdělávání."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Rodiče dvouletého dítěte po sdělení diagnózy nehledají jen informaci o dávkách. Potřebují podporu v domácím prostředí, orientaci v pomůckách, v běžném fungování a v návazných službách. Která volba je jako první opora nejpřesnější?",
        "options": [
          "Koordinace přes odborného lékaře, protože u malého dítěte má být další podpora vedena primárně zdravotnictvím.",
          "PPP, protože hlavní je začít co nejdříve plánovat školní vzdělávací dráhu dítěte.",
          "OSPOD, protože každá nová diagnóza dítěte automaticky vyžaduje sociálně-právní ochranu.",
          "Raná péče, protože kombinuje podporu dítěte a rodiny v přirozeném prostředí s orientací v návaznosti služeb."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Otec dítěte s postižením se ptá hlavně na to, na jaké služby a možnosti podpory má rodina nárok, kam se obracet a jak se v systému zorientovat. Co je v jádru této potřeby?",
        "options": [
          "Potřeba poradenské orientace v sociální oblasti, nikoli ještě automaticky školského nebo zdravotnického řešení.",
          "Potřeba ihned převést situaci do SPC, protože orientace v nárocích patří primárně do školství.",
          "Potřeba uložit škole závazný plán domácí podpory rodiny.",
          "Potřeba nejprve vyčkat na kompletní lékařskou dokumentaci a teprve potom mluvit o službách."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Dospělý klient po získaném poškození zdraví potřebuje znovu nacvičit orientaci ve službách, běžných činnostech, kontaktu s okolím a návrat do co největší samostatnosti. Které těžiště podpory je nejpřesnější?",
        "options": [
          "Školské poradenství, protože každá funkční změna se řeší nejlépe vzdělávací cestou.",
          "Sociální rehabilitace, protože jejím jádrem je posílení samostatnosti a zapojení v běžném životě.",
          "Odlehčovací služba, protože hlavním cílem je převzetí péče od klienta.",
          "OSPOD, protože dlouhodobá závislost na pomoci je sama o sobě znakem ohrožení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Rodiče dívky s kombinovaným postižením řeší složitou situaci: péče doma, služba na část dne, doprava, pomůcky i orientace v dávkách. Nejde o akutní ohrožení dítěte, ale o vysokou komplexitu rodinné situace. Jaký závěr je nejpřesnější?",
        "options": [
          "Primárně zahájit řízení přes OSPOD, protože složitost situace sama znamená sociálně-právní ohrožení.",
          "Vyžadovat od školy, aby zastřešila i sociální a domácí oblast, když dítě chodí do školy.",
          "Vedle konkrétní služby je namístě i odborné sociální poradenství, protože rodina potřebuje orientaci v celém systému podpory.",
          "Převést situaci do zdravotnictví, protože více potřeb najednou znamená zdravotnický problém."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "U dítěte se závažnějšími obtížemi už probíhá zdravotnická péče. Rodiče ale zároveň potřebují doma měnit denní režim, pracovat s běžnými situacemi a vědět, jak navazovat další podporu. Která úvaha je nejpřesnější?",
        "options": [
          "Jakmile běží zdravotnická péče, další podpora v sociální oblasti by jen dublovala systém.",
          "Nejpřesnější je přesunout celou situaci do školy, protože tam se potřeby dítěte projeví nejčitelněji.",
          "Nejprve je vhodné počkat, až léčba skončí, aby systémy nepůsobily současně.",
          "Zdravotnická péče a raná péče se mohou doplňovat, protože neřeší totožnou vrstvu podpory."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Žák má ve škole asistenta pedagoga a rodina žádá, aby tatáž osoba zajišťovala i cestu domů a odpolední pobyt ve městě. Která odpověď je nejpřesnější?",
        "options": [
          "Školní podpora má své hranice; potřeba mimo vzdělávání může vyžadovat jiný typ služby.",
          "Asistent pedagoga je určen právě k propojení školy, domácnosti a volného času bez rozdílu.",
          "Jakmile je dítě ve škole podporováno, další systém už do situace vstupovat nemá.",
          "Správné je převést celou situaci do SPC, protože to koordinuje i mimoškolní pomoc."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "U žákyně se opakovaně objevuje zanedbaná hygiena, hlad, časté absence a výroky naznačující výrazné napětí doma. Škola už s rodinou mluvila, ale bez změny. Který další krok je nejpřesnější?",
        "options": [
          "Požádat PPP o vyšetření, protože hlavní je ověřit dopad situace na školní výkon.",
          "Zvážit zapojení OSPOD, protože se neřeší jen vzdělávání, ale možné ohrožení dítěte.",
          "Omezit školní nároky, protože sociální situace rodiny nesmí vést k meziresortnímu postupu.",
          "Ponechat situaci čistě na třídním učiteli, aby se rodina necítila kontrolována."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Škola ví, že rodina je přetížená péčí o dítě se závažným postižením. Nejde o zanedbávání ani o akutní ohrožení, ale domácí situace výrazně komplikuje školní fungování dítěte. Co je nejpřesnější těžiště dalšího postupu?",
        "options": [
          "Primárně OSPOD, protože každé dlouhodobé přetížení rodiny je automaticky sociálně-právní případ.",
          "Primárně zdravotnictví, protože přetížení rodiny je důkazem nedostatečné léčby.",
          "Propojit školní podporu s nabídkou sociální orientace nebo služby, protože jádro situace není jen školní.",
          "Ukončit komunikaci s rodinou a řešit pouze docházku a výkon ve škole."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Mateřská škola popisuje, že dítě s komplexnějšími potřebami má náročné přechody mezi činnostmi, rodina současně řeší denní péči a domácí režim. Který postoj školy je nejpřesnější?",
        "options": [
          "Přenechat situaci plně rodičům, protože předškolní zařízení nemá v meziresortní rovině co dělat.",
          "Požádat ihned OSPOD, protože obtížné přechody bývají známkou zanedbávání.",
          "Vyžadovat, aby všechny potřeby dítěte řešilo jen zdravotnictví.",
          "Nastavovat vlastní vzdělávací podporu a současně myslet na návaznost služeb, pokud potřeby rodiny přesahují školu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Rodina dospívajícího s tělesným postižením potřebuje pomoc s doprovodem na úřady, mimoškolní aktivity a s praktickými činnostmi doma. Škola už zajišťuje úpravy vzdělávání. Co je nejpřesnější?",
        "options": [
          "Vedle školních úprav může být potřebná i sociální služba zaměřená na každodenní fungování mimo školu.",
          "Protože už funguje škola, další resort by do situace vstupovat neměl.",
          "Nejpřesnější je požádat klinického logopeda, aby koordinoval celý případ.",
          "Je třeba nejprve přehodnotit školní klasifikaci a teprve potom uvažovat o jiné podpoře."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Škola řeší, že žák po vyučování nemá zajištěn bezpečný návrat a rodina není schopna podporu dlouhodobě držet. Který závěr je nejpřesnější?",
        "options": [
          "Prodloužit školní odpovědnost automaticky až do doby, kdy dítě dorazí domů.",
          "Rozlišit, co je ještě organizace vzdělávání a co už je potřeba mimo školu, která může vyžadovat jinou službu.",
          "Převést situaci do zdravotnictví, protože bezpečný návrat domů souvisí se zdravotním stavem.",
          "Vystavit IVP se zvýšenou dohledovou povinností školy i po vyučování."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Rodina dítěte s postižením opakovaně žádá školu, aby vyřizovala i dávky, kompenzační pomůcky a návazné sociální služby. Která odpověď školy je nejpřesnější?",
        "options": [
          "Škola má celou sociální agendu převzít, protože zná dítě nejlépe.",
          "Škola má rodiče odkázat výhradně na zdravotnictví, protože dávky a pomůcky se odvíjejí od diagnózy.",
          "Škola může podpořit orientaci a spolupráci, ale nemá sama nahrazovat sociální poradenství ani jiné resorty.",
          "Škola má odmítnout jakoukoli komunikaci o situaci rodiny, protože to není čistě vzdělávací téma."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Žák má nově diagnostikované onemocnění a současně se ve škole výrazně zhoršila dostupnost komunikace a tempa práce. Který přístup je nejpřesnější?",
        "options": [
          "Vyčkat, až zdravotnictví vše uzavře, a školu zatím ponechat bez změny.",
          "Převést celý případ do sociálních služeb, protože diagnóza už přesahuje školství.",
          "Požadovat od zdravotníka konkrétní metodiku výuky místo vlastního školního rozhodování.",
          "Zdravotnická péče může běžet souběžně, ale škola musí samostatně řešit vzdělávací dopad a podporu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Dítě dochází na intenzivní rehabilitaci. Ve škole ale selhává hlavně proto, že úkoly nezvládá v daném čase a v běžné pracovní organizaci. Co je nejpřesnější závěr?",
        "options": [
          "Rehabilitace automaticky řeší i organizaci školní práce, takže škola nemá co upravovat.",
          "Škola má číst funkční dopad ve vzdělávání a upravovat podmínky, i když zdravotnická péče současně pokračuje.",
          "Potíže jsou primárně sociální, protože rodina už využívá zdravotní služby.",
          "Je třeba situaci uzavřít jako dočasný výkyv bez návazné podpory."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 18,
        "text": "Rodiče chtějí, aby škola přesně kopírovala doporučení lékaře pro každou učební situaci. Která reakce školy je nejpřesnější?",
        "options": [
          "Škola může vzít zdravotnické informace v úvahu, ale musí je převést do vlastního vzdělávacího rozhodování.",
          "Škola je povinna převzít zdravotnický plán beze změn jako přímý výukový manuál.",
          "Jakmile vstoupí lékař, škola už není odpovědná za podobu podpory.",
          "Škola by měla trvat na tom, že zdravotní informace nejsou pro vzdělávání nikdy relevantní."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 19,
        "text": "Žák dlouhodobě navštěvuje klinického logopeda. Ve škole se ale nadále ztrácí v delších verbálních instrukcích a v práci s textem. Co je nejpřesnější?",
        "options": [
          "Pokračující klinická logopedie znamená, že škola už nemá vlastní prostor pro úpravu komunikace a zadávání.",
          "Škola má hlavně sledovat docházku na terapii a nevstupovat do žádné vlastní podpory.",
          "Zdravotnická léčba a školní úpravy komunikace řeší odlišné vrstvy; škola má reagovat na vzdělávací dopad.",
          "Celou situaci je třeba převést do OSPOD, protože obtíže přetrvávají navzdory terapii."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Student má chronické onemocnění s výkyvy výkonnosti. Lékař sleduje zdravotní stav, ale škola řeší hlavně to, jak nastavit zátěž, termíny a formu ověřování. Který krok je nejpřesnější?",
        "options": [
          "Přesunout rozhodování o hodnocení plně na lékaře, protože zdravotní stav je hlavní příčina obtíží.",
          "Přesunout situaci do sociálních služeb, protože kolísavý výkon ukazuje na potřebu dlouhodobé péče.",
          "Počkat bez úprav, aby škola neovlivnila medicínské posouzení.",
          "Vyjít z informací o zdravotním stavu, ale školní podmínky nastavovat podle funkčního dopadu na vzdělávání."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Rodiče chtějí po škole, aby kvůli probíhající léčbě dočasně přestala sledovat vzdělávací pokrok dítěte. Co je nejpřesnější odpověď?",
        "options": [
          "Škola může přiměřeně upravit způsob sledování výkonu, ale nemá úplně rezignovat na vzdělávací odpovědnost.",
          "Škola musí vzdělávací cíle zcela pozastavit, jakmile běží léčba.",
          "Jakékoli sledování pokroku je během léčby eticky nepřípustné.",
          "Škola má případ předat čistě zdravotnictví a evidovat jen omluvené absence."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Žák po úrazu potřebuje ve škole krátkodobě výrazně upravit pohyb po budově, pracovní tempo a způsob plnění některých úkolů. Který závěr je nejpřesnější?",
        "options": [
          "Jde hlavně o problém sociálních služeb, protože se objevila závislost na pomoci druhých.",
          "Škola má reagovat na aktuální funkční dopad a praktické podmínky vzdělávání, i když zdravotní péče běží jinde.",
          "Řešení má být odloženo, dokud nebude ukončena zdravotnická rehabilitace.",
          "Je vhodné měnit jen klasifikaci, protože organizace podmínek by zasahovala do léčby."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Dítě má výrazné potíže s příjmem potravy a související zdravotnickou péči. Ve škole je ale hlavní otázkou bezpečný režim, předvídatelnost a citlivá organizace dne. Co je nejpřesnější?",
        "options": [
          "Hlavní je ponechat vše zdravotnictví, protože škola u takových obtíží nevytváří vlastní podmínky.",
          "Je třeba požádat OSPOD, protože potíže s příjmem potravy vždy znamenají ohrožení rodiny.",
          "Zdravotnické vedení a školní režimová opatření nejsou totéž; škola má řešit vlastní organizační vrstvu bezpečí.",
          "Nejprve je potřeba úplně vyřadit dítě z kolektivu, aby škola nenesla žádné riziko."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Rodina přichází s lékařskou zprávou, ale sama říká, že doma nezvládá běžný režim, dopravu a koordinaci podpory. Které čtení situace je nejpřesnější?",
        "options": [
          "Je to čistě zdravotnický případ; další roviny netřeba otevírat.",
          "Jde hlavně o školní potíž, protože rodina zatím neřeší konkrétní výuku.",
          "Lékařská zpráva sama ukazuje, že sociální oblast není relevantní.",
          "Vedle zdravotnických informací může být významná i sociální podpora, protože rodina popisuje praktickou a organizační zátěž."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Škola chce po specialistovi, aby jí přesně řekl, jak má každý den vést výuku žáka s chronickým onemocněním. Která úvaha je nejpřesnější?",
        "options": [
          "Specialista může být zdrojem důležitých informací, ale škola nesmí rezignovat na vlastní profesní rozhodování o výuce.",
          "Je správné, aby zdravotník převzal i metodické vedení výuky, protože jeho závěr je odbornější.",
          "Škola má zdravotnické informace ignorovat, aby chránila autonomii vzdělávání.",
          "Nejpřesnější je obrátit se místo specialisty na OSPOD."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Dítě s kombinovanými potřebami dochází do MŠ, rodina využívá sociální službu a současně má zdravotnické kontroly. Který přístup je nejpřesnější?",
        "options": [
          "Vybrat jeden systém jako hlavní a ostatní dočasně vypnout, aby byla situace přehlednější.",
          "Koordinovat návaznost podpory tak, aby si systémy nepřekážely a každý řešil vlastní vrstvu potřeb.",
          "Přenést veškerou koordinaci výhradně na školu, protože ta vidí dítě každý den.",
          "Nesdílet nic mezi systémy, protože každé propojení automaticky porušuje kompetenční hranice."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Poradce slyší od školy větu: „Potřebujeme hlavně vědět, kdo si dítě převezme mimo vyučování.“ V zadání ale zároveň není popsaná žádná akutní hrozba ani spor o péči. Která interpretace je nejpřesnější?",
        "options": [
          "Jde primárně o školní kázeňský problém.",
          "Jde primárně o potřebu zdravotnické diagnostiky.",
          "Jádro leží spíš v organizaci péče a návazné podpoře mimo školu než v čistě vzdělávacím opatření.",
          "Jde automaticky o případ pro OSPOD."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Rodina chce po škole, aby kvůli složité domácí situaci rozhodla i o tom, jakou sociální službu si mají vybrat. Která reakce školy je nejpřesnější?",
        "options": [
          "Škola má službu určit sama, protože dítě ve vzdělávání zná nejlépe.",
          "Škola má popsat jen dopad do vzdělávání a k volbě služby se nemá vyjadřovat ani orientačně.",
          "Škola má situaci automaticky postoupit OSPOD, protože si rodina není jistá dalším krokem.",
          "Škola může rodinu nasměrovat a popsat dopad do vzdělávání, ale nemá sama nahrazovat sociální poradenství nebo volbu služby."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Rodiče říkají, že doma kvůli péči nezvládají spánek, organizaci dne a sourozenecké napětí. Ve škole se už objevuje kolísání výkonu dítěte. Co je nejpřesnější?",
        "options": [
          "Vedle školního obrazu je třeba číst i sociální zátěž rodiny, protože ta může měnit fungování dítěte ve škole.",
          "Jde jen o didaktický problém, který škola vyřeší úpravou pracovních listů.",
          "Jde jen o zdravotnický problém, protože únava a režim vycházejí z diagnózy.",
          "Dokud dítě prospívá alespoň průměrně, není důvod o meziresortní návaznosti uvažovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Škola popisuje, že u dítěte s dlouhodobou nemocí se mění výkonnost podle léčby a hospitalizací. Rodina navíc potřebuje pomoc s každodenním fungováním. Který přístup je nejpřesnější?",
        "options": [
          "Vybrat jednu dominantní oblast a ostatní dočasně neřešit, aby podpora nebyla roztříštěná.",
          "Rozlišit zdravotnickou, vzdělávací a sociální vrstvu situace a podle toho skládat návazné kroky.",
          "Předat případ výhradně SPC, protože kombinace více vrstev vždy patří jen tam.",
          "Omezit se jen na školní omlouvání absence, protože ostatní vrstvy leží mimo vzdělávání."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Poradce dostane zadání: „Rodina chce méně administrativy a jednu instituci, která vyřeší úplně všechno.“ Která odpověď je odborně nejpřesnější?",
        "options": [
          "Ano, cílem je vždy najít jednu instituci, která převezme vzdělávání, léčbu i sociální podporu.",
          "Nejpřesnější je přesměrovat situaci do zdravotnictví, protože to je odborně nejsilnější systém.",
          "Je třeba vysvětlit, že různé potřeby patří do různých systémů a kvalita spočívá v návaznosti, ne v jejich sloučení.",
          "Rodina si má vybrat jen tu službu, kterou zvládne finančně, bez ohledu na jádro potřeby."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "U dítěte se kombinuje potřeba ranní péče doma, specifická komunikace ve škole a pravidelná zdravotnická kontrola. Která úvaha je nejpřesnější?",
        "options": [
          "Škola má všechno převzít, protože je nejblíž běžnému životu dítěte.",
          "Zdravotnictví má určit i podobu školní komunikace a domácí péče, aby byla zachována jednota postupu.",
          "Sociální služba má nahradit vzdělávací podporu, když už je rodina zasažená péčí.",
          "Různé potřeby mohou vyžadovat různé partnery; přesnost spočívá v tom, co je hlavní v které vrstvě situace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Rodina se ptá, zda má nejprve vyřešit lékaře, službu nebo školu. Zadání ale popisuje hlavně to, že dítě doma nezvládá režim a rodiče tápou v podpoře. Která odpověď je nejpřesnější?",
        "options": [
          "Prvním čtením není název instituce, ale jádro potřeby; tady nejde primárně o školní výkon, ale o podporu rodiny a běžného fungování.",
          "Je třeba automaticky začít ve školství, protože dítě bude jednou žákem.",
          "Je třeba automaticky začít ve zdravotnictví, protože potíže se objevují v raném věku.",
          "Je třeba automaticky začít na OSPOD, protože rodiče si nejsou jisti dalším krokem."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Škola popisuje, že rodina žádá po třídní učitelce koordinaci všech odborníků i služeb. Která odpověď je nejpřesnější?",
        "options": [
          "Třídní učitel má plně převzít case management, protože zná dítě v běžném režimu.",
          "Škola může být důležitým partnerem, ale není automaticky koordinátorem všech mimoškolních systémů.",
          "Je to primárně úkol OSPOD, protože koordinace více potřeb rodiny už sama přesahuje běžnou školní roli.",
          "Koordinace mimo školu je výhradně zdravotnická kompetence."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Rodina malého dítěte se bojí vstoupit do služby, protože už navštěvuje několik zdravotnických ambulancí. Které vysvětlení je nejpřesnější?",
        "options": [
          "Další služba by jen zvyšovala nepřehlednost, proto je lepší držet jen zdravotnictví.",
          "Sociální služba má smysl jen tehdy, když zdravotnictví úplně skončí.",
          "Souběh může být funkční, pokud jednotlivé podpory neřeší totéž a navazují na reálnou potřebu rodiny.",
          "Jakmile je dítě malé, škola by měla převzít koordinační roli místo sociální oblasti."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Škola zjistí, že dítě opakovaně zůstává bez dozoru pozdě večer, rodič dlouhodobě nereaguje a okolí popisuje zhoršující se zanedbávání. Který rámec je nejpřesnější?",
        "options": [
          "Jde hlavně o potřebu sociální služby pro odpočinek pečujících.",
          "Jde hlavně o potřebu školské diagnostiky, protože dítě začíná ve výuce selhávat.",
          "Jde hlavně o potřebu klinické terapie řeči, protože dítě je ve stresu.",
          "Jde o situaci možného ohrožení dítěte, kde je relevantní sociálně-právní ochrana."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Rodič dítěte s postižením je vyčerpaný, ale zároveň otevřeně spolupracuje, hledá pomoc a potřeby dítěte neignoruje. Který závěr je nejpřesnější?",
        "options": [
          "Nejde automaticky o případ pro OSPOD; spíše je třeba číst zátěž a podpůrné služby pro rodinu.",
          "Je to automaticky případ sociálně-právní ochrany, protože únava rodiče znamená ohrožení dítěte.",
          "Je to automaticky zdravotnický problém pečující osoby.",
          "Je to především kázeňský problém dítěte, které je na rodinu příliš vázané."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Poradce dostává od školy informaci, že rodina nezvládá péči a zároveň si není jistá, jaké služby vůbec existují. Který první rámec je nejpřesnější?",
        "options": [
          "Primárně SPC, protože každé dítě s postižením má mít nejprve školské zařízení.",
          "Primárně sociální orientace a služba podle potřeby, protože zadání stojí na praktickém fungování rodiny.",
          "Primárně lékařská revize diagnózy, protože bez ní nelze o službách mluvit.",
          "Primárně OSPOD, protože rodina si není jistá systémem."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Ve škole se opakuje situace, kdy dítě s těžší motorickou bariérou nemá po vyučování zajištěný přesun na další aktivity, a rodiče už dlouhodobě nestačí. Co je nejpřesnější čtení situace?",
        "options": [
          "Škola má posílit domácí úkoly, aby dítě nemuselo na další aktivity docházet.",
          "Jádro leží hlavně ve vzdělávací motivaci dítěte, ne v systému podpory.",
          "Školní podpora už nepokrývá celý rozsah potřeby; je třeba myslet i na praktickou pomoc mimo školu.",
          "Je třeba zastavit všechny mimoškolní aktivity, protože systém jinou cestu nezná."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Rodina dítěte s postižením žádá školu, aby z důvodu složité péče omlouvala dlouhodobě vše bez další domluvy. Který přístup je nejpřesnější?",
        "options": [
          "Plně vyhovět, protože sociální zátěž rodiny automaticky ruší odpovědnost školy za vzdělávání.",
          "Předat věc výhradně OSPOD, protože každá omlouvaná absence je sociálně-právní problém.",
          "Požádat zdravotníka, aby za školu rozhodl, jak s docházkou naložit.",
          "Rozlišit soucit se zátěží rodiny od vlastní odpovědnosti školy a hledat kombinaci podpory, domluvy a případné návazné pomoci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Dítě po náročné hospitalizaci nastupuje zpět do školy. Rodina je organizačně vyčerpaná a škola očekává rychlý návrat do běžného režimu. Který postoj je nejpřesnější?",
        "options": [
          "Je třeba číst současně zdravotnickou stopu, školní adaptaci i rodinnou zátěž; žádná z nich sama nevysvětlí celou situaci.",
          "Hospitalizace znamená, že návrat do školy se řeší výhradně zdravotnickým plánem.",
          "Rodina je po hospitalizaci z definice případem pro OSPOD.",
          "Jakmile dítě dochází do školy, domácí zátěž už není pro podporu relevantní."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Škola chce pomoci rodině, která je zahlcená péčí, ale neví, zda má rovnou kontaktovat OSPOD. V zadání však není nic o zanedbávání ani ohrožení. Co je nejpřesnější?",
        "options": [
          "Kontaktovat OSPOD preventivně vždy, když rodina působí unaveně.",
          "Nejprve rozlišit, zda jde o potřebu podpory a orientace, nebo o skutečné znaky ohrožení dítěte.",
          "Nevstupovat do situace vůbec, protože rodinná zátěž je soukromá věc.",
          "Řešit vše jen změnou hodnocení dítěte."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Poradce má doporučit další krok u dítěte, kde se spojuje náročná domácí péče, zhoršující se školní dostupnost a probíhající zdravotnická léčba. Co je nejpřesnější?",
        "options": [
          "Vybrat jen ten systém, ve kterém už dítě je, aby nedocházelo ke zmatku.",
          "Vyřešit jen školní výkon a ostatní vrstvy vědomě odsunout.",
          "Pojmenovat, která potřeba je vzdělávací, která sociální a která zdravotnická, a podle toho skládat návazné kroky.",
          "Požádat rodinu, aby si sama určila jeden hlavní resort, protože profese by do toho neměla vstupovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Rodiče chtějí po poradci jedno jasné doporučení, které 'nahradí' jejich další rozhodování o škole, zdravotnictví i službách. Která odpověď je nejpřesnější?",
        "options": [
          "Poradce má zvolit za rodinu jeden definitivní systém, aby snížil jejich nejistotu.",
          "Nejpřesnější je předat celé rozhodnutí škole, protože ta dítě sleduje dlouhodobě.",
          "Nejpřesnější je držet se jen diagnózy a podle ní určit hlavní systém podpory.",
          "Poradce má pomoci zpřesnit potřeby a volby, ale nevnucovat jednu falešně všeřešící zkratku."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Škola chce po rodině, aby nejprve 'vyřešila domácí situaci', a teprve potom slibuje upravit vzdělávání dítěte. Která úvaha je nejpřesnější?",
        "options": [
          "Škola tím přesouvá vlastní odpovědnost; domácí zátěž může být relevantní, ale nevylučuje školní podporu.",
          "Jde o správný postup, protože škola bez stabilní rodiny nesmí reagovat.",
          "Je to situace výhradně pro OSPOD, protože škola už nemá žádný prostor.",
          "Je to situace výhradně pro zdravotnictví, protože domácí zátěž je důsledkem diagnózy."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Rodiče dítěte s těžší poruchou komunikace říkají: „Do školy už přece chodíme ke klinickému logopedovi, tak proč by škola ještě něco měnila?“ Která odpověď je nejpřesnější?",
        "options": [
          "Protože klinický logoped současně určuje i všechny pedagogické postupy školy.",
          "Klinická logopedie a školní podpora komunikace nejsou totéž; škola řeší dopad obtíže do vzdělávání.",
          "Jakmile je dítě v logopedické péči, škola by do komunikace vstupovat neměla.",
          "Je vhodné převést komunikaci dítěte hlavně do sociálních služeb."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Škola se ptá, zda má při přetrvávající komunikační bariéře čekat na nový klinickologopedický závěr, nebo upravit výuku hned. Co je nejpřesnější?",
        "options": [
          "Počkat bez změn, aby škola nezasahovala do odborné terapie.",
          "Převést situaci do sociální služby, protože škola potřebuje průvodce rodiny.",
          "Škola může a má reagovat na funkční dopad v komunikaci i bez čekání na nový zdravotnický dokument.",
          "Nejprve změnit dítěti třídu, protože tím se komunikační bariéra často sama vyřeší."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Rodina chce, aby školský logoped vedl i zdravotnickou léčbu artikulace a současně organizoval sociální službu pro domácí režim. Které vysvětlení je nejpřesnější?",
        "options": [
          "Ano, školský logoped je meziresortní koordinátor všech komunikačních a sociálních témat.",
          "Ano, protože ve škole se všechny potřeby dítěte přirozeně propojují do jedné role.",
          "Ne, protože komunikační obtíž je vždy čistě zdravotnická a škola se jí nemá dotýkat.",
          "Školský logoped má pedagogickou roli ve vzdělávání; zdravotnická léčba a sociální služba patří jinam."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "U dítěte s komunikační bariérou současně probíhá klinická logopedie, škola řeší porozumění zadání a rodina je přetížená organizací péče. Které shrnutí je nejpřesnější?",
        "options": [
          "Nejpřesnější je číst tři různé vrstvy potřeby: léčbu, vzdělávací dopad a praktickou zátěž rodiny.",
          "Nejpřesnější je považovat vše za jeden logopedický problém a držet jen zdravotnictví.",
          "Nejpřesnější je považovat vše za jeden školní problém, protože dítě chodí do školy každý den.",
          "Nejpřesnější je považovat vše za sociální problém, protože rodina je přetížená."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které shrnutí nejlépe vystihuje hard-mode logiku Baterie 6?",
        "options": [
          "Nejdůležitější je poznat správný název služby podle jedné klíčové věty v zadání.",
          "Klíčem je rozlišit, kdy jde hlavně o vzdělávací dopad, kdy o sociální situaci, kdy o zdravotnickou návaznost a kdy o jejich koordinaci.",
          "Správná bývá obvykle ta možnost, která obsahuje nejvíc institucí a odborných termínů.",
          "Baterie je hlavně o memorování typologií služeb bez aplikačního významu."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12 nebo jiná vyvážená distribuce bez převažujícího písmene",
      "distributionBalanced": true
    }
  },
  {
    "id": 7,
    "label": "Baterie 7",
    "title": "Poradenský úsudek, etika a kvalita procesu",
    "subtitle": "Hard mode: poradenská zakázka, kvalita výstupu, hranice role a převod závěrů do proveditelné podpory.",
    "purpose": "Ověřit, zda uchazeč uvažuje poradensky: umí vyjasnit zakázku, unést nejistotu, vytvořit kvalitní výstup, držet hranice role, metodicky vést školu a srozumitelně překládat odborný závěr rodině i žákovi.",
    "difficulty": "vysoká",
    "dominant": [
      "poradenská zakázka a proces",
      "kvalita poradenského výstupu",
      "interpretace bez redukce na nálepku",
      "etika a hranice kompetencí",
      "metodické vedení školy",
      "práce s rodinou a žákem",
      "překlad závěru do podpory"
    ],
    "breakdown": [
      "20× poradenský proces a kvalita zakázky",
      "10× kvalita a forma poradenského výstupu",
      "10× etické a kompetenční hranice",
      "5× metodické vedení školy",
      "5× práce s rodinou a překladem závěru"
    ],
    "tags": [
      "hard mode",
      "poradenství",
      "etika",
      "kvalita procesu",
      "výstup",
      "škola–rodina"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Škola přichází s požadavkem „napište nám, co s ním přesně je“, ale popis obtíží je zatím velmi obecný. Jaký první krok poradce je nejpřesnější?",
        "options": [
          "Vybrat pravděpodobnou kategorii obtíží, aby se proces rychleji zúžil.",
          "Vyjasnit, v jakých situacích se obtíže projevují a co škola potřebuje vědět pro podporu.",
          "Sepsat předběžný závěr, aby škola měla od začátku oporu v dokumentu.",
          "Požádat školu, aby nejprve sama navrhla hotové řešení a poradce ho jen potvrdil."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 2,
        "text": "Které vymezení nejlépe ukazuje kvalitní poradenskou zakázku?",
        "options": [
          "Je formulovaná co nejširším způsobem, aby se předem nic nevyloučilo.",
          "Je postavená hlavně na tom, jakou kategorii by bylo vhodné potvrdit.",
          "Je správná tehdy, když ji škola a rodina formulují úplně stejně.",
          "Je dost konkrétní pro další práci, ale nechává prostor pro ověření, co je skutečné jádro obtíží."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 3,
        "text": "Která posloupnost nejlépe odpovídá kvalitnímu poradenskému cyklu?",
        "options": [
          "sběr dokumentů – předání závěru – krátká konzultace – případné doplnění později",
          "určení kategorie – převod do opatření – informování školy – uzavření případu",
          "vyjasnění zakázky – shromáždění relevantních informací – interpretace – návrh podpory – ověření účinku",
          "zachycení obtíží – rychlé doporučení – formální sepsání – případná revize jen při stížnosti"
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Poradce má k dispozici první pozorování, ale škola chce jedinou větu „pro spis“. Jaký postup je nejvhodnější?",
        "options": [
          "Vrátit se k funkčnímu popisu potíží a zatím nezužovat situaci na nálepku, která by předbíhala smysl podpory.",
          "Vyjít vstříc škole stručným označením obtíží, protože administrativní srozumitelnost má v této fázi přednost.",
          "Omezit práci jen na to, co lze prokázat testem, aby se předešlo sporům o interpretaci.",
          "Přerušit proces, dokud škola nepředloží detailnější interní dokumentaci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 5,
        "text": "Podpora byla zavedena, ale funguje jen v některých situacích a tým ji používá nejednotně. Co je nejpřesnější další krok?",
        "options": [
          "Dopsat do doporučení více odborných termínů, aby působilo závazněji.",
          "Vrátit se s týmem ke konkrétním situacím, v nichž podpora funguje a nefunguje, a podle toho ji upravit.",
          "Vyčkat delší dobu, protože nejednotnost školy se obvykle srovná sama.",
          "Uzavřít případ s tím, že doporučení už bylo předáno a další běh je věcí školy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 6,
        "text": "Rodina nabízí jedno vysvětlení obtíží, škola jiné a dosavadní data nejsou dostatečná. Jaký postup poradce je nejvhodnější?",
        "options": [
          "Přiklonit se k verzi školy, protože pracuje s dítětem denně a má více pozorování.",
          "Zvolit tu interpretaci, která povede k rychlejší organizaci podpory, i kdyby byla předběžná.",
          "Vyhotovit kompromisní závěr, aby se obě strany v textu poznaly.",
          "Udržet více pracovních hypotéz a cíleně doplnit informace tam, kde rozhodnutí zatím stojí na domněnce."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 7,
        "text": "Při první konzultaci se starším žákem je patrná nejistota a stručné odpovědi. Který postup je nejpřesnější?",
        "options": [
          "Vyjasnit smysl setkání, vytvořit bezpečný rámec a používat otázky, které umožní žákovi popsat vlastní zkušenost bez tlaku.",
          "Převzít hlavní komunikaci s rodičem, protože žák by mohl odpovídat nepřesně.",
          "Soustředit se hlavně na to, aby žák potvrdil, co už uvedla škola.",
          "Zkrátit rozhovor na minimum a vyjít z dokumentace, aby se situace zbytečně neprotahovala."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 8,
        "text": "Který krok nejvíce oslabuje poradenský proces už v počátku?",
        "options": [
          "Průběžně zpřesňovat, co je otázkou školy a co je otázkou rodiny.",
          "Rozlišovat mezi popisem potíže, její interpretací a návrhem podpory.",
          "Formulovat závěr dřív, než je jasné, jaká otázka se vlastně řeší a k čemu má výstup sloužit.",
          "Pracovat s konkrétními situacemi místo obecných dojmů."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 9,
        "text": "Škola žádá „rychlé doporučení ještě dnes“, ale relevantních dat je málo. Co je nejpřesnější odpověď poradce?",
        "options": [
          "Bez odkladu vydat plný závěr, aby škola nezůstala bez opory.",
          "Pojmenovat, co lze doporučit předběžně už teď, a zároveň jasně vymezit, co je ještě potřeba ověřit.",
          "Doporučení odložit úplně, dokud nebude k dispozici maximální množství podkladů.",
          "Převést rozhodnutí na rodiče, protože bez jejich preferencí nelze postup určit."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 10,
        "text": "U dítěte se obtíže popisují jako „všude trochu jiné“. Co je pro poradenské myšlení nejpřesnější?",
        "options": [
          "Vybrat prostředí, v němž jsou obtíže nejvýraznější, a z něj odvodit celý závěr.",
          "Sečíst dojmy z různých situací a hledat průměrný obraz dítěte.",
          "Požádat školu o novou formalizovanou zprávu a další sběr dočasně zastavit.",
          "Mapovat, v jakých kontextech se obtíže mění, co je spouští a co je naopak tlumí."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 11,
        "text": "Která otázka je při následné konzultaci po zavedení podpory nejcennější?",
        "options": [
          "Kdo přesně opsal formulace doporučení do školní dokumentace?",
          "Který odborný termín byl pro školu nejsrozumitelnější?",
          "Ve kterých situacích se podpora osvědčila, kde ne a co to říká o dalším nastavení?",
          "Jak rychle byla opatření administrativně zavedena po převzetí zprávy?"
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Učitel chce „jeden univerzální tip pro všechny hodiny“, aby se nemusel vracet ke konkrétním situacím. Jaká reakce poradce je nejpřesnější?",
        "options": [
          "Vysvětlit, že podpora musí vycházet z toho, v jakých typech situací se bariéra objevuje, a nelze ji nahradit jednou obecnou frází.",
          "Vybrat nejsilnější opatření a doporučit jeho plošné použití bez dalších úprav.",
          "Přenechat volbu učiteli, protože poradce nemá zasahovat do metodiky výuky.",
          "Doporučit vyčkat, zda se obtíže nerozptýlí po adaptaci na ročník."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 13,
        "text": "Které tvrzení nejlépe rozlišuje poradenskou interpretaci od pouhého popisu obtíží?",
        "options": [
          "Interpretace shrnuje dojmy všech zúčastněných bez nutnosti hledat mezi nimi vztahy.",
          "Interpretace propojuje zjištění do pracovního vysvětlení, které má smysl pro volbu podpory.",
          "Interpretace je odbornější název pro seznam symptomů a testových výsledků.",
          "Interpretace slouží hlavně k tomu, aby text působil přesvědčivěji."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 14,
        "text": "Rodina a škola popisují tutéž situaci odlišně. Co je pro poradce nejvhodnější?",
        "options": [
          "Vybrat verzi, která lépe zapadá do dosavadní dokumentace.",
          "Předat stranám, aby si rozdíl vyjasnily samy, a zatím proces nechat stát.",
          "Přijmout obě verze jako rovnocenné a bez další práce je zařadit do závěru.",
          "Rozlišit, co kdo pozoruje v jakém kontextu, a hledat společný obraz relevantní pro podporu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 15,
        "text": "Škola chce po poradci „jasné potvrzení diagnózy, ať je ve všem pořádek“. Jaká odpověď je nejpřesnější?",
        "options": [
          "Vymezit, co je smyslem poradenské služby, vrátit se k funkčním dopadům a neplést kategorii s plánem podpory.",
          "Vyjít škole vstříc alespoň pracovním označením, které zrychlí organizační rozhodnutí.",
          "Odkázat školu jen na lékařský resort a poradenskou práci tím uzavřít.",
          "Přestat se školou sdílet průběžné úvahy, aby nevznikal tlak na závěr."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 16,
        "text": "Výrazný testový výsledek neodpovídá tomu, jak dítě funguje ve třídě. Jaký závěr je nejpřesnější?",
        "options": [
          "Testový výsledek by měl mít přednost, protože je odbornější než školní pozorování.",
          "Ve třídě je pravděpodobně chyba v pozorování, kterou není třeba dále řešit.",
          "Je třeba zvažovat výsledek v kontextu fungování a ověřit, co přesně zachycuje a co naopak nezachycuje.",
          "Nejvhodnější je oba zdroje údajů ve zprávě oddělit a nepropojovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 17,
        "text": "Dospívající žák podporu připouští, zákonný zástupce ji však zlehčuje. Jaký postup poradce je nejvhodnější?",
        "options": [
          "Postavit další práci výhradně na stanovisku rodiče, protože nese formální odpovědnost.",
          "Požádat školu, aby rodiče přesvědčila bez další účasti poradce.",
          "Překlopit rozhovor do vysvětlování praktických dopadů a variant podpory tak, aby všichni rozuměli, co je skutečná potřeba.",
          "Uzavřít situaci tím, že se do dosažení plného souhlasu nic nenavrhne."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 18,
        "text": "Učitel říká, že nemá čas sbírat další příklady. Co je z pohledu poradenského procesu nejpřesnější?",
        "options": [
          "Zaměřit sběr jen na několik klíčových situací, které mohou rozhodnout o podobě podpory.",
          "Přestat školu zatěžovat dalšími otázkami a vyjít z prvního dojmu.",
          "Omezit práci jen na testové postupy, protože jsou méně náročné pro učitele.",
          "Předat sběr informací plně rodině, aby se proces ve škole nezdržoval."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 19,
        "text": "Co nejlépe ukazuje, že se poradenský proces stal administrativně správným, ale odborně slabým?",
        "options": [
          "V textu se používá více běžného jazyka a méně odborných termínů.",
          "Škola potřebovala k zavedení podpory více než jednu konzultaci.",
          "Rodina měla k některým navrženým krokům doplňující otázky.",
          "Dokument je hotový, ale není zřejmé, jak konkrétně navazuje na zjištění a co má kdo dělat jinak."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 20,
        "text": "Doporučení bylo převzato, ale po personální změně ve škole se podpora rozpadla. Jaký další krok je nejpřesnější?",
        "options": [
          "Poslat stejný text znovu a předpokládat, že problém byl jen ve ztrátě dokumentu.",
          "Uzavřít proces s tím, že odpovědnost za kontinuitu už nese škola.",
          "Vrátit se k převodu podpory do praxe, znovu vyjasnit klíčové kroky a ověřit, jak jsou ve škole skutečně chápány.",
          "Doporučit škole, aby počkala na další pravidelné vyšetření."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 21,
        "text": "Která podoba poradenského výstupu je nejkvalitnější?",
        "options": [
          "Obsahuje co nejvíce odborných termínů, aby bylo zřejmé, že jde o specializované stanovisko.",
          "Převádí zjištění do konkrétních kroků: kdo, kdy, v jaké situaci a s jakým cílem podporu použije.",
          "Zachycuje co nejširší seznam možných opatření bez nutnosti stanovit priority.",
          "Shrnuje hlavně průběh vyšetření; škola si praktické důsledky odvodí sama."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 22,
        "text": "Která formulace nejlépe ukazuje slabý poradenský výstup?",
        "options": [
          "Žák má speciální vzdělávací potřeby, proto je třeba individuální přístup.",
          "Při delších instrukcích potřebuje rozdělit zadání do kroků a ověřit porozumění.",
          "Ve skupinové práci se zhoršuje přehled o úkolu, proto je vhodné předem vyjasnit roli a výstup.",
          "Při hodnocení písemných úloh je třeba sledovat, zda obtíž neleží v porozumění zadání spíše než v samotném učivu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 23,
        "text": "Které rozlišení nejlépe vystihuje vztah odborného zjištění a poradenského výstupu?",
        "options": [
          "Odborné zjištění slouží hlavně rodičům, poradenský výstup hlavně škole.",
          "Odborné zjištění je vždy předběžné, poradenský výstup je naopak definitivní.",
          "Odborné zjištění má být co nejstručnější, poradenský výstup co nejobsáhlejší.",
          "Odborné zjištění popisuje a interpretuje, poradenský výstup převádí význam zjištění do podpory a dalších kroků."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 24,
        "text": "Který typ doporučení je poradensky nejslabší, přestože může působit odborně?",
        "options": [
          "Doporučení, které jasně oddělí klíčové kroky od doplňkových.",
          "Doporučení, které používá běžný jazyk a současně drží odbornou přesnost.",
          "Doporučení, které přináší dlouhý seznam opatření bez priorit, situací použití a odpovědnosti.",
          "Doporučení, které uvádí, jak bude škola sledovat účinek zvolených kroků."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 25,
        "text": "Co nejvíce zvyšuje užitečnost výstupu pro školu i rodinu?",
        "options": [
          "Co největší míra odborné opatrnosti, aby výstup neobsahoval žádnou konkrétní formulaci.",
          "Rozlišení klíčových a doplňkových kroků a jazyk, kterému rozumí i neodborný čtenář.",
          "Převaha terminologie nad příklady, aby bylo zřejmé, že text není zjednodušený.",
          "Maximální délka textu, protože kratší doporučení mohou vypadat málo odborně."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 26,
        "text": "Která formulace nejvíce redukuje situaci na nálepku a tím oslabuje kvalitu výstupu?",
        "options": [
          "Vzhledem k předpokládané diagnóze je třeba přihlížet k individuálním potřebám.",
          "Při čtení delších zadání se ztrácí v pořadí kroků, proto potřebuje vizuální členění a kontrolu porozumění.",
          "V přechodech mezi činnostmi potřebuje předvídatelnou strukturu a jasný signál změny.",
          "Podpora má být nastavena podle toho, kde se bariéra prakticky objevuje, ne podle samotného označení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 27,
        "text": "Které doporučení pro žáka s obtížemi v práci s delším textem je nejpřesnější?",
        "options": [
          "Doporučuje se sledovat, zda se obtíže neupraví spontánně s věkem.",
          "Nejvhodnější je snížit rozsah všech textů bez další analýzy situace.",
          "Při delším zadání rozdělit text do kroků, ověřit, co žák pochopil, a teprve pak hodnotit výkon.",
          "Podstatné je hlavně umožnit žákovi používat libovolnou kompenzační strategii bez dalšího vedení."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Která věta je typickým příkladem příliš širokého výstupu?",
        "options": [
          "Ve skupinové práci potřebuje předem vědět roli, čas a podobu výstupu.",
          "Při rychlém tempu výuky je vhodné ověřit, zda zachytil hlavní instrukci.",
          "Je účelné rozlišit, co je ve škole klíčové řešit hned a co může být doplňkové.",
          "Doporučuje se ve všech oblastech zohledňovat jeho individualitu a přizpůsobovat vzdělávání podle možností školy."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Který doplněk nejvíce pomáhá převést výstup do školní praxe?",
        "options": [
          "Uvedení typických situací, v nichž má být podpora použita, a signálů, podle nichž škola pozná její účinek.",
          "Rozšíření závěru o úplný přepis všech použitých metod.",
          "Přesunutí odpovědnosti za převod na asistenta pedagoga bez dalšího vyjasnění.",
          "Omezení textu jen na obecná hesla, aby si škola mohla postupy přizpůsobit sama."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Po konzultaci škola říká: „Co z toho máme dělat zítra ráno?“ Jaká odpověď je nejpřesnější?",
        "options": [
          "Zopakovat celý odborný závěr, aby si škola sama vybrala, co považuje za důležité.",
          "Vybrat 1–2 prioritní kroky pro konkrétní situace a domluvit, jak škola pozná, zda fungují.",
          "Doporučit, aby se nejprve zpracovala interní dokumentace a teprve poté se začalo něco měnit.",
          "Ponechat rozhodnutí plně na třídním učiteli, protože detailní vedení by bylo příliš direktivní."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Rodič žádá, aby poradce bez dalšího poslal plné poznámky z konzultací všem vyučujícím. Jaký postup je eticky nejpřesnější?",
        "options": [
          "Vyhovět, protože rodič je zákonný zástupce a rozhoduje o rozsahu sdílení vždy sám.",
          "Poslat plné poznámky jen třídnímu učiteli a ponechat na škole, jak je dál rozšíří.",
          "Předat jen shrnutí bez jakékoli vazby na podporu, aby se chránilo soukromí.",
          "Rozlišit, jaké informace jsou pro podporu ve škole skutečně potřebné, a sdílet jen tento účelný rozsah."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 32,
        "text": "Žák při rozhovoru zmíní citlivou rodinnou okolnost, která zřejmě není pro školní podporu rozhodující. Co je nejpřesnější?",
        "options": [
          "Zahrnout ji do výstupu, protože každá citlivá informace může později získat význam.",
          "Nejprve zvažovat její relevanci pro účel služby a chránit ji před zbytečným sdílením.",
          "Okamžitě ji sdělit škole, aby byla v obraze i mimo poradenský rámec.",
          "Předpokládat, že citlivé téma vždy vysvětluje školní obtíže lépe než pozorování z výuky."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 33,
        "text": "Škola chce, aby poradce rodinu přesvědčil pro konkrétní vzdělávací cestu, protože „to bude jednodušší“. Co je nejpřesnější role poradce?",
        "options": [
          "Vysvětlit rodině možnosti a jejich důsledky, ale nerozhodovat za ni a netlačit ji k jediné volbě.",
          "Převzít doporučující roli školy, protože poradce má lépe vidět systémové souvislosti.",
          "Vyhnout se jakémukoli vedení, aby nebyl poradce obviněn z ovlivňování.",
          "Nechat školu, aby rodinu přesvědčila sama, a pouze to doplnit do závěru."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Škola žádá doporučení v oblasti, která už přesahuje bezpečnou odbornost poradce. Co je nejvhodnější?",
        "options": [
          "Vyjádřit se obecně, aby škola nezůstala bez stanoviska.",
          "Pojmenovat limit vlastní odbornosti, držet to, co poradce bezpečně ví, a navázat vhodného odborníka.",
          "Vyhnout se přiznání limitu, protože by to mohlo oslabit důvěru školy.",
          "Převzít odpovědnost za širší oblast, pokud by další spolupráce proces zdržela."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Rodina chce, aby poradce formuloval obtíže „ostřeji“, protože škola prý reaguje jen na silná slova. Jaký postup je nejpřesnější?",
        "options": [
          "Přijmout tento požadavek, pokud to zvýší šanci na podporu.",
          "Použít odbornější jazyk, i kdyby byl pro školu méně srozumitelný.",
          "Přesunout odpovědnost na školu, aby si sama vyžádala silnější stanovisko.",
          "Držet profesní přesnost a popsat dopad i potřebu podpory věcně, bez strategického zveličování."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 36,
        "text": "Který postup nejvíce překračuje roli poradce?",
        "options": [
          "Pomoci škole přeložit odborný závěr do konkrétní podpory.",
          "Domluvit s rodinou, jak budou společně sledovat, zda navržené kroky dávají smysl.",
          "Převzít dlouhodobé řešení rodinné situace v rozsahu, který už náleží jiné službě nebo terapii.",
          "Popsat, kde poradenská práce končí a kde začíná návazná spolupráce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 37,
        "text": "Který komunikační krok je eticky i odborně nejpřesnější při sdělování závěru?",
        "options": [
          "Přeložit odborné zjištění do srozumitelného jazyka a ověřit, zda druhá strana opravdu rozumí jeho významu.",
          "Použít plnou odbornou terminologii, aby nedošlo ke zjednodušení obsahu.",
          "Předat pouze psaný text, aby se předešlo možnému zkreslení rozhovorem.",
          "Sdělit jen závěr bez vysvětlení, protože otázky mohou proces znejistit."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Učitel neformálně žádá podrobnosti z rodinné situace dítěte, aby s ním „lépe pracoval“. Jaký postup je nejpřesnější?",
        "options": [
          "Předat vše, co by teoreticky mohlo být užitečné, protože učitel nese každodenní zátěž.",
          "Sdílet jen to, co je pro podporu ve škole profesně odůvodněné a potřebné.",
          "Odmítnout jakoukoli spolupráci se školou, protože rodinná témata jsou vždy mimo její roli.",
          "Předat informace vedení školy a nechat je rozhodnout, komu budou sděleny."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Rodina chce, aby poradce mluvil na každém jednání za ni a rozhodoval místo ní. Co je nejvhodnější?",
        "options": [
          "Převzít tuto roli, pokud je rodina ve stresu a potřebuje oporu.",
          "Ponechat rodinu zcela bez vedení, aby se posílila autonomie.",
          "Podporovat porozumění možnostem a rozhodování rodiny, ale nepřebírat její hlas ani odpovědnost za volbu.",
          "Přesměrovat veškerou komunikaci na školu, která je v systému nejstabilnější."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Které tvrzení nejlépe vystihuje profesní kvalitu poradce pod emočním tlakem situace?",
        "options": [
          "Empatický poradce má dát stranou hranice a držet hlavně vztah.",
          "Nejdůležitější je rychle uzavřít spor, i kdyby závěr nebyl ještě plně dotažený.",
          "Profesionální je zůstat neutrální tak, že poradce přestane situaci aktivně vést.",
          "Udržet respekt, srozumitelnost i hranice role a nenechat napětí zrychlit závěr mimo dostupná data."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Škola chce, aby poradce dlouhodobě připravoval všechny individuální materiály za učitele. Co je metodicky nejvhodnější?",
        "options": [
          "Pomoci škole pochopit principy úpravy práce a postupně ji vést k vlastnímu zvládání podpory, ne ji trvale nahrazovat.",
          "Převzít tuto roli alespoň na celý školní rok, aby byla zajištěna stabilita.",
          "Odmítnout spolupráci, protože tvorba materiálů do školy nikdy nepatří.",
          "Omezit pomoc jen na jednorázové předání textu bez společného rozboru praxe."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Která následná konzultace s učitelem je metodicky nejcennější?",
        "options": [
          "Kontrola, zda škola doslova převzala formulace doporučení do interních dokumentů.",
          "Společné projití několika konkrétních situací, co v nich učitel změnil a jaký to mělo efekt.",
          "Ověření, zda se škola drží jediné zvolené strategie beze změny.",
          "Shrnutí, které části doporučení vypadají ve spise nejpřesvědčivěji."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Škola zavedla doporučení doslova, ale bez porozumění jeho účelu. Co je nejpřesnější krok poradce?",
        "options": [
          "Nechat školu postup používat dál, protože formální shoda je zatím důležitější než porozumění.",
          "Požádat o další dokumentaci a do té doby nic nekomentovat.",
          "Vrátit se k tomu, proč byl krok navržen, v jaké situaci má fungovat a jak jej přizpůsobit konkrétní praxi školy.",
          "Doporučení zcela stáhnout, protože bylo použito mechanicky."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Učitel chce jeden sankční režim pro chování, které se objevuje hlavně při přetížení a nejasném zadání. Co je metodicky nejpřesnější?",
        "options": [
          "Potvrdit, že důsledná sankce je nejčistší cesta ke stabilitě.",
          "Doporučit pouze individuální pohovor po hodině, aby se zamezilo konfliktu.",
          "Přenechat volbu vedení školy, protože jde hlavně o kázeň.",
          "Vrátit se k podmínkám, které chování spouštějí, a spojit vedení hranic s úpravou zadání, předvídatelnosti a podpory regulace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Který dotaz poradce vůči škole je metodický, nikoli kontrolní?",
        "options": [
          "Kde přesně jste změnili postup, co se tím zlepšilo a co je potřeba doladit?",
          "Kdo nese odpovědnost, že doporučení ještě není v každé hodině stejné?",
          "Proč škola nepoužila všechny navržené kroky beze zbytku?",
          "Kdy bude interní dokumentace definitivně uzavřena?"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Rodina slyší odborný závěr poprvé a je zjevně zahlcená. Co je nejpřesnější další krok poradce?",
        "options": [
          "Předat jen psaný text, aby si ho mohla v klidu pročíst bez dalšího komentáře.",
          "Zastavit se u hlavního významu závěru, přeložit dopad do běžného jazyka a domluvit nejbližší malé kroky.",
          "Rozšířit vysvětlení o všechny odborné souvislosti, aby rodina nic neztratila.",
          "Přesunout komunikaci na školu, která bude s rodinou v kontaktu častěji."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Rodič se ptá: „Takže je moje dítě líné, nebo nemocné?“ Která reakce je nejpřesnější?",
        "options": [
          "Je vhodné vybrat bližší z těchto dvou možností, aby rodina měla jasnější rámec.",
          "Nejprve je třeba uzavřít odbornou kategorizaci a až potom mluvit o podpoře.",
          "Vrátit se k tomu, jaké bariéry se objevují v konkrétních situacích a co z toho plyne pro podporu, místo morálních nálepek.",
          "Je lepší tuto otázku neotevírat, protože bývá příliš emoční."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Rodina i škola četly tentýž výstup, ale vyvozují z něj jinou podobu podpory. Co je nejpřesnější krok poradce?",
        "options": [
          "Vybrat stranu, která je systému bližší, aby se situace rychle stabilizovala.",
          "Upravit text tak, aby byl obecnější a nechal větší prostor pro vlastní výklad.",
          "Požádat obě strany, aby si význam textu vyjednaly samy bez dalšího vedení.",
          "Společně přeložit závěr do několika konkrétních situací: co má kdo dělat, kdy a podle čeho pozná, že krok funguje."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Které vysvětlení směrem k dospívajícímu žákovi nejlépe podporuje autonomii?",
        "options": [
          "Popisuje, co bylo pozorováno, co může pomoci, a dává prostor pro jeho otázky a preference při domlouvání podpory.",
          "Zdůrazňuje, že rozhodující slovo mají dospělí a žák se nemá zatěžovat detaily.",
          "Předává jen stručné ujištění, že vše vysvětlí škola rodičům.",
          "Soustředí se hlavně na to, co žák dělal dosud špatně a co musí změnit."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které uzavření konzultace je nejkvalitnější?",
        "options": [
          "Rodina i škola dostanou doporučení e-mailem a případ se ponechá otevřený bez dalšího upřesnění.",
          "Shrnout, na čem je shoda, kdo udělá jaký krok a kdy se ověří, zda navržená podpora skutečně pomáhá.",
          "Uzavřít setkání obecným ujištěním, že situace bude sledována průběžně.",
          "Zakončit rozhovor doplněním dalších odborných termínů, aby výstup působil úplně."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12 nebo jiná vyvážená distribuce bez převažujícího písmene",
      "distributionBalanced": true
    }
  },
  {
    "id": 8,
    "label": "Baterie 8",
    "title": "Finální syntetická nejtěžší baterie",
    "subtitle": "Hard mode: nová paralelní finální syntetická baterie propojující funkční dopad, podporu, systém, komunikaci, etiku a meziresortní návaznost.",
    "purpose": "Ověřit skutečně selektivní připravenost na UPOL v paralelní hard vrstvě: nepoznat správnou odpověď stylem, ale synteticky rozlišit jádro situace, zvolit nejpřesnější další krok a správně číst role školy, ŠPZ, rodiny, sociální a zdravotní oblasti.",
    "difficulty": "vysoká až velmi vysoká",
    "dominant": [
      "syntetická mikrokazuistika",
      "funkční dopad a volba podpory",
      "školské poradenství a proces",
      "komunikace, etika a hranice sdílení",
      "meziresortní orientace",
      "finální vícevrstevná syntéza"
    ],
    "breakdown": [
      "38× syntetická případová otázka",
      "6× procesní a dokumentační rozlišení",
      "4× meziresortní a systémové rozlišení",
      "2× finální vícevrstevná rozhodovací kazuistika"
    ],
    "tags": [
      "hard mode",
      "syntéza",
      "UPOL",
      "poradenství",
      "škola a ŠPZ",
      "meziresortní spolupráce"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Žák má bohatou slovní zásobu a dobré faktické znalosti, ale v rozhovoru drží doslovný význam, ztrácí se ve skupinové interakci a při změně plánu rychle roste napětí. Který závěr je pro další podporu nejpřesnější?",
        "options": [
          "Jádro obtíží je třeba číst hlavně v sociálním porozumění a flexibilitě; podpora má zvýšit předvídatelnost, srozumitelnost komunikace a práci se situací, ne jen opravovat jednotlivé projevy.",
          "Jádro obtíží leží hlavně ve výslovnosti, proto je rozhodující izolovaný nácvik artikulace bez širší změny školních situací.",
          "Jádro obtíží leží hlavně v nekázni vůči pravidlům skupiny, proto je nejvhodnější zpřísnit chování a omezit volbu podpory na důsledky.",
          "Jádro obtíží leží hlavně ve slabší motivaci ke spolupráci, proto je nejpřesnější ponechat prostředí beze změny a zvýšit nároky na přizpůsobení žáka."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Žák při individuálním hovoru reaguje dobře, ale při výkladu z větší vzdálenosti, v ruchu třídy a při rychlém střídání mluvčích ztrácí obsah a působí nejistě. Jaký poradenský závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít věc jako oslabení obecných rozumových schopností, protože potíž se objevuje ve více předmětech.",
          "Nejdříve je potřeba upravit komunikační podmínky výuky a teprve podle toho posuzovat, jak žák skutečně rozumí a podává výkon.",
          "Nejpřesnější je zaměřit podporu hlavně na rozšiřování slovní zásoby, protože problém se projevuje v jazyce.",
          "Nejpřesnější je převést žáka trvale na individuální práci, aby se odstranily všechny situační vlivy třídy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Žák při nejasném zadání a veřejné opravě reaguje výbuchem, ale v předvídatelném režimu, s jasnými hranicemi a neveřejnou zpětnou vazbou pracuje výrazně lépe. Který závěr je nejpřesnější?",
        "options": [
          "Jádro obtíží je hlavně v nedostatku učiva, protože největší problémy se objevují ve školních úkolech.",
          "Jádro obtíží je v tom, že žák neakceptuje autoritu, proto je nejpřesnější zesílit sankční režim bez úprav situace.",
          "Chování je třeba číst v kontextu spouštěčů a funkce situace; podpora má měnit i podmínky a způsob vedení, ne jen důsledky.",
          "Jádro obtíží leží hlavně v tělesném oslabení, protože přetížení ve třídě často vede ke ztrátě sebekontroly."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Žákyně má mimořádně silný matematický výkon, ale ve volnějších sociálních situacích, při skupinové práci a při nečekané změně zadání rychle ztrácí přehled. Rodina zdůrazňuje jen nadání. Který poradenský závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je pracovat pouze s rozvojem nadání, protože vysoký výkon v jedné oblasti vylučuje potřebu další podpory.",
          "Nejpřesnější je dočasně potlačit rozvoj silných stránek a zaměřit se jen na oslabení, aby se profil zjednodušil.",
          "Nejpřesnější je uzavřít situaci čistě jako vztahový problém třídy, protože obtíže se objevují hlavně ve skupině.",
          "Nejpřesnější je uvažovat vícevrstevně: držet rozvoj silných stránek a současně číst sociálně-komunikační a adaptační obtíže, které mohou vyžadovat cílenou podporu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Třídní učitel dlouhodobě pozoruje, že žák nerozumí složitějším instrukcím a v běžné práci je nejistý. Ptá se, zda může škola začít s cílenou podporou až po externím odborném závěru. Který závěr je nejpřesnější?",
        "options": [
          "Škola může a má v rámci své role obtíže zachytit, zkusit a vyhodnotit základní podporu, a teprve podle potřeby zapojovat odborné posouzení.",
          "Škola má vyčkat na definitivní zdravotnický nebo poradenský závěr, protože bez něj by cílenější podpora byla neodůvodněná.",
          "Škola má rovnou vytvořit IVP, protože ten nahrazuje průběžné ověřování, co v praxi funguje.",
          "Škola má předat situaci rodině a čekat, jaký partner si sama zvolí, aby nepřekračovala své kompetence."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Po vyšetření je třeba rodiči sdělit, že dítě potřebuje další podporu a změnu některých školních postupů. Která formulace je profesně nejvhodnější?",
        "options": [
          "Je to jednoznačné, proto vám rovnou řeknu, co škola udělá a o čem už se nemusíme dál bavit.",
          "Popíšu, co jsme zjistili, co z toho plyne pro vzdělávání a jaké kroky dává smysl společně domluvit se školou.",
          "Bylo by lepší s vámi závěr zatím nesdílet podrobněji, aby vás informace zbytečně nezatížily.",
          "Nejlepší je sdělit hlavně konečný název obtíže; konkrétní dopad na školu a další kroky se doplní až později, pokud bude potřeba."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "U žákyně se po přechodu na druhý stupeň výrazně zhoršil písemný výkon. Učitelé uvažují o širším závěru o schopnostech, ale současně se ukazuje potíž s drobným tiskem, orientací v husté stránce a únavou při vizuální práci. Který poradenský závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je nejdřív upravit klasifikaci, protože známka nejlépe vyřeší napětí mezi výkonem a nároky.",
          "Nejpřesnější je uzavřít situaci jako kolísání motivace, protože ústní výkon se může dočasně jevit lepší než skutečnost.",
          "Dříve než se uzavře závěr o schopnostech, je nutné prověřit dostupnost vizuální informace a případně promítnout zjištění do podpory i hodnocení.",
          "Nejpřesnější je žákyni převést jen na ústní zkoušení, aby se předešlo dalším pochybnostem o jejím výkonu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Dítě má méně srozumitelnou řeč, ale současně se ukazuje, že při delších mluvených instrukcích rychle ztrácí smysl zadání a výrazně lépe funguje s oporou obrazu a krátkých kroků. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je zaměřit se jen na trénink výslovnosti, protože ostatní projevy z ní zpravidla samy odezní.",
          "Nejpřesnější je uzavřít věc jako nízkou pracovní morálku, protože dítě pracuje lépe jen tam, kde je úkol jednodušší.",
          "Nejpřesnější je čekat na jediný definitivní závěr, aby škola nepracovala s příliš mnoha hypotézami najednou.",
          "Nejpřesnější je číst situaci šířeji než jen jako artikulační problém a upravit i způsob sdělení instrukcí a strukturu úkolu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Žák po náročné léčbě zvládá učivo, ale rychle se vyčerpá, má kolísající zátěžový limit a při běžném rozvržení dne se výkon výrazně propadá. Který školní postup je nejpřesnější?",
        "options": [
          "Nastavit podporu podle reálné zátěže a spolupracovat s rodinou i relevantními zdravotními doporučeními tak, aby se upravilo tempo, organizace dne a hodnocení výkonu.",
          "Ponechat stejné tempo i hodnocení jako dřív, protože výjimky by snižovaly nároky na vzdělávání.",
          "Převést hlavní odpovědnost za situaci na zdravotnictví a dočasně ve škole neřešit žádné cílenější úpravy.",
          "Ukončit všechny náročnější aktivity dlouhodobě, protože prevence zátěže je důležitější než participace."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Speciální pedagog po pozorování ve třídě ví, že část potíží žáka souvisí i s nejasnou strukturou výuky. Jaký přístup k učiteli je profesně nejvhodnější?",
        "options": [
          "Sdílet učiteli jen hotový závěr, protože vysvětlování konkrétních situací by mohlo působit příliš kriticky.",
          "Popsat konkrétní situace, pojmenovat jejich dopad na žáka a společně hledat proveditelné úpravy výuky bez obviňujícího tónu.",
          "Vynechat téma organizace výuky, aby se nenarušily vztahy ve sboru, a zaměřit se výhradně na dítě.",
          "Převzít vedení hodiny za učitele, aby bylo jisté, že doporučené postupy budou přesně dodrženy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Škola několik týdnů cíleně podporuje žáka, ale efekt je omezený a ukazuje se potřeba odbornějšího posouzení. Která posloupnost je nejpřesnější?",
        "options": [
          "Nejprve předat situaci zdravotnictví, poté čekat na uzavřený odborný závěr a teprve pak se vrátit k tomu, co se bude ve škole dít.",
          "Nejprve vytvořit IVP, až následně zkoumat, zda předchozí školní podpora vůbec něco ukázala.",
          "Zachytit a vyhodnotit školní podporu, využít to jako podklad pro další krok k ŠPZ a zároveň průběžně dál sledovat fungování žáka ve škole.",
          "Po omezeném efektu školní podpory ukončit cílené úpravy, aby výsledky nebyly zkresleny průběžnými změnami."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Rodina dítěte se závažnějším profilem obtíží je dlouhodobě vyčerpaná péčí. Ve škole se objevují i problémy s dopravou, dohledem po vyučování a organizací dne doma. Jaký další krok je nejpřesnější?",
        "options": [
          "Zaměřit se jen na úpravu klasifikace, protože širší rodinnou situaci škola stejně neovlivní.",
          "Vyčkat, až rodina sama zvolí vhodnou službu, aby se do jejího fungování příliš nezasahovalo.",
          "Převést celou situaci na školu, protože pokud dítě chodí do školy, měla by nést i řešení každodenní péče.",
          "Kromě školní podpory uvažovat i o návazné sociální pomoci pro rodinu, protože část zátěže přesahuje vzdělávací oblast."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Škola žádá co nejpodrobnější informace z vyšetření, aby „všichni přesně věděli, s kým pracují“. Jaký přístup je nejpřesnější?",
        "options": [
          "Sdílet to, co je pro podporu žáka účelné a přiměřené, a současně chránit důstojnost dítěte i práva rodiny.",
          "Poskytnout celé detaily každému pracovníkovi školy, protože čím širší sdílení, tím kvalitnější péče.",
          "Odmítnout škole sdělit cokoli, protože spolupráce se školou je z etických důvodů vždy riziková.",
          "Nechat rozsah sdělení zcela na třídním učiteli, protože on nese každodenní odpovědnost."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Dítě používá velmi omezenou mluvenou řeč a škola spoléhá, že situaci vyřeší pouze klinický logoped. Který závěr je nejpřesnější?",
        "options": [
          "Pokud dítě navštěvuje klinického logopeda, škola už nemá důvod řešit funkční komunikaci v běžných situacích.",
          "Klinická logopedie může být relevantní, ale škola současně potřebuje řešit, jak dítě ve třídě rozumí, volí, žádá a účastní se komunikace.",
          "Nejpřesnější je čekat, až se rozvine mluvená řeč; bez ní nemá smysl budovat jinou formu komunikační opory.",
          "Nejpřesnější je převést dítě na zcela neverbální režim a přestat podporovat jakýkoli rozvoj porozumění řeči."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "U žáka se ukazuje stabilní potřeba specializované podpory související s výrazným smyslovým postižením a jeho dopadem do vzdělávání. Škola řeší, zda je pro odbornou návaznost přesnější PPP, nebo SPC. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je vždy PPP, protože každé školní posouzení by mělo zůstat v jednom univerzálním zařízení.",
          "Nejpřesnější je obrátit se nejdřív na SVP, protože smyslové postižení bývá hlavně výchovný problém školy.",
          "Je-li jádro podpory v dlouhodobém speciálněpedagogickém vedení souvisejícím s postižením a jeho funkčními dopady, bývá přesnějším partnerem SPC.",
          "Rozlišení mezi PPP a SPC není důležité, protože škola by měla všechny odborné partnery používat zaměnitelně."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "U žáka se opakují konflikty, útěky z vyučování a rizikové chování. Škola osciluje mezi sankcemi a představou, že vše vyřeší jednorázové vyšetření. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je čekat na definitivní pojmenování problému a do té doby zachovat běžný režim bez cílené práce se situací.",
          "Nejpřesnější je převést řešení výhradně na rodinu, protože škola u takových projevů nemůže dělat víc než hodnotit chování.",
          "Nejpřesnější je chápat problém čistě jako kázeňské selhání a důsledně zvyšovat sankce, aby byla pravidla pro všechny stejná.",
          "Nejpřesnější je číst chování v kontextu vztahů a spouštěčů, pracovat se školními podmínkami a podle potřeby navazovat další preventivně-výchovnou podporu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Dítě bez funkční mluvené řeči používá symboly jen částečně a dospělí často odpovídají místo něj. Co je v této situaci nejpřesnějším podpůrným těžištěm?",
        "options": [
          "Budovat funkční možnosti volby, žádosti a účasti v běžných situacích tak, aby komunikace nebyla nahrazována řečí druhých.",
          "Počkat, až se rozvine spontánní mluvená řeč, protože bez ní bývá jakákoli jiná komunikace jen dočasnou náhražkou.",
          "Zaměřit se jen na motorický nácvik symbolů bez ohledu na to, zda dítě díky nim skutečně něco sděluje a ovlivňuje dění kolem sebe.",
          "Omezit komunikaci hlavně na situace výuky, protože v běžných denních činnostech stačí, když dítěti dospělí porozumí intuitivně."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Student s tělesným postižením má výrazně zpomalený písemný výkon, ale při ústním zkoušení a při práci s asistivní technikou ukazuje dobré porozumění. Který postup je nejpřesnější?",
        "options": [
          "Hodnotit hlavně písemné tempo, protože to nejlépe ukazuje připravenost na běžné požadavky školy.",
          "Upravit formu výkonu tak, aby se ověřovalo porozumění a znalost, ne míra motorického zatížení v dané podobě úkolu.",
          "Snížit očekávání v obsahu učiva, protože pomalejší tempo automaticky znamená i nižší vzdělávací možnosti.",
          "Převést žáka dlouhodobě jen na pasivní roli pozorovatele, aby nebyl vystaven frustraci z výkonu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Žák se sluchovým postižením v diskusi často mlčí, ale v klidném prostředí a při jasném střídání mluvčích reaguje podstatně lépe. Které shrnutí je nejpřesnější?",
        "options": [
          "Jde hlavně o nezájem o kolektiv, takže nejpřesnější je zvýšit požadavky na spontánní aktivitu bez úprav situace.",
          "Jde hlavně o úzkostný rys osobnosti, a proto škola nemá důvod řešit komunikační podmínky skupiny.",
          "Nejdříve je potřeba zajistit komunikační dostupnost diskuse a teprve v takto upravených podmínkách hodnotit míru zapojení žáka.",
          "Nejpřesnější je zrušit všechny skupinové situace, protože diskuse bývá pro žáka se sluchovým postižením nevhodná vždy."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Škola obdrží odborný závěr a následné doporučení. Jaké shrnutí role školy je v této chvíli nejpřesnější?",
        "options": [
          "Role školy tím v zásadě končí; odborný závěr už sám nese i každodenní realizaci podpory.",
          "Škola má především založit dokument do evidence a čekat, zda si rodič nevyžádá další vysvětlení.",
          "Škola má používat oba dokumenty zaměnitelně, protože v praxi mezi nimi není podstatný rozdíl.",
          "Škola má rozumět tomu, co z odborného závěru plyne pro reálnou organizaci podpory, a držet přitom vlastní odpovědnost i odlišnost školní dokumentace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Škola si všímá dlouhodobě zanedbaného vzhledu, opakovaného hladu, výrazné absence základních pomůcek a výpovědí dítěte o nejistém domácím zázemí. Který závěr je nejpřesnější?",
        "options": [
          "Vedle školní podpory může být na místě i krok směrem k ochraně dítěte, protože situace ukazuje na možné závažnější ohrožení, ne jen na vzdělávací obtíž.",
          "Jde hlavně o problém motivace ke škole, proto je nejpřesnější zvýšit nároky na docházku a domácí přípravu.",
          "Jde o běžnou rodinnou zátěž, kterou by škola neměla nijak systémově otevírat, aby si zachovala neutrální postavení.",
          "Nejpřesnější je vyčkat, zda se situace neupraví sama, protože zásah mimo školu bývá vhodný až po delší době bez zlepšení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Žák na vozíku je akademicky úspěšný, ale škola opakovaně vynechává jeho účast na terénních aktivitách a laboratorních pracích s tím, že by to bylo organizačně náročné. Který přístup je nejpřesnější?",
        "options": [
          "Nejpřesnější je snížit nároky v teoretických předmětech, aby byla neúčast v praktických situacích vyvážena.",
          "Nejpřesnější je hledat způsob přístupné účasti a plánování podmínek tak, aby byl žák zapojen pokud možno skutečně, ne jen formálně.",
          "Nejpřesnější je ponechat rozhodnutí na tom, co je pro školu organizačně nejsnazší, protože participace nesmí narušit chod výuky.",
          "Nejpřesnější je dlouhodobě nahrazovat praktické činnosti pouze pozorováním, protože to představuje nejbezpečnější kompromis."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Neslyšící žák používající český znakový jazyk se ve výuce nejlépe orientuje, když je komunikace vizuálně jasně organizovaná a výklad je tlumočen. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je soustředit podporu hlavně na psané shrnutí, protože to může tlumočení v běžné výuce plně nahradit.",
          "Nejpřesnější je trvat na tom, aby se žák co nejrychleji přizpůsobil běžné auditivní organizaci hodiny.",
          "Nejpřesnější je řešit dostupnost výuky ve zvoleném komunikačním kanálu a podle toho teprve posuzovat výkon a zapojení žáka.",
          "Nejpřesnější je vyjmout žáka z interakčních situací, protože skupinová komunikace bývá pro neslyšící dítě přirozeně druhotná."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Které tvrzení je nejpřesnější o dokumentaci školy a ŠPZ v procesu podpory?",
        "options": [
          "Škola vede pouze klasifikaci a absenci; veškerá poradenská dokumentace patří výlučně ŠPZ.",
          "Škola i ŠPZ vedou shodné dokumenty, aby bylo možné jejich závěry kdykoli zaměnit.",
          "Jediným skutečně závazným dokumentem v systému je IVP; ostatní mají jen informativní význam.",
          "Dokumentace se liší podle role subjektu: škola vede své podpůrné a poradenské záznamy, ŠPZ své odborné výstupy a procesní dokumentaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Tým kolem dítěte s nevyrovnaným profilem chce zvolit „jednu hlavní nálepku“, aby byl plán podpory jednodušší. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je držet vícevrstevnou interpretaci a plánovat podporu podle toho, jak se různé složky profilu promítají do každodenního fungování.",
          "Nejpřesnější je vždy vybrat jednu dominantní kategorii a ostatní obtíže považovat za druhotné šumy.",
          "Nejpřesnější je odložit podporu, dokud se nepodaří profil zcela zjednodušit na jednu jasnou osu.",
          "Nejpřesnější je opřít se hlavně o to, který název obtíže působí pro školu nejsrozumitelněji a administrativně nejjednodušeji."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Žák při skupinové práci, nepřímých narážkách a rychlé změně pravidel opakovaně selhává, zatímco v jasně strukturovaných individuálních úkolech podává dobrý výkon. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je chápat situaci jako neochotu spolupracovat a zvýšit tlak na přizpůsobení se skupině.",
          "Nejpřesnější je číst situaci v souvislosti se sociálně-komunikační náročností a flexibilitou prostředí, ne jen jako problém kázně.",
          "Nejpřesnější je převést žáka trvale mimo skupinovou práci, protože kolektivní situace pro něj nemají vzdělávací význam.",
          "Nejpřesnější je ponechat organizaci třídy beze změny a posuzovat výkon jen podle výsledného produktu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Po odeslání žáka do ŠPZ část pedagogů tvrdí, že škola teď musí jen čekat na závěr a do té doby už nic cíleného neměnit. Který závěr je nejpřesnější?",
        "options": [
          "Ano, po předání do ŠPZ škola už nemá důvod průběžně sledovat fungování žáka ani přemýšlet o úpravách podmínek.",
          "Ano, jakákoli cílenější školní úprava by mohla odborné posouzení znehodnotit.",
          "Ne, škola i po odeslání do ŠPZ dál nese každodenní odpovědnost za podporu a za průběžné sledování, co v praxi funguje.",
          "Nejpřesnější je ponechat veškeré rozhodování na rodině, aby škola nepředbíhala odborný závěr."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Rodič odmítá používat diagnostický název, ale souhlasí s tím, že dítě ve škole potřebuje pomoc se strukturou, komunikací a sociální orientací. Jaký přístup je nejpřesnější?",
        "options": [
          "Trvat nejprve na plném přijetí diagnostického názvu, protože bez něj nelze o podpoře odborně mluvit.",
          "Odložit téma podpory, dokud se rodina na názvu obtíže plně neshodne s odborníkem.",
          "Zaměřit rozhovor jen na administrativní dokumenty, aby se vyhnul napětí kolem interpretace obtíží.",
          "Vést komunikaci přes funkční potřeby a konkrétní dopad do školního fungování, aniž by se podpora zablokovala sporem o název."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "V předškolním věku se u dítěte ukazují výrazné motorické a komunikační obtíže a rodina je nejistá v každodenním fungování doma. Který závěr je nejpřesnější?",
        "options": [
          "Je vhodné uvažovat nejen o budoucí školní podpoře, ale i o časné návazné pomoci rodině a o specializovaném vedení podle povahy obtíží.",
          "Nejpřesnější je vyčkat až do nástupu do školy, protože teprve tehdy lze zjistit, co bude dítě skutečně potřebovat.",
          "Nejpřesnější je soustředit se zatím výhradně na motoriku, protože komunikace se vyřeší až s dalším zráním sama.",
          "Nejpřesnější je převést veškeré řešení na zdravotnictví a do vzdělávacího rámce téma zatím vůbec nezařazovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Při výuce z větší vzdálenosti v hlučnější třídě žák opakovaně ztrácí sdělení, ale při blízké komunikaci a vizuální opoře pracuje podstatně jistěji. Které řešení je nejpřesnější?",
        "options": [
          "Nejpřesnější je zvýšit počet samostatných testů, protože ty odstraní vliv komunikace ve třídě.",
          "Nejpřesnější je upravit akustické a vizuální podmínky komunikace a až v takto přístupné situaci posuzovat výkon žáka.",
          "Nejpřesnější je vycházet z toho, že pokud žák někdy rozumí, jde hlavně o kolísavou snahu, nikoli o podmínky výuky.",
          "Nejpřesnější je nahradit skupinovou výuku dlouhodobě individuální výukou, protože tím problém zcela zmizí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "U bilingvního žáka se objevují obtíže v porozumění složitým instrukcím a v písemném výkonu. Část pedagogů to uzavírá jako „jen jazyk výuky“, jiní už jako specifickou poruchu učení. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít věc okamžitě jako specifickou poruchu učení, protože písemný výkon klesá napříč předměty.",
          "Nejpřesnější je ponechat situaci bez cílené podpory, protože jazyková adaptace se vyřeší sama pouhým časem.",
          "Nejpřesnější je průběžně funkčně sledovat, v čem je obtíž navázaná na jazyk výuky, v čem přesahuje běžnou adaptaci, a podle toho volit další podporu i případné posouzení.",
          "Nejpřesnější je přestat zkoumat porozumění instrukcím a zaměřit se jen na množství procvičeného učiva."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Žákyně v hodinách nemluví, ale v bezpečném individuálním kontaktu komunikuje výrazně lépe. Část týmu chce zvýšit tlak na veřejné ústní výkony, aby si „zvykla“. Který přístup je nejpřesnější?",
        "options": [
          "Nejpřesnější je trvat na okamžitém veřejném výkonu, protože jen tak lze prolomit vyhýbavé chování.",
          "Nejpřesnější je přestat po ní vyžadovat jakoukoli komunikaci, aby nebyla situace emočně zatěžující.",
          "Nejpřesnější je problém zúžit jen na klasifikaci, protože ta určuje, jak moc je obtíž ve škole relevantní.",
          "Nejpřesnější je vytvářet bezpečné komunikační podmínky a gradovat nároky citlivě podle toho, co je pro žákyni zvládnutelné a funkční."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Poradenský výstup obsahuje i citlivé údaje o rodinné situaci, které částečně vysvětlují chování dítěte. Jaký další krok směrem ke škole je nejpřesnější?",
        "options": [
          "Přeložit škole jen to, co je účelné pro podporu dítěte, a citlivé údaje nesdělovat šířeji, než je pro podporu nezbytné.",
          "Předat škole celé znění výstupu, protože úplný kontext je vždy odborně nejčistší.",
          "Zatajovat škole veškeré souvislosti, i když bez nich nebude rozumět tomu, jak dítě vhodně podpořit.",
          "Přenechat rozhodnutí o rozsahu sdělení kterémukoli členovi týmu, který je zrovna v dané chvíli nejblíž škole."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Žák bez výraznějších kognitivních obtíží často chybí, protože doma chybí ranní organizace a rodič dlouhodobě nezvládá běžný režim. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je navýšit domácí úkoly, aby se škola stala pro rodinu organizačně viditelnější prioritou.",
          "Vedle školní práce s docházkou je vhodné uvažovat i o sociální návaznosti pro rodinu, protože část obtíže neleží v učení samotném.",
          "Nejpřesnější je uzavřít situaci jako problém osobní disciplíny žáka a hodnotit ji čistě v rámci školního řádu.",
          "Nejpřesnější je čekat, až si rodina sama vytvoří funkčnější režim, protože škola by širší souvislosti otevírat neměla."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Které shrnutí nejlépe vystihuje kvalitní doporučení pro školu v poradenském procesu?",
        "options": [
          "Mělo by být co nejvíce odborné terminologicky, i kdyby bylo pro školu obtížně převoditelné do běžné praxe.",
          "Mělo by zůstat raději obecné, aby škola měla dost svobody interpretovat si jeho smysl podle sebe.",
          "Mělo by být konkrétní, funkčně odůvodněné a proveditelné v běžném chodu školy, ne jen diagnosticky popisné.",
          "Mělo by být co nejkratší, protože podrobnější vysvětlení školy v praxi stejně nečtou."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Škola po poradenském závěru opakovaně žádá „hlavně přesný název problému, ať ví, jak s dítětem zacházet“. Jaký poradenský přístup je nejpřesnější?",
        "options": [
          "Nejpřesnější je poslat škole jen název obtíže, protože ten sám už dostatečně určuje typ podpory.",
          "Nejpřesnější je ponechat škole, ať si podle názvu sama odvodí, co by mohlo fungovat v každodenní výuce.",
          "Nejpřesnější je zdůraznit, že název bez překladu do funkčního dopadu a doporučených kroků školní podporu nevyřeší.",
          "Nejpřesnější je odmítnout téma podpory a vrátit se jen k formálnímu potvrzení závěru."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 37,
        "text": "U žáka s progresivním svalovým onemocněním škola zvažuje, že ho z náročnějších aktivit preventivně vyjme, aby nebyl přetěžován. Který závěr je nejpřesnější?",
        "options": [
          "Nejdříve je vhodné hledat přístupnou a důstojnou formu účasti a pracovat s energií a tempem, ne automaticky nahrazovat participaci úplným vyjmutím.",
          "Nejpřesnější je vyjmout žáka ze všech fyzicky náročnějších situací dlouhodobě, protože prevence zátěže musí mít absolutní přednost.",
          "Nejpřesnější je ponechat úplně stejné podmínky jako ostatním, protože jakákoli úprava by byla nespravedlivá.",
          "Nejpřesnější je převést rozhodování výhradně na zdravotnictví a ve škole nepřemýšlet o organizačních úpravách."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Vysoce verbálně nadaný žák působí kompetentně, ale opakovaně selhává v plánování, organizaci práce, sdílení prostoru s vrstevníky a ve zpracování změny. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je chápat obtíže jako přechodný důsledek nudy; systematičtější podpora není u nadaných žáků vhodná.",
          "Nejpřesnější je pracovat současně s vysokým potenciálem i s podpůrnými potřebami v exekutivní, sociální a adaptační oblasti.",
          "Nejpřesnější je snížit obsahové požadavky ve všech předmětech, protože organizační obtíže ukazují na nižší celkové možnosti.",
          "Nejpřesnější je soustředit se jen na vztahy ve třídě a přestat řešit organizaci práce a změny v prostředí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Škola už u žáka pracovala s cílenou podporou a část opatření se ukázala funkční, část ne. Nyní směřuje k odbornému posouzení. Které shrnutí procesu je nejpřesnější?",
        "options": [
          "Po rozhodnutí o odborném posouzení už předchozí školní kroky ztrácejí význam a není potřeba je dále reflektovat.",
          "Jakmile se objeví potřeba ŠPZ, měla by škola ukončit průběžné sledování, aby se nemíchaly role jednotlivých aktérů.",
          "Vyhodnocení školní podpory je cenným podkladem pro další krok k ŠPZ; role a dokumenty školy a ŠPZ se ale nesmějí směšovat.",
          "Škola by měla své zkušenosti zjednodušit na jedinou hypotézu, aby odborné posouzení nebylo příliš komplikované."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Učitel tvrdí, že bez odborného doporučení nesmí ve výuce nic cíleně měnit, protože by „porušil pravidla“. Který závěr je nejpřesnější?",
        "options": [
          "Má pravdu, jakákoli cílenější úprava výuky je bez externího doporučení nepřípustná.",
          "Má pravdu alespoň u komunikačních obtíží; u ostatních bariér škola upravovat výuku může.",
          "Má pravdu jen tehdy, pokud rodič ještě nepodepsal souhlas s budoucím posouzením v ŠPZ.",
          "Škola může a má v rámci své role poskytovat a vyhodnocovat základní podporu; odborné doporučení je potřebné pro další kroky, ne jako podmínka každé pedagogické úpravy."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Škola žádá, aby byla celá zdravotnická zpráva vložena do třídní dokumentace, „ať má každý úplný obraz“. Který přístup je nejpřesnější?",
        "options": [
          "Dokumentaci je třeba vést podle role a účelu; do školních záznamů nepatří mechanické přebírání celých zdravotnických zpráv bez ohledu na potřebu podpory.",
          "Je vhodné vkládat celé zdravotnické zprávy do školní dokumentace vždy, protože jen tak se předejde informačním ztrátám.",
          "Nejpřesnější je naopak škole nesdělit z těchto zpráv vůbec nic, i kdyby to komplikovalo podporu dítěte.",
          "Nejpřesnější je nechat každého člena týmu, ať si rozhodne sám, jaké zdravotnické údaje do školní dokumentace potřebuje."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Na druhém stupni se u žákyně zhoršil písemný výkon. V ústním projevu však drží obsah dobře a problémy se koncentrují kolem drobného písma, husté stránky a vizuální únavy. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je upravit klasifikaci, protože tím se napětí mezi výkonem a nároky vyřeší nejrychleji.",
          "Dříve než se uzavře širší závěr o schopnostech, je nutné prověřit dostupnost vizuální informace a případně promítnout zjištění do podpory a hodnocení.",
          "Nejpřesnější je chápat situaci hlavně jako nízkou pracovní disciplínu, protože ústní výkon bývá někdy zavádějící.",
          "Nejpřesnější je převést žákyni jen na ústní odpovědi, aniž by se dál řešila vizuální stránka výuky."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Na společném jednání se sešlo více odborných pohledů, ale závěr zůstává roztříštěný a není jasné, co kdo udělá v nejbližších týdnech. Které uzavření schůzky je nejpřesnější?",
        "options": [
          "Nejpřesnější je schůzku ukončit tím, že každý pošle svůj dílčí pohled samostatně a navazující kroky se případně doplní později.",
          "Nejpřesnější je ponechat závěr co nejotevřenější, aby nebyl tým omezen předčasným rozhodnutím.",
          "Nejpřesnější je zaměřit se hlavně na terminologickou přesnost závěru a praktické kroky nechat až na další setkání.",
          "Nejpřesnější je shrnout, na čem panuje shoda, co z toho plyne pro školu, rodinu a další partnery a kdo za co v nejbližší době odpovídá."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 44,
        "text": "Které shrnutí vztahu mezi zprávou, doporučením a školní prací je nejpřesnější?",
        "options": [
          "Zpráva i doporučení mají v podstatě stejnou funkci; škola si může vybrat, s čím bude dále pracovat.",
          "Zpráva nahrazuje každodenní pedagogickou práci školy, doporučení je jen administrativní příloha pro evidenci.",
          "Doporučení slouží hlavně rodiči a zpráva jen škole, proto není důležité je obsahově propojovat.",
          "Smysl těchto výstupů se naplňuje teprve tehdy, když škola rozumí jejich funkci a překládá je do konkrétní podpory bez směšování rolí a dokumentů."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Žák po delší hospitalizaci zvládá učivo, ale jeho výdrž, tempo a tolerance zátěže kolísají. Který partnerský rámec je pro školu nejpřesnější?",
        "options": [
          "Škola má podporu průběžně organizovat podle reálné funkční zátěže a spolupracovat s rodinou a relevantními zdravotnickými doporučeními, nikoli vše pasivně přesunout mimo školu.",
          "Škola má vyčkat, až zdravotnictví definitivně rozhodne i o každodenní podobě výuky a hodnocení.",
          "Škola by měla zachovat původní režim beze změny, aby se žák co nejrychleji vrátil do běžného výkonu.",
          "Nejpřesnější je dlouhodobě omezit participaci v širším školním dění, protože kolísání zátěže vždy znamená potřebu zúžit školní zkušenost."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Rodina je v péči klinického logopeda, ale ve škole dítě stále nerozumí delším instrukcím, v kolektivu se ztrácí a nevyužívá dost komunikační opory. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je předpokládat, že klinická péče sama brzy vyřeší i školní fungování, takže škola zatím nemusí nic měnit.",
          "Nejpřesnější je chápat klinickou péči a školní komunikační podporu jako souběžné a vzájemně nenahraditelné vrstvy podpory.",
          "Nejpřesnější je řešit pouze sociální vztahy ve třídě, protože porozumění instrukcím je v této situaci druhotné.",
          "Nejpřesnější je omezit učivo tak, aby dítě nebylo vystaveno delším verbálním sdělením."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Dítě ve škole opakovaně naznačuje strach z domova, přichází zanedbané a pedagogové pozorují rychlé zhoršování stavu. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je řešit situaci výhradně zvýšenou školní podporou, protože mimoškolní zásahy by byly předčasné.",
          "Nejpřesnější je nejprve několik týdnů počkat, zda dítě nezačne o situaci mluvit konkrétněji samo.",
          "Vedle školní podpory je třeba zvažovat i ochranný krok mimo školu, protože signály ukazují na možné závažné ohrožení dítěte.",
          "Nejpřesnější je přestat téma otevírat, aby dítě nebylo školou dále zatěžováno."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Dítě s těžkým kombinovaným postižením má velmi nevyrovnaný profil, rodina je vyčerpaná a tým se neshodne, zda má být cílem hlavně „co nejrychlejší přiblížení vrstevníkům“. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je převést veškeré cílování na zdravotnictví, protože škola u tak těžkého profilu nemá vlastní odborné hledisko.",
          "Nejpřesnější je cíle dočasně nestanovovat, dokud se všechny složky týmu neshodnou zcela bez výhrad.",
          "Nejpřesnější je zúžit plán podpory jen na jednu oblast, aby tým nebyl zatížen přílišnou komplexitou.",
          "Nejpřesnější je vytvářet funkční, důstojné a dosažitelné cíle v komunikaci, participaci a každodenním fungování a současně odlišit školní, rodinnou a další návaznou podporu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Verbálně velmi silný žák výborně argumentuje, ale v týmové práci se ztrácí v implicitních pravidlech, při změně zadání rigidně trvá na svém a rodina trvá na tom, že jde „jen o mimořádné nadání“. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je pracovat s vícevrstevnou interpretací: držet vysoký potenciál a současně cílit podporu v sociálním porozumění, flexibilitě a školním fungování.",
          "Nejpřesnější je přijmout výklad rodiny, protože vysoký verbální výkon prakticky vylučuje potřebu další podpory.",
          "Nejpřesnější je uzavřít situaci čistě jako problém třídního klimatu a přestat sledovat individuální funkční profil žáka.",
          "Nejpřesnější je počkat, až se obtíže v sociálních situacích s věkem samy vyrovnají, aby podpora nepůsobila nadbytečně."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Po několika dílčích krocích existují data ze školy, zkušenost rodiny i dílčí odborné vstupy, ale tým se stále snaží „počkat na úplnou jistotu“, než udělá další krok. Který závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je vybrat jednu instituci, která převezme celou odpovědnost, aby se různé pohledy dál nemíchaly.",
          "Nejpřesnější je syntetizovat to, co už je funkčně zřejmé, domluvit koordinovaný další krok a průběžně ho vyhodnocovat místo pasivního čekání na dokonalou jistotu.",
          "Nejpřesnější je další krok odložit, protože bez úplné shody všech vstupů by byl vždy odborně předčasný.",
          "Nejpřesnější je vrátit se jen k terminologii a nejdřív definitivně uzavřít název problému, teprve potom řešit podporu."
        ],
        "correct": 1,
        "correctLetter": "B"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "B": 13,
        "C": 12,
        "D": 12
      },
      "distributionTarget": "13/13/12/12 nebo 12/13/13/12 apod.",
      "distributionBalanced": true,
      "styleParityReviewedManually": true
    }
  }
];
