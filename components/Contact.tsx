import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="chapter" style={{ paddingBottom: "clamp(64px,8vw,96px)" }}>
      <Reveal>
        <SectionLabel number="05" label="Contact" />
      </Reveal>
      <Reveal>
        <div className={styles.body}>
          <p className={styles.headline}>Open to work. Happy to talk about the hard part.</p>
          <a href="mailto:Tomisin.Akinfemiwa@gmail.com" className={styles.email}>
            Tomisin.Akinfemiwa@gmail.com
          </a>
          <div className={styles.links}>
            <a href="https://github.com/Prime-Cave" className={styles.link}>
              GitHub · Prime-Cave
            </a>
            <a href="https://www.linkedin.com/in/tomisin-akinfemiwa" className={styles.link}>
              LinkedIn · tomisin-akinfemiwa
            </a>
            <a href="https://x.com/Ak_Tomisin" className={styles.link}>
              X · @Ak_Tomisin
            </a>
            <a href="https://github.com/Prime-Cave/Codewars" className={styles.link}>
              Codewars · solutions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
