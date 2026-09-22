import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import styles from "./ProblemSolving.module.css";

const STATS = [
  { value: "75", label: "Kata solved so far" },
  { value: "5 kyu", label: "Rank, still climbing" },
  { value: "~22%", label: "Honor percentile" },
  { value: "4", label: "Languages used" },
];

export default function ProblemSolving() {
  return (
    <section id="problem" className="chapter">
      <Reveal>
        <SectionLabel number="03" label="Problem-solving" />
      </Reveal>
      <Reveal>
        <div className={styles.body}>
          <p className={styles.lead}>
            A standing practice since October 2024, and still running. Each stretch of it is aimed at a
            weakness I can name, so the numbers below are a checkpoint rather than a finish line.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <p className={styles.p}>
            Mid-table and moving up, which is the honest read. What I take from it is compounding: harder
            kyu every few months, and re-solving a familiar problem shape in a new language is the fastest
            way I know to learn that language. The count keeps going up because the habit has not stopped.
          </p>

          <div className={styles.linkRow}>
            <a href="https://github.com/Prime-Cave/Codewars" className="accentLink">
              Solutions repo ↗
            </a>
            <a href="https://www.codewars.com/users/Prime-Cave" className="quietLink">
              Codewars profile ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
