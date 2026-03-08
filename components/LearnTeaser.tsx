import Link from 'next/link';

/**
 * Learn teaser on the main scroll.
 * Brief pitch linking to /learn for the deep dive.
 */
export function LearnTeaser() {
  return (
    <div className="learn-teaser">
      <p className="learn-teaser__text">
        Sound and sight are both senses processing vibration. Sonicture is a
        system that transforms music from what you hear into what you see,
        accurately, deterministically, and without interpretation.
      </p>
      <Link href="/learn" className="learn-teaser__cta">
        Learn how it works &rarr;
      </Link>
    </div>
  );
}
