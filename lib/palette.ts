const pitchToCssVar: Record<string, string> = {
  C: "var(--pitch-c)",
  G: "var(--pitch-g)",
  D: "var(--pitch-d)",
  A: "var(--pitch-a)",
  E: "var(--pitch-e)",
  B: "var(--pitch-b)",
  "F#": "var(--pitch-fs)",
  Db: "var(--pitch-db)",
  Ab: "var(--pitch-ab)",
  Eb: "var(--pitch-eb)",
  Bb: "var(--pitch-bb)",
  F: "var(--pitch-f)",
};

export function pitchColor(pitch: string): string {
  return pitchToCssVar[pitch] ?? "var(--text-secondary)";
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
