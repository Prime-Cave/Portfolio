import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";
import Link from "./ui/Link";

export default function Contact() {
  return (
    <ChapterSection id="contact" className="!pb-[clamp(64px,8vw,96px)]">
      <Reveal>
        <SectionLabel number="05" label="Contact" />
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-9">
          <p className="text-[clamp(22px,3.4vw,34px)] leading-[1.25] tracking-[-0.02em] text-ink m-0 max-w-[20ch] text-pretty">
            Open to work. Happy to talk about the hard part.
          </p>
          <a
            href="mailto:Tomisin.Akinfemiwa@gmail.com"
            className="self-start font-mono text-[clamp(14px,2vw,18px)] tracking-[0.02em] text-ink border-b border-accent pb-1 transition-colors duration-200 ease-out hover:text-accent"
          >
            Tomisin.Akinfemiwa@gmail.com
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/Tomisin-Akinfemiwa-CV.pdf" target="_blank" rel="noopener noreferrer" variant="contact">
              View CV · PDF
            </Link>
            <Link href="https://github.com/Prime-Cave" variant="contact">
              GitHub · Prime-Cave
            </Link>
            <Link href="https://www.linkedin.com/in/tomisin-akinfemiwa" variant="contact">
              LinkedIn · tomisin-akinfemiwa
            </Link>
            <Link href="https://x.com/Ak_Tomisin" variant="contact">
              X · @Ak_Tomisin
            </Link>
            <Link href="https://github.com/Prime-Cave/Codewars" variant="contact">
              Codewars · solutions
            </Link>
          </div>
        </div>
      </Reveal>
    </ChapterSection>
  );
}
