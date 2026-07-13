"use client";

import { useLocale, useSwitchLocale } from "@/lib/hooks/useLocale";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
};

const locales = ["en", "th"] as const;

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const switchLocale = useSwitchLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-charcoal/20 bg-cream p-0.5",
        className,
      )}
    >
      {locales.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => switchLocale(option)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full px-2.5 font-display text-xs font-medium tracking-wide transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1 focus-visible:ring-offset-cream",
              isActive
                ? "bg-charcoal text-cream"
                : "text-charcoal hover:bg-charcoal/8",
            )}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
