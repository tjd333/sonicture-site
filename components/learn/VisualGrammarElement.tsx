import React from 'react';
import { DetailCropImage, type Annotation } from './DetailCropImage';

interface VisualGrammarElementProps {
  /** Bold keyword format heading, e.g. "Color is pitch." */
  heading: string;
  /** The keyword to bold within the heading */
  keyword: string;
  /** Body paragraphs as array of strings */
  body: string[];
  /** Base image path for DetailCropImage */
  imageSrc: string;
  imageAlt: string;
  annotations?: Annotation[];
  /** Image placement: "left" = image-left/text-right, "right" = image-right/text-left */
  side: 'left' | 'right';
  /** Aspect ratio for the crop image */
  aspectRatio?: number;
  /** Available breakpoint widths for this crop. Defaults to [1080]. */
  widths?: number[];
  /** Optional extra CSS class */
  className?: string;
  /** Additional content rendered below the body text (e.g. NotationBridge) */
  children?: React.ReactNode;
}

export function VisualGrammarElement({
  heading,
  keyword,
  body,
  imageSrc,
  imageAlt,
  annotations = [],
  side,
  aspectRatio,
  widths,
  className,
  children,
}: VisualGrammarElementProps) {
  // Split heading around keyword to render the bold portion
  const keywordIndex = heading.toLowerCase().indexOf(keyword.toLowerCase());
  const before = heading.slice(0, keywordIndex);
  const bolded = heading.slice(keywordIndex, keywordIndex + keyword.length);
  const after = heading.slice(keywordIndex + keyword.length);

  return (
    <div className={`vg-element vg-element--${side}${className ? ` ${className}` : ''}`}>
      <div className="vg-element__image">
        <DetailCropImage
          basePath={imageSrc}
          alt={imageAlt}
          annotations={annotations}
          aspectRatio={aspectRatio}
          widths={widths}
        />
      </div>
      <div className="vg-element__text">
        <h3 className="vg-element__heading">
          {before}<strong>{bolded}</strong>{after}
        </h3>
        {body.map((paragraph, i) => (
          <p key={i} className="vg-element__body">{paragraph}</p>
        ))}
        {children}
      </div>
    </div>
  );
}
