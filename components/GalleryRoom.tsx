import type { GalleryItem } from "@/lib/types";
import { pitchColor, formatDuration } from "@/lib/palette";
import { SonictureImage } from "./SonictureImage";

interface Props {
  item: GalleryItem;
  index: number;
}

export function GalleryRoom({ item, index }: Props) {
  const confidencePct = Math.round(item.key.confidence * 100);

  return (
    <div className="gallery-room" data-index={index}>
      <div className="gallery-image">
        <SonictureImage
          slug={item.slug}
          alt={`Sonicture of '${item.title}' by ${item.artist}`}
          priority={index === 0}
        />
      </div>

      <div className="gallery-companion">
        {/* Identity block: title above artist */}
        <div className="companion-identity">
          <h3 className="companion-title">{item.title}</h3>
          <span className="companion-artist">{item.artist}</span>
          {item.album && (
            <span className="companion-album">
              {item.album}
              {item.year ? ` \u00B7 ${item.year}` : ""}
            </span>
          )}
        </div>

        {/* Whisper line: identity / specs boundary */}
        <hr className="companion-whisper-line" />

        {/* Specs bar: pipe-delimited, Space Mono */}
        <div className="companion-specs">
          <span>{item.tempo.bpm} BPM</span>
          <span className="specs-divider">|</span>
          <span>EST. KEY: {item.key.estimated} [{confidencePct}%]</span>
          <span className="specs-divider">|</span>
          <span>A4={item.a4Hz}Hz</span>
          <span className="specs-divider">|</span>
          <span>{item.sampleRate}Hz</span>
          <span className="specs-divider">|</span>
          <span>{formatDuration(item.duration)}</span>
        </div>

        {/* Dominant pitches with colored squares */}
        <div className="companion-pitches">
          {item.dominantPitches.map((p) => (
            <span key={p} className="pitch-swatch-group">
              <span
                className="pitch-swatch"
                style={{ background: pitchColor(p) }}
              />
              <span className="pitch-label">{p}</span>
            </span>
          ))}
        </div>

        {/* Stats matrix: 4-column grid */}
        <div className="companion-matrix">
          <div className="matrix-cell">
            <span className="matrix-label">SECTIONS</span>
            <span className="matrix-value">{item.sectionCount}</span>
          </div>
          <div className="matrix-cell">
            <span className="matrix-label">VOCAL PRESENCE</span>
            <span className="matrix-value">
              {item.vocalPresencePct !== undefined
                ? `${item.vocalPresencePct}%`
                : "\u2014"}
            </span>
          </div>
          <div className="matrix-cell">
            <span className="matrix-label">DYNAMIC RANGE</span>
            <span className="matrix-value">{item.dynamicRangeDb} dB</span>
          </div>
          <div className="matrix-cell">
            <span className="matrix-label">CLIMAX</span>
            <span className="matrix-value">{item.climaxPct}%</span>
          </div>
        </div>

        {/* Whisper line: matrix / prose boundary */}
        {item.prose && <hr className="companion-whisper-line" />}

        {/* Interpretive summary */}
        {item.prose && (
          <p className="companion-prose">{item.prose}</p>
        )}
      </div>
    </div>
  );
}
