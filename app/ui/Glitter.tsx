"use client"

import React, { useState, useEffect } from 'react';

const Glitter: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      // className={`fixed top-[${position.y}] left-[${position.x}] w-16 h-16 bg-gold rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-2xl`}
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        backgroundColor: 'rgba(229, 228, 226, 1)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        boxShadow: "0 0 100px 20px rgba(229, 228, 226, .5), 0 0 400px 40px rgba(229, 228, 226, 1), 0 0 600px 60px rgba(229, 228, 226, 1)",
      }}
    />
  );
};

export default Glitter;
