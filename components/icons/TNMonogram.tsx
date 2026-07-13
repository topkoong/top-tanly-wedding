import { publicAssetPath } from '@/lib/publicAssetPath';
import { cn } from '@/lib/utils';

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Tan & Top monogram from the invitation suite — intertwined NT mark
 * (`public/brand/logo.svg`). Sized by height on the wrapper; width follows
 * the artwork viewBox.
 */
export default function TNMonogram({
  className,
  title = 'Tan & Top monogram',
}: TNMonogramProps) {
  const decorative = title.trim() === '';

  return (
    <span
      className={cn(
        'inline-grid h-14 place-items-center overflow-hidden',
        className,
      )}
    >
      <img
        src={publicAssetPath('/brand/logo.svg')}
        alt={decorative ? '' : title}
        aria-hidden={decorative || undefined}
        width={285}
        height={264}
        draggable={false}
        className="block h-full w-auto max-w-full object-contain select-none"
      />
    </span>
  );
}
