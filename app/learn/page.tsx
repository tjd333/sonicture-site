import type { Metadata } from 'next';
import { LearnSection } from '@/components/learn/LearnSection';
import { VisualGrammarElement } from '@/components/learn/VisualGrammarElement';
import { NotationBridge } from '@/components/learn/NotationBridge';
import { PullQuote } from '@/components/learn/PullQuote';
import { Tagline } from '@/components/learn/Tagline';
import { DetailCropImage } from '@/components/learn/DetailCropImage';
import './learn.css';

export const metadata: Metadata = {
  title: 'How It Works | Sonicture',
  description:
    'Learn to read a sonicture. A visual grammar that maps pitch to color, intensity to thickness, percussion to spikes, and melody to a continuous thread.',
};

/* \u2550\u2550\u2550 VISUAL GRAMMAR DATA \u2550\u2550\u2550
 * Each element maps to a detail crop from the reference sonicture.
 * Detail crops from "Studying" reference sonicture.
 * Images optimized as AVIF/WebP at 1080/1920/3840 breakpoints in /public/learn/.
 */

const grammarElements = [
  {
    heading: 'The center is the song\u2019s harmonic identity.',
    keyword: 'center',
    body: [
      'A gradient at the core represents the global tonal character of the song, its home key, its gravitational center. Everything else orbits this identity.',
    ],
    imageSrc: '/learn/07-center-gradient',
    imageAlt: 'Detail crop of the sonicture core showing the harmonic identity gradient',
    aspectRatio: 1,
    annotations: [],
  },
  {
    heading: 'Color is pitch.',
    keyword: 'Color',
    body: [
      'Each note in the musical scale has a specific color. The colors are not arbitrary. Pitches that sound close together produce colors that look close together. The perceptual distance between notes is preserved in the perceptual distance between colors.',
      'When the harmony is simple, two or three notes sounding together, you see clean, distinct bands of color within each ring. When the harmony is complex, the colors layer. At close inspection, a musician can identify the chord.',
    ],
    imageSrc: '/learn/01-color-bands',
    imageAlt: 'Detail crop showing distinct color bands within a ring \u2014 amber (G), green (B), olive-gold (D)',
    aspectRatio: 1700 / 1200,
    annotations: [],
    hasNotationBridge: true,
  },
  {
    heading: 'Thickness is intensity.',
    keyword: 'Thickness',
    body: [
      'Loud passages produce thick rings. Quiet passages produce thin ones. The dynamic arc of the entire song, where it builds, where it breathes, is visible as the rings thicken and thin from center to edge.',
    ],
    imageSrc: '/learn/02-thickness',
    imageAlt: 'Detail crop showing rings growing from thin to thick across a crescendo',
    aspectRatio: 1800 / 1300,
    annotations: [],
  },
  {
    heading: 'Spikes are percussion.',
    keyword: 'Spikes',
    body: [
      'The sharp lines radiating outward from the rings capture percussive energy: the attacks, hits, and transients that give music its forward motion. Different frequency ranges produce different visual signatures. The weight of a kick drum, the crack of a snare, the shimmer of a cymbal \u2014 each appear with distinct character.',
    ],
    imageSrc: '/learn/03-spikes',
    imageAlt: 'Detail crop showing spike variations radiating outward from the ring edge',
    aspectRatio: 1800 / 1200,
    annotations: [],
  },
  {
    heading: 'Drift and gaps map the song\u2019s structure.',
    keyword: 'Drift and gaps',
    body: [
      'A song that stays in one key produces concentric rings, stable, centered, gravitationally anchored. A song that moves through different harmonic territory produces rings that visibly drift, pulled toward the new tonal center. The degree of drift reveals how far the music wanders from home.',
      'Where the rings separate, the music measurably changes character. A new section begins. These are not always the familiar verse and chorus boundaries. They are moments where the musical properties shift together: harmonic vocabulary, dynamic level, rhythmic density, timbral character. The gap is the evidence.',
    ],
    imageSrc: '/learn/05-section-gap',
    imageAlt: 'Detail crop showing a structural boundary where ring character and spacing visibly change',
    aspectRatio: 1400 / 1300,
    annotations: [],
  },
  {
    heading: 'The melody line is the artist\u2019s voice.',
    keyword: 'melody line',
    body: [
      'A continuous white thread traces the pitch of the vocal through the song. It captures not just which notes are sung but how: the smooth slides, the sudden leaps, the held moments. Where the voice is absent, a faint ghost line marks the instrumental passage.',
    ],
    imageSrc: '/learn/06-melody-thread',
    imageAlt: 'Detail crop showing the vocal melody thread as a chain of bright white dots across the rings',
    aspectRatio: 1000 / 800,
    annotations: [],
  },
];

export default function LearnPage() {
  return (
    <main className="learn-page">

      {/* ═══ SECTION 1: THE CORE IDEA ═══ */}
      <LearnSection id="core-idea" variant="centered">
        <p className="learn-opening">
          Sound and sight are both human senses processing vibration.
        </p>
        <div className="learn-prose">
          <p>
            Sound reaches us as pressure waves at audible frequencies. Light
            reaches us as electromagnetic waves at visible frequencies. Both are
            vibration. Both are interpreted by perceptual systems that respond to
            frequency, intensity, and pattern.
          </p>
          <p>
            Sonicture is a system that transforms music from one of these senses
            to the other, from what you hear into what you see. The transformation
            is accurate: every visual element is controlled by a specific,
            measurable property of the audio. Nothing is arbitrary. If you see it,
            the music put it there.
          </p>
          <p>
            The transformation is deterministic. The same song will always produce
            the same sonicture, every time, without variation. A sonicture is a
            song&rsquo;s visual fingerprint.
          </p>
        </div>
      </LearnSection>

      {/* ═══ SECTION 2: HOW TO READ A SONICTURE ═══ */}
      <LearnSection id="how-to-read" variant="visual-grammar">

        <p className="learn-section-headline">
          Every element is evidence.
        </p>

        {/* 2a: Orientation */}
        <div className="vg-orientation">
          <div className="vg-orientation__image">
            <DetailCropImage
              basePath="/learn/00-reference-full"
              alt="Full reference sonicture. Time flows outward from center to edge like tree rings."
              aspectRatio={1}
              lazy={false}
            />
            <span className="vg-orientation__label vg-orientation__label--center">
              beginning
            </span>
            <span className="vg-orientation__label vg-orientation__label--edge">
              end &rarr;
            </span>
          </div>
          <p className="learn-prose learn-prose--narrow">
            A sonicture reads like a tree trunk. The center is the first moment of
            the song. The outermost ring is the last. Time flows outward, and each
            ring captures a moment in the music&rsquo;s life.
          </p>
        </div>

        {/* 2b: Visual grammar elements (×7) */}
        {grammarElements.map((el, i) => (
          <VisualGrammarElement
            key={i}
            heading={el.heading}
            keyword={el.keyword}
            body={el.body}
            imageSrc={el.imageSrc}
            imageAlt={el.imageAlt}
            annotations={el.annotations}
            aspectRatio={el.aspectRatio}
            side={i % 2 === 0 ? 'left' : 'right'}
          >
            {el.hasNotationBridge && <NotationBridge />}
          </VisualGrammarElement>
        ))}

        {/* 2c: Lyrics observation — Ive-style reveal */}
        <div className="vg-lyrics-aside">
          <p className="vg-lyrics-aside__text">
            Look closer at any of these images. The faint text woven into
            the rings is the song&rsquo;s lyrics, positioned at the exact
            moment each word is sung. At normal viewing distance they read
            as texture. At this scale, they become legible &mdash; another
            layer of the music preserved in its visual form.
          </p>
        </div>
      </LearnSection>

      {/* ═══ SECTION 3: WHY IT WORKS ═══ */}
      <LearnSection id="why-it-works" variant="centered">
        <p className="learn-section-headline">
          Beauty is a consequence of accuracy.
        </p>
        <div className="learn-prose">
          <p>
            A sonicture is a visual form of music. Not artwork about music, but a
            direct transformation of musical structure into visual structure.
          </p>
          <p>
            This produces something remarkable: objective beauty. The colors,
            shapes, and patterns of a sonicture are not chosen for aesthetic effect.
            They emerge from the music itself. When a song is musically coherent,
            when its harmony, rhythm, dynamics, and melody work together, its
            sonicture is visually coherent too. Beauty follows from accuracy.
          </p>
        </div>

        <PullQuote>
          The only aesthetic choice is a single starting point: which color
          represents the note <span style={{ color: 'var(--pitch-c)' }}>C</span>. We chose warm coral, because <span style={{ color: 'var(--pitch-c)' }}>C</span> is home. It is
          the root of the most universal key, the note that grounds everything
          else. The color had to feel the same way: warm, human, familiar.
          Every other color, and every relationship between them, follows from
          the music.
        </PullQuote>

        <div className="learn-prose">
          <p>
            The mapping between what you hear and what you see preserves real
            perceptual relationships. Pitches that sound similar produce colors
            that look similar. The visual distance between notes mirrors the
            audible distance between them. The transformation is truthful, and the
            truth is what produces the beauty.
          </p>
          <p>
            Each sonicture is as unique as the song it represents. Different audio
            cannot produce the same visual output. Like fingerprints, two
            sonictures might appear similar at a glance, but they are structurally,
            provably distinct. If it sounds different, it looks different.
          </p>
        </div>
      </LearnSection>

      {/* ═══ SECTION 4: A NEW CATEGORY ═══ */}
      <LearnSection id="new-category" variant="centered">
        <p className="learn-section-headline">
          Transformation, not generation.
        </p>
        <div className="learn-prose learn-prose--manifesto">
          <p>
            A sonicture is a truthful transformation of music, not a creative
            interpretation.
          </p>
          <p>
            A waveform or spectrogram shows audio data with precision but
            communicates nothing about musical meaning: what key the song is in,
            where the structure changes, how the harmony moves. A generative AI
            visualization creates imagery from music, but the result is an
            interpretation, a new creation inspired by the audio, not a
            representation of it. Change the model or the prompt and you get
            something entirely different from the same song.
          </p>
          <p>
            A sonicture cannot vary. The same song will always produce the same
            sonicture, because the visual <em>is</em> the audio.
          </p>
          <p>
            This is the distinction between transformation and generation.
            Generation creates something new that is inspired by its input.
            Transformation preserves the input in another form. A sonicture does
            not generate art from music. It renders music as visual structure,
            faithfully, completely, and without creative intervention.
          </p>
          <p>
            The familiar question about music is: <em>did you hear the new
            song?</em> Sonicture makes a new question possible.
          </p>
        </div>

        <Tagline>have you seen it?</Tagline>
      </LearnSection>

      {/* ═══ SECTION 5: INFLUENCES ═══ */}
      <LearnSection id="influences" variant="credits" noWhisper>
        <p className="learn-section-headline learn-section-headline--quiet">
          Three ideas that shaped the system.
        </p>
        <p className="learn-credits__intro">
          Sonicture&rsquo;s philosophy draws from three thinkers whose ideas
          shaped its design principles.
        </p>

        <div className="learn-credits__block">
          <h3 className="learn-credits__name">
            David Deutsch
            <span className="learn-credits__role">
              physicist, author of <cite>The Beginning of Infinity</cite>
            </span>
          </h3>
          <p className="learn-credits__body">
            Deutsch argues that the best explanation of any phenomenon is one that
            is hard to vary: change any detail and the explanation breaks. This
            principle governs sonicture&rsquo;s mapping. Every visual element is
            controlled by the music, and altering any element would misrepresent
            the song. Deutsch&rsquo;s deeper claim is that objective beauty exists,
            that a flower is beautiful not because human eyes evolved to find it
            pleasing, but because its structure is genuinely, universally coherent.
            Sonicture aspires to the same standard: beauty that is real because the
            underlying structure is true. It aspires to reveal{' '}
            <em className="learn-credits__highlight">the infinity of music</em>,
            structure without end, meaning without limit.
          </p>
        </div>

        <div className="learn-credits__block">
          <h3 className="learn-credits__name">
            Jacob Collier
            <span className="learn-credits__role">
              musician, composer, harmonic explorer
            </span>
          </h3>
          <p className="learn-credits__body">
            Collier hears music at a depth that almost no living musician can
            match: microtonal perfect pitch, fluency in quarter-tones and harmonic
            subtlety, and densely layered compositions performed entirely by
            himself. His work carries the spirit of Bach, a generational
            understanding of harmony. Collier&rsquo;s standard for sonicture is
            musical truth at the highest resolution: could an expert of his caliber
            examine a sonicture and verify that it accurately represents the
            harmonic content of the song? If the color says C major, it must be C
            major. If the drift shows a modulation, the modulation must be real.
          </p>
        </div>

        <div className="learn-credits__block">
          <h3 className="learn-credits__name">
            Rick Rubin
            <span className="learn-credits__role">
              producer, author of <cite>The Creative Act</cite>
            </span>
          </h3>
          <p className="learn-credits__body">
            Rubin has shaped the recorded work of artists as diverse as Johnny
            Cash, Beastie Boys, Slayer, Adele, and Nine Inch Nails, spanning
            genres not by imposing a style but by listening for what is essential in
            each artist&rsquo;s expression and stripping away everything else. His
            philosophy is reduction in service of feeling: trust the source.
            Sonicture adds nothing decorative. The visual emerges entirely from the
            music. Rubin is the bridge between the science and the art, the
            reminder that accuracy without feeling is just data, and that the
            purpose of truthful mapping is not precision for its own sake but the
            revelation of what the music already contains.
          </p>
        </div>
      </LearnSection>

      {/* ═══ PAGE FOOTER ═══ */}
      <footer className="learn-footer">
        <a href="/#gallery" className="learn-footer__link">
          Return to the gallery &rarr;
        </a>
        <a href="/#contact" className="learn-footer__link learn-footer__link--accent">
          See your music &rarr;
        </a>
      </footer>
    </main>
  );
}
