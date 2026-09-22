import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import styles from "./Work.module.css";

function Screenshot({
  src,
  alt,
  caption,
  width,
  height,
  withBar,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  withBar?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        {withBar && (
          <div className={styles.frameBar}>
            <span className={styles.frameDot} />
            <span className={styles.frameDot} />
            <span className={styles.frameDot} />
          </div>
        )}
        <Image src={src} alt={alt} width={width} height={height} className={styles.frameImg} />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

const TAGS_TFSPACE = [
  "NestJS",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "JWT + Passport",
  "Socket.io",
  "Supabase",
  "SendGrid",
  "Docker",
  "Kubernetes",
];

const TAGS_ELVINDAKE = ["Hydrogen", "React Router 7", "Oxygen", "Sanity", "GraphQL + codegen"];

const TAGS_PETRA = ["React 19", "TypeScript", "Vite", "Tailwind", "Framer Motion", "Cloudinary", "EmailJS"];

const TAGS_PIXL = ["Go", "Fyne v2", "Custom renderer"];

export default function Work() {
  return (
    <section id="work" className="chapter">
      <Reveal>
        <SectionLabel number="02" label="Selected work" />
      </Reveal>

      <Reveal>
        <article className={styles.article}>
          <div className={styles.head}>
            <div className={styles.eyebrow}>Multi-tenant platform · Backend solo, 393 commits</div>
            <h2 className={styles.title}>TFSpace</h2>
            <p className={styles.dek}>
              A real-estate workspace platform: companies hold spaces, spaces hold properties and
              timelines, and every tenant needs its own boundary.
            </p>
          </div>

          <div className={styles.paras}>
            <p className={styles.p}>
              I built the backend on my own: NestJS and TypeScript over Prisma and PostgreSQL, with a
              multi-tenant data model that gives each workspace its own subdomain. Three separate auth
              flows (Google OAuth, phone OTP, email OTP) resolve into a single JWT session layer, with ten
              roles of RBAC on top. Supabase handles file storage, SendGrid the transactional email, and
              bulk create/update endpoints for properties and timelines are called out in the README as a
              deliberate efficiency decision.
            </p>
            <p className={styles.p}>
              The frontend, live at tfspaces.com, was built with the team: Next.js 15, React 19, real-time
              sockets, and a Storybook-documented component library.
            </p>
          </div>

          <Screenshot
            src="/images/tfspace-space-overview.png"
            alt="TFSpace space overview screen"
            width={1442}
            height={901}
            withBar
            caption="A space under a workspace tenant, on its own subdomain. Everything here is scoped by the tenant boundary, reached through one JWT session layer fed by three auth flows, and gated by ten roles of RBAC. 390+ commits, solo backend."
          />

          <div className={styles.figureGrid}>
            <Screenshot
              src="/images/tfspace-space-analytics.png"
              alt="TFSpace analytics panels"
              width={1440}
              height={902}
              caption="Aggregates computed per space, served over the same tenant-scoped API and pushed live over Socket.io."
            />
            <Screenshot
              src="/images/tfspace-property-detail.png"
              alt="TFSpace property detail screen"
              width={1441}
              height={901}
              caption="Property records with media in Supabase storage; document actions trigger SendGrid templates."
            />
          </div>

          <div className={styles.pillRow}>
            {TAGS_TFSPACE.map((t) => (
              <span key={t} className="tagPill">
                {t}
              </span>
            ))}
          </div>

          <div className={styles.linkRow}>
            <a href="https://tfspaces.com" className="accentLink">
              tfspaces.com ↗
            </a>
            <span className={styles.metaText}>Backend repo · private</span>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={styles.articleBordered}>
          <div className={styles.head}>
            <div className={styles.eyebrow}>Headless commerce migration · Solo</div>
            <h2 className={styles.title}>ElvinDake Storefront</h2>
            <p className={styles.dek}>
              Move a live fashion brand off a custom Liquid theme onto a headless stack without the
              storefront changing under its customers.
            </p>
          </div>

          <div className={styles.paras}>
            <p className={styles.p}>
              Shopify Hydrogen on Oxygen, with Sanity as the content layer and GraphQL codegen. The CSS is
              a 1:1 port of the old Liquid stylesheet so both versions could be compared side by side,
              which is how a specificity bug surfaced. Content started out in Shopify metaobjects and I
              ported it to Sanity, so editorial changes no longer depend on raw Shopify field arrays.
            </p>
          </div>

          <div className={styles.pillRow}>
            {TAGS_ELVINDAKE.map((t) => (
              <span key={t} className="tagPill">
                {t}
              </span>
            ))}
          </div>

          <div className={styles.linkRow}>
            <a href="https://elvindake.com" className="accentLink">
              elvindake.com ↗
            </a>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={styles.articleBordered}>
          <div className={styles.head}>
            <div className={styles.eyebrow}>Client site · Solo</div>
            <h2 className={styles.title}>Petra House Andover</h2>
            <p className={styles.dek}>
              A live site for a church that needed its sermons, programmes and prayer requests to work as
              one thing, not three.
            </p>
          </div>

          <div className={styles.paras}>
            <p className={styles.p}>
              React, Vite and Tailwind with Framer Motion, a YouTube-backed sermon library, media served
              through Cloudinary, and a contact and prayer-request flow on EmailJS.
            </p>
            <p className={styles.p}>I hand-built the integrations, the content structure and the pages themselves.</p>
          </div>

          <div className={styles.pillRow}>
            {TAGS_PETRA.map((t) => (
              <span key={t} className="tagPill">
                {t}
              </span>
            ))}
          </div>

          <div className={styles.linkRow}>
            <a href="https://www.petrahouse.org.uk" className="accentLink">
              petrahouse.org.uk ↗
            </a>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={styles.articleBordered} style={{ marginBottom: 0 }}>
          <div className={styles.head}>
            <div className={styles.eyebrow}>Native desktop · Solo</div>
            <h2 className={styles.title}>PIXL</h2>
            <p className={styles.dek}>
              A pixel-art editor with no web platform underneath it. The canvas had to be drawn by hand.
            </p>
          </div>

          <p className={styles.p} style={{ maxWidth: "68ch" }}>
            Go and Fyne, with the canvas renderer written by hand in{" "}
            <span className={styles.code}>pxcanvasrenderer.go</span>, mouse input handled separately in{" "}
            <span className={styles.code}>mouse.go</span>, and brush behaviour in its own package.
            Rendering, input and UI stay apart, which is the whole reason the thing stayed editable.
          </p>

          <div className={styles.pillRow}>
            {TAGS_PIXL.map((t) => (
              <span key={t} className="tagPill">
                {t}
              </span>
            ))}
          </div>

          <div className={styles.linkRow}>
            <a href="https://github.com/Prime-Cave/PIXL" className="accentLink">
              github.com/Prime-Cave/PIXL ↗
            </a>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <div className={styles.also}>
          <div className={styles.alsoLabel}>Also</div>
          <p className={styles.alsoP}>
            <a href="https://github.com/Prime-Cave/apidesignbp" className="inlineLink">
              apidesignbp
            </a>{" "}
            is a small reference API written to argue a point about structure: modular handlers, a real
            Jest and Supertest suite, Express and Prisma underneath.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
