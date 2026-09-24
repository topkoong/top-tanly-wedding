'use client';

import {
  useCallback,
  useEffect,
  useId,
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
type Phase = 'checking' | 'sealed' | 'fading' | 'revealed';

const SESSION_KEY = 'tan-top-invitation-opened';

const EASE = [0.22, 1, 0.36, 1] as const;

/** The sealed scene dissolves while the revealed content starts its cascade underneath. */
const OVERLAY_FADE = 0.4;

const SEAL_EMBOSS =
  '0 1px 0 rgba(255,255,255,0.75), 0 10px 22px -12px rgba(31,29,24,0.38),' +
  'inset 0 1px 1.5px rgba(255,255,255,0.95), inset 0 -1.5px 2px rgba(31,29,24,0.12)';
const SEAL_RING_EMBOSS =
  'inset 0 1px 1px rgba(31,29,24,0.12), inset 0 -1px 1px rgba(255,255,255,0.9)';

function scallopPath(lobes: number, radius: number) {
  const step = (Math.PI * 2) / lobes;
  const lobeRadius = (radius * Math.sin(step / 2) * 1.12).toFixed(2);
  let d = '';
  for (let i = 0; i <= lobes; i++) {
    const angle = i * step - Math.PI / 2;
    const x = (50 + radius * Math.cos(angle)).toFixed(2);
    const y = (50 + radius * Math.sin(angle)).toFixed(2);
    d += i === 0 ? `M${x} ${y}` : `A${lobeRadius} ${lobeRadius} 0 0 1 ${x} ${y}`;
  }
  return `${d}Z`;
}
const SEAL_SCALLOP_PATH = scallopPath(20, 44);

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

/** Back of a sealed landscape envelope: side and bottom flaps under a closed top flap. */
function SealedEnvelopeArt() {
  const latticeId = useId();
  return (
    <svg
      aria-hidden
      viewBox='0 0 140 100'
      preserveAspectRatio='none'
      className='absolute inset-0 h-full w-full'
    >
      <defs>
        <pattern id={latticeId} width='7' height='7' patternUnits='userSpaceOnUse'>
          <path
            d='M3.5 0.3L6.7 3.5L3.5 6.7L0.3 3.5Z'
            fill='none'
            className='stroke-envelope-ink'
            strokeWidth='0.3'
          />
        </pattern>
      </defs>
      <rect width='140' height='100' rx='2' className='fill-envelope-deep' />
      <path d='M0 0L73 55L0 100Z' className='fill-envelope' />
      <path d='M140 0L67 55L140 100Z' className='fill-envelope' opacity='0.9' />
      <path d='M0 100L70 47L140 100Z' className='fill-envelope-soft' opacity='0.55' />
      <path d='M0 100L70 47L140 100Z' className='fill-envelope' opacity='0.6' />
      <path d='M0 1.6L140 1.6L70 61.6Z' fill='rgba(40,32,22,0.22)' />
      <path d='M0 0L140 0L70 60Z' className='fill-envelope-deep' />
      <path
        d='M0 0L70 60L140 0'
        fill='none'
        className='stroke-envelope-soft'
        strokeWidth='0.35'
        opacity='0.9'
      />
      <rect width='140' height='100' fill={`url(#${latticeId})`} opacity='0.09' />
    </svg>
  );
}

/** Ivory scalloped medallion with the couple's monogram. */
function EnvelopeSeal() {
  return (
    <span
      aria-hidden
      className='absolute left-1/2 top-[60%] block aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_12px_24px_-14px_rgba(31,24,16,0.55)]'
    >
      <svg viewBox='0 0 100 100' className='absolute inset-0 h-full w-full'>
        <path
          d={SEAL_SCALLOP_PATH}
          className='fill-ivory'
          stroke='rgba(31,29,24,0.12)'
          strokeWidth='0.6'
        />
        <circle
          cx='50'
          cy='50'
          r='39.5'
          fill='none'
          stroke='rgba(31,29,24,0.14)'
          strokeWidth='0.5'
        />
      </svg>
      <span
        className='absolute inset-[16%] grid place-items-center rounded-full bg-cream'
        style={{ boxShadow: SEAL_EMBOSS }}
      >
        <span
          className='absolute inset-[5%] rounded-full'
          style={{ boxShadow: SEAL_RING_EMBOSS }}
        />
        <TNMonogram className='relative h-[64%] w-auto' title='' />
      </span>
    </span>
  );
}

/**
 * Sealed wedding-invitation envelope. On tap the whole sealed scene dissolves
 * while the revealed content cascades in underneath — the pacing of digital
 * e-invite reels. Hero variant fills the viewport until opened, is skipped for
 * the rest of the browser session once opened, and never renders for reduced
 * motion.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  skipLabel,
  sealedHeader,
  variant = 'card',
  className,
}: InvitationEnvelopeProps) {
  const shouldReduceMotion = useReducedMotion();
  const isHero = variant === 'hero';
  const [phase, setPhase] = useState<Phase>('checking');
  const [instant, setInstant] = useState(false);
  const openedRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
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

  useEffect(() => clearTimer, [clearTimer]);

  const overlayActive = phase === 'sealed' || phase === 'fading';
  const contentShown = phase === 'fading' || phase === 'revealed';
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
    setPhase('fading');
    timerRef.current = window.setTimeout(
      () => setPhase('revealed'),
      OVERLAY_FADE * 1000,
    );
  }, [isHero]);

  const skipIntro = useCallback(() => {
    openedRef.current = true;
    if (isHero) rememberOpened();
    clearTimer();
    setPhase('revealed');
  }, [isHero, clearTimer]);

  const overlay = overlayActive ? (
    <motion.div
      ref={overlayRef}
      initial={false}
      animate={{ opacity: phase === 'fading' ? 0 : 1 }}
      transition={{ duration: OVERLAY_FADE, ease: EASE }}
      style={{ willChange: phase === 'fading' ? 'opacity' : undefined }}
      className={cn(
        'overflow-hidden',
        isHero
          ? 'fixed inset-0 z-[60] flex h-[100dvh] flex-col items-center justify-center bg-cream px-6 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]'
          : 'absolute inset-0 z-10 flex min-h-[22rem] flex-col items-center justify-center rounded-[1.75rem] px-6 sm:rounded-[2rem]',
        phase === 'fading' && 'pointer-events-none',
      )}
    >
      {isHero && skipLabel ? (
        <button
          type='button'
          onClick={skipIntro}
          className='absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-charcoal/70 transition-colors duration-200 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&:lang(th)]:font-thai [&:lang(th)]:text-xs [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal'
        >
          {skipLabel}
        </button>
      ) : null}

      {isHero && sealedHeader ? (
        <div aria-hidden className='mb-10 flex flex-col items-center text-center sm:mb-12'>
          {sealedHeader}
        </div>
      ) : null}

      <button
        type='button'
        onClick={openInvitation}
        aria-disabled={phase !== 'sealed' || undefined}
        className={cn(
          'flex cursor-pointer flex-col items-center rounded-2xl p-2 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream',
          isHero ? 'gap-10 sm:gap-12' : 'gap-5',
          phase !== 'sealed' && 'cursor-default',
        )}
      >
        <span
          aria-hidden
          style={{
            width: isHero
              ? 'min(22rem, calc(100vw - 3.5rem), calc((100dvh - 22rem) * 7 / 5))'
              : 'min(18rem, 100%)',
          }}
          className='relative block aspect-[7/5] overflow-visible rounded-[3px] shadow-[0_26px_44px_-26px_rgba(31,24,16,0.55)]'
        >
          <SealedEnvelopeArt />
          <EnvelopeSeal />
        </span>

        <span
          className={cn(
            'text-center font-medium uppercase tracking-[0.28em] text-charcoal/80 [&:lang(th)]:font-thai [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal',
            isHero ? 'text-[0.6875rem] sm:text-xs' : 'text-[0.625rem]',
          )}
        >
          {openLabel}
        </span>
      </button>
    </motion.div>
  ) : null;

  return (
    <InvitationRevealProvider revealed={contentShown}>
      <div className={cn('relative min-w-0 max-w-full', className)}>
        <motion.div
          initial={false}
          animate={{ opacity: contentShown ? 1 : 0 }}
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
