"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Bypasses any copy cached before /videos switched to revalidation.
const VIDEO_VERSION = "2";

function subscribeToMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function LoopVideo({
  name,
  label,
  caption,
}: {
  name: string;
  label: string;
  caption: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const [near, setNear] = useState(false);
  const [seen, setSeen] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  // A poster on the element downloads straight away, so hold it back until the
  // video is close enough to scroll into view. This runs for reduced motion too.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  // autoPlay overrides preload="none", so the sources stay out of the DOM until
  // the video is on screen. Without them the element just shows its poster.
  const active = seen && !reduced;

  useEffect(() => {
    if (reduced) return;
    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        setSeen(true);
        if (video.currentSrc) video.play().catch(() => {});
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduced]);

  // Runs when the sources are added or removed, so the element picks them up.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.load();
    if (active) video.play().catch(() => {});
  }, [active]);

  // Phones can refuse autoplay outright, as iOS does in Low Power Mode. The poster
  // stays up in that case, and a tap anywhere is the gesture that lets it play.
  useEffect(() => {
    if (!active) return;
    const resume = () => {
      const video = ref.current;
      if (video?.paused && inView.current) video.play().catch(() => {});
    };
    window.addEventListener("touchend", resume, { passive: true });
    window.addEventListener("click", resume);
    return () => {
      window.removeEventListener("touchend", resume);
      window.removeEventListener("click", resume);
    };
  }, [active]);

  return (
    <figure className="m-0 flex flex-col gap-3.5">
      <div className="bg-surface border border-hairline rounded-xl p-2 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-[240ms] ease-out hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_30px_56px_-26px_rgba(0,0,0,0.95)]">
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={near ? `/videos/${name}.jpg?v=${VIDEO_VERSION}` : undefined}
          aria-label={label}
          width={1600}
          height={900}
          className="block w-full h-auto rounded-[7px]"
        >
          {active && (
            <>
              <source src={`/videos/${name}.mp4?v=${VIDEO_VERSION}`} type="video/mp4" />
              <source src={`/videos/${name}.webm?v=${VIDEO_VERSION}`} type="video/webm" />
            </>
          )}
        </video>
      </div>
      <figcaption className="font-mono text-[11px] leading-[1.6] tracking-[0.04em] text-muted max-w-[70ch]">
        {caption}
      </figcaption>
    </figure>
  );
}
