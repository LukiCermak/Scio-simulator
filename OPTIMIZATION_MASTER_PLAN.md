# Optimalizační Master Plan

## Cíle
- zmenšit a pročistit data a metadata
- odstranit nepoužívaná pole
- sjednotit baterii 8 i další baterie do stejného modelu
- držet otázky a metadata po menších souborech
- zachovat stejné chování aplikace pro studenta

## Zásady
- neměnit otázky ani Tutor obsah bez výslovného zadání
- zachovat kompatibilitu s uloženými `localStorage` daty
- držet runtime metadata jen na skutečně používaných polích
- interní kurátorská pole přesouvat mimo runtime vrstvu

## Pracovní pořadí
1. audit a očista
2. sjednocení datových výjimek
3. rozdělení souborů po režimech a bateriích
4. doplnění nových baterií do stejného optimalizovaného formátu
5. průběžná validace po každé větší změně
