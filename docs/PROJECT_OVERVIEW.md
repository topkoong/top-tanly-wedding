# Tan & Top Wedding Website — Project Overview

## Purpose

This project is a static, read-only wedding information website for Tan & Top.

The website helps guests access key wedding information, including:

- Wedding date
- Schedule
- Venue and Google Maps
- Gallery placeholders
- FAQ
- LINE Official Account supporting page

The website intentionally does not include RSVP, attendance counting, forms, chatbot, authentication, backend APIs, or guest uploads.

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

## Wedding Details

- Date: Sunday, 29 November 2026
- Venue: Conrad Bangkok
- Engagement & Rubwai Ceremony:
  - Time: 07:00–11:00
  - Room: Beverly Hills room
- Wedding Reception:
  - Time: 11:00–14:00
  - Room: Ballroom
- Parking:
  - Conrad Bangkok
  - All Seasons Place

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

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- pnpm
- Static export
- GitHub Pages deployment

## Design Direction

The visual direction is minimal, elegant, classy, warm, and premium.

The site should feel like a modern digital wedding invitation or luxury hotel wedding microsite.

Avoid:

- Heavy floral graphics
- Overly dark sections
- Generic cards
- Corporate styling
- RSVP or form-like UI
- Chatbot or AI assistant wording
