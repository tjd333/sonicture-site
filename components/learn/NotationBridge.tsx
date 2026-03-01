import React from 'react';

/**
 * G major chord on a treble clef staff with note heads colored
 * by the Sonicture OKLCH palette:
 *   G = #F3BB7D (amber)
 *   B = #9DE698 (green)
 *   D = #D4D087 (olive-gold)
 *
 * No separate color swatch. The notation itself carries the color.
 */
export function NotationBridge() {
  return (
    <figure className="notation-bridge">
      <svg
        viewBox="0 0 280 180"
        xmlns="http://www.w3.org/2000/svg"
        className="notation-bridge__svg"
        role="img"
        aria-label="G major chord on a treble clef staff with note heads colored by sonicture palette: G in amber, B in green, D in olive-gold"
      >
        {/* ── Staff Lines ── */}
        <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
          <line x1="30" y1="55" x2="220" y2="55" />
          <line x1="30" y1="70" x2="220" y2="70" />
          <line x1="30" y1="85" x2="220" y2="85" />
          <line x1="30" y1="100" x2="220" y2="100" />
          <line x1="30" y1="115" x2="220" y2="115" />
        </g>

        {/* ── Treble Clef ── */}
        <text
          x="38"
          y="108"
          fontFamily="serif"
          fontSize="66"
          fill="rgba(255,255,255,0.5)"
        >
          𝄞
        </text>

        {/* ── Colored Note Heads ── */}
        {/* Staff: E4=115, F4=107.5, G4=100, A4=92.5, B4=85, C5=77.5, D5=70, E5=62.5, F5=55 */}

        {/* G4 on second line from bottom (y=100) */}
        <ellipse cx="140" cy="100" rx="9" ry="6.5"
          fill="#F3BB7D" transform="rotate(-10,140,100)" />

        {/* B4 on middle line (y=85) */}
        <ellipse cx="140" cy="85" rx="9" ry="6.5"
          fill="#9DE698" transform="rotate(-10,140,85)" />

        {/* D5 on second line from top (y=70) */}
        <ellipse cx="140" cy="70" rx="9" ry="6.5"
          fill="#D4D087" transform="rotate(-10,140,70)" />

        {/* Stem */}
        <line x1="149" y1="70" x2="149" y2="44"
          stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

        {/* ── Pitch labels beside note heads ── */}
        <text x="160" y="104" fontFamily="'Space Mono', monospace" fontSize="10"
          fill="#F3BB7D" opacity="0.8">G</text>
        <text x="160" y="89" fontFamily="'Space Mono', monospace" fontSize="10"
          fill="#9DE698" opacity="0.8">B</text>
        <text x="160" y="74" fontFamily="'Space Mono', monospace" fontSize="10"
          fill="#D4D087" opacity="0.8">D</text>
      </svg>

      <figcaption className="notation-bridge__caption">
        G major chord, colored by sonicture palette
      </figcaption>
    </figure>
  );
}
