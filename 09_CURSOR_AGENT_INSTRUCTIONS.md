# Cursor Agent Instructions

> **Status — Historical agent playbook.** Originally coordinated multi-step Cursor scaffolding. Shipping truth now lives in [`README.md`](README.md), [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md), [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), and [`.cursor/rules/wedding-site.mdc`](.cursor/rules/wedding-site.mdc).
>
> Content below summarizes what still applies. Earlier multi-agent excerpts that mentioned Next.js **15**, `/accommodation`, groom-first wording, Accommodation/Dress Code nav rows, Apple Maps scaffolding, etc. are **obsolete** — consult git history (`git show HEAD~:09_CURSOR_AGENT_INSTRUCTIONS.md`) if you need verbatim legacy prompts.
>
> See [`docs/DOCUMENTATION_AUDIT.md`](docs/DOCUMENTATION_AUDIT.md) for reconciliation notes.

## Authoritative constraints (agents must follow today)

### Product + naming

- **Project:** Tan & Top Wedding Website.
- **Visible copy** is bride-first: **Tan & Top**, **Narueporn & Theerut** (never Top & Tan / Theerut & Narueporn in UI surfaces).
- **Routes:** Thai `/`, `/schedule/`, `/venue/`, `/gallery/`, `/faq/`, `/line/` mirrored under `/en/...`. No Accommodation or Dress-code pages unless product scope expands.
- LINE lives at `/line` + `/en/line`; **never** elevate LINE beside Schedule/Venue in main nav rows.

### Engineering rules

| Must avoid | Detail |
|-----------|--------|
| RSVP / attendance tooling | Including hidden forms collecting yes/no totals |
| Public forms/chat surfaces | Steering goes to curated FAQ + LINE explainer pages |
| Chatbot SDKs | Marketing copy must emphasise humans + deterministic FAQ |
| API routes / server actions / middleware locale switching | Explicit path-based i18n only |
| Backend persistence | Mongo/Prisma/etc. |
| Analytics (MVP) | Intentionally off |
| Public gallery uploads | Only curated assets checked into repo |

### Stack snapshot (pinned in package.json — do not regress without intent)

Next.js App Router (**16.x** presently), React 19, Tailwind CSS v4, TypeScript strict, `pnpm`, `motion`, `lucide-react`, `next/image`, static export pipeline, IBM Plex Sans Thai + Cormorant + Inter fonts.

### Localization + content authoring

Everything guest-visible lives in **`content/th/*.ts`** / **`content/en/*.ts`** with shared typing inside **`content/schema.ts`**.

### QA expectations

Run `pnpm lint` + `pnpm build` whenever behaviour-affecting work lands.

Optional deterministic screenshot sweeps (`pnpm screenshots`, Playwright) after visual risk—see **`docs/VISUAL_QA.md`**.

Animations must obey reduced-motion sensitivities (**`prefers-reduced-motion`**) and stay subtle (see **`03_DESIGN_SYSTEM.md`**, **`06_RESPONSIVE_UX_SPEC.md`**, **`10_ACCEPTANCE_CRITERIA_QA.md`**).
