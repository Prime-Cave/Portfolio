import Link from "./ui/Link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[min(92vh,860px)] flex flex-col justify-center pt-30 pb-24"
    >
      <div aria-hidden="true" className="absolute -top-14 left-1/2 -translate-x-1/2 w-screen h-[calc(100%+56px)] overflow-hidden pointer-events-none z-0">
        <div className="hero-grid" />
        <div className="hero-orb-a" />
        <div className="hero-orb-b" />
        <div className="hero-fade" />
      </div>

      <div className="relative z-[1] font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-7 animate-hero-in [animation-delay:0ms]">
        Software Engineer · Systems &amp; Problem-Solving
      </div>
      <h1 className="relative z-[1] text-[clamp(38px,7vw,76px)] leading-[1.02] tracking-[-0.03em] font-medium m-0 mb-8 max-w-[16ch] text-balance animate-hero-in [animation-delay:70ms]">
        Tomisin Akinfemiwa
      </h1>
      <p className="relative z-[1] text-[clamp(20px,3.1vw,30px)] leading-[1.34] font-normal text-ink m-0 mb-5 max-w-[22ch] tracking-[-0.015em] text-pretty animate-hero-in [animation-delay:140ms]">
        I solve hard problems and build the <span className="text-accent">systems</span> around them.
      </p>
      <p className="relative z-[1] text-base leading-[1.6] text-muted m-0 mb-10 max-w-[60ch] text-pretty animate-hero-in [animation-delay:210ms]">
        Algorithmic problem-solving, systems architecture, and shipped products. I like a good challenge, and
        I learn fast.
      </p>

      <div className="relative z-[1] flex flex-wrap items-center gap-x-5 gap-y-3 animate-hero-in [animation-delay:280ms]">
        <span className="inline-flex items-center gap-2 border border-hairline rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Open to work
        </span>
        <Link href="/Tomisin-Akinfemiwa-CV.pdf" target="_blank" rel="noopener noreferrer" variant="accent">
          View CV ↗
        </Link>
        <Link href="https://github.com/Prime-Cave">GitHub</Link>
        <Link href="https://www.linkedin.com/in/tomisin-akinfemiwa">LinkedIn</Link>
        <Link href="https://x.com/Ak_Tomisin">X</Link>
        <Link href="https://github.com/Prime-Cave/Codewars">Codewars</Link>
      </div>
    </section>
  );
}
