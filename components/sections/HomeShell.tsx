import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import HomeInvitationContent from "@/components/sections/HomeInvitationContent";
import InvitationEnvelope from "@/components/sections/InvitationEnvelope";
import PhotoStrip from "@/components/ui/PhotoStrip";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import type { SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type HomeShellProps = {
  content: SiteContent;
};

export default function HomeShell({ content }: HomeShellProps) {
  const isThai = content.locale === "th";

  return (
    <>
      <Section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-night pt-8 pb-12 text-paper sm:pt-16 sm:pb-16 md:pt-20 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_42%,rgba(176,160,134,0.2)_0%,transparent_70%),radial-gradient(120%_80%_at_50%_100%,var(--color-night-deep)_0%,transparent_60%)]"
        />
        <Container className="relative z-10 my-auto w-full">
          <InvitationEnvelope
            variant="hero"
            openLabel={content.homeShell.invitationOpenLabel}
            skipLabel={content.homeShell.invitationSkipLabel}
            sealedHeader={
              <>
                <p
                  className={cn(
                    "text-paper/75",
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
            photoStrip={
              <PhotoStrip date={content.homeShell.invitationDateDisplay} isThai={isThai} />
            }
            className="mx-auto max-w-2xl"
          >
            <HomeInvitationContent content={content} />
          </InvitationEnvelope>
        </Container>
      </Section>

      <Section background="transparent" className="scroll-mt-4 bg-cream py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {content.homeShell.quickActionCards.map((card, index) => (
                <Reveal key={card.href} delay={(index % 2) * 0.08}>
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
