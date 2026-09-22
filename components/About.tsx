import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="chapter">
      <Reveal>
        <SectionLabel number="01" label="About" />
      </Reveal>
      <Reveal>
        <div className={styles.body}>
          <p className={styles.lead}>
            I&apos;m drawn to the part of a problem other people route around: the data model that has to
            hold many tenants at once, the renderer nobody wants to hand-write, the CSS bug that only
            reproduces under one specificity order.
          </p>
          <p className={styles.p}>
            Most of my depth is in backend systems. I built the TFSpace backend on my own across 393
            commits: multi-tenant workspaces, three auth flows resolved into one session layer, ten roles
            of access control. Alongside that I keep a standing algorithm practice, and I take work outside
            my defaults on purpose: a desktop pixel editor written in Go, a headless storefront migration in
            Hydrogen. That&apos;s how I learn quickly.
          </p>
          <p className={styles.p}>
            I also founded and led RUN Tech Space, Redeemer&apos;s University&apos;s official student tech
            community. I secured the university approval and built a structure that outlasted my tenure.
            Same instinct as the code: take ownership of the part nobody else is holding.
          </p>
          <p className={styles.p}>
            Five languages so far, from Go tooling to TypeScript platforms to a native GUI app.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
