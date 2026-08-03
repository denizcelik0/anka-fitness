"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
};

export function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" },
    );

    observer.observe(node);

    // Fail-safe fallback timer so content is never hidden if observer is delayed
    const timer = setTimeout(() => {
      if (node) {
        node.classList.add("is-visible");
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
