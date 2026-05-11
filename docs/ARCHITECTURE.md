# Architecture

## Overview

This project is a static Next.js App Router website.

It is intentionally simple:

- no backend
- no API routes
- no database
- no authentication
- no middleware locale routing
- no RSVP or form submission workflow

The application is built as static files and deployed to GitHub Pages.

## Folder Structure

Expected high-level structure:

```text
app/
components/
content/
lib/
public/
docs/
.github/workflows/
```

## Routing

Thai is the default language and lives at the root routes.

English lives under `/en`.

Expected route structure:

```text
app/
├── page.tsx
├── schedule/page.tsx
├── venue/page.tsx
├── gallery/page.tsx
├── faq/page.tsx
├── line/page.tsx
└── en/
    ├── page.tsx
    ├── schedule/page.tsx
    ├── venue/page.tsx
    ├── gallery/page.tsx
    ├── faq/page.tsx
    └── line/page.tsx
```

Do not reintroduce:

```text
app/accommodation/
app/dress-code/
```

## Components

Typical component responsibilities:

```text
components/layout/
```

Layout-level components such as Navbar, Footer, and MobileMenu.

```text
components/sections/
```

Page-specific or section-level components such as Hero, Schedule, Venue, Gallery, FAQ, and LINE sections.

```text
components/ui/
```

Reusable primitives such as Button, Container, Section, Heading, PlaceholderImage, and FadeIn.

```text
components/icons/
```

Brand-related icons such as the TN monogram.

## Content Model

Visible text should come from content files, not hardcoded JSX.

Expected content structure:

```text
content/
├── schema.ts
├── site.ts
├── th/
└── en/
```

Rules:

- Thai copy belongs in `content/th`.
- English copy belongs in `content/en`.
- Shared type definitions belong in `content/schema.ts`.
- Shared constants may live in `content/site.ts`.
- Bride-first naming must be used in visible content:
  - Tan & Top
  - Narueporn & Theerut

## Styling

Styling is based on Tailwind CSS v4 and CSS design tokens.

The design direction is:

- minimal
- elegant
- classy
- warm
- premium
- modern Thai hotel wedding style

Core colours:

- cream
- ivory
- champagne
- rose
- rose-deep
- sage
- gold
- charcoal
- stone

The site should avoid plain documentation-style layouts.

## Static Export

This project uses static export.

Important Next.js configuration:

```ts
output: "export"
trailingSlash: true
images: {
  unoptimized: true
}
```

For GitHub Pages project deployment under:

```text
https://topkoong.github.io/top-tanly-wedding/
```

the app also needs conditional GitHub Pages path support:

```ts
basePath: "/top-tanly-wedding"
assetPrefix: "/top-tanly-wedding/"
```

Only enable these when building for GitHub Pages.

## Visual QA

Playwright screenshots may be used for visual review.

Expected screenshot output:

```text
docs/screenshots/mobile-390/
docs/screenshots/tablet-768/
docs/screenshots/desktop-1440/
```

Generated screenshots are useful for review, but they may be excluded from Git if they become too large.
