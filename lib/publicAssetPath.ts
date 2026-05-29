/**
 * Absolute path for files in `/public`, including GitHub Pages `basePath`.
 *
 * `next/image` with `src="/images/…"` does not always receive `basePath` in static export
 * HTML output, so root-relative `/images/…` becomes `github.io/images/…` (404) instead of
 * `github.io/top-tanly-wedding/images/…`.
 *
 * **Keep in sync** with `basePath` in `next.config.ts` when `GITHUB_PAGES === "true"`.
 *
 * Some page sections are rendered by Client Components during in-app navigation, where
 * `process.env.GITHUB_PAGES` is not available. In that case, infer the base path from
 * the current browser URL so client-side route changes keep using the deployed asset path.
 */
export function publicAssetPath(path: `/${string}`): string {
  const base = "/top-tanly-wedding";
  const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
  const isGithubPagesBrowser =
    typeof window !== "undefined" &&
    (window.location.pathname === base || window.location.pathname.startsWith(`${base}/`));

  if (!isGithubPagesBuild && !isGithubPagesBrowser) {
    return path;
  }

  return path.startsWith(`${base}/`) || path === base ? path : `${base}${path}`;
}
