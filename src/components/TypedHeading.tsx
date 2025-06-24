
import { useEffect, useRef } from 'react';

type TypedHeadingProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypedHeading({ text, speed = 100, className = "" }: TypedHeadingProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let currentIndex = 0;
    element.textContent = '';

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        element.textContent += text[currentIndex];
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <span className={`typing-text inline-block ${className}`} ref={elementRef}>
      {/* Text will be populated by useEffect */}
    </span>
  );
}
