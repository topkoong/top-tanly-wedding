import Image from "next/image";

import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

/** 1536x1024 minimal floral background generated for hero framing. */
const MINIMAL_FLOWER_BG = publicAssetPath("/images/minimal-flower-wedding-background.png");

type BotanicalBackdropProps = {
  className?: string;
  imageSrc?: string;
  imageClassName?: string;
};

/**
 * Quiet-luxury floral framing with one minimal flower-only canvas.
 * Keeps center calm while preserving floral corners.
 */
export default function BotanicalBackdrop({
  className,
  imageSrc = MINIMAL_FLOWER_BG,
  imageClassName,
}: BotanicalBackdropProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className={cn(
            "object-cover object-center mix-blend-multiply opacity-[0.78] saturate-[1.04] brightness-[1.02] md:opacity-[0.84]",
            imageClassName,
          )}
          sizes="100vw"
        />
      </div>

      {/* Centre veil keeps typography calm on top of the decorative image. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_min(92%,96%)_at_50%_40%,rgb(248_245_239/0.96)_43%,rgb(248_245_239/0.74)_62%,transparent_82%)]" />
      <div className="absolute inset-x-0 top-[40%] h-[34%] bg-gradient-to-b from-transparent via-cream/62 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream" />
    </div>
  );
}
