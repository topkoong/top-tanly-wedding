/** Normalize pathname / href for route comparison (trailing slash, locale home). */
export function normalizeRoutePath(path: string): string {
  if (path === "/" || path === "/th") {
    return path;
  }
  return path.replace(/\/$/, "") || "/";
}

export function isRouteActive(pathname: string, href: string): boolean {
  const p = normalizeRoutePath(pathname);
  const h = normalizeRoutePath(href);
  if (h === "/" || h === "/th") {
    return p === h;
  }
  return p === h;
}
