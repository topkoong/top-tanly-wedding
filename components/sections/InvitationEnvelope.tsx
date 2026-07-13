'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'motion/react';

import TNMonogram from '@/components/icons/TNMonogram';
import { InvitationRevealProvider } from '@/components/ui/InvitationReveal';
import { cn } from '@/lib/utils';

type InvitationEnvelopeProps = {
  /** The content revealed once the envelope is opened. */
  children: ReactNode;
  /** Localized prompt shown on the sealed envelope (e.g. "Tap to open"). */
  openLabel: string;
  /**
   * "card" overlays a single invitation card; "hero" takes over the whole hero
   * so guests first see only the sealed envelope, then reveal everything on tap.
   */
  variant?: 'card' | 'hero';
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Subtle laid-paper texture for the envelope body — kept very faint. */
const PAPER_TEXTURE =
  'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 7px),' +
  'radial-gradient(130% 90% at 50% -12%, rgba(255,255,255,0.22), transparent 60%)';
const PAPER_TEXTURE_SIZE = '7px 100%, 100% 100%';

/* Blind-embossed wax seal — light from top, shadow below. */
const SEAL_EMBOSS =
  '0 1px 0 rgba(255,255,255,0.75), 0 10px 22px -12px rgba(31,29,24,0.28),' +
  'inset 0 1px 1.5px rgba(255,255,255,0.95), inset 0 -1.5px 2px rgba(31,29,24,0.12)';
const SEAL_RING_EMBOSS =
  'inset 0 1px 1px rgba(31,29,24,0.12), inset 0 -1px 1px rgba(255,255,255,0.9)';

/**
 * Sealed wedding-invitation envelope that opens on tap — echoing viral digital
 * e-invite reels (sage-green envelope, wax-seal monogram, card slides out). Hero
 * variant fills the viewport until opened; honors `prefers-reduced-motion`.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  variant = 'card',
  className,
}: InvitationEnvelopeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openedRef = useRef(false);
  const isHero = variant === 'hero';

  useEffect(() => setMounted(true), []);

  /* Lock page scroll while the full-screen hero envelope is sealed. */
  useEffect(() => {
    if (!isHero || revealed || shouldReduceMotion) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isHero, revealed, shouldReduceMotion]);

  const openEnvelope = useCallback(() => {
    if (openedRef.current) return;
    openedRef.current = true;
    setOpen(true);
  }, []);

  if (shouldReduceMotion) {
    return (
      <InvitationRevealProvider revealed>
        <div className={cn('min-w-0 max-w-full', className)}>{children}</div>
      </InvitationRevealProvider>
    );
  }

  const sealed = !revealed ? (
    <motion.button
      type='button'
      onClick={openEnvelope}
      aria-label={openLabel}
      initial={false}
      animate={open ? 'open' : 'closed'}
      onAnimationComplete={() => {
        if (open) setRevealed(true);
      }}
      variants={{
        closed: { opacity: 1 },
        open: {
          opacity: 0,
          transition: { delay: 1.55, duration: 0.55, ease: EASE },
        },
      }}
      className={cn(
        'z-10 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
        isHero
          ? 'fixed inset-0 z-[60] grid h-[100dvh] grid-rows-[1fr_auto] items-stretch bg-cream px-6 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]'
          : 'absolute inset-0 flex min-h-[22rem] flex-col items-center justify-center rounded-[1.75rem] px-6 sm:rounded-[2rem]',
        open && 'cursor-default',
      )}
    >
      <div
        className={cn(
          'flex w-full items-center justify-center',
          isHero
            ? 'min-h-0 max-w-[min(100%,20rem)] justify-self-center sm:max-w-[22rem]'
            : 'max-w-[18rem] flex-col gap-4',
        )}
      >
        {/* Sage-green envelope (flap lifts, card slides out) */}
        <motion.span
          variants={{
            closed: { opacity: 1, y: 0 },
            open: {
              opacity: 0,
              y: 18,
              transition: { delay: 1.25, duration: 0.5, ease: EASE },
            },
          }}
          style={{ perspective: 1500 }}
          className='relative block aspect-[7/5] w-full overflow-hidden [transform-style:preserve-3d]'
        >
          <motion.span
            aria-hidden
            animate={
              open
                ? undefined
                : { y: [0, -3, 0] }
            }
            transition={
              open
                ? undefined
                : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
            }
            className='relative block h-full w-full [transform-style:preserve-3d]'
          >
            <span
              aria-hidden
              className='absolute inset-0 rounded-xl bg-envelope-deep shadow-[inset_0_8px_18px_-10px_rgba(0,0,0,0.5)]'
            />

            <motion.span
              aria-hidden
              variants={{
                closed: { y: '12%', scale: 0.96, opacity: 0 },
                open: {
                  y: '-52%',
                  scale: 1,
                  opacity: 1,
                  transition: {
                    y: { delay: 0.42, duration: 0.95, ease: EASE },
                    scale: { delay: 0.42, duration: 0.95, ease: EASE },
                    opacity: { delay: 0.38, duration: 0.35, ease: EASE },
                  },
                },
              }}
              style={{ zIndex: 20 }}
              className='absolute inset-x-[14%] top-[9%] grid h-[82%] place-items-center rounded-md border border-charcoal/8 bg-cream shadow-[0_22px_38px_-20px_rgba(31,29,24,0.45)]'
            >
              <TNMonogram className='h-16 w-auto sm:h-[4.75rem]' title='' />
            </motion.span>

            <span
              aria-hidden
              style={{
                zIndex: 30,
                clipPath:
                  'polygon(0% 40%, 50% 66%, 100% 40%, 100% 100%, 0% 100%)',
              }}
              className='absolute inset-0 rounded-xl bg-envelope shadow-[0_28px_56px_-30px_rgba(31,29,24,0.35)]'
            >
              <span
                aria-hidden
                className='absolute inset-0'
                style={{
                  backgroundImage: PAPER_TEXTURE,
                  backgroundSize: PAPER_TEXTURE_SIZE,
                }}
              />
            </span>

            <span
              aria-hidden
              style={{
                zIndex: 31,
                background:
                  'linear-gradient(45deg, transparent calc(50% - 0.6px), rgba(0,0,0,0.14) 50%, transparent calc(50% + 0.6px)), linear-gradient(-45deg, transparent calc(50% - 0.6px), rgba(0,0,0,0.14) 50%, transparent calc(50% + 0.6px))',
                clipPath:
                  'polygon(0% 40%, 50% 66%, 100% 40%, 100% 100%, 0% 100%)',
              }}
              className='absolute inset-0'
            />

            <motion.span
              aria-hidden
              variants={{
                closed: { rotateX: 0 },
                open: {
                  rotateX: -175,
                  transition: { delay: 0.06, duration: 0.62, ease: EASE },
                },
              }}
              style={{
                zIndex: 40,
                transformOrigin: '50% 0%',
                transformStyle: 'preserve-3d',
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              }}
              className='absolute inset-x-0 top-0 h-[62%] rounded-t-xl bg-envelope-soft shadow-[inset_0_-8px_16px_-9px_rgba(0,0,0,0.4)]'
            />

            <motion.span
              aria-hidden
              variants={{
                closed: { scale: 1, opacity: 1, y: 0 },
                open: {
                  scale: 1.35,
                  opacity: 0,
                  y: -10,
                  transition: { duration: 0.34, ease: EASE },
                },
              }}
              style={{ zIndex: 50, boxShadow: SEAL_EMBOSS }}
              className='absolute left-1/2 top-[66%] grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream sm:h-36 sm:w-36'
            >
              <span
                aria-hidden
                className='absolute inset-1 rounded-full'
                style={{ boxShadow: SEAL_RING_EMBOSS }}
              />
              <TNMonogram className='h-[3.25rem] w-auto sm:h-[4.5rem]' title='' />
            </motion.span>
          </motion.span>
        </motion.span>
      </div>

      <motion.span
        variants={{
          closed: { opacity: 1, y: 0 },
          open: {
            opacity: 0,
            y: 10,
            transition: { duration: 0.28, ease: EASE },
          },
        }}
        animate={open ? undefined : { opacity: [0.62, 1, 0.62] }}
        transition={
          open
            ? undefined
            : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
        className={cn(
          'shrink-0 justify-self-center rounded-full border border-charcoal/25 bg-cream/80 px-6 py-2.5 font-medium uppercase tracking-[0.24em] text-charcoal/75 backdrop-blur-[2px]',
          isHero
            ? 'mt-0 w-full max-w-[min(100%,20rem)] text-center text-[0.6875rem] sm:max-w-[22rem] sm:text-xs'
            : 'mt-4 text-[0.625rem]',
        )}
      >
        {openLabel}
      </motion.span>
    </motion.button>
  ) : null;

  return (
    <InvitationRevealProvider revealed={revealed}>
      <div className={cn('relative min-w-0 max-w-full', className)}>
        <motion.div
          initial={false}
          animate={
            open
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 36, scale: 0.98 }
          }
          transition={{ delay: open ? 1.55 : 0, duration: 0.75, ease: EASE }}
          aria-hidden={!revealed}
          inert={!revealed}
          className={cn(!revealed && 'pointer-events-none')}
        >
          {children}
        </motion.div>

        {isHero
          ? mounted && sealed
            ? createPortal(sealed, document.body)
            : null
          : sealed}
      </div>
    </InvitationRevealProvider>
  );
}
