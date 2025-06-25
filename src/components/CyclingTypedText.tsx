import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const strings = [
  'Java Developer',
  'MERN Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
];

const CyclingTypedText: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
      // Set the cursor color and size for both light and dark mode
      const style = document.createElement('style');
      style.innerHTML = `
        .typed-cursor {
          color: #065f46 !important;
          font-size: inherit !important;
          line-height: 1 !important;
        }
        html.dark .typed-cursor {
          color: #bbf7d0 !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        typed.destroy();
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <span ref={typedRef} className="text-green-800 dark:text-green-200 text-base sm:text-2xl" />
  );
};

export default CyclingTypedText;
