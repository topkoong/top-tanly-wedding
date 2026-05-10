# Cursor Agent Instructions

Use this file as the main instruction document for Cursor.

## Project type

Build a responsive, static-first wedding website using Next.js.

## Technology direction

Use the concrete stack pinned in `12_TECH_STACK.md`:

- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS v4 with tokens from `03_DESIGN_SYSTEM.md`
- pnpm package manager
- Static export by default
- `next/font/google` for Cormorant Garamond and Inter
- `lucide-react` for icons
- `motion` for subtle animations only
- `next/image` with static-export-safe configuration
- No backend by default

## Critical constraints

Cursor must not create:

- RSVP page
- RSVP form
- Attendance tracking
- Chatbot
- AI assistant
- Public contact form
- Public gallery upload
- Database schema
- Authentication system
- API routes
- Server actions
- Middleware-based language routing

## Required pages

Create these pages:

```text
/
/schedule
/venue
/accommodation
/dress-code
/gallery
/faq
/line
/en
/en/schedule
/en/venue
/en/accommodation
/en/dress-code
/en/gallery
/en/faq
/en/line
```

## Required navigation

Thai desktop menu:

```text
กำหนดการ · สถานที่ · ที่พัก · การแต่งกาย · แกลเลอรี · คำถามที่พบบ่อย · EN
```

Thai mobile menu:

```text
กำหนดการ · สถานที่ · ที่พัก · แกลเลอรี · คำถาม · EN
```

English desktop menu:

```text
Schedule · Venue · Accommodation · Dress Code · Gallery · FAQ · TH
```

English mobile menu:

```text
Schedule · Venue · Accommodation · Gallery · FAQ · TH
```

Logo/couple names should link to language-specific homepage:
- Thai logo link: `/`
- English logo link: `/en`

Do not include Home as a visible menu item.
Do not include LINE as a primary menu item.

## Branding

Use:

```text
Top & Tan Wedding
Theerut & Narueporn
TN monogram placeholder
```

## Content approach

Use language-first content abstraction:

```text
content/th/*.ts
content/en/*.ts
```

All visible copy must come from content files.
Do not hardcode Thai or English copy inside components.

Use confirmed details:

```text
Wedding date: Sunday, 29 November 2026
Main venue: Conrad Bangkok
Event 1: Engagement & Rubwai ceremony (07:00–11:00) at Beverly Hills room, Conrad Bangkok
Event 2: Wedding Reception (11:00–14:00) at Ballroom, Conrad Bangkok
Parking: Conrad Bangkok parking, All Seasons Place parking
```

Use placeholders for missing details:

```text
[Apple Maps URL placeholder]
[Google Maps URL placeholder]
[LINE OA URL placeholder]
[Accommodation option placeholder]
[Gallery image placeholder]
```

Do not invent final wedding details unless provided.
Use the spelling `Venue` (not `Vanue`).

## Design direction

- Elegant
- Premium
- Minimal
- Warm
- Soft wedding palette
- Mobile-first
- Hotel-wedding appropriate

## Page implementation order

### Step 1 — Foundation

Create the project shell, global layout, navigation, footer, theme tokens, placeholder content structure, and reusable section/card components.

### Step 2 — Static pages

Create Home, Schedule, Venue, Accommodation, Dress Code, Gallery, FAQ, and LINE pages using the page specs.

### Step 3 — Responsive review

Check mobile, tablet, and desktop layouts. Ensure no page feels cramped or broken.

### Step 4 — Accessibility and polish

Check heading order, alt text, colour contrast, link text, and tap target size.

### Step 5 — Final QA

Review against `10_ACCEPTANCE_CRITERIA_QA.md`.

## Cursor behaviour rules

- Make small, reviewable changes.
- Do not introduce backend features.
- Do not create forms.
- Do not add chatbot libraries.
- Do not add analytics unless requested.
- Do not add authentication unless requested.
- Do not add API routes, server actions, or middleware for locale routing.
- Prefer static content and simple data files.
- Keep copy easy to edit.
- Ask before adding third-party services.
- Keep gallery placeholders easy to replace.
- Treat LINE page as supporting only (footer/FAQ/home small CTA/direct URL), not primary nav.

## Suggested Cursor prompt for Agent 1

```text
Read `@README.md`, `@00_PRODUCT_BRIEF.md`, `@01_INFORMATION_ARCHITECTURE.md`, `@02_BRANDING_LOGO_DOMAIN.md`, `@03_DESIGN_SYSTEM.md`, and `@12_TECH_STACK.md`. Build only the foundation and page shell for the Top & Tan wedding website. Use Thai default routes and English under `/en` without middleware. Do not implement RSVP, attendance counting, chatbot, forms, database, API routes, server actions, analytics, or guest uploads. Keep LINE as a supporting page only (not in main menu). Use placeholders for unconfirmed content and gallery images.
```

## Suggested Cursor prompt for Agent 2

```text
Implement static content sections for each page based on `05_PAGE_BY_PAGE_REQUIREMENTS.md`, using `content/th/*.ts` and `content/en/*.ts` from day one. Keep all copy editable and placeholder-driven where needed. Do not add forms, RSVP flow, attendance tracking, chatbot, backend, API routes, server actions, middleware locale routing, or analytics.
```

## Suggested Cursor prompt for Agent 3

```text
Polish responsive behaviour based on 06_RESPONSIVE_UX_SPEC.md and implement the gallery placeholder behaviour from 07_GALLERY_PLACEHOLDER_SPEC.md. Focus on mobile-first layout, image stability, accessibility, and elegant visual design.
```

## Suggested Cursor prompt for Agent 4

```text
Review the full website against 10_ACCEPTANCE_CRITERIA_QA.md. Fix only issues related to responsiveness, accessibility, navigation, visual consistency, placeholder handling, and violation of no-form/no-chatbot/no-RSVP constraints.
```
