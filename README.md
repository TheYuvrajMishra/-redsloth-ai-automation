# RedSloth — AI Automation Company

Landing page for RedSloth: custom AI automations (workflows, agents, integrations) that
remove repetitive operational work. Slow on busywork, fast on results.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Stack

Next.js 14 (App Router, TypeScript), Tailwind CSS, shadcn-style UI (Radix Accordion),
`next-themes` (forced light, no toggle), Lenis (smooth scroll), Framer Motion (section
reveals, hero entrance), anime.js (hero rebus glyph micro-animations).

## Design tokens

Defined in `tailwind.config.js` + `app/globals.css`. Strict palette: white (bg), black
(text), one red `#C41D21` (sampled from the logo). Black/white alpha variants only for
borders, shadows and bevels. Type: Poppins headings, Inter 200–300 body. Type scale
12/14/16/20/24/32/48/72, radius 8/12/16, one shadow token. All spacing is a multiple
of 4px. Buttons: light-sweep + bevel-alpha; hover animates only `background-position`,
`opacity`, `box-shadow` or `filter` — no scale/transform/translate.

## Sections (in order)

1. Hero — rebus headline + animated automation loop, primary + secondary CTA, proof line
2. Problem strip — 3 items
3. How it works — 3 steps + goal-gradient scroll progress
4. Automations we build — 6 cards, expand on demand
5. Proof — before → after outcomes
6. FAQ — accordion
7. Final CTA — red peak-end section + audit form
8. Footer — minimal, no duplicate links

Rebus headlines: 1 in the hero (sloth glyph in "Slow", loop glyph on "results"), 1 in
the final CTA (loop glyph for "loop"). Glyphs are inline SVG, baseline-aligned.

## Accessibility

Semantic landmarks, visible focus rings, AA contrast (thin Inter is always black on
white, never gray), every tap target ≥44px, `prefers-reduced-motion` disables Lenis
and all non-essential animation, content is never hidden until JS loads.

## TODOs

- `components/Proof.tsx` — replace the example outcome figures with real client data.
- `components/AuditForm.tsx` — wire submit to a real booking endpoint (Cal.com / form backend).
