import { getBasePath } from "@/lib/basePath";

/**
 * Absolute path for files in `/public`, including GitHub Pages `basePath`.
 *
 * `next/image` with `src="/images/…"` does not always receive `basePath` in static export
 * HTML output, so root-relative `/images/…` becomes `github.io/images/…` (404) instead of
 * `github.io/top-tanly-wedding/images/…`.
 */
export function publicAssetPath(path: `/${string}`): string {
  const base = getBasePath();

  if (!base) {
    return path;
  }

  return path.startsWith(`${base}/`) || path === base ? path : `${base}${path}`;
}
