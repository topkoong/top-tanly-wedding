"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import ScheduleTimelineIcon from "@/components/icons/ScheduleTimelineIcon";
import Reveal from "@/components/ui/Reveal";
import type { ScheduleLocationGroup } from "@/content/schema";
import { cn } from "@/lib/utils";

type HomeTimelineProps = {
  lead: string;
  title: string;
  groups: ScheduleLocationGroup[];
  ctaLabel: string;
  ctaHref: string;
  isThai: boolean;
};

const ROW = 100;

/** Smooth S-curve that swings away from whichever side each entry sits on. */
function wavePath(rows: number) {
  let d = "M20 0";
  let prevX = 20;
  let prevY = 0;
  for (let i = 0; i < rows; i += 1) {
    const x = i % 2 === 0 ? 31 : 9;
    const y = i * ROW + ROW / 2;
    d += ` C${prevX} ${prevY + 30} ${x} ${y - 30} ${x} ${y}`;
    prevX = x;
    prevY = y;
  }
  d += ` C${prevX} ${prevY + 30} 20 ${rows * ROW - 20} 20 ${rows * ROW}`;
  return d;
}

/** Dark olive programme strip: script heading, alternating entries, a hand-drawn line that draws on scroll. */
export default function HomeTimeline({ lead, title, groups, ctaLabel, ctaHref, isThai }: HomeTimelineProps) {
  const shouldReduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const entries = groups.flatMap((group) =>
    group.timeline.map((entry, index) => ({ ...entry, room: index === 0 ? group.roomName : null })),
  );

  return (
    <section id="timeline" className="scroll-mt-16 overflow-hidden bg-backdrop py-16 text-paper sm:py-24">
      <div className="mx-auto max-w-xl px-5">
        <Reveal className="text-center">
          <h2 className="text-paper">
            <span
              className={cn(
                "block text-paper/80",
                isThai
                  ? "font-thai text-body"
                  : "font-display text-[0.75rem] uppercase tracking-[0.24em] sm:text-body-s",
              )}
            >
              {lead}
            </span>
            <span
              className={cn(
                "mt-3 block leading-tight",
                isThai ? "font-thai text-h2" : "font-display text-[clamp(2rem,8vw,2.75rem)]",
              )}
            >
              {title}
            </span>
          </h2>
        </Reveal>

        <ol ref={listRef} className="relative mt-12">
          <svg
            aria-hidden
            viewBox={`0 0 40 ${entries.length * ROW}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-16 -translate-x-1/2"
          >
            <motion.path
              d={wavePath(entries.length)}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1.25"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: shouldReduceMotion ? 1 : progress }}
            />
          </svg>

          {entries.map((entry, index) => {
            const left = index % 2 === 0;
            return (
              <li key={entry.id} className="grid min-h-44 grid-cols-2 items-center gap-10">
                <Reveal
                  variant={left ? "left" : "right"}
                  className={cn("flex flex-col items-center text-center", !left && "col-start-2")}
                >
                  <ScheduleTimelineIcon id={entry.id} className="h-16 w-16 opacity-90 invert sm:h-20 sm:w-20" />
                  <p className="mt-3 font-display text-[1.25rem] leading-tight tabular-nums">{entry.time}</p>
                  <p
                    className={cn(
                      "mt-1 text-paper/85",
                      isThai ? "font-thai text-[0.875rem] leading-snug" : "font-display text-[0.9375rem] leading-snug",
                    )}
                  >
                    {entry.title}
                  </p>
                  {entry.room ? (
                    <p
                      className={cn(
                        "mt-1.5 text-paper/55",
                        isThai
                          ? "font-thai text-[0.75rem]"
                          : "font-display text-[0.625rem] uppercase tracking-[0.2em]",
                      )}
                    >
                      {entry.room}
                    </p>
                  ) : null}
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href={ctaHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-paper/45 px-6 text-paper/90 transition-colors duration-200 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-backdrop",
              isThai ? "font-thai text-sm" : "font-display text-[0.75rem] uppercase tracking-[0.24em]",
            )}
          >
            {ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
