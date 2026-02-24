interface Props {
  slug: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export function SonictureImage({ slug, alt, priority, className }: Props) {
  return (
    <picture className={className}>
      <source
        type="image/avif"
        srcSet={`
          /gallery/${slug}/sonicture-1080w.avif 1080w,
          /gallery/${slug}/sonicture-1920w.avif 1920w,
          /gallery/${slug}/sonicture-3840w.avif 3840w
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <source
        type="image/webp"
        srcSet={`
          /gallery/${slug}/sonicture-1080w.webp 1080w,
          /gallery/${slug}/sonicture-1920w.webp 1920w,
          /gallery/${slug}/sonicture-3840w.webp 3840w
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <img
        src={`/gallery/${slug}/sonicture-1920w.webp`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
