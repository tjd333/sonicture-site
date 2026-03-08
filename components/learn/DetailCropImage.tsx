import React from 'react';

export interface Annotation {
  label: string;
  /** Percentage from left (0–100) */
  x: number;
  /** Percentage from top (0–100) */
  y: number;
}

interface DetailCropImageProps {
  /** Base path without extension, e.g. "/gallery/learn/color-bands" */
  basePath: string;
  alt: string;
  annotations?: Annotation[];
  /** Aspect ratio as width/height, e.g. 3/2 = 1.5. Used for CLS-free container. */
  aspectRatio?: number;
  /** Lazy load by default; set false for above-fold images */
  lazy?: boolean;
  /** Available breakpoint widths. Only reference files that exist.
   *  Defaults to [1080]. Pass [1080, 1920, 3840] for full-size source images. */
  widths?: number[];
}

/**
 * Responsive <picture> element with AVIF/WebP sources at available breakpoints.
 * Annotations render as positioned HTML spans over the image.
 *
 * Only references breakpoint files that actually exist (controlled via widths prop).
 * Full-size .webp is always used as the <img> fallback.
 */
export function DetailCropImage({
  basePath,
  alt,
  annotations = [],
  aspectRatio = 1.5,
  lazy = true,
  widths = [1080],
}: DetailCropImageProps) {
  const avifSrcSet = widths.map(w => `${basePath}-${w}w.avif ${w}w`).join(', ');
  const webpSrcSet = widths.map(w => `${basePath}-${w}w.webp ${w}w`).join(', ');

  return (
    <div
      className="detail-crop"
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      <picture>
        <source
          type="image/avif"
          srcSet={avifSrcSet}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
        <img
          src={`${basePath}.webp`}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          className="detail-crop__img"
        />
      </picture>

      {annotations.map((a, i) => (
        <span
          key={i}
          className="detail-crop__annotation"
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
        >
          {a.label}
        </span>
      ))}
    </div>
  );
}
