# Visible copy of Cursor rules

Human-readable mirror. If this file disagrees with [`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc), **the `.mdc` file wins**. Agent index: [`AGENTS.md`](AGENTS.md). Photos specialist: [`.cursor/agents/wedding-photos.md`](.cursor/agents/wedding-photos.md).

## Product

- Static invitation. No on-site RSVP, forms, chatbot, LINE OA, database, or API.
- Bride-first: **Tan & Top**, **Narueporn & Theerut**.
- English at `/`. Thai at `/th/`. Do not restore `/en/`.
- Paper cream **`#fff5e6`**. Envelope olive tokens stay independent.
- Thai save-the-date: **จองวันไว้เลยนะ**.
- Home film after Conrad, before RSVP. Gallery has stills only.

## Stack

Next.js 16, React 19, Tailwind v4, pnpm, `motion`, static `out/` with GitHub Pages `basePath` `/top-tanly-wedding` when `GITHUB_PAGES=true`.

Copy lives in `content/th/` + `content/en/`. Public assets go through `publicAssetPath()`.
