# ARTIFACT_MANIFEST — Carrosserie Callian (v2, fidèle au template)

- Reference: https://carrepairtemplate.webflow.io/home-pages/home-v1
- Method: no browser MCP (none available) — instead downloaded the template's published CSS (253 KB) and full HTML (110 KB); all tokens above are ground truth, not estimates. See `webflow-shared.css` + `components/SPECS.md`.
- Route: `/` in `C:\Users\pierr\Documents\carrosserie-callian`. Fresh-scaffold replacement.
- Images: 18 files localised in `public/sites/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/` (hero, services ×6, mechanic, engine, locations ×2, reviews ×2, packs ×3, blog ×1). ⚠️ LICENCE : ces visuels viennent de la démo du template payant BRIX/CarRepair X — à remplacer par les vraies photos de l'atelier avant mise en ligne publique.
- Removed vs template: Webflow badge/js, commerce cart, “Pages” mega-menu (pages démo du template), analytics (zéro tracker — vérifié), USD pricing.
- Kept/adapted: layout/sections/rythme du template; textes réécrits FR (défaut) + EN via switch persisté; infos La Carrosserie (listings publics) : 133 chemin des Combes, 83440 Callian — 04 94 50 07 97 — 4,8/5 (89 avis).
- Production: metadata FR + OG, JSON-LD AutoBodyShop, icon.svg, robots.ts, sitemap.ts, not-found.tsx, formulaire validé avec état de succès (sans backend), responsive 390/768/1440 (classes), prefers-reduced-motion.
- Build: `npx tsc --noEmit` ✓, `npm run build` ✓ (routes /, /_not-found, /icon.svg, /robots.txt, /sitemap.xml).
- Live dev: http://localhost:3002 (vérifié 200, nouveau contenu présent).
- Gaps: pas de QA visuelle côte-à-côte (pas de screenshots) ; blog/forfaits sans pages détail ; formulaire sans backend/邮箱 ; horaires/tarifs indicatifs à confirmer (mercredi continu ? vendredi 17h30 ? email ? véhicule de courtoisie ?).
