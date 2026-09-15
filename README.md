# Veliqo

Marketing site for [getveliqo.com](https://getveliqo.com) — the intelligence
layer for modern commerce. Recreated from the design mockups in `design/`.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui primitives (`components/ui`)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Useful scripts

```bash
npm run build              # production build
node scripts/screenshot.mjs [url] [out] [width] [height]  # full-page screenshot (uses system Chrome)
```

## Design reference

The five source mockups live in `design/mockup-1.png` … `design/mockup-5.png`.
Page sections map to them in order: hero + product visual, logo cloud,
features bento, how-it-works + stats, testimonials, CTA + footer.
