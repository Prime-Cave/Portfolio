"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const inView = () => {
      const r = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight || window.innerHeight;
      return r.top < h * 0.94 && r.bottom > 0;
    };

    if (!inView()) setVisible(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
      }`}
    >
      {children}
    </div>
  );
}
