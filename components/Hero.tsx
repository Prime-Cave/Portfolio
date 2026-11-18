import type { CSSProperties } from "react";
import { getImageProps } from "next/image";
import s from "./Hero.module.css";

// Entrance timing: one wave, shrinking gaps (see Hero.module.css).
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const IMAGE_ALT = "Anti-Freeze dashboard showing 1.4 GB to spare and how memory and disk are being used";

// Wider screens get the full dashboard; phones get a close-up of the overview card,
// which stays legible at narrow widths.
const { props: { srcSet: wideSrcSet } } = getImageProps({
  src: "/images/antifreeze-dashboard.png",
  alt: IMAGE_ALT,
  width: 2240,
  height: 1600,
  sizes: "(max-width: 1000px) 100vw, 888px",
});
const { props: narrowImg } = getImageProps({
  src: "/images/antifreeze-dashboard-crop.png",
  alt: IMAGE_ALT,
  width: 1720,
  height: 600,
  sizes: "100vw",
  priority: true,
});

export default function Hero() {
  return (
    <section id="hero" className={`${s.root} pt-[clamp(128px,22vh,208px)]`}>
      <p
        className={`${s.fade} flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[15px] text-muted m-0 mb-8`}
        style={delay(0)}
      >
        <span className="whitespace-nowrap">Tomisin Akinfemiwa · Software engineer</span>
        <span className="whitespace-nowrap inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          Open to work
        </span>
      </p>

      <h1
        className={`${s.enter} ${s.lead} text-[clamp(44px,8.4vw,96px)] leading-[0.98] tracking-[-0.045em] font-medium text-ink m-0 max-w-[13ch] text-balance`}
        style={delay(0)}
      >
        I solve hard problems and build the systems around them.
      </h1>

      <p
        className={`${s.enter} ${s.support} text-[clamp(18px,1.9vw,22px)] leading-[1.5] text-muted m-0 mt-9 max-w-[46ch] text-pretty`}
        style={delay(120)}
      >
        Backend platforms, native apps and the tools in between. I like a good challenge, and I learn fast.
      </p>

      <div className={`${s.enter} ${s.cta} flex flex-wrap items-center gap-x-8 gap-y-4 mt-12`} style={delay(200)}>
        <a
          href="/Tomisin-Akinfemiwa-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.button} inline-flex items-center h-12 px-6 rounded-full bg-ink text-bg text-[15px] font-medium hover:bg-white`}
        >
          View CV
        </a>
        <a
          href="mailto:Tomisin.Akinfemiwa@gmail.com"
          className={`${s.textLink} inline-flex items-center gap-1.5 h-12 text-[15px] text-ink`}
        >
          Email me <span className={s.arrow} aria-hidden="true">→</span>
        </a>
      </div>

      <figure className="m-0 mt-[clamp(64px,10vh,112px)]">
        <div
          className={`${s.reveal} relative overflow-hidden rounded-[20px] bg-surface shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]`}
          style={delay(300)}
        >
          <picture>
            <source media="(min-width: 640px)" srcSet={wideSrcSet} />
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
            <img {...narrowImg} className="block w-full h-auto aspect-[1720/600] sm:aspect-[2240/1600]" />
          </picture>
        </div>
        <figcaption
          className={`${s.fade} flex flex-wrap justify-between gap-x-6 gap-y-1 mt-5 text-[15px] text-muted`}
          style={delay(700)}
        >
          <span>
            <span className="text-ink">Anti-Freeze</span>, a menu bar app that warns before your Mac slows down.
          </span>
          <a href="#work" className={`${s.textLink} text-ink inline-flex items-center gap-1.5`}>
            Selected work <span className={s.arrow} aria-hidden="true">→</span>
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
