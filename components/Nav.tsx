"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "problem", label: "Problem-solving" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const NAV_LABELS: Record<string, string> = {
  hero: "Intro",
  about: "01 · About",
  work: "02 · Work",
  problem: "03 · Problem-solving",
  stack: "04 · Stack",
  contact: "05 · Contact",
};

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [wide, setWide] = useState(true);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const onResize = () => {
      const w = document.documentElement.clientWidth || window.innerWidth;
      setWide(w >= 760);
    };
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const line = window.innerHeight * 0.38;
        let cur = "hero";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) cur = id;
        }
        setActive((prev) => (prev !== cur ? cur : prev));
      });
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    onResize();
    onScroll();
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll, { capture: true });
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const wrap = linksRef.current;
    if (!wrap) {
      setIndicator(null);
      return;
    }
    const el = wrap.querySelector<HTMLElement>(`[data-nav="${active}"]`);
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [active, wide]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[rgba(14,14,16,0.86)] backdrop-blur-[8px] border-b border-hairline">
      <div className="max-w-[1000px] mx-auto px-[clamp(20px,5vw,56px)] h-14 flex items-center justify-between gap-4">
        <a href="#top" className="font-mono text-xs tracking-[0.08em] text-ink">
          T. Akinfemiwa
        </a>
        {wide ? (
          <div id="navlinks" ref={linksRef} className="relative flex items-center gap-[clamp(14px,2.4vw,28px)]">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                data-nav={s.id}
                data-active={active === s.id}
                href={`#${s.id}`}
                className="font-mono text-[11px] tracking-[0.14em] uppercase py-1 text-muted transition-colors duration-200 ease-out hover:text-ink data-[active=true]:text-ink"
              >
                {s.label}
              </a>
            ))}
            <span
              className="absolute -bottom-1.5 h-px bg-accent pointer-events-none transition-[left,width,opacity] duration-[260ms] ease-out"
              style={{
                left: indicator ? indicator.left : 0,
                width: indicator ? indicator.width : 0,
                opacity: indicator ? 1 : 0,
              }}
            />
          </div>
        ) : (
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
            {NAV_LABELS[active] ?? ""}
          </span>
        )}
      </div>
    </nav>
  );
}
