"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
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
/** Keys that imply a scroll/activation intent and should open the envelope. */
const OPEN_KEYS = new Set([
  " ",
  "Spacebar",
  "Enter",
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
]);

/** Subtle laid-paper texture for the (sage) envelope body — kept very faint. */
const PAPER_TEXTURE =
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 7px)," +
  "radial-gradient(130% 90% at 50% -12%, rgba(255,255,255,0.16), transparent 60%)";
const PAPER_TEXTURE_SIZE = "7px 100%, 100% 100%";

/* Blind-embossed (raised relief) styling — light from top, shadow below. */
const SEAL_EMBOSS =
  "0 1px 0 rgba(255,255,255,0.65), 0 8px 16px -10px rgba(31,29,24,0.32)," +
  "inset 0 1px 1.5px rgba(255,255,255,0.95), inset 0 -1.5px 2px rgba(31,29,24,0.14)";
const SEAL_RING_EMBOSS =
  "inset 0 1px 1px rgba(31,29,24,0.16), inset 0 -1px 1px rgba(255,255,255,0.85)";
const MONOGRAM_EMBOSS =
  "drop-shadow(0 -0.6px 0 rgba(255,255,255,0.9)) drop-shadow(0 1px 1.2px rgba(31,29,24,0.32))";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Sealed wedding-invitation envelope that opens to reveal its content, echoing
 * the digital "tap to open" e-invites: couple script names above a sage-green
 * envelope (pointed flap + wax-seal monogram) with a "tap to open" pill below.
 * It shows the sealed envelope on every visit and opens on the first user intent
 * (scroll, touch, tap, or a scroll/activation key). Honors
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
  const [mounted, setMounted] = useState(false);
  const openedRef = useRef(false);
  const isHero = variant === "hero";

  useEffect(() => setMounted(true), []);

  const openEnvelope = useCallback(() => {
    if (openedRef.current) return;
    openedRef.current = true;
    setOpen(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (shouldReduceMotion) return;

    const handleInteract = () => openEnvelope();
    const handleKey = (event: KeyboardEvent) => {
      if (OPEN_KEYS.has(event.key)) openEnvelope();
    };

    const passive = { passive: true } as AddEventListenerOptions;
    window.addEventListener("wheel", handleInteract, passive);
    window.addEventListener("touchstart", handleInteract, passive);
    window.addEventListener("scroll", handleInteract, passive);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleInteract, passive);
      window.removeEventListener("touchstart", handleInteract, passive);
      window.removeEventListener("scroll", handleInteract, passive);
      window.removeEventListener("keydown", handleKey);
    };
  }, [shouldReduceMotion, openEnvelope]);

  if (shouldReduceMotion) {
    return <div className={cn("min-w-0 max-w-full", className)}>{children}</div>;
  }

  const sealed = !revealed ? (
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
            open: { opacity: 0, transition: { delay: 0.5, duration: 0.45, ease: EASE } },
          }}
          className={cn(
            "z-10 flex cursor-pointer flex-col items-center justify-center gap-7 px-6 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:gap-8",
            isHero
              ? "fixed inset-0 z-[60] bg-cream"
              : "absolute inset-0 min-h-[22rem] rounded-[1.75rem] sm:rounded-[2rem]",
            open && "cursor-default",
          )}
        >
          {/* Couple names above the envelope */}
          {coupleName ? (
            <motion.span
              variants={{
                closed: { opacity: 1, y: 0 },
                open: { opacity: 0, y: -10, transition: { duration: 0.3, ease: EASE } },
              }}
              className={cn(
                "font-script leading-none text-charcoal",
                isHero ? "text-[2.4rem] sm:text-[3rem]" : "text-[2rem]",
              )}
            >
              {coupleName}
            </motion.span>
          ) : null}

          {/* Sage-green envelope graphic */}
          <motion.span
            variants={{
              closed: { opacity: 1, scale: 1, y: 0 },
              open: { opacity: 0, scale: 0.96, y: 12, transition: { delay: 0.18, duration: 0.4, ease: EASE } },
            }}
            style={{ perspective: 1400 }}
            className="relative aspect-[7/5] w-full max-w-[20rem] overflow-hidden rounded-xl bg-envelope text-envelope shadow-[0_30px_60px_-32px_rgba(31,29,24,0.45)]"
          >
            {/* Faint laid-paper texture */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundImage: PAPER_TEXTURE, backgroundSize: PAPER_TEXTURE_SIZE }}
            />

            {/* Lower pocket seams (bottom corners to centre) */}
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(45deg, transparent calc(50% - 0.6px), rgba(0,0,0,0.16) 50%, transparent calc(50% + 0.6px)), linear-gradient(-45deg, transparent calc(50% - 0.6px), rgba(0,0,0,0.16) 50%, transparent calc(50% + 0.6px))",
              }}
            />

            {/* Opening flap (folds back on open) */}
            <motion.span
              aria-hidden
              variants={{
                closed: { rotateX: 0 },
                open: { rotateX: -168, transition: { duration: 0.6, ease: EASE } },
              }}
              style={{
                transformOrigin: "50% 0%",
                transformStyle: "preserve-3d",
                clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
              }}
              className="absolute inset-x-0 top-0 h-[66%] bg-envelope-soft shadow-[inset_0_-6px_14px_-8px_rgba(0,0,0,0.35)]"
            />

            {/* Wax-seal monogram */}
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.045, 1] }}
              transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
              style={{ boxShadow: SEAL_EMBOSS }}
              className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory sm:h-[4.5rem] sm:w-[4.5rem]"
            >
              <span
                aria-hidden
                className="absolute inset-1.5 rounded-full"
                style={{ boxShadow: SEAL_RING_EMBOSS }}
              />
              <span className="inline-flex" style={{ filter: MONOGRAM_EMBOSS }}>
                <TNMonogram className="h-9 w-auto text-envelope-deep sm:h-10" title="" />
              </span>
            </motion.span>
          </motion.span>

          {/* Tap-to-open pill below the envelope */}
          <motion.span
            variants={{
              closed: { opacity: 1, y: 0 },
              open: { opacity: 0, y: 10, transition: { duration: 0.3, ease: EASE } },
            }}
            className={cn(
              "rounded-full border border-charcoal/30 bg-cream/70 px-6 py-2.5 font-medium uppercase tracking-[0.24em] text-charcoal/70",
              isHero ? "text-[0.6875rem] sm:text-xs" : "text-[0.625rem]",
            )}
          >
            {openLabel}
          </motion.span>
        </motion.button>
  ) : null;

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

      {isHero
        ? mounted && sealed
          ? createPortal(sealed, document.body)
          : null
        : sealed}
    </div>
  );
}
