import Reveal from "./Reveal";
import ChapterSection from "./ui/ChapterSection";
import Link from "./ui/Link";

const LINKS = [
  { href: "https://github.com/Prime-Cave", label: "GitHub" },
  { href: "https://www.linkedin.com/in/tomisin-akinfemiwa", label: "LinkedIn" },
  { href: "https://x.com/Ak_Tomisin", label: "X" },
  { href: "https://github.com/Prime-Cave/Codewars", label: "Codewars solutions" },
];

export default function Contact() {
  return (
    <ChapterSection id="contact" className="!pb-[clamp(96px,12vw,144px)]">
      <Reveal>
        <p className="text-[15px] text-muted m-0 mb-4">Contact</p>
        <h2 className="text-[clamp(44px,8.4vw,96px)] leading-[0.98] tracking-[-0.045em] font-medium text-ink m-0 max-w-[12ch] text-balance">
          Open to work. Happy to talk about the hard part.
        </h2>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12">
          <Link href="mailto:Tomisin.Akinfemiwa@gmail.com" variant="button">
            Tomisin.Akinfemiwa@gmail.com
          </Link>
          <Link href="/Tomisin-Akinfemiwa-CV.pdf" target="_blank" rel="noopener noreferrer" variant="accent">
            View CV
          </Link>
        </div>
        <ul className="list-none m-0 p-0 mt-16 flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} variant="contact">
                {l.label} ↗
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </ChapterSection>
  );
}
