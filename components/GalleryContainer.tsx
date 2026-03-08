"use client";

import { galleryItems } from "@/content/gallery";
import { GalleryRoom } from "./GalleryRoom";
import { useRef, useState, useEffect, useCallback } from "react";

export function GalleryContainer() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = galleryItems.length;

  /* Progress line: segment highlight for current room */
  const segmentWidth = 100 / total;
  const segmentLeft = activeIndex * segmentWidth;

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const room = el.children[index] as HTMLElement;
    room?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  const scrollPrev = useCallback(() => {
    if (activeIndex > 0) scrollTo(activeIndex - 1);
  }, [activeIndex, scrollTo]);

  const scrollNext = useCallback(() => {
    if (activeIndex < total - 1) scrollTo(activeIndex + 1);
  }, [activeIndex, total, scrollTo]);

  /* Keyboard navigation */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    }

    /* Only bind when gallery section is in viewport */
    const section = scrollRef.current?.closest(".gallery-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("keydown", handleKey);
        } else {
          window.removeEventListener("keydown", handleKey);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKey);
    };
  }, [scrollPrev, scrollNext]);

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-heading">
          beauty emerges from truth
        </h2>
        <p className="gallery-subheading">
          explore the latent geometry of music
        </p>
      </div>

      <div className="gallery-viewport">
        {/* Left spike arrow — percussion taper geometry */}
        <button
          className={`gallery-arrow gallery-arrow--left${activeIndex === 0 ? " gallery-arrow--hidden" : ""}`}
          onClick={scrollPrev}
          aria-label="Previous sonicture"
        >
          <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true">
            <path d="M28,7 C20,7.5 10,8.5 0,10 C10,11.5 20,12.5 28,13 Z" fill="currentColor" />
          </svg>
        </button>

        <div className="gallery-scroll" ref={scrollRef}>
          {galleryItems.map((item, i) => (
            <GalleryRoom key={item.slug} item={item} index={i} />
          ))}
        </div>

        {/* Right spike arrow — percussion taper geometry */}
        <button
          className={`gallery-arrow gallery-arrow--right${activeIndex === total - 1 ? " gallery-arrow--hidden" : ""}`}
          onClick={scrollNext}
          aria-label="Next sonicture"
        >
          <svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true">
            <path d="M0,7 C8,7.5 18,8.5 28,10 C18,11.5 8,12.5 0,13 Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Progress line — room segment highlight */}
      <div className="gallery-progress" aria-hidden="true">
        <div
          className="gallery-progress__fill"
          style={{ left: `${segmentLeft}%`, width: `${segmentWidth}%` }}
        />
      </div>
    </div>
  );
}
