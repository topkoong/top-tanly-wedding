import Link from "next/link";

import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import Container from "@/components/ui/Container";
import BowOrnament from "@/components/ui/BowOrnament";
import Heading from "@/components/ui/Heading";
import TNMonogram from "@/components/icons/TNMonogram";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import HomeInvitationContent from "@/components/sections/HomeInvitationContent";
import HomeTimeline from "@/components/sections/HomeTimeline";
import InvitationEnvelope from "@/components/sections/InvitationEnvelope";
import PhotoFrame from "@/components/ui/PhotoFrame";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Reveal from "@/components/ui/Reveal";
import ScallopFrame from "@/components/ui/ScallopFrame";
import Section from "@/components/ui/Section";
import type { SchedulePageContent, SiteContent } from "@/content/schema";
import type { PhotoMap } from "@/lib/photos";
import { cn } from "@/lib/utils";

type HomeShellProps = {
  content: SiteContent;
  schedule: SchedulePageContent;
  photos: PhotoMap;
};

/** Full-bleed photo backdrop for dark bands; olive gradient until a photo exists. */
function PhotoBackdrop({ src, blur, className }: { src: string | null; blur?: boolean; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {src ? (
        <img
          src={src}
          alt=""
          decoding="async"
          className={cn("h-full w-full object-cover", blur ? "scale-110 blur-[3px]" : "scale-105")}
        />
      ) : (
        <span className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_35%,rgba(122,111,84,0.45)_0%,transparent_70%)]" />
      )}
      <span className="absolute inset-0 bg-linear-to-b from-backdrop/80 via-backdrop/65 to-backdrop/90" />
    </div>
  );
}

export default function HomeShell({ content, schedule, photos }: HomeShellProps) {
  const isThai = content.locale === "th";
  const hs = content.homeShell;

  const eyebrow = isThai
    ? "font-thai text-body-s text-stone"
    : "font-display text-[0.6875rem] uppercase tracking-[0.24em] text-stone sm:text-body-s";

  return (
    <>
      <section
        id="home-hero"
        className="relative isolate -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-backdrop pt-24 pb-16 sm:-mt-[5.5rem] sm:pt-32 sm:pb-20"
      >
        <PhotoBackdrop src={photos["intro-blur"]} blur />
        <Container className="relative z-10 my-auto w-full">
          <InvitationEnvelope
            variant="hero"
            openLabel={hs.invitationOpenLabel}
            skipLabel={hs.invitationSkipLabel}
            sealedHeader={
              <>
                <p
                  className={cn(
                    "text-paper",
                    isThai ? "font-thai text-[1.125rem]" : "font-display text-[1.125rem] uppercase tracking-[0.06em]",
                  )}
                >
                  {hs.invitationMailLabel}
                </p>
                <CoupleScriptMark
                  size="envelope"
                  name={content.coupleFriendlyName}
                  decorative
                  className="mt-4 text-paper"
                />
              </>
            }
            letter={
              <>
                <TNMonogram className="h-[clamp(2.5rem,9vw,4.5rem)] w-auto" title="" />
                <span
                  className={cn(
                    "mt-[0.6em] text-charcoal/75",
                    isThai
                      ? "font-thai text-[clamp(0.625rem,2.4vw,0.875rem)]"
                      : "font-display text-[clamp(0.5625rem,2vw,0.8125rem)] uppercase tracking-[0.22em]",
                  )}
                >
                  {content.weddingDate}
                </span>
              </>
            }
            className="mx-auto max-w-2xl"
          >
            <HomeInvitationContent content={content} photos={photos} />
          </InvitationEnvelope>
        </Container>
      </section>

      <section id="invitation" className="scroll-mt-16 bg-paper py-16 text-center sm:py-24">
        <Container size="narrow">
          <Reveal>
            <p className={eyebrow}>{hs.invitationLeadIn}</p>
            <p
              className={cn(
                "mx-auto mt-4 max-w-sm text-charcoal/85",
                isThai ? "font-thai text-body leading-relaxed" : "font-display text-body leading-relaxed",
              )}
            >
              {hs.invitationInviteLine}
            </p>
          </Reveal>
          <Reveal variant="scale" delay={0.1} className="mt-8 flex flex-col items-center">
            <CoupleScriptMark size="envelope" name={content.coupleFriendlyName} decorative />
            <BowOrnament className="mt-5" />
          </Reveal>
          <Reveal delay={0.2} className="mt-8 space-y-2">
            <p className={eyebrow}>{hs.dateHeading}</p>
            <p className={cn("text-charcoal", isThai ? "font-thai text-h3" : "font-display text-h3")}>
              {content.weddingDate}
            </p>
            <p className={cn("pt-4", eyebrow)}>{hs.venueHeading}</p>
            <Link
              href={hs.invitationVenueHref}
              className={cn(
                "inline-block rounded-sm text-charcoal underline decoration-charcoal/25 underline-offset-4 transition-colors duration-200 hover:decoration-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
                isThai ? "font-thai text-h3" : "font-display text-h3",
              )}
            >
              {hs.locationLabel}
            </Link>
            <p className={cn("text-stone", isThai ? "font-thai text-body-s" : "font-display text-body-s")}>
              {hs.locationDetail}
            </p>
            <p className={cn("pt-3 text-charcoal/85", isThai ? "font-thai text-body" : "font-display text-body")}>
              {hs.invitationTimeSummary}
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-hidden className="relative isolate overflow-hidden bg-backdrop py-16 sm:py-24">
        <PhotoBackdrop src={photos.frame} blur />
        <Reveal variant="scale" className="relative mx-auto w-[82%] max-w-md">
          <ScallopFrame scallop={18} margin={22} className="drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)]">
            <PhotoFrame src={photos.frame} width={1200} height={1500} />
          </ScallopFrame>
        </Reveal>
      </section>

      <HomeTimeline
        lead={hs.timelineLead}
        title={hs.timelineTitle}
        groups={schedule.locationGroups}
        ctaLabel={hs.timelineCtaLabel}
        ctaHref={hs.timelineCtaHref}
        isThai={isThai}
      />

      <section aria-hidden className="overflow-hidden bg-cream pt-14 md:pt-20">
        <Container>
          <div className="mx-auto grid max-w-3xl grid-cols-3 items-start gap-2.5 sm:gap-4">
            {(["band-1", "band-2", "band-3"] as const).map((slot, index) => (
              <Reveal
                key={slot}
                variant={index === 0 ? "left" : index === 2 ? "right" : "up"}
                delay={index * 0.1}
                className={cn(index === 1 && "mt-8 sm:mt-12")}
              >
                <PhotoFrame src={photos[slot]} width={1200} height={1500} className="rounded-xl" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section background="transparent" className="scroll-mt-4 bg-cream py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {hs.quickActionCards.map((card, index) => (
                <Reveal key={card.href} variant={index % 2 ? "right" : "left"} delay={Math.floor(index / 2) * 0.08}>
                  <QuickActionCard
                    href={card.href}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                    isThai={isThai}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section background="transparent" className="bg-cream pt-0">
        <Container size="narrow">
          <Reveal className="max-w-full space-y-5 rounded-[1.75rem] border border-charcoal/10 bg-ivory p-6 shadow-[0_16px_40px_-28px_rgba(31,29,24,0.12)] sm:p-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <InvitationBotanicalRule className="max-w-[160px]" />
              <Heading
                as="h2"
                headingClassName={
                  isThai ? "font-thai text-h3 leading-[1.35]" : "font-display text-h3"
                }
              >
                {hs.welcomeTitle}
              </Heading>
            </div>
            <p
              className={cn(
                "max-w-full text-body leading-relaxed text-stone",
                isThai ? "font-thai" : "font-display",
              )}
            >
              {hs.welcomeMessage}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
