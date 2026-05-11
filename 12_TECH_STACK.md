# 12 — Technical Stack

## Core stack

- Next.js App Router (static-export friendly)
- TypeScript (strict)
- Tailwind CSS v4
- `pnpm`
- `next/font/google` (Cormorant Garamond, Inter, IBM Plex Sans Thai)
- `lucide-react`
- `motion`

## Export and routing

- Use static export (`output: "export"`).
- Keep `images.unoptimized = true` for MVP static deployment.
- Thai is default routes; English is explicit under `/en`.
- Do not use middleware for locale routing.

## Route surface (fixed)

Thai:

- `/`
- `/schedule`
- `/venue`
- `/gallery`
- `/faq`
- `/line`

English:

- `/en`
- `/en/schedule`
- `/en/venue`
- `/en/gallery`
- `/en/faq`
- `/en/line`

## Non-goals / forbidden for MVP

- Accommodation page
- Dress Code page
- RSVP
- Contact form
- Chatbot
- API routes
- Server actions
- Database
- Auth
- Analytics
- Middleware locale routing

## Implementation conventions

- Default to server components; use client components only when needed.
- Components in `components/` (PascalCase, one per file, default export).
- Content in `content/th/*.ts` and `content/en/*.ts` (typed, named exports).
- Avoid hardcoding visible strings in JSX.
- Use warm token palette from `03_DESIGN_SYSTEM.md`.

## Performance baseline

- Mobile-first, high readability in in-app browsers.
- Keep JavaScript light and interactions subtle.
- Lazy-load map iframe.
- Avoid heavy animation and full-library imports.

## QA baseline

- Run `pnpm build` after implementation polish.
- Validate mobile at 375, 390, 430, 768 widths before desktop final review.
