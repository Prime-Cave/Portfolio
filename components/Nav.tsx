"use client";

import { useEffect, useRef, useState } from "react";
import LogoMark from "./ui/LogoMark";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "problem", label: "Problem-solving" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const NAV_LABELS: Record<string, string> = {
  hero: "Intro",
  work: "Work",
  about: "About",
  problem: "Problem-solving",
  stack: "Stack",
  contact: "Contact",
};

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [wide, setWide] = useState(true);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page order. The write-ups ("projects") sit after About but belong to Work.
    const ids = ["work", "about", "projects", "problem", "stack", "contact"];
    const navId = (id: string) => (id === "projects" ? "work" : id);
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
          if (el && el.getBoundingClientRect().top <= line) cur = navId(id);
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
    <nav className="fixed inset-x-0 top-0 z-50 bg-[rgba(14,14,16,0.72)] backdrop-blur-[16px] backdrop-saturate-150 border-b border-white/[0.04]">
      <div className="max-w-[1000px] mx-auto px-[clamp(20px,5vw,56px)] h-14 flex items-center justify-between gap-4">
        <a href="#top" aria-label="Tomisin Akinfemiwa, back to top" className="flex text-ink rounded-md">
          <LogoMark size={28} />
        </a>
        {wide ? (
          <div id="navlinks" ref={linksRef} className="relative flex items-center gap-[clamp(14px,2.4vw,28px)]">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                data-nav={s.id}
                data-active={active === s.id}
                href={`#${s.id}`}
                className="relative after:absolute after:-inset-x-1.5 after:-inset-y-2.5 after:content-[''] text-[0.875rem] py-1 text-muted transition-colors duration-200 ease-out hover:text-ink data-[active=true]:text-ink"
              >
                {s.label}
              </a>
            ))}
            <span
              className="absolute -bottom-1.5 h-px bg-accent pointer-events-none transition-[left,width,opacity] duration-[320ms] ease-out"
              style={{
                left: indicator ? indicator.left : 0,
                width: indicator ? indicator.width : 0,
                opacity: indicator ? 1 : 0,
              }}
            />
          </div>
        ) : (
          <span className="text-[0.875rem] text-muted">
            {NAV_LABELS[active] ?? ""}
          </span>
        )}
      </div>
    </nav>
  );
}
