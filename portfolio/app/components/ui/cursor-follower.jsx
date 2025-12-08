'use client';

import { useEffect, useRef, useState } from 'react';

export const CursorFollower = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = event => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    const animate = () => {
      const lerp = (start, end, factor) => start + (end - start) * factor;

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  const cursorBaseStyle = {
    position: 'absolute',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  };

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          ...cursorBaseStyle,
          width: 8,
          height: 8,
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          background: 'rgb(var(--rgbText))',
        }}
      />
      <div
        style={{
          ...cursorBaseStyle,
          width: isHovering ? 44 : 28,
          height: isHovering ? 44 : 28,
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          border: '1px solid rgb(var(--rgbText))',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
    </div>
  );
};
