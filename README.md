# Personal Website

Static personal portfolio website built with plain HTML, CSS, and JavaScript.

## Project Structure

```text
PersWebsite/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── LinkedIn_PfP.JPG
│   ├── paysage1.JPG
│   ├── paysage2.png
│   └── logos/
│       └── wwk.webp
└── projects/
    ├── dissertation/
    ├── ML_project/
    └── policy_proposal/
```

## Features

- Fixed glassmorphism header with desktop and mobile navigation
- Hero section centered between header bottom and viewport bottom
- Smooth-scroll section navigation with active-link highlighting
- Swiper-based portfolio cards carousel (cards effect + custom side arrows)
- Portfolio cards normalized to the tallest card height
- Section spacing synced to match the Hero -> About visual gap
- Contact form frontend validation
- Social links + click-to-copy email button

## Run Locally

1. Open `PersWebsite/index.html` in your browser.
2. For best consistency, use a local server (example with VS Code Live Server).

No build step is required.

## External Dependency

`index.html` loads Swiper from CDN:

- `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`
- `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`

If CDN is unavailable, the script logs a warning and the carousel will not initialize.

## Main Customization Points

- Content and section text: `index.html`
- Visual design/layout: `css/style.css`
- Interactions/behavior: `js/script.js`

## Notes

- Header height and section gaps are managed with CSS variables and synced via JavaScript.
- Portfolio item links currently point to local files under `projects/`.
- Footer year is static and currently set to `2026`.
