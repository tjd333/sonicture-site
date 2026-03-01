import Link from 'next/link';

/**
 * Philosophy teaser on the main scroll.
 * Replaces the full PhilosophySection + PaletteWheel.
 * Links to /learn for the deep dive.
 */
export function PhilosophyTeaser() {
  return (
    <div className="philosophy-teaser">
      <p className="philosophy-teaser__text">
        Sound and sight are both senses processing vibration. Sonicture is a
        system that transforms music from what you hear into what you see,
        accurately, deterministically, and without interpretation.
      </p>
      <Link href="/learn" className="philosophy-teaser__cta">
        Learn how it works &rarr;
      </Link>
    </div>
  );
}
