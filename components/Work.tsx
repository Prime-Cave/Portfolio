import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";
import TagPill from "./ui/TagPill";
import ScreenshotFrame from "./ui/ScreenshotFrame";
import LoopVideo from "./ui/LoopVideo";
import Link from "./ui/Link";

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

const eyebrow = "font-mono text-[11px] tracking-[0.16em] uppercase text-muted";
const title = "text-[clamp(26px,4vw,40px)] leading-[1.1] tracking-[-0.025em] font-medium m-0";
const dek = "text-[clamp(17px,2vw,19px)] leading-[1.5] text-ink m-0 max-w-[64ch] text-pretty";
const bodyP = "text-base leading-[1.66] text-muted m-0 text-pretty";
const pillRow = "flex flex-wrap gap-2";
const linkRow = "flex flex-wrap gap-5 items-center";
const bordered = "pt-[clamp(48px,7vw,72px)] border-t border-hairline";

export default function Work() {
  return (
    <ChapterSection id="work">
      <Reveal>
        <SectionLabel number="02" label="Selected work" />
      </Reveal>

      <Reveal>
        <article className="flex flex-col gap-6 mb-[clamp(72px,10vw,112px)]">
          <div className="flex flex-col gap-3.5">
            <div className={eyebrow}>Multi-tenant platform · Backend solo, 393 commits</div>
            <h2 className={title}>TFSpace</h2>
            <p className={dek}>
              A real-estate workspace platform: companies hold spaces, spaces hold properties and
              timelines, and every tenant needs its own boundary.
            </p>
          </div>

          <LoopVideo
            name="tfspace"
            label="Animated architecture diagram of TFSpace. Google OAuth, phone OTP and email OTP flow into one JWT session layer, then a ten-role RBAC gate, then fan out to separate workspaces, each on its own subdomain and holding spaces with properties and timelines. Around that core sit the NestJS API, Docker and Kubernetes, PostgreSQL with Prisma, Supabase storage and SendGrid email, and Socket.io pushes live updates along the lines as small pulses."
            caption="Three auth flows, one JWT session layer, ten roles of RBAC and a separate workspace per tenant, on NestJS with Prisma and PostgreSQL, Supabase, SendGrid, Docker and Kubernetes. Socket.io pushes live updates."
          />

          <div className="flex flex-col gap-4.5 max-w-[68ch]">
            <p className={bodyP}>
              I built the backend on my own: NestJS and TypeScript over Prisma and PostgreSQL, with a
              multi-tenant data model that gives each workspace its own subdomain. Three separate auth
              flows (Google OAuth, phone OTP, email OTP) resolve into a single JWT session layer, with ten
              roles of RBAC on top. Supabase handles file storage, SendGrid the transactional email, and
              bulk create/update endpoints for properties and timelines are called out in the README as a
              deliberate efficiency decision.
            </p>
            <p className={bodyP}>
              The frontend, live at tfspaces.com, was built with the team: Next.js 15, React 19, real-time
              sockets, and a Storybook-documented component library.
            </p>
          </div>

          <ScreenshotFrame
            src="/images/tfspace-space-overview.png"
            alt="TFSpace space overview screen"
            width={1442}
            height={901}
            withBar
            caption="A space under a workspace tenant, on its own subdomain. Everything here is scoped by the tenant boundary, reached through one JWT session layer fed by three auth flows, and gated by ten roles of RBAC. 390+ commits, solo backend."
          />

          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-5">
            <ScreenshotFrame
              src="/images/tfspace-space-analytics.png"
              sizes="(max-width: 640px) 100vw, 434px"
              alt="TFSpace analytics panels"
              width={1440}
              height={902}
              caption="Aggregates computed per space, served over the same tenant-scoped API and pushed live over Socket.io."
            />
            <ScreenshotFrame
              src="/images/tfspace-property-detail.png"
              sizes="(max-width: 640px) 100vw, 434px"
              alt="TFSpace property detail screen"
              width={1441}
              height={901}
              caption="Property records with media in Supabase storage; document actions trigger SendGrid templates."
            />
          </div>

          <div className={pillRow}>
            {TAGS_TFSPACE.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <Link href="https://tfspaces.com" variant="accent">
              tfspaces.com ↗
            </Link>
            <span className="font-mono text-xs tracking-[0.06em] text-muted">Backend repo · private</span>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={`flex flex-col gap-6 mb-[clamp(72px,10vw,112px)] ${bordered}`}>
          <div className="flex flex-col gap-3.5">
            <div className={eyebrow}>Liquid theme to headless commerce · Solo</div>
            <h2 className={title}>ElvinDake Storefront</h2>
            <p className={dek}>
              I built a live fashion brand&apos;s custom Liquid theme, then moved it onto a headless stack
              without the storefront changing under its customers.
            </p>
          </div>

          <LoopVideo
            name="elvindake"
            label="Animated migration diagram of the ElvinDake storefront. The storefront stays unchanged in the middle while content blocks move from Shopify metaobjects on the left into Sanity on the right, and the stack serving it swaps from the Shopify Liquid theme, built first and run from the Shopify admin, to Hydrogen on Oxygen with GraphQL."
            caption="The Liquid theme came first. Content then moves from Shopify metaobjects into Sanity and the stack swaps to Hydrogen on Oxygen, while the storefront stays the same."
          />

          <div className="flex flex-col gap-4.5 max-w-[68ch]">
            <p className={bodyP}>
              I built the store first as a custom Shopify Liquid theme and managed its Shopify dashboard,
              then transferred it to Shopify Hydrogen on Oxygen, with Sanity as the content layer and
              GraphQL codegen. The CSS is a 1:1 port of my Liquid stylesheet so both versions could be
              compared side by side,
              which is how a specificity bug surfaced. Content started out in Shopify metaobjects and I
              ported it to Sanity, so editorial changes no longer depend on raw Shopify field arrays.
            </p>
          </div>

          <div className={pillRow}>
            {TAGS_ELVINDAKE.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <Link href="https://elvindake.com" variant="accent">
              elvindake.com ↗
            </Link>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={`flex flex-col gap-6 mb-[clamp(72px,10vw,112px)] ${bordered}`}>
          <div className="flex flex-col gap-3.5">
            <div className={eyebrow}>Client site · Solo</div>
            <h2 className={title}>Petra House Andover</h2>
            <p className={dek}>
              A live site for a church that needed its sermons, programmes and prayer requests to work as
              one thing, not three.
            </p>
          </div>

          <div className="flex flex-col gap-4.5 max-w-[68ch]">
            <p className={bodyP}>
              React, Vite and Tailwind with Framer Motion, a YouTube-backed sermon library, media served
              through Cloudinary, and a contact and prayer-request flow on EmailJS.
            </p>
            <p className={bodyP}>I hand-built the integrations, the content structure and the pages themselves.</p>
          </div>

          <div className={pillRow}>
            {TAGS_PETRA.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <Link href="https://www.petrahouse.org.uk" variant="accent">
              petrahouse.org.uk ↗
            </Link>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article className={`flex flex-col gap-6 mb-0 ${bordered}`}>
          <div className="flex flex-col gap-3.5">
            <div className={eyebrow}>Native desktop · Solo</div>
            <h2 className={title}>PIXL</h2>
            <p className={dek}>
              A pixel-art editor with no web platform underneath it. The canvas had to be drawn by hand.
            </p>
          </div>

          <LoopVideo
            name="pixl"
            label="Animated diagram of PIXL. Three separate boxes, the renderer in pxcanvasrenderer.go, input in mouse.go and the brush package, stay apart while a small pixel-art plant is painted onto a canvas one cell at a time."
            caption="Renderer, input and brushes stay in separate boxes while the canvas gets painted cell by cell."
          />

          <p className={`${bodyP} max-w-[68ch]`}>
            Go and Fyne, with the canvas renderer written by hand in{" "}
            <span className="font-mono text-sm text-ink">pxcanvasrenderer.go</span>, mouse input handled
            separately in <span className="font-mono text-sm text-ink">mouse.go</span>, and brush behaviour
            in its own package. Rendering, input and UI stay apart, which is the whole reason the thing
            stayed editable.
          </p>

          <div className={pillRow}>
            {TAGS_PIXL.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <Link href="https://github.com/Prime-Cave/PIXL" variant="accent">
              github.com/Prime-Cave/PIXL ↗
            </Link>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <div className="mt-[clamp(48px,7vw,72px)] pt-[clamp(32px,5vw,48px)] border-t border-hairline flex flex-wrap gap-x-10 gap-y-4 items-baseline">
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted min-w-[120px]">Also</div>
          <p className="text-base leading-[1.66] text-muted m-0 max-w-[60ch] text-pretty">
            <Link href="https://github.com/Prime-Cave/apidesignbp" variant="inline">
              apidesignbp
            </Link>{" "}
            is a small reference API written to argue a point about structure: modular handlers, a real
            Jest and Supertest suite, Express and Prisma underneath.
          </p>
        </div>
      </Reveal>
    </ChapterSection>
  );
}
