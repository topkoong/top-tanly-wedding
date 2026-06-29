"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { FaqPageContent, SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  site: SiteContent;
  content: FaqPageContent;
  lineHref: string;
};

export default function FaqSection({ site, content, lineHref }: FaqSectionProps) {
  const isThai = site.locale === "th";
  const locale = site.locale;
  const groupedItems = content.categories.map((category) => ({
    category,
    items: content.items.filter((item) => item.category === category),
  }));
  const [openItemsByCategory, setOpenItemsByCategory] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      groupedItems.map((group) => [group.category, group.items[0]?.id ?? ""]),
    ),
  );

  const toggleItem = (category: string, itemId: string) => {
    setOpenItemsByCategory((previous) => ({
      ...previous,
      [category]: previous[category] === itemId ? "" : itemId,
    }));
  };

  return (
    <Section background="cream">
      <Container size="narrow" className={isThai ? "font-thai" : "font-display"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.intro}
          </p>

          <div>
            {groupedItems.map((group) => (
              <section key={group.category} className="mt-10 min-w-0 first:mt-0">
                <div
                  className={cn(
                    "mb-4 mt-10 flex min-w-0 flex-wrap items-center gap-3 text-xs font-medium text-olive-deep first:mt-0",
                    isThai ? "font-thai tracking-normal" : "font-display uppercase tracking-[0.07em] sm:tracking-[0.09em]",
                  )}
                >
                  <span className="h-px w-8 shrink-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  <span className="min-w-0 max-w-full break-words">{group.category}</span>
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <article
                      key={item.id}
                      className="min-w-0 overflow-hidden rounded-2xl border border-charcoal/[0.08] bg-ivory shadow-[0_10px_32px_-24px_rgba(86,94,63,0.14)]"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(group.category, item.id)}
                        className="flex w-full min-w-0 items-start justify-between gap-3 px-5 py-5 text-left transition-colors duration-200 hover:bg-olive-soft/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-olive-deep motion-reduce:transition-none sm:px-6"
                      >
                        <h2
                          className={
                            isThai
                              ? "min-w-0 flex-1 break-words font-thai text-h3 font-semibold leading-snug text-olive-deep"
                              : "min-w-0 flex-1 break-words font-display text-h3 font-semibold leading-snug text-olive-deep"
                          }
                        >
                          {item.question}
                        </h2>
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          className={`mt-1 shrink-0 text-stone/55 transition-transform duration-200 ${
                            openItemsByCategory[group.category] === item.id ? "rotate-180 text-olive-deep" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openItemsByCategory[group.category] === item.id ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden border-t border-charcoal/[0.06]"
                          >
                            <div className="space-y-3 bg-cream/25 px-5 py-5 sm:px-6">
                              <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
                                {item.answer}
                              </p>
                              {item.relatedHref ? (
                                <Link
                                  href={item.relatedHref}
                                  className="inline-flex items-center gap-1 text-body-s text-olive underline decoration-olive/35 underline-offset-[4px] transition-colors duration-200 hover:text-olive-deep"
                                >
                                  {locale === "th" ? "ดูรายละเอียดเพิ่มเติม →" : "View details →"}
                                </Link>
                              ) : null}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="flex min-w-0 flex-col pt-2 sm:flex-row">
            <Button href={lineHref} variant="secondary" className="w-full shrink-0 sm:w-auto">
              {content.lineCtaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
