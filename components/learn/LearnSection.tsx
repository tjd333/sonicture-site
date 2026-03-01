import React from 'react';

type LearnSectionVariant = 'centered' | 'visual-grammar' | 'credits';

interface LearnSectionProps {
  id?: string;
  variant?: LearnSectionVariant;
  children: React.ReactNode;
  /** Omit the whisper line at the bottom (e.g. last section) */
  noWhisper?: boolean;
}

export function LearnSection({
  id,
  variant = 'centered',
  children,
  noWhisper = false,
}: LearnSectionProps) {
  return (
    <>
      <section
        id={id}
        className={`learn-section learn-section--${variant}`}
      >
        <div className="learn-section__inner">
          {children}
        </div>
      </section>
      {!noWhisper && <div className="learn-whisper" role="separator" />}
    </>
  );
}
