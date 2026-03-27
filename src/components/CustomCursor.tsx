import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    gsap.ticker.add(() => {
      // Smooth follow for the cursor ring
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.8,
        ease: 'power3.out',
      });
      // Snappy follow for the inner dot
      gsap.set(dot, {
        x: mouseX,
        y: mouseY,
      });
    });

    const handleMouseEnterLinks = () => {
      gsap.to(cursor, { scale: 1.5, borderColor: '#ea3323', backgroundColor: 'rgba(234, 51, 35, 0.1)', duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const handleMouseLeaveLinks = () => {
      gsap.to(cursor, { scale: 1, borderColor: '#f5f5f5', backgroundColor: 'transparent', duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    const handleMouseEnterFragment = () => {
      gsap.to(cursor, { scale: 2, borderColor: '#ea3323', backgroundColor: 'transparent', duration: 0.3, borderStyle: 'dashed' });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const handleMouseLeaveFragment = () => {
      gsap.to(cursor, { scale: 1, borderColor: '#f5f5f5', backgroundColor: 'transparent', duration: 0.3, borderStyle: 'solid' });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    // Use event delegation for dynamic elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        handleMouseEnterLinks();
      } else if (target.closest('.fragment-target')) {
        handleMouseEnterFragment();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        handleMouseLeaveLinks();
      } else if (target.closest('.fragment-target')) {
        handleMouseLeaveFragment();
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 md:w-10 md:h-10 border-2 border-tiwis-offwhite rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      ></div>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-tiwis-offwhite rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      ></div>
    </>
  );
}
