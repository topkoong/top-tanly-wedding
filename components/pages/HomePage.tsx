"use client";

import HomeShell from "@/components/sections/HomeShell";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";

export default function HomePage() {
  const locale = useLocale();
  const content = locale === "th" ? siteContentTh : siteContentEn;

  return <HomeShell content={content} />;
}
