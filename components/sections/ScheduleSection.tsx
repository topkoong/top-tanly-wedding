import Link from "next/link";

import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SchedulePageContent, SiteContent } from "@/content/schema";

type ScheduleSectionProps = {
  site: SiteContent;
  content: SchedulePageContent;
};

export default function ScheduleSection({ site, content }: ScheduleSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-body"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {site.weddingDate}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.intro}
          </p>

          <ol className="min-w-0 space-y-6 md:space-y-8">
            {content.events.map((event, index) => (
              <li
                key={event.id}
                className="relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-ivory to-champagne/40 p-6 shadow-[0_8px_28px_-18px_rgba(45,38,32,0.08)] md:p-8"
              >
                <div
                  className={
                    index === 0
                      ? "absolute inset-x-0 top-0 h-[3px] bg-rose-deep/45"
                      : "absolute inset-x-0 top-0 h-[3px] bg-gold/45"
                  }
                  aria-hidden
                />
                <p className="pointer-events-none absolute right-4 top-3 select-none font-display text-6xl leading-none text-charcoal/[0.06] sm:right-6 sm:top-4 sm:text-7xl md:text-8xl">
                  {event.number}
                </p>
                <div className="relative min-w-0 space-y-5 pr-10 sm:pr-14 md:pr-16">
                  <p className="max-w-full font-display text-3xl leading-none text-rose-deep sm:text-4xl md:text-5xl">
                    {event.time}
                  </p>
                  <h2
                    className={
                      isThai
                        ? "max-w-full text-pretty break-words text-h3 font-thai leading-snug text-charcoal"
                        : "max-w-full text-pretty break-words font-display text-h3 leading-snug text-charcoal"
                    }
                  >
                    {isThai ? event.thaiName : event.englishName}
                  </h2>
                  <div className="h-px w-full min-w-0 bg-charcoal/10" />
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <span className="inline-flex max-w-full rounded-full border border-charcoal/20 bg-cream px-3 py-2 text-body-s leading-snug text-charcoal sm:px-4">
                      {event.room}
                    </span>
                    <span className="max-w-full text-body-s leading-snug text-stone">{event.venue}</span>
                  </div>
                  <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
                    {event.description}
                  </p>

                  <div className="flex min-w-0 flex-wrap gap-2">
                    {event.chips.map((chip) => (
                      <span
                        key={chip}
                        className="max-w-full rounded-full border border-charcoal/20 bg-cream/70 px-3 py-1.5 text-xs leading-snug text-charcoal"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={event.venuePageHref}
                    className="inline-flex max-w-full rounded-full px-2 py-2 text-body-s leading-snug text-rose-deep underline underline-offset-4 decoration-rose-deep/40 transition-colors duration-200 hover:text-charcoal hover:decoration-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-1 focus-visible:rounded-sm"
                  >
                    {content.venueButtonLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.arrivalNote}
          </p>

          <p className={isThai ? "max-w-full text-body leading-relaxed text-stone" : "max-w-full text-body leading-relaxed text-stone"}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
