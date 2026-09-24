"use client";

import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";

import { useLocale, useSwitchLocale } from "@/lib/hooks/useLocale";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  className?: string;
};

const locales = ["en", "th"] as const;

/**
 * Letterpress-style EN | TH switch: tracked Bellefair caps, a hairline divider
 * and an underline that slides to the active language. Inherits `currentColor`
 * so it reads on both the cream pages and the dark olive hero.
 */
export default function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const switchLocale = useSwitchLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div role="group" aria-label="Language" className={cn("inline-flex items-center", className)}>
      {locales.map((option, index) => {
        const isActive = option === locale;

        return (
          <Fragment key={option}>
            {index > 0 ? <span aria-hidden className="h-3.5 w-px bg-current opacity-30" /> : null}
            <button
              type="button"
              onClick={() => switchLocale(option)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2.5 font-display text-[0.8125rem] uppercase tracking-[0.2em] transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                isActive ? "opacity-100" : "opacity-45 hover:opacity-80",
              )}
            >
              <span className="relative -mr-[0.2em]">
                {option}
                {isActive ? (
                  <motion.span
                    layoutId="language-toggle-underline"
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-[0.2em] h-px bg-current"
                    transition={
                      shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }
                    }
                  />
                ) : null}
              </span>
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
