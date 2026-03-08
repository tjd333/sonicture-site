'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/**
 * Scroll-reveal navigation.
 * Visible at top of page, hides on scroll down, reappears on scroll up.
 * Uses the site design tokens (Space Mono, whisper opacity, coral accent).
 */
export function Nav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastScrollY.current;

        // Show when: at top, scrolling up, or barely scrolled
        if (y < 80 || delta < -5) {
          setVisible(true);
        }
        // Hide when: scrolling down past threshold
        else if (delta > 5 && y > 200) {
          setVisible(false);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav${visible ? '' : ' site-nav--hidden'}`}>
      <Link href="/" className="site-nav__logo">
        sonicture
      </Link>
      <div className="site-nav__links">
        <Link href="/learn" className="site-nav__link">
          learn
        </Link>
      </div>
    </nav>
  );
}
