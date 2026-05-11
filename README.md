# Tan & Top Wedding Website

A static, read-only, bilingual wedding information website for **Tan & Top**.

The site is designed as a minimal, elegant, classy, warm, and premium wedding information hub for guests.

## Live Site

```text
https://topkoong.github.io/top-tanly-wedding/
```

## Purpose

This website helps guests access key wedding information:

- Schedule
- Venue and Google Maps
- Gallery
- FAQ
- LINE Official Account support page

It intentionally does **not** include:

- RSVP page
- RSVP form
- attendance counting
- guest tracking
- chatbot or AI assistant
- public forms
- public guest uploads
- API routes
- server actions
- database
- authentication
- analytics in MVP
- middleware language routing

## Wedding Details

- Couple: Tan & Top
- Formal names: Narueporn & Theerut
- Date: Sunday, 29 November 2026
- Venue: Conrad Bangkok
- Engagement & Rubwai Ceremony: 07:00–11:00, Beverly Hills
- Wedding Reception: 11:00–14:00, Conrad Ballroom
- Parking: Conrad Bangkok and All Seasons Place

## Language and Routing

Default language: Thai.

English routes live under `/en`.

Thai routes:

```text
/
/schedule
/venue
/gallery
/faq
/line
```

English routes:

```text
/en
/en/schedule
/en/venue
/en/gallery
/en/faq
/en/line
```

## Product Rules

- Bride-first visible naming:
  - Tan & Top
  - Narueporn & Theerut
- LINE is not in the main navigation.
- LINE exists only as a supporting page/channel.
- Accommodation and Dress Code pages are intentionally removed.
- Gallery uses intentional placeholders until real photos are available.
- The website is the official source of truth for static wedding information.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- pnpm
- Static export
- GitHub Pages
- Optional Playwright screenshot capture

## Package Manager

Use `pnpm` only.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Do not use `npm`, `yarn`, or `bun` unless explicitly requested.

## Local Development

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
pnpm build
```

The static export output is generated in:

```text
out/
```

## Deployment

This project is deployed to GitHub Pages under:

```text
https://topkoong.github.io/top-tanly-wedding/
```

Because it is hosted under the `/top-tanly-wedding` project path, GitHub Pages builds must enable the correct `basePath` and `assetPrefix` via:

```text
GITHUB_PAGES=true
```

See:

```text
docs/DEPLOYMENT.md
```

## Visual QA

See:

```text
docs/VISUAL_QA.md
```

If Playwright is installed:

```bash
pnpm screenshots
```

## Documentation

```text
docs/PROJECT_OVERVIEW.md
docs/ARCHITECTURE.md
docs/DEPLOYMENT.md
docs/VISUAL_QA.md
```

## Cursor / AI Guardrails

Cursor should follow:

```text
.cursor/rules/wedding-site.mdc
```

Important constraints:

- No RSVP
- No attendance counting
- No chatbot
- No public forms
- No API routes
- No database
- No authentication
- No analytics in MVP
- Thai default, English under `/en`
- Bride-first visible naming
