export type Locale = "th" | "en";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "th";
}

export function getLocalizedHomeHref(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}

export function getLanguageSwitchHref(pathname: string): string {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return pathname === "/" ? "/en" : `/en${pathname}`;
}
