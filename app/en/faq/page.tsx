import FaqSection from "@/components/sections/FaqSection";
import { faqContentEn } from "@/content/en/faq";
import { siteContentEn } from "@/content/en/site";

export default function FaqPageEn() {
  return <FaqSection site={siteContentEn} content={faqContentEn} lineHref="/en/line" />;
}
