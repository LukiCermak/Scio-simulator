// Kompletní kompatibilní konsolidovaný dataset základního režimu – Baterie 1 až 8.
// Obsah baterií je zachován beze změny; původně šlo o variantu Pokročilá, nyní je přepojena jako základní dataset.
// Zachovává runtime kompatibilitu aktivní aplikace přes window.SCIO_V4_RAW_BATTERIES.
// Soubor je určen jako export pro základní režim v souboru data_v4_questions.js.

window.SCIO_V4_RAW_BATTERIES = [
  {
    "id": 1,
    "label": "Baterie 1",
    "title": "Funkční čtení obtíže – precizní diferenciace",
    "subtitle": "Krátké profily a přesná rozlišení: kanál přístupu k informaci, forma výkonu, hlavní bariéra a sekundární projevy.",
    "purpose": "Ověřit, zda uchazeč čte obtíž funkčně a diferencovaně: odliší přístup k informaci od porozumění, formu výkonu od kompetence, hlavní bariéru od sekundárního projevu a nepodlehne zkratce podle samotné diagnózy.",
    "difficulty": "velmi vysoká",
    "dominant": [
      "kanál přístupu k informaci vs obsahové porozumění",
      "forma výkonu vs kompetence",
      "hlavní bariéra vs sekundární projev",
      "diagnóza vs konkrétní funkční dopad",
      "silná stránka vs celkový profil fungování",
      "prostředí a komunikační podmínky",
      "tempo a zátěž vs úroveň porozumění"
    ],
    "breakdown": [
      "14× krátká funkční diferenciace kanálu informace a porozumění",
      "12× forma výkonu, tempo a alternativní cesta k odpovědi",
      "10× hlavní bariéra vs sekundární behaviorální nebo regulační projev",
      "8× podpůrné principy bez mikrokazuistické narace",
      "6× finální syntéza nerovnoměrného profilu a maskované bariéry"
    ],
    "tags": [
      "hard mode",
      "B1 revize",
      "funkční čtení obtíže",
      "precizní diferenciace",
      "UPOL",
      "poradenství"
    ],
    "questions": [
      {
        "number": 1,
        "text": "Žák při předčítání obsahu rozumí, ale samostatně selhává u drobného písma a hustého vizuálního rozvržení. Které jádro obtíže je nejpřesnější?",
        "options": [
          "Hlavní bariéra leží ve slovní zásobě, protože obsah textu by jinak nezvládal ani po předčítání.",
          "Hlavní bariéra leží v motivaci, protože samostatné čtení je pro většinu žáků jen otázkou vůle.",
          "Hlavní bariéra leží v přístupu k vizuálně podanému textu, nikoli v obecném jazykovém porozumění.",
          "Hlavní bariéra leží v chování, protože potíže se samostatným čtením ukazují hlavně na nekázeň."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 2,
        "text": "V hlučné třídě žák často nereaguje na pokyny, ale při rozhovoru tváří v tvář s krátkou písemnou oporou pracuje přesně. Co je nejspíš hlavní bariéra?",
        "options": [
          "Hlavní bariéra souvisí s nízkou ochotou spolupracovat při skupinové práci.",
          "Hlavní bariéra souvisí s dostupností mluvené informace v akusticky náročném prostředí.",
          "Hlavní bariéra souvisí s globálně sníženým intelektem, který se při individuálním vedení lépe maskuje.",
          "Hlavní bariéra souvisí hlavně s poruchou chování, protože žák reaguje jen na část pokynů."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Dítě komolí hlásky, ale dobře rozumí instrukcím, slyší i tišší řeč a v sociálním kontaktu reaguje přiměřeně. Které čtení je nejpřesnější?",
        "options": [
          "Těžiště obtíže je spíše v mluvní produkci než ve sluchové dostupnosti nebo sociálním porozumění.",
          "Těžiště obtíže je spíše ve sluchové vadě, protože chybná výslovnost je jejím typickým hlavním znakem.",
          "Těžiště obtíže je spíše v PAS, protože nepřesná řeč běžně znamená oslabenou reciprocitu.",
          "Těžiště obtíže je spíše v globálním kognitivním oslabení, protože artikulační chyby ukazují na širší deficit."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 4,
        "text": "Žák ústně vysvětluje učivo přesně, ale v písemném projevu je výkon nápadně krátký, křečovitý a nečitelný. Který závěr je nejpřesnější?",
        "options": [
          "Výrazně oslabená může být hlavně motivace, protože kdo látce rozumí, zapíše ji bez větších obtíží.",
          "Výrazně oslabená může být hlavně slovní zásoba, protože písemný projev vždy nejlépe odráží jazykovou úroveň.",
          "Výrazně oslabená může být hlavně kázeň, protože nečitelný zápis je především důsledkem nezájmu.",
          "Výrazně oslabená může být hlavně forma grafického výstupu, ne nutně obsahové porozumění učivu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Žák používá bohatou slovní zásobu, ale nerozumí narážce, doslovně čte nepřímé sdělení a v dialogu těžko pružně mění perspektivu. Co je nejpřesnější čtení?",
        "options": [
          "Jádro obtíže může ležet spíše v technice čtení, protože doslovnost bývá hlavně důsledkem pomalé dekódace.",
          "Jádro obtíže může ležet spíše v artikulaci, protože nepřímé významy vycházejí hlavně z přesné výslovnosti.",
          "Jádro obtíže může ležet spíše v sociálně-pragmatickém porozumění než ve slovní zásobě nebo artikulaci.",
          "Jádro obtíže může ležet spíše v neochotě spolupracovat, protože pružnost v dialogu je otázkou disciplíny."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 6,
        "text": "Po léčbě závažného onemocnění žák učivu rozumí, ale výrazně se unaví, hůře zvládá přesuny a odpoledne výkon prudce klesá. Které čtení je nejpřesnější?",
        "options": [
          "Jádrem je spíše nízká studijní odolnost, protože odpolední pokles bývá hlavně otázkou vůle.",
          "Jádrem je spíše zdravotní a fyzická zátěž měnící podmínky výkonu a participace.",
          "Jádrem je spíše nedostatek rozumových schopností, protože únava obvykle jen odkryje slabý intelekt.",
          "Jádrem je spíše porucha chování, protože kolísání výkonu znamená nestabilní sebekontrolu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Žák v diktátu a přepisu chybuje výrazně více než při ústním vysvětlení stejného učiva. Který závěr je nejpřesnější?",
        "options": [
          "Výrazněji může selhávat sluch, protože pravopisné chyby většinou ukazují na nedostatečné slyšení.",
          "Výrazněji může selhávat ochota pracovat, protože ústní odpověď bývá vždy pohodlnější než písemná.",
          "Výrazněji může selhávat celkové porozumění učivu, protože pravopis je nejspolehlivější ukazatel znalosti.",
          "Výrazněji může selhávat kódování do psané formy, aniž by byl nutně slabý obsahový koncept."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 8,
        "text": "U dítěte se objevují afekty hlavně při zahlcení řečí, změně pravidel a sociální nepředvídatelnosti. Které čtení je nejpřesnější?",
        "options": [
          "Afekt může být spíše sekundárním projevem přetížení a regulačního selhání než samotným jádrem obtíže.",
          "Afekt bývá nejspíše hlavním znakem poruchy chování, protože intenzita projevu rozhoduje víc než kontext.",
          "Afekt bývá nejspíše důkazem nízkého intelektu, protože kognitivně silnější dítě se reguluje bez pomoci.",
          "Afekt bývá nejspíše projevem rozmazlenosti, protože změna pravidel nemá odborný význam."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 9,
        "text": "Žák má výrazně omezenou jemnou motoriku a pomalé manipulační tempo, ale při rozhovoru chápe souvislosti věcně přesně. Který závěr je nejpřesnější?",
        "options": [
          "Nápadná může být hlavně lenost, protože pomalé tempo je u školních úloh většinou motivační problém.",
          "Nápadná může být hlavně řečová porucha, protože jemná motorika obvykle souvisí s chápáním významu.",
          "Nápadná může být hlavně bariéra v motorickém provedení, nikoli automaticky v rozumovém porozumění.",
          "Nápadná může být hlavně porucha chování, protože zdržování úkolu bývá skrytou opozicí."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 10,
        "text": "Žák čte technicky plynule, ale selhává v odvozování významu a v odpovědích na otázky vyžadující porozumění vztahům v textu. Co je nejpřesnější čtení?",
        "options": [
          "Technika dekódování sama nestačí; obtíž proto určitě leží v neochotě číst delší pasáže.",
          "Technika dekódování sama nestačí; obtíž může ležet v porozumění významu a vztahům v textu.",
          "Technika dekódování sama nestačí; obtíž proto musí ležet hlavně ve sluchu.",
          "Technika dekódování sama nestačí; obtíž proto musí ležet hlavně v grafomotorice."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Dva žáci mají stejnou diagnózu zrakového postižení. Jeden využívá hlavně zvětšení, druhý spíše hmatové materiály. Který závěr je nejpřesnější?",
        "options": [
          "Název diagnózy sám neurčuje podobu podpory; rozhoduje konkrétní funkční způsob práce s informací.",
          "Název diagnózy sám neurčuje podobu podpory; proto je nejlepší dát oběma žákům stejný soubor kompenzací.",
          "Název diagnózy sám neurčuje podobu podpory; proto je vhodné podporu odložit, dokud se jejich výkon nesjednotí.",
          "Název diagnózy sám neurčuje podobu podpory; proto je nejjistější vycházet jen z preferencí rodiny."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 12,
        "text": "Dítě v rozhovoru často opakuje část otázky, potřebuje více času na zpracování a v klidném prostředí s vizuální oporou odpovídá přesněji. Které čtení je nejpřesnější?",
        "options": [
          "Obtíž může souviset spíše s nízkým intelektem, protože opakování otázky bývá jeho nejjistějším znakem.",
          "Obtíž může souviset spíše s poruchou chování, protože přesnější odpověď v klidu znamená jen menší možnost odporu.",
          "Obtíž může souviset spíše s motorikou, protože zpracování otázky je hlavně otázkou tělesného tempa.",
          "Obtíž může souviset spíše se zpracováním mluvené informace a tempem porozumění než s nezájmem."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Dítě výrazně lépe chápe postup, když je názorně rozfázovaný a opřený o konkrétní situace. Při čistě abstraktním slovním výkladu rychle selhává. Co je nejpřesnější čtení?",
        "options": [
          "Jádrem může být potřeba názorného a strukturovaného zprostředkování, proto je nejlepší rezignovat na učební cíle.",
          "Jádrem může být potřeba názorného a strukturovaného zprostředkování, ne prostá nepozornost.",
          "Jádrem může být potřeba názorného a strukturovaného zprostředkování, proto jde vždy hlavně o sluchovou vadu.",
          "Jádrem může být potřeba názorného a strukturovaného zprostředkování, proto je abstraktní výklad nevhodný pro všechny žáky."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 14,
        "text": "Žák má výbornou slovní zásobu a paměť na fakta, ale výrazně selhává v sociálním porozumění, flexibilitě a každodenním školním fungování. Který závěr je nejpřesnější?",
        "options": [
          "Silná verbální stránka sama nevylučuje významnou bariéru, proto ale nejde o potíž hodnou podpory.",
          "Silná verbální stránka sama nevylučuje významnou bariéru, proto je nejlepší vysvětlit vše jen jako lenost.",
          "Silná verbální stránka sama nevylučuje významnou bariéru v adaptivním a sociálně-komunikačním fungování.",
          "Silná verbální stránka sama nevylučuje významnou bariéru, proto je rozhodující sledovat jen známky z českého jazyka."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 15,
        "text": "Kompenzační pomůcka umožní žákovi přístup ke stejnému obsahu jinou cestou. Které tvrzení je nejpřesnější?",
        "options": [
          "Pomůcka může vyrovnávat bariéru přístupu, aniž by sama o sobě zjednodušovala obsah učiva.",
          "Pomůcka může vyrovnávat bariéru přístupu, ale tím vždy automaticky snižuje nároky na výkon.",
          "Pomůcka může vyrovnávat bariéru přístupu, proto je vhodná jen pro žáky s nízkou motivací.",
          "Pomůcka může vyrovnávat bariéru přístupu, proto nahrazuje potřebu pedagogického plánování."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 16,
        "text": "Žák při opisování z tabule ztrácí místo a vynechává řádky, ale při práci s textem položeným blízko pracuje přesněji. Které čtení je nejpřesnější?",
        "options": [
          "Obtíž může souviset spíše s nedostatkem motivace, protože opis z tabule je jen trénink pečlivosti.",
          "Obtíž může souviset spíše s poruchou chování, protože vynechávání řádků znamená nedbalost.",
          "Obtíž může souviset spíše s nízkou jazykovou úrovní, protože přesný opis vyžaduje hlavně slovní zásobu.",
          "Obtíž může souviset spíše s vizuálním přístupem na vzdálenost a sledováním řádků než s neznalostí obsahu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Dítě zapomíná delší ústní instrukce, ale podle krátkého vizuálního seznamu postup zvládá. Který závěr je nejpřesnější?",
        "options": [
          "Jádro může ležet spíše v nízkém intelektu, protože vícekrokový úkol vždy odhalí slabé myšlení.",
          "Jádro může ležet spíše v zatížení auditivně-sekvenčního zpracování než v úplném neporozumění úkolu.",
          "Jádro může ležet spíše v motorice, protože seznam kompenzuje hlavně tělesné tempo.",
          "Jádro může ležet spíše v nekázni, protože dítě by si správný postup mělo prostě pamatovat."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 18,
        "text": "V rušném prostoru s blikajícím světlem a hlukem výkon dítěte klesá, zatímco v klidném koutě se rychle stabilizuje. Co je nejpřesnější čtení?",
        "options": [
          "Hlavním problémem může být senzorické přetížení, proto je nejlepší dítě zcela vyřadit z běžných situací.",
          "Hlavním problémem může být senzorické přetížení, proto jde vždy hlavně o sluchové postižení.",
          "Hlavním problémem může být senzorické přetížení a náročnost prostředí, ne automaticky slabá schopnost učit se.",
          "Hlavním problémem může být senzorické přetížení, proto se jedná pouze o nedostatek vůle pracovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 19,
        "text": "Žák řeší úlohy správně, ale při časovém tlaku nestihne zapsat postup ani dokončit odpověď. Který závěr je nejpřesnější?",
        "options": [
          "Časový limit může odhalovat bariéru v tempu a formě výkonu více než v samotném pochopení úlohy.",
          "Časový limit může odhalovat bariéru v tempu a formě výkonu, proto je nejlepší rezignovat na hodnocení výsledku.",
          "Časový limit může odhalovat bariéru v tempu a formě výkonu, proto jde vždy hlavně o poruchu chování.",
          "Časový limit může odhalovat bariéru v tempu a formě výkonu, proto se tím automaticky potvrzuje nízký intelekt."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 20,
        "text": "Žák plynule přečte text, ale v otázkách opakovaně mine vztah mezi postavami, časovou posloupnost nebo vyvození implicitního významu. Co je nejpřesnější závěr?",
        "options": [
          "Plynulost čtení nevylučuje obtíž v porozumění vztahům a inferencím, proto je hlavní problém vždy ve sluchu.",
          "Plynulost čtení nevylučuje obtíž v porozumění vztahům a inferencím, proto je nejlepší zcela vypustit práci s textem.",
          "Plynulost čtení nevylučuje obtíž v porozumění vztahům a inferencím, proto jde především o lenost.",
          "Plynulost čtení nevylučuje obtíž v porozumění vztahům a inferencím v textu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Žák slyší při individuálním hovoru dobře, ale ve skupinové debatě bez vizuální opory ztrácí nit. Které čtení je nejpřesnější?",
        "options": [
          "Náročnější může být přístup k mluvené informaci, proto ale není důvod upravovat komunikační podmínky.",
          "Náročnější může být přístup k mluvené informaci, proto jde jistě o problém s kázní.",
          "Náročnější může být přístup k mluvené informaci v dynamické skupinové komunikaci, ne nutně samotné myšlení.",
          "Náročnější může být přístup k mluvené informaci, proto je nejpřesnější automaticky snížit obsah učiva."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 22,
        "text": "Žák slovně popíše cestu po škole, ale v novém prostoru se sám neorientuje, vyhýbá se schodištím a přechodům. Které jádro obtíže je nejpřesnější?",
        "options": [
          "Jádro může ležet spíše ve funkční orientaci a pohybu, proto ale není třeba řešit samostatnost v prostředí.",
          "Jádro může ležet spíše ve funkční orientaci a bezpečném pohybu než v jazykovém popisu trasy.",
          "Jádro může ležet spíše ve funkční orientaci a pohybu, proto jde vždy hlavně o poruchu chování.",
          "Jádro může ležet spíše ve funkční orientaci a pohybu, proto automaticky selhává i porozumění učivu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Dítě používá jednoduché věty, ale největší obtíž se ukáže při sdílení pozornosti, pochopení záměru druhého a střídání témat. Co je nejpřesnější čtení?",
        "options": [
          "Jádro může ležet spíše v sociálně-komunikačním porozumění a reciprocitě než v samotné délce vět.",
          "Jádro může ležet spíše v sociálně-komunikačním porozumění, proto ale nejde o oblast speciálněpedagogické podpory.",
          "Jádro může ležet spíše v sociálně-komunikačním porozumění, proto je nejlepší zaměřit se jen na artikulaci.",
          "Jádro může ležet spíše v sociálně-komunikačním porozumění, proto se automaticky potvrzuje sluchová vada."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 24,
        "text": "Rodič označuje žáka za líného, ale obtíže se zřetelně zhoršují po bolesti, léčbě nebo větší fyzické zátěži. Který závěr je nejpřesnější?",
        "options": [
          "Funkční dopad zdravotního stavu může vysvětlovat kolísání výkonu, proto ale není třeba plánovat podmínky práce.",
          "Funkční dopad zdravotního stavu může vysvětlovat kolísání výkonu, proto je nejpřesnější automaticky snížit cíle o několik ročníků.",
          "Funkční dopad zdravotního stavu může vysvětlovat kolísání výkonu, proto jde hlavně o problém chování rodiny.",
          "Funkční dopad zdravotního stavu může vysvětlovat kolísání výkonu přesněji než morální soud o lenosti."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Žák výborně zvládá uzavřené úlohy, ale při otevřených sociálních situacích se ztrácí v implicitních pravidlech a rychle rigidně ustrne. Co je nejpřesnější čtení?",
        "options": [
          "Silný výkon v jednoznačně strukturované úloze nevylučuje bariéru, proto ale jde vždy hlavně o intelektový deficit.",
          "Silný výkon v jednoznačně strukturované úloze nevylučuje bariéru ve flexibilitě a sociálním porozumění.",
          "Silný výkon v jednoznačně strukturované úloze nevylučuje bariéru, proto je nejlepší vyřadit všechny otevřené úkoly.",
          "Silný výkon v jednoznačně strukturované úloze nevylučuje bariéru, proto rigidita znamená hlavně neochotu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 26,
        "text": "Žák pracuje v Braillově písmu pomaleji než spolužáci ve vizuálním textu, ale odpovědi mají stejnou obsahovou kvalitu. Který závěr je nejpřesnější?",
        "options": [
          "Různá cesta k informaci neznamená automaticky nižší obsahovou úroveň, proto ale není podstatné řešit časové podmínky.",
          "Různá cesta k informaci neznamená automaticky nižší obsahovou úroveň, proto je nejlepší hodnotit jen rychlost.",
          "Různá cesta k informaci neznamená automaticky nižší obsahovou úroveň výkonu.",
          "Různá cesta k informaci neznamená automaticky nižší obsahovou úroveň, proto Braillovo písmo samo snižuje nároky učiva."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 27,
        "text": "Žák má normální sluchový nález, ale při vyprávění těžko hledá slova, staví věty nesouvisle a potřebuje více času na formulaci. Který závěr je nejpřesnější?",
        "options": [
          "Těžiště může být spíše v jazykovém formulování, proto ale nejde o problém významný pro školní výkon.",
          "Těžiště může být spíše v jazykovém formulování, proto se tím automaticky potvrzuje PAS.",
          "Těžiště může být spíše v jazykovém formulování, proto je hlavní obtíž určitě v kázni.",
          "Těžiště může být spíše v jazykovém formulování a organizaci výpovědi než ve slyšení samotném."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 28,
        "text": "Dítě rozumí učivu, ale při komunikaci bez možnosti odezírat a bez zřetelného obrácení mluvčího na něj ztrácí část sdělení. Které čtení je nejpřesnější?",
        "options": [
          "Podstatná může být dostupnost mluvené informace včetně vizuálních komunikačních opor, ne jen obsah učiva.",
          "Podstatná může být dostupnost mluvené informace, proto ale jde automaticky o nízký intelekt.",
          "Podstatná může být dostupnost mluvené informace, proto je nejpřesnější zrušit všechny ústní situace.",
          "Podstatná může být dostupnost mluvené informace, proto jde hlavně o neochotu dávat pozor."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 29,
        "text": "Žák dělá mnoho pravopisných chyb, ale při ústním vysvětlení přesně popíše vztahy, důvody a pravidla. Co je nejpřesnější čtení?",
        "options": [
          "Pravopisně nápadný výkon nemusí znamenat oslabené porozumění, proto ale pravopis není třeba nikdy hodnotit.",
          "Pravopisně nápadný výkon nemusí znamenat oslabené pojmové porozumění.",
          "Pravopisně nápadný výkon nemusí znamenat oslabené porozumění, proto je hlavní obtíž vždy ve sluchu.",
          "Pravopisně nápadný výkon nemusí znamenat oslabené porozumění, proto jde hlavně o nedbalost."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 30,
        "text": "Žák umí slovně popsat trasu, ale v neznámé budově zůstává bez doprovodu nejistý a nebezpečně váhá. Který závěr je nejpřesnější?",
        "options": [
          "Verbální popis prostoru ještě nezaručuje orientaci, proto ale není vhodné trénovat samostatnost.",
          "Verbální popis prostoru ještě nezaručuje orientaci, proto je hlavní problém jistě v řeči.",
          "Verbální popis prostoru ještě nezaručuje funkční orientaci a bezpečný samostatný pohyb.",
          "Verbální popis prostoru ještě nezaručuje orientaci, proto jde vždy o poruchu chování."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 31,
        "text": "Který závěr z totožné diagnózy u dvou žáků je odborně nejpřesnější?",
        "options": [
          "Stejná diagnóza sama nestačí k odvození stejné podpory; proto je nejlepší držet jen subjektivní přání školy.",
          "Stejná diagnóza sama nestačí k odvození stejné podpory; proto je odborně nejbezpečnější podporu neindividualizovat.",
          "Stejná diagnóza sama nestačí k odvození stejné podpory; proto diagnóza nemá pro podporu už žádný význam.",
          "Stejná diagnóza sama nestačí k odvození stejné podpory; rozhoduje konkrétní funkční dopad v učení a participaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 32,
        "text": "Které tvrzení nejlépe odlišuje přístupnost od obsahového zjednodušení?",
        "options": [
          "Přístupnost mění cestu k informaci nebo formu práce, zatímco obsahové zjednodušení mění samotný rozsah či náročnost učiva.",
          "Přístupnost mění cestu k informaci nebo formu práce, proto se vždy rovná snížení cílů.",
          "Přístupnost mění cestu k informaci nebo formu práce, proto je jen technickou záležitostí bez pedagogického významu.",
          "Přístupnost mění cestu k informaci nebo formu práce, proto se používá jen u tělesného postižení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 33,
        "text": "Který závěr je nejpřesnější, když žák ústně prokazuje přesné porozumění, ale písemně selhává hlavně v mechanické podobě výstupu?",
        "options": [
          "Je třeba oddělit obsahovou kompetenci od formy produkce, proto ale mechanický výstup není třeba nikdy rozvíjet.",
          "Je třeba oddělit obsahovou kompetenci od formy produkce, proto jde jistě o problém motivace.",
          "Je třeba oddělit obsahovou kompetenci od formy produkce a nevyvozovat z mechanického selhání automaticky slabé porozumění.",
          "Je třeba oddělit obsahovou kompetenci od formy produkce, proto je nejsprávnější snížit obsahové cíle."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 34,
        "text": "Který znak spíše ukazuje na pragmatické jádro obtíže než na čistě artikulační problém?",
        "options": [
          "Nepřesná výslovnost jedné skupiny hlásek při jinak přiměřeném porozumění a kontaktu.",
          "Nepřesné čtení narážek, doslovné chápání a slabší oprava nedorozumění v dialogu.",
          "Nosní zabarvení hlasu při zachovaném sociálním porozumění a flexibilitě v hovoru.",
          "Kolísání hlasitosti při delším mluvení bez potíží v chápání záměru druhého."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Žák se zdravotním oslabením látce rozumí, ale výkon výrazně kolísá podle únavy. Který krok je nejpřesnější?",
        "options": [
          "Upravit podmínky tempa a zátěže, proto ale automaticky trvale snížit všechny vzdělávací cíle.",
          "Upravit podmínky tempa a zátěže, proto ale odložit jakékoli hodnocení na neurčito.",
          "Upravit podmínky tempa a zátěže, proto ale předpokládat hlavně nízkou motivaci žáka.",
          "Upravit podmínky tempa a zátěže tak, aby se posuzovalo porozumění, ne jen vyčerpanost výkonu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 36,
        "text": "Při opisu z tabule dítě chybuje, při práci z předlohy na lavici nikoli. Co je nejpřesnější čtení?",
        "options": [
          "Potíž může být hlavně v přístupu k vizuální předloze na vzdálenost a v organizaci zrakové práce.",
          "Potíž může být hlavně v lenosti, protože opis z tabule nevyžaduje skutečné porozumění.",
          "Potíž může být hlavně v poruše chování, protože rozdíl mezi úlohami ukazuje na selektivní odpor.",
          "Potíž může být hlavně v nízkém intelektu, protože přesný opis je základní důkaz chápání."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 37,
        "text": "Žák používá znakový či symbolový systém a pomocí něj sděluje věcně přesné myšlenky. Který závěr je nejpřesnější?",
        "options": [
          "Alternativní komunikační systém může být cestou vyjádření porozumění, proto ale brání rozvoji skutečné komunikace.",
          "Alternativní komunikační systém může být cestou vyjádření porozumění, nikoli důkazem nízkého myšlení.",
          "Alternativní komunikační systém může být cestou vyjádření porozumění, proto je vhodný jen jako krátká nouzová náhrada.",
          "Alternativní komunikační systém může být cestou vyjádření porozumění, proto automaticky snižuje jazykové nároky."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 38,
        "text": "Dítě je stabilní v předvídatelné rutině, ale při nečekané změně plánu nebo pravidel se rychle rozpadá. Co je nejpřesnější čtení?",
        "options": [
          "Podstatná může být bariéra ve flexibilitě a regulaci, proto ale není vhodné dítě seznamovat s jakoukoli změnou.",
          "Podstatná může být bariéra ve flexibilitě a regulaci, proto jde jistě hlavně o sluchovou vadu.",
          "Podstatná může být bariéra ve flexibilitě a regulaci při změně, ne pouze nedostatek disciplíny.",
          "Podstatná může být bariéra ve flexibilitě a regulaci, proto je nejlepší hodnotit jen poslušnost."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 39,
        "text": "Který závěr je nejpřesnější, když žák píše velmi nečitelně, ale při ústním vysvětlení přesně propojuje pojmy a příklady?",
        "options": [
          "Nečitelný rukopis sám o sobě nedokazuje slabé porozumění, proto ale není vhodné rozvíjet psanou podobu práce.",
          "Nečitelný rukopis sám o sobě nedokazuje slabé porozumění, proto jde jistě o problém sluchu.",
          "Nečitelný rukopis sám o sobě nedokazuje slabé porozumění, proto je nejsprávnější hodnotit jen ústní výkon.",
          "Nečitelný rukopis sám o sobě nedokazuje slabé porozumění; může jít hlavně o bariéru formy výkonu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 40,
        "text": "Žák působí velmi nadaně v úzké odborné oblasti, ale mimo ni selhává v organizaci, sociálním porozumění a běžném školním fungování. Které čtení je nejpřesnější?",
        "options": [
          "Vysoce rozvinutá dílčí silná stránka může maskovat významnou bariéru v jiných funkčních oblastech.",
          "Vysoce rozvinutá dílčí silná stránka může maskovat bariéru, proto ale podpora ztrácí smysl.",
          "Vysoce rozvinutá dílčí silná stránka může maskovat bariéru, proto je nejlepší sledovat jen výkon v silné oblasti.",
          "Vysoce rozvinutá dílčí silná stránka může maskovat bariéru, proto jde vždy o problém motivace."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 41,
        "text": "Dítě má nepřesnou artikulaci, ale porozumění, sociální kontakt i práce s významem jsou přiměřené. Který závěr je nejpřesnější?",
        "options": [
          "Nápadná může být izolovanější mluvní forma, proto ale jde vždy hlavně o sluchovou vadu.",
          "Nápadná může být izolovanější mluvní forma, nikoli automaticky širší sociálně-komunikační nebo kognitivní deficit.",
          "Nápadná může být izolovanější mluvní forma, proto je nejpřesnější uvažovat hlavně o PAS.",
          "Nápadná může být izolovanější mluvní forma, proto se tím potvrzuje globální mentální oslabení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 42,
        "text": "Který princip je při plánování podpory odborně nejpřesnější?",
        "options": [
          "Podpora má vycházet z konkrétního funkčního dopadu, proto ale není třeba sledovat průběžné změny situace.",
          "Podpora má vycházet z konkrétního funkčního dopadu, proto diagnóza nemá vůbec žádný význam.",
          "Podpora má vycházet z konkrétního funkčního dopadu obtíže v daných podmínkách, ne jen z názvu kategorie.",
          "Podpora má vycházet z konkrétního funkčního dopadu, proto je nejlepší používat u stejné kategorie stejné balíčky podpory."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 43,
        "text": "Žákův hlas se po malé zátěži rychle unaví a s delším mluvením klesá srozumitelnost, zatímco porozumění řeči zůstává dobré. Které čtení je nejpřesnější?",
        "options": [
          "Těžiště může být ve hlasovém a produkčním výkonu, proto ale jde vždy hlavně o sluchové postižení.",
          "Těžiště může být ve hlasovém a produkčním výkonu, proto je nejlepší omezit veškerou komunikaci.",
          "Těžiště může být ve hlasovém a produkčním výkonu, proto se tím potvrzuje globální jazyková neschopnost.",
          "Těžiště může být ve hlasovém a produkčním výkonu, ne v porozumění sdělení samotnému."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 44,
        "text": "Učitel mluví při psaní na tabuli zády ke třídě a žák pak ztrácí část instrukce, ačkoli v jiných situacích látce rozumí. Co je nejpřesnější čtení?",
        "options": [
          "Problém může vznikat v komunikačních podmínkách předávání informace, ne nutně v chápání učiva.",
          "Problém může vznikat v komunikačních podmínkách, proto ale není vhodné využívat ústní instrukce vůbec.",
          "Problém může vznikat v komunikačních podmínkách, proto jde hlavně o nezájem žáka poslouchat.",
          "Problém může vznikat v komunikačních podmínkách, proto se tím automaticky potvrzuje slabý intelekt."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 45,
        "text": "Který závěr je nejpřesnější, když žák řeší přesně, ale potřebuje delší čas na dokončení?",
        "options": [
          "Pomalé tempo může měnit podobu výkonu, proto ale je nejlepší hodnotit jen rychlost jako hlavní ukazatel.",
          "Pomalé tempo může měnit podobu výkonu, proto jde vždy hlavně o neochotu pracovat.",
          "Pomalé tempo může měnit podobu výkonu, aniž by samo dokazovalo slabé porozumění nebo nízké nároky.",
          "Pomalé tempo může měnit podobu výkonu, proto se tím automaticky potvrzuje intelektový deficit."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 46,
        "text": "Dítě zvládá práci ve třídě, ale výrazně se vyhýbá chodbám, schodištím a nepřehledným přesunům. Které jádro obtíže je nejpřesnější?",
        "options": [
          "Jádrem může být bariéra v orientaci a pohybu, proto ale nejde o oblast školní podpory.",
          "Jádrem může být bariéra v orientaci a bezpečném pohybu v prostoru, ne v samotném učebním obsahu.",
          "Jádrem může být bariéra v orientaci a pohybu, proto jde hlavně o poruchu chování.",
          "Jádrem může být bariéra v orientaci a pohybu, proto se tím potvrzuje slabé čtenářské porozumění."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Žák doslovně chápe instrukce, obtížně odhaduje nevyslovené sociální pravidlo a hůře opravuje komunikační nedorozumění. Které čtení je nejpřesnější?",
        "options": [
          "Těžiště může být spíše v sociálně-pragmatickém porozumění, proto ale jde vždy hlavně o artikulační problém.",
          "Těžiště může být spíše v sociálně-pragmatickém porozumění, proto je nejlepší sledovat jen formální správnost řeči.",
          "Těžiště může být spíše v sociálně-pragmatickém porozumění, proto se automaticky potvrzuje sluchová vada.",
          "Těžiště může být spíše v sociálně-pragmatickém porozumění a flexibilitě než ve slovní zásobě samotné."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 48,
        "text": "Vizuálně přehlcený pracovní list vede k vynechávkám a ztrátě řádku, zatímco přehledně upravená předloha výkon stabilizuje. Které čtení je nejpřesnější?",
        "options": [
          "Náročnost může ležet v organizaci vizuálního pole a přístupu k informaci, ne v obsahu samotném.",
          "Náročnost může ležet v organizaci vizuálního pole, proto ale není vhodné pracovat s textem vůbec.",
          "Náročnost může ležet v organizaci vizuálního pole, proto jde hlavně o lenost při soustředění.",
          "Náročnost může ležet v organizaci vizuálního pole, proto je nejpřesnější automaticky snižovat učivo."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 49,
        "text": "Který závěr je nejpřesnější o vztahu diagnózy a školního dopadu obtíže?",
        "options": [
          "Školní dopad se může měnit podle úkolu, prostředí a zátěže, proto diagnóza nemá pro odborné uvažování žádný význam.",
          "Školní dopad se může měnit podle úkolu, prostředí a zátěže, proto podpora nemá vycházet jen z názvu diagnózy.",
          "Školní dopad se může měnit podle úkolu, prostředí a zátěže, proto je nejbezpečnější zachovat pro všechny stejné podmínky.",
          "Školní dopad se může měnit podle úkolu, prostředí a zátěže, proto je nejlepší sledovat jen jednorázový výkon v testu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 50,
        "text": "Žák má velmi silné verbální uvažování, ale výrazně slabší samostatnost v praktickém a motorickém fungování. Které čtení je nejpřesnější?",
        "options": [
          "Výrazná verbální síla sama nevylučuje podstatnou bariéru v motoricko-adaptivním fungování.",
          "Výrazná verbální síla sama nevylučuje bariéru, proto ale praktické fungování není pro podporu důležité.",
          "Výrazná verbální síla sama nevylučuje bariéru, proto je nejlepší ignorovat odlišnost mezi oblastmi výkonu.",
          "Výrazná verbální síla sama nevylučuje bariéru, proto jde jistě hlavně o neochotu být samostatný."
        ],
        "correct": 0,
        "correctLetter": "A"
      }
    ]
  },
  {
    "id": 2,
    "label": "Baterie 2",
    "title": "Diferenciální rozlišení blízkých rámců – pokročilá separace",
    "subtitle": "Krátká a střední zadání zaměřená na přesné rozlišení sousedních odborných rámců bez dominance mikrokazuistik.",
    "purpose": "Ověřit skutečně pokročilé diferenční čtení blízkých rámců: logopedie × surdopedie, psychopedie × širší vývojový rámec, PAS × nepřístupná komunikace nebo prostředí, etopedie × sekundární reakce na dlouhodobé selhávání a tyflopedie × somatopedie × kombinovaný profil. Baterie je záměrně kratší, ostřejší a méně kazuistická než předchozí hard vrstva.",
    "difficulty": "velmi vysoká",
    "dominant": [
      "produkce řeči × přístup k mluvené informaci",
      "školní výkon × širší adaptivní fungování",
      "PAS × nepřístupná komunikace a prostředí",
      "etopedie × sekundární reakce na selhávání",
      "tyflopedie × somatopedie × kombinovaný profil",
      "hlavní rámec × vedlejší signál"
    ],
    "breakdown": [
      "10× logopedie × surdopedie × komunikační přístupnost",
      "10× psychopedie × širší vývojový rámec",
      "10× PAS × nepřístupná komunikace a prostředí",
      "10× etopedie × sekundární reakce na dlouhodobé selhávání",
      "10× tyflopedie × somatopedie × kombinovaný profil"
    ],
    "tags": [
      "UPOL",
      "SPP",
      "hard mode",
      "baterie 2",
      "diferenciální rozlišení",
      "pokročilá vrstva"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Žák rozumí čtenému zadání, ale při rychlé řeči z větší vzdálenosti ztrácí obsah. Co je přesnější?",
        "options": [
          "Těžiště je spíše v artikulační nepřesnosti než v přístupu k informaci.",
          "Těžiště je spíše v přístupu k mluvené informaci než v samotné produkci řeči.",
          "Těžiště je spíše ve slabé slovní zásobě než v komunikačních podmínkách, a to v popsané situaci.",
          "Těžiště je spíše v tempu zápisu než v auditivním vstupu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 2,
        "text": "Dítě vynechává hlásky v řeči, ale obsahu sdělení rozumí i v běžných podmínkách. Který rámec je bližší?",
        "options": [
          "Bližší je surdopedické čtení přístupu k obsahu než logopedické čtení produkce řeči.",
          "Bližší je etopedické čtení odporu k řečové zátěži než logopedické čtení produkce.",
          "Bližší je psychopedické čtení slabšího porozumění než logopedické čtení produkce.",
          "Bližší je logopedické čtení produkce řeči než surdopedické čtení přístupu k obsahu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 3,
        "text": "Při diktátu žák selhává hlavně v zachycení slyšeného, při opisování výkon drží. Co je těžiště?",
        "options": [
          "Těžiště je spíše v zachycení auditivně podané informace než v grafické podobě výkonu.",
          "Těžiště je spíše v jemné motorice než v zachycení auditivně podané informace, a to v daném profilu.",
          "Těžiště je spíše v artikulačním provedení než v auditivním vstupu.",
          "Těžiště je spíše v pravopisném pravidle než v modalitě zadání."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 4,
        "text": "Obtíž přetrvává i při vizuální opoře; řeč je málo srozumitelná i v klidném individuálním rozhovoru. Co je bližší?",
        "options": [
          "Bližší je surdopedický rámec přístupu k výkladu než logopedický rámec produkce.",
          "Bližší je psychopedický rámec globálního porozumění než logopedický rámec produkce, a to v tomto typu rozlišení.",
          "Bližší je logopedický rámec produkce řeči než surdopedický rámec přístupu k výkladu.",
          "Bližší je logopedický rámec dysfluence než surdopedický rámec hluku."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 5,
        "text": "Žák využívá odezírání, titulky a psanou oporu; výslovnost má přitom dobře srozumitelnou. Co je nejpřesnější?",
        "options": [
          "Nejpřesnější je číst situaci přes kvalitu artikulace, ne přes dostupnost sdělení.",
          "Nejpřesnější je číst situaci přes dostupnost mluveného sdělení, ne přes kvalitu artikulace.",
          "Nejpřesnější je číst situaci přes slovní zásobu, ne přes modalitu vstupu.",
          "Nejpřesnější je číst situaci přes motoriku mluvidel, ne přes komunikační podmínky, a to v daných podmínkách."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 6,
        "text": "Který znak ukazuje spíše k logopedickému než k surdopedickému rámci?",
        "options": [
          "Nepřesná artikulace přetrvává i tehdy, když je sdělení dobře dostupné a srozumitelně předané.",
          "Porozumění kolísá hlavně při hluku, vzdálenosti a bez vizuální opory.",
          "Výkon se zhoršuje zejména při rychlém výkladu z druhé strany třídy.",
          "Obsah se stabilizuje po zpřehlednění auditivního vstupu a po snížení hluku ve třídě, a to v uvedeném rámci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 7,
        "text": "Který znak ukazuje spíše k surdopedickému než k logopedickému rámci?",
        "options": [
          "Potřeba menšího hluku a přímé vizuální opory pro porozumění sdělení.",
          "Stálé obtíže s oromotorickým nastavením hlásek při zachovaném přístupu k obsahu.",
          "Snížená plynulost řeči bez vazby na komunikační podmínky.",
          "Nepřesná výslovnost zůstává stejná bez ohledu na hluk a vzdálenost."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 8,
        "text": "Dítě mluví plynule, ale v kruhu vrstevníků ztrácí tok hovoru bez vizuální opory. Co je bližší?",
        "options": [
          "Bližší je logopedické čtení plynulosti než surdopedické čtení dostupnosti toku řeči.",
          "Bližší je psychopedické čtení porozumění sociálním pravidlům než dostupnosti řeči.",
          "Bližší je surdopedické čtení dostupnosti toku řeči než logopedické čtení plynulosti.",
          "Bližší je etopedické čtení neochoty vstupovat do hovoru než dostupnosti řeči."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 9,
        "text": "Dítě má oromotorické potíže, ale na slyšené podněty reaguje přesně i v různých podmínkách. Co je bližší?",
        "options": [
          "Bližší je surdopedické čtení přístupu k informaci než logopedické čtení oromotoriky, a to v popsané situaci.",
          "Bližší je logopedické čtení oromotorické produkce než surdopedické čtení přístupu k informaci.",
          "Bližší je tyflopedické čtení smyslové zátěže než logopedické čtení oromotoriky.",
          "Bližší je psychopedické čtení globálního oslabení než logopedické čtení oromotoriky."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 10,
        "text": "Které pedagogické opatření je nejvíce vázáno na zpřístupnění mluvené informace, ne na nácvik výslovnosti?",
        "options": [
          "Snížení hluku, přímý kontakt tváří a stabilní vizuální opora při instrukci.",
          "Nácvik přesného tvoření hlásek a práce s motorikou mluvidel, a to v daném profilu.",
          "Procvičování rytmu řeči a artikulačních kontrastů.",
          "Opakování izolovaných hlásek před zrcadlem."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 11,
        "text": "Který znak posouvá interpretaci blíže k psychopedii než k izolované školní neúspěšnosti?",
        "options": [
          "Výraznější potíže jen v jednom školním předmětu při jinak dobrém fungování.",
          "Výraznější kolísání výkonu podle motivace a náročnosti učiva.",
          "Výraznější obtíže pouze v psaném projevu při zachované samostatnosti.",
          "Výraznější omezení v adaptivním fungování i mimo školní výkon."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 12,
        "text": "Dítě má slabší školní výkon, ale v běžném fungování je samostatné, plánuje a sociálně se orientuje přiměřeně. Co je přesnější?",
        "options": [
          "Samotný slabší školní výkon bez širšího dopadu psychopedický rámec přímo potvrzuje, a to v tomto typu rozlišení.",
          "Samotný slabší školní výkon ukazuje hlavně na surdopedický rámec.",
          "Samotný slabší školní výkon bez širšího adaptivního dopadu ještě psychopedický rámec nepotvrzuje.",
          "Samotný slabší školní výkon ukazuje hlavně na etopedický rámec."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 13,
        "text": "Které vymezení je pro psychopedický rámec nejpřesnější?",
        "options": [
          "Rozhoduje především jedna školní známka v klíčovém předmětu a její aktuální zhoršení, a to v daných podmínkách.",
          "Rozhoduje širší obraz porozumění, úsudku a adaptivního fungování, ne jediný testový výkon.",
          "Rozhoduje především kvalita grafomotoriky v časovém tlaku a rychlost zápisu.",
          "Rozhoduje především ochota dítěte spolupracovat v první hodině a při prvním dojmu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 14,
        "text": "Žák má v jedné úzce vymezené oblasti překvapivě dobrý výkon, ale v běžném rozhodování je velmi závislý na vedení. Co je nejpřesnější?",
        "options": [
          "Ostrůvkový dobrý výkon psychopedický rámec sám o sobě nevylučuje.",
          "Ostrůvkový dobrý výkon psychopedický rámec automaticky vylučuje, a to v uvedeném rámci.",
          "Ostrůvkový dobrý výkon automaticky potvrzuje PAS.",
          "Ostrůvkový dobrý výkon automaticky potvrzuje logopedickou obtíž."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 15,
        "text": "Která situace je bližší širšímu vývojovému zpoždění bez jasného psychopedického závěru?",
        "options": [
          "Vývoj je nerovnoměrný a každodenní samostatnost i úsudek jsou výrazně omezené.",
          "Vývoj je nerovnoměrný a přístup k mluvenému sdělení je zřetelně zhoršený.",
          "Vývoj je nerovnoměrný, ale každodenní samostatnost a sociální úsudek zůstávají poměrně zachované.",
          "Vývoj je nerovnoměrný a artikulace je málo srozumitelná v individuálním hovoru, a to v popsané situaci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Když je třeba rozlišit psychopedii a jazykovou bariéru, co rozhoduje nejvíce?",
        "options": [
          "To, zda dítě v prvních týdnech nerozumí odborným výrazům v češtině, i když jinak funguje samostatně.",
          "To, zda je ve třídě spíše tiché a méně iniciativní.",
          "To, zda pomaleji opisuje z tabule.",
          "To, zda se obtíže promítají i do širšího porozumění, úsudku a samostatnosti mimo jazykový vstup."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "U žáka jsou výrazně slabé abstrakce, sociální úsudek i plánování běžných kroků mimo školu. Co je bližší?",
        "options": [
          "Bližší je psychopedické čtení širšího fungování než čtení izolované školní obtíže.",
          "Bližší je čtení izolované školní obtíže než psychopedické čtení širšího fungování.",
          "Bližší je logopedické čtení výslovnosti než psychopedické čtení širšího fungování.",
          "Bližší je tyflopedické čtení orientace než psychopedické čtení širšího fungování."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Samotné pomalejší tempo práce bez širšího dopadu na samostatnost ukazuje spíše na co?",
        "options": [
          "Na jistý psychopedický závěr i bez širšího obrazu adaptivního fungování, a to v daném profilu.",
          "Na potřebu další diferenciace; samo o sobě nestačí k psychopedickému uzavření.",
          "Na jistý etopedický závěr i bez dalších údajů.",
          "Na jistý PAS závěr i bez dalších údajů."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Které vyjádření nejlépe rozlišuje lehké intelektové oslabení od nerovnoměrného školního výkonu?",
        "options": [
          "Rozhodující je hlavně počet chyb v diktátu, ne širší fungování.",
          "Rozhodující je hlavně rychlost čtení nahlas, ne širší fungování.",
          "Rozhodující je hlavně obliba konkrétního učitele, ne širší fungování, a to v tomto typu rozlišení.",
          "Rozhodující je širší adaptivní fungování, ne jen mapa silných a slabých předmětů."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 20,
        "text": "V běžných situacích je dítě zranitelné v penězích, čase, bezpečí a samostatném rozhodování, ale v některých úlohách překvapí dobrým výkonem. Co je přesnější?",
        "options": [
          "Přesnější je přeceňovat jednotlivé ostrůvky výkonu než širší adaptivní fungování, a to v daných podmínkách.",
          "Přesnější je uzavřít situaci jen podle výsledku posledního testu.",
          "Přesnější je sledovat širší adaptivní fungování než přeceňovat jednotlivé ostrůvky výkonu.",
          "Přesnější je uzavřít situaci jen podle kvality rukopisu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 21,
        "text": "Doslovné chápání, zátěž změnou pravidel a potřeba vysoké předvídatelnosti ukazují spíše na co?",
        "options": [
          "Na PAS rámec kvalitativní odlišnosti sociálně-komunikačního zpracování.",
          "Na primárně etopedický rámec záměrného porušování pravidel a vědomé provokace.",
          "Na primárně logopedický rámec tvorby hlásek.",
          "Na primárně somatopedický rámec motorického omezení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Dítě komunikuje přehledně, ale při nepřesných instrukcích a chaotickém prostředí se výkon rozpadá. Co je přesnější?",
        "options": [
          "Přesnější je automaticky uzavírat PAS než číst bariéru v prostředí.",
          "Přesnější je uzavírat logopedickou poruchu výslovnosti než číst bariéru v prostředí.",
          "Přesnější je uzavírat psychopedické oslabení než číst bariéru v prostředí.",
          "Přesnější je číst bariéru v nepřístupném prostředí než automaticky uzavírat PAS."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 23,
        "text": "Který znak sám o sobě pro PAS nestačí?",
        "options": [
          "Současné doslovné chápání, potíž s reciproční komunikací a silná zátěž změnou.",
          "Samotná obliba samostatné práce bez dalších kvalitativních znaků komunikace a reciprocity.",
          "Trvalejší odlišnost v porozumění nepřímým pravidlům a neverbálním signálům.",
          "Výrazná potřeba předvídatelnosti spolu s kvalitativními obtížemi sociální komunikace, a to v uvedeném rámci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 24,
        "text": "Když vizualizace a jasná struktura výrazně stabilizují výkon, co je nejpřesnější?",
        "options": [
          "Ukazuje to hlavně na jistý PAS závěr bez potřeby další diferenciace.",
          "Ukazuje to hlavně na logopedickou poruchu výslovnosti bez další diferenciace, a to v popsané situaci.",
          "Ukazuje to hlavně na význam zpřístupnění komunikace a prostředí; samo o sobě to PAS nedokazuje.",
          "Ukazuje to hlavně na psychopedický závěr bez potřeby širšího obrazu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 25,
        "text": "Rigidita se objevila až po období dlouhého stresu, dříve bez nápadných kvalitativních zvláštností komunikace. Co je bližší?",
        "options": [
          "Bližší je číst současný stav přes stresovou a situační zátěž než automaticky přes PAS.",
          "Bližší je číst současný stav automaticky přes PAS než přes stresovou zátěž.",
          "Bližší je číst současný stav automaticky přes logopedii než přes stresovou zátěž.",
          "Bližší je číst současný stav automaticky přes surdopedii než přes stresovou zátěž, a to v daném profilu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Která kombinace znaků ukazuje k PAS přesněji než k pouhé nepřístupnosti prostředí?",
        "options": [
          "Chaotická třída, rychlé instrukce a malá vizuální opora v jedné konkrétní hodině, a to v tomto typu rozlišení.",
          "Doslovnost, slabší čtení nepřímých pravidel a obtíž reciproční komunikace napříč situacemi.",
          "Vyšší hluk ve třídě a delší výklad od tabule v jedné hodině.",
          "Jednorázové přetížení po změně rozvrhu bez dalšího vzorce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Opakované konflikty v kolektivu vznikají hlavně z doslovného čtení ironie a nepřímých pravidel. Co je bližší?",
        "options": [
          "Bližší je etopedické čtení úmyslné provokace než sociálně-komunikační rámec PAS.",
          "Bližší je logopedické čtení výslovnosti než sociálně-komunikační rámec PAS.",
          "Bližší je somatopedické čtení motoriky než sociálně-komunikační rámec PAS.",
          "Bližší je sociálně-komunikační rámec PAS než etopedické čtení úmyslné provokace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 28,
        "text": "Zhoršení při hluku a více mluvčích může u PAS souviset nejvíce s čím?",
        "options": [
          "S jistou poruchou výslovnosti bez další souvislosti, a to v daných podmínkách.",
          "S jistou poruchou motoriky bez další souvislosti.",
          "S nárokem na zpracování více současných sociálně-komunikačních podnětů.",
          "S jistou zrakovou vadou bez další souvislosti."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 29,
        "text": "Která podpora je diagnosticky nejméně specifická pro PAS, protože pomáhá i v jiných rámcích?",
        "options": [
          "Rozlišení reciprocity a nepřímých pravidel v sociální komunikaci.",
          "Zpřehlednění instrukce a vizuální struktura prostředí.",
          "Mapování doslovného porozumění a reakce na změnu pravidel.",
          "Sledování kvalitativního průběhu sociální komunikace napříč situacemi."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 30,
        "text": "Když po zpřehlednění prostředí mizí většina problémů, co je nejpřesnější?",
        "options": [
          "Je vhodné nejdřív číst velký podíl bariéry v prostředí a komunikaci, ne spěchat k uzavření diagnózy.",
          "Je vhodné spěchat k uzavření diagnózy a pominout, že po zpřehlednění prostředí potíže slábnou, a to v uvedeném rámci.",
          "Je vhodné uzavřít logopedický rámec a prostředí neřešit.",
          "Je vhodné uzavřít psychopedický rámec a prostředí neřešit."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 31,
        "text": "Opakované odmítání práce po letech neúspěchu a veřejného zahanbování vyžaduje rozlišit hlavně co?",
        "options": [
          "Primární etopedické uzavření od jakékoli školní podpory a od kontextu selhávání.",
          "Primární logopedické uzavření od sekundární obranné reakce.",
          "Primární surdopedické uzavření od sekundární obranné reakce.",
          "Sekundární obrannou reakci na selhávání od primárního etopedického uzavření."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 32,
        "text": "Který znak svědčí více pro etopedický rámec než pro jednorázovou situační reakci?",
        "options": [
          "Izolovaný konflikt po jedné mimořádně náročné události.",
          "Jednorázové odmítnutí úkolu po veřejném zahanbení.",
          "Stabilnější vzorec porušování norem napříč prostředími a delším časem.",
          "Krátké zhoršení po změně režimu v jinak stabilním profilu, a to v popsané situaci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 33,
        "text": "Vzdor se objevuje hlavně v úlohách s vysokou pravděpodobností neúspěchu. Co je přesnější?",
        "options": [
          "Přesnější je číst chování jako reakci na očekávané selhání než jako jistou disocialitu.",
          "Přesnější je číst chování jako jistou disocialitu než jako reakci na selhání.",
          "Přesnější je číst chování jako jistou poruchu sluchu než jako reakci na selhání, a to v daném profilu.",
          "Přesnější je číst chování jako jistou zrakovou vadu než jako reakci na selhání."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Samotné porušení pravidla bez širšího kontextu neumožňuje co?",
        "options": [
          "Neumožňuje odpovědně uzavřít surdopedický rámec bez další diferenciace.",
          "Neumožňuje odpovědně uzavřít etopedický rámec bez další diferenciace.",
          "Neumožňuje odpovědně uzavřít tyflopedický rámec bez další diferenciace.",
          "Neumožňuje odpovědně uzavřít logopedický rámec bez další diferenciace."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "V bezpečném vztahu a předvídatelném režimu problémové chování výrazně slábne. Co je nejpřesnější?",
        "options": [
          "Přesnější je číst chování jako neměnný rys a vztah neřešit.",
          "Přesnější je číst chování jako poruchu výslovnosti a vztah neřešit, a to v tomto typu rozlišení.",
          "Přesnější je sledovat podíl vztahu a prostředí než chování číst jako neměnný rys.",
          "Přesnější je číst chování jako zrakovou bariéru a vztah neřešit."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Pro etopedické čtení je nejdůležitější sledovat co?",
        "options": [
          "Jen počet přestupků bez ohledu na kontext a funkci chování, a to v daných podmínkách.",
          "Jen hlasitost projevu bez ohledu na kontext a trvání.",
          "Jen poslední konflikt bez ohledu na předchozí vývoj.",
          "Funkci chování, jeho trvání, kontext a odpověď na změnu podmínek."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Po náhlé rodinné krizi se rychle objevují konflikty, dříve bez nápadných obtíží. Co je bližší?",
        "options": [
          "Bližší je jisté etopedické uzavření než situační a zátěžová reakce.",
          "Bližší je situační a zátěžová reakce než jisté etopedické uzavření.",
          "Bližší je jisté PAS uzavření než situační a zátěžová reakce.",
          "Bližší je jisté logopedické uzavření než situační a zátěžová reakce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 38,
        "text": "Který znak posouvá výklad blíže k dlouhodobému etopedickému rámci?",
        "options": [
          "Problémové chování je stabilní napříč situacemi a jen málo reaguje na změnu podpory.",
          "Problémové chování vzniká hlavně v jedné zátěžové hodině a jinde mizí.",
          "Problémové chování souvisí hlavně s nejasnou instrukcí a po zpřehlednění slábne, a to v uvedeném rámci.",
          "Problémové chování vzniká jen při úlohách s drobnou artikulační zátěží."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 39,
        "text": "Když problémové chování ustupuje po odstranění přetížení a po jasném vedení, co je přesnější?",
        "options": [
          "Přesnější je spěchat k pevnému etopedickému závěru než číst podíl situace.",
          "Přesnější je spěchat k pevnému surdopedickému závěru a pominout podíl situace a regulace, a to v popsané situaci.",
          "Přesnější je číst velký podíl situačního a regulačního faktoru než spěchat k pevnému etopedickému závěru.",
          "Přesnější je spěchat k pevnému tyflopedickému závěru než číst podíl situace."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Při rozlišení etopedie a PAS v sociálních konfliktech rozhoduje nejvíce co?",
        "options": [
          "Zda je dítě v konfliktu spíše hlasité, nebo spíše tiché a uzavřené.",
          "Zda dítě zvládá lépe konflikty ráno, nebo až v odpoledním školním režimu, a to v daném profilu.",
          "Zda píše rychleji fixem, nebo tužkou a na jakém typu papíru.",
          "Zda jde hlavně o úmyslné porušování norem, nebo o odlišné porozumění sociální komunikaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Žák naráží do překážek hlavně za šera, jemná motorika je přiměřená. Co je bližší?",
        "options": [
          "Bližší je tyflopedické čtení orientace závislé na zrakových podmínkách.",
          "Bližší je somatopedické čtení jemné motoriky a polohování, a to v tomto typu rozlišení.",
          "Bližší je čistě etopedické čtení nepozornosti v prostoru.",
          "Bližší je logopedické čtení tempa řeči."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Žák chápe prostorové vztahy, ale hlavní obtíž je v přesunu, úchopu a polohování. Co je bližší?",
        "options": [
          "Bližší je tyflopedické čtení orientace závislé na zrakové ostrosti.",
          "Bližší je somatopedické čtení motorického a posturálního omezení.",
          "Bližší je psychopedické čtení sociálního úsudku.",
          "Bližší je surdopedické čtení přístupu k mluvené informaci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Přístup k informaci je převážně hmatový a současně je omezena funkce rukou. Co je nejpřesnější?",
        "options": [
          "Nejpřesnější je situaci zúžit jen na tyflopedický profil.",
          "Nejpřesnější je situaci zúžit jen na somatopedický profil, a to v daných podmínkách.",
          "Nejpřesnější je uvažovat kombinovaný tyflopedicko-somatopedický profil.",
          "Nejpřesnější je situaci zúžit jen na etopedický profil."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Který znak ukazuje více k somatopedickému než k tyflopedickému rámci?",
        "options": [
          "Závislost orientace na kontrastu, osvětlení a vzdálenosti.",
          "Závislost orientace na kontrastu, osvětlení a vzdálenosti při pohybu i čtení, a to v uvedeném rámci.",
          "Nejistota v prostoru hlavně při šeru a oslnění.",
          "Zachovaný vizuální přístup k informaci při výrazné obtíži v polohování a manipulaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Který znak ukazuje více k tyflopedickému než k somatopedickému rámci?",
        "options": [
          "Závislost manipulace na držení těla, postuře a rozsahu pohybu.",
          "Závislost orientace a čtení na osvětlení, kontrastu a vzdálenosti.",
          "Závislost přesunu na stabilitě sedu a motorickém plánování těla, a to v popsané situaci.",
          "Závislost úchopu na posturální opoře a nastavení pomůcek."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 46,
        "text": "Potřeba zvětšení, kontrastu a kontroly osvětlení ukazuje primárně na co?",
        "options": [
          "Na tyflopedické řešení přístupu k vizuálně podané informaci.",
          "Na somatopedické řešení polohování a přesunu, a to v daném profilu.",
          "Na etopedické řešení pravidel a sankcí.",
          "Na logopedické řešení tvorby hlásek."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 47,
        "text": "Potřeba stabilizace sedu, polohy a přesunu při zachovaném vizuálním přístupu ukazuje primárně na co?",
        "options": [
          "Na tyflopedické čtení kontrastu a osvětlení, a to v tomto typu rozlišení.",
          "Na surdopedické čtení auditivního vstupu.",
          "Na PAS čtení reciprocity a doslovnosti.",
          "Na somatopedické čtení motorického a posturálního fungování."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 48,
        "text": "Prostorová orientace kolísá podle světla a současně je manipulace zpomalená kvůli hybnosti rukou. Co je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít jen tyflopedický rámec a motoriku neřešit.",
          "Nejpřesnější je uzavřít jen somatopedický rámec a zrakové podmínky neřešit, a to v daných podmínkách.",
          "Nejpřesnější je číst propojený kombinovaný profil, ne uzavřít jen jeden rámec.",
          "Nejpřesnější je uzavřít jen etopedický rámec a přístup k informaci neřešit."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 49,
        "text": "Samotná únava při delším psaní bez zrakově podmíněné orientační bariéry míří spíše k čemu?",
        "options": [
          "Spíše k somatopedickému nebo motorickému čtení než k tyflopedickému čtení orientace.",
          "Spíše k tyflopedickému čtení orientace než k somatopedickému nebo motorickému čtení.",
          "Spíše k PAS čtení reciprocity než k motorickému čtení.",
          "Spíše k surdopedickému čtení hluku než k motorickému čtení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které vyjádření nejlépe rozlišuje tyflopedický a somatopedický rámec?",
        "options": [
          "Tyflopedie řeší hlavně polohu a přesun těla, somatopedie hlavně osvětlení a kontrast textu.",
          "Tyflopedie řeší hlavně přístup k vizuální informaci a orientaci, somatopedie hlavně polohu, přesun a manipulaci.",
          "Tyflopedie řeší hlavně auditivní vstup a hluk, somatopedie hlavně tvorbu hlásek a artikulaci, a to v uvedeném rámci.",
          "Tyflopedie řeší hlavně pravidla chování a sociální normy, somatopedie hlavně reciprocitu."
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
      "distributionTarget": "13/13/12/12 bez rytmického vzorce",
      "distributionBalanced": true,
      "styleParity": {
        "correctUniquelyLongestCount": 0,
        "correctLongestTieCount": 5,
        "note": "Správná odpověď není unikátně nejdelší v žádné položce."
      }
    }
  },
  {
    "id": 3,
    "label": "Baterie 3",
    "title": "Intervence, metody práce a podpůrné postupy – tvrdá diferenciace",
    "subtitle": "Reedukace, kompenzace, AAK, přístupnost, forma výkonu a funkční volba podpory bez návodného klíče.",
    "purpose": "Ověřit, zda uchazeč přesně rozliší typ intervence, umí z hlavní bariéry vyvodit nejvhodnější podporu a nenechá se svést obecně správně znějící, ale funkčně nepřesnou možností.",
    "difficulty": "velmi vysoká",
    "dominant": [
      "reedukace vs kompenzace",
      "AAK a komunikační přístupnost",
      "zraková a sluchová dostupnost informací",
      "PAS: struktura, přechody a regulace",
      "somatopedie a forma výkonu",
      "hodnocení: forma vs konstrukt",
      "funkční volba pomůcek a asistivních technologií",
      "evaluace účinku podpory"
    ],
    "breakdown": [
      "10× přesná rozlišení intervenčních rámců a metod",
      "10× AAK, komunikátory a komunikační přístupnost",
      "10× zraková a sluchová přístupnost úkolu a výkladu",
      "8× forma výkonu, hodnocení a ochrana konstruktu úkolu",
      "6× PAS, exekutivní obtíže a regulace prostředí",
      "6× obecné principy funkční volby podpory a evaluace účinku"
    ],
    "tags": [
      "intervence",
      "reedukace",
      "kompenzace",
      "AAK",
      "přístupnost",
      "hodnocení",
      "hard mode",
      "UPOL"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Které vymezení nejpřesněji odpovídá reedukaci?",
        "options": [
          "Cílený nácvik oslabené funkce s ověřováním, zda se výkon skutečně zlepšuje.",
          "Využití jiné cesty k výsledku bez očekávání přímého posílení oslabené funkce.",
          "Soubor zdravotnických výkonů zaměřených hlavně na léčbu základní diagnózy.",
          "Obecné zjednodušení úkolu, aby byl pro žáka méně zatěžující. v tomto pojetí."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Které vymezení nejpřesněji odpovídá kompenzaci?",
        "options": [
          "Postupné odstraňování bariéry intenzivním procvičováním oslabené funkce až do její normalizace. v tomto pojetí.",
          "Jednorázové snížení náročnosti úkolu bez vztahu k tomu, co bariéru skutečně způsobuje. v dané situaci. podle tohoto přístupu.",
          "Využití náhradní strategie, pomůcky nebo jiného kanálu tak, aby bylo možné dosáhnout cíle i přes trvající bariéru.",
          "Převedení podpory výhradně do zdravotnické péče mimo vzdělávací situace. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 3,
        "text": "V jaké situaci je těžiště podpory spíše kompenzační než reedukační?",
        "options": [
          "Žák chybuje v násobilce a potřebuje postupný nácvik početních spojů. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Žák rozumí obsahu, ale kvůli závažné zrakové bariéře potřebuje zvětšení, kontrast nebo audio přístup k textu.",
          "Žák má oslabené fonologické uvědomování a potřebuje systematický rozvoj této dovednosti. v tomto typu úkolu.",
          "Žák si osvojuje nové grafomotorické tahy a potřebuje přesný model a opakování. bez dalšího rozlišení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 4,
        "text": "Žák rozumí předčítanému textu, ale selhává u hustě vysázené stránky s drobným písmem. Které opatření míří nejpřesněji na bariéru?",
        "options": [
          "Intenzivní nácvik mluvnice, protože potíž je zjevně jazyková. v tomto pojetí. v dané situaci.",
          "Snížení obsahových nároků, protože čtení je pro žáka příliš složité. podle tohoto přístupu.",
          "Zákaz předčítání, aby bylo jasné, co žák zvládne bez jakékoli podpory. v tomto typu úkolu. bez dalšího rozlišení.",
          "Úprava vizuální podoby textu a způsobu jeho zpřístupnění, ne automatický závěr o slabém porozumění."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Při zjišťování znalostí z dějepisu u žáka se závažnou dysgrafií je nejpřesnější postup:",
        "options": [
          "Trvat na ručním zápisu, protože změna formy by vždy znehodnotila srovnatelnost výsledku.",
          "Zachovat obsahový cíl a upravit formu odpovědi tak, aby rukopis nebyl hlavní bariérou výkonu.",
          "Snížit množství učiva, protože dysgrafie znamená i nižší porozumění obsahu. v tomto pojetí.",
          "Hodnotit hlavně estetiku zápisu, protože ta nejlépe ukáže úroveň zvládnutí látky. v dané situaci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 6,
        "text": "U žáka bez funkční mluvené řeči, který spolehlivě rozlišuje symboly a volí mezi nimi, je nejvhodnější těžiště podpory:",
        "options": [
          "Zavést a systematicky rozvíjet multimodální AAK napříč výukou i běžnými situacemi.",
          "Čekat, zda se spontánně nerozvine mluvená řeč bez jiné komunikační podpory.",
          "Omezit komunikaci jen na jednoduché pokyny, aby se žák komunikačně nepřetěžoval.",
          "Soustředit se výhradně na motorický trénink ruky a komunikaci odložit. v tomto pojetí."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 7,
        "text": "Které tvrzení o AAK je nejpřesnější?",
        "options": [
          "AAK je vhodná jen tehdy, když je jisté, že se mluvená řeč už nikdy nerozvine. v tomto pojetí. v dané situaci.",
          "AAK slouží hlavně ke zjednodušení výuky pro dospělé kolem dítěte. podle tohoto přístupu. v tomto typu úkolu.",
          "AAK není jen náhradou řeči; je to prostředek funkčního porozumění a vyjadřování podle potřeb konkrétního uživatele.",
          "AAK vždy nahrazuje všechny ostatní komunikační kanály jedním univerzálním systémem. bez dalšího rozlišení. v daném rámci práce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Co je při zavádění komunikátoru nejdůležitější?",
        "options": [
          "Aby pomůcka byla funkčně použitelná v reálných situacích a partneři uměli s komunikačním systémem pracovat.",
          "Aby byla technicky co nejsložitější a měla co nejvíce funkcí bez ohledu na rutinu uživatele. v tomto pojetí.",
          "Aby se používala jen v terapii, kde je prostředí nejvíce pod kontrolou. v dané situaci. podle tohoto přístupu.",
          "Aby nahradila všechny jiné způsoby komunikace během jednoho týdne. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 9,
        "text": "Žák s těžkou dysartrií mluví nesrozumitelně, ale rozumí instrukcím a adekvátně reaguje. Který závěr je nejpřesnější?",
        "options": [
          "Srozumitelnost řeči sama nevypovídá přímo o úrovni porozumění ani myšlení.",
          "Nesrozumitelná řeč znamená, že je zřejmě výrazně narušené i porozumění obsahu.",
          "U takového profilu je nejpřesnější nepokládat náročnější otázky, dokud řeč nebude čistší.",
          "Při nesrozumitelné řeči je nejbezpečnější vycházet z toho, že žák nerozumí složitějším instrukcím."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "U nedoslýchavého žáka při frontálním výkladu míří nejpřesněji k bariéře:",
        "options": [
          "Dodání hotových poznámek po hodině bez úpravy živé komunikace během výuky. v tomto pojetí.",
          "Zlepšení akustických a vizuálních podmínek komunikace a zajištění dostupného průběžného vstupu.",
          "Přesun všech úkolů na domácí samostudium, protože výklad je pro žáka vždy nevhodný. v dané situaci.",
          "Požadavek, aby si žák vždy domyslel chybějící části sdělení z kontextu. podle tohoto přístupu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Který postup řeší u žáka se sluchovým postižením spíše následek než hlavní bariéru?",
        "options": [
          "Upravit podmínky tak, aby žák měl co nejlepší přístup k mluvenému sdělení během vyučování.",
          "Spoléhat hlavně na doplnění zápisu po hodině místo dostupné komunikace v průběhu výuky.",
          "Průběžně ověřovat porozumění důležitým informacím a přechodům mezi činnostmi.",
          "Pracovat s takovým uspořádáním třídy, které usnadní vizuální sledování komunikace."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 12,
        "text": "Při práci s diagramem u nevidomého žáka je nejvhodnější:",
        "options": [
          "Volit taktilní nebo jinak nehledové zpřístupnění informace místo prostého odkazu na vizuální schéma.",
          "Nechat schéma beze změny a očekávat, že slovní doplnění během práce bude stačit. v tomto pojetí.",
          "Úkol vyřadit, protože graficky podaná informace nemůže být nikdy přístupná. v dané situaci. podle tohoto přístupu.",
          "Snížit obsahovou náročnost úkolu bez ohledu na to, zda jde informaci zpřístupnit jinou cestou."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 13,
        "text": "U žáka se zbytky zraku a výraznou vizuální unavitelností bývá nejpřesnější první krok:",
        "options": [
          "Ponechat materiály stejné a prodlužovat čas bez dalších úprav vizuální podoby.",
          "Převést všechny úkoly automaticky do Braillova písma bez ověření skutečného funkčního profilu.",
          "Upravit kontrast, velikost, hustotu a rozvržení materiálu podle funkčního vidění žáka.",
          "Vyřadit práci s textem, protože zraková unavitelnost znamená nemožnost číst."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 14,
        "text": "Co nejlépe vystihuje strukturování úkolu u žáka s PAS?",
        "options": [
          "Zpřehlednit sled kroků, očekávaný výstup a podmínky práce tak, aby byla situace čitelná a předvídatelná.",
          "Přidat co nejvíce verbálních vysvětlení najednou, aby měl žák dost podnětů ke zpracování. v tomto pojetí.",
          "Střídat pravidla podle momentální situace, aby se žák učil flexibilitě bez opory. v dané situaci.",
          "Vyhýbat se vizuální opoře, protože by na ní mohl být závislý. podle tohoto přístupu. v tomto typu úkolu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 15,
        "text": "Při náročných přechodech mezi činnostmi u žáka s PAS mívá nejvyšší oporu:",
        "options": [
          "Okamžité ukončení činnosti bez přípravy, aby si žák postupně zvykl na změny. v tomto pojetí.",
          "Ponechání zcela otevřeného času, aby si žák mohl změnu odhadnout sám. v dané situaci. podle tohoto přístupu.",
          "Předvídatelné oznámení změny a jasný přechodový rámec, ne improvizované přerušení bez signálu.",
          "Nahrazení všech přechodů slovní improvizací bez stálých orientačních opor. v tomto typu úkolu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Žák se při hluku rychle přetíží a přestává spolupracovat. Který další krok je nejpřesnější?",
        "options": [
          "Upravit senzorickou a organizační zátěž prostředí a sledovat, zda se tím mění průběh výkonu.",
          "Vyložit situaci hlavně jako neochotu plnit pokyny a zvýšit tlak na okamžitou poslušnost.",
          "Přidat další podněty, aby si žák na hluk a změť vjemů postupně zvykl bez podpory. v tomto pojetí.",
          "Zcela rezignovat na náročnější činnosti, protože přetížení vždy znemožní učení. v dané situaci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 17,
        "text": "U tělesného postižení a rychlé únavy ruky při psaní je nejpřesnější:",
        "options": [
          "Zachovat stejný objem ručního psaní, protože jen tak lze výkon spravedlivě porovnat. v tomto pojetí.",
          "Snížit automaticky všechny obsahové požadavky, protože motorická únava znamená i nižší porozumění.",
          "Přesunout veškeré psaní na domácí přípravu bez úprav práce ve škole. v dané situaci. podle tohoto přístupu.",
          "Řešit ergonomii, délku zápisu a alternativní formu záznamu místo prostého tlaku na tempo ručního psaní."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 18,
        "text": "Který postup je při volbě podpory nejméně funkční?",
        "options": [
          "Vyjít z toho, kde přesně vzniká bariéra v konkrétním úkolu a situaci. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Vybrat podporu hlavně podle názvu diagnózy a předpokládat, že u všech žáků se stejným označením bude fungovat stejně.",
          "Porovnat, zda zvolená podpora mění přístup k úkolu, nebo už mění i jeho cíl. v tomto typu úkolu. bez dalšího rozlišení.",
          "Ověřovat po zavedení podpory, zda skutečně zlepšuje výkon a participaci. v daném rámci práce. v tomto pojetí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Které rozlišení reedukace a kompenzace je nejpřesnější?",
        "options": [
          "Reedukace i kompenzace znamenají totéž; rozdíl je jen v délce trvání podpory. v tomto pojetí. v dané situaci.",
          "Reedukace vždy patří do zdravotnictví a kompenzace výhradně do školy. podle tohoto přístupu. v tomto typu úkolu.",
          "Kompenzace je vhodná jen dočasně a reedukace jen u dospělých klientů. bez dalšího rozlišení. v daném rámci práce.",
          "Reedukace směřuje k rozvoji oslabené funkce, kompenzace k dosažení cíle jinou cestou navzdory trvající bariéře."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 20,
        "text": "Kdy je prodloužený čas metodicky nejlépe odůvodněn?",
        "options": [
          "Když chce škola zmírnit stres ze zkoušení bez vazby na konkrétní bariéru v úkolu. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Když časový tlak zkresluje výsledek kvůli bariéře ve formě výkonu nebo přístupu, ne kvůli samotnému neznalostnímu deficitu.",
          "Když je cílem nahradit systematickou podporu jednorázovou výhodou u testu. v tomto typu úkolu. bez dalšího rozlišení.",
          "Když chce učitel vyrovnat rozdíly ve motivaci mezi žáky. v daném rámci práce. v tomto pojetí. v dané situaci. podle tohoto přístupu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 21,
        "text": "Které hodnocení je nejpřesnější u žáka s NKS, pokud cílem úkolu není artikulační výkon?",
        "options": [
          "Snížit známku vždy, když je řeč méně srozumitelná, bez ohledu na obsah. v tomto pojetí. v dané situaci.",
          "Vyhnout se úplně ústním odpovědím, protože obsah z nich nelze nikdy spolehlivě zjistit. podle tohoto přístupu.",
          "Posuzovat především obsah odpovědi a nenechat artikulační obtíž automaticky zastínit věcnou správnost.",
          "Považovat artikulační obtíž automaticky za důkaz slabého porozumění tématu. v tomto typu úkolu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 22,
        "text": "Kdy je vhodné změnit formu odpovědi, nikoli cíl úkolu?",
        "options": [
          "Když chceme žáka odměnit za snahu bez ohledu na to, co úkol sleduje. v tomto pojetí. v dané situaci.",
          "Když je jednodušší změnit požadovaný obsah než hledat přístupnou formu výkonu. podle tohoto přístupu.",
          "Když má učitel dojem, že alternativní forma je vždy lehčí než původní zadání. v tomto typu úkolu.",
          "Když bariéra leží ve způsobu projevu či záznamu, ale cíl úkolu zůstává stejný."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 23,
        "text": "U žáka s kombinovaným postižením bývá první intervenční prioritou často:",
        "options": [
          "Oddálit podporu, dokud nebude přesně popsána každá jednotlivá diagnóza zvlášť. v tomto pojetí. v dané situaci.",
          "Zajistit spolehlivý přístupový a komunikační kanál, bez nějž nelze dobře ověřovat ani rozvíjet další oblasti.",
          "Začít výhradně nácvikem školních znalostí a komunikační bariéru řešit až později. podle tohoto přístupu.",
          "Preferovat vždy motorický trénink, protože bývá nápadný na první pohled. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 24,
        "text": "Co nejlépe vystihuje funkční volbu pomůcky?",
        "options": [
          "Pomůcka má být co nejpokročilejší, i když ji uživatel v běžném režimu nepoužívá. v tomto pojetí.",
          "Pomůcka má být stejná pro všechny žáky se stejnou diagnózou kvůli jednotnosti postupu.",
          "Pomůcka má odpovídat tomu, co má uživatel v konkrétním prostředí a úkolu skutečně zvládnout.",
          "Pomůcka má nahrazovat práci dospělých, aby nebylo nutné měnit prostředí nebo instrukce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 25,
        "text": "Kdy má AAK největší efekt?",
        "options": [
          "Když je používána napříč aktivitami a komunikační partneři s ní pracují konzistentně, ne jen občasně v terapii.",
          "Když je vyhrazena jen pro krizové situace a běžná komunikace se odkládá. v tomto pojetí. v dané situaci.",
          "Když je omezena na jednu místnost, aby se systém zbytečně nerozšiřoval. podle tohoto přístupu. v tomto typu úkolu.",
          "Když ji používá pouze odborník a ostatní komunikující se přizpůsobit nemusí. bez dalšího rozlišení. v daném rámci práce."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Co je slabinou přístupu „stačí pořídit pomůcku“?",
        "options": [
          "Pomůcka sama o sobě obvykle automaticky vyřeší i všechny procesní a vztahové bariéry. v tomto pojetí.",
          "Jakmile je pomůcka pořízena, není už vhodné měnit způsob instrukcí ani organizaci práce. v dané situaci.",
          "Při zavedení pomůcky je nejlepší vyčkat bez další podpory, aby si žák zvykl sám. podle tohoto přístupu.",
          "Bez nácviku používání, úprav prostředí a komunikační podpory bývá efekt pomůcky omezený nebo krátkodobý."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 27,
        "text": "Žák řeší úlohy správně ústně, ale ztrácí se v přehuštěném pracovním listu. Které opatření míří nejpřesněji na bariéru?",
        "options": [
          "Zpřehlednit grafickou podobu zadání a organizaci stránky, protože problém leží v přístupu k vizuálně podané informaci.",
          "Převést všechny úlohy na jednodušší obsah, protože výkon ukazuje na slabé matematické myšlení. v tomto pojetí.",
          "Zakázat ústní řešení, aby se posílila samostatnost bez kompenzace. v dané situaci. podle tohoto přístupu. v tomto typu úkolu.",
          "Nechat pracovní list beze změny a prodloužit pouze čas bez úpravy vizuálního vstupu. bez dalšího rozlišení. v daném rámci práce."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 28,
        "text": "Žák se spasticitou dokáže úkol vyřešit, ale rukopis je extrémně pomalý. Které čtení je nejpřesnější?",
        "options": [
          "Pomalý rukopis spolehlivě ukazuje nízkou úroveň vědomostí v daném předmětu. v tomto pojetí.",
          "Spasticita u psaní znamená, že je vhodné vzdát se všech náročnějších úloh. v dané situaci.",
          "U takového výkonu je nejpřesnější hodnotit hlavně rychlost zápisu, protože je objektivní.",
          "Bariéra leží ve formě motorického výstupu, ne nutně ve znalosti úkolu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Který postup má kompenzační charakter?",
        "options": [
          "Systematický nácvik fonologického uvědomování u oslabeného čtenáře. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Postupné procvičování jemnomotorických tahů při psaní. v tomto typu úkolu. bez dalšího rozlišení. v daném rámci práce.",
          "Použití předčítání nebo převodu textu do audio podoby tam, kde cílem není samostatné dekódování tiskového textu.",
          "Cvičení orientace v řazení kroků při plánování úkolu. v tomto pojetí. v dané situaci. podle tohoto přístupu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 30,
        "text": "Který postup má reedukační charakter?",
        "options": [
          "Nahrazení bariéry pomůckou bez očekávání přímého posílení oslabené funkce. v tomto pojetí.",
          "Systematický nácvik oslabené dovednosti s gradovanou obtížností a zpětnou vazbou k výkonu.",
          "Jednorázové snížení požadavku, aby byl úkol rychle splnitelný. v dané situaci. podle tohoto přístupu.",
          "Přesun podpory pouze na členy rodiny bez práce se samotnou dovedností. v tomto typu úkolu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Co je nejpřesnější další krok, když zvolená podpora nevede k zamýšlenému efektu?",
        "options": [
          "Držet stejnou podporu co nejdéle bez ohledu na výsledek, aby se předešlo změnám. v tomto pojetí.",
          "Podporu úplně zrušit, protože neúčinnost prvního kroku znamená neřešitelný problém. v dané situaci.",
          "Znovu vyhodnotit, kde přesně bariéra vzniká, a upravit podporu podle skutečného dopadu v praxi.",
          "Přidat náhodně další opatření bez ověření, co z původní podpory fungovalo a co ne. podle tohoto přístupu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "U žáka s exekutivními obtížemi je nejfunkčnější:",
        "options": [
          "Rozdělit úkol do kroků a jasně vymezit, co je teď cílem a co následuje.",
          "Nechat instrukce co nejotevřenější, aby si žák musel plán vytvořit bez vnější opory.",
          "Předkládat více neukotvených úkolů najednou, aby si žák zvykl na vyšší kognitivní tlak.",
          "Vynechat průběžnou zpětnou vazbu, protože by narušovala samostatnost. v tomto pojetí."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 33,
        "text": "Který postup nejlépe reaguje na senzorické přetížení?",
        "options": [
          "Ponechat zátěž beze změny, aby si žák na podněty postupně zvykl bez opor. v tomto pojetí. v dané situaci.",
          "Vykládat přetížení hlavně jako záměrné vyhýbání se práci a přidat tlak na výkon. podle tohoto přístupu.",
          "Pracovat s množstvím podnětů, předvídatelností a možnostmi regulace, ne jen s výzvou „musíš to vydržet“.",
          "Úplně odstranit všechny nároky, protože přetížení vylučuje jakýkoli rozvoj. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 34,
        "text": "Které tvrzení o odezírání je nejpřesnější?",
        "options": [
          "Odezírání je plnohodnotnou náhradou dostupné komunikace ve všech školních situacích.",
          "Odezírání může pomoci, ale samo o sobě nezajišťuje plný a spolehlivý přístup ke všemu sdělení.",
          "Jakmile žák odezírá, není třeba řešit akustické ani vizuální podmínky výuky.",
          "Odezírání funguje stejně spolehlivě bez ohledu na tempo řeči, osvětlení a uspořádání prostoru."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Které řešení je nejvhodnější při práci s mapou u nevidomého žáka?",
        "options": [
          "Nechat běžnou barevnou mapu a předpokládat, že si žák vše doplní z krátké nápovědy.",
          "Mapa se má z výuky vždy vyřadit, protože je nevyhnutelně vizuální. v tomto pojetí.",
          "Stačí říct finální správnou odpověď bez práce s prostorovou reprezentací. v dané situaci.",
          "Zvolit taktilní mapu nebo systematický slovní popis prostorových vztahů podle cíle úkolu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 36,
        "text": "U závažných grafomotorických obtíží je funkční:",
        "options": [
          "Hodnotit primárně rychlost a úhlednost zápisu i v úkolech zaměřených na obsah. v tomto pojetí.",
          "Zrušit všechny písemné činnosti bez rozlišení, co je cílem daného úkolu. v dané situaci.",
          "Umožnit takový způsob záznamu, který nebrání projevit obsah, pokud rukopis není cílem úkolu.",
          "Trvat na identické podobě výkonu za každou cenu, protože jen ta je spravedlivá. podle tohoto přístupu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 37,
        "text": "Který princip je chybou při plánování intervence?",
        "options": [
          "Sledovat, co v konkrétním prostředí bariéru zesiluje a co ji naopak tlumí. v tomto pojetí. v dané situaci.",
          "Porovnat, zda zvolený postup cílí na přístup, dovednost, regulaci nebo formu výkonu. podle tohoto přístupu.",
          "Po zavedení podpory ověřit, zda se mění skutečná participace a ne jen dojem z práce. v tomto typu úkolu.",
          "Přenést postup z jiného žáka jen podle diagnózy, bez ověření funkční podobnosti situace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 38,
        "text": "Co nejlépe vystihuje volbu asistivní technologie?",
        "options": [
          "Nejlepší je vždy nejkomplexnější zařízení, protože nabízí nejvíce funkcí. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Jednodušší a spolehlivě používané řešení může být funkčně vhodnější než technicky vyspělejší, ale nepoužívané zařízení.",
          "Technologie se vybírá hlavně podle ceny a prestiže, ne podle každodenní použitelnosti. v tomto typu úkolu. bez dalšího rozlišení.",
          "Jakmile je zařízení moderní, není třeba řešit nácvik a zapojení do běžného režimu. v daném rámci práce. v tomto pojetí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "U vývojové jazykové poruchy je intervenční těžiště nejpřesněji:",
        "options": [
          "V systematickém rozvoji porozumění a jazykové produkce, ne jen v mechanickém opakování bez vazby na funkční komunikaci.",
          "V čekání, až se jazyk upraví spontánně při běžném zrání bez cílené podpory. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "V trvalém přesunu komunikace na druhé osoby bez podpory vlastního vyjadřování klienta. v tomto typu úkolu. bez dalšího rozlišení.",
          "V posuzování jazykových potíží výhradně podle výslovnosti jednotlivých hlásek. v daném rámci práce. v tomto pojetí."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 40,
        "text": "Které opatření mění hlavně přístup k zadání, ne vzdělávací cíl?",
        "options": [
          "Nahrazení všech náročnějších pojmů jednoduššími bez ohledu na cíl výuky. v tomto pojetí.",
          "Vynechání celé části učiva, kterou ostatní žáci plní. v dané situaci. podle tohoto přístupu.",
          "Snížení požadované úrovně porozumění, aby byl výkon rychlejší. v tomto typu úkolu.",
          "Zvětšení písma, úprava kontrastu nebo jiná přístupná forma prezentace téhož obsahu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "U žáka využívajícího český znakový jazyk je ve výuce nejdůležitější:",
        "options": [
          "Mluvit co nejrychleji, aby se tempo výuky nelišilo od běžné třídy. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Zajistit vizuálně dostupnou komunikaci a organizovat situaci tak, aby mohl sledovat sdělení bez zbytečných bariér.",
          "Střídat zdroje sdělení bez upozornění, aby se žák cvičil v pohotové orientaci. v tomto typu úkolu. bez dalšího rozlišení.",
          "Předpokládat, že psaný zápis vždy plně nahradí průběžnou komunikaci během hodiny. v daném rámci práce. v tomto pojetí."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 42,
        "text": "Co nejpřesněji vystihuje pedagogickou intervenci?",
        "options": [
          "Cílenou podporu dovedností a strategií spojených s edukací, která navazuje na konkrétní potřebu ve vzdělávání.",
          "Jednorázové zjednodušení práce bez vztahu k tomu, co má žák dlouhodobě rozvíjet. v tomto pojetí. v dané situaci.",
          "Obecné uklidnění před výkonem bez vazby na učební cíl nebo bariéru. podle tohoto přístupu. v tomto typu úkolu.",
          "Přesun odpovědnosti za učení výhradně na rodinu mimo školní prostředí. bez dalšího rozlišení. v daném rámci práce."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 43,
        "text": "Které tvrzení o multisenzorické podpoře je nejpřesnější?",
        "options": [
          "Čím více současných podnětů, tím automaticky kvalitnější podpora v každé situaci. v tomto pojetí. v dané situaci.",
          "Více modalit dává smysl tehdy, když zvyšují čitelnost úkolu; samo množství podnětů ještě neznamená lepší podporu.",
          "Multisenzorická podpora je vhodná jen u dětí bez jakéhokoli znevýhodnění. podle tohoto přístupu. v tomto typu úkolu.",
          "Použití více modalit vždy nahrazuje potřebu strukturovat instrukci. bez dalšího rozlišení. v daném rámci práce."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 44,
        "text": "Jaká otázka má při volbě podpory přijít jako první?",
        "options": [
          "Co přesně v této situaci a v tomto úkolu tvoří hlavní bariéru výkonu nebo participace?",
          "Které opatření zní nejodborněji a bude působit nejsilnějším dojmem na okolí. v tomto pojetí.",
          "Jak zařídit, aby podpora vyžadovala co nejméně změn ve výuce bez ohledu na efekt.",
          "Jak rychle převzít řešení z jiného případu se stejnou diagnózou. v dané situaci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 45,
        "text": "Kdy má smysl volba odpovědi pohledem nebo systémem ano/ne?",
        "options": [
          "Jen tehdy, když uživatel zvládne plnou mluvenou řeč, jinak by systém neměl význam. v tomto pojetí. v dané situaci. podle tohoto přístupu.",
          "Pouze jako nouzové řešení bez možnosti použít ho při učení nebo rozhodování. v tomto typu úkolu. bez dalšího rozlišení.",
          "Tehdy, když chceme urychlit testování bez ohledu na to, zda je tento kanál pro člověka stabilní. v daném rámci práce. v tomto pojetí.",
          "Když jde o spolehlivý a ověřený způsob volního vyjádření u člověka, jehož hlavní bariéra leží v motorické nebo řečové produkci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 46,
        "text": "Který postup už mění konstrukt hodnocení, ne jen formu výkonu?",
        "options": [
          "Umožnit místo ručního zápisu odpověď na klávesnici, pokud cíl úkolu zůstává stejný. v tomto pojetí.",
          "Snížit náročnost samotného požadovaného obsahu tam, kde cílem bylo původně ověřit plný věcný rozsah učiva.",
          "Předložit zadání v přístupnější vizuální podobě bez změny toho, co se ověřuje. v dané situaci. podle tohoto přístupu.",
          "Prodlužit čas tam, kde bariéra leží v přístupu nebo formě výkonu. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "U čtenářského úkolu je vhodné oddělit dekódování od porozumění tehdy, když:",
        "options": [
          "Chceme žákovi úplně odstranit kontakt s textem bez ohledu na cíl diagnostiky nebo podpory.",
          "Potřebujeme urychlit hodnocení a nezajímá nás, kde přesně problém vzniká. v tomto pojetí.",
          "Potřebujeme zjistit, zda bariéra leží v samotném čtení textu, nebo až v práci s významem obsahu.",
          "Považujeme dekódování a porozumění za totožný proces, který nelze smysluplně rozlišit. v dané situaci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Co je předpoklad účinné jemnomotorické práce u žáka s posturální nestabilitou?",
        "options": [
          "Začít co nejjemnějšími úkoly bez řešení polohy, aby si žák postupně zvykl. v tomto pojetí. v dané situaci.",
          "Soustředit se pouze na rychlost úchopu a posturu považovat za vedlejší. podle tohoto přístupu. v tomto typu úkolu.",
          "Nejprve prodloužit čas a ostatní podmínky ponechat beze změny. bez dalšího rozlišení. v daném rámci práce.",
          "Stabilní poloha a vhodné nastavení těla a pomůcek, teprve na tomto základě lze dobře chtít přesný výkon ruky."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Který postup je při zavádění náročné elektronické AAK nejpřesnější?",
        "options": [
          "Nasadit co nejširší slovník hned na začátku a trvat na plném využití bez podpory okolí. v tomto pojetí.",
          "Omezit zařízení jen na jednu izolovanou aktivitu, aby se zabránilo záměně významů. v dané situaci. podle tohoto přístupu.",
          "Postupovat od funkčně zvládnutelného nastavení, ověřovat užívání v běžných situacích a systém průběžně ladit.",
          "Vyčkat s používáním do doby, než bude systém technicky zcela dokonalý. v tomto typu úkolu. bez dalšího rozlišení."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 50,
        "text": "Který princip nejlépe vystihuje kvalitní intervenci napříč oblastmi?",
        "options": [
          "Podpora má působit co nejodborněji, i když není zřejmé, jak se projeví v běžném fungování. v tomto pojetí.",
          "Podpora má být stejná pro všechny podobné případy, aby byla metodicky čistá. v dané situaci. podle tohoto přístupu.",
          "Podpora je kvalitní tehdy, když se po jejím zavedení už nikdy neupravuje. v tomto typu úkolu. bez dalšího rozlišení.",
          "Podpora má být funkčně odůvodněná, ověřitelná v praxi a navázaná na skutečnou bariéru konkrétního člověka."
        ],
        "correct": 3,
        "correctLetter": "D"
      }
    ],
    "validation": {
      "answerDistribution": {
        "A": 13,
        "C": 12,
        "B": 13,
        "D": 12
      },
      "distributionTarget": "13/13/12/12",
      "distributionBalanced": true,
      "distractorAudit": {
        "strictLongestCorrectCount": 0,
        "strictShortestCorrectCount": 8,
        "averageOptionLengthSpread": 13.12,
        "maxOptionLengthSpread": 24
      }
    }
  },
  {
    "id": 4,
    "label": "Baterie 4",
    "title": "Komunikace jako profesní kompetence – tvrdá diferenciace",
    "subtitle": "Přístupnost sdělení, AAK, aktivní naslouchání, týmová a rodičovská komunikace bez návodného klíče.",
    "purpose": "Ověřit, zda uchazeč rozliší mezi obecně přijatelným a profesně přesným komunikačním postupem v kontaktu s klientem, rodinou, školou i týmem; těžiště leží v přístupnosti sdělení, práci s porozuměním, AAK, hranicích rolí a v komunikačních krocích, které mají skutečný dopad na podporu.",
    "difficulty": "velmi vysoká",
    "dominant": [
      "aktivní naslouchání a průběžné shrnování",
      "AAK, komunikátory a funkční komunikace",
      "přístupnost sdělení u PAS, sluchového a zrakového postižení",
      "komunikace s rodinou v plain language",
      "zpětná vazba učiteli a týmová komunikace",
      "hranice rolí, citlivý obsah a realistické nastavování očekávání",
      "deeskalace a komunikace při vysoké zátěži",
      "ověřování porozumění a akční uzavírání rozhovoru"
    ],
    "breakdown": [
      "10× přesné rozlišení komunikační techniky a formulace",
      "8× AAK, tlumočení a funkční komunikace",
      "8× komunikace s rodinou a srozumitelnost odborného sdělení",
      "8× škola, učitel a implementace podpory v komunikaci",
      "8× tým, role, hranice a dokumentace",
      "8× deeskalace, citlivé sdělování a ověřování porozumění"
    ],
    "tags": [
      "hard mode",
      "komunikace",
      "poradenství",
      "AAK",
      "škola a rodina",
      "tým a role",
      "UPOL"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "U žáka s PAS je potřeba oznámit změnu běžného postupu. Která formulace je komunikačně nejpřesnější?",
        "options": [
          "Nejprve stručně pojmenuje změnu, potom řekne konkrétní sled kroků a nakonec ověří, zda žák ví, co bude následovat.",
          "Změnu oznámí co nejkratší větou a další průběh nechá vyplynout z toho, jak se situace vyvine, a spoléhá na to, že to bude stačit.",
          "Změnu představí až ve chvíli, kdy nastane, aby žák nebyl předem zbytečně ve stresu.",
          "Změnu vysvětlí hlavně obecnou větou, že v životě bývá potřeba improvizovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Která reakce nejlépe odpovídá reflektivnímu naslouchání v poradenském rozhovoru?",
        "options": [
          "„Dobře, tomu rozumím, teď už ale pojďme rychle k řešení.“",
          "„Jestli vám rozumím správně, nejvíc vás vyčerpávají ranní přechody a nejistota, co se ve škole ten den stane.“",
          "„Tohle rodiče říkají často, bývá to u těchto obtíží obvyklé.“",
          "„Kdybyste nastavili pevnější režim doma, nejspíš by se to rychle upravilo a nemuseli bychom se u toho déle zůstávat.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Které tvrzení o AAK je ve školní a poradenské komunikaci nejpřesnější?",
        "options": [
          "AAK je vhodná hlavně tehdy, když už bylo definitivně prokázáno, že se řeč nikdy nerozvine.",
          "AAK má smysl spíše mimo školu, protože ve výuce dítě odvádí od přirozené komunikace.",
          "AAK může komunikaci doplňovat nebo nahrazovat; jejím cílem je funkční dorozumění, ne čekání na „dost dobrou řeč“.",
          "AAK je přechodná nouzová pomůcka, kterou je vhodné používat co nejméně, aby si dítě nezvyklo, a další upřesnění už nepřidává."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Při rozhovoru s adolescentem, který přišel s rodičem, je profesně nejvhodnější začít tak, že speciální pedagog",
        "options": [
          "vede hlavní část rozhovoru jen s rodičem, protože ten je za situaci odpovědný a zná ji lépe.",
          "nejprve získá co nejvíc informací od rodiče a adolescenta zapojí až na závěr, aby nebrzdil průběh.",
          "ponechá rozhodnutí, zda adolescent promluví, výhradně na rodiči, protože ten nejlépe odhadne jeho možnosti, protože takový postup pokládá za dostačující.",
          "osloví i samotného adolescenta, stručně vyjasní cíl setkání a průběžně drží prostor jak pro něj, tak pro rodiče."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Klient používá komunikační zařízení s hlasovým výstupem. Který postup je profesně nejvhodnější?",
        "options": [
          "Dává klientovi čas dokončit sdělení přes zařízení a průběžně komunikuje přímo s ním, ne s doprovodem.",
          "Po několika sekundách nabídne, že větu rychle dopoví za klienta, aby rozhovor neztratil tempo.",
          "Většinu dotazů směřuje na doprovod, protože komunikace přes zařízení bývá pro odborný rozhovor nepraktická.",
          "Požádá klienta, aby zařízení používal jen na klíčová slova a zbytek vysvětlil doprovod."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Která formulace nejlépe odpovídá profesně použitelné zpětné vazbě učiteli?",
        "options": [
          "„Myslím, že byste měl mluvit trochu citlivěji, to by situaci zřejmě vyřešilo a rozhovor by byl pro žáka přijatelnější i bez další změny struktury zadání.“",
          "„Všiml jsem si, že při delším ústním zadání žák po druhém kroku ztrácí orientaci; pomohlo by členit instrukci na kratší celky.“",
          "„Je vidět, že vaše komunikace žákovi nesedí, chce to zkusit úplně jinak.“",
          "„Největší problém je, že žák vaše pokyny asi dost nerespektuje a bude potřeba na tom trvat důsledněji.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Při vysvětlování závěru rodině s omezenou orientací v odborných termínech je komunikačně nejvhodnější, když odborník",
        "options": [
          "ponechá odborné názvy v původní podobě, aby výklad zůstal terminologicky přesný a jednotný.",
          "vynechá termíny úplně, protože rodině by mohly znít příliš odborně a zbytečně zatěžovat rozhovor, protože tím chce udržet běžné tempo práce.",
          "používá srozumitelný jazyk, klíčové termíny krátce překládá do běžné řeči a ověřuje, co si rodina z vysvětlení odnáší.",
          "pošle na konci schůzky rodině text doporučení a podrobné vysvětlení už při setkání neotevírá."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Které jednání je při komunikaci s neslyšícím klientem a tlumočníkem českého znakového jazyka nejvhodnější?",
        "options": [
          "Směřuje většinu sdělení k tlumočníkovi, protože ten zajišťuje odbornou přesnost překladu.",
          "Klientovi klade jen krátké kontrolní otázky a obsah rozhovoru řeší převážně s tlumočníkem, aby se ušetřil čas, a další upřesnění už nepřidává.",
          "Průběh setkání přizpůsobí tlumočníkovi natolik, že klienta oslovuje jen výjimečně a nepřímo.",
          "Mluví přímo ke klientovi, drží přirozené tempo a tlumočníka chápe jako komunikační most, ne jako hlavního adresáta."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Která otázka je nejvhodnější pro otevření tématu bez předčasného podsunutí interpretace?",
        "options": [
          "„V jakých situacích si obtíží všímáte nejvíc a co v nich bývá nejtěžší?“",
          "„Je to hlavně tím, že dítě nezvládá změny a rychle se zablokuje, takže asi nemá smysl otevírat širší popis situací.“",
          "„Myslíte, že problém vzniká hlavně doma, nebo spíš ve škole?“",
          "„Souhlasíte, že největší potíž je zřejmě v pozornosti?“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Žák se zrakovým postižením pracuje ve třídě s materiálem, který učitel zároveň promítá na tabuli. Který komunikační postup je nejvhodnější?",
        "options": [
          "Zachovat běžný výklad a spolehnout se, že žák si klíčové body doplní z poznámek spolužáka.",
          "Průběžně verbalizovat, co je na tabuli důležité, a zajistit dostupnou podobu obsahu v použitelné formě.",
          "Výklad zkrátit na minimum, aby se žák nemusel orientovat v příliš velkém množství informací, a tím považuje situaci za vyřešenou.",
          "Nechat žáka soustředit jen na slovní komentář a práci s obsahem na tabuli zcela vynechat."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Které shrnutí po poradenském setkání je profesně nejpoužitelnější?",
        "options": [
          "Zrekapituluje hlavně průběh diskuse, aby bylo jasné, jak se k závěru postupně dospělo.",
          "Zakončí setkání obecným ujištěním, že všechny strany vědí, co mají dělat, a další detaily ponechá otevřené.",
          "Shrne hlavní závěr, domluvené kroky, kdo za co odpovídá a kdy se bude ověřovat, zda podpora funguje.",
          "Vystihne především celkovou atmosféru schůzky a poděkuje za spolupráci."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Rodič je během setkání zjevně zahlcený a po delším tichu jen přikyvuje. Co je komunikačně nejvhodnější?",
        "options": [
          "Pokračuje plynule dál, protože přikyvování znamená, že rodič základní informaci zachytil.",
          "Vrátí se k nejdůležitějším pojmům až v závěrečném e-mailu, aby setkání zůstalo časově úsporné, protože tím chce udržet běžné tempo práce.",
          "Zvýší důraz v hlasu a zopakuje hlavní závěr co nejautoritativněji, aby nedošlo k omylu.",
          "Zastaví tempo, pojmenuje zahlcení bez nátlaku a nabídne stručné zrekapitulování nebo prostor pro otázky."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Které tvrzení o ověřování porozumění je v profesní komunikaci nejpřesnější?",
        "options": [
          "Nestačí se zeptat „Je to jasné?“; vhodnější je nechat druhou stranu vlastními slovy popsat, co si odnáší.",
          "Nejlepší ověření porozumění je zopakovat závěr ještě jednou téměř stejnými slovy.",
          "Pokud druhá strana nereaguje odmítavě, lze považovat vysvětlení za dostatečně pochopené, a další upřesnění už nepřidává.",
          "Porozumění se v praxi ověřuje spíše tím, že účastníci podepíší zápis nebo doporučení."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Které vyjádření je nejvhodnější, když učitel popisuje žáka větou „on prostě nechce spolupracovat“?",
        "options": [
          "„Tohle bývá u podobných žáků běžné, hlavní je být důsledný a neustupovat.“",
          "„Pojďme si rozlišit, v jakých konkrétních situacích se to děje a co tomu předchází; pak se snáz určí, co je bariéra a co reakce.“",
          "„Pak bude asi nejvhodnější nastavit přísnější pravidla, aby bylo jasné, co se očekává, a pak důsledně sledovat, zda se tím situace sama upraví.“",
          "„Jestli nechce spolupracovat, je potřeba trvat na tom, aby důsledky pocítil hned.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Při komunikaci se žákem s lehkým mentálním postižením je nejvhodnější formulace pokynu taková, která",
        "options": [
          "ponechává více variant výkladu, aby si žák mohl vybrat způsob porozumění, který mu bude bližší.",
          "obsahuje běžné zkratky a metafory, protože tím působí přirozeněji než příliš jednoduché věty.",
          "je konkrétní, krátká, významově jednoznačná a opřená o jasný krok nebo ukázku.",
          "spojuje více kroků do jedné věty, aby žák od začátku viděl úkol v celku."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Který postup je při mezioborovém setkání komunikačně nejvhodnější?",
        "options": [
          "Usiluje hlavně o co nejrychlejší sjednocení názoru týmu, i kdyby některé části zatím nebyly dost vyjasněné.",
          "Formuluje závěr co nejkomplexněji za celý tým, aby rodina neodcházela s více různými pohledy.",
          "Vstupuje jen minimálně, protože při mezioborovém setkání je lepší nechat hlavní slovo tomu odborníkovi, který mluví nejsuverénněji, a spoléhá na to, že to bude stačit.",
          "Odděluje ověřená pozorování od interpretací, jasně pojmenuje vlastní kompetenci a domluví další kroky bez přebírání role jiného oboru."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Která věta nejlépe odpovídá komunikaci, která neslibuje víc, než může odborník reálně garantovat?",
        "options": [
          "„Můžeme spolu nastavit další kroky a průběžně sledovat, co se mění; nemohu slíbit rychlé vyřešení, ale můžeme postup zpřesňovat.“",
          "„Když budete doporučení přesně dodržovat, je velmi pravděpodobné, že se situace brzy vyřeší a nebude třeba další úprava postupu.“",
          "„Uděláme maximum, aby problém co nejrychleji zmizel, a pak už se k němu nebude třeba vracet.“",
          "„Jestli škola navržené kroky přijme, mělo by to vést k odstranění obtíží.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Při komunikaci se žákem, který odpovídá pomalu a potřebuje delší čas na zpracování sdělení, je nejvhodnější",
        "options": [
          "otázku po několika sekundách přeformulovat, aby nezůstalo ticho a rozhovor nepůsobil zadrženě.",
          "položit otázku, ponechat čas na zpracování a nezahlcovat mezitím prostor dalšími vysvětleními.",
          "rychle nabídnout několik možných odpovědí, aby měl žák snazší orientaci a komunikace se zrychlila.",
          "využívat hlavně uzavřené otázky, protože na ně bývá vždy možné odpovědět bez čekání."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Které vysvětlení nejlépe vystihuje smysl profesního shrnování během rozhovoru, nejen na jeho konci?",
        "options": [
          "Slouží hlavně k tomu, aby odborník ukázal, že situaci už přesně chápe a může vést rozhovor dál bez zdržení, protože takový postup pokládá za dostačující.",
          "Je vhodné spíše až v závěru, protože průběžné shrnování rozhovor zbytečně zpomaluje.",
          "Pomáhá průběžně držet společné porozumění, korigovat odchylky a vracet rozhovor k tomu, co je opravdu podstatné.",
          "Jeho hlavní funkcí je zkrátit čas, který dostane druhá strana na vlastní vyjádření."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Rodič přichází s velmi odlišným výkladem situace než škola. Který komunikační postup je nejvhodnější?",
        "options": [
          "Vybrat rychle tu verzi, která je lépe doložená dokumenty, aby schůzka nezůstala v rovině dvou názorů.",
          "Držet se hlavně školního popisu, protože ten obvykle vzniká z delšího systematického pozorování.",
          "Začít tím, že se obě strany ujistí, že jejich zkušenost je stejnou měrou platná, a dál rozdíly nerozebírat, a tím považuje situaci za vyřešenou.",
          "Nejprve oddělit, co jsou popisy konkrétních situací, a co už interpretace, a teprve pak hledat společný rámec porozumění."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Která formulace je nejvhodnější při sdělení citlivého závěru, který rodina ještě nezpracovala?",
        "options": [
          "„Řeknu nejdřív hlavní závěr jednoduchou větou a pak se můžeme zastavit u toho, co z něj pro vás plyne v běžném fungování.“",
          "„Je důležité, abyste si teď vyslechli celý odborný rámec najednou, jinak si z toho neodnesete úplný obraz celé situace, a spoléhá na to, že to bude stačit“",
          "„Pokusím se to říct co nejpřesněji odborně, protože zjednodušení by mohlo vyznít zavádějícím dojmem.“",
          "„Nejlepší bude nechat si emoce až na konec a nejprve projít všechny formální části závěru.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Který postup je komunikačně nejméně vhodný při práci se žákem, který využívá AAK?",
        "options": [
          "Průběžně modelovat využití dostupných symbolů nebo komunikačních prostředků v přirozené situaci, protože tím chce udržet běžné tempo práce.",
          "Mluvit o žákovi převážně s doprovodem a komunikační prostředek brát jen jako doplněk pro mimořádné situace.",
          "Počítat s tím, že odpověď může mít jiné tempo než mluvená řeč, a dát jí prostor.",
          "Směřovat sdělení k tomu, aby žák mohl co nejvíc vyjádřit vlastní potřebu nebo volbu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Které sdělení je nejvhodnější pro učitele, který chce „rychlý návod, co přesně říkat“ žákovi s obtížemi v porozumění?",
        "options": [
          "Nejlepší je připravit jeden pevný skript, který bude učitel používat beze změny v každé náročnější situaci, a další upřesnění už nepřidává.",
          "Účinnější než upravovat formulace bývá mluvit důrazněji a ověřit, zda žák dává pozor.",
          "Je užitečné domluvit se na několika stabilních typech krátkých a jednoznačných formulací, ne hledat univerzální větu pro každou situaci.",
          "Většinou stačí používat odborně přesné termíny; problém bývá spíš v tom, že žák nechce spolupracovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Které tvrzení nejlépe odpovídá profesní komunikaci s rodinou, která používá češtinu jako druhý jazyk?",
        "options": [
          "Nejpřesnější je zachovat plnou odbornou terminologii a spolehnout se, že dítě rodičům klíčové části doma vysvětlí, protože takový postup pokládá za dostačující.",
          "V praxi stačí předat rodině písemné doporučení; citlivé vysvětlování při schůzce bývá kvůli jazyku málo efektivní.",
          "Je lepší mluvit hlavně s dítětem, protože rodiče by v odborné části stejně nerozuměli všem detailům.",
          "Je vhodné zjednodušit jazyk, opřít se o konkrétní příklady a nevyužívat dítě jako hlavního tlumočníka citlivého obsahu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Při týmovém setkání je potřeba zapsat závěr do stručné poznámky. Která formulace je nejpoužitelnější?",
        "options": [
          "„Při delším ústním zadání žák často ztrácí druhý a další krok; tým se shodl na kratších instrukcích a průběžné kontrole porozumění.“",
          "„Žák je při výuce pasivní a nezvládá pracovat samostatně, proto je potřeba důslednější vedení.“",
          "„Rodina i škola vidí situaci odlišně, ale pravda bude pravděpodobně někde uprostřed.“",
          "„Komunikace se žákem není ideální a bude potřeba s tím něco průběžně dělat, hlavně aby ve třídě bylo víc klidu a méně napětí, a tím považuje situaci za vyřešenou“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Které tvrzení nejlépe vystihuje vztah mezi empatií a profesními hranicemi?",
        "options": [
          "Empatie je v poradenském rozhovoru především způsob, jak dát najevo plný souhlas s pohledem klienta.",
          "Empatie neznamená splývání s prožíváním druhého; má pomáhat porozumět situaci a současně držet odborný rámec rozhovoru.",
          "Nejbezpečnější je empatii spíše tlumit, protože výraznější emoční reakce by mohla narušit odbornost.",
          "Empatie funguje hlavně jako technika zklidnění, zatímco odborný obsah se do rozhovoru vrací až na konci, a spoléhá na to, že to bude stačit."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Při úpravě komunikace pro žáka s PAS je nejméně vhodné spoléhat hlavně na",
        "options": [
          "krátké a předvídatelné formulace, které drží jádro úkolu a průběhu činnosti.",
          "pojmenování změny dopředu a konkrétní popis toho, co bude následovat.",
          "ironie, narážky a nevyřčené sociální významy, které si má žák z kontextu domyslet.",
          "omezení zbytečně víceznačných pokynů a doplnění vizuální nebo jinak stabilní opory."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Který postup nejlépe odpovídá deeskalační komunikaci ve chvíli, kdy je druhá strana silně rozrušená?",
        "options": [
          "Rychle vysvětlit všechny souvislosti, aby bylo zřejmé, že situace má odborné odůvodnění.",
          "Zdůraznit, že emoce jsou sice pochopitelné, ale je potřeba je odložit, protože rozhovor musí zůstat věcný, a další upřesnění už nepřidává.",
          "Posunout komunikaci co nejdříve k podpisu nebo formálnímu výstupu, aby bylo možné setkání uzavřít.",
          "Snížit množství sdělení, mluvit klidně a konkrétně a neotvírat současně více témat nebo argumentačních linií."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Které vyjádření je nejvhodnější při vysvětlování, proč je potřeba další pozorování nebo doplnění informací, než se udělá závěr?",
        "options": [
          "„Máme už důležité indicie, ale pro přesný závěr ještě potřebujeme doplnit, v jakých situacích se obtíže objevují a jak stabilní jsou.“",
          "„Bez dalších dat zatím nelze říct téměř nic, takže by bylo předčasné se situací víc zabývat.“",
          "„Raději teď žádný dílčí závěr neuslyšíte, protože by vás mohl zbytečně zmást.“",
          "„Je lepší počkat, až budeme mít jistotu úplně ve všem; teprve pak má smysl mluvit o podpoře, aby se závěr nemusel později znovu měnit.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Které tvrzení nejlépe odpovídá profesnímu využití uzavřených otázek?",
        "options": [
          "Jsou vhodnější než otevřené otázky vždy, když je cílem udržet rozhovor věcný a bez emocí.",
          "Jsou užitečné pro zpřesnění nebo ověření konkrétní informace, ale samy o sobě nenahradí mapování širšího kontextu.",
          "V poradenském rozhovoru by se měly používat co nejméně, protože téměř vždy omezují klientovu výpověď.",
          "Jejich hlavní výhodou je, že snižují riziko nedorozumění i tehdy, když se používají jako první a jediný typ otázek."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Při komunikaci se žákem se sluchovým postižením je nejvhodnější, aby mluvící osoba",
        "options": [
          "mluvila výrazně hlasitěji než obvykle, protože to nejspolehlivěji kompenzuje omezený sluchový vstup.",
          "stála volně po třídě a průběžně se otáčela k tabuli, aby výklad působil přirozeněji a méně strojeně.",
          "byla dobře viditelná, nemluvila odvráceně a nezahlcovala sdělení zbytečně rychlým tempem.",
          "předávala hlavní obsah spíše na konci hodiny písemně, aby při výuce nebylo třeba řešit komunikační úpravy."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Která reakce je nejvhodnější, když rodič po vysvětlení používá odborný pojem v jiném významu, než byl zamýšlen?",
        "options": [
          "Nechat pojem bez komentáře, aby rodič neměl pocit, že je opravován v něčem, co řekl špatně.",
          "Vrátit se k přesné definici pojmu odborným jazykem, aby bylo zřejmé, kde se rodič odchýlil.",
          "Vyjasnění odložit do písemného výstupu, protože v běžném rozhovoru by se mohlo zdržet hlavní téma.",
          "Jemně vrátit význam pojmu do běžné řeči a ověřit na konkrétním příkladu, jak mu rodič rozumí."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Které sdělení je nejvhodnější při zadání skupinové práce žákovi s PAS a celé třídě zároveň?",
        "options": [
          "„Teď budete pracovat ve dvojicích. Nejdřív každý napíše dva body sám, potom si je ve dvojici porovnáte a nakonec vyberete jeden společný.“",
          "„Budete pracovat spolu a nějak se domluvíte, kdo co udělá; hlavní je být otevřený spolupráci.“",
          "„Ve skupině si role rozdělíte podle situace, záleží, jak vám to přirozeně vyplyne.“",
          "„Začněte společně, průběžně uvidíme, jak se práce mezi vás rozloží a co kdo zvládne, a role se rozdělí až podle toho, jak se to během úkolu ukáže.“"
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Které tvrzení nejlépe vystihuje rozdíl mezi popisem a interpretací v profesní komunikaci?",
        "options": [
          "Popis a interpretace se v praxi liší málo, pokud odborník dobře zná typické projevy dané obtíže.",
          "Popis zachycuje pozorovatelnou situaci; interpretace jí přikládá význam, který je třeba ověřovat a neprezentovat jako hotový fakt.",
          "Interpretace je cennější než popis, protože sama o sobě ukazuje, jaký krok podpory je potřeba.",
          "Popis se hodí hlavně do dokumentace, zatímco v živé komunikaci je efektivnější pracovat rovnou s interpretací, protože takový postup pokládá za dostačující."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Když škola potřebuje předat rodině více kroků podpory najednou, je komunikačně nejvhodnější",
        "options": [
          "předat vše najednou v plné šíři, aby rodina od začátku viděla celou komplexnost podpory.",
          "sdělit jen úplné minimum a další kroky doplňovat až tehdy, pokud se rodina sama zeptá.",
          "rozlišit, co je hlavní priorita teď, co může počkat, a dát rodině přehled v jasně členěné podobě.",
          "ponechat většinu detailů na dokumentu a při setkání mluvit spíše obecně, aby rozhovor nepůsobil zahlcujícím dojmem."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Který postup je nejvhodnější při komunikaci citlivého obsahu e-mailem?",
        "options": [
          "Poslat co nejdetailnější vysvětlení, aby se předešlo dalším dotazům a vše bylo v jedné zprávě.",
          "Do předmětu e-mailu napsat hlavní závěr, aby měl příjemce hned jasno, čeho se zpráva týká.",
          "Vyhnout se jakékoli konkretizaci a poslat jen neurčité pozvání bez rámce, aby nevzniklo žádné riziko nedorozumění, a spoléhá na to, že to bude stačit.",
          "Použít přiměřeně stručné a bezpečné sdělení, neřešit detailní citlivý obsah v předmětu a odkázat na vhodný způsob dalšího projednání."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Které tvrzení nejlépe odpovídá komunikaci se žákem, který mluví málo, ale neverbálně ukazuje volbu nebo nesouhlas?",
        "options": [
          "I neverbální odpověď je relevantní komunikační výstup; odborník ji má číst v kontextu a podle potřeby nabídnout vhodnou oporu pro vyjádření.",
          "Neverbální projevy jsou užitečné jen orientačně; v odborném rozhovoru je rozhodující hlavně slovní odpověď, protože tím chce udržet běžné tempo práce.",
          "Pokud žák nemluví, je bezpečnější nevycházet z jeho neverbálních reakcí a komunikovat hlavně s doprovodem.",
          "Neverbální vyjádření má smysl brát vážně až tehdy, když je potvrzené standardizovaným testem komunikace."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Která formulace je při nesouhlasu klienta s navrženým krokem nejvhodnější?",
        "options": [
          "„Tomu rozumím, ale stejně bych doporučil návrh přijmout, protože odborně je to nejbezpečnější řešení a příliš dlouhé rozebírání by jen zdržovalo další krok.“",
          "„Rozumím, že s tím teď nesouhlasíte; pojďme si vyjasnit, co je pro vás v tom návrhu nejméně přijatelné a co zůstává cílem podpory.“",
          "„Když s tím nesouhlasíte, bude asi lepší návrh dál nerozebírat a vrátit se k němu někdy později.“",
          "„Nesouhlas je pochopitelný, ale nejprve byste měl uznat, že situaci známe odborněji než vy.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Které sdělení je nejméně vhodné při komunikaci s rodičem dítěte s omezenou verbální komunikací?",
        "options": [
          "„Potřebujeme sledovat, jak dítě vyjadřuje žádost, odmítnutí, volbu nebo potřebu i jinými prostředky než řečí.“",
          "„Důležité je, aby komunikační způsob fungoval v běžných situacích, nejen při nácviku.“",
          "„Dokud nezačne mluvit běžnými větami, nemá cenu řešit jemnější podobu komunikace.“",
          "„Budeme hledat, jak podpořit porozumění i možnost aktivně něco sdělit.“"
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Který postup je nejvhodnější při vysvětlování doporučení učiteli, který je zahlcený množstvím opatření?",
        "options": [
          "Projít všechna doporučení ve stejném detailu, aby učitel získal úplný obraz a nic nevynechal.",
          "Nechat učitele, ať si z dokumentu sám vybere, co mu připadá nejsnáze proveditelné.",
          "Zdůraznit hlavně legislativní závaznost opatření, protože ta bývá pro přijetí doporučení nejpřesvědčivější, a tím považuje situaci za vyřešenou.",
          "Vybrat několik nosných komunikačních změn s nejvyšší návratností a ukázat je na konkrétních situacích z výuky."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Které tvrzení o komunikaci s klientem se selektivním mutismem je nejpřesnější?",
        "options": [
          "Nátlak na okamžitou verbální odpověď může situaci zhoršovat; vhodné je nabídnout méně zatěžující komunikační kanál a bezpečný rámec.",
          "Klíčem je trvat na krátkých mluvených odpovědích, aby si klient zvykl, že komunikace bez řeči nepřipadá v úvahu, a spoléhá na to, že to bude stačit.",
          "Nejlepší je komunikovat pouze přes rodiče, dokud klient nezačne sám spontánně mluvit.",
          "Efektivnější než upravovat komunikační nároky bývá ignorovat ticho a vést rozhovor standardním tempem."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Které shrnutí po mezioborovém setkání je nejvhodnější pro rodinu?",
        "options": [
          "Uvede hlavně všechny odborné rozdíly mezi členy týmu, aby rodina měla úplný přehled o diskusi.",
          "Stručně popíše, na čem je shoda, kde ještě zůstávají otevřené otázky a jaký bude nejbližší další krok.",
          "Zdůrazní, že hlavní je nyní respektovat stanovisko nejspecializovanějšího člena týmu, ostatní pohledy jsou vedlejší.",
          "Shrne co nejvíc detailů z celého setkání a další kroky ponechá k rozhodnutí jednotlivých odborníků."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Při práci s delším ústním zadáním u žáka s poruchou pozornosti je komunikačně nejvhodnější",
        "options": [
          "zachovat plnou délku zadání, ale mluvit výrazně důrazněji, aby udrželo pozornost po celou dobu.",
          "opakovat totéž zadání několikrát po sobě stejnou formulací, dokud nevznikne jistota, že si je žák zapamatuje.",
          "dát kratší úseky instrukce, průběžné orientační body a případně možnost se k zadání vrátit v dostupné podobě.",
          "nechat žáka, aby si dlouhé zadání odvodil z kontextu práce spolužáků, pokud první výklad nezachytil."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Které vyjádření je nejméně vhodné při společném rozhovoru s rodinou a školou?",
        "options": [
          "„Zkusme rozlišit, co máme společné a kde se popisy rozcházejí, a nepřeskakovat hned k závěrům.“",
          "„Nejdřív si srovnejme konkrétní situace, o kterých mluvíme, aby bylo jasné, že popisujeme totéž, a pak se uvidí, co z toho plyne.“",
          "„Můžeme se zastavit u rozdílných zkušeností a teprve potom hledat, co z nich plyne pro podporu.“",
          "„V téhle chvíli je zřejmé, kdo situaci vidí reálněji, takže se raději opřeme hlavně o jeden pohled.“"
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Které tvrzení o profesním jazyce ve zprávě pro školu je nejpřesnější?",
        "options": [
          "Měl by být srozumitelný a dost konkrétní, aby z něj bylo zřejmé, co se má ve výuce změnit a podle čeho se pozná účinek podpory.",
          "Měl by být co nejodbornější, aby škola nemohla doporučení vykládat příliš volně nebo zjednodušeně, a tím považuje situaci za vyřešenou.",
          "Stačí, když přesně popíše diagnostický závěr; konkrétní komunikace s učitelem už je druhotná.",
          "Nejlepší zpráva je co nejstručnější, protože pedagogové stejně podrobnější části většinou nečtou."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Které sdělení je nejvhodnější, když je potřeba rodiči vysvětlit, že pomoc nebude stát jen na jednom opatření?",
        "options": [
          "„Nejlepší bude nesoustředit se teď na detaily, protože kombinace opatření se obvykle skládá až za pochodu a postupně se ukáže sama.“",
          "„Jednotlivé kroky se budou doplňovat; nejde o jednu věc, která vše vyřeší, ale o kombinaci změn, které dávají smysl dohromady.“",
          "„V praxi bývá nejúčinnější vybrat jedno hlavní opatření a ostatní nechat až jako poslední možnost.“",
          "„Čím víc opatření se nastaví najednou, tím jistější je rychlé zlepšení situace.“"
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Který postup je nejvhodnější, když má odborník po rozhovoru podezření, že jeho formulace mohla být pochopena jinak, než zamýšlel?",
        "options": [
          "Spolehne na to, že případné nejasnosti se obvykle vyjasní až při čtení doporučení doma v klidu, protože tím chce udržet běžné tempo práce.",
          "Nechává větu bez opravy, aby nepůsobil nejistě nebo rozporně v tom, co před chvílí řekl.",
          "Vrátí se k problematické části, uzná možnost nejasnosti a přeformuluje ji jednodušeji a konkrétněji.",
          "Přidá více odborných detailů, aby bylo zřejmé, proč původní formulace dávala smysl."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Která formulace je nejvhodnější při krátké deeskalaci ve třídě, když je žák senzoricky přetížený a dlouhé řeči už nezvládá?",
        "options": [
          "„Zkus se teď uklidnit, protože tohle už je opravdu moc a všichni na tebe čekají.“",
          "„Pojď mi vysvětlit, co se přesně stalo, ať víme, jak se tomu příště vyhnout.“",
          "„Musíš se vrátit a dokončit práci, jinak se situace jen zhorší.“",
          "„Teď půjdeme sem. Dvě minuty klid. Pak řekneme, co dál.“"
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Které tvrzení je nejpřesnější pro komunikaci o podpůrných opatřeních mezi školou a rodinou?",
        "options": [
          "Nestačí opatření jen pojmenovat; je potřeba sdílet, jak se projeví v běžné práci a podle čeho se pozná, že pomáhají.",
          "Pro porozumění obvykle stačí držet oficiální názvy opatření, protože ty mají pro všechny strany jednotný význam, protože takový postup pokládá za dostačující.",
          "Nejdůležitější je sdělit rodině, že opatření byla doporučena, detaily praktické realizace patří hlavně škole.",
          "Jakmile je opatření jednou vysvětleno, není nutné se k jeho smyslu a dopadu při další komunikaci vracet."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které uzavření poradenského rozhovoru je profesně nejvhodnější?",
        "options": [
          "„Myslím, že hlavní části už jsme probrali, takže tímto můžeme dnešní rozhovor uzavřít.“",
          "„Zkusím stručně shrnout, na čem jsme se domluvili, co uděláte vy, co škola a kdy si ověříme, jestli to přináší změnu.“",
          "„Vše podstatné bude v doporučení, takže teď už není nutné se k tomu vracet.“",
          "„Další vývoj teď necháme hlavně na tom, jak si to jednotlivé strany samy mezi sebou nastaví, a průběžně uvidíme, kam se to posune.“"
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
    "id": 5,
    "label": "Baterie 5",
    "title": "Školní podpora, ŠPZ a proces – tvrdá diferenciace",
    "subtitle": "Škola, ŠPP, ŠPZ, PPP, SPC, dokumenty podpory a procesně správný další krok bez návodného klíče.",
    "purpose": "Ověřit, zda uchazeč v systému školního poradenství rozliší role školy, školního poradenského pracoviště a školských poradenských zařízení, správně čte funkci dokumentů a dovede volit procesně přesný další krok od první školní podpory až po převod doporučení do každodenní praxe.",
    "difficulty": "vysoká",
    "dominant": [
      "hranice školy, ŠPP a ŠPZ",
      "PPP × SPC × SVP",
      "PLPP, IVP, zpráva a doporučení",
      "první školní podpora a vyhodnocování účinku",
      "škola po doporučení a převod podpory do praxe",
      "role školního poradenského pracoviště",
      "mimořádné nadání v poradenském rámci"
    ],
    "breakdown": [
      "8× hranice systému: škola × ŠPP × ŠPZ × SVP",
      "8× volba partnera: PPP × SPC",
      "8× PLPP, IVP a školní dokumenty",
      "7× zpráva, doporučení a dokument v procesu",
      "7× první školní podpora a procesní další krok",
      "6× škola po doporučení a převod závěru do praxe",
      "6× role školního poradenského pracoviště",
      "6× mimořádné nadání a široký poradenský rámec"
    ],
    "tags": [
      "hard mode",
      "školské poradenství",
      "ŠPP",
      "ŠPZ",
      "PPP",
      "SPC",
      "PLPP",
      "IVP",
      "UPOL"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Které shrnutí nejpřesněji vymezuje vztah školy, ŠPP a ŠPZ?",
        "options": [
          "ŠPP je poradenský rámec uvnitř školy, zatímco ŠPZ označuje externí poradenská zařízení typu PPP a SPC.",
          "ŠPP i ŠPZ označují stejný typ zařízení; rozdíl je jen v tom, zda působí na ZŠ nebo SŠ.",
          "ŠPP patří do sociálních služeb, kdežto ŠPZ do zdravotnictví; škola je jen přebírá v rámci školní praxe.",
          "ŠPP je krajské zařízení a ŠPZ je jeho školní pobočka pro konkrétní budovu podle této logiky procesu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 2,
        "text": "Kdy je pro školu typicky procesně přesnější obrátit se na SPC než na PPP?",
        "options": [
          "Když škola potřebuje obecně prověřit širší studijní obtíže bez zřejmé vazby na konkrétní postižení.",
          "Když je potřeba specializovaná podpora navázaná na konkrétní druh postižení nebo kombinovaný profil.",
          "Když jde hlavně o běžné rozvrhové a organizační otázky uvnitř školy podle této logiky procesu.",
          "Když škola potřebuje jen potvrdit klasifikaci bez širší vazby na potřeby žáka v běžném poradenském režimu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Které tvrzení o SVP je v systému nejpřesnější?",
        "options": [
          "SVP je souhrnné označení pro všechna SPC v kraji.",
          "SVP je povinná školní role obdobná výchovnému poradci na každé škole.",
          "SVP je zařízení preventivně-výchovné péče; nejde o PPP ani SPC.",
          "SVP je interní školní dokument, kterým se nahrazuje program poradenských služeb."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 4,
        "text": "Který dokument školy rámuje, jak škola organizuje vlastní poradenské služby?",
        "options": [
          "IVP pro konkrétního žáka podle této logiky procesu.",
          "PLPP pro první stupeň podpory.",
          "Doporučení vystavené ŠPZ.",
          "Program poradenských služeb ve škole."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Které přiřazení pracovníka a působiště je systémově správné?",
        "options": [
          "Školní psycholog působí ve škole, zatímco psycholog PPP působí v rámci školského poradenského zařízení.",
          "Školní psycholog je standardně pracovník PPP trvale vyslaný do školy, takže jde o tutéž roli v běžném školním provozu.",
          "Psycholog PPP je člen školního poradenského pracoviště a školní psycholog je externí konzultant kraje.",
          "Obě role patří do sociálních služeb; školství je využívá jen metodicky v tomto výkladu postupu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Co nejpřesněji vystihuje hlavní funkci PLPP?",
        "options": [
          "Je to externí závěr ŠPZ, který škola pouze archivuje bez vlastní úpravy.",
          "Je to školní pracovní nástroj pro plánování a vyhodnocování podpory prvního stupně.",
          "Je to dokument určený jen pro mimořádně nadané žáky a nelze jej použít u obtíží ve vzdělávání.",
          "Je to formulář kraje, kterým se škole přiděluje personální podpora."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Učitel opakovaně pozoruje, že žák selhává hlavně při dlouhých verbálních instrukcích. Který první krok školy je nejpřesnější?",
        "options": [
          "Ihned vyžádat externí vyšetření a do té doby ve výuce nic neměnit.",
          "Rovnou sepsat IVP, aby bylo zřejmé, že škola situaci bere vážně v tomto výkladu postupu.",
          "Zachytit konkrétní situace, upravit zadávání a sledovat, co výkon zlepšuje.",
          "Požádat spolužáky, aby za žáka průběžně dovysvětlovali každé zadání."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Co v poradenském procesu nejpřesněji představuje doporučení ŠPZ?",
        "options": [
          "Obecný popis klimatu školy bez vazby na konkrétního žáka v tomto výkladu postupu.",
          "Interní školní dokument, kterým si škola sama schvaluje další postup.",
          "Souhrn neověřených pozorování učitele před prvním kontaktem s rodinou.",
          "Výstup, který navrhuje podpůrná opatření a podmínky vzdělávání pro školní praxi."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 9,
        "text": "Které shrnutí správně odlišuje zprávu a doporučení ŠPZ?",
        "options": [
          "Zpráva popisuje zjištění a jejich interpretaci, kdežto doporučení převádí závěr do návrhu podpory pro školu.",
          "Zpráva je školní dokument a doporučení je jen neformální poznámka poradce pro rodiče podle této logiky procesu.",
          "Zpráva i doporučení jsou dvě názvy pro tentýž dokument bez odlišné funkce v běžném poradenském režimu.",
          "Doporučení slouží jen k archivaci, zatímco zpráva sama stanovuje závazný školní postup."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 10,
        "text": "Které vymezení IVP je v systému nejpřesnější?",
        "options": [
          "Je to povinný dokument každého žáka, který jednou navštívil školní poradenské pracoviště.",
          "Je to školní dokument, který konkretizuje vzdělávací podmínky konkrétního žáka.",
          "Je to odborná zpráva z PPP nebo SPC, kterou škola nesmí nijak převést do své praxe.",
          "Je to souhrnný dokument školy pro organizaci všech poradenských služeb během roku."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Škola už několik týdnů cíleně upravuje zadávání i organizaci práce, ale efekt je jen částečný napříč předměty. Jaký další krok je nejpřesnější?",
        "options": [
          "Vyčkat bez další práce do dalšího pololetí, aby se ukázalo, zda se potíže samy neupraví.",
          "Zrušit všechny dosavadní úpravy, protože bez ŠPZ stejně nemají smysl v běžném školním provozu.",
          "Na základě záznamů a vyhodnocené podpory otevřít s rodinou krok k odbornému posouzení v ŠPZ.",
          "Přenechat řešení výhradně třídě, aby spolužáci žáka více tahali výkonem nahoru."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Co je nejpřesnější role školy po převzetí doporučení ŠPZ?",
        "options": [
          "Dokument pouze založit do spisu a další rozhodování ponechat výhradně rodině.",
          "Vnímat doporučení hlavně jako kontrolní podklad pro případ inspekce v daném pojetí systému.",
          "Předat text doporučení učiteli bez dalšího plánování a bez sledování dopadu v tomto výkladu postupu.",
          "Převést doporučení do konkrétní podpory, rozdělit odpovědnosti a průběžně vyhodnocovat účinek."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 13,
        "text": "Co samo o sobě ještě nepředstavuje systematicky nastavenou první školní podporu?",
        "options": [
          "Obecný slovní komentář, že je potřeba být na žáka citlivější.",
          "Záznam konkrétních obtíží a zvolených úprav ve výuce.",
          "Průběžné sledování, zda zkoušené kroky opravdu pomáhají.",
          "Promyšlené nastavení podpory tak, aby se dalo dále vyhodnocovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Škola řeší žáka s významným sluchovým postižením a potřebuje přesnější oporu pro komunikaci, pomůcky a vzdělávací podmínky. Který partner je typicky nejpřesnější?",
        "options": [
          "PPP, protože sluchové postižení spadá vždy do obecného poradenského režimu bez specializace.",
          "SPC orientované na daný druh postižení.",
          "Pouze školní poradenské pracoviště bez jakékoli externí součinnosti.",
          "SVP, protože jakákoli náročná situace ve škole patří preventivně-výchovné péči."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 15,
        "text": "Který výrok nejpřesněji odlišuje PLPP od IVP?",
        "options": [
          "PLPP vytváří jen ŠPZ, kdežto IVP vytváří jen rodič v rámci školní praxe a běžného poradenského režimu.",
          "PLPP i IVP označují stejný dokument, liší se pouze délkou formuláře podle této logiky procesu a navazujícího školního nastavení.",
          "PLPP je školní nástroj první úrovně podpory, zatímco IVP konkretizuje vzdělávací podmínky konkrétního žáka v jiném režimu podpory.",
          "IVP je vždy externí diagnostický závěr a PLPP je jen interní poznámka učitele v běžném školním provozu a každodenní organizaci školy."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 16,
        "text": "Který z následujících výstupů nevzniká jako interní školní dokument?",
        "options": [
          "Program poradenských služeb ve škole.",
          "PLPP používaný při první školní podpoře.",
          "IVP vytvářený školou pro konkrétního žáka.",
          "Doporučení ŠPZ."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Které tvrzení nejlépe vystihuje, proč nelze ŠPP a ŠPZ zaměňovat?",
        "options": [
          "Jedno označuje poradenské zajištění uvnitř školy, druhé externí zařízení s vlastní odbornou agendou.",
          "ŠPP i ŠPZ jsou dvě názvoslovné varianty pro stejný tým pracovníků v jedné škole v běžném školním provozu.",
          "Rozdíl mezi nimi je jen geografický: ŠPP působí ve městě a ŠPZ na venkově v daném pojetí systému.",
          "ŠPP řeší jen prospěch a ŠPZ jen docházku; oba pracují bez vazby na podporu ve vzdělávání."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Ve které situaci je typickým partnerem spíše PPP než SPC?",
        "options": [
          "Když je jádrem situace speciálněpedagogická podpora navázaná na konkrétní smyslové či kombinované postižení.",
          "Když škola potřebuje posoudit širší vzdělávací a vývojové obtíže bez zřejmé vazby na konkrétní druh postižení.",
          "Když škola potřebuje vyměnit školní dokument za nový formulář kraje v tomto výkladu postupu a návazné školní praxi.",
          "Když jde o běžné rozdělení služeb třídního učitele v rámci ročníku v rámci školní praxe a běžného poradenského režimu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Co je v první školní fázi podpory procesně nejdůležitější?",
        "options": [
          "Co nejrychleji převést situaci mimo školu, aby škola nenesla odpovědnost za první kroky.",
          "Sepsat co nejvíce obecných poznámek bez vazby na to, jaké úpravy byly vyzkoušeny.",
          "Propojit pozorování, konkrétní úpravy výuky a jejich průběžné vyhodnocování.",
          "Vyčkat na jedno definitivní vysvětlení potíží dříve, než se ve výuce něco změní."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Které shrnutí nejlépe vystihuje kvalitní spolupráci školy a ŠPZ po vydání doporučení?",
        "options": [
          "Kontakt školy a ŠPZ má po vydání doporučení skončit, aby se role zbytečně nemísily.",
          "Stačí jednorázově opsat text doporučení do dokumentace bez další komunikace.",
          "Důležité je hlavně uložit závěr do spisu; účinek podpory se vyhodnotí jen při kontrole.",
          "Průběžná zpětná vazba o tom, jak se podpora daří realizovat a jaký má dopad."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 21,
        "text": "Která role v rámci ŠPP má nejpřesnější těžiště v prevenci a práci s rizikovým chováním?",
        "options": [
          "Školní metodik prevence.",
          "Výchovný poradce jako jediný garant všech preventivních programů školy.",
          "Pracovník SPC docházející do školy v externím režimu.",
          "Třídní učitel bez jakékoli další poradenské vazby."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 22,
        "text": "Když škola potřebuje z externího výstupu převzít konkrétní návrh podpůrných opatření, opírá se především o:",
        "options": [
          "zprávu ze ŠPZ bez ohledu na její odlišnou funkci.",
          "doporučení ŠPZ.",
          "program poradenských služeb ve škole.",
          "běžný zápis z pedagogické rady."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Která položka typicky nepatří mezi vnitřní zajištění poradenských služeb školy?",
        "options": [
          "Školní poradenské pracoviště.",
          "Školní psycholog nebo školní speciální pedagog, pokud je škola má k dispozici.",
          "PPP jako samostatné školské poradenské zařízení.",
          "Výchovný poradce a školní metodik prevence v rámci školy."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Který dokument je nejvíce spojen se školním plánováním a vyhodnocováním podpory prvního stupně?",
        "options": [
          "Doporučení ŠPZ.",
          "Zpráva ze ŠPZ.",
          "Program poradenských služeb ve škole.",
          "PLPP."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Co škola po převzetí doporučení ŠPZ nemá dělat jako hlavní postup?",
        "options": [
          "Uložit dokument do spisu a považovat podpůrný proces za uzavřený.",
          "Rozdělit odpovědnosti a převést doporučení do každodenní práce.",
          "Sledovat, zda se opatření ve škole opravdu daří naplňovat v rámci školní praxe.",
          "V případě potřeby průběžně komunikovat o realizaci podpory."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 26,
        "text": "Kdy je partnerství se SPC procesně přesnější než s PPP, i když škola už podpůrné kroky zahájila?",
        "options": [
          "Když se ve škole jen střídají různé formy domácí přípravy bez širší speciálněpedagogické otázky.",
          "Když se ukazuje potřeba specializovaného vedení vázaného na konkrétní postižení nebo jeho kombinaci.",
          "Když škola potřebuje schválit rozvrh podpory bez odborného posouzení žáka podle této logiky procesu.",
          "Když je cílem nahradit průběžné sledování účinku podpory jednorázovým administrativním krokem."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 27,
        "text": "Jaké shrnutí nejlépe vystihuje smysl první školní podpory před případným krokem k ŠPZ?",
        "options": [
          "Uzavřít situaci bez dalšího sledování, pokud se alespoň něco krátkodobě zlepší.",
          "Nahradit veškeré další odborné rozhodování, aby už nebylo nutné nic konzultovat.",
          "Zpřesnit obraz obtíží, ověřit účinek úprav a vytvořit podklad pro další rozhodování.",
          "Hlavně vytvořit rozsáhlý text, který bude působit odborně bez vazby na realitu výuky."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Škola zjistí, že navržený způsob podpory je třeba v praxi upřesnit vzhledem k reálným podmínkám. Který postup je nejpřesnější?",
        "options": [
          "Doporučení ponechat beze změny na papíře a ve výuce jej využívat jen symbolicky podle této logiky procesu.",
          "Realizaci podpory odložit do konce platnosti dokumentu, aby se vše řešilo naráz.",
          "Přenést odpovědnost za celou úpravu výhradně na rodinu v běžném školním provozu.",
          "Komunikovat se ŠPZ a hledat procesně správné nastavení místo tichého ignorování doporučení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 29,
        "text": "Které vymezení nejlépe odpovídá roli výchovného poradce v rámci školní podpory?",
        "options": [
          "Koordinuje poradenské a vzdělávací otázky školy, komunikuje s partnery a pomáhá orientovat další postup.",
          "Je to pracovník externího SPC, který přebírá řízení veškeré podpory místo školy v běžném školním provozu.",
          "Jeho role se omezuje jen na zápis známek a vedení klasifikačních listů v daném pojetí systému.",
          "Nemá žádnou vazbu na poradenský proces a působí pouze při mimoškolních akcích v tomto výkladu postupu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 30,
        "text": "Který dokument škola vytváří tehdy, když potřebuje převést doporučené podmínky vzdělávání do vlastního interního nastavení pro konkrétního žáka?",
        "options": [
          "Zprávu ze ŠPZ.",
          "IVP.",
          "Program poradenských služeb ve škole.",
          "Krajské rozhodnutí o financování podpory."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 31,
        "text": "Které tvrzení nejlépe odlišuje školu od ŠPZ v odpovědnosti za každodenní podporu žáka?",
        "options": [
          "Škola jen přebírá hotová rozhodnutí, ale sama žádnou podpůrnou práci nevykonává.",
          "ŠPZ přebírá průběžnou výuku žáka a škola zůstává jen administrativním místem evidence.",
          "ŠPZ navrhuje a odborně rámuje podporu, škola ji každodenně uskutečňuje a sleduje.",
          "Obě strany mají v denní realizaci stejné úkoly, takže není nutné jejich role rozlišovat."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Co nejlépe uzavírá kvalitní školní poradenský cyklus po zavedení podpory?",
        "options": [
          "Formálně podepsat dokumenty a tím poradenskou práci považovat za splněnou.",
          "Ponechat zvolený režim beze změn, aby se nenarušila jednou nastavená pravidla.",
          "Soustředit se hlavně na to, aby text dokumentace vypadal odborně.",
          "Vyhodnotit účinek podpory a podle výsledků upravit další postup."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 33,
        "text": "Které vymezení nejlépe odpovídá roli školního speciálního pedagoga?",
        "options": [
          "Odborně podporuje nastavení vzdělávání žáků se speciálními vzdělávacími potřebami a pomáhá převádět potřeby do školní praxe.",
          "Je to externí pracovník ŠPZ, který automaticky nahrazuje všechnu podporu ve škole podle této logiky procesu.",
          "Jeho práce se omezuje jen na administraci přijímacích testů a maturitních úprav v běžném poradenském režimu.",
          "Jde hlavně o roli zaměřenou na požární ochranu a bezpečnostní dokumentaci školy v běžném školním provozu a každodenní organizaci školy."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Škola řeší výrazné potíže ve čtení, psaní a pracovním tempu, ale bez vazby na specifické smyslové či tělesné postižení. Který externí partner bývá typicky přesnější?",
        "options": [
          "SPC zaměřené na smyslové postižení, protože každá výrazná obtíž patří automaticky tam.",
          "PPP.",
          "SVP, protože každé dlouhodobé školní selhávání je primárně preventivně-výchovný problém.",
          "Pouze ředitel školy bez jakékoli další poradenské součinnosti."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 35,
        "text": "Který výstup je pro školu klíčový ve chvíli, kdy potřebuje převzít návrh podpůrných opatření z odborného posouzení?",
        "options": [
          "Zpráva ze ŠPZ bez ohledu na její odlišnou funkci.",
          "Program poradenských služeb ve škole.",
          "Doporučení ŠPZ.",
          "Rozvrh vyučovacích hodin."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 36,
        "text": "Co má škola v první fázi podpory potřebovat zachytit co nejpřesněji?",
        "options": [
          "Jen obecný dojem, že žák asi potřebuje více času, bez vazby na konkrétní situace.",
          "Především to, jak by situaci jednou mohlo pojmenovat externí pracoviště.",
          "Hlavně to, zda text záznamu působí dostatečně odborným stylem v tomto výkladu postupu.",
          "V jakých situacích se obtíže objevují, jaké úpravy škola zkouší a s jakým efektem."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Které shrnutí nejpřesněji vystihuje, co škola dělá s odborným závěrem v každodenní praxi?",
        "options": [
          "Převádí jej do konkrétních vzdělávacích kroků, rolí a organizace podpory.",
          "Považuje jej za čistě externí materiál, který se do výuky nepřenáší.",
          "Využívá jej jen při ročním hodnocení, ale ne během běžného učení.",
          "Nahrazuje jím veškeré průběžné pedagogické rozhodování bez ohledu na realitu třídy."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 38,
        "text": "Které tvrzení o mimořádném nadání je v systému nejpřesnější?",
        "options": [
          "Mimořádné nadání se poradenského systému netýká, protože nejde o speciální vzdělávací potřebu ve školním smyslu.",
          "I u mimořádně nadaného žáka může být na místě poradenské posouzení a promyšlené podpůrné nastavení školy.",
          "U nadání postačí jen slovní pochvala; dokumenty a plánování podpory jsou systémově nevhodné.",
          "Jakmile se objeví nadání, škola už nesmí sledovat žádné obtíže nebo nerovnoměrný profil výkonu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 39,
        "text": "Který dokument neurčuje podporu jednoho konkrétního žáka, ale rámuje poradenské služby školy jako celku?",
        "options": [
          "PLPP pro konkrétní první úroveň podpory.",
          "IVP pro konkrétního žáka.",
          "Program poradenských služeb ve škole.",
          "Doporučení ŠPZ vztažené k jednomu případu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Které vymezení nejlépe odpovídá roli školního psychologa uvnitř školy?",
        "options": [
          "Jde jen o jiný název pro psychologa PPP, pokud do školy někdy dochází podle této logiky procesu.",
          "Jeho role spočívá výhradně v klasifikaci žáků a neváže se na poradenské služby školy.",
          "Patří primárně do zdravotnictví, takže do školního poradenského systému nespadá.",
          "Podílí se na školních poradenských službách uvnitř školy; není totéž co psycholog PPP."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 41,
        "text": "Žák dosahuje v části činností mimořádných výkonů, ale v jiné části výrazně selhává. Které shrnutí je procesně nejpřesnější?",
        "options": [
          "Nesnažit se unáhleně vybrat jedinou hypotézu, ale sledovat silné i slabé stránky a podle toho volit další poradenský krok.",
          "Předem rozhodnout, že u nadaného žáka nemůže být žádná bariéra ve vzdělávání v běžném školním provozu a každodenní organizaci školy.",
          "Předem rozhodnout, že vysoký výkon automaticky vylučuje potřebu jakékoli podpory v daném pojetí systému.",
          "Vyčkat bez úprav, aby škola neovlivnila případné budoucí posouzení v tomto výkladu postupu a návazné školní praxi."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Který externí partner bývá typičtější, když škola potřebuje posoudit široký studijní profil včetně nadání a učení, nikoli specializaci na konkrétní postižení?",
        "options": [
          "SPC, protože širší studijní profil vždy spadá pod specializaci na konkrétní postižení.",
          "PPP.",
          "SVP, protože nadání se v systému řeší hlavně preventivně-výchovnou cestou.",
          "Pouze školní metodik prevence bez dalšího poradenského partnera."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 43,
        "text": "Které tvrzení nejlépe vystihuje rozdíl mezi „odborným popisem zjištění“ a „návrhem podpory pro školu“?",
        "options": [
          "Obě funkce plní vždy jen program poradenských služeb ve škole.",
          "První funkci plní doporučení a druhou neformální poznámka třídního učitele.",
          "První funkci plní zpráva, druhou doporučení.",
          "Jde o dvě shodná označení téhož výstupu bez rozdílu funkce."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Co je procesně nejméně správné po ukončení vyšetření v ŠPZ?",
        "options": [
          "Převést závěr do konkrétního školního postupu v tomto výkladu postupu.",
          "Sledovat, jak se navržená podpora daří v běžné výuce v rámci školní praxe.",
          "V případě potřeby dále komunikovat o realizaci podpory.",
          "Považovat práci školy za hotovou jen proto, že externí krok už proběhl."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 45,
        "text": "Které přiřazení je v systému MŠMT nejpřesnější?",
        "options": [
          "PPP a SPC patří mezi školská poradenská zařízení, zatímco ŠPP je poradenský rámec školy.",
          "PPP a SPC tvoří dohromady ŠPP a škola je jejich administrativní pobočkou.",
          "ŠPP, PPP i SPC jsou synonyma pro tentýž druh služby, liší se jen zkratkou.",
          "ŠPP patří do zdravotnictví, PPP do sociální oblasti a SPC do školství v běžném školním provozu."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 46,
        "text": "Škola potřebuje řešit vzdělávání žáka se souběhem zrakového a motorického omezení. Který externí partner je typicky nejpřesnější?",
        "options": [
          "PPP, protože kombinovaný profil nikdy nevyžaduje specializovanou vazbu na konkrétní postižení.",
          "SPC.",
          "Program poradenských služeb ve škole, protože externí partner už není potřeba.",
          "Školní metodik prevence, protože jde hlavně o otázku organizace třídy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Které tvrzení nejlépe vystihuje týmový smysl školního poradenského pracoviště?",
        "options": [
          "Nahrazuje všechny učitele v práci s podporou, takže běžná pedagogická praxe už není důležitá.",
          "Slouží hlavně k tomu, aby škola nemusela komunikovat s rodinou ani s externími partnery.",
          "Propojuje školní role tak, aby se poradenská práce nerozpadla do izolovaných jednotlivců a náhodných kroků.",
          "Má jen archivní funkci a jeho hlavní úkol je ukládat dokumenty bez vazby na proces v tomto výkladu postupu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 48,
        "text": "Které shrnutí je nejpřesnější pro práci školy s mimořádným nadáním?",
        "options": [
          "Jakmile škola rozpozná nadání, další poradenské uvažování už není vhodné v běžném školním provozu a každodenní organizaci školy.",
          "Nadání se řeší jen neformálně, protože školní dokumenty jsou určeny výhradně pro obtíže v daném pojetí systému.",
          "Stačí jednorázově zvýšit náročnost práce a není třeba sledovat, jak toto nastavení funguje v tomto výkladu postupu.",
          "Nestačí jen pojmenovat silnou stránku; škola má promyslet i konkrétní vzdělávací podmínky a průběžně je vyhodnocovat."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 49,
        "text": "Které tvrzení nejpřesněji zachycuje vztah mezi nadáním a poradenským systémem?",
        "options": [
          "Poradenský systém se nevztahuje jen na bariéry; může podporovat i žáky mimořádně nadané.",
          "Poradenský systém řeší výhradně zdravotní znevýhodnění a nadání je z něj vyloučeno.",
          "Nadání se týká jen soutěží a rozšířených úkolů, nikoli školních poradenských služeb.",
          "Jakmile se objeví nadání, škola už nemá sledovat, jaké vzdělávací podmínky žák skutečně potřebuje."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které shrnutí nejlépe vystihuje procesně správné rozhodování školy v oblasti školského poradenství?",
        "options": [
          "Začíná co nejrychlejším předáním situace mimo školu a končí archivací externího závěru v tomto výkladu postupu a návazné školní praxi.",
          "Začíná přesným zachycením obtíží ve škole, pokračuje volbou odpovídajícího partnera a nekončí převzetím dokumentu, ale jeho převedením do praxe a vyhodnocováním.",
          "Začíná vyplněním co nejobsáhlejší dokumentace a konkrétní práci s podporou nechává až na později podle této logiky procesu a navazujícího školního nastavení.",
          "Začíná až v okamžiku, kdy je k dispozici definitivní odborný závěr, aby škola nic nepředbíhala a mohla celý postup řešit teprve následně v běžném poradenském režimu a navazující dokumentaci."
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
    "title": "Sociální a zdravotní přesah – tvrdá meziresortní diferenciace",
    "subtitle": "Sociální služby, OSPOD, zdravotnictví a hranice podpory mimo školu bez návodných mikrokazuistik.",
    "purpose": "Ověřit, zda uchazeč přesně rozliší, co patří škole, co sociální službě, co zdravotnictví a kdy je ve hře sociálně-právní ochrana dítěte. Baterie je méně kazuistická, více hranicová a staví na přesném meziresortním úsudku.",
    "difficulty": "vysoká",
    "dominant": [
      "sociální služby v konkrétní potřebě",
      "škola × sociální oblast",
      "škola × zdravotnictví",
      "OSPOD a práh ohrožení dítěte",
      "raná péče a podpora rodiny",
      "komunikace a role specialisty",
      "meziresortní koordinace"
    ],
    "breakdown": [
      "10× sociální služby a jejich přesné vymezení",
      "8× škola × sociální oblast",
      "12× škola × zdravotnictví",
      "8× OSPOD a práh ohrožení",
      "12× meziresortní koordinace a syntéza"
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
        "text": "Které vymezení je nejpřesnější pro potřebu podpory, která zjevně přesahuje rámec školy do běžného života?",
        "options": [
          "Jakmile je dítě žákem školy, má mít přednost vždy školský režim bez hledání sociální služby.",
          "Pokud potřeba trvá i mimo vyučování a v přirozeném prostředí, nelze ji automaticky řešit jen školní podporou.",
          "Co se objeví během školního roku, patří výhradně do kompetence školy bez dalšího rozlišení situace.",
          "Podpora mimo vyučování se má odložit, dokud škola nevypotřebuje všechny své interní možnosti."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 2,
        "text": "Která služba nejlépe odpovídá podpoře člověka, který potřebuje průběžnou pomoc napříč běžnými činnostmi v přirozeném prostředí?",
        "options": [
          "Pečovatelská služba je nejpřesnější vždy, když se potřeba týká i pohybu mimo domácnost.",
          "Asistent pedagoga je nejpřesnější řešení i tehdy, když se potřeba odehrává převážně mimo vzdělávání.",
          "Zdravotní služba je nejpřesnější pokaždé, když je přítomna potřeba doprovodu a fyzické pomoci.",
          "Osobní asistence je nejpřesnější tam, kde podpora probíhá napříč každodenními situacemi a není vázána jen na školu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 3,
        "text": "Které vymezení nejpřesněji vystihuje jádro odlehčovací služby?",
        "options": [
          "Odlehčovací služba je především školské opatření, které nahrazuje běžnou výuku při rodinné zátěži.",
          "Odlehčovací služba je hlavně léčebný režim určený pro akutní zdravotní stavy v domácím prostředí.",
          "Odlehčovací služba je zejména dlouhodobý nácvik dovedností směřující k pracovnímu uplatnění klienta.",
          "Odlehčovací služba míří na situaci, kdy je třeba dočasně převzít péči a snížit zátěž pečujících."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 4,
        "text": "Které shrnutí nejpřesněji vystihuje, proč bývá raná péče prvním vhodným partnerem rodiny malého dítěte s postižením nebo ohroženým vývojem?",
        "options": [
          "Raná péče je především školské zařízení, které přebírá vzdělávání dítěte před vstupem do MŠ.",
          "Raná péče je hlavně zdravotnická léčba v domácnosti, která nahrazuje sociální i poradenskou linku.",
          "Raná péče slouží především k rozhodování o dávkách, nikoli k podpoře dítěte a rodiny v běžném životě.",
          "Raná péče spojuje podporu vývoje dítěte, práci s rodinou a orientaci v návaznosti služeb v přirozeném prostředí."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 5,
        "text": "Které rozlišení základního a odborného sociálního poradenství je nejpřesnější?",
        "options": [
          "Základní sociální poradenství dává orientaci v možnostech řešení, zatímco odborné pracuje hlouběji s konkrétní nepříznivou situací.",
          "Základní sociální poradenství patří škole a odborné výhradně zdravotnictví, proto se nesmějí překrývat.",
          "Základní sociální poradenství řeší dávky a odborné výhradně reedukaci poruch učení v rodině.",
          "Rozdíl mezi základním a odborným sociálním poradenstvím spočívá hlavně ve věku klienta, nikoli v charakteru potřeby."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Kdy je nejpřesnější uvažovat o sociální rehabilitaci?",
        "options": [
          "Když je cílem dočasně ulevit rodině tím, že někdo na chvíli převezme péči o člena domácnosti.",
          "Když je cílem posílit samostatnost, orientaci v běžném životě a reálné zapojení do společnosti.",
          "Když je cílem nahradit školní podporu ve výuce bez ohledu na širší fungování člověka v běžném životě.",
          "Když je cílem výhradně medicínská léčba nebo úprava farmakoterapie po získaném onemocnění."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 7,
        "text": "Rodina se neptá na výuku ani na léčbu, ale na nároky, služby, finance a orientaci v systému. Co je v jádru této potřeby?",
        "options": [
          "Jde automaticky o důvod k zahájení řízení OSPOD, protože rodina sama zatím neví, kam se obrátit.",
          "Jde automaticky o školský problém, protože jakákoli nejistota rodiny se má nejprve řešit ve škole.",
          "Jde především o poradenskou orientaci v sociální oblasti, teprve potom lze rozlišovat další návazné kroky.",
          "Jde především o zdravotnickou potřebu, protože nároky a pomůcky se vždy odvíjejí od medicínské diagnózy."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Které čtení vztahu mezi ranou péčí a zdravotnictvím je nejpřesnější?",
        "options": [
          "Raná péče nahrazuje zdravotnictví, pokud už byla stanovena diagnóza a rodina je v domácím prostředí.",
          "Zdravotnictví řeší diagnostiku a léčbu, zatímco raná péče doplňuje podporu dítěte a rodiny v běžném fungování.",
          "Jakmile vstoupí do situace zdravotník, nemá už sociální služba včasné podpory žádný samostatný význam.",
          "Raná péče je vhodná jen tehdy, když se rodina rozhodne nevyužívat zdravotní služby nebo odmítá diagnózu."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 9,
        "text": "Které vymezení hranice role asistenta pedagoga je nejpřesnější?",
        "options": [
          "Asistent pedagoga má být první volbou i pro doprovod, hygienu a volný čas mimo školu, pokud dítě chodí do školy.",
          "Asistent pedagoga je vázán na podporu vzdělávání; potřeby mimo tento rámec mohou vyžadovat jiný typ služby.",
          "Asistent pedagoga je sociální služba školy, a proto automaticky pokrývá i domácí a komunitní fungování žáka.",
          "Asistent pedagoga nahrazuje osobní asistenci všude tam, kde má žák potvrzené zdravotní postižení."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 10,
        "text": "Kdy je nejpřesnější uvažovat o vstupu OSPOD?",
        "options": [
          "Tehdy, když je ve hře ohrožení dítěte, jeho práv, bezpečí nebo závažně narušené fungování rodiny.",
          "Tehdy, když si rodiče nejsou jistí, na které sociální služby a dávky by se mohli ptát.",
          "Tehdy, když škola potřebuje rychleji vyřídit doporučení k podpůrným opatřením pro žáka.",
          "Tehdy, když je třeba zajistit běžnou pomoc s pohybem, dopravou a mimoškolní aktivitou dítěte."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 11,
        "text": "Rodina je velmi přetížená, ale popis situace zatím neukazuje na přímé ohrožení dítěte. Co je nejpřesnější první čtení?",
        "options": [
          "U silné pečující zátěže je nejpřesnější vždy rovnou zahájit linii sociálně-právní ochrany dítěte.",
          "Jakmile rodina popíše únavu a přetížení, odpovědnost přechází hlavně na školu a její vnitřní poradenský rámec.",
          "Pokud není přítomna akutní medicínská komplikace, není na místě hledat žádnou vnější podporu rodině.",
          "Nejprve je třeba zvažovat podpůrné sociální služby a úlevu rodině, ne automaticky vyvozovat vstup OSPOD."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 12,
        "text": "Které shrnutí nejlépe vystihuje vztah MŠ a návazných služeb u malého dítěte s postižením?",
        "options": [
          "Jakmile dítě nastoupí do MŠ, sociální služba rané péče ztrácí smysl a škola přebírá všechnu podporu.",
          "Mateřská škola řeší vzdělávací rámec, ale rodina může zároveň potřebovat jinou podporu mimo školu; nejde o vztah buď–anebo.",
          "Pokud dítě navštěvuje MŠ, má se odložit jakákoli další koordinace, dokud se neukáže školní neúspěch.",
          "MŠ je v těchto situacích jen přechodná forma péče, a proto nemá vlastní vzdělávací ani poradenskou roli."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 13,
        "text": "Které čtení je nejpřesnější, když je školní výkon stabilní, ale hlavní obtíž se týká fungování mimo školu?",
        "options": [
          "Těžiště podpory se může přesouvat k sociální službě, protože popsaný problém neleží primárně ve vzdělávání.",
          "Stabilní školní výkon znamená, že žádná další služba už není věcně potřebná ani smysluplná.",
          "Jakákoli obtíž dítěte je nejpřesněji řešena školou, pokud se projevuje v období povinné školní docházky.",
          "Pokud se potíže objevují hlavně odpoledne, je nejpřesnější hledat jejich původ jen v nedostatečné motivaci rodiny."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Které rozlišení organizace vzdělávání a mimoškolní podpory je nejpřesnější?",
        "options": [
          "Jakmile škola upraví vzdělávání, zaniká potřeba rozlišovat, co se děje ve škole a co v přirozeném prostředí.",
          "Organizace vzdělávání je podřízená sociálním službám, protože ty rozhodují o celém denním režimu dítěte.",
          "Mimoškolní podpora je jen doplňková a nemá být zvažována, pokud škola vytvořila jakékoli podpůrné opatření.",
          "Škola organizuje podporu ve vzdělávání, ale tím sama nepokrývá všechny potřeby života mimo školu."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 15,
        "text": "Které vymezení role školy vůči sociální agendě rodiny je nejpřesnější?",
        "options": [
          "Škola má být prvním rozhodujícím místem pro určení sociálních dávek a druhu sociální služby rodiny.",
          "Škola do sociální oblasti vůbec nevstupuje; jakákoli rodinná zátěž je mimo její odborný zájem a komunikaci.",
          "Škola přebírá sociální agendu rodiny vždy, když se rodinná situace začne promítat do docházky žáka.",
          "Škola může potřebu zachytit a spolupracovat, ale sama není orgánem pro rozhodování o sociálních nárocích rodiny."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 16,
        "text": "Které čtení vztahu zdravotnictví a školy při vzdělávacím dopadu zdravotního stavu je nejpřesnější?",
        "options": [
          "Jakmile existuje zdravotnická zpráva, škola už jen čeká na přesný návod a sama organizačně nerozhoduje.",
          "Pokud je obtíž zdravotně podmíněná, je školní úprava nevhodná, dokud neskončí léčba nebo rehabilitace.",
          "Zdravotnictví popisuje a léčí stav, ale škola musí samostatně řešit jeho dopad do organizace vzdělávání.",
          "Zdravotnický závěr automaticky určuje i všechny pedagogické metody, hodnocení a podobu školního režimu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 17,
        "text": "Které rozlišení léčebné rehabilitace a školní organizace práce je nejpřesnější?",
        "options": [
          "Pokud dítě dochází na rehabilitaci, škola by neměla měnit pracovní tempo ani podmínky vzdělávání.",
          "Úprava školní organizace práce je vhodná až po ukončení rehabilitace, aby se role systémů nepletly.",
          "Rehabilitace a školní organizace práce se nevylučují; léčba běží jinde, škola řeší svůj vlastní funkční dopad.",
          "Rehabilitace sama nahrazuje potřebu pedagogicky promýšlet tempo, zátěž a praktické uspořádání školního dne."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 18,
        "text": "Které shrnutí je nejpřesnější pro vztah lékařské zprávy a školního rozhodování?",
        "options": [
          "Lékařská zpráva je důležitý vstup, ale sama za školu nerozhoduje o konkrétní podobě vzdělávací podpory.",
          "Lékařská zpráva je pro školu závazný pedagogický plán, který se přebírá bez dalšího odborného rozlišení.",
          "Škola má lékařskou zprávu ignorovat, aby nezasahovala do oblasti zdravotnictví ani do komunikace s rodinou.",
          "Jakmile rodina předloží lékařskou zprávu, veškerá další koordinace přechází výhradně na zdravotnické pracoviště."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 19,
        "text": "Které rozlišení klinického logopeda a školní podpory komunikace je nejpřesnější?",
        "options": [
          "Pokud dítě dochází ke klinickému logopedovi, škola už nemá důvod upravovat komunikaci, instrukce ani režim práce.",
          "Školní podpora komunikace nahrazuje klinickou logopedii, pokud dítě tráví většinu dne ve škole nebo v družině.",
          "Rozdíl mezi klinickým logopedem a školou je hlavně administrativní; obsah podpory je ve skutečnosti tentýž.",
          "Klinický logoped řeší terapeutickou linku, zatímco škola musí současně řešit dopad komunikační obtíže do učení a účasti."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 20,
        "text": "Na co má škola u chronického onemocnění reagovat nejpřesněji?",
        "options": [
          "Na konkrétní funkční dopad do učení, tempa, výdrže a bezpečné organizace dne, ne jen na název diagnózy.",
          "Na název diagnózy samotný, protože ten vždy určuje stejný školní režim bez ohledu na individuální dopad.",
          "Na doporučení rodiny samotné, protože u chronického onemocnění je role školy pouze vykonávací a neodlišuje potřeby.",
          "Na to, zda již byla ukončena zdravotnická péče; do té doby nemá škola na funkční dopad situace reagovat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 21,
        "text": "Které vymezení vztahu probíhající léčby a odpovědnosti školy je nejpřesnější?",
        "options": [
          "Po dobu léčby má škola vyčkat a nepřijímat žádná opatření, aby se odborné role systémů nepřekrývaly.",
          "Léčba přebírá i oblast vzdělávání, pokud se obtíž týká zdravotního stavu a ne jen školního výkonu.",
          "Škola má během léčby sledovat jen docházku; ostatní dopady do práce a hodnocení řeší až po jejím ukončení.",
          "To, že probíhá léčba, nepozastavuje povinnost školy reagovat na vzdělávací a organizační dopad situace."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 22,
        "text": "Které čtení krátkodobého zdravotního stavu ve škole je nejpřesnější?",
        "options": [
          "Krátkodobý stav se ve škole zásadně neřeší, protože systém podpory je určen jen pro dlouhodobé diagnózy.",
          "Krátkodobý stav se má řešit výhradně přes zdravotnictví; škola nemá sama měnit praktické podmínky výuky.",
          "I krátkodobý stav může vyžadovat školní úpravu, pokud aktuálně mění funkční podmínky vzdělávání.",
          "U krátkodobého stavu stačí sledovat omluvenky; organizace práce a bezpečnostní režim školy se tím nemění."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 23,
        "text": "Které vymezení je nejpřesnější, když zdravotní obtíž vyžaduje ve škole bezpečný režim a citlivou organizaci dne?",
        "options": [
          "Jde primárně o léčebnou otázku, proto je nevhodné měnit školní režim, dokud nepřijde nový lékařský závěr.",
          "Škola neřeší léčbu, ale musí řešit vlastní organizační vrstvu bezpečí a předvídatelnosti.",
          "Pokud existuje zdravotní obtíž, školní režim má zůstat standardní, aby se dítě nepřetěžovalo dalšími změnami.",
          "Jakýkoli režimový zásah ve škole by znamenal vstup do zdravotnictví, proto jej má škola zásadně odmítat."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 24,
        "text": "Rodina má lékařskou zprávu, ale hlavní problém popisuje v dopravě, domácím režimu a koordinaci pomoci. Co je nejpřesnější?",
        "options": [
          "Vedle zdravotnické informace může být výrazně přítomna i sociální potřeba, protože jádro je praktická a organizační zátěž rodiny.",
          "Jakmile rodina přinese lékařskou zprávu, je nejpřesnější držet situaci už jen ve zdravotnické linii bez dalšího rozlišení.",
          "Praktická zátěž rodiny je vedle medicínského nálezu druhořadá, protože pro systémovou volbu podpory není podstatná.",
          "Pokud je obtíž organizační, má ji řešit pouze škola, protože koordinace rodinného režimu je vždy školská agenda."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 25,
        "text": "Které rozlišení specialisty a metodiky výuky je nejpřesnější?",
        "options": [
          "Specialista, který zná diagnózu, automaticky určuje i didaktické vedení výuky bez další pedagogické úvahy.",
          "Specialista může být důležitý vstup, ale za metodiku výuky a organizaci práce odpovídá škola.",
          "Pokud do situace vstoupí specialista, škola má metodiku výuky co nejvíc zjednodušit a vyčkat na jeho přímé pokyny.",
          "Metodiku výuky škola neřeší, protože u zdravotně podmíněných obtíží rozhoduje o školní práci hlavně terapeut."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 26,
        "text": "Které vymezení meziresortní koordinace je nejpřesnější?",
        "options": [
          "Nejpřesnější koordinace vzniká tehdy, když se celá situace převede pod jediný systém a ostatní ustoupí.",
          "Meziresortní koordinace znamená, že jeden partner přebírá odpovědnost i za úkoly, které patří jiným resortům.",
          "Různé vrstvy potřeby mohou vyžadovat různé partnery; přesná koordinace není totéž jako hledání jedné všeřešící instituce.",
          "Koordinace je vhodná jen tehdy, pokud se partneři shodnou, že problém nepatří ani škole, ani rodině."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 27,
        "text": "Které čtení organizace péče mimo školu je nejpřesnější?",
        "options": [
          "Péče a doprovod mimo rámec vzdělávání nelze automaticky připsat škole jen proto, že dítě je žákem.",
          "Jakmile je dítě žákem, je nejpřesnější očekávat, že škola bude organizovat i jeho mimoškolní péči a doprovod.",
          "Organizace péče mimo školu je druhořadá a systémově bez významu, pokud je ve škole nastavený funkční režim.",
          "Pokud má rodina obtíže s organizací péče, má se nejprve stáhnout z aktivit mimo školu a další podporu nehledat."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 28,
        "text": "Které vymezení role školy při výběru sociální služby je nejpřesnější?",
        "options": [
          "Škola může zachytit potřebu a podpořit orientaci, ale není sama rozhodujícím orgánem pro výběr sociální služby.",
          "Škola má být hlavním rozhodovatelem o tom, kterou sociální službu bude rodina využívat a v jakém rozsahu.",
          "Pokud škola rozpozná sociální potřebu, je nejpřesnější rodinu už dál neinformovat a nekomunikovat s ní o návaznosti.",
          "Škola může zvažovat sociální službu jen tehdy, když má od OSPOD písemný pokyn k výběru konkrétního poskytovatele."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 29,
        "text": "Které čtení vztahu sociální zátěže rodiny a školního dopadu je nejpřesnější?",
        "options": [
          "Jakmile se rodinná zátěž projeví ve škole, přestává být sociální oblast relevantní a vše přechází na školu.",
          "Sociální zátěž rodiny se školy odborně netýká, protože škola sleduje jen výkon a docházku bez širšího kontextu.",
          "Sociální zátěž rodiny může výrazně dopadat do školy, ale neznamená to, že se z ní tím stává čistě školní problém.",
          "Školní dopad rodinné zátěže je vždy důkazem ohrožení dítěte a automatickým důvodem pro vstup OSPOD."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 30,
        "text": "Jaký postup uvažování je v meziresortně složité situaci nejpřesnější?",
        "options": [
          "Nejprve vybrat nejsilnější instituci a teprve podle ní zpětně vyložit, jaké potřeby v situaci vlastně jsou.",
          "Nejprve určit, kdo je za situaci formálně odpovědný, a ostatní vrstvy potřeby ponechat až na závěrečné doplnění.",
          "Nejprve rozlišit vrstvy potřeby, a teprve potom přiřazovat vhodné partnery a další kroky.",
          "Nejprve zjistit, kde je klient právě evidován, protože to samo určuje i správné čtení celé situace."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 31,
        "text": "Které shrnutí nejpřesněji vystihuje logiku návaznosti služeb?",
        "options": [
          "Návaznost znamená, že se po prvním kontaktu všechna další podpora přesune pod jedinou centrální instituci.",
          "Návaznost je hlavně administrativní pojem; pro skutečné rozhodování o potřebě klienta nemá větší význam.",
          "Návaznost znamená, že různé části situace mohou řešit různí partneři v souběhu nebo po sobě.",
          "Návaznost je vhodná jen tehdy, když jedna služba selže a druhá ji úplně nahradí v celém rozsahu podpory."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 32,
        "text": "Které vymezení je nejpřesnější pro práci s různými partnery v jedné situaci?",
        "options": [
          "Je odborně v pořádku, když různé vrstvy potřeby drží různí partneři, pokud jsou role srozumitelně rozlišené.",
          "Odborně přesné je vždy zvolit jednoho partnera a ostatní odsunout, aby nedocházelo k roztříštění podpory.",
          "Různí partneři znamenají nejasnost v systému; správný postup je proto vyčkat, kdo se ujme situace jako první.",
          "Jakmile je potřeba více partnerů, ukazuje to na chybnou diagnostiku nebo na nedostatečnou motivaci rodiny."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 33,
        "text": "Která strategie prvního čtení zadání je v B6 nejpřesnější?",
        "options": [
          "Nejprve pojmenovat hlavní potřebu a její dopad, ne se chytit první známé instituce nebo zkratky.",
          "Nejprve vyhledat jakoukoli známou instituci v zadání, protože ta obvykle přímo prozrazuje správnou odpověď.",
          "Nejprve si všimnout diagnózy a podle ní rovnou vybrat systém, aniž by se četl funkční dopad situace.",
          "Nejprve rozhodnout, zda je situace školní nebo sociální; zdravotnická vrstva se zvažuje až na úplném konci."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 34,
        "text": "Které vymezení hranice koordinace školy je nejpřesnější?",
        "options": [
          "Škola může koordinovat spolupráci kolem vzdělávacího dopadu, ale nepřebírá tím cizí resortní kompetence.",
          "Škola má při koordinaci převzít i rozhodování o sociálních službách a zdravotnických postupech, aby byl systém jednotný.",
          "Pokud se v situaci objeví jiný resort, škola už nemá koordinovat nic a má zůstat jen pasivním příjemcem závěrů.",
          "Koordinace školy je vhodná jen tehdy, když se ostatní partneři vzdají samostatné komunikace s rodinou."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 35,
        "text": "Kdy není souběh podpory duplicitou?",
        "options": [
          "Když totéž dělají dva partneři současně, protože vyšší počet služeb vždy zvyšuje jistotu výsledku.",
          "Když jednotliví partneři drží odlišné, jasně vymezené vrstvy potřeby a navzájem se nepřepisují.",
          "Když škola převezme i sociální a zdravotnickou linku, aby klient nemusel komunikovat s více místy.",
          "Když se jeden partner vzdá své odbornosti a připojí se jen formálně, aby bylo možné vykázat spolupráci."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 36,
        "text": "Které shrnutí nejlépe vystihuje, co v B6 signalizuje práh pro uvažování o OSPOD?",
        "options": [
          "Jakmile je situace dlouhodobá, je práh OSPOD naplněn automaticky bez ohledu na povahu problému.",
          "Nejde o každou náročnou situaci, ale o situaci, kde je třeba chránit práva, bezpečí nebo řádný vývoj dítěte.",
          "Práh OSPOD je naplněn vždy, když rodina čerpá sociální službu nebo má doloženou diagnózu dítěte.",
          "Do úvahy o OSPOD vstupuje hlavně to, zda škola nebo rodina stihla vyřídit všechny dokumenty včas."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 37,
        "text": "Co je nejpřesnější těžiště podpory, když je problémem hlavně zátěž pečujícího a nikoli ohrožení dítěte?",
        "options": [
          "Těžiště leží v tom, aby škola převzala mimoškolní péči, protože jde o dítě školního věku.",
          "Těžiště leží v zahájení OSPOD, protože přetížení pečujícího samo o sobě vždy znamená ohrožení dítěte.",
          "Těžiště leží v tom, aby se rodina stáhla z aktivit a snížila nároky, místo hledání vnější podpory.",
          "Těžiště leží v podpoře a úlevě rodině, typicky přes sociální služby, ne v automatickém přechodu do ochranné linie."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 38,
        "text": "Které čtení je nejpřesnější, když rodina potřebuje hlavně zorientovat praktické fungování a návaznost podpory?",
        "options": [
          "Nejpřesnější je rovnou doporučit konkrétní školské opatření, protože praktické fungování rodiny se tím obvykle srovná.",
          "Nejpřesnější je čekat na další zhoršení, protože orientace v systému bez akutního tlaku bývá předčasná.",
          "Nejprve je na místě kvalitní poradenská orientace a rozpad situace na řešitelné kroky, ne skok do jedné známé instituce.",
          "Nejpřesnější je vybrat jedinou službu a ostatní vrstvy situace odložit, aby rodina nebyla zahlcená informacemi."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 39,
        "text": "Které vymezení praktické pomoci mimo školu je nejpřesnější?",
        "options": [
          "Praktická pomoc mimo školu je vedlejší a systémově se neřeší, pokud škola funguje bez větších problémů.",
          "Praktická pomoc mimo školu je nejpřesněji chápána jako rozšířená pedagogická práce školy v odpoledních hodinách.",
          "Praktická pomoc mimo školu je znakem, že by rodina měla nejprve změnit vzdělávací zařízení nebo školní režim dítěte.",
          "Jde o oblast, kde často vstupují sociální služby, protože těžiště podpory leží v běžném životě, ne ve výuce."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 40,
        "text": "Které vymezení vztahu soucitu a odpovědnosti školy je nejpřesnější?",
        "options": [
          "Silná empatická reakce školy je důvodem, aby dočasně převzala i rodinné a sociální povinnosti mimo vzdělávání.",
          "Empatie je důležitá, ale nesmí vést k tomu, že škola začne přebírat úkoly, které jí systémově nepatří.",
          "Pokud škola zachytí rodinnou zátěž, má se emočně distancovat a omezit komunikaci jen na známky a docházku.",
          "Škola projeví empatii nejlépe tím, že přestane rozlišovat mezi pedagogickou podporou, sociální službou a ochranou dítěte."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 41,
        "text": "Které shrnutí návratu dítěte po hospitalizaci do školy je nejpřesnější?",
        "options": [
          "Po hospitalizaci je nejpřesnější ponechat veškeré rozhodování zdravotnictví a školu zapojit až po plném zotavení.",
          "Návrat po hospitalizaci je vícevrstvá situace: zdravotní péče pokračuje, ale škola zároveň řeší vlastní organizační a vzdělávací dopad.",
          "Po hospitalizaci je hlavním cílem rychlý návrat k původnímu režimu, aby se systémy zbytečně nepropojovaly.",
          "Po hospitalizaci má škola řešit jen omluvenou absenci; širší organizační a rodinný dopad do její odborné role nespadá."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 42,
        "text": "Kdy je v B6 nejpřesnější říci „ještě ne OSPOD“?",
        "options": [
          "Když škola situaci předá sociální službě, protože tím automaticky zaniká možnost uvažovat o právech dítěte.",
          "Jakmile rodina popisuje dlouhodobou únavu, protože délka trvání sama o sobě nahrazuje posouzení míry ohrožení.",
          "Když je situace náročná, ale popis zatím ukazuje spíš na potřebu podpory a orientace než na ochranný zásah.",
          "Když existuje lékařská zpráva, protože u zdravotně podmíněných situací OSPOD do úvahy vůbec nevstupuje."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 43,
        "text": "Které uvažování je u komplexní situace nejpřesnější?",
        "options": [
          "Nejprve zvolit nejvýraznější emoci v zadání a podle ní přiřadit hlavní instituci i další krok bez další analýzy.",
          "Nejpřesnější je hledat jeden dominantní pojem, kterému podřídíme všechny ostatní vrstvy situace i role partnerů.",
          "Přesně oddělit, co je vzdělávací dopad, co je sociální zátěž a co je zdravotnická linka; teprve pak spojovat plán podpory.",
          "Stačí rozlišit, zda je problém dítěte nebo rodiny; jemnější vrstevnatost už je pro praxi zbytečně akademická."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 44,
        "text": "Co je v B6 nejpřesnější podobou poradenského úsudku?",
        "options": [
          "Volit partnera a krok podle hlavní potřeby a jejího dopadu, ne podle jediné nálepky, zkratky nebo diagnózy.",
          "Volit partnera vždy podle toho, který systém je v zadání zmíněn jako první, aby byla práce rychlá a konzistentní.",
          "Volit partnera podle nejzávažněji znějícího pojmu v zadání, i kdyby neodpovídal hlavnímu funkčnímu dopadu situace.",
          "Volit partnera tak, aby počet zapojených služeb byl co nejmenší, i za cenu ztráty přesnosti čtení potřeby."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 45,
        "text": "Které vymezení je nejpřesnější, když má rodinná situace dopad do vzdělávání?",
        "options": [
          "Škola má vyčkat na stabilizaci rodiny, protože jinak by předčasně zasahovala do sociální oblasti.",
          "Jakmile se ukáže rodinná zátěž, je nejpřesnější školní podporu zastavit a situaci plně předat ven.",
          "Škola nesmí čekat, až se rodinná situace vyřeší jinde; svůj vzdělávací dopad musí řešit průběžně.",
          "Vzdělávací dopad rodinné zátěže se řeší až ve chvíli, kdy sociální služba potvrdí, že už rodina spolupracuje."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 46,
        "text": "Které rozlišení klinického logopeda a školní podpory komunikace je nejpřesnější pro porozumění instrukcím a účast ve výuce?",
        "options": [
          "Porozumění instrukcím ve škole je výhradně otázkou klinické logopedie, nikoli organizace výuky a komunikace učitele.",
          "Jakmile žák dochází na logopedii, není už vhodné ve škole měnit podobu instrukcí ani způsob ověřování porozumění.",
          "Školní podpora komunikace je náhradou klinické logopedie, proto terapeutická péče není v takové situaci potřebná.",
          "Terapeutická linka může běžet mimo školu, ale škola současně odpovídá za komunikační přístupnost vlastních situací."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 47,
        "text": "Které shrnutí nejlépe vystihuje vztah čekání na nový odborný závěr a školní reakce?",
        "options": [
          "Dokud nepřijde nový odborný závěr, je nejpřesnější školní režim vůbec neměnit, aby byl formálně čistý.",
          "Když je funkční dopad zjevný, škola nemá rezignovat na vlastní průběžnou reakci jen proto, že čeká na další dokument.",
          "Nový odborný závěr má přednost před jakýmkoli pozorováním školy, proto je průběžná školní reakce spíš nežádoucí.",
          "Čekání na nový závěr je vhodné hlavně proto, aby rodina sama převzala odpovědnost za veškeré dopady do školy."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 48,
        "text": "Které vymezení hranice školsky orientované logopedické podpory je nejpřesnější?",
        "options": [
          "Školsky orientovaná logopedická podpora má být úplnou náhradou zdravotnické terapie, pokud je dítě ve školním věku.",
          "Ve škole jde hlavně o dopad komunikace do učení a účasti; terapeutická zdravotnická linka tím není zrušena ani pohlcena.",
          "Školsky orientovaná logopedická podpora je vhodná jen pro administrativní přepis závěrů klinického logopeda do dokumentace.",
          "Ve škole se komunikační obtíže neřeší, protože jakákoli logopedická práce automaticky patří mimo vzdělávání."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 49,
        "text": "Které shrnutí je nejpřesnější pro situaci, kde současně běží léčba, rodinná zátěž i vzdělávací dopad?",
        "options": [
          "Nejpřesnější je vybrat jeden rozhodující systém a ostatní vrstvy dočasně ignorovat, aby byl plán podpory jednodušší.",
          "Nejpřesnější je převést situaci do školy, protože ta má v praxi nejčastější kontakt s dítětem i rodinou.",
          "Nejpřesnější je přenechat plán zdravotnictví, protože léčba je v takové situaci vždy nadřazená ostatním vrstvám.",
          "Nejpřesnější je držet všechny tři vrstvy: léčba běží ve svém systému, rodina může potřebovat sociální oporu a škola řeší vzdělávací dopad."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 50,
        "text": "Jaká řešitelská strategie je pro B6 hard nejpřesnější?",
        "options": [
          "Rozlišovat, co patří škole, co sociální službě, co zdravotnictví a zda je ve hře ochranná linka; až pak volit odpověď.",
          "Řídit se tím, který systém působí v zadání lidsky nejbližší, protože v těžkých situacích bývá rozhodující empatie.",
          "Volit vždy nejsilnější instituci v zadání, aby nevznikala roztříštěnost a potřeba jemného rozlišování kompetencí.",
          "Nejprve hledat, zda je v zadání diagnóza; pokud ano, ostatní vrstvy situace jsou už jen doplňkové a méně důležité."
        ],
        "correct": 0,
        "correctLetter": "A"
      }
    ]
  },
  {
    "id": 7,
    "label": "Baterie 7",
    "title": "Poradenský úsudek, etika a kvalita procesu",
    "subtitle": "Poradenská zakázka, kvalita výstupu, hranice role a převod závěrů do proveditelné podpory.",
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
    "title": "Finální nejtěžší selekční baterie",
    "subtitle": "Finální baterie postavená na přesném rozlišování pojmů, dokumentů, rolí, legislativy a krátké aplikaci bez dominance mikrokazuistik.",
    "purpose": "Ověřit skutečně selektivní připravenost na UPOL: odlišit blízké pojmy, správně číst dokumenty a role systému, orientovat se v aktuální legislativní logice a u krátkých situací zvolit nejpřesnější odborný závěr bez stylistických vodítek.",
    "difficulty": "velmi vysoká",
    "dominant": [
      "jemné pojmové rozlišení",
      "dokumenty, role a institucionální hranice",
      "aktuální školské a poradenské minimum",
      "komunikace a profesní etika",
      "krátká aplikace bez dominující kazuistiky",
      "finální syntetické rozhodování"
    ],
    "breakdown": [
      "16× přesné pojmové a disciplinární rozlišení",
      "12× dokumenty, role a systém zařízení",
      "10× komunikace, etika a profesní kompetence",
      "8× aktuální legislativně-procesní rozlišení",
      "4× krátká aplikovaná syntéza"
    ],
    "tags": [
      "hard mode",
      "B8 revize",
      "UPOL",
      "poradenství",
      "legislativa",
      "dokumenty a role"
    ],
    "durationMinutes": 30,
    "questionCount": 50,
    "questions": [
      {
        "number": 1,
        "text": "Které vymezení nejlépe odpovídá současnému pojetí speciální pedagogiky?",
        "options": [
          "Sleduje hlavně klasifikaci vad a z ní přímo odvozené zařazení do typu zařízení, a právě v tom vidí hlavní vysvětlení.",
          "Sleduje vztah mezi možnostmi člověka, bariérami prostředí a podobou podpory ve vzdělávání i participaci.",
          "Sleduje především léčbu poruch, zatímco otázky edukace stojí až na druhém místě, a tímto směrem by vedla podporu.",
          "Sleduje především sociální dávky a správní řízení spojené s postižením, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 2,
        "text": "Které rozlišení reedukace a kompenzace je odborně nejpřesnější?",
        "options": [
          "Reedukace je jen domácí procvičování, kompenzace jen úprava školních pomůcek, a právě v tom vidí hlavní vysvětlení.",
          "Reedukace se snaží oslabenou funkci rozvíjet, kompenzace hledá jinou funkční cestu k témuž cíli.",
          "Kompenzace nastupuje až po úplném vyčerpání reedukace a oba přístupy se nesmějí kombinovat.",
          "Oba pojmy označují ve školní praxi totéž a liší se jen oblíbeností termínu, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 3,
        "text": "Které tvrzení nejpřesněji vystihuje augmentativní a alternativní komunikaci (AAK)?",
        "options": [
          "Augmentativní komunikace je vždy technologická, alternativní vždy bez pomůcek, a právě v tom vidí hlavní vysvětlení.",
          "Augmentativní komunikace řeč doplňuje, alternativní ji může nahrazovat; obě míří k funkčnímu dorozumění.",
          "Augmentativní komunikace je určena jen pro děti, alternativní pouze pro dospělé uživatele, a tímto směrem by vedla podporu.",
          "Oba pojmy označují nácvik správné výslovnosti při zachované běžné řeči, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 4,
        "text": "Které vymezení psychopedie je nejpřesnější?",
        "options": [
          "Zabývá se edukací a podporou osob s mentálním postižením a s obtížemi v intelektovém a adaptivním fungování.",
          "Zabývá se především léčbou duševních onemocnění bez přímé vazby na vzdělávání, a z toho odvozuje další závěr.",
          "Zabývá se výhradně specifickými poruchami učení a grafomotorikou, a tímto směrem by vedla podporu.",
          "Zabývá se hlavně rizikovým chováním, delikvencí a preventivně výchovnou péčí, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 5,
        "text": "Které vymezení mentálního postižení je odborně nejpřesnější?",
        "options": [
          "Jde o stav, v němž omezení intelektových schopností a adaptivního fungování zasahuje učení, samostatnost i každodenní život.",
          "Jde o jakoukoli poruchu duševního zdraví, která se projeví ve škole sníženým výkonem, a z toho odvozuje další závěr.",
          "Jde o izolovanou poruchu pozornosti a paměti bez širšího dopadu na adaptaci, a tímto směrem by vedla podporu.",
          "Jde o souhrn problémů v chování, které vznikají hlavně nedůslednou výchovou, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 6,
        "text": "Které tvrzení je nejpřesnější pro rozlišení PAS a čistě logopedického problému?",
        "options": [
          "Jakmile je výslovnost nápadná, jde vždy především o PAS a širší komunikaci není třeba řešit, a právě v tom vidí hlavní vysvětlení.",
          "PAS se pozná hlavně podle vadné artikulace, zatímco sociální porozumění zůstává zachované, a z toho odvozuje další závěr.",
          "Je-li dítě slovně aktivní, PAS lze prakticky vyloučit a stačí sledovat jen mluvní tempo, a tímto směrem by vedla podporu.",
          "U PAS může být slovní zásoba relativně dobrá, ale oslabené bývá sociální porozumění, sdílení významu a flexibilita v komunikaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 7,
        "text": "Které vymezení bazální stimulace je nejpřesnější?",
        "options": [
          "Jde o logopedickou metodu zaměřenou hlavně na artikulaci izolovaných hlásek, a právě v tom vidí hlavní vysvětlení.",
          "Jde o psychoterapeutický postup určený výhradně pro práci s traumatem a regresí, a z toho odvozuje další závěr.",
          "Jde o ošetřovatelský koncept využívající práci se somatickými, vestibulárními a vibračními podněty k podpoře vnímání, orientace a kontaktu.",
          "Jde o fyzioterapeutický program zaměřený výhradně na nácvik hrubé motoriky bez smyslové složky, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 8,
        "text": "Které tvrzení nejlépe vystihuje současné pojetí etopedie?",
        "options": [
          "Nejde jen o sankcionování rizikového chování, ale o preventivní, výchovnou a reedukační práci v kontextu vztahů a prostředí.",
          "Jejím hlavním cílem je nahrazovat soudní a represivní systém při práci s delikvencí, a z toho odvozuje další závěr.",
          "Zabývá se výhradně farmakologickou léčbou poruch chování a emocí, a tímto směrem by vedla podporu.",
          "Zabývá se především smyslovými vadami, které sekundárně vedou k poruše kázně, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 9,
        "text": "Které tvrzení je nejpřesnější pro tyflopedické uvažování o podpoře?",
        "options": [
          "Jakmile je přítomna oční diagnóza, lze podporu určit bez sledování reálného funkčního profilu.",
          "Tyflopedická podpora se týká pouze Braillova písma a netýká se práce se zrakovým zbytkem, a z toho odvozuje další závěr.",
          "Podpora se neodvíjí jen od názvu diagnózy, ale od funkčního využití zraku a způsobu přístupu k informaci.",
          "Při oslabeném zrakovém vnímání je nejdůležitější ponechat stejné materiály jako u ostatních a měnit jen tempo."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 10,
        "text": "Které přiřazení somatopedie a ortopedie je správné?",
        "options": [
          "Somatopedie je část chirurgie a ortopedie je pedagogický obor pro práci ve škole, a právě v tom vidí hlavní vysvětlení.",
          "Somatopedie řeší edukaci a podporu osob s tělesným postižením, ortopedie je lékařský obor zaměřený na pohybový aparát.",
          "Somatopedie i ortopedie označují totéž; liší se jen českým a latinským názvem, a tímto směrem by vedla podporu.",
          "Somatopedie se týká jen rehabilitace po úrazech a ortopedie jen komunikačních bariér, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 11,
        "text": "Která reakce nejlépe odpovídá aktivnímu naslouchání v poradenském rozhovoru?",
        "options": [
          "Rychle nabídnout hotové řešení, aby se rozhovor zbytečně nezdržoval emocemi, a právě v tom vidí hlavní vysvětlení.",
          "Převzít interpretaci situace za klienta a ujistit ho, že jeho pohled už není třeba rozvíjet, a z toho odvozuje další závěr.",
          "Shrnout, co druhý říká, ověřit porozumění a ponechat prostor pro doplnění bez okamžité rady či hodnocení.",
          "Střídat otázky s vlastními příklady z praxe, aby bylo zřejmé, že poradce ví, jak situace dopadne."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 12,
        "text": "Co nejpřesněji vyjadřuje validace v poradenské komunikaci?",
        "options": [
          "Potvrzení, že klientův pohled je vždy objektivně správný a není vhodné jej dále zkoumat, a právě v tom vidí hlavní vysvětlení.",
          "Uznání, že prožívání druhého je vzhledem k situaci pochopitelné, aniž by poradce musel bezvýhradně souhlasit se všemi závěry.",
          "Přesvědčení klienta, aby své emoce odložil a soustředil se jen na fakta a formuláře, a tímto směrem by vedla podporu.",
          "Nahrazení klientovy výpovědi odborným výkladem, aby se snížila nejistota při rozhovoru, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 13,
        "text": "Které vymezení sebereflexe je pro profesi speciálního pedagoga nejpřesnější?",
        "options": [
          "Promýšlení vlastních postojů, myšlenek a emocí a jejich vlivu na odborné jednání i rozhodování.",
          "Shromažďování zpětné vazby od klienta bez vztahu k tomu, jak s ní odborník pracuje.",
          "Vedení vnitřního dialogu klienta při skupinové práci s rodinou a učiteli, a tímto směrem by vedla podporu.",
          "Snaha co nejvíce potlačit osobní reakce tak, aby se do odborné práce nedostalo žádné vlastní zaujetí."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 14,
        "text": "Které tvrzení nejlépe vystihuje profesní hranice v poradenské práci?",
        "options": [
          "Poradce má podporovat porozumění a rozhodování klienta, nemá však přebírat životní rozhodnutí ani vytvářet závislost na své osobě.",
          "Poradce má být pro rodinu hlavním rozhodovatelem, protože nese odbornou odpovědnost za výsledek, a z toho odvozuje další závěr.",
          "Poradce má udržovat co nejosobnější vztah, aby se posílila poslušnost vůči jeho doporučením, a tímto směrem by vedla podporu.",
          "Poradce má zůstat zcela distancovaný a neprojevovat žádné lidské zaujetí ani podporu, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 15,
        "text": "Který postup je profesně nejvhodnější při sdělování závažných informací rodiči?",
        "options": [
          "Předat co nejrychleji úplný odborný výklad, aby rodič ihned pochopil celou závažnost situace, a právě v tom vidí hlavní vysvětlení.",
          "Začít administrativou a podpisy a teprve po nich vysvětlit, co nález prakticky znamená, a z toho odvozuje další závěr.",
          "Vyhnout se nepříjemným částem sdělení a soustředit se jen na pozitivní stránky, aby nevznikl odpor.",
          "Strukturovat sdělení srozumitelně, dávkovat informace a průběžně vytvářet prostor pro otázky i emoční reakci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 16,
        "text": "Který princip je nejpřesnější při volbě komunikačního způsobu s neslyšícím klientem?",
        "options": [
          "Vždy předpokládat, že nejvhodnější je psaná čeština, protože je pro školu nejjednodušší, a právě v tom vidí hlavní vysvětlení.",
          "Vždy komunikovat výhradně přes doprovázející osobu, aby nevznikla komunikační nejistota, a z toho odvozuje další závěr.",
          "Předpokládat, že každý neslyšící automaticky preferuje jeden a tentýž znakový systém, a tímto směrem by vedla podporu.",
          "Nevycházet jen z diagnózy, ale zjišťovat preferovaný a funkční komunikační způsob konkrétního člověka v dané situaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 17,
        "text": "Které tvrzení nejpřesněji vystihuje rozdíl mezi PPP a SPC?",
        "options": [
          "PPP je širší školské poradenské zařízení, zatímco SPC je více vázáno na práci se žáky s konkrétními druhy znevýhodnění.",
          "PPP vydává jen psychologické zprávy, kdežto SPC jen sociální posudky bez vztahu ke škole, a z toho odvozuje další závěr.",
          "PPP i SPC mají totožné cílové skupiny i postupy; rozdělení je dnes jen historický přežitek, a tímto směrem by vedla podporu.",
          "SPC je školní pracoviště v běžné základní škole, zatímco PPP patří výhradně do zdravotnictví, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 18,
        "text": "Které tvrzení odpovídá organizaci poradenských služeb ve škole podle vyhlášky č. 72/2005 Sb.?",
        "options": [
          "Poradenské služby ve škole zajišťuje výhradně externí PPP nebo SPC; škola je sama neposkytuje, a právě v tom vidí hlavní vysvětlení.",
          "V základní a střední škole se na poradenských službách zpravidla podílejí výchovný poradce a školní metodik prevence, případně i další odborní pracovníci.",
          "Ve škole je za poradenské služby odpovědný jen třídní učitel, pokud má pedagogickou praxi delší než pět let, a tímto směrem by vedla podporu.",
          "Školní poradenské služby lze poskytovat jen tehdy, když škola zaměstnává současně psychologa i speciálního pedagoga, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 19,
        "text": "Které rozlišení role výchovného poradce a školního metodika prevence je nejpřesnější?",
        "options": [
          "Výchovný poradce vede výhradně kázeňská řízení a školní metodik prevence rozhoduje o podpůrných opatřeních vyšších stupňů, a právě v tom vidí hlavní vysvětlení.",
          "Obě role jsou v praxi zcela totožné a liší se jen názvem podle tradice školy, a z toho odvozuje další závěr.",
          "Výchovný poradce řeší vzdělávací dráhu, podpůrná opatření a spolupráci se ŠPZ; školní metodik prevence se soustředí na prevenci rizikového chování.",
          "Školní metodik prevence zajišťuje hlavně diagnostiku speciálních vzdělávacích potřeb a vydává doporučení škole, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 20,
        "text": "Které shrnutí vztahu zprávy a doporučení školského poradenského zařízení je nejpřesnější?",
        "options": [
          "Zpráva shrnuje odborná zjištění a jejich odůvodnění, zatímco doporučení je převádí do konkrétní vzdělávací podpory.",
          "Zpráva je interní poznámka školy a doporučení slouží výhradně orgánům sociálně-právní ochrany, a z toho odvozuje další závěr.",
          "Oba dokumenty mají stejnou funkci a liší se pouze rozsahem textu a grafickou podobou, a tímto směrem by vedla podporu.",
          "Doporučení popisuje pouze anamnézu, kdežto zpráva nastavuje organizaci výuky a hodnocení ve škole, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 21,
        "text": "Které vymezení IVP je nejpřesnější?",
        "options": [
          "Jde o odbornou zprávu PPP nebo SPC, kterou škola pouze archivuje bez dalšího rozpracování, a právě v tom vidí hlavní vysvětlení.",
          "Jde o povinný dokument každého žáka, který jednou navštívil školní poradenské pracoviště, a z toho odvozuje další závěr.",
          "Jde o zdravotnický plán léčby, který škola nesmí nijak vztáhnout ke své výuce, a tímto směrem by vedla podporu.",
          "Jde o školní dokument, který konkretizuje podmínky vzdělávání konkrétního žáka na základě doporučení a jeho potřeb."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 22,
        "text": "Co nejpřesněji vystihuje PLPP?",
        "options": [
          "Je to odborný výstup ŠPZ, kterým se škole přidělují vyšší stupně podpůrných opatření, a právě v tom vidí hlavní vysvětlení.",
          "Je to školní plán pedagogické podpory používaný zejména při podpůrných opatřeních prvního stupně a při průběžném vyhodnocování podpory.",
          "Je to souhrnná sociální zpráva pro OSPOD o rodinné situaci žáka, a tímto směrem by vedla podporu.",
          "Je to závěrečná zpráva z pobytu ve středisku výchovné péče, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 23,
        "text": "Které tvrzení odpovídá § 16 školského zákona?",
        "options": [
          "Podpůrná opatření jsou bezplatná jen tehdy, pokud je škola schopna je zajistit z vlastních rezerv, a právě v tom vidí hlavní vysvětlení.",
          "Na bezplatná podpůrná opatření mají nárok pouze žáci se zdravotním postižením, nikoli s jinou potřebou podpory, a z toho odvozuje další závěr.",
          "Děti, žáci a studenti se speciálními vzdělávacími potřebami mají právo na bezplatné poskytování podpůrných opatření školou a školským zařízením.",
          "Podpůrná opatření jsou nároková pouze tehdy, pokud je žák vzděláván ve škole zřízené podle § 16 odst. 9, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 24,
        "text": "Které vymezení dítěte, žáka nebo studenta se speciálními vzdělávacími potřebami odpovídá školskému zákonu?",
        "options": [
          "Jde výhradně o osobu s lékařsky potvrzeným zdravotním postižením bez ohledu na vzdělávací dopad, a právě v tom vidí hlavní vysvětlení.",
          "Jde o osobu, která má podprůměrný prospěch alespoň ve třech povinných předmětech, a z toho odvozuje další závěr.",
          "Jde o osobu, kterou škola dočasně označí za problémovou z výchovných důvodů, a tímto směrem by vedla podporu.",
          "Jde o osobu, která k naplnění vzdělávacích možností nebo k uplatnění práv na rovnoprávném základě potřebuje podpůrná opatření."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 25,
        "text": "Které tvrzení o lhůtě pro vydání zprávy a doporučení je podle vyhlášky č. 27/2016 Sb. správné?",
        "options": [
          "Zpráva i doporučení se vydávají vždy až po skončení školního roku, aby bylo možné vyhodnotit dlouhodobý efekt podpory, a právě v tom vidí hlavní vysvětlení.",
          "Lhůta je jednotně 30 dnů od podání žádosti bez ohledu na průběh posuzování a další podklady, a z toho odvozuje další závěr.",
          "Vyhláška stanoví pouze tříměsíční lhůtu pro zahájení služby, nikoli pro vydání zprávy a doporučení, a tímto směrem by vedla podporu.",
          "Zpráva a doporučení se vydávají do 30 dnů ode dne ukončení posuzování speciálních vzdělávacích potřeb, nejpozději však do 3 měsíců od přijetí žádosti."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 26,
        "text": "Které tvrzení o krizové poradenské intervenci odpovídá vyhlášce č. 72/2005 Sb.?",
        "options": [
          "Krizovou intervenci lze poskytnout až po standardním zařazení žádosti do běžné tříměsíční lhůty.",
          "Krizová intervence se poskytuje jen tehdy, pokud před ní proběhlo komplexní psychologické vyšetření.",
          "Krizová poradenská intervence v naléhavých ohrožujících situacích se poskytuje bezprostředně po žádosti.",
          "Krizová intervence je vyhrazena pouze zdravotnictví a školský poradenský systém ji neposkytuje."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 27,
        "text": "Které tvrzení o zpracování IVP je podle vyhlášky č. 27/2016 Sb. správné?",
        "options": [
          "IVP se zpracovává automaticky do 1 měsíce od první návštěvy školního poradenského pracoviště, a právě v tom vidí hlavní vysvětlení.",
          "IVP se zpracovává nejpozději do 3 měsíců od vydání zprávy, i když škola neobdržela žádost, a z toho odvozuje další závěr.",
          "IVP je zpracován bez zbytečného odkladu, nejpozději do 1 měsíce ode dne, kdy škola obdržela doporučení a žádost zletilého žáka nebo zákonného zástupce.",
          "IVP se může zpracovat až po pololetním hodnocení, aby škola měla dost podkladů z výuky, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 28,
        "text": "Které tvrzení odpovídá poučení u zprávy nebo doporučení školského poradenského zařízení?",
        "options": [
          "Zpráva a doporučení jsou konečné a po převzetí již nepodléhají žádné revizi ani přezkumu.",
          "Zletilý žák nebo zákonný zástupce může ve stanovené lhůtě požádat o revizi dokumentu.",
          "O revizi může žádat pouze ředitel školy, protože jde o dokument sloužící výhradně škole.",
          "Revize je možná jen tehdy, když s ní předem písemně souhlasí pracovník, který dokument vydal."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 29,
        "text": "Které tvrzení o poskytování poradenských služeb odpovídá vyhlášce č. 72/2005 Sb.?",
        "options": [
          "Podrobné poučení není nutné, pokud jde o odbornou službu poskytovanou pedagogickým pracovníkem, a právě v tom vidí hlavní vysvětlení.",
          "Škola nebo školské poradenské zařízení musí předem srozumitelně informovat o povaze, rozsahu, přínosech, možných důsledcích i právech spojených se službou.",
          "O rozsahu a důsledcích služby se informuje až po jejím ukončení, aby nebyl ovlivněn průběh vyšetření, a tímto směrem by vedla podporu.",
          "Poučení se týká pouze zdravotnických výkonů; školské poradenské služby tuto povinnost nemají, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 30,
        "text": "Které rozlišení sociálního poradenství a speciálněpedagogického poradenství je nejpřesnější?",
        "options": [
          "Sociální poradenství řeší výhradně diagnózu a speciálněpedagogické poradenství hlavně dávky a příspěvky, a právě v tom vidí hlavní vysvětlení.",
          "Oba typy poradenství mají stejný obsah; liší se jen názvem podle resortu, který službu zřizuje, a z toho odvozuje další závěr.",
          "Speciálněpedagogické poradenství se omezuje jen na školní prospěch, sociální poradenství jen na zdravotnické výkony, a tímto směrem by vedla podporu.",
          "Sociální poradenství orientuje v sociální situaci, službách a nárocích, zatímco speciálněpedagogické poradenství převádí obtíže do podpory učení, komunikace a fungování."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 31,
        "text": "Které tvrzení je nejpřesnější pro vztah zdravotnického nálezu a vzdělávací podpory?",
        "options": [
          "Jakmile existuje lékařský nález, škola už nemusí dále zvažovat funkční dopad ani organizaci podpory, a právě v tom vidí hlavní vysvětlení.",
          "Zdravotnický nález je pro školu nepoužitelný, protože vzdělávání a zdravotnictví se nemají propojovat, a z toho odvozuje další závěr.",
          "Podobu vzdělávací podpory smí určovat výhradně ošetřující lékař bez účasti školy a poradenského systému, a tímto směrem by vedla podporu.",
          "Zdravotnický nález sám neurčuje podobu školní podpory; je třeba jej převést do konkrétních vzdělávacích a funkčních důsledků."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 32,
        "text": "Které vymezení role SPC odpovídá vyhlášce č. 72/2005 Sb. nejpřesněji?",
        "options": [
          "SPC je určeno výhradně pro žáky se specifickými poruchami učení a chování bez dalších znevýhodnění, a právě v tom vidí hlavní vysvětlení.",
          "SPC je zařízení pro všechny žáky bez rozdílu a nespecializuje se na žádný typ znevýhodnění, a z toho odvozuje další závěr.",
          "SPC poskytuje poradenské služby zejména žákům s mentálním, tělesným, zrakovým nebo sluchovým postižením, vadami řeči, vícečetným postižením nebo autismem.",
          "SPC je určeno pouze pro mimořádně nadané žáky a jejich kariérové poradenství, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 33,
        "text": "Které tvrzení nejlépe odpovídá současnému ne-deficitnímu pohledu na podporu?",
        "options": [
          "Jakmile známe diagnózu, můžeme z ní bez dalšího odvodit přesnou školní podporu i očekávaný výkon, a právě v tom vidí hlavní vysvětlení.",
          "Ne-deficitní přístup znamená, že diagnózy už nejsou pro odbornou práci vůbec důležité, a z toho odvozuje další závěr.",
          "Diagnóza sama ještě nevysvětluje vzdělávací situaci; rozhoduje i prostředí, bariéry a konkrétní podoba podpory.",
          "Současné pojetí podpory se má vyhýbat jakémukoli hodnocení funkčního dopadu, aby nebylo stigmatizující."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 34,
        "text": "Které tvrzení nejpřesněji vystihuje mezioborovost speciální pedagogiky?",
        "options": [
          "Je jen souhrnným názvem pro přebírání lékařských závěrů do školy bez vlastního oborového rámce, a právě v tom vidí hlavní vysvětlení.",
          "Její mezioborovost znamená, že nemá vlastní předmět ani odborné metody a role speciálního pedagoga mizí, a z toho odvozuje další závěr.",
          "Jejím hlavním cílem je sladit administrativní požadavky různých resortů, nikoli podporu člověka, a tímto směrem by vedla podporu.",
          "Čerpá z pedagogiky, psychologie, medicíny, sociální oblasti i práva, ale zachovává vlastní fokus na vzdělávání, podporu a participaci."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 35,
        "text": "Který závěr je nejpřesnější pro speciálněpedagogické uvažování o stejné diagnóze u dvou žáků?",
        "options": [
          "Stejná diagnóza je dostatečný podklad pro stejný plán podpory bez dalšího sledování průběhu práce, a právě v tom vidí hlavní vysvětlení.",
          "Stejná diagnóza ještě neznamená stejnou podporu, protože rozhoduje i funkční profil a podmínky, ve kterých žák pracuje.",
          "Pokud mají žáci stejnou diagnózu, je nevhodné sledovat individuální rozdíly, aby byla podpora spravedlivá, a tímto směrem by vedla podporu.",
          "Rozdíly mezi dvěma žáky se stejnou diagnózou jsou jen motivační a nemají mít vliv na pedagogické závěry, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 36,
        "text": "Učitel říká: „Máme doporučení, takže už není třeba nic dalšího rozpracovávat.“ Která korekce je nejpřesnější?",
        "options": [
          "Doporučení má význam hlavně pro archivaci a při běžné výuce už na něm nezáleží, a právě v tom vidí hlavní vysvětlení.",
          "Doporučení nahrazuje všechny školní dokumenty i individuální pedagogické rozhodování během roku, a z toho odvozuje další závěr.",
          "Doporučení je závazné jen pro rodiče; škola je může sledovat spíše informativně, a tímto směrem by vedla podporu.",
          "Doporučení samo nenahrazuje každodenní školní realizaci podpory v organizaci, metodách, zadávání ani hodnocení."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 37,
        "text": "Žák při individuálním hovoru rozumí dobře, ale při výkladu z větší vzdálenosti a v hluku ztrácí obsah. Jaký závěr je nejpřesnější?",
        "options": [
          "Nejpřesnější je uzavřít věc jako oslabení obecných rozumových schopností, protože se potíž objevuje ve více předmětech.",
          "Nejdůležitější je rozšířit slovní zásobu, protože problém se projevuje během vyučování v jazyce, a z toho odvozuje další závěr.",
          "Nejpřesnější je převést žáka na trvale individuální práci, aby se odstranily všechny situační vlivy.",
          "Nejprve je třeba upravit podmínky přístupu k mluvené informaci a teprve poté posuzovat skutečný rozsah obtíží."
        ],
        "correct": 3,
        "correctLetter": "D"
      },
      {
        "number": 38,
        "text": "Žák při práci s textem výrazně zpomaluje, vadí mu oslnění a drobný tisk, ale při ústním zkoušení působí jistě. Který závěr je nejpřesnější?",
        "options": [
          "Je třeba řešit přístup k vizuální informaci a formát materiálů, ne automaticky uzavírat problém jako slabé porozumění učivu.",
          "Nejpřesnější je soustředit se hlavně na reedukaci čtenářské techniky, protože obtíž se projevuje u textu, a z toho odvozuje další závěr.",
          "Jádro obtíží je nejspíš v nízké vytrvalosti, protože ústní výkon bývá pro žáky přirozeně snazší, a tímto směrem by vedla podporu.",
          "Nejpřesnější je nahradit ústní zkoušení písemným, aby bylo možné lépe odlišit výkon od dojmu, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 39,
        "text": "Žák má těžce omezenou srozumitelnost řeči, ale zřetelný komunikační záměr. Který postup je nejpřesnější?",
        "options": [
          "Trvat výhradně na mluvené řeči, aby se dítě nenaučilo na pomůckách záviset, a právě v tom vidí hlavní vysvětlení.",
          "Odložit podporu komunikace do doby, než bude jisté, že běžná řeč už nemá šanci se rozvinout.",
          "Zavést jinou funkční cestu sdělení, například AAK, místo čekání, až bude mluvená řeč dostatečně „čistá“.",
          "Zúžit komunikaci jen na terapeutickou místnost, aby se žák v běžném prostředí nepřetěžoval, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 40,
        "text": "Žák reaguje výbuchem hlavně při nejasném zadání a veřejné opravě, ale v předvídatelném režimu a s neveřejnou zpětnou vazbou pracuje výrazně lépe. Který závěr je nejpřesnější?",
        "options": [
          "Jádro obtíží je hlavně v nedostatku učiva, protože problém se projevuje při plnění školních úkolů.",
          "Nejpřesnější je zpřísnit sankční režim, protože veřejná oprava má posílit respekt k autoritě, a z toho odvozuje další závěr.",
          "Chování je třeba číst v kontextu spouštěčů a měnit i podmínky situace, nejen zesilovat důsledky po selhání.",
          "Jádro obtíží leží hlavně v tělesném oslabení, protože přetížení ve třídě bývá vždy somatického původu."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 41,
        "text": "Žák má nestabilní domácí podmínky a dlouhodobě kolísá ve výkonu. Který závěr je nejpřesnější?",
        "options": [
          "Podpůrná opatření se nevážou jen ke zdravotnímu stavu; mohou reagovat i na kulturní prostředí nebo jiné životní podmínky žáka.",
          "Bez zdravotní diagnózy nelze ve školství o podpůrných opatřeních vůbec uvažovat, a z toho odvozuje další závěr.",
          "Kolísání výkonu v takové situaci je čistě kázeňská otázka a nepatří do poradenského rámce, a tímto směrem by vedla podporu.",
          "Škola má v podobné situaci sledovat jen prospěch, protože rodinné podmínky do podpory nepatří, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 42,
        "text": "Žák s tělesným postižením pracuje pomalu rukou, ale v rozhovoru přesně chápe souvislosti a učivo. Který závěr je nejpřesnější?",
        "options": [
          "Pomalé pracovní tempo u žáka s tělesným postižením obvykle ukazuje na globálně nižší úroveň myšlení, a právě v tom vidí hlavní vysvětlení.",
          "Nejpřesnější je převést žáka na jednodušší kurikulum, protože rychlost práce je rozhodující ukazatel schopností, a z toho odvozuje další závěr.",
          "Je třeba oddělit motorické omezení od závěrů o kognitivní úrovni a upravit způsob výstupu, ne automaticky snižovat obsahové nároky.",
          "Tělesné postižení je ve škole hlavně zdravotnická otázka, takže pedagogické úpravy výstupu nejsou podstatné, a v tom hledá klíčový znak."
        ],
        "correct": 2,
        "correctLetter": "C"
      },
      {
        "number": 43,
        "text": "Dítě vyslovuje několik hlásek nepřesně, ale dobře rozumí, reaguje v běžném tempu komunikace a ve třídě se neztrácí v obsahu. Který závěr je nejpřesnější?",
        "options": [
          "Těžiště obtíže je spíše v produkci řeči, nikoli v širším přístupu k obsahu sdělení nebo v celkové intelektové úrovni.",
          "Jde nejspíše o mentální postižení, protože chyba ve výslovnosti bývá projevem celkově nižších schopností.",
          "Jde nejspíše o sluchové postižení, protože nepřesná výslovnost vždy znamená ztrátu porozumění řeči, a tímto směrem by vedla podporu.",
          "Jde nejspíše o etopedický problém, protože nápadná řeč bývá důsledkem nedostatečné sebekázně, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 44,
        "text": "Rodina potřebuje hlavně orientaci v síti sociálních služeb, příspěvcích a návazných možnostech podpory mimo školu. Který rámec je nejpřesnější?",
        "options": [
          "Těžiště podpory se zde posouvá do sociálního poradenství a orientace v návazné síti služeb.",
          "Jde především o tvorbu IVP, protože jakákoli mimoškolní pomoc musí vycházet z dokumentu školy.",
          "Jde především o klinickou diagnostiku, protože dávky a služby se řeší až po psychologickém závěru.",
          "Jde výhradně o školní metodickou podporu učitelům, protože rodině se tento typ informací běžně neposkytuje."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 45,
        "text": "Které vymezení střediska výchovné péče (SVP) je nejpřesnější?",
        "options": [
          "Jde o pracoviště, které vydává doporučení ke všem podpůrným opatřením místo školského poradenského zařízení, a právě v tom vidí hlavní vysvětlení.",
          "Jde o školské zařízení zaměřené na preventivně výchovnou péči a práci s problémy v chování, nikoli o náhradu PPP nebo SPC.",
          "Jde o sociální službu určenou výhradně pro dospělé osoby v pobytové péči, a tímto směrem by vedla podporu.",
          "Jde o zdravotnické zařízení pro diagnostiku smyslových a tělesných postižení ve škole, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 46,
        "text": "Který dokument je v příloze vyhlášky č. 27/2016 Sb. označen formulací „Pouze pro žáka nebo zákonného zástupce“?",
        "options": [
          "Individuální vzdělávací plán školy.",
          "Zpráva školského poradenského zařízení.",
          "Program poradenských služeb ve škole.",
          "Plán pedagogické podpory, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 47,
        "text": "Které tvrzení o poradenských službách ve škole je podle vyhlášky č. 72/2005 Sb. správné?",
        "options": [
          "Školní psycholog a školní speciální pedagog nesmějí poskytovat poradenské služby, pokud škola nemá současně SPC, a právě v tom vidí hlavní vysvětlení.",
          "Na poskytování poradenských služeb ve škole se mohou podílet také školní psycholog, školní speciální pedagog nebo školský logoped.",
          "Poradenské služby ve škole mohou poskytovat jen externí pracovníci PPP, nikoli zaměstnanci školy, a tímto směrem by vedla podporu.",
          "Školský logoped může ve škole působit jen tehdy, pokud škola vzdělává výhradně žáky s vadami řeči, a v tom hledá klíčový znak."
        ],
        "correct": 1,
        "correctLetter": "B"
      },
      {
        "number": 48,
        "text": "Které tvrzení o individuálním vzdělávacím plánu odpovídá aktuálnímu znění vyhlášky č. 27/2016 Sb.?",
        "options": [
          "Pokud zákonný zástupce nebo zletilý žák neposkytne informovaný souhlas s vypracovaným IVP, škola toto podpůrné opatření neposkytuje.",
          "Škola může IVP vždy jednostranně zavést, jakmile jej doporučí ŠPZ, i bez souhlasu zletilého žáka nebo zákonného zástupce.",
          "Nesouhlas se týká jen obsahu předmětů; forma IVP a způsob hodnocení se zavádějí automaticky, a tímto směrem by vedla podporu.",
          "Souhlas s IVP se nevyžaduje, protože jde o interní dokument školy bez dopadu na práva žáka, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 49,
        "text": "Která posloupnost rolí a kroků je v systému podpory nejvnitřněji konzistentní?",
        "options": [
          "ŠPZ odborně posoudí potřeby a vydá doporučení, škola podporu rozpracuje a realizuje, rodina nebo zletilý žák se podílejí na rozhodování a mohou využít právo na revizi.",
          "Škola sama stanoví diagnózu, rodič ji formálně vezme na vědomí a ŠPZ pouze doplní podpis kvůli evidenci, a z toho odvozuje další závěr.",
          "Zdravotnické zařízení přímo určí školní organizaci výuky, škola ji pouze přepíše do třídní knihy a rodina do procesu nevstupuje, a tímto směrem by vedla podporu.",
          "Rodina sama sepíše podpůrná opatření, škola je bez odborného posouzení převezme a ŠPZ se zapojuje jen při kontrole inspekce, a v tom hledá klíčový znak."
        ],
        "correct": 0,
        "correctLetter": "A"
      },
      {
        "number": 50,
        "text": "Které shrnutí nejlépe vystihuje náročnost speciálněpedagogického poradenství v přijímacím stylu UPOL?",
        "options": [
          "Rozhodující je hlavně zapamatovat si co nejvíce izolovaných názvů zařízení, protože obsah podpory z nich plyne automaticky.",
          "Nejtěžší otázky stojí především na rozsáhlých kazuistikách a méně na přesném rozlišování pojmů, dokumentů a rolí, a z toho odvozuje další závěr.",
          "Pro pokročilou úroveň stačí bezpečně poznat správnou odpověď podle délky a komplexnosti formulace, a tímto směrem by vedla podporu.",
          "Nestačí znát pojem nebo diagnózu; je nutné propojit odborný význam, funkční dopad, vhodnou podporu i správný institucionální rámec."
        ],
        "correct": 3,
        "correctLetter": "D"
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
      "distributionBalanced": true,
      "styleParityReviewedManually": true,
      "microcaseDominanceReduced": true,
      "distinctFromBasicByDesign": true
    }
  }
];
