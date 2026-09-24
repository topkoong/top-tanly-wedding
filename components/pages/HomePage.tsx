"use client";

import HomeShell from "@/components/sections/HomeShell";
import { scheduleContentEn } from "@/content/en/schedule";
import { siteContentEn } from "@/content/en/site";
import { scheduleContentTh } from "@/content/th/schedule";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";
import type { PhotoMap } from "@/lib/photos";

export default function HomePage({ photos }: { photos: PhotoMap }) {
  const locale = useLocale();
  const content = locale === "th" ? siteContentTh : siteContentEn;
  const schedule = locale === "th" ? scheduleContentTh : scheduleContentEn;

  return <HomeShell content={content} schedule={schedule} photos={photos} />;
}
