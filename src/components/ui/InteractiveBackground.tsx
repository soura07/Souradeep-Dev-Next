'use client';

import React from 'react';

const Pattern = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Soft ambient glow from top */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 40% at 50% 0%, rgba(14, 165, 233, 0.06) 0%, transparent 60%)',
        }}
      />
      {/* Vignette effect for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
}

export default Pattern;
