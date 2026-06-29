"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const InvitationRevealContext = createContext(true);

/** Whether the invitation envelope has finished opening (always true when reduced-motion). */
export function useInvitationRevealed() {
  return useContext(InvitationRevealContext);
}

export function InvitationRevealProvider({
  revealed,
  children,
}: {
  revealed: boolean;
  children: ReactNode;
}) {
  return (
    <InvitationRevealContext.Provider value={revealed}>{children}</InvitationRevealContext.Provider>
  );
}

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

type InvitationRevealItemProps = {
  children: ReactNode;
  className?: string;
  /** Seconds after the envelope finishes opening. */
  delay?: number;
};

/**
 * Staggered fade-up for hero content once the sealed envelope opens — mirrors the
 * gentle cascade in digital wedding-invite reels after the card is revealed.
 */
export function InvitationRevealItem({
  children,
  className,
  delay = 0,
}: InvitationRevealItemProps) {
  const revealed = useInvitationRevealed();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("min-w-0 max-w-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("min-w-0 max-w-full", className)}
      initial={false}
      animate={
        revealed
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 14 }
      }
      transition={{
        delay: revealed ? 0.08 + delay : 0,
        duration: 0.65,
        ease: REVEAL_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
