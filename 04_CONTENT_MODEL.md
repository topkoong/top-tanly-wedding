# Content Model

Canonical routing + localization rules are reflected in **`README.md`**, **`docs/PROJECT_OVERVIEW.md`**, and **`content/schema.ts`** (types).

## Language and structure requirements

- Default language is **Thai** at root URLs; **English** under `/en/*`.
- All **visible strings** originate from **`content/th/*.ts`** / **`content/en/*.ts`** (no hard-coded guest copy inside JSX).

```text
content/th/*.ts
content/en/*.ts
content/schema.ts
content/site.ts
```

## Global content (truth for website copy)

Implementation uses bride-first wording everywhere guests read names:

```text
Couple friendly visible name: Tan & Top
Couple formal visible names: Narueporn & Theerut
Groom legal/first context: Theerut (nickname Top)
Bride legal/first context: Narueporn (nickname Tan)

Wedding date (EN): Sunday, 29 November 2026
Wedding date (TH): วันอาทิตย์ที่ 29 พฤศจิกายน 2569
Primary venue: Conrad Bangkok
Morning programme: Engagement & Rubwai — Beverly Hills — 07:00–11:00
Afternoon programme: Wedding reception — Conrad Ballroom — 11:00–14:00
Parking: Conrad Bangkok · All Seasons Place

LINE OA URLs / QR assets: placeholders in LINE content modules only — no web forms.

Google Maps (primary): link via Venue content (search URL or embed placeholder).
Apple Maps references: **omit** unless explicitly curated for MVP.
```

## Home page (`HomeShell` fields)

Eyebrows, hero headings, ceremonial date strings, introductory paragraph, localized dual CTAs (Schedule/Venue), welcome block, tertiary LINE wording, hero placeholder metadata.

LINE must remain **supporting**, not equal to primary itinerary buttons.

## Schedule page

Each event captures:

- Event order label (`01` / `02`)
- Parallel Thai / English headings + descriptions where needed
- Time window, ballroom / room badges, Conrad mention
- Optional chips/highlights—not minute-by-minute hidden agendas

Include guidance copy for prudent early arrival windows + disclaimers that schedule may tighten near the wedding week.

## Venue page

- Conrad positioning + ballroom cards
- Google Maps iframe + outbound `Open in Google Maps` CTA localized
- Parking copy (dual locations listed above)
- Any transport nuance flagged “to verify” vs. asserting unconfirmed micro-details

Do **not** promise Apple Maps parity unless deliberately added later.

## Gallery page

Maintain ≥ **18 placeholders** respecting aspect ratio mixes (see `07_GALLERY_PLACEHOLDER_SPEC.md`).

Structured fields per item: id, nullable `src`, `alt`, bilingual captions/labels where useful, tonal palette cues, enumerated category keys.

### Categories (localized tabs)

See requirements file—typically **ทั้งหมด / พิธีหมั้น / พรีเวดดิ้ง / วันงาน** mirrored in English equivalents.

## FAQ page

Accordion groups with statically authored Q/A pairs touching:

schedule cadence • attire freedom • Conrad directions • Maps CTA wording • Parking • Transit questions answered conservatively • Children policy • Photos • Site update cadence • **LINE OA** etiquette (manual / official updates—not chatbot promises)

## LINE supporting page (`/line`, `/en/line`)

Purpose copy, QR placeholders, enumerated promises (updates, reminders) + explicit exclusions (RSVP bots, counting, AI hallucinations).

Must echo spec in [`08_LINE_OA_RICH_MENU_SPEC.md`](08_LINE_OA_RICH_MENU_SPEC.md).

## Accommodation & dress code editorial

These **do not** map to discrete routes anymore. Mention travel/dress sparingly inside FAQ answers if legally comfortable—never resurrect `/accommodation` or `/dress-code` unless product scope expands.

## Content guardrails checklist

✅ Bride-first wording for couple-facing strings  
✅ No RSVP coercion  
✅ No upload flows  
✅ No chatbot conversational bait  
✅ Keep personal phone/email out unless couples explicitly insist  
✅ Spell **Venue** correctly (`Venue`, not “Vanue”)
