# Tan & Top Wedding Website — Project Overview

## Purpose

This project is a static, read-only, bilingual wedding information website for Tan & Top.

The website helps guests quickly access trusted wedding information from mobile or desktop, especially when opened from LINE or a mobile browser.

Primary guest information includes:

- Wedding schedule
- Venue and Google Maps
- Gallery placeholders
- FAQ
- LINE Official Account support page

The website intentionally does not include RSVP, attendance counting, forms, chatbot, authentication, backend APIs, database, analytics, middleware locale redirects, or public guest uploads.

## Key Product Decisions

- Default language: Thai
- English pages live under `/en`
- Bride-first display order:
  - Tan & Top
  - Narueporn & Theerut
- LINE is not part of the main navigation
- LINE exists only as a supporting page/channel
- Accommodation and Dress Code pages are intentionally removed
- Gallery uses intentional placeholders until real photos are available
- The website is the official source of truth for static wedding information

## Wedding Details

- Date: Sunday, 29 November 2026
- Venue: Conrad Bangkok
- Engagement & Rubwai Ceremony:
  - Time: 07:00–11:00
  - Room: Beverly Hills
- Wedding Reception:
  - Time: 11:00–14:00
  - Room: Conrad Ballroom
- Parking:
  - Conrad Bangkok
  - All Seasons Place

Operational venue details beyond this baseline must be verified before final publication.

## Routes

Thai default routes:

- `/`
- `/schedule`
- `/venue`
- `/gallery`
- `/faq`
- `/line`

English routes:

- `/en`
- `/en/schedule`
- `/en/venue`
- `/en/gallery`
- `/en/faq`
- `/en/line`

Removed / intentionally unused:

- `/accommodation`
- `/dress-code`
- RSVP-related routes
- Contact form routes
- Chatbot routes

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- pnpm
- Static export
- GitHub Pages deployment
- Playwright for optional screenshot capture / visual QA

## Design Direction

The visual direction is minimal, elegant, classy, warm, premium, and modern Thai hotel wedding style.

The site should feel like:

- a modern digital wedding invitation
- a luxury hotel wedding microsite
- an editorial wedding brochure

Avoid:

- heavy floral graphics
- overly dark sections
- generic cards
- corporate styling
- RSVP or form-like UI
- chatbot or AI assistant wording
- plain documentation-style layouts

## Quality Priorities

1. Mobile-first readability and polish at 375px, 390px, 430px, and 768px.
2. Strong hierarchy and refined typography.
3. Practical guest clarity on Schedule and Venue pages.
4. Curated, intentional placeholder styling in Gallery.
5. Complete FAQ answers in both Thai and English.
6. Bride-first naming everywhere in visible content.
