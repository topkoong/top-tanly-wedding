"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type CountdownProps = {
  /** Target date/time as an ISO 8601 string with offset. */
  targetISO: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  isThai?: boolean;
  /** "cards": ivory cells; "inline": large light numerals separated by colons (on photos). */
  variant?: "cards" | "inline";
  className?: string;
};

function getRemaining(target: number) {
  const total = Math.max(0, target - Date.now());
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total % 86_400_000) / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1_000),
  };
}

/**
 * Live countdown to the wedding date. Computed client-side (static export safe);
 * renders placeholders until mounted to avoid hydration mismatches.
 */
export default function Countdown({
  targetISO,
  labels,
  isThai,
  variant = "cards",
  className,
}: CountdownProps) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setTime(getRemaining(target));
    const id = window.setInterval(() => setTime(getRemaining(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells = [
    { key: "days", value: time?.days, label: labels.days },
    { key: "hours", value: time?.hours, label: labels.hours },
    { key: "minutes", value: time?.minutes, label: labels.minutes },
    { key: "seconds", value: time?.seconds, label: labels.seconds },
  ];

  const format = (value: number | undefined) => (value == null ? "--" : String(value).padStart(2, "0"));

  if (variant === "inline") {
    return (
      <div className={cn("flex items-start justify-center text-paper", className)}>
        {cells.map((cell, index) => (
          <div key={cell.key} className="flex items-start">
            {index > 0 ? (
              <span aria-hidden className="px-[0.35em] font-display text-[clamp(1.75rem,8vw,2.75rem)] leading-none text-paper/70">
                :
              </span>
            ) : null}
            <div className="flex min-w-[2.6ch] flex-col items-center">
              <span
                className="font-display text-[clamp(1.75rem,8vw,2.75rem)] leading-none tabular-nums"
                suppressHydrationWarning
              >
                {format(cell.value)}
              </span>
              <span
                className={cn(
                  "mt-2 text-paper/75",
                  isThai
                    ? "font-thai text-[0.6875rem]"
                    : "font-display text-[0.625rem] uppercase tracking-[0.18em]",
                )}
              >
                {cell.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-4 gap-2 sm:gap-3", className)}>
      {cells.map((cell) => (
        <div
          key={cell.key}
          className="flex min-w-0 flex-col items-center rounded-xl border border-charcoal/10 bg-cream px-1 py-3 shadow-[0_10px_30px_-26px_rgba(31,29,24,0.4)] sm:py-4"
        >
          <span
            className="font-display text-h2 leading-none tabular-nums text-charcoal"
            suppressHydrationWarning
          >
            {format(cell.value)}
          </span>
          <span
            className={cn(
              "mt-1.5 text-stone",
              isThai
                ? "font-thai text-[0.625rem] sm:text-[0.6875rem]"
                : "font-display text-[0.5625rem] uppercase tracking-[0.16em] sm:text-[0.625rem]",
            )}
          >
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
