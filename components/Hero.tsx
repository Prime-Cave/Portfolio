import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative" }} className={styles.hero}>
      <div aria-hidden="true" className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.orbA} />
        <div className={styles.orbB} />
        <div className={styles.fade} />
      </div>

      <div className={styles.eyebrow}>Software Engineer · Systems &amp; Problem-Solving</div>
      <h1 className={styles.name}>Tomisin Akinfemiwa</h1>
      <p className={styles.headline}>
        I solve hard problems and build the <span style={{ color: "var(--accent)" }}>systems</span> around
        them.
      </p>
      <p className={styles.sub}>
        Algorithmic problem-solving, systems architecture, and shipped products. I like a good challenge, and
        I learn fast.
      </p>

      <div className={styles.row}>
        <span className={styles.pill}>
          <span className={styles.pillDot} />
          Open to work
        </span>
        <a
          href="/Tomisin-Akinfemiwa-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="accentLink"
        >
          View CV ↗
        </a>
        <a href="https://github.com/Prime-Cave" className="quietLink">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tomisin-akinfemiwa" className="quietLink">
          LinkedIn
        </a>
        <a href="https://x.com/Ak_Tomisin" className="quietLink">
          X
        </a>
        <a href="https://github.com/Prime-Cave/Codewars" className="quietLink">
          Codewars
        </a>
      </div>
    </section>
  );
}
