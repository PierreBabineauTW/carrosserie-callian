# PAGE_TOPOLOGY — Carrosserie Callian home (`/`)

Order (flow content unless noted):
1. Header (sticky overlay, transparent → solid on scroll >24px, mobile burger) — click-driven
2. Hero (2-col: copy + CTA / visual card with rating badge + horaires card) — static + time-driven badge pulse
3. Trust bar (avis 4.8/5, sinistres acceptés, véhicule de courtoisie, colorimétrie) — static
4. Services (6 cards grid, hover lift) — click-driven (anchor to #devis)
5. WhyUs / Ce qui nous distingue (checklist + stats + steps) — scroll reveal
6. About / L'atelier (story + chips) — static
7. Workshop / Nous trouver (adresse, horaires table, zone d'intervention, CTA tel/itinéraire) — static
8. Testimonials (3 avis FR) — static grid
9. CTABanner (prendre rendez-vous) — static
10. Packages / Forfaits (3 cards, middle highlighted) — static
11. Blog / Conseils (3 cards) — static
12. Contact / Devis (#devis: form non-backend + infos) — click-driven (fake submit → success state)
13. Footer (nav, contact, legal, no Webflow badge) — static

Page layout: single scroll column, max-w-7xl containers, z-index: header 50, mobile menu 60.
No cart, no commerce, no modal, no smooth-scroll lib, no scroll-snap.
