# Tan & Top Wedding Website — Project overview

## Purpose

Provide a **static, read-only, bilingual** (Thai-first) wedding microsite guests can open from LINE or mobile browsers. Content covers schedule, venue/maps, curated gallery placeholders, FAQ, and a **supporting** LINE Official Account explainer—not guest management tools.

See also: [DOCUMENTATION_AUDIT.md](./DOCUMENTATION_AUDIT.md) for what obsolete docs said vs. shipping code.

## Key product decisions

- **Default locale:** Thai at root URLs; **English** under `/en/*`.
- **Visible naming (bride-first):** Tan & Top · Narueporn & Theerut (never groom-first ordering in UI copy).
- **No RSVP**, attendance counting, forms, chatbot, API routes, server actions, database, auth, or analytics in MVP.
- **No middleware** locale detection—explicit routes only.
- **Navigation:** Schedule, Venue, Gallery, FAQ + language switch. **LINE** is **not** in primary nav; pages `/line` and `/en/line` exist for official updates/reminders/manual support wording only.
- **Removed from website IA:** Accommodation page, Dress Code page (dress guidance may appear in FAQ only).

## Wedding details

- **English date:** Sunday, 29 November 2026  
- **Thai date:** วันอาทิตย์ที่ 29 พฤศจิกายน 2569  
- **Venue:** Conrad Bangkok  
- **Engagement & Rubwai:** 07:00–11:00 · Beverly Hills  
- **Reception:** 11:00–14:00 · Conrad Ballroom  
- **Parking:** Conrad Bangkok · All Seasons Place  

Operational detail on venue/floors/transit must stay accurate or marked “to be confirmed” per content owners.

## Routes

### Active (implemented)

Thai:

- `/`, `/schedule/`, `/venue/`, `/gallery/`, `/faq/`, `/line/`

English:

- `/en/`, `/en/schedule/`, `/en/venue/`, `/en/gallery/`, `/en/faq/`, `/en/line/`

### Not shipped (legacy spec only)

`/accommodation`, `/dress-code`, RSVP or contact flows, chatbot surfaces.

## Tech & hosting

See [ARCHITECTURE.md](./ARCHITECTURE.md) and [DEPLOYMENT.md](./DEPLOYMENT.md).

Published: **[https://topkoong.github.io/top-tanly-wedding/](https://topkoong.github.io/top-tanly-wedding/)**.

## Removed / non-goals

- Guest-submitted RSVP or headcount  
- Public uploads  
- Automated “instant answer” bots  
- Backend persistence tied to browsing the site  

## Design direction

Minimal, elegant, warm, premium, **mobile-first**, modern Thai hotel wedding aesthetic—digital invitation, not generic documentation UI.

### Quality priorities

1. Mobile readability (375 / 390 / 430 / 768).  
2. Clear hierarchy on Schedule & Venue.  
3. FAQ answers complete in Thai and English.  
4. Gallery placeholders feel intentional (not empty grid noise).  
5. Subtle motion only; **`prefers-reduced-motion`** honored.  

## Visual QA

[docs/VISUAL_QA.md](./VISUAL_QA.md) · Playwright: `pnpm screenshots`
