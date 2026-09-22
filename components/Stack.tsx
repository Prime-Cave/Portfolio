import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import styles from "./Stack.module.css";

const ROWS = [
  { label: "Languages", value: "TypeScript · JavaScript · Python · Go · Rust" },
  { label: "Frameworks", value: "NestJS · Next.js · React · Express · Shopify Hydrogen · Go + Fyne" },
  { label: "Data", value: "PostgreSQL · Prisma · MongoDB · GraphQL" },
  { label: "Infrastructure", value: "Docker · Kubernetes · Railway · Shopify Oxygen · Supabase" },
];

export default function Stack() {
  return (
    <section id="stack" className="chapter">
      <Reveal>
        <SectionLabel number="04" label="Stack" />
      </Reveal>
      <Reveal>
        <div className={styles.list}>
          {ROWS.map((r) => (
            <div key={r.label} className={styles.row}>
              <div className={styles.label}>{r.label}</div>
              <div className={styles.value}>{r.value}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
