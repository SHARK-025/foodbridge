import { useState, useEffect, useRef } from 'react';

/**
 * useInView hook
 * Detects when an element enters the viewport with threshold and triggerOnce option.
 */
export default function useInView(options = {}) {
  const threshold = options.threshold ?? 0.15;
  const triggerOnce = options.triggerOnce ?? true;

  const [isInView, setIsInView] = useState(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return true;
    }
    return false;
  });

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, { threshold });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return [ref, isInView];
}
