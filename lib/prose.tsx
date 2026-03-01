import { type ReactNode } from "react";
import { pitchColor } from "./palette";

/**
 * Renders gallery prose with two typographic treatments:
 *  1. Bold quantitative data (digits + measurement units)
 *  2. Pitch-class letters colored by the OKLCH palette
 *
 * Rules:
 *  - "A" is colored only when it appears mid-sentence as a pitch
 *    reference (e.g. "C and A dominate"), never when it starts a
 *    sentence as the article (e.g. "A white vocal thread...")
 *  - Lowercase "a" is never colored
 *  - Quantitative matches take priority over pitch-class matches
 *    in the rare case of overlap (e.g. "5 dB" won't color "B")
 */

interface Token {
  index: number;
  length: number;
  type: "quant" | "pitch";
  text: string;
  pitch?: string;
}

/* Matches: 5 decibels, 6.7 dB, 14%, 38-second, 28 seconds, 7-minute, etc. */
const QUANT_RE =
  /\b\d+\.?\d*\s*(?:%|[-–]?\s*(?:seconds?|minutes?|dB|decibels?|percent|semitones?|Hz))/g;

/* Matches standalone pitch-class names including A (filtered contextually below). */
const PITCH_RE = /\b(Ab|Bb|Db|Eb|F#|[A-G])\b/g;

/**
 * Returns true when a standalone "A" at `index` is the English article
 * rather than a pitch-class reference. Heuristic: A is the article when
 * it sits at the very start of the prose or immediately after sentence-
 * ending punctuation (". ", "! ", "? ").
 */
function isArticleA(prose: string, index: number): boolean {
  if (index === 0) return true;
  const before = prose.slice(Math.max(0, index - 2), index);
  return /[.!?]\s$/.test(before);
}

export function renderProse(prose: string): ReactNode[] {
  const tokens: Token[] = [];

  /* ---- collect quantitative matches ---- */
  QUANT_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = QUANT_RE.exec(prose)) !== null) {
    tokens.push({
      index: m.index,
      length: m[0].length,
      type: "quant",
      text: m[0],
    });
  }

  /* ---- collect pitch-class matches (skip overlaps and article "A") ---- */
  PITCH_RE.lastIndex = 0;
  while ((m = PITCH_RE.exec(prose)) !== null) {
    const overlaps = tokens.some(
      (t) => m!.index >= t.index && m!.index < t.index + t.length,
    );
    if (overlaps) continue;

    /* Skip standalone "A" when it reads as the English article */
    if (m[0] === "A" && isArticleA(prose, m.index)) continue;

    tokens.push({
      index: m.index,
      length: m[0].length,
      type: "pitch",
      text: m[0],
      pitch: m[1],
    });
  }

  /* ---- sort by position and build output ---- */
  tokens.sort((a, b) => a.index - b.index);

  const result: ReactNode[] = [];
  let cursor = 0;

  for (const token of tokens) {
    if (token.index > cursor) {
      result.push(prose.slice(cursor, token.index));
    }

    if (token.type === "quant") {
      result.push(
        <strong key={`q${token.index}`}>{token.text}</strong>,
      );
    } else {
      result.push(
        <span
          key={`p${token.index}`}
          style={{ color: pitchColor(token.pitch!) }}
        >
          {token.text}
        </span>,
      );
    }

    cursor = token.index + token.length;
  }

  if (cursor < prose.length) {
    result.push(prose.slice(cursor));
  }

  return result;
}
