/** Keep in sync with `basePath` in `next.config.ts` when `GITHUB_PAGES === "true"`. */
export const GITHUB_PAGES_BASE_PATH = "/top-tanly-wedding";

/** Resolve the active Next.js `basePath` (build-time or inferred from the browser URL). */
export function getBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  if (process.env.GITHUB_PAGES === "true") {
    return GITHUB_PAGES_BASE_PATH;
  }

  if (typeof window !== "undefined") {
    const { pathname } = window.location;
    if (pathname === GITHUB_PAGES_BASE_PATH || pathname.startsWith(`${GITHUB_PAGES_BASE_PATH}/`)) {
      return GITHUB_PAGES_BASE_PATH;
    }
  }

  return "";
}

/** Strip `basePath` so locale helpers can work on both Next and browser pathnames. */
export function stripBasePath(pathname: string): string {
  const base = GITHUB_PAGES_BASE_PATH;

  if (pathname === base || pathname === `${base}/`) {
    return "/";
  }

  if (pathname.startsWith(`${base}/`)) {
    const stripped = pathname.slice(base.length);
    return stripped || "/";
  }

  return pathname;
}

/**
 * Convert an app-relative path (as returned by `usePathname()` / Next `Link`) into the
 * full browser pathname, including `basePath` and trailing slashes.
 */
export function toBrowserPathname(appPath: string): string {
  const base = getBasePath();
  const normalized = appPath === "/" ? "/" : appPath.replace(/\/$/, "") || "/";
  const withTrailingSlash =
    normalized === "/" ? "/" : `${normalized}/`;

  if (!base) {
    return withTrailingSlash;
  }

  if (withTrailingSlash === "/") {
    return `${base}/`;
  }

  return `${base}${withTrailingSlash}`;
}
