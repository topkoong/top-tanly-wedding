"use client";

import ScheduleSection from "@/components/sections/ScheduleSection";
import { scheduleContentEn } from "@/content/en/schedule";
import { scheduleContentTh } from "@/content/th/schedule";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";

export default function SchedulePage() {
  const locale = useLocale();
  const site = locale === "th" ? siteContentTh : siteContentEn;
  const content = locale === "th" ? scheduleContentTh : scheduleContentEn;

  return <ScheduleSection site={site} content={content} />;
}
