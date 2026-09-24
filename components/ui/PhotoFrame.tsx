import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  /** Resolved photo URL, or null to show the placeholder. */
  src: string | null;
  /** Empty for decorative collage photos. */
  alt?: string;
  /** Intrinsic export size — reserves space so nothing shifts when the photo loads. */
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * Couple photo with an olive-tinted placeholder at the same shape until the
 * real file exists. Plain <img>: the static export serves pre-sized WebP.
 */
export default function PhotoFrame({
  src,
  alt = "",
  width,
  height,
  className,
  priority = false,
}: PhotoFrameProps) {
  return (
    <div
      className={cn("relative overflow-hidden bg-envelope-soft/25", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_90%_at_50%_30%,rgba(91,84,64,0.28)_0%,rgba(61,56,36,0.14)_100%)]"
        >
          <span className="absolute inset-[6%] border border-envelope/15" />
          <ImageIcon className="h-[22%] max-h-8 w-auto text-envelope/35" strokeWidth={1.25} />
        </div>
      )}
    </div>
  );
}
