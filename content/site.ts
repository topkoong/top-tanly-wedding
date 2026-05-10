import type { SiteContent } from "@/content/schema";
import type { Locale } from "@/lib/locale";

import { siteContentEn } from "@/content/en/site";
import { siteContentTh } from "@/content/th/site";

export function getSiteContent(locale: Locale): SiteContent {
  return locale === "en" ? siteContentEn : siteContentTh;
}
