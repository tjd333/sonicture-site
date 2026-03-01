import React from 'react';

interface TaglineProps {
  children: React.ReactNode;
}

export function Tagline({ children }: TaglineProps) {
  return (
    <p className="learn-tagline">{children}</p>
  );
}
