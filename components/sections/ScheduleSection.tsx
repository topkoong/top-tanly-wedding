import ScheduleTimelineIcon from "@/components/icons/ScheduleTimelineIcon";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import type { SchedulePageContent, SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type ScheduleSectionProps = {
  site: SiteContent;
  content: SchedulePageContent;
};

export default function ScheduleSection({ site, content }: ScheduleSectionProps) {
  const isThai = site.locale === "th";

  return (
    <Section background="cream">
      <Container className={isThai ? "font-thai" : "font-display"}>
        <div className="min-w-0 space-y-8">
          <Heading
            as="h1"
            eyebrow={content.title}
            headingClassName={isThai ? "font-thai text-h1 leading-[1.4]" : "font-display text-h1"}
          >
            {site.weddingDate}
          </Heading>
          <DecorativeDivider />
          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.intro}
          </p>

          <p
            className={cn(
              "text-center font-display text-[clamp(1.75rem,6vw,2.5rem)] font-medium leading-tight text-charcoal",
              isThai && "font-thai",
            )}
          >
            {content.venueHeadline}
          </p>

          <div className="mx-auto min-w-0 max-w-lg rounded-[1.75rem] border border-charcoal/10 bg-cream px-5 py-8 shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)] sm:px-8 sm:py-10">
            <div className="space-y-10">
              {content.locationGroups.map((group) => (
                <div key={group.id} className="min-w-0">
                  <div className="mb-6 space-y-1 text-center">
                    <p
                      className={cn(
                        "text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-stone sm:text-body-s sm:tracking-[0.16em]",
                        isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                      )}
                    >
                      {group.sessionLabel}
                    </p>
                    <p
                      className={cn(
                        "text-pretty text-[clamp(1rem,3.5vw,1.25rem)] font-medium leading-snug text-charcoal",
                        isThai && "font-thai",
                      )}
                    >
                      {group.roomName}, {group.floorLabel}
                    </p>
                  </div>

                  <ol className="relative ml-5 border-l border-charcoal/20 pl-8">
                    {group.timeline.map((entry, index) => (
                      <li
                        key={entry.id}
                        className={cn(
                          "relative pb-8 last:pb-0",
                          index < group.timeline.length - 1 && "mb-0",
                        )}
                      >
                        <span
                          aria-hidden
                          className="absolute -left-[calc(2rem+1px)] top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-charcoal ring-4 ring-cream"
                        />
                        <div className="flex min-w-0 items-start gap-4">
                          <ScheduleTimelineIcon
                            id={entry.id}
                            className="mt-0.5 shrink-0 text-charcoal/80"
                          />
                          <div className="min-w-0 space-y-1">
                            <p
                              className={cn(
                                "text-[clamp(1.0625rem,3.5vw,1.25rem)] font-medium tabular-nums leading-none text-charcoal",
                                isThai && "font-thai",
                              )}
                            >
                              {entry.time}
                            </p>
                            <p
                              className={cn(
                                "text-pretty text-[0.6875rem] font-medium uppercase leading-snug tracking-[0.08em] text-charcoal sm:text-body-s sm:tracking-[0.1em]",
                                isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
                              )}
                            >
                              {entry.title}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 pt-1">
            <Button href={content.venuePageHref} variant="secondary" className="w-full min-w-0 sm:w-auto sm:max-w-full">
              {content.venueButtonLabel}
            </Button>
          </div>

          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.arrivalNote}
          </p>

          <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
            {content.updateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}
