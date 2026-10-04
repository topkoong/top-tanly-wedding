"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScallopFrameProps = {
  children: ReactNode;
  className?: string;
  /** Center-to-center distance of each perforation, in px. */
  scallop?: number;
  /** Paper margin around the photo in px. Must stay deeper than a perforation. */
  margin?: number;
};

/**
 * Postage-stamp paper: one even row of semicircular bites on each outer edge,
 * with a quarter-circle bite at every corner. The inner sheet stays solid.
 * Shadows belong on the wrapper (`drop-shadow`) so they follow the teeth.
 */
export default function ScallopFrame({
  children,
  className,
  scallop = 8,
  margin = 9,
}: ScallopFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const outline = size.w > 1 && size.h > 1 ? stampOutline(size.w, size.h, scallop) : null;

  return (
    <div ref={ref} className={cn("relative", className)} style={{ padding: margin }}>
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-white">
        {outline ? (
          <path d={outline} fill="currentColor" />
        ) : (
          <rect width="100%" height="100%" fill="currentColor" />
        )}
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

/**
 * Closed silhouette of a rectangle with stamp perforations.
 * Hole radius stays under half the pitch so a tooth remains between bites,
 * and under the shorter pitch so horizontal and vertical holes match.
 */
function stampOutline(width: number, height: number, pitch: number): string {
  const nx = Math.max(2, Math.round(width / pitch));
  const ny = Math.max(2, Math.round(height / pitch));
  const px = width / nx;
  const py = height / ny;
  // Just under half the pitch: round bites that meet in a point, like a real perforation.
  const r = Math.min(px, py) * 0.46;

  const arc = (x: number, y: number, sweep: 0 | 1) => `A ${r} ${r} 0 0 ${sweep} ${x} ${y}`;

  let d = `M ${r} 0`;

  for (let i = 1; i < nx; i++) {
    const cx = i * px;
    d += `L ${cx - r} 0 ${arc(cx + r, 0, 1)}`;
  }
  d += `L ${width - r} 0 ${arc(width, r, 0)}`;

  for (let j = 1; j < ny; j++) {
    const cy = j * py;
    d += `L ${width} ${cy - r} ${arc(width, cy + r, 1)}`;
  }
  d += `L ${width} ${height - r} ${arc(width - r, height, 0)}`;

  for (let i = nx - 1; i >= 1; i--) {
    const cx = i * px;
    d += `L ${cx + r} ${height} ${arc(cx - r, height, 1)}`;
  }
  d += `L ${r} ${height} ${arc(0, height - r, 0)}`;

  for (let j = ny - 1; j >= 1; j--) {
    const cy = j * py;
    d += `L 0 ${cy + r} ${arc(0, cy - r, 1)}`;
  }
  d += `L 0 ${r} ${arc(r, 0, 0)} Z`;

  return d;
}
