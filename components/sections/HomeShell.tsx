import { ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Countdown from "@/components/ui/Countdown";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import InvitationEnvelope from "@/components/sections/InvitationEnvelope";
import QuickActionCard from "@/components/ui/QuickActionCard";
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
      <Section
        background="cream"
        className={cn(
          "relative flex min-h-[calc(100svh-4rem)] flex-col bg-cream pt-14 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-24",
        )}
      >
        <Container className="relative z-10 my-auto w-full">
          <InvitationEnvelope
            variant="hero"
            openLabel={content.homeShell.invitationOpenLabel}
            coupleName={content.coupleFormalName}
            className="mx-auto max-w-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <p className="max-w-xs text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-charcoal/[0.65] sm:text-body-s sm:tracking-[0.2em]">
                {content.homeShell.invitationLeadIn}
              </p>
              <Heading
                as="h1"
                headingClassName="mt-3 font-script font-normal leading-[1.05] text-charcoal text-[clamp(2.5rem,9vw,4.5rem)]"
              >
                {content.coupleFormalName}
              </Heading>
              <p className="mt-4 max-w-full text-body-s uppercase tracking-[0.2em] text-stone sm:tracking-[0.24em]">
                {content.coupleFriendlyName}
              </p>
              <p className="mt-5 max-w-md text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-stone sm:text-body-s">
                {content.homeShell.invitationInviteLine}
              </p>

              <div className="mt-9 w-full max-w-md">
                <Countdown
                  targetISO={content.weddingDateISO}
                  labels={content.homeShell.countdownLabels}
                  isThai={isThai}
                />
              </div>

              <div className="relative mx-auto mt-10 w-full max-w-md rounded-[1.75rem] border border-charcoal/10 bg-ivory px-6 py-9 shadow-[0_26px_60px_-32px_rgba(31,29,24,0.2)] sm:rounded-[2rem] sm:px-8">
                <p className="text-body-s uppercase tracking-[0.14em] text-olive-deep">
                  {content.homeShell.invitationCardEyebrow}
                </p>
                <p className={cn("mt-3 font-display text-h2 text-olive-deep", isThai && "font-thai")}>
                  {content.homeShell.dateLabel}
                </p>
                <div className="my-4">
                  <InvitationBotanicalRule />
                </div>
                <p className={cn("text-body leading-relaxed text-stone", isThai && "font-thai")}>
                  {content.homeShell.invitationProgrammeSummary}
                </p>
                <div className="mx-auto my-5 h-px max-w-xs bg-gold/50" />
                <p
                  className={cn(
                    "font-display text-body-l text-charcoal",
                    !isThai && "text-sm uppercase tracking-[0.1em] text-stone sm:text-body-l sm:tracking-[0.12em]",
                  )}
                >
                  {content.homeShell.locationLabel}
                </p>
                <div className="mt-8 flex justify-center">
                  <Button
                    href={content.homeShell.invitationCtaHref}
                    endIcon={<ChevronDown className="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />}
                  >
                    {content.homeShell.invitationCtaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </InvitationEnvelope>
        </Container>
      </Section>

      <Section background="transparent" className="scroll-mt-4 bg-cream py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {content.homeShell.quickActionCards.map((card) => (
                <QuickActionCard
                  key={card.href}
                  href={card.href}
                  title={card.title}
                  subtitle={card.subtitle}
                  icon={card.icon}
                  isThai={isThai}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <DecorativeDivider />

      <Section background="transparent" className="bg-cream pt-0">
        <Container size="narrow">
          <div className="min-w-0 max-w-full space-y-5 rounded-[1.75rem] border border-charcoal/10 bg-ivory p-6 shadow-[0_16px_40px_-28px_rgba(31,29,24,0.12)] sm:p-8">
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
            <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
              {content.homeShell.welcomeMessage}
            </p>
            <Button href={content.linePageHref} variant="tertiary" className="max-w-full text-left sm:text-center">
              {content.homeShell.supportLineLabel}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
