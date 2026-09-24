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

import { InvitationRevealProvider } from '@/components/ui/InvitationReveal';
import PhotoStrip from '@/components/ui/PhotoStrip';
import { cn } from '@/lib/utils';

type InvitationEnvelopeProps = {
  /** The content revealed once the invitation is opened. */
  children: ReactNode;
  /** Localized prompt shown under the photo booth (e.g. "Tap to open"). */
  openLabel: string;
  /** Localized label for the control that bypasses the intro (hero variant only). */
  skipLabel?: string;
  /** Optional heading shown above the photo booth (hero variant). */
  sealedHeader?: ReactNode;
  /** Print that slides out of the booth; defaults to a monogram-only strip. */
  photoStrip?: ReactNode;
  /**
   * "card" overlays a single invitation card; "hero" takes over the whole
   * viewport so guests first see only the photo booth, then reveal
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
const PRINT_EASE = [0.45, 0, 0.2, 1] as const;

/** On tap: booth + text fade first, then the dark backdrop lifts; the page cascades in after. */
const SCENE_FADE = 0.3;
const BACKDROP_FADE = 0.5;
const INTRO_EXIT_MS = (SCENE_FADE + BACKDROP_FADE) * 1000;

const BRUSHED =
  'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)';
const BOOTH_METAL =
  `${BRUSHED}, linear-gradient(90deg, var(--color-brass-deep) 0%, var(--color-brass-soft) 14%, ` +
  'var(--color-brass) 34%, var(--color-brass-deep) 52%, var(--color-brass) 70%, ' +
  'var(--color-brass-soft) 88%, var(--color-brass-deep) 100%)';
const BOOTH_SHADOW =
  '0 40px 60px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 3px rgba(0,0,0,0.3)';
const RECESS_METAL =
  `${BRUSHED}, linear-gradient(180deg, var(--color-brass-deep), var(--color-brass) 55%, var(--color-brass-deep))`;
const RECESS_SHADOW =
  'inset 0 16px 24px -12px rgba(0,0,0,0.6), inset 7px 0 12px -8px rgba(0,0,0,0.45), inset -7px 0 12px -8px rgba(0,0,0,0.45)';
const TRAY_METAL =
  `${BRUSHED}, linear-gradient(180deg, var(--color-brass-soft), var(--color-brass) 35%, var(--color-brass-deep))`;
const TRAY_SHADOW = 'inset 0 1px 0 rgba(255,255,255,0.5), 0 -8px 14px -8px rgba(0,0,0,0.5)';

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

/** Brushed-brass photo booth slot with a print feeding down into its tray. */
function PhotoBooth({ strip }: { strip: ReactNode }) {
  return (
    <span
      aria-hidden
      className='relative block aspect-[8/15] w-full rounded-[8px]'
      style={{ backgroundImage: BOOTH_METAL, boxShadow: BOOTH_SHADOW }}
    >
      <span
        className='absolute inset-x-[8%] top-[5%] bottom-[5%] rounded-[5px]'
        style={{ backgroundImage: RECESS_METAL, boxShadow: RECESS_SHADOW }}
      />
      <span
        className='absolute inset-x-[8%] bottom-[5%] h-[19%] rounded-b-[5px]'
        style={{ backgroundImage: TRAY_METAL, boxShadow: TRAY_SHADOW }}
      />
      <span className='absolute inset-x-[23%] top-[10.8%] bottom-[9%] overflow-hidden'>
        <motion.span
          className='block'
          initial={{ y: '-44%' }}
          animate={{ y: '0%' }}
          transition={{ delay: 0.4, duration: 2.6, ease: PRINT_EASE }}
        >
          {strip}
        </motion.span>
      </span>
      <span className='absolute inset-x-[17%] top-[9.2%] h-[2.6%] rounded-[2px] bg-brass-ink shadow-[inset_0_2px_3px_rgba(0,0,0,0.7),0_1px_0_rgba(255,255,255,0.3)]' />
    </span>
  );
}

/**
 * Photo-booth invitation intro: a print feeds out of a brass booth on a dark
 * backdrop. On tap the booth fades, the backdrop lifts, and the revealed
 * content cascades in. Hero variant fills the viewport until opened, is
 * skipped for the rest of the browser session once opened, and never renders
 * for reduced motion.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  skipLabel,
  sealedHeader,
  photoStrip,
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
    timerRef.current = window.setTimeout(() => setPhase('revealed'), INTRO_EXIT_MS);
  }, [isHero]);

  const skipIntro = useCallback(() => {
    openedRef.current = true;
    if (isHero) rememberOpened();
    clearTimer();
    setPhase('revealed');
  }, [isHero, clearTimer]);

  const fading = phase === 'fading';

  const overlay = overlayActive ? (
    <motion.div
      ref={overlayRef}
      initial={false}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: BACKDROP_FADE, delay: fading ? SCENE_FADE : 0, ease: EASE }}
      style={{ willChange: fading ? 'opacity' : undefined }}
      className={cn(
        'overflow-hidden bg-night text-paper',
        isHero
          ? 'fixed inset-0 z-[60] h-[100dvh] px-6 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]'
          : 'absolute inset-0 z-10 min-h-[22rem] rounded-[1.75rem] px-6 sm:rounded-[2rem]',
        fading && 'pointer-events-none',
      )}
    >
      <span
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_58%,rgba(176,160,134,0.16)_0%,transparent_70%)]'
      />

      {isHero && skipLabel ? (
        <button
          type='button'
          onClick={skipIntro}
          className='absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-paper/70 transition-colors duration-200 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night [&:lang(th)]:font-thai [&:lang(th)]:text-xs [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal'
        >
          {skipLabel}
        </button>
      ) : null}

      <motion.div
        initial={false}
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: SCENE_FADE, ease: EASE }}
        className='relative flex h-full flex-col items-center justify-center'
      >
        {isHero && sealedHeader ? (
          <div aria-hidden className='mb-8 flex flex-col items-center text-center sm:mb-10'>
            {sealedHeader}
          </div>
        ) : null}

        <button
          type='button'
          onClick={openInvitation}
          aria-disabled={phase !== 'sealed' || undefined}
          className={cn(
            'flex cursor-pointer flex-col items-center rounded-2xl p-2 outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-4 focus-visible:ring-offset-night',
            isHero ? 'gap-8 sm:gap-10' : 'gap-5',
            phase !== 'sealed' && 'cursor-default',
          )}
        >
          <span
            aria-hidden
            className='block'
            style={{
              width: isHero
                ? 'min(12.5rem, 52vw, calc((100dvh - 21rem) * 8 / 15))'
                : 'min(9rem, 50%)',
            }}
          >
            <PhotoBooth strip={photoStrip ?? <PhotoStrip />} />
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7, ease: EASE }}
            className={cn(
              'inline-flex min-h-11 items-center justify-center rounded-full border border-paper/45 text-center font-medium uppercase tracking-[0.28em] text-paper/90 [&:lang(th)]:font-thai [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal',
              isHero ? 'min-w-[13rem] px-8 text-[0.6875rem] sm:text-xs' : 'px-6 text-[0.625rem]',
            )}
          >
            {openLabel}
          </motion.span>
        </button>
      </motion.div>
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
