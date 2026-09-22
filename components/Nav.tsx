"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

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
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          T. Akinfemiwa
        </a>
        {wide ? (
          <div id="navlinks" ref={linksRef} className={styles.links}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                data-nav={s.id}
                data-active={active === s.id}
                href={`#${s.id}`}
                className={styles.link}
              >
                {s.label}
              </a>
            ))}
            <span
              className={styles.indicator}
              style={{
                left: indicator ? indicator.left : 0,
                width: indicator ? indicator.width : 0,
                opacity: indicator ? 1 : 0,
              }}
            />
          </div>
        ) : (
          <span className={styles.currentLabel}>{NAV_LABELS[active] ?? ""}</span>
        )}
      </div>
    </nav>
  );
}
