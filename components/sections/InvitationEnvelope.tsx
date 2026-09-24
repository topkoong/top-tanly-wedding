'use client';

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
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
  /** Localized prompt shown under the sealed invitation (e.g. "Tap to open"). */
  openLabel: string;
  /** Localized label for the control that bypasses the intro (hero variant only). */
  skipLabel?: string;
  /**
   * "card" overlays a single invitation card; "hero" takes over the whole
   * viewport so guests first see only the sealed gate-fold, then reveal
   * everything on tap.
   */
  variant?: 'card' | 'hero';
  className?: string;
};

/**
 * checking → decided after mount (sessionStorage + reduced motion) so the
 * server and first client render match and the intro never flashes.
 */
type Phase = 'checking' | 'sealed' | 'opening' | 'settling' | 'revealed';

const SESSION_KEY = 'tan-top-invitation-opened';

const EASE = [0.22, 1, 0.36, 1] as const;
const DOOR_EASE = [0.65, 0, 0.35, 1] as const;

/** Seconds from activation — every layer keys off this single timeline. */
const TIMELINE = {
  pressDuration: 0.3,
  labelFade: 0.15,
  leftDoorDelay: 0.15,
  rightDoorDelay: 0.21,
  doorDuration: 1.15,
  cardDelay: 0.3,
  cardDuration: 1.1,
  settleAt: 1.25,
  overlayFade: 0.45,
} as const;
const REVEAL_AT = TIMELINE.settleAt + TIMELINE.overlayFade;

/** Past 90° so the doors read as swinging open toward the guest; larger values clip on 375px screens. */
const DOOR_ANGLE = 100;

const SEAL_EMBOSS =
  '0 1px 0 rgba(255,255,255,0.75), 0 10px 22px -12px rgba(31,29,24,0.38),' +
  'inset 0 1px 1.5px rgba(255,255,255,0.95), inset 0 -1.5px 2px rgba(31,29,24,0.12)';
const SEAL_RING_EMBOSS =
  'inset 0 1px 1px rgba(31,29,24,0.12), inset 0 -1px 1px rgba(255,255,255,0.9)';

const DOOR_VIGNETTE =
  'radial-gradient(120% 85% at 50% 45%, transparent 55%, rgba(58,47,34,0.26) 100%)';
const LAID_LINES =
  'repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 5px)';

const HIDDEN_FACE: CSSProperties = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
};

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

/** Tone-on-tone diamond lattice, embossed into the brown stock. */
function DoorLattice() {
  const id = useId();
  return (
    <svg
      aria-hidden
      className='absolute inset-0 h-full w-full text-envelope-ink opacity-[0.09]'
    >
      <defs>
        <pattern id={id} width='14' height='14' patternUnits='userSpaceOnUse'>
          <path
            d='M7 0.5L13.5 7L7 13.5L0.5 7Z'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.7'
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  );
}

type DoorProps = {
  side: 'left' | 'right';
  open: boolean;
  animating: boolean;
  children?: ReactNode;
};

function GateDoor({ side, open, animating, children }: DoorProps) {
  const isLeft = side === 'left';
  const doorTiming = {
    delay: isLeft ? TIMELINE.leftDoorDelay : TIMELINE.rightDoorDelay,
    duration: TIMELINE.doorDuration,
    ease: DOOR_EASE,
  };

  return (
    <motion.span
      aria-hidden
      initial={false}
      animate={{ rotateY: open ? (isLeft ? -DOOR_ANGLE : DOOR_ANGLE) : 0 }}
      transition={doorTiming}
      style={{
        transformOrigin: isLeft ? 'left center' : 'right center',
        transformStyle: 'preserve-3d',
        willChange: animating ? 'transform' : undefined,
      }}
      className={cn('absolute inset-y-0 w-1/2', isLeft ? 'left-0' : 'right-0')}
    >
      {/* Front face */}
      <span
        style={HIDDEN_FACE}
        className={cn(
          'absolute inset-0 overflow-hidden',
          isLeft
            ? 'rounded-l-[5px] bg-envelope-deep'
            : 'rounded-r-[5px] bg-envelope',
        )}
      >
        <span
          className='absolute inset-0'
          style={{ backgroundImage: `${LAID_LINES}, ${DOOR_VIGNETTE}` }}
        />
        <DoorLattice />
        {/* Bevel highlight along the outer edges */}
        <span
          className={cn(
            'absolute inset-0',
            isLeft
              ? 'rounded-l-[5px] shadow-[inset_1px_1px_0_var(--color-envelope-soft)]'
              : 'rounded-r-[5px] shadow-[inset_-1px_1px_0_var(--color-envelope-soft)]',
          )}
        />
        {/* Center seam shadow */}
        <span
          className={cn(
            'absolute inset-y-0 w-[9%]',
            isLeft
              ? 'right-0 bg-gradient-to-l from-[rgba(40,32,22,0.16)] to-transparent'
              : 'left-0 bg-gradient-to-r from-[rgba(40,32,22,0.14)] to-transparent',
          )}
        />
        {/* Letterpress frame */}
        <span className='absolute inset-[10px] rounded-[2px] border border-cream/25' />
        {/* Lighting shifts as the door turns away from the light */}
        <motion.span
          initial={false}
          animate={{ opacity: open ? 0.32 : 0 }}
          transition={doorTiming}
          className={cn(
            'absolute inset-0',
            isLeft
              ? 'bg-gradient-to-r from-[rgba(31,24,16,0.7)] to-[rgba(31,24,16,0.25)]'
              : 'bg-gradient-to-l from-[rgba(31,24,16,0.7)] to-[rgba(31,24,16,0.25)]',
          )}
        />
      </span>

      {/* Back face — always brown, never the page colour */}
      <span
        style={{ ...HIDDEN_FACE, transform: 'rotateY(180deg)' }}
        className={cn(
          'absolute inset-0 overflow-hidden bg-envelope-deep',
          isLeft ? 'rounded-r-[5px]' : 'rounded-l-[5px]',
        )}
      >
        <span
          className='absolute inset-0'
          style={{
            backgroundImage: `${LAID_LINES}, linear-gradient(${isLeft ? '270deg' : '90deg'}, rgba(31,24,16,0.28), rgba(31,24,16,0.08))`,
          }}
        />
      </span>

      {children}
    </motion.span>
  );
}

type SealProps = { pressed: boolean };

/** Ivory scalloped medallion; rides the left door and overlaps the seam. */
function GateSeal({ pressed }: SealProps) {
  return (
    <span
      aria-hidden
      style={{ ...HIDDEN_FACE, transform: 'translateZ(2px)' }}
      className='absolute right-0 top-1/2 aspect-square w-[62%] -translate-y-1/2 translate-x-1/2'
    >
      <motion.span
        initial={false}
        animate={pressed ? { scale: [1, 0.97, 1] } : { scale: 1 }}
        transition={{ duration: TIMELINE.pressDuration, times: [0, 0.5, 1], ease: EASE }}
        className='relative block h-full w-full rounded-full shadow-[0_12px_24px_-14px_rgba(31,24,16,0.55)]'
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
      </motion.span>
    </span>
  );
}

/**
 * Brown gate-fold wedding invitation: two doors meet under an ivory monogram
 * seal and swing open to reveal an ivory card, which dissolves into the real
 * hero. Hero variant fills the viewport until opened, is skipped for the rest
 * of the browser session once opened, and never renders for reduced motion.
 */
export default function InvitationEnvelope({
  children,
  openLabel,
  skipLabel,
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
    timersRef.current.forEach((t) => window.clearTimeout(t));
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

  const overlayActive =
    phase === 'sealed' || phase === 'opening' || phase === 'settling';
  const animating = phase === 'opening' || phase === 'settling';
  const open = animating;
  const contentShown = phase === 'settling' || phase === 'revealed';
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
      window.setTimeout(() => setPhase('settling'), TIMELINE.settleAt * 1000),
      window.setTimeout(() => setPhase('revealed'), REVEAL_AT * 1000),
    );
  }, [isHero]);

  const skipIntro = useCallback(() => {
    openedRef.current = true;
    if (isHero) rememberOpened();
    clearTimers();
    setPhase('revealed');
  }, [isHero, clearTimers]);

  const stageWidth = isHero
    ? 'min(var(--gatefold-max), calc(100vw - 5.5rem), calc((100dvh - 14rem) * 5 / 7))'
    : 'min(18rem, 100%)';

  const overlay = overlayActive ? (
    <motion.div
      ref={overlayRef}
      initial={false}
      animate={{ opacity: phase === 'settling' ? 0 : 1 }}
      transition={{ duration: TIMELINE.overlayFade, ease: EASE }}
      style={{ willChange: phase === 'settling' ? 'opacity' : undefined }}
      className={cn(
        'overflow-hidden',
        isHero
          ? 'fixed inset-0 z-[60] flex h-[100dvh] flex-col items-center justify-center bg-cream px-6 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))] [--gatefold-max:22rem] sm:[--gatefold-max:26rem]'
          : 'absolute inset-0 z-10 flex min-h-[22rem] flex-col items-center justify-center rounded-[1.75rem] px-6 sm:rounded-[2rem]',
        phase === 'settling' && 'pointer-events-none',
      )}
    >
      {isHero && skipLabel ? (
        <motion.button
          type='button'
          onClick={skipIntro}
          initial={false}
          animate={{ opacity: animating ? 0 : 1 }}
          transition={{ duration: 0.3, ease: EASE }}
          className='absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-charcoal/70 transition-colors duration-200 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&:lang(th)]:font-thai [&:lang(th)]:text-xs [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal'
        >
          {skipLabel}
        </motion.button>
      ) : null}

      <button
        type='button'
        onClick={openInvitation}
        aria-disabled={phase !== 'sealed' || undefined}
        className={cn(
          'flex cursor-pointer flex-col items-center gap-8 rounded-2xl p-2 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-4 focus-visible:ring-offset-cream',
          !isHero && 'gap-5',
          phase !== 'sealed' && 'cursor-default',
        )}
      >
        <motion.span
          aria-hidden
          initial={false}
          animate={phase === 'sealed' ? { y: [0, -3, 0] } : { y: 0 }}
          transition={
            phase === 'sealed'
              ? { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.2, ease: EASE }
          }
          style={{ width: stageWidth }}
          className='relative block aspect-[5/7]'
        >
          {/* Ivory card waiting behind the doors */}
          <motion.span
            initial={false}
            animate={open ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0.85 }}
            transition={{
              delay: TIMELINE.cardDelay,
              duration: TIMELINE.cardDuration,
              ease: EASE,
            }}
            className='absolute inset-0 grid place-items-center rounded-[5px] bg-ivory shadow-[0_24px_48px_-30px_rgba(31,29,24,0.4)]'
            style={{
              backgroundImage:
                'radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.9), transparent 70%)',
            }}
          >
            <span className='absolute inset-[10px] rounded-[2px] border border-charcoal/15' />
            <TNMonogram className='h-[16%] w-auto opacity-90' title='' />
          </motion.span>

          <span
            className='absolute inset-0'
            style={{ perspective: 1600, transformStyle: 'preserve-3d' }}
          >
            <GateDoor side='right' open={open} animating={animating} />
            <GateDoor side='left' open={open} animating={animating}>
              <GateSeal pressed={open} />
            </GateDoor>
          </span>
        </motion.span>

        <motion.span
          initial={false}
          animate={
            phase === 'sealed' ? { opacity: [0.72, 1, 0.72] } : { opacity: 0 }
          }
          transition={
            phase === 'sealed'
              ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              : { duration: TIMELINE.labelFade, ease: EASE }
          }
          className={cn(
            'rounded-full border border-charcoal/25 bg-cream/80 px-6 py-2.5 text-center font-medium uppercase tracking-[0.24em] text-charcoal [&:lang(th)]:font-thai [&:lang(th)]:normal-case [&:lang(th)]:tracking-normal',
            isHero ? 'text-[0.6875rem] sm:text-xs' : 'text-[0.625rem]',
          )}
        >
          {openLabel}
        </motion.span>
      </button>
    </motion.div>
  ) : null;

  return (
    <InvitationRevealProvider revealed={contentShown}>
      <div className={cn('relative min-w-0 max-w-full', className)}>
        <motion.div
          initial={false}
          animate={{ opacity: contentShown ? 1 : 0 }}
          transition={{ duration: instant ? 0 : 0.35, ease: EASE }}
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
