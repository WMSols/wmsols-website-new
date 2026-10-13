import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type ImagePlaceholderProps = {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showLabel?: boolean;
  label?: string;
};

/**
 * Layout placeholder: brand-tinted fallback + optional stock/real image.
 * Set showLabel={false} when swapping in final assets for production.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  showLabel = true,
  label = 'Placeholder',
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn('relative overflow-hidden bg-[#0C0438]', className)}
      aria-label={alt}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn('object-cover', imageClassName)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      ) : null}

      {showLabel && (
        <span className="pointer-events-none absolute bottom-2 right-2 z-10 rounded bg-black/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
