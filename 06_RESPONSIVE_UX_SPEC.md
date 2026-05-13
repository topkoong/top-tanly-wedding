# 06 — Responsive UX Specification

## Mobile-first principle

Most guests will open the site from LINE or a mobile browser. Mobile design is the primary experience. Desktop polish is important, but mobile usability and elegance come first.

Every page must be reviewed at:

- 360px
- 375px
- 390px
- 393px
- 414px
- 430px
- 768px
- 1024px

Also validate desktop at 1280px and 1440px.

Decorative botanical layers (`BotanicalBackdrop`, `FooterBotanical`, `SoftPageBotanical`) must remain clipped inside `overflow-hidden` ancestors so they **never widen the canvas** beyond these checkpoints.

## Navigation behavior

**Desktop** top nav should include only:

- Thai: `กำหนดการ`, `สถานที่`, `แกลเลอรี`, `คำถามที่พบบ่อย`, `EN`
- English: `Schedule`, `Venue`, `Gallery`, `FAQ`, `TH`

**Mobile / small tablet (`lg` and below):** in addition to the top bar (logo + hamburger + language), show a **fixed bottom navigation** with **five** destinations: **Home · Schedule · Venue · Gallery · FAQ** (icons + labels). Use **olive** for the active route. Do **not** include LINE, Accommodation, Dress Code, RSVP, Gift, or Contact.

Reserve `padding-bottom` on `main` / footer so page content is not hidden behind the bottom bar; honour **`env(safe-area-inset-bottom)`** on notched devices.

Do not include Home, LINE, Accommodation, Dress Code, RSVP, Contact in **desktop** inline nav (Home is only via logo and bottom nav on mobile).

## Mobile quality requirements

- No horizontal scrolling at target widths.
- No clipped buttons, cut-off Thai text, or overlap.
- Tap targets minimum 44px.
- Comfortable side padding and section spacing.
- Thai body text should remain readable (about 16px minimum).
- Thai line-height around 1.7.
- Avoid excessive Thai letter-spacing.

## Home on mobile

- **Invitation-first** layout: centered **Tan & Top** (display serif, olive-deep), subdued formal names, ceremonial **date card** (ivory plane + botanical rule) housing date, programme summary, Conrad Bangkok label, then **View Details** scroll/anchor.
- **Quick-action cards** (Schedule, Venue, Gallery, FAQ) are large tappable rows with icon, title, and subtitle—**no** RSVP or Gift cards.
- Optional soft botanical corners (CSS/SVG only); avoid overflow.
- LINE remains a **supporting** link in the welcome block—not a primary hero CTA.

## Schedule on mobile

- Priority page for scanability.
- Event cards stacked with strong separation.
- Time ranges visually prominent.
- Event number decorative but unobtrusive.
- Activity chips wrap cleanly and stay legible.

## Venue on mobile

- Google Maps CTA visible near top.
- Map embed height controlled for small screens.
- Room and parking cards stack clearly.
- No cramped side-by-side content.

## Gallery on mobile

- One-column intentional photo wall.
- Category tabs fit or scroll gracefully.
- Thai tab labels must not clip.
- Captions stay readable.

## FAQ on mobile

- Categories easy to scan with gold/olive hairline markers (tight Thai tracking defaults).
- Each question renders as its own ivory card; expanded answers breathe on whisper cream washes.
- Answers remain complete and readable.
- LINE CTA subtle and secondary.

## Motion and performance

- Respect `prefers-reduced-motion`—disable purely decorative fades/slides when users request reduced motion (keep content visible).
- Keep animation subtle: fade / gentle translate only; durations short-to-medium (~200–450 ms typical).
- Avoid parallax or scroll-jacking suites that jitter inside LINE/Kakao/Android WebView builds.
- Do not hide critical RSVP-adjacent copy behind motion-only reveals (even though RSVP itself is forbidden, the analogy stands for schedule/map content).
- Optional flip cards permitted only where explicitly decorative—not for programme facts.

Detailed acceptance mirrors **§ Animation** in [`10_ACCEPTANCE_CRITERIA_QA.md`](10_ACCEPTANCE_CRITERIA_QA.md) and [`docs/VISUAL_QA.md`](docs/VISUAL_QA.md).
