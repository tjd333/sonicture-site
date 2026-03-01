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
}

/**
 * Responsive <picture> element with AVIF/WebP sources at 3 breakpoints.
 * Annotations render as positioned HTML spans over the image.
 *
 * Expects files at:
 *   {basePath}-1080w.avif, {basePath}-1920w.avif, {basePath}-3840w.avif
 *   {basePath}-1080w.webp, {basePath}-1920w.webp, {basePath}-3840w.webp
 */
export function DetailCropImage({
  basePath,
  alt,
  annotations = [],
  aspectRatio = 1.5,
  lazy = true,
}: DetailCropImageProps) {
  return (
    <div
      className="detail-crop"
      style={{ aspectRatio: `${aspectRatio}` }}
    >
      <picture>
        <source
          type="image/avif"
          srcSet={`${basePath}-1080w.avif 1080w, ${basePath}-1920w.avif 1920w, ${basePath}-3840w.avif 3840w`}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
        <source
          type="image/webp"
          srcSet={`${basePath}-1080w.webp 1080w, ${basePath}-1920w.webp 1920w, ${basePath}-3840w.webp 3840w`}
          sizes="(max-width: 768px) 90vw, 50vw"
        />
        <img
          src={`${basePath}-1920w.webp`}
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
