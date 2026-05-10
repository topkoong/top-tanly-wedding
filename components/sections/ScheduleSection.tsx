import Link from "next/link";
import { MapPin } from "lucide-react";

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
            eyebrow={site.weddingDate}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {content.title}
          </Heading>
          <DecorativeDivider />
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.intro}
          </p>
          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.arrivalNote}
          </p>

          <ol className="relative space-y-16 md:pl-14">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-rose/30 md:block" aria-hidden />
            {content.events.map((event, index) => (
              <li
                key={event.id}
                className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-gradient-to-br from-ivory to-champagne/40 p-10"
              >
                <div
                  className="absolute left-5 top-14 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-rose-deep md:block"
                  aria-hidden
                />
                <div
                  className={index === 0 ? "absolute inset-x-0 top-0 h-[3px] bg-rose-deep/40" : "absolute inset-x-0 top-0 h-[3px] bg-gold/40"}
                  aria-hidden
                />
                <p className="absolute right-6 top-4 font-display text-8xl text-charcoal/6">{event.number}</p>
                <div className="relative space-y-5 border-l-2 border-rose/50 pl-6">
                  <p className="font-display text-4xl text-rose-deep md:text-5xl">
                    {event.time}
                  </p>
                  <h2
                    className={isThai ? "text-h3 font-thai text-charcoal leading-[1.4]" : "font-display text-h3 text-charcoal"}
                  >
                    {isThai ? event.thaiName : event.englishName}
                  </h2>
                  <div className="h-px w-full bg-charcoal/10" />
                  <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
                    {isThai ? event.englishName : event.thaiName}
                  </p>
                  <span className="inline-flex rounded-full bg-cream px-4 py-2 text-body-s text-rose-deep">
                    {event.room}
                  </span>
                  {event.floor && (
                    <div className="mt-2 flex items-start gap-2">
                      <MapPin size={13} className="mt-0.5 shrink-0 text-stone" />
                      <div>
                        <span className="text-xs text-stone">{event.floor}</span>
                        {event.navigationNote && (
                          <p className="mt-0.5 text-xs italic text-stone/70">
                            {event.navigationNote}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
                    {event.venue}
                  </p>
                  <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-charcoal/20 px-3 py-1 text-xs text-charcoal"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={event.venuePageHref}
                    className="inline-flex rounded-full px-2 py-2 text-rose-deep underline underline-offset-4 decoration-rose-deep/40 transition-colors duration-200 hover:text-charcoal hover:decoration-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-1 focus-visible:rounded-sm"
                  >
                    {content.venueButtonLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <p className={isThai ? "text-body text-stone leading-[1.7]" : "text-body text-stone"}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
