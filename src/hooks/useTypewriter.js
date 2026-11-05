import { useState, useEffect } from 'react';

/*
  useTypewriter hook
  ------------------
  Replicates the typewriter effect from the original script.js exactly:
  - Types each profession at 150ms per character
  - Deletes at 75ms per character
  - Pauses 2000ms at the end of a word
  - Pauses 500ms before starting the next word
  - Loops forever through the professions array

  Returns the text that should currently be displayed (without the cursor).
*/
export default function useTypewriter(words, prefix = "I'm a ") {
  const [text, setText] = useState('');

  useEffect(() => {
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      const currentProfession = words[professionIndex];
      let speed;

      if (isDeleting) {
        charIndex--;
        speed = 75; // deleting speed
      } else {
        charIndex++;
        speed = 150; // typing speed
      }

      setText(prefix + currentProfession.substring(0, charIndex));

      if (!isDeleting && charIndex === currentProfession.length) {
        speed = 2000; // pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % words.length;
        speed = 500; // pause before next word
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 150);

    // Cleanup: stop the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [words, prefix]);

  return text;
}