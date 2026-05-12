# Product Brief — Tan & Top Wedding Website

## Summary

A **premium, responsive, static** wedding microsite so guests can reach schedule, venue, gallery, FAQ, and official LINE OA context **without RSVP flows or backends**.

Implementation lives in [`README.md`](README.md); this brief states product intent aligned with shipped routes.

## Couple identifiers (facts vs. visible copy)

Individuals:

- Groom nickname: Top · first name: Theerut  
- Bride nickname: Tan · first name: Narueporn  

**All visible UI copy uses bride-first order:**

- Friendly: **Tan & Top**
- Formal: **Narueporn & Theerut**

Do **not** use groom-first wording such as Top & Tan or Theerut & Narueporn in guest-facing interfaces.

*(The TN monogram may derive from initials; do not reorder names in typography on the live site.)*

## Core goals (guest-facing)

Guests should resolve quickly:

1. When events take place / recommended arrival mindset  
2. Where Conrad Bangkok sits and how to open Google Maps  
3. What programme moments exist  
4. How to browse gallery placeholders today and later memories  
5. Where official updates/support live (supporting LINE page + FAQ)—**not** RSVP or chatbots  

**No standalone Accommodation page** or **Dress Code page** exists on site; FAQs may optionally cover attire or travel wording without implying new routes.

## Non-goals (non‑negotiable)

- RSVP surfaces, attendance counting, guest confirmations  
- Public forms, uploads, surveys  
- Chatbot / AI assistants on-site  
- API routes, server actions, database, auth  
- Middleware locale redirection  
- Analytics in MVP (can be reconsidered deliberately later)  

## Users

- Guests on mobile opening links from LINE or QR codes  
- English‑reading relatives using `/en` routes  
- Couple needing a credible, calm information hub—not a ticketing system  

## Tone

Warm, elegant, calm, polite. Suitable mixed Thai/international guests.

## Languages

Thai **default**. English mirrored under **`/en/*`**. Strings live exclusively in **`content/th/*.ts`** and **`content/en/*.ts`**.

## Success

The site succeeds when guests skim key facts in under half a minute, trust the map/scheduling snippets, perceive premium hospitality styling, encounter **zero** RSVP friction, and use LINE only as communicated (updates / manual outreach).
