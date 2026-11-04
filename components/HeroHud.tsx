"use client";

import { useEffect, useRef } from "react";

const READOUT = [
  "TFSpace · 393 commits",
  "ElvinDake · Liquid to Hydrogen",
  "Petra House · Live",
  "PIXL · Custom renderer",
];

const MAX_TILT = 7;
const REST_ANGLE = -38;
const EASE = 0.08;

// Rings use pathLength={360}, so every dash pattern below reads in degrees.
const Layer = ({
  depth,
  delay,
  spin,
  reverse,
  children,
}: {
  depth: number;
  delay: number;
  spin: number;
  reverse?: boolean;
  children: React.ReactNode;
}) => (
  <div className="absolute inset-0 [transform-style:preserve-3d]" style={{ transform: `translateZ(${depth}px)` }}>
    <div className="absolute inset-0 animate-hud-boot" style={{ animationDelay: `${delay}ms` }}>
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="hud-loop absolute inset-0 animate-hud-spin will-change-transform"
        style={{ animationDuration: `${spin}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </svg>
    </div>
  </div>
);

const Ring = ({ r, width, dash, stroke }: { r: number; width: number; dash?: string; stroke: string }) => (
  <circle cx="300" cy="300" r={r} pathLength={360} stroke={stroke} strokeWidth={width} strokeDasharray={dash} />
);

const MUTED = "rgba(138, 138, 133, 0.5)";
const FAINT = "rgba(138, 138, 133, 0.28)";
const ACCENT = "var(--color-accent)";

export default function HeroHud() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Stop the rings once the hero has scrolled away.
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.paused = String(!entry.isIntersecting);
    });
    io.observe(el);

    const canTrack =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canTrack) return () => io.disconnect();

    const target = { rx: 0, ry: 0, angle: REST_ANGLE };
    const now = { ...target };
    let raf = 0;

    const tick = () => {
      now.rx += (target.rx - now.rx) * EASE;
      now.ry += (target.ry - now.ry) * EASE;
      // Take the short way round so the marker never spins past the cursor.
      const turn = ((target.angle - now.angle + 540) % 360) - 180;
      now.angle += turn * EASE;
      el.style.setProperty("--hud-rx", `${now.rx.toFixed(2)}deg`);
      el.style.setProperty("--hud-ry", `${now.ry.toFixed(2)}deg`);
      el.style.setProperty("--hud-angle", `${now.angle.toFixed(2)}deg`);
      const settled = Math.abs(target.rx - now.rx) + Math.abs(target.ry - now.ry) + Math.abs(turn) < 0.05;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const box = el.getBoundingClientRect();
      const dx = e.clientX - (box.left + box.width / 2);
      const dy = e.clientY - (box.top + box.height / 2);
      target.ry = Math.max(-1, Math.min(1, dx / window.innerWidth)) * MAX_TILT * 2;
      target.rx = Math.max(-1, Math.min(1, -dy / window.innerHeight)) * MAX_TILT * 2;
      target.angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hud absolute right-[-110px] top-[12%] w-[340px] h-[340px] opacity-40 min-[820px]:opacity-100 min-[820px]:right-[-20px] min-[820px]:top-1/2 min-[820px]:-translate-y-1/2 min-[820px]:w-[480px] min-[820px]:h-[480px] min-[1200px]:right-[-90px] min-[1200px]:w-[560px] min-[1200px]:h-[560px]"
    >
      <div className="hud-gimbal absolute inset-0">
        <div className="absolute inset-[18%] rounded-full animate-hud-boot [animation-delay:900ms]">
          <div className="hud-glow hud-loop absolute inset-0 rounded-full animate-hud-breathe" />
        </div>

        <Layer depth={0} delay={520} spin={160}>
          <Ring r={294} width={1} stroke={FAINT} />
          <Ring r={282} width={9} dash="0.4 4.6" stroke={MUTED} />
        </Layer>
        <Layer depth={18} delay={640} spin={96} reverse>
          <Ring r={252} width={1.5} dash="84 36" stroke={MUTED} />
        </Layer>
        <Layer depth={32} delay={760} spin={220}>
          <Ring r={214} width={6} dash="0.3 1.7" stroke={FAINT} />
        </Layer>
        <Layer depth={48} delay={880} spin={54}>
          <Ring r={176} width={2} dash="58 62 14 106 34 86" stroke={ACCENT} />
        </Layer>
        <Layer depth={62} delay={1000} spin={34} reverse>
          <Ring r={124} width={1} stroke={MUTED} />
          <Ring r={112} width={7} dash="1 29" stroke={MUTED} />
        </Layer>

        <div className="absolute inset-0 animate-hud-boot [animation-delay:1120ms] [transform:translateZ(76px)]">
          <div className="hud-sweep hud-loop absolute inset-[16%] rounded-full animate-hud-spin [animation-duration:11s]" />
          <svg viewBox="0 0 600 600" fill="none" className="absolute inset-0">
            <path d="M300 214v30M300 356v30M214 300h30M356 300h30" stroke={MUTED} />
            <circle cx="300" cy="300" r="40" stroke={ACCENT} strokeWidth="1.5" />
            <circle className="hud-loop animate-hud-breathe" cx="300" cy="300" r="6" fill={ACCENT} />
            <g className="hud-marker">
              <path d="M300 62l9 16h-18z" fill={ACCENT} />
              <path d="M300 84v22" stroke={ACCENT} />
            </g>
          </svg>
        </div>
      </div>

      <div className="hud-readout hidden min-[820px]:block absolute left-1/2 -translate-x-1/2 -bottom-9 w-max h-4 font-mono text-[11px] tracking-[0.16em] uppercase text-muted animate-hud-boot [animation-delay:1300ms]">
        {READOUT.map((line) => (
          <span key={line} className="hud-loop">
            <span className="text-accent">›</span> {line}
          </span>
        ))}
      </div>
    </div>
  );
}
