import { useState, useEffect } from 'react';

/**
 * useCountUp hook
 * Gently animates a number from 0 to endValue when triggered.
 * Respects prefers-reduced-motion.
 */
export default function useCountUp(endValue, duration = 1800, start = false) {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return endValue;
    }
    return 0;
  });

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, start]);

  return count;
}
