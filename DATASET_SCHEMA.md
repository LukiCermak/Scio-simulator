# Dataset Schema

## Struktura

```text
data/
  basic/
    batteries/
    metadata/
    index.js
  hard/
    batteries/
    metadata/
    index.js
  manifest.json

data_source/
  basic/
    metadata/
  hard/
    metadata/
```

## Runtime battery soubor
Každá baterie obsahuje:
- `id`
- `label`
- `title`
- `subtitle`
- `purpose`
- `difficulty`
- `durationMinutes`
- `questions`

## Runtime metadata soubor
Runtime metadata drží jen pole používaná aplikací:
- identifikace otázky
- správná odpověď
- tematické zařazení
- Tutor vrstva
- diagnostická a repair pole
