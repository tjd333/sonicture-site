"use client";

import { galleryItems } from "@/content/gallery";
import { GalleryRoom } from "./GalleryRoom";
import { useRef, useState, useEffect } from "react";

export function GalleryContainer() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );
            if (!isNaN(index)) setActiveIndex(index);
          }
        }
      },
      { root: el, threshold: 0.6 }
    );

    const rooms = el.querySelectorAll(".gallery-room");
    rooms.forEach((room) => observer.observe(room));

    return () => observer.disconnect();
  }, []);

  function scrollTo(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const room = el.children[index] as HTMLElement;
    room?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-heading">
          Beauty emerges from truth.
        </h2>
        <p className="gallery-subheading">
          Explore the latent geometry of music.
        </p>
      </div>

      <div className="gallery-scroll" ref={scrollRef}>
        {galleryItems.map((item, i) => (
          <GalleryRoom key={item.slug} item={item} index={i} />
        ))}
      </div>

      <div className="gallery-dots" role="tablist" aria-label="Gallery navigation">
        {galleryItems.map((item, i) => (
          <button
            key={item.slug}
            className={`gallery-dot ${i === activeIndex ? "gallery-dot--active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`${item.title} by ${item.artist}`}
            aria-selected={i === activeIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
