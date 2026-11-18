import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";

const ROWS = [
  { label: "Languages", value: "TypeScript · JavaScript · Dart · Python · Go · Rust" },
  { label: "Frameworks", value: "NestJS · Next.js · React · Flutter · Express · Shopify Hydrogen · Go + Fyne · Wails" },
  { label: "Data", value: "PostgreSQL · Prisma · SQLite · MongoDB · GraphQL" },
  { label: "Infrastructure", value: "Docker · Kubernetes · Railway · Shopify Oxygen · Supabase" },
];

export default function Stack() {
  return (
    <ChapterSection id="stack">
      <Reveal>
        <SectionLabel label="Stack" title="What I build with." />
      </Reveal>
      <Reveal>
        <div className="flex flex-col">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="flex flex-wrap gap-x-10 gap-y-2 py-7 border-t border-hairline"
            >
              <div className="text-[0.9375rem] text-muted min-w-[180px] pt-0.5">
                {r.label}
              </div>
              <div className="text-[clamp(1.0625rem,1.9vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-ink max-w-[48ch]">{r.value}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </ChapterSection>
  );
}
