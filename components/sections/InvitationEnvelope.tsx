'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
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
  /** The content revealed once the invitation is opened. */
  children: ReactNode;
  /** Localized prompt shown under the sealed envelope (e.g. "Tap to open"). */
  openLabel: string;
  /** Localized label for the control that bypasses the intro (hero variant only). */
  skipLabel?: string;
  /** Optional heading shown above the sealed envelope (hero variant). */
  sealedHeader?: ReactNode;
  /** Letter that slides out of the envelope; defaults to the monogram. */
  letter?: ReactNode;
  /** Full-screen photo behind the envelope (hero variant); olive backdrop when null. */
  backdropSrc?: string | null;
  /**
   * "card" overlays a single invitation card; "hero" takes over the whole
   * viewport so guests first see only the sealed envelope, then reveal
   * everything on tap.
   */
  variant?: 'card' | 'hero';
  className?: string;
};

/**
 * checking → decided after mount (sessionStorage + reduced motion) so the
 * server and first client render match and the intro never flashes.
 */
type Phase = 'checking' | 'sealed' | 'opening' | 'fading' | 'revealed';

const SESSION_KEY = 'tan-top-invitation-opened';

const EASE = [0.22, 1, 0.36, 1] as const;
const FLAP_EASE = [0.55, 0, 0.3, 1] as const;

/* Tap timeline: seal pops → flap swings open → letter rises → cream flash → page. */
const OPEN_MS = 1500;
const FLASH_IN = 0.35;
const OVERLAY_OUT = 0.5;
const FADE_MS = (FLASH_IN + OVERLAY_OUT) * 1000;

const ENVELOPE_SHADOW =
  '0 40px 70px -30px rgba(0,0,0,0.75), 0 0 0 1px rgba(253,241,226,0.07)';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function hasOpenedThisSession() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function rememberOpened() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    /* Private mode / storage disabled — the intro simply shows again. */
  }
}

/** Olive landscape envelope whose flap swings open and releases the letter. */
function Envelope({ open, letter }: { open: boolean; letter: ReactNode }) {
  return (
    <span
      aria-hidden
      className='relative block aspect-[7/5] w-full [perspective:1400px]'
    >
      <span
        className='absolute inset-0 rounded-[4px] bg-envelope-deep'
        style={{ boxShadow: ENVELOPE_SHADOW }}
      />

      <motion.span
        className='absolute inset-x-[6%] top-[5%] z-10 flex h-[88%] flex-col items-center justify-center rounded-[3px] bg-paper px-[8%] text-center text-charcoal shadow-[0_10px_24px_-14px_rgba(0,0,0,0.6)]'
        initial={false}
        animate={{ y: open ? '-56%' : '0%' }}
        transition={{ delay: open ? 0.7 : 0, duration: 0.8, ease: EASE }}
      >
        <span className='pointer-events-none absolute inset-[5%] rounded-[2px] border border-charcoal/10' />
        <span className='relative flex flex-col items-center'>{letter}</span>
      </motion.span>

      <svg
        viewBox='0 0 140 100'
        preserveAspectRatio='none'
        className='absolute inset-0 z-20 h-full w-full'
      >
        <path d='M0 0L72 54L0 100Z' className='fill-envelope' />
        <path d='M140 0L68 54L140 100Z' className='fill-envelope' />
        <path d='M140 0L68 54L140 100Z' fill='rgba(0,0,0,0.08)' />
        <path d='M0 100L70 46L140 100Z' className='fill-envelope-soft' />
        <path d='M0 100L70 46L140 100Z' className='fill-envelope' opacity='0.75' />
        <path
          d='M0 100L70 46L140 100'
          fill='none'
          className='stroke-envelope-ink'
          strokeWidth='0.4'
          opacity='0.6'
        />
      </svg>

      <motion.span
        className='absolute inset-x-0 top-0 block h-[60%] origin-top [transform-style:preserve-3d]'
        style={{
          zIndex: open ? 5 : 30,
          /* Drop behind the letter only once the flap has swung past vertical. */
          transition: open ? 'z-index 0s linear 0.58s' : 'none',
        }}
        initial={false}
        animate={{ rotateX: open ? 180 : 0 }}
        transition={{ delay: open ? 0.2 : 0, duration: 0.75, ease: FLAP_EASE }}
      >
        <svg
          viewBox='0 0 140 60'
          preserveAspectRatio='none'
          className='absolute inset-0 h-full w-full drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)]'
        >
          <path d='M0 0L140 0L70 60Z' className='fill-envelope-deep' />
          <path
            d='M0 0L70 60L140 0'
            fill='none'
            className='stroke-envelope-soft'
            strokeWidth='0.5'
          />
        </svg>
      </motion.span>

      <motion.span
        className='absolute left-1/2 top-[60%] z-40 block aspect-square w-[20%] -translate-x-1/2 -translate-y-1/2'
        initial={false}
        animate={open ? { scale: [1, 1.14, 0], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {!open ? (
          <motion.span
            className='absolute inset-0 rounded-full border border-paper/60'
            animate={{ scale: [1, 1.4], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
          />
        ) : null}
        <span className='absolute inset-0 grid place-items-center rounded-full bg-paper shadow-[0_10px_20px_-10px_rgba(0,0,0,0.7),inset_0_-2px_3px_rgba(31,29,24,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)]'>
          <span className='absolute inset-[9%] rounded-full border border-charcoal/15' />
          <TNMonogram className='relative h-[58%] w-auto' title='' />
        </span>
      </motion.span>
    </span>
  );
}

/**
 * Sealed olive envelope intro. On tap the seal pops, the flap swings open and
 * the letter rises, then the scene flashes to cream and the page cascades in.
 * Hero variant fills the viewport until opened, is skipped for the rest of the
 * browser session once opened, and never renders for reduced motion.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  skipLabel,
  sealedHeader,
  letter,
  backdropSrc = null,
  variant = 'card',
  className,
}: InvitationEnvelopeProps) {
  const shouldReduceMotion = useReducedMotion();
  const isHero = variant === 'hero';
  const [phase, setPhase] = useState<Phase>('checking');
  const [instant, setInstant] = useState(false);
  const openedRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (openedRef.current) return;
    if (shouldReduceMotion || (isHero && hasOpenedThisSession())) {
      openedRef.current = true;
      setInstant(Boolean(shouldReduceMotion));
      setPhase('revealed');
    } else {
      setPhase('sealed');
    }
  }, [isHero, shouldReduceMotion]);

  useEffect(() => clearTimers, [clearTimers]);

  const overlayActive = phase === 'sealed' || phase === 'opening' || phase === 'fading';
  const open = phase === 'opening' || phase === 'fading';
  const fading = phase === 'fading';
  const revealed = phase === 'revealed';

  /*
   * While the full-screen invitation is up: lock scroll and make the page
   * behind it inert so keyboard focus can't land on hidden navigation.
   */
  useEffect(() => {
    if (!isHero || !overlayActive) return;
    const { body, documentElement } = document;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const inerted = Array.from(body.children).filter(
      (el): el is HTMLElement =>
        el instanceof HTMLElement && el !== overlayRef.current && !el.inert,
    );
    inerted.forEach((el) => {
      el.inert = true;
    });

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      inerted.forEach((el) => {
        el.inert = false;
      });
    };
  }, [isHero, overlayActive]);

  const openInvitation = useCallback(() => {
    if (openedRef.current) return;
    openedRef.current = true;
    if (isHero) rememberOpened();
    setPhase('opening');
    timersRef.current.push(
      window.setTimeout(() => setPhase('fading'), OPEN_MS),
      window.setTimeout(() => setPhase('revealed'), OPEN_MS + FADE_MS),
    );
  }, [isHero]);

  const skipIntro = useCallback(() => {
    openedRef.current = true;
    if (isHero) rememberOpened();
    clearTimers();
    setPhase('revealed');
  }, [isHero, clearTimers]);

  const overlay = overlayActive ? (
    <motion.div
      ref={overlayRef}
      initial={false}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: OVERLAY_OUT, delay: fading ? FLASH_IN : 0, ease: EASE }}
      style={{ willChange: fading ? 'opacity' : undefined }}
      className={cn(
        'overflow-hidden bg-night text-paper',
        isHero
          ? 'fixed inset-0 z-[60] h-[100dvh]'
          : 'absolute inset-0 z-10 min-h-[22rem] rounded-[1.75rem] sm:rounded-[2rem]',
        open && 'pointer-events-none',
      )}
    >
      {backdropSrc ? (
        <>
          <img
            src={backdropSrc}
            alt=''
            aria-hidden
            fetchPriority='high'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <span aria-hidden className='absolute inset-0 bg-night/55' />
        </>
      ) : (
        <span
          aria-hidden
          className='absolute inset-0 bg-[radial-gradient(80%_55%_at_50%_52%,rgba(122,111,84,0.32)_0%,transparent_70%),radial-gradient(140%_100%_at_50%_100%,rgba(0,0,0,0.35)_0%,transparent_60%)]'
        />
      )}

      <motion.span
        aria-hidden
        className='pointer-events-none absolute inset-0 z-20 bg-cream'
        initial={false}
        animate={{ opacity: fading ? 1 : 0 }}
        transition={{ duration: FLASH_IN, ease: 'easeOut' }}
      />

      {isHero && skipLabel ? (
        <button
          type='button'
          onClick={skipIntro}
          className='absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-30 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-paper/75 transition-colors duration-200 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night [&:lang(th)]:font-thai [&:lang(th)]:text-xs [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal'
        >
          {skipLabel}
        </button>
      ) : null}

      <div
        className={cn(
          'relative z-10 flex h-full flex-col items-center justify-center',
          isHero
            ? 'px-5 pt-[max(3rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]'
            : 'px-6',
        )}
      >
        {isHero && sealedHeader ? (
          <motion.div
            aria-hidden
            className='mb-[max(4.5rem,11vh)] flex flex-col items-center text-center'
            initial={{ opacity: 0, y: 18 }}
            animate={open ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
            transition={{ duration: open ? 0.35 : 0.9, delay: open ? 0 : 0.15, ease: EASE }}
          >
            {sealedHeader}
          </motion.div>
        ) : null}

        <button
          type='button'
          onClick={openInvitation}
          aria-disabled={phase !== 'sealed' || undefined}
          className={cn(
            'flex cursor-pointer flex-col items-center rounded-2xl p-2 outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-4 focus-visible:ring-offset-night',
            isHero ? 'gap-9 sm:gap-11' : 'gap-5',
            phase !== 'sealed' && 'cursor-default',
          )}
        >
          <motion.span
            aria-hidden
            className='block'
            style={{
              width: isHero
                ? 'min(40rem, calc(100vw - 2.5rem), calc((100dvh - 19rem) * 7 / 5))'
                : 'min(18rem, 100%)',
            }}
            initial={{ opacity: 0, y: 44, scale: 0.92, rotate: -3 }}
            animate={
              open
                ? { opacity: 1, y: '12%', scale: 1.02, rotate: 0 }
                : { opacity: 1, y: 0, scale: 1, rotate: 0 }
            }
            transition={{ duration: open ? 0.9 : 1.1, delay: open ? 0.6 : 0.25, ease: EASE }}
          >
            <Envelope open={open} letter={letter ?? <TNMonogram className='h-12 w-auto' title='' />} />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={open ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
            transition={{ duration: open ? 0.3 : 0.7, delay: open ? 0 : 1.1, ease: EASE }}
            className={cn(
              'inline-flex min-h-11 items-center justify-center rounded-full border border-paper/45 text-center font-medium uppercase tracking-[0.28em] text-paper/90 [&:lang(th)]:font-thai [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal',
              isHero ? 'min-w-[13rem] px-8 text-[0.6875rem] sm:text-xs' : 'px-6 text-[0.625rem]',
            )}
          >
            {openLabel}
          </motion.span>
        </button>
      </div>
    </motion.div>
  ) : null;

  return (
    <InvitationRevealProvider revealed={revealed}>
      <div className={cn('relative min-w-0 max-w-full', className)}>
        <motion.div
          initial={false}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: instant ? 0 : 0.2, ease: EASE }}
          aria-hidden={!revealed}
          inert={!revealed}
          className={cn(!revealed && 'pointer-events-none')}
        >
          {children}
        </motion.div>

        {isHero ? (overlay ? createPortal(overlay, document.body) : null) : overlay}
      </div>
    </InvitationRevealProvider>
  );
}
