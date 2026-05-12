# Visible Copy of Cursor Rules

Markdown mirror of `.cursor/rules/wedding-site.mdc`. If differences appear, `.cursor/rules/wedding-site.mdc` wins.

---

## Canonical reference

See the full operational rule-set in **[`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc)**.

## Quick summary for humans

### Product + naming

- **Tan & Top Wedding**. Visible couple strings are **bride-first**: **Tan & Top**, **Narueporn & Theerut** (avoid groom-first wording in shipped UI).

### Routing

- Thai: `/`, `/schedule/`, `/venue/`, `/gallery/`, `/faq/`, `/line/`.
- English: `/en/` … mirrored paths.
- **No Accommodation / Dress Code routes** baked into IA.
- **`trailingSlash: true`** in production config → prefer matching links.

### Engineering prohibitions

- No RSVP workflows, attendance capture, anonymous forms/uploads, analytics (MVP), chatbots/SDKs, middleware locale reroutes, APIs, databases, authentication, server actions collecting user data.

### Content layer

All guest-visible strings originate from **`content/th/*.ts`** + **`content/en/*.ts`** with shared typing (`content/schema.ts`). Never freestyle literal Thai/English in JSX except trivial structural glue (`"use client"` imports, whitespace).

### LINE policy

Supporting pages `/line` + `/en/line` articulate official updates/coordinator escalation—still **never** labelled as instantaneous AI concierge or RSVP automation hub. **Navbar** excludes LINE.

### Stack snapshot (pinned in `package.json`)

Next.js (**16.x**), React 19.x, Tailwind CSS v4, TypeScript strict, **pnpm**, `motion`, `lucide-react`, fonts via `next/font/google`, IBM Plex Sans Thai, static export **`out/`** with conditional GitHub Pages `basePath` when **`GITHUB_PAGES=true`**.

Optional Playwright dev dependency → **`pnpm screenshots`** for visual regression packs (see **`docs/VISUAL_QA.md`**).

### Motion mantra

Minimal fade / translate / hover polish only; accordion transitions still legible mid-animation; **`prefers-reduced-motion`** honored; flashy parallax/autoplay gimmicks discouraged; screenshot harness may disable animations—don’t misuse that shortcut to chase novelty in UX.
