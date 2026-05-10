import FaqSection from "@/components/sections/FaqSection";
import { faqContentTh } from "@/content/th/faq";
import { siteContentTh } from "@/content/th/site";

export default function FaqPage() {
  return <FaqSection site={siteContentTh} content={faqContentTh} lineHref="/line" />;
}
