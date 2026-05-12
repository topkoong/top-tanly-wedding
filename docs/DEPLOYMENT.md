# Deployment Guide

## Deployment Target

This project is currently deployed to GitHub Pages:

```text
https://topkoong.github.io/top-tanly-wedding/
```

Because this is a GitHub Pages project site, the app is hosted under the `/top-tanly-wedding` subpath.

## Package Manager

Use pnpm only.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Do not use:

```text
npm
yarn
bun
```

## Local Development

Run:

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

Local development should run without the GitHub Pages base path.

## Production Build

Run:

```bash
pnpm build
```

The static output is generated in:

```text
out/
```

## GitHub Pages Build

GitHub Actions should build with:

```text
GITHUB_PAGES=true
```

This enables the GitHub Pages base path and asset prefix.

## Why GitHub Pages Needs Special Config

The deployed URL is:

```text
https://topkoong.github.io/top-tanly-wedding/
```

That means CSS and JavaScript assets must be loaded from:

```text
/top-tanly-wedding/_next/static/...
```

If `basePath` and `assetPrefix` are missing, the site may load but the design can appear broken because assets are requested from the wrong path.

## Required Next.js Config

`next.config.ts` should include conditional GitHub Pages support:

```ts
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/top-tanly-wedding" : "",
  assetPrefix: isGithubPages ? "/top-tanly-wedding/" : "",
};

export default nextConfig;
```

## Required GitHub Actions Build Step

The build step should pass `GITHUB_PAGES=true`:

```yaml
- name: Build Next.js static export
  run: pnpm build
  env:
    GITHUB_PAGES: "true"
```

## GitHub Pages Workflow

The workflow should:

1. Check out code.
2. Set up pnpm.
3. Set up Node.js.
4. Install dependencies with `pnpm install --frozen-lockfile`.
5. Build with `GITHUB_PAGES=true`.
6. Add `.nojekyll`.
7. Upload `out/`.
8. Deploy to GitHub Pages.

## Workflow reference

The authoritative workflow lives in repository:

```text
.github/workflows/deploy.yml
```

It installs with **`pnpm install --frozen-lockfile`**, builds with **`GITHUB_PAGES: "true"`**, writes **`out/.nojekyll`**, uploads `./out`, and deploys via `actions/deploy-pages@v4`.

## Post-deployment QA

After every deployment, check:

```text
/top-tanly-wedding/
/top-tanly-wedding/schedule/
/top-tanly-wedding/venue/
/top-tanly-wedding/gallery/
/top-tanly-wedding/faq/
/top-tanly-wedding/line/
/top-tanly-wedding/en/
/top-tanly-wedding/en/schedule/
/top-tanly-wedding/en/venue/
/top-tanly-wedding/en/gallery/
/top-tanly-wedding/en/faq/
/top-tanly-wedding/en/line/
```

Also check:

- CSS loads correctly.
- Fonts load correctly.
- Navigation links work.
- Language switch works.
- Google Maps button works.
- No RSVP/form/chatbot UI appears.
- Mobile layout works at 375px, 390px, 430px, and 768px.
