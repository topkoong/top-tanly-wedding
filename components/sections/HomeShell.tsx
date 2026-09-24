import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import TNMonogram from "@/components/icons/TNMonogram";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import HomeInvitationContent from "@/components/sections/HomeInvitationContent";
import InvitationEnvelope from "@/components/sections/InvitationEnvelope";
import PhotoFrame from "@/components/ui/PhotoFrame";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import type { SiteContent } from "@/content/schema";
import type { PhotoMap } from "@/lib/photos";
import { cn } from "@/lib/utils";

type HomeShellProps = {
  content: SiteContent;
  photos: PhotoMap;
};

export default function HomeShell({ content, photos }: HomeShellProps) {
  const isThai = content.locale === "th";

  return (
    <>
      <Section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-cream pt-8 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-24">
        <Container className="relative z-10 my-auto w-full">
          <InvitationEnvelope
            variant="hero"
            openLabel={content.homeShell.invitationOpenLabel}
            skipLabel={content.homeShell.invitationSkipLabel}
            sealedHeader={
              <>
                <p
                  className={cn(
                    "text-paper/80",
                    isThai
                      ? "font-thai text-body-s"
                      : "font-display text-[0.6875rem] uppercase tracking-[0.24em] sm:text-body-s",
                  )}
                >
                  {content.homeShell.invitationLeadIn}
                </p>
                <CoupleScriptMark
                  size="envelope"
                  name={content.coupleFriendlyName}
                  decorative
                  className="mt-3 text-paper"
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
            backdropSrc={photos.intro}
            className="mx-auto max-w-2xl"
          >
            <HomeInvitationContent content={content} photos={photos} />
          </InvitationEnvelope>
        </Container>
      </Section>

      <Section background="transparent" className="scroll-mt-4 bg-cream py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {content.homeShell.quickActionCards.map((card, index) => (
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

      <section aria-hidden className="overflow-hidden bg-cream pb-14 md:pb-20">
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

      <DecorativeDivider />

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
                {content.homeShell.welcomeTitle}
              </Heading>
            </div>
            <p
              className={cn(
                "max-w-full text-body leading-relaxed text-stone",
                isThai ? "font-thai" : "font-display",
              )}
            >
              {content.homeShell.welcomeMessage}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
