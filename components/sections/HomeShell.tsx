import Button from "@/components/ui/Button";
import BotanicalBackdrop from "@/components/ui/BotanicalBackdrop";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import FadeIn from "@/components/ui/FadeIn";
import Heading from "@/components/ui/Heading";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Section from "@/components/ui/Section";
import TNMonogram from "@/components/icons/TNMonogram";
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
          "relative overflow-hidden bg-gradient-to-b from-cream via-olive-soft/30 to-cream py-16 md:py-24",
          "min-h-0 md:min-h-0",
        )}
      >
        <BotanicalBackdrop />
        <Container className="relative z-10">
          <FadeIn className="mx-auto max-w-lg">
            <div className="flex flex-col items-center text-center">
              <TNMonogram className="h-12 w-12 text-olive/30" title="" />
              <p className="mt-4 text-body-s uppercase tracking-[0.14em] text-stone">{content.siteName}</p>
              <Heading
                as="h1"
                headingClassName="mt-3 font-display text-display-xl leading-[1.02] text-charcoal"
              >
                {content.coupleFriendlyName}
              </Heading>
              <p className="mt-3 max-w-full font-display text-body-l text-stone">{content.homeShell.formalNames}</p>

              <div className="mt-10 w-full max-w-full rounded-3xl border border-charcoal/10 bg-ivory/95 px-6 py-8 shadow-[0_20px_48px_-24px_rgba(45,38,32,0.18)] sm:px-8">
                <p className="text-body-s uppercase tracking-[0.14em] text-olive-deep">
                  {content.homeShell.invitationCardEyebrow}
                </p>
                <p className={cn("mt-2 font-display text-h2 text-charcoal", isThai && "font-thai")}>
                  {content.homeShell.dateLabel}
                </p>
                <p className={cn("mt-3 text-body leading-relaxed text-stone", isThai && "font-thai")}>
                  {content.homeShell.invitationProgrammeSummary}
                </p>
                <div className="mx-auto my-5 h-px max-w-xs bg-gold/55" />
                <p className="font-display text-body-l text-charcoal">{content.homeShell.locationLabel}</p>
                <div className="mt-8 flex justify-center">
                  <Button href={content.homeShell.invitationCtaHref}>{content.homeShell.invitationCtaLabel}</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section background="transparent" className="scroll-mt-4 py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
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

      <Section background="transparent" className="pt-0">
        <Container size="narrow">
          <div className="min-w-0 max-w-full space-y-5 rounded-3xl border border-charcoal/10 bg-ivory/80 p-6 shadow-[0_12px_32px_-22px_rgba(45,38,32,0.1)] sm:p-8">
            <Heading
              as="h2"
              headingClassName={isThai ? "font-thai text-h3 leading-[1.35] text-charcoal" : "font-display text-h3 text-charcoal"}
            >
              {content.homeShell.welcomeTitle}
            </Heading>
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
