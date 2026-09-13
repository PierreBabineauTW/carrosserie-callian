# Component specs — ground truth extracted from published template

Source files: `webflow-shared.css` (published CSS, 253 KB) + page HTML (110 KB).
Font: Thicccboi → replaced by Nunito 400/600/700/800/900 (closest Google match, rounded + Black 900).
Accent: `--accent--primary-1: #1557ff` (published value, used as-is). Neutral-800: black.

## Global
- Target: `src/app/*`, `src/components/*`. Screenshots: none (no browser automation).
- `.container-default`: max-width 1266px, px 24 (20 mobile).
- `.section`: padding 190px desktop / 128px mobile.
- `.subtitle`: accent, uppercase, ls .15em, 16px/700, mb 16px.
- `.btn`: square, uppercase, 18px/900, ls .06em, padding 18px; hover bg black + lift -3px.
- `.bg-word`: giant outlined section words (services, packages, avis, blog, Callian…).
- Interaction model: sliders = scroll-snap + arrow buttons; reveals = IntersectionObserver fade-up; header = fixed, transparent → black after 40px.

## Hero (`Hero.tsx`)
- Template: `.section.hero.v1` — truck bg cover pos 50% 100% + shadow SVG + 2 gradient overlays; pt 230 / pb 350; 708px column; subtitle + white H1 65px/900 uppercase + paragraph + `btn-primary.white` + `btn-secondary.white`.
- Clone: same layers with local `hero-truck.jpg` + `hero-shadow.svg`; FR/EN copy; `.btn-light` + `.btn-outline-light`.

## Services (`Sections.tsx` → Services)
- Template: title+buttons 2-col row, slider `card.services-item` dark image cards (min-height 630px, number display-2 72px white, thumbnail, title display-3 44px, text, “learn more →”).
- Clone: scroll-snap slider + arrows, 6 carrosserie services, local thumbnails, anchor to #devis.

## WhyUs / About / Locations / Testimonials / Visit / Packages / Blog
- WhyUs: dark section, text + checklist + light CTA left, `mechanic.jpg` + `engine.png` overlay right (layered composition preserved).
- About: quote panel + “10+ ans” badge | subtitle/title/text/CTA.
- Locations: 2 cards (photo 280–340px, name, text, address/phone links) — Callian atelier + Pays de Fayence.
- Testimonials: slider of dark photo cards (min-height 560px, stars, quote, name/place) + header CTA.
- Visit: full-width accent banner with bg word.
- Packages: 3 dark cards (car photo, name, price, “included” checklist, light CTA).
- Blog: 1 featured image card + 3 rows.
- Contact: form card (validation + success state, no backend) + info card with hours.
- Footer: black, 3 columns, rewritten legal (no Webflow/BRIX).

## Production
`layout.tsx` (Nunito, FR metadata, OG, JSON-LD AutoBodyShop), `icon.svg`, `robots.ts`, `sitemap.ts`, `not-found.tsx`. Zero analytics/trackers. Images: 18 local files under `public/sites/...` (2 unused brand SVGs removed).
