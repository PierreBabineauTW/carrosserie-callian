# BEHAVIORS — observed (via WebFetch HTML/markdown) + adapted decisions

Reference interactions (Webflow): sticky header, dropdown "Pages" menu, commerce cart modal,
service/testimonial/package carousels (arrows), hover states on cards/buttons.
Adapted (differentiated, no Webflow JS):
- Header: transparent over hero → bg-ink/95 + blur + border after scrollY>24 (scroll listener, 300ms transition). Burger toggles mobile panel. Lang switch FR|EN persists localStorage.
- Dropdown "Pages": REMOVED (template chrome). Replaced by flat anchors: Services, Atelier, Avis, Forfaits, Conseils, Contact.
- Cart/commerce: REMOVED entirely (no USD prices, no checkout, no currency JS).
- Carousels: replaced by responsive grids (services 3×2, testimonials 3-col, packages 3-col). Simplifies + differentiates; hover lift only.
- Reveal on scroll: IntersectionObserver, fade-up once, stagger via transition-delay. Respects prefers-reduced-motion.
- Contact form: controlled inputs, fake async submit (800ms) → success panel. No backend, no analytics event.
- Responsive: ≥1024 2-3 col; 768 2-col services; <768 single col, hero stacks, horaires table scrolls. Breakpoint ~900px for header burger.
- No analytics/trackers, no Webflow badge, no external fonts JS beyond next/font, no CDN images.
