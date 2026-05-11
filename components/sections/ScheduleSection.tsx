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
        <div className="space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {site.weddingDate}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.intro}
          </p>

          <ol className="space-y-6 md:space-y-8">
            {content.events.map((event, index) => (
              <li
                key={event.id}
                className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-ivory to-champagne/40 p-6 md:p-8"
              >
                <div
                  className={
                    index === 0
                      ? "absolute inset-x-0 top-0 h-[3px] bg-rose-deep/45"
                      : "absolute inset-x-0 top-0 h-[3px] bg-gold/45"
                  }
                  aria-hidden
                />
                <p className="absolute right-6 top-4 font-display text-8xl text-charcoal/6">{event.number}</p>
                <div className="relative space-y-5">
                  <p className="font-display text-4xl text-rose-deep md:text-5xl">
                    {event.time}
                  </p>
                  <h2
                    className={isThai ? "text-h3 font-thai text-charcoal leading-[1.4]" : "font-display text-h3 text-charcoal"}
                  >
                    {isThai ? event.thaiName : event.englishName}
                  </h2>
                  <div className="h-px w-full bg-charcoal/10" />
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full border border-charcoal/20 bg-cream px-4 py-2 text-body-s text-charcoal">
                      {event.room}
                    </span>
                    <span className="text-body-s text-stone">{event.venue}</span>
                  </div>
                  <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-charcoal/20 bg-cream/70 px-3 py-1.5 text-xs text-charcoal"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={event.venuePageHref}
                    className="inline-flex rounded-full px-2 py-2 text-body-s text-rose-deep underline underline-offset-4 decoration-rose-deep/40 transition-colors duration-200 hover:text-charcoal hover:decoration-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-1 focus-visible:rounded-sm"
                  >
                    {content.venueButtonLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.arrivalNote}
          </p>

          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
