# Documentation audit

**Audit date:** 2026

**Scope:** Compared markdown and Cursor rule files against the current implementation (`app/`, `content/`, `components/`, `next.config.ts`, `package.json`, `.github/workflows/deploy.yml`, `scripts-capture-screenshots.mjs`).

**Canonical product truth:** `README.md` and `docs/PROJECT_OVERVIEW.md` align with shipped routes and bilingual content layers. Older numbered specs (`00_`–`12_`) and agent instruction files retain useful planning detail but diverge where labeled below.

---

## Summary table

| File | Current status | Issues found | Action taken |
|------|----------------|--------------|--------------|
| `README.md` | Updated | Expanded index, pinned versions from package.json, Playwright/screenshot QA, documentation index | Fully rewritten |
| `00_PRODUCT_BRIEF.md` | Updated | Old project title and groom-first *visible* naming; accommodation/dress as standalone IA | Rewritten for current product truth; kept internal couple facts |
| `01_INFORMATION_ARCHITECTURE.md` | Updated | Listed accommodation/dress-code routes + old nav menus + groom-first footer wording | Rewritten for current routes and nav |
| `02_BRANDING_LOGO_DOMAIN.md` | Updated | Strong emphasis on groom-first naming for UI | Revised: bride-first visible copy; TN monogram note; OG examples updated |
| `03_DESIGN_SYSTEM.md` | Updated | Animation rules not enumerated | Added **Animation policy** section |
| `04_CONTENT_MODEL.md` | Updated | Groom-first naming snippets; Accommodation/Dress page sections; Ballroom spelling drift risk | Revised for bride-first IA + clarified removed routes |
| `05_PAGE_BY_PAGE_REQUIREMENTS.md` | Current | None material | No change |
| `06_RESPONSIVE_UX_SPEC.md` | Updated | Animation QA not enumerated | Expanded **Motion / animation** rules |
| `07_GALLERY_PLACEHOLDER_SPEC.md` | Current | None material | No change |
| `08_LINE_OA_RICH_MENU_SPEC.md` | Updated | Accommodation tile + duplicate Help section; stale footer wording | Menu grid aligns with simplified IA + cleaned sections |
| `09_CURSOR_AGENT_INSTRUCTIONS.md` | Deprecated but kept for history | Next.js 15, old routes/nav, grooming-first branding | Top banner → historical; summary points to README + docs |
| `10_ACCEPTANCE_CRITERIA_QA.md` | Updated | Animation acceptance missing | Added **Motion / animation** acceptance |
| `11_DEPLOYMENT_SECURITY_NOTES.md` | Updated | Vercel-primary framing; OG copy groom-first; Apple Maps checklist | GH Pages primary; bride-first OG copy; checklist aligned |
| `12_TECH_STACK.md` | Updated | Missing explicit Next/React versions and Playwright | Pinned versions from package.json; added Playwright |
| `CURSOR_RULES_COPY.md` | Updated | Out of sync with `.cursor/rules/wedding-site.mdc` | Replaced body to mirror updated rules |
| `MERGE_NOTES.md` | Deprecated but kept for history | Describes old Claude pack / Next 15 / Vercel | Historical banner + pointer to audit |
| `docs/PROJECT_OVERVIEW.md` | Updated | Missing Thai date; doc links | Expanded + links |
| `docs/ARCHITECTURE.md` | Updated | Stack versions vague | Versions + screenshot script note |
| `docs/DEPLOYMENT.md` | Current | Minor | Confirmed alignment with workflow; small clarifications |
| `docs/VISUAL_QA.md` | Updated | Playwright repair steps; animation review | Expanded Playwright + animation QA |
| `.cursor/rules/wedding-site.mdc` | Updated | Old routes/nav and groom-first branding; LINE/footer wrong | Fully aligned with implemented IA |
| **`docs/DOCUMENTATION_AUDIT.md`** | **Created** | — | **This file** |

---

## Classification key

| Label | Meaning |
|-------|---------|
| **Current** | Matches repo as audited; maintained. |
| **Updated** | Edited during this pass to match implementation/truth. |
| **Deprecated but kept for history** | Older agent/pack narrative; superseded—read `README.md` and `docs/*.md` first. |
| **Needs manual review** | None flagged after this pass. |

Legacy material we **did not delete:** `09_CURSOR_AGENT_INSTRUCTIONS.md`, `MERGE_NOTES.md` (clearly labeled historical).
