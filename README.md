# Oluku Global Services Limited — Website

Corporate website for **Oluku Global Services Limited** (RC: 2025440), a CAC-registered
Nigerian company working in **property acquisition & development** and **fish farming,
processing and distribution**. Built with Create React App (React 19 + React Router 7).

## Getting started

```bash
npm install
npm start      # development server on http://localhost:3000
npm run build  # production build in /build
```

## Brand assets

All logo artwork lives in `public/images/brand/` and is generated from the master logo:

| File | Use |
| --- | --- |
| `oluku-logo.jpg` | Full lockup (emblem + wordmark + tagline). Used in the footer logo plate, the home page hero brand card and the Open Graph share image. |
| `oluku-emblem.png` | Emblem only, transparent background. Used in the navbar, page-header watermarks, stats band, CTA bands and project cards. |

App icons are generated from the emblem and live in `public/`:
`favicon.ico`, `logo192.png`, `logo512.png`, `apple-touch-icon.png`.
`public/manifest.json` and `public/index.html` reference them.

## Where the logo appears

- **Navbar** — emblem + wordmark lockup, linking to the home page.
- **Footer** — full logo on a white plate so it stays crisp on the dark navy footer.
- **Home hero** — floating white brand card with the full logo lockup.
- **Inner page headers, stats band, CTA bands, project cards** — subtle emblem watermark.
- **Browser tab / mobile home screen** — emblem favicon and app icons.

## Styling

- `src/styles/styles.css` — original layout and component styles.
- `src/styles/brand.css` — brand layer loaded **after** `styles.css`. It holds the design
  tokens (navy, royal blue, gold, silver taken from the logo), the typography scale,
  and the refined navbar, hero, cards, page headers and footer. Add new visual work here
  so the layered overrides stay predictable.

Typefaces: **Plus Jakarta Sans** (headings, buttons) and **Inter** (body), loaded from
Google Fonts in `public/index.html` with system-font fallbacks.

## Project structure

```
public/
  images/about/     company, farm, packaging and certificate photos
  images/brand/     logo and emblem assets
  images/gallery/   gallery photography
  videos/           fish farm video
src/
  components/       Navbar, Footer, ScrollToTop, WhatsAppFloat
  pages/            Home, About, Services, Projects, Gallery, Contact
  styles/           styles.css + brand.css
```

## Contact form

The contact form prepares a formatted message and opens it in WhatsApp
(`wa.me/2348025551994`), so no backend is required.
