export interface GalleryItem {
  slug: string;
  artist: string;
  title: string;
  album?: string;
  year?: number;
  key: { estimated: string; confidence: number };
  tempo: { bpm: number };
  duration: number;
  dominantPitches: string[];
  sectionCount: number;
  vocalPresencePct?: number;
  dynamicRangeDb: number;
  climaxPct: number;
  a4Hz: number;
  sampleRate: number;
  prose?: string;
}
