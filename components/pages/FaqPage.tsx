"use client";

import FaqSection from "@/components/sections/FaqSection";
import { faqContentEn } from "@/content/en/faq";
import { faqContentTh } from "@/content/th/faq";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";

export default function FaqPage() {
  const locale = useLocale();
  const site = locale === "th" ? siteContentTh : siteContentEn;
  const content = locale === "th" ? faqContentTh : faqContentEn;
  const lineHref = locale === "th" ? "/th/line" : "/line";

  return <FaqSection site={site} content={content} lineHref={lineHref} />;
}
