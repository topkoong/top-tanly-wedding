import { cn } from "@/lib/utils";

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Refined serif monogram "N & T" (bride-first initials) rendered as SVG text so
 * it scales cleanly at any height. Sized by height; width follows the viewBox.
 */
export default function TNMonogram({
  className,
  title = "N & T monogram",
}: TNMonogramProps) {
  const serif = "var(--font-cormorant), Georgia, 'Times New Roman', serif";

  return (
    <svg
      viewBox="0 0 72 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-auto", className)}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="36"
        y="23"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{ fontFamily: serif }}
      >
        <tspan style={{ fontSize: "34px", fontWeight: 500 }}>N</tspan>
        <tspan dx="4" style={{ fontSize: "24px", fontWeight: 400, fontStyle: "italic" }}>
          &amp;
        </tspan>
        <tspan dx="4" style={{ fontSize: "34px", fontWeight: 500 }}>
          T
        </tspan>
      </text>
    </svg>
  );
}
