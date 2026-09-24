"use client";

import HomeShell from "@/components/sections/HomeShell";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";
import type { PhotoMap } from "@/lib/photos";

export default function HomePage({ photos }: { photos: PhotoMap }) {
  const locale = useLocale();
  const content = locale === "th" ? siteContentTh : siteContentEn;

  return <HomeShell content={content} photos={photos} />;
}
