import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Tan & Top monogram from the invitation suite — intertwined NT mark
 * (`public/brand/tan-top-monogram.png`). Sized by height; width follows artwork.
 */
export default function TNMonogram({
  className,
  title = "Tan & Top monogram",
}: TNMonogramProps) {
  const decorative = title.trim() === "";

  return (
    <img
      src={publicAssetPath("/brand/tan-top-monogram.png")}
      alt={decorative ? "" : title}
      aria-hidden={decorative || undefined}
      width={358}
      height={349}
      draggable={false}
      className={cn("h-14 w-auto select-none", className)}
    />
  );
}
