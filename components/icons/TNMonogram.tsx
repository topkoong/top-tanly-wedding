import { publicAssetPath } from '@/lib/publicAssetPath';
import { cn } from '@/lib/utils';

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Tan & Top monogram from the invitation suite — intertwined NT mark
 * (`public/brand/logo.svg`). Sized by height on the wrapper; width follows
 * the artwork via `aspect-ratio` so iOS Safari does not collapse an SVG
 * that has no intrinsic width.
 */
export default function TNMonogram({
  className,
  title = 'Tan & Top monogram',
}: TNMonogramProps) {
  const decorative = title.trim() === '';

  return (
    <span
      className={cn(
        'inline-block h-14 shrink-0 overflow-hidden',
        className,
      )}
      style={{ aspectRatio: '285 / 264' }}
    >
      <img
        src={publicAssetPath('/brand/logo.svg')}
        alt={decorative ? '' : title}
        aria-hidden={decorative || undefined}
        width={285}
        height={264}
        draggable={false}
        className="block h-full w-full object-contain select-none"
      />
    </span>
  );
}
