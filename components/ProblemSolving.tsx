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
        <SectionLabel number="03" label="Problem-solving" />
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-[clamp(32px,5vw,44px)]">
          <p className="text-[clamp(17px,2vw,20px)] leading-[1.62] text-ink m-0 max-w-[64ch] text-pretty">
            A standing practice since October 2024, and still running. Each stretch of it is aimed at a
            weakness I can name, so the numbers below are a checkpoint rather than a finish line.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px bg-hairline border border-hairline rounded-[10px] overflow-hidden">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <p className="text-base leading-[1.66] text-muted m-0 max-w-[64ch] text-pretty">
            Mid-table and moving up, which is the honest read. What I take from it is compounding: harder
            kyu every few months, and re-solving a familiar problem shape in a new language is the fastest
            way I know to learn that language. The count keeps going up because the habit has not stopped.
          </p>

          <div className="flex flex-wrap gap-5 items-center">
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
