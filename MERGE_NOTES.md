# Merge Notes

This final pack combines the original ChatGPT wedding website spec with Claude's latest design-system, tech-stack, and Cursor rule updates.

## Accepted from Claude's latest update

- Concrete design tokens, typography, spacing, radius, shadows, component patterns, and animation rules.
- Pinned tech stack: Next.js 15 App Router, TypeScript strict mode, Tailwind CSS v4, `next/font/google`, `lucide-react`, `motion`, Vercel.
- `.cursor/rules/wedding-site.mdc` as an always-loaded Cursor project rule file.

## Patches applied

- Inserted `03_DESIGN_SYSTEM.md` and renumbered later docs.
- Renamed the tech-stack file to `12_TECH_STACK.md`.
- Updated all references to the new numbering.
- Made Tailwind CSS v4 `@theme` the primary token strategy.
- Added static export + `next/image` guidance: use `images.unoptimized = true` for MVP or configure a custom image loader.
- Reworded LINE OA usage to avoid chatbot/AI/instant-answer implications.
- Recommended a static `public/og-image.jpg` for MVP instead of dynamic OG generation.

## Non-negotiables preserved

- No RSVP page or RSVP form.
- No attendance counting.
- No chatbot or AI assistant.
- No public contact form.
- No public gallery upload.
- No login/auth system.
- No database.
- No API routes for MVP.
- No analytics for MVP.

## v2 fixes applied

- Confirmed `.cursor/rules/wedding-site.mdc` is included in the ZIP.
- Added `CURSOR_RULES_COPY.md` as a visible review copy because `.cursor/` is a hidden folder.
- Fixed `12_TECH_STACK.md` section 5 to use static `public/og-image.jpg` for MVP.
- Corrected numbering references inside `.cursor/rules/wedding-site.mdc` after the final renumbering.
