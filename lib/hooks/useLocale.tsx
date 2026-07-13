"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getSiteContent } from "@/content/site";
import {
  getLocaleFromPathname,
  getLocalizedPathname,
  type Locale,
} from "@/lib/locale";

type LocaleContextValue = {
  locale: Locale;
  switchLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>(() => getLocaleFromPathname(pathname));

  useEffect(() => {
    setLocale(getLocaleFromPathname(pathname));
  }, [pathname]);

  const switchLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      const nextPath = getLocalizedPathname(pathname, next);
      window.history.replaceState(window.history.state, "", nextPath);
      setLocale(next);
      document.documentElement.lang = getSiteContent(next).htmlLang;
    },
    [locale, pathname],
  );

  const value = useMemo(() => ({ locale, switchLocale }), [locale, switchLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  const pathname = usePathname();
  return context?.locale ?? getLocaleFromPathname(pathname);
}

export function useSwitchLocale(): (next: Locale) => void {
  const context = useContext(LocaleContext);
  return context?.switchLocale ?? (() => undefined);
}
