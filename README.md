# KIT-WISe Energy — Company Website

Corporate website and sales proposal pages for **KIT-WISe Energy** (Kitmeechai Electric Co., Ltd.), a Thai provider of EV charging and solar energy solutions.

🔗 **Live:** https://kit-wi-se-energy.vercel.app

## Overview

A marketing site plus dedicated proposal pages that the sales team sends to prospective customers (condominiums, hotels, businesses). Content is in Thai with English section labels, and the layout is built mobile-first since many visitors open links on their phones.

| Route | Page | Status |
|---|---|---|
| `/` | Home: hero, solutions, solutions by industry, why us, project gallery, partners, awards, contact | Live |
| `/ev-charger` | EV Charger proposal: installation models, power sharing, billing schemes, charger lineup, investment, process | Live |
| `/hotel` | Hotel proposal | In progress |

## Features

- **Component-based UI** — 13 reusable React components (Header, Hero, Projects, Awards, DashboardShowcase, …) plus page components under `src/pages/`
- **Client-side routing** with React Router; header links scroll smoothly to a section, or return to Home first and then scroll when clicked from another page
- **Filterable project gallery** — tabs filter installations by category, with expandable cards
- **Interactive dashboard showcase** and an auto-rotating, pausable carousel on the EV Charger page
- **Scroll-reveal animations** using `IntersectionObserver`, turned off automatically for users who prefer reduced motion
- **Accessibility** — `aria-label`s on icon buttons, keyboard-operable toggles, `prefers-reduced-motion` support
- **Responsive design** — dedicated mobile layouts for card grids, infographics and the navigation menu
- **Back-to-top button** and logo-to-home navigation
- **SPA deployment on Vercel** — `vercel.json` rewrites every path to `index.html` so deep links like `/ev-charger` don't return 404

## Tech Stack

- **React 19** + **React Router 7**
- **Vite 8** (dev server and build)
- **Plain CSS** with CSS custom properties for theming (`src/index.css`), no UI framework
- **ESLint** (react-hooks, react-refresh)
- **Vercel** hosting, auto-deployed from `main`

## Project Structure

```
src/
├── App.jsx            # routes + section scrolling logic
├── main.jsx           # entry point, BrowserRouter
├── index.css          # global styles and theme variables
├── components/        # reusable sections (Hero, Projects, Awards, …)
└── pages/             # proposal pages (EVChargerPage, HotelPage)
public/assets/         # images, logos, partner and award graphics, video
vercel.json            # SPA rewrite rule
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Author

Designed and developed by **Panutda Wongsa** ([@panutda2001](https://github.com/panutda2001)) using an AI-assisted workflow (Claude) — I defined the requirements, reviewed and tested the code, and handled deployment.
