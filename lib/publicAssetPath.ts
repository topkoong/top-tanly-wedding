/**
 * Absolute path for files in `/public`, including GitHub Pages `basePath`.
 *
 * `next/image` with `src="/images/…"` does not always receive `basePath` in static export
 * HTML output, so root-relative `/images/…` becomes `github.io/images/…` (404) instead of
 * `github.io/top-tanly-wedding/images/…`.
 *
 * **Keep in sync** with `basePath` in `next.config.ts` when `GITHUB_PAGES === "true"`.
 */
export function publicAssetPath(path: `/${string}`): string {
  if (process.env.GITHUB_PAGES !== "true") {
    return path;
  }
  const base = "/top-tanly-wedding";
  return path.startsWith(`${base}/`) || path === base ? path : `${base}${path}`;
}
