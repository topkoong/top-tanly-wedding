import PhotoFrame from "@/components/ui/PhotoFrame";
import { cn } from "@/lib/utils";

type PhotoStripProps = {
  /** Three photo-booth frames (null = placeholder). */
  photos: [string | null, string | null, string | null];
  className?: string;
};

/** Photo-booth print: three frames on cream stock with a deeper bottom margin. */
export default function PhotoStrip({ photos, className }: PhotoStripProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex flex-col gap-[0.35rem] bg-paper p-[0.45rem] pb-[0.9rem] shadow-[0_18px_30px_-18px_rgba(31,29,24,0.55)] ring-1 ring-charcoal/[0.06]",
        className,
      )}
    >
      {photos.map((src, index) => (
        <PhotoFrame key={index} src={src} width={600} height={480} />
      ))}
    </div>
  );
}
