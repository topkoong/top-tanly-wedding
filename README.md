# Top & Tan Wedding Website — Final Cursor Spec Pack

This pack is designed for building a responsive, read-only wedding website with Cursor using Next.js 16.2.6, TypeScript, and Tailwind CSS v4.

## Package manager

This project uses `pnpm` only.

Use these commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm setup
```

Do not use `npm`, `yarn`, or `bun` unless explicitly requested.

## Important product decisions

- No RSVP page.
- No RSVP form.
- No attendance counting or guest tracking.
- No guest confirmation workflow.
- No chatbot or AI assistant.
- No public forms.
- No public guest uploads.
- No API routes, server actions, or middleware language routing for MVP.
- Gallery should use placeholders first.
- Website should be mobile-first and responsive.
- LINE OA should be used for updates and notices as a supporting page/channel.
- The website is the official source of truth for static wedding information.

## Language and routing decisions

- Default language: Thai.
- English routes live under `/en`.
- Main navigation does not include LINE.
- Dedicated LINE pages still exist at `/line` and `/en/line`.
- All visible copy must come from `content/th/*.ts` and `content/en/*.ts`.

## Confirmed wedding details

- Date: Sunday, 29 November 2026
- Main venue: Conrad Bangkok
- Engagement & Rubwai ceremony: 07:00–11:00, Beverly Hills room, Conrad Bangkok
- Wedding Reception: 11:00–14:00, Ballroom, Conrad Bangkok
- Parking: Conrad Bangkok parking and All Seasons Place parking

## Read order

Use these files in order:

1. `00_PRODUCT_BRIEF.md`
2. `01_INFORMATION_ARCHITECTURE.md`
3. `02_BRANDING_LOGO_DOMAIN.md`
4. `03_DESIGN_SYSTEM.md`
5. `04_CONTENT_MODEL.md`
6. `05_PAGE_BY_PAGE_REQUIREMENTS.md`
7. `06_RESPONSIVE_UX_SPEC.md`
8. `07_GALLERY_PLACEHOLDER_SPEC.md`
9. `08_LINE_OA_RICH_MENU_SPEC.md`
10. `09_CURSOR_AGENT_INSTRUCTIONS.md`
11. `10_ACCEPTANCE_CRITERIA_QA.md`
12. `11_DEPLOYMENT_SECURITY_NOTES.md`
13. `12_TECH_STACK.md`
14. `.cursor/rules/wedding-site.mdc`
15. `CURSOR_RULES_COPY.md` — visible copy for verification only; Cursor uses the `.mdc` file

> Note: `.cursor/` is a hidden folder on macOS/Linux. If you do not see it in Finder, use `Cmd + Shift + .` to show hidden files, or verify from Terminal with `ls -la .cursor/rules`.

## Recommended implementation approach in Cursor

Do not ask Cursor to build the entire site in one step. Use a staged approach.

### Agent 1 — Foundation

Ask Cursor to create the Next.js project foundation, Tailwind v4 design tokens, fonts, navbar, footer, mobile menu, reusable UI components, content folder structure, and page shells only.

Suggested prompt:

```text
Read @README.md, @00_PRODUCT_BRIEF.md, @01_INFORMATION_ARCHITECTURE.md, @02_BRANDING_LOGO_DOMAIN.md, @03_DESIGN_SYSTEM.md, and @12_TECH_STACK.md. Build only the foundation and page shell for the Top & Tan wedding website. Do not implement RSVP, attendance counting, chatbot, forms, database, API routes, analytics, or guest uploads. Use placeholders for all unconfirmed content and gallery images. Make the site responsive and static-first.
```

### Agent 2 — Pages

Ask Cursor to implement the static pages one at a time using content files.

Suggested prompt:

```text
Implement the static content sections for each page based on @05_PAGE_BY_PAGE_REQUIREMENTS.md and @04_CONTENT_MODEL.md. Keep all copy editable and placeholder-driven in content/th/*.ts and content/en/*.ts. Do not add any forms, RSVP flow, attendance counting, chatbot, backend, or tracking.
```

### Agent 3 — Gallery and responsive polish

Ask Cursor to implement gallery placeholders and responsive polish.

Suggested prompt:

```text
Polish responsive behaviour based on @06_RESPONSIVE_UX_SPEC.md and implement the gallery placeholder behaviour from @07_GALLERY_PLACEHOLDER_SPEC.md. Apply the component patterns and animation rules from @03_DESIGN_SYSTEM.md. Focus on mobile-first layout, image stability, accessibility, and elegant visual design.
```

### Agent 4 — Quality review and deployment readiness

Ask Cursor to review the implementation against constraints and deployment requirements.

Suggested prompt:

```text
Review the full website against @10_ACCEPTANCE_CRITERIA_QA.md, @11_DEPLOYMENT_SECURITY_NOTES.md, and @12_TECH_STACK.md. Fix only issues related to responsiveness, accessibility, navigation, visual consistency, placeholder handling, static export compatibility, and violation of no-form/no-chatbot/no-RSVP/no-attendance-counting constraints.
```

## Recommended site name

Primary public name:

```text
Top & Tan Wedding
```

Formal logo name:

```text
Theerut & Narueporn
```

Recommended monogram:

```text
TN
```

Recommended domain to check first:

```text
topandtanwedding.com
```

Backup options:

```text
topandtan.com
topandtan2026.com
theerutnarueporn.com
tnwedding2026.com
```

## Notes for static export

For MVP, this pack recommends static export. If `output: 'export'` is enabled, use `images.unoptimized = true` or a custom image loader. The simplest MVP path is:

```text
output: 'export'
images.unoptimized = true
local images in /public/images
static OG image at /public/og-image.jpg
```

Do not add dynamic server features unless explicitly requested later.
