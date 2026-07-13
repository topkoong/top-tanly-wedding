"use client";

import LineSection from "@/components/sections/LineSection";
import { lineContentEn } from "@/content/en/line";
import { lineContentTh } from "@/content/th/line";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";

export default function LinePage() {
  const locale = useLocale();
  const site = locale === "th" ? siteContentTh : siteContentEn;
  const content = locale === "th" ? lineContentTh : lineContentEn;

  return <LineSection site={site} content={content} />;
}
