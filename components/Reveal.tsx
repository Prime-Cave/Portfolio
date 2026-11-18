"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// One entrance per container: a short rise that settles out of a slight blur.
// It plays once, when the block first scrolls into view, and never again.
// Content already on screen at load stays put, and reduced motion skips it.
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const h = document.documentElement.clientHeight || window.innerHeight;
    if (r.top < h * 0.94 && r.bottom > 0) return;
    setVisible(false);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-[700ms] ease-out ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[4px]"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
