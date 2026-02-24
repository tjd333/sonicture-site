import { HeroSonicture } from "@/components/HeroSonicture";
import { HeroTagline } from "@/components/HeroTagline";
import { GalleryContainer } from "@/components/GalleryContainer";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ContactForm } from "@/components/ContactForm";
import { WhisperLine } from "@/components/WhisperLine";

export default function Home() {
  return (
    <main>
      <section id="hero" className="section-viewport hero">
        <HeroSonicture />
        <HeroTagline />
        <div className="hero-scroll-hint" aria-hidden="true" />
      </section>

      <WhisperLine />

      <section id="gallery">
        <GalleryContainer />
      </section>

      <WhisperLine />

      <section id="philosophy" className="section-tall">
        <PhilosophySection />
      </section>

      <WhisperLine />

      <section id="contact" className="section-viewport">
        <ContactForm />
      </section>
    </main>
  );
}
