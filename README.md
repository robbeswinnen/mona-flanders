# MONA – Mobiliteitsbudget Platform

> B2B2C e-commerce platform voor het Belgische mobiliteitsbudget, gebouwd in React + Vite + Tailwind CSS.

## ⚡ Snel Starten

```bash
# Installeer dependencies (Node.js vereist)
npm install

# Start de lokale dev server
npm run dev
# → opent op http://localhost:5173
```

## 🏗 Bouwen voor productie (Cloudflare Pages)

```bash
npm run build
# Output staat in /dist
```

Deploy via Cloudflare Pages:
- Koppel je GitHub-repo
- Build command: `npm run build`
- Output directory: `dist`
- De `public/_redirects` zorgt automatisch voor SPA-routing

## 📁 Projectstructuur

```
src/
├── components/
│   ├── BudgetRing.jsx      # Geanimeerde dubbele ring (Apple Activity-stijl)
│   ├── ElectricCarCard.jsx # Elektrische SUV-lease product kaart
│   ├── BikeCard.jsx        # Speed pedelec met interactieve slider
│   ├── TrainCard.jsx       # NMBS-abonnement met toggle schakelaar
│   ├── WoonBonus.jsx       # Conditionele Woon-Bonus module
│   ├── Navbar.jsx          # Transparant → blur navigatiebalk
│   └── Footer.jsx          # Footer met contactinfo
├── pages/
│   ├── HomePage.jsx        # Samenstelling van alle secties
│   ├── MarketplacePage.jsx # ★ Het interactieve budget dashboard
│   └── HowItWorksPage.jsx  # Uitleg drie pijlers + Woon-Bonus
├── sections/               # Homepage secties (Hero, Stats, How, ...)
├── App.jsx                 # Router (3 routes)
├── main.jsx                # React entry point
└── index.css               # Globale stijlen + Tailwind directives
```

## 🎨 Design Tokens

| Token            | Waarde    | Gebruik                          |
|------------------|-----------|----------------------------------|
| `mona-dark`      | `#0f3d3a` | Primaire achtergrond             |
| `mona-darkest`   | `#071f1d` | Donkerste secties / footer       |
| `mona-neon`      | `#adff00` | CTA-knoppen, actieve states      |
| `mona-neon-soft` | `#c8f8a9` | Hover states, gradiënten         |
| `mona-off-white` | `#f7f7f7` | Lichte secties                   |

Lettertypen: **Forum** (serif, koppen) + **DM Sans** (sans, bodytekst)

## 📋 Pagina's (max. 3 voor Cloudflare Pages gratis tier)

| Route            | Beschrijving                                    |
|------------------|-------------------------------------------------|
| `/`              | Homepage met alle informatie + contactformulier  |
| `/marktplaats`   | ★ Interactief budget dashboard                  |
| `/hoe-het-werkt` | Uitleg drie pijlers, Woon-Bonus, tijdlijn       |
