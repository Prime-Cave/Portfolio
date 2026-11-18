import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";
import StatCard from "./ui/StatCard";
import Link from "./ui/Link";

const STATS = [
  { value: "75", label: "Kata solved so far" },
  { value: "5 kyu", label: "Rank, still climbing" },
  { value: "~22%", label: "Honor percentile" },
  { value: "4", label: "Languages used" },
];

export default function ProblemSolving() {
  return (
    <ChapterSection id="problem">
      <Reveal>
        <SectionLabel label="Problem-solving" title="Algorithm practice, on purpose." />
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-[clamp(48px,7vw,72px)]">
          <p className="text-[clamp(22px,2.8vw,30px)] leading-[1.4] tracking-[-0.02em] m-0 text-ink text-pretty max-w-[40ch]">
            A standing practice since October 2024, and still running. Each stretch of it is aimed at a
            weakness I can name, so the numbers below are a checkpoint rather than a finish line.
          </p>

          <div className="grid grid-cols-2 min-[760px]:grid-cols-4 gap-x-[clamp(20px,4vw,48px)] gap-y-10">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <p className="text-[17px] leading-[1.7] m-0 text-muted text-pretty max-w-[62ch]">
            Mid-table and moving up, which is the honest read. What I take from it is compounding: harder
            kyu every few months, and re-solving a familiar problem shape in a new language is the fastest
            way I know to learn that language. The count keeps going up because the habit has not stopped.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            <Link href="https://github.com/Prime-Cave/Codewars" variant="accent">
              Solutions repo ↗
            </Link>
            <Link href="https://www.codewars.com/users/Prime-Cave">Codewars profile ↗</Link>
          </div>
        </div>
      </Reveal>
    </ChapterSection>
  );
}
