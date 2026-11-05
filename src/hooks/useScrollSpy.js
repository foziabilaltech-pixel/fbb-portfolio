import { useState, useEffect } from 'react';

/*
  useScrollSpy hook
  -----------------
  Replicates the scroll-based active navigation from the original script.js.
  Watches the page scroll (throttled with requestAnimationFrame) and returns
  the id of the section currently in view, so the Navbar can highlight the
  matching nav link.
*/
export default function useScrollSpy(sectionIds, offset = 80) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          current = id;
        }
      }

      // Near the top of the page -> Home is active
      if (window.scrollY + offset < 100) {
        current = sectionIds[0];
      }

      setActiveSection(current);
    };

    // Throttled scroll listener (performance optimized, same idea as original)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateActiveSection(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}