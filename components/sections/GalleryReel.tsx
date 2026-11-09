"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

import type { GalleryReel as GalleryReelContent } from "@/content/schema";
import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type GalleryReelProps = {
  reel: GalleryReelContent;
  isThai?: boolean;
};

export default function GalleryReel({ reel, isThai }: GalleryReelProps) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const src = publicAssetPath(reel.src as `/${string}`);
  const poster = publicAssetPath(reel.poster as `/${string}`);

  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }
    video.pause();
    setPlaying(false);
  };

  return (
    <figure className="mx-auto w-full max-w-sm sm:max-w-md">
      <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-[0_8px_24px_-16px_rgba(45,38,32,0.1)] aspect-[9/16]">
        {shouldReduceMotion ? (
          <Image src={poster} alt={reel.ariaLabel} fill sizes="(max-width: 640px) 100vw, 448px" className="object-cover" />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full cursor-pointer object-cover"
            src={src}
            poster={poster}
            playsInline
            preload="metadata"
            aria-label={reel.ariaLabel}
            onClick={() => void toggle()}
            onEnded={() => setPlaying(false)}
          />
        )}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {!shouldReduceMotion ? (
          <button
            type="button"
            onClick={() => void toggle()}
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center rounded-full",
              "border border-charcoal/20 bg-cream text-charcoal",
              "transition-colors duration-200 hover:bg-ivory",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
            )}
            aria-label={playing ? reel.pauseLabel : reel.playLabel}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        ) : null}
        <figcaption
          className={cn(
            "text-center text-body-s text-stone",
            isThai ? "font-thai" : "font-display uppercase tracking-[0.16em]",
          )}
        >
          {reel.title}
        </figcaption>
      </div>
    </figure>
  );
}
