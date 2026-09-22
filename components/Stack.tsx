import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";

const ROWS = [
  { label: "Languages", value: "TypeScript · JavaScript · Python · Go · Rust" },
  { label: "Frameworks", value: "NestJS · Next.js · React · Express · Shopify Hydrogen · Go + Fyne" },
  { label: "Data", value: "PostgreSQL · Prisma · MongoDB · GraphQL" },
  { label: "Infrastructure", value: "Docker · Kubernetes · Railway · Shopify Oxygen · Supabase" },
];

export default function Stack() {
  return (
    <ChapterSection id="stack">
      <Reveal>
        <SectionLabel number="04" label="Stack" />
      </Reveal>
      <Reveal>
        <div className="flex flex-col">
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-wrap gap-x-10 gap-y-3 py-6 ${
                i < ROWS.length - 1 ? "border-b border-hairline" : ""
              }`}
            >
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted min-w-[160px]">
                {r.label}
              </div>
              <div className="text-[17px] leading-[1.7] text-ink max-w-[52ch]">{r.value}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </ChapterSection>
  );
}
