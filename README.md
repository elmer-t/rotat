# ROTAT — Card of the Day

A minimalist tarot card reading app built with vanilla HTML, CSS, and JavaScript. Shuffle the Major Arcana, pick a card, and receive a reading for your day.

## Features

- All 22 Major Arcana cards with upright meanings and daily themes
- Animated particle canvas background
- Card shuffle, hover, and flip animations
- No dependencies — pure HTML/CSS/JS, runs in any browser

## Project Structure

```
torat/
├── index.html          # App entry point
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── app.js          # Card data, deck logic, UI transitions
│   └── particles.js    # Canvas particle background
└── images/
    └── cards/          # SVG card artwork (22 cards + back)
```

## Usage

Open `index.html` in a browser — no build step or server required.

For a local dev server with live reload you can use any static file server, e.g.:

```bash
npx serve .
# or
python3 -m http.server
```

## Cards Included

The full Major Arcana (0–XXI):

| # | Card |
|---|------|
| 0 | The Fool |
| I | The Magician |
| II | The High Priestess |
| III | The Empress |
| IV | The Emperor |
| V | The Hierophant |
| VI | The Lovers |
| VII | The Chariot |
| VIII | Strength |
| IX | The Hermit |
| X | Wheel of Fortune |
| XI | Justice |
| XII | The Hanged Man |
| XIII | Death |
| XIV | Temperance |
| XV | The Devil |
| XVI | The Tower |
| XVII | The Star |
| XVIII | The Moon |
| XIX | The Sun |
| XX | Judgement |
| XXI | The World |
