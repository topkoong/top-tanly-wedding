import Image from "next/image";

import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

/** 1024x682 flower-only watercolor sprite sheet. */
const FLOWER_ONLY_SPRITE = publicAssetPath("/images/home-watercolor-florals.png");

/**
 * Home hero botanical framing from flower-only crops.
 * Keeps center calm for invitation copy while increasing floral presence.
 */
export default function BotanicalBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* Bottom floral band for grounding */}
      <div className="absolute inset-x-0 -bottom-16 h-[min(42vw,280px)] overflow-hidden md:h-[min(36vw,260px)]">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[50%_94%] mix-blend-multiply opacity-[0.42] saturate-[1.02] md:opacity-[0.46]"
          sizes="100vw"
        />
      </div>

      {/* Corner clusters */}
      <div className="absolute -left-10 -top-2 h-[min(56vw,340px)] w-[min(74vw,340px)] overflow-hidden sm:left-0 sm:h-[min(50vw,380px)] sm:w-[min(60vw,400px)]">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[13%_27%] mix-blend-multiply opacity-[0.48] saturate-[1.06] brightness-[1.04] md:opacity-[0.54]"
          sizes="(max-width:768px) 74vw, 400px"
        />
      </div>
      <div className="absolute -right-12 top-0 h-[min(54vw,330px)] w-[min(74vw,340px)] overflow-hidden sm:right-0 sm:h-[min(48vw,360px)] sm:w-[min(58vw,390px)]">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[87%_28%] mix-blend-multiply opacity-[0.46] saturate-[1.06] brightness-[1.04] md:opacity-[0.52]"
          sizes="(max-width:768px) 74vw, 390px"
        />
      </div>
      <div className="absolute -bottom-6 -left-12 h-[min(58vw,360px)] w-[min(76vw,380px)] overflow-hidden sm:bottom-0 sm:left-0">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[18%_74%] mix-blend-multiply opacity-[0.44] saturate-[1.06] brightness-[1.03] md:opacity-[0.5]"
          sizes="(max-width:768px) 76vw, 420px"
        />
      </div>
      <div className="absolute -bottom-12 -right-12 h-[min(60vw,380px)] w-[min(78vw,400px)] overflow-hidden sm:-bottom-6 sm:right-0">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[84%_78%] mix-blend-multiply opacity-[0.44] saturate-[1.06] brightness-[1.03] md:opacity-[0.5]"
          sizes="(max-width:768px) 78vw, 440px"
        />
      </div>

      {/* Additional top floral whispers for richer frame */}
      <div className="absolute -left-6 top-14 h-[min(34vw,220px)] w-[min(48vw,260px)] overflow-hidden sm:left-8">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[7%_5%] mix-blend-multiply opacity-[0.3] md:opacity-[0.35]"
          sizes="(max-width:768px) 48vw, 280px"
        />
      </div>
      <div className="absolute -right-6 top-14 h-[min(34vw,220px)] w-[min(48vw,260px)] overflow-hidden sm:right-8">
        <Image
          src={FLOWER_ONLY_SPRITE}
          alt=""
          fill
          className="object-cover object-[92%_6%] mix-blend-multiply opacity-[0.28] md:opacity-[0.33]"
          sizes="(max-width:768px) 48vw, 280px"
        />
      </div>

      {/* Centre veil keeps hero typography calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_min(92%,96%)_at_50%_38%,rgb(248_245_239/0.9)_42%,transparent_72%)]" />
    </div>
  );
}
