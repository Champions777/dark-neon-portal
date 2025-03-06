
import { useEffect, useState, useRef } from 'react';

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: InViewOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = false } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
