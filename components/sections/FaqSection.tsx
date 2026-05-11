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
      <Container size="narrow" className={isThai ? "mx-auto max-w-3xl font-thai" : "mx-auto max-w-3xl font-body"}>
        <div className="space-y-8">
          <Heading
            as="h1"
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.intro}
          </p>

          <div>
            {groupedItems.map((group) => (
              <section key={group.category} className="mt-10 first:mt-0">
                <div className="mb-4 mt-10 first:mt-0 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-rose-deep">
                  <span className="h-px w-6 bg-rose-deep/50" />
                  <span>{group.category}</span>
                </div>
                <div>
                  {group.items.map((item) => (
                    <article key={item.id} className="border-b border-charcoal/8">
                      <button
                        type="button"
                        onClick={() => toggleItem(group.category, item.id)}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2"
                      >
                        <h2
                          className={
                            isThai
                              ? "font-thai text-h3 leading-snug text-charcoal"
                              : "font-display text-h3 leading-snug text-charcoal"
                          }
                        >
                          {item.question}
                        </h2>
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          className={`mt-1 shrink-0 text-stone/60 transition-transform duration-200 ${
                            openItemsByCategory[group.category] === item.id ? "rotate-180" : ""
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
                            className="overflow-hidden"
                          >
                            <p className={isThai ? "max-w-prose pb-5 text-body text-stone leading-[1.75]" : "max-w-prose pb-5 text-body text-stone leading-[1.75]"}>
                              {item.answer}
                            </p>
                            {item.relatedHref ? (
                              <Link
                                href={item.relatedHref}
                                className="mt-2 inline-flex items-center gap-1 text-body-s text-rose-deep underline decoration-rose-deep/40 underline-offset-4 transition-colors duration-200 hover:text-charcoal"
                              >
                                {locale === "th" ? "ดูรายละเอียดเพิ่มเติม →" : "View details →"}
                              </Link>
                            ) : null}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="pt-2">
            <Button href={lineHref} variant="secondary">
              {content.lineCtaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
