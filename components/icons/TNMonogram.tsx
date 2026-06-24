import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * The couple's custom "NT" monogram (initials of Narueporn & Theerut): a serif N
 * intertwined with a calligraphic T. Sized by height; width follows the artwork's
 * near-square ratio. Rendered from a pre-keyed transparent PNG (charcoal ink),
 * so it sits cleanly on any cream/ivory surface.
 */
export default function TNMonogram({
  className,
  title = "N & T monogram",
}: TNMonogramProps) {
  const decorative = title.trim() === "";

  return (
    <img
      src={publicAssetPath("/brand/nt-monogram.png")}
      alt={decorative ? "" : title}
      aria-hidden={decorative || undefined}
      width={468}
      height={472}
      draggable={false}
      className={cn("h-7 w-auto select-none", className)}
    />
  );
}
