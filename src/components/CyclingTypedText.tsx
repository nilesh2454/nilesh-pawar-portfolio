import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const CyclingTypedText: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Java Developer', 'MERN Stack Developer', 'AI Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="text-lg text-green-800">
      <span ref={typedRef}></span>
    </div>
  );
};

export default CyclingTypedText;
