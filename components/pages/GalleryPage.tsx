"use client";

import GallerySection from "@/components/sections/GallerySection";
import { galleryContentEn } from "@/content/en/gallery";
import { galleryContentTh } from "@/content/th/gallery";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { useLocale } from "@/lib/hooks/useLocale";

export default function GalleryPage() {
  const locale = useLocale();
  const site = locale === "th" ? siteContentTh : siteContentEn;
  const content = locale === "th" ? galleryContentTh : galleryContentEn;

  return <GallerySection site={site} content={content} />;
}
