"use client";

import { useEffect } from "react";

import { getSiteContent } from "@/content/site";
import { useLocale } from "@/lib/hooks/useLocale";

/** Keeps `<html lang>` in sync with the active locale. */
export default function LocaleHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = getSiteContent(locale).htmlLang;
  }, [locale]);

  return null;
}
