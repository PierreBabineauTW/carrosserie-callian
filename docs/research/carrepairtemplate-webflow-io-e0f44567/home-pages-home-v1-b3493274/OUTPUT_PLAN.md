# Output Plan — Carrosserie Callian (inspired by carrepairtemplate home-v1)

Source: https://carrepairtemplate.webflow.io/home-pages/home-v1
Destination route: `/` in app-root `C:\Users\pierr\Documents\carrosserie-callian`
Approach: fetch-based rebuild (no browser MCP available — user approved). NOT pixel-perfect;
differentiated layout inspired by reference, reworded FR/EN copy, no Webflow branding, no analytics,
no commerce cart, single Callian business.

- site-key: carrepairtemplate-webflow-io-e0f44567
- page-key: home-pages-home-v1-b3493274
- artifact root: docs/research/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/
- screenshot root: docs/design-references/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/
  (no screenshots — no browser automation; reference = WebFetch markdown/HTML)
- component root: src/components/sites/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/
  (actual build lives in src/components/ for simplicity — single-site app)
- asset root: public/sites/... (no Webflow CDN assets hotlinked; all visuals are local CSS/SVG to avoid copying)
- route file: src/app/page.tsx (fresh scaffold replacement — approved first-clone case)

Business: La Carrosserie — 133 chemin des Combes, 83440 Callian — 04 94 50 07 97 — FR default, EN switch.
Foundation changes: src/app/layout.tsx (lang fr, fonts, metadata), src/app/globals.css (tokens),
src/i18n/* (FR/EN dictionaries + context). No analytics scripts anywhere.
