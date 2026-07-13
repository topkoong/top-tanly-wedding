export type Locale = "th" | "en";

/** English routes live at `/`; Thai routes use the `/th` prefix. */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/th" || pathname.startsWith("/th/") ? "th" : "en";
}

export function getLocalizedHomeHref(locale: Locale): string {
  return locale === "th" ? "/th" : "/";
}

/** Strip locale prefix so `/th/schedule` and `/schedule` both map to `/schedule`. */
export function getLocaleNeutralPathname(pathname: string): string {
  if (pathname === "/th") {
    return "/";
  }

  if (pathname.startsWith("/th/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const neutral = getLocaleNeutralPathname(pathname);

  if (locale === "th") {
    return neutral === "/" ? "/th" : `/th${neutral}`;
  }

  return neutral;
}

export function getLanguageSwitchHref(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  return getLocalizedPathname(pathname, locale === "en" ? "th" : "en");
}
