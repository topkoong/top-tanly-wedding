"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";

import TNMonogram from "@/components/icons/TNMonogram";
import { cn } from "@/lib/utils";

type InvitationEnvelopeProps = {
  /** The content revealed once the envelope is opened. */
  children: ReactNode;
  /** Localized prompt shown on the sealed envelope (e.g. "Tap to open"). */
  openLabel: string;
  /** Couple name shown faintly in script under the seal (matches the e-card look). */
  coupleName?: string;
  /**
   * "card" overlays a single invitation card; "hero" takes over the whole hero
   * so guests first see only the sealed envelope, then reveal everything on tap.
   */
  variant?: "card" | "hero";
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_OPEN_DELAY_MS = 1000;

/** Subtle "laid paper" texture for the envelope interior (kept very faint). */
const PAPER_TEXTURE =
  "repeating-linear-gradient(90deg, rgba(31,29,24,0.02) 0px, rgba(31,29,24,0.02) 1px, transparent 1px, transparent 7px)," +
  "radial-gradient(130% 90% at 50% -10%, rgba(255,255,255,0.55), transparent 62%)";
const PAPER_TEXTURE_SIZE = "7px 100%, 100% 100%";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Sealed wedding-invitation envelope that opens to reveal its content, echoing
 * the digital "tap to open" e-invites (downward "V" flap + circular monogram
 * seal + faint script names + laid-paper interior). It shows the sealed envelope
 * on every visit and auto-opens ~1s after load (still tappable). Honors
 * `prefers-reduced-motion` by showing the content outright.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  coupleName,
  variant = "card",
  className,
}: InvitationEnvelopeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<number | null>(null);
  const isHero = variant === "hero";

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const openEnvelope = useCallback(() => {
    clearTimer();
    setOpen(true);
  }, [clearTimer]);

  useIsomorphicLayoutEffect(() => {
    if (shouldReduceMotion) return;
    timerRef.current = window.setTimeout(openEnvelope, AUTO_OPEN_DELAY_MS);
    return clearTimer;
  }, [shouldReduceMotion, openEnvelope, clearTimer]);

  if (shouldReduceMotion) {
    return <div className={cn("min-w-0 max-w-full", className)}>{children}</div>;
  }

  return (
    <div className={cn("relative min-w-0 max-w-full", className)}>
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
        transition={{ delay: open ? 0.42 : 0, duration: 0.65, ease: EASE }}
        aria-hidden={!revealed}
        inert={!revealed}
        className={cn(!revealed && "pointer-events-none")}
      >
        {children}
      </motion.div>

      {!revealed && (
        <motion.button
          type="button"
          onClick={openEnvelope}
          aria-label={openLabel}
          initial={false}
          animate={open ? "open" : "closed"}
          onAnimationComplete={() => {
            if (open) setRevealed(true);
          }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0, transition: { delay: 0.52, duration: 0.45, ease: EASE } },
          }}
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center rounded-[1.75rem] sm:rounded-[2rem]",
            "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
            isHero ? "min-h-[30rem]" : "min-h-[20rem]",
            open && "cursor-default",
          )}
        >
          <span
            style={{ perspective: 1400 }}
            className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-ivory shadow-[0_30px_70px_-36px_rgba(31,29,24,0.24)] sm:rounded-[2rem]"
          >
            {/* Laid-paper interior texture */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundImage: PAPER_TEXTURE, backgroundSize: PAPER_TEXTURE_SIZE }}
            />

            {/* Envelope pocket seams forming the downward "V" flap */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, transparent calc(50% - 0.5px), rgba(31,29,24,0.08) 50%, transparent calc(50% + 0.5px)), linear-gradient(225deg, transparent calc(50% - 0.5px), rgba(31,29,24,0.08) 50%, transparent calc(50% + 0.5px))",
              }}
            />

            {/* Opening flap (folds back on open) */}
            <motion.span
              aria-hidden
              variants={{
                closed: { rotateX: 0 },
                open: { rotateX: -172, transition: { duration: 0.7, ease: EASE } },
              }}
              style={{
                transformOrigin: "50% 0%",
                transformStyle: "preserve-3d",
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                backgroundImage: PAPER_TEXTURE,
                backgroundSize: PAPER_TEXTURE_SIZE,
              }}
              className="absolute inset-x-0 top-0 h-[56%] bg-cream"
            />

            {/* Monogram seal + faint script names + prompt */}
            <motion.span
              variants={{
                closed: { opacity: 1, scale: 1 },
                open: { opacity: 0, scale: 0.9, transition: { duration: 0.26, ease: EASE } },
              }}
              className={cn(
                "absolute inset-0 z-10 flex flex-col items-center justify-center",
                isHero ? "gap-4" : "gap-3.5",
              )}
            >
              <motion.span
                aria-hidden
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
                className={cn(
                  "relative flex items-center justify-center rounded-full border border-charcoal/20 bg-cream shadow-[0_10px_26px_-14px_rgba(31,29,24,0.45)]",
                  isHero ? "h-24 w-24" : "h-20 w-20",
                )}
              >
                <span className="absolute inset-1.5 rounded-full border border-charcoal/15" />
                <TNMonogram className={cn("w-auto text-charcoal/75", isHero ? "h-11" : "h-9")} title="" />
              </motion.span>
              {coupleName ? (
                <span
                  className={cn(
                    "font-script leading-none text-charcoal/40",
                    isHero ? "text-[2rem] sm:text-[2.4rem]" : "text-[1.6rem]",
                  )}
                >
                  {coupleName}
                </span>
              ) : null}
              <span
                className={cn(
                  "mt-0.5 font-medium uppercase leading-relaxed tracking-[0.26em] text-charcoal/55",
                  isHero ? "text-[0.6875rem] sm:text-xs" : "text-[0.625rem] sm:text-[0.6875rem]",
                )}
              >
                {openLabel}
              </span>
            </motion.span>
          </span>
        </motion.button>
      )}
    </div>
  );
}
