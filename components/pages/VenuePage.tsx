"use client";

import VenueSection from "@/components/sections/VenueSection";
import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";
import { venueContentEn } from "@/content/en/venue";
import { venueContentTh } from "@/content/th/venue";
import { useLocale } from "@/lib/hooks/useLocale";

export default function VenuePage() {
  const locale = useLocale();
  const site = locale === "th" ? siteContentTh : siteContentEn;
  const content = locale === "th" ? venueContentTh : venueContentEn;

  return <VenueSection site={site} content={content} />;
}
