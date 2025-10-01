'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface MousePosition {
  x: number;
  y: number;
}

function InteractiveBackground(): JSX.Element {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    let rafId: number | undefined;
    
    const updateMousePosition = (e: MouseEvent): void => {
      if (!isLoaded) return;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setMousePosition({ 
          x: (e.clientX / width) * 100, 
          y: (e.clientY / height) * 100 
        });
      });
    };

    if (typeof window !== 'undefined' && isLoaded) {
      window.addEventListener('mousemove', updateMousePosition, { passive: true });
    }
    
    return () => {
      clearTimeout(timer);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', updateMousePosition);
      }
    };
  }, [isLoaded]);

  if (!isClient) {
    return <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} />;
  }

  // Theme-based colors
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'black' : 'white';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const gradientColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';

  const gridBackgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(${gridColor} 1px, transparent 1px),
      linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    backgroundPosition: '0 0, 0 0'
  };

  const mouseGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 1000px 700px at ${mousePosition.x}% ${mousePosition.y}%, 
        ${gradientColor} 0%, 
        ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 25%, 
        ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'} 50%, 
        ${isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)'} 75%, 
        transparent 100%
      )
    `
  };

  const maskedGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 800px 600px at ${mousePosition.x}% ${mousePosition.y}%, 
        ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'} 0%, 
        ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 30%, 
        transparent 70%
      )
    `,
    maskImage: `
      linear-gradient(transparent 0px, rgba(0, 0, 0, 1) 1px, rgba(0, 0, 0, 1) 1px, transparent 2px),
      linear-gradient(90deg, transparent 0px, rgba(0, 0, 0, 1) 1px, rgba(0, 0, 0, 1) 1px, transparent 2px)
    `,
    maskSize: '40px 40px',
    WebkitMaskImage: `
      linear-gradient(transparent 0px, rgba(0, 0, 0, 1) 1px, rgba(0, 0, 0, 1) 1px, transparent 2px),
      linear-gradient(90deg, transparent 0px, rgba(0, 0, 0, 1) 1px, rgba(0, 0, 0, 1) 1px, transparent 2px)
    `,
    WebkitMaskSize: '40px 40px',
    maskComposite: 'intersect' as const,
    WebkitMaskComposite: 'source-in'
  };

  const centerGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 600px 400px at 50% 45%, 
        ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'} 0%, 
        ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'} 40%, 
        transparent 80%
      )
    `
  };

  const cyanBlueGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(ellipse 400px 300px at 50% 50%, 
        rgba(6, 182, 212, 0.12) 0%, 
        rgba(59, 130, 246, 0.08) 40%, 
        transparent 70%
      )
    `
  };

  const cyanBlueMouseGradientStyle: React.CSSProperties = {
    background: `
      radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, 
        rgba(6, 182, 212, 0.15) 0%,
        rgba(59, 130, 246, 0.1) 50%,
        transparent 70%
      )
    `,
    maskImage: `
      linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)
    `,
    maskSize: '40px 40px',
    WebkitMaskImage: `
      linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)
    `,
    WebkitMaskSize: '40px 40px'
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={gridBackgroundStyle}
      />
      
      {/* Mouse-following gradient */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={mouseGradientStyle}
      />
      
      {/* Masked gradient with mouse interaction */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={maskedGradientStyle}
      />
      
      {/* Center gradient */}
      <div 
        className="absolute inset-0"
        style={centerGradientStyle}
      />
      
      {/* Cyan-Blue gradient */}
      <div 
        className="absolute inset-0"
        style={cyanBlueGradientStyle}
      />
      
      {/* Cyan-Blue mouse-following gradient with grid mask */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={cyanBlueMouseGradientStyle}
      />
    </div>
  );
}

export default InteractiveBackground;