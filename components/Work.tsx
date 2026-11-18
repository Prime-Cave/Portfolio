import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";
import TagPill from "./ui/TagPill";
import ScreenshotFrame, { CAPTION } from "./ui/ScreenshotFrame";
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

const TAGS_ANTIFREEZE = ["Go", "Wails v3", "cgo + AppKit", "SQLite", "TypeScript", "Vite"];

const TAGS_NETWORK = [
  "Flutter",
  "Dart",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Socket.io",
  "Sentry",
];

const NETWORK_SCREENS = [
  { src: "/images/network-home.png", alt: "The Network home feed with a Meet today card and a post" },
  { src: "/images/network-people.png", alt: "The Network People deck suggesting a student you were both at an event with" },
  { src: "/images/network-chat.png", alt: "The Network chat list with message requests and a streak" },
];

const TAGS_ELVINDAKE =["Hydrogen", "React Router 7", "Oxygen", "Sanity", "GraphQL + codegen"];

const TAGS_PETRA = ["React 19", "TypeScript", "Vite", "Tailwind", "Framer Motion", "Cloudinary", "EmailJS"];

const TAGS_PIXL = ["Go", "Fyne v2", "Custom renderer"];

// The short list at the top of Work. Each id matches an <article> below.
// To add a project: add a row here and an article with the same id.
const PROJECTS = [
  {
    id: "tfspace",
    name: "TFSpace",
    summary: "Multi-tenant real-estate workspaces: three sign-in flows, one session layer, ten roles.",
    stack: "NestJS · Prisma · PostgreSQL",
    status: "Live",
  },
  {
    id: "anti-freeze",
    name: "Anti-Freeze",
    summary: "A Mac menu bar app that warns you before memory runs out, and names the app to blame.",
    stack: "Go · Wails · SQLite",
    status: "Open source",
  },
  {
    id: "the-network",
    name: "The Network",
    summary: "A social app for ALU students: meeting people, chat, posts, clubs and events.",
    stack: "Flutter · NestJS",
    status: "In development",
  },
  {
    id: "elvindake",
    name: "ElvinDake Storefront",
    summary: "A live fashion store moved from a Liquid theme to headless Hydrogen.",
    stack: "Hydrogen · Sanity · GraphQL",
    status: "Live",
  },
  {
    id: "petra-house",
    name: "Petra House Andover",
    summary: "A church site joining sermons, programmes and prayer requests.",
    stack: "React · Vite · Tailwind",
    status: "Live",
  },
  {
    id: "pixl",
    name: "PIXL",
    summary: "A native pixel-art editor with its own canvas renderer.",
    stack: "Go · Fyne",
    status: "Open source",
  },
];

// Articles get an id for the index; scroll-mt keeps the title clear of the fixed nav.
const anchor = "scroll-mt-[72px]";

const eyebrow = "text-[0.9375rem] text-muted";
const title = "text-[clamp(2rem,5vw,3.25rem)] leading-[1.04] tracking-[-0.035em] font-medium m-0";
const dek = "text-[clamp(1.1875rem,2.2vw,1.5rem)] leading-[1.45] tracking-[-0.015em] text-ink m-0 max-w-[44ch] text-pretty";
const bodyP = "text-[1.0625rem] leading-[1.7] text-muted m-0 text-pretty";
const pillRow = "flex flex-wrap gap-2";
const linkRow = "flex flex-wrap gap-x-8 gap-y-4 items-center";
// From 1280px the section outgrows the 888px column by the same amount on both
// sides, so the video can sit right of the copy and stay legible while the whole
// section remains centred on the page. Below that it stays stacked.
const wideSection =
  "min-[1280px]:w-[min(100vw-96px,1240px)] min-[1280px]:ml-[calc(50%-min(50vw-48px,620px))]";
const mediaRow =
  "flex flex-col gap-6 min-[1280px]:grid min-[1280px]:grid-cols-[360px_minmax(0,1fr)] min-[1280px]:gap-12 min-[1280px]:items-start";
const mediaSlot = "order-first min-[1280px]:order-none";
const bordered = "pt-[clamp(64px,9vw,96px)] border-t border-hairline";

// The table near the top of the page. Rows jump down to the write-ups below About.
export function WorkIndex() {
  return (
    <ChapterSection id="work" className={wideSection}>
      <Reveal>
        <SectionLabel label="Selected work" title="Things I’ve built, and how." />
      </Reveal>

      <Reveal>
        <nav aria-label="Projects">
          <ol className="m-0 p-0 list-none border-b border-hairline">
            {PROJECTS.map((p, i) => (
              <li key={p.id} className="border-t border-hairline">
                <a
                  href={`#${p.id}`}
                  className="group grid grid-cols-[28px_minmax(0,1fr)_auto] gap-x-4 gap-y-1 items-baseline py-6 px-4 -mx-4 rounded-xl min-[860px]:grid-cols-[28px_200px_minmax(0,1fr)_210px_auto] min-[860px]:gap-x-6 transition-colors duration-200 ease-out hover:bg-surface"
                >
                  <span className="text-[0.875rem] tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.125rem,2vw,1.3125rem)] leading-snug tracking-[-0.015em] font-medium text-ink">
                    {p.name}
                  </span>
                  <span className="col-start-2 row-start-2 text-[0.9375rem] leading-normal text-muted text-pretty min-[860px]:col-start-3 min-[860px]:row-start-1">
                    {p.summary}
                  </span>
                  <span className="hidden min-[860px]:block text-[0.875rem] text-muted">
                    {p.stack}
                    <span className="block mt-1 text-ink/70">{p.status}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="col-start-3 row-start-1 text-[0.9375rem] text-muted transition-[transform,color] duration-200 ease-out group-hover:translate-y-0.5 group-hover:text-ink min-[860px]:col-start-5"
                  >
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Reveal>

    </ChapterSection>
  );
}

// The full write-ups, after About. Each article id matches a row in WorkIndex.
export default function Work() {
  return (
    <ChapterSection id="projects" className={wideSection}>
      <Reveal>
        <SectionLabel label="Project write-ups" title="How each one was built." />
      </Reveal>

      <Reveal>
        <article id="tfspace" className={`flex flex-col gap-8 mb-[clamp(96px,14vw,160px)] ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>Multi-tenant platform · Solo backend · Live</div>
            <h3 className={title}>TFSpace</h3>
            <p className={dek}>
              A real-estate workspace platform: companies hold spaces, spaces hold properties and
              timelines, and every tenant needs its own boundary.
            </p>
          </div>

          <div className={mediaRow}>
            <div className="flex flex-col gap-4.5 max-w-[68ch]">
              <p className={bodyP}>
                I built the backend on my own across 393 commits: NestJS and TypeScript over Prisma and PostgreSQL, with a
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
            <div className={mediaSlot}>
              <LoopVideo
                name="tfspace"
                label="Animated architecture diagram of TFSpace. Google OAuth, phone OTP and email OTP flow into one JWT session layer, then a ten-role RBAC gate, then fan out to separate workspaces, each on its own subdomain and holding spaces with properties and timelines. Around that core sit the NestJS API, Docker and Kubernetes, PostgreSQL with Prisma, Supabase storage and SendGrid email, and Socket.io pushes live updates along the lines as small pulses."
                caption="Three auth flows, one JWT session layer, ten roles of RBAC and a separate workspace per tenant, on NestJS with Prisma and PostgreSQL, Supabase, SendGrid, Docker and Kubernetes. Socket.io pushes live updates."
              />
            </div>
          </div>

          <div className={mediaRow}>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-5">
              <ScreenshotFrame
                src="/images/tfspace-space-analytics.png"
                sizes="(max-width: 640px) 100vw, (max-width: 1279px) 434px, 360px"
                alt="TFSpace analytics panels"
                width={1440}
                height={902}
                caption="Aggregates computed per space, served over the same tenant-scoped API and pushed live over Socket.io."
              />
              <ScreenshotFrame
                src="/images/tfspace-property-detail.png"
                sizes="(max-width: 640px) 100vw, (max-width: 1279px) 434px, 360px"
                alt="TFSpace property detail screen"
                width={1441}
                height={901}
                caption="Property records with media in Supabase storage; document actions trigger SendGrid templates."
              />
            </div>
            <div className={mediaSlot}>
              <ScreenshotFrame
                src="/images/tfspace-space-overview.png"
                alt="TFSpace space overview screen"
                width={1442}
                height={901}
                sizes="(max-width: 1000px) 100vw, (max-width: 1279px) 888px, 832px"
                withBar
                caption="One space inside a workspace, served on that workspace’s own subdomain."
              />
            </div>
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
            <span className="text-[0.9375rem] text-muted">Backend repo · private</span>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article id="anti-freeze" className={`flex flex-col gap-8 mb-[clamp(96px,14vw,160px)] ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>macOS menu bar app · Solo · Open source</div>
            <h3 className={title}>Anti-Freeze</h3>
            <p className={dek}>
              A menu bar app that warns you before an 8 GB Mac slows down, names the app causing it, and
              offers careful fixes: it asks apps to quit normally and only ever moves files to the Trash.
            </p>
          </div>

          <div className={mediaRow}>
            <div className="flex flex-col gap-4.5 max-w-[68ch]">
              <p className={bodyP}>
                Go on Wails v3, with cgo calls into public macOS APIs for memory pressure, swap, disk and
                per-process data, and SQLite for history. It shows one number, how much room is left, and
                only forecasts a slowdown when a least-squares fit over the last ten minutes is confident.
                Every threshold comes from the Mac it runs on, and after a week it adjusts to where that
                Mac actually struggled, never becoming less cautious than the defaults.
              </p>
              <p className={bodyP}>
                The fixes are deliberately careful. Before quitting an app it checks whether the app looks
                busy, then asks it to quit normally so it can prompt you to save. Disk cleanup moves files
                to the Trash and never deletes them. There is no network code at all, and the tests fail
                the build if a networking package is imported. Over a ten-minute run of its own measuring
                script, the main process averaged 0.89% of one core and peaked at 45 MB.
              </p>
            </div>
            <div className={mediaSlot}>
              <ScreenshotFrame
                src="/images/antifreeze-dashboard.png"
                alt="Anti-Freeze dashboard: 1.4 GB to spare, a memory and disk bar, and a 24-hour timeline with two slowdowns"
                width={2240}
                height={1600}
                sizes="(max-width: 1000px) 100vw, (max-width: 1279px) 888px, 832px"
                withBar
                caption="The dashboard on synthetic demo data: room to spare, the memory and disk runway, and a 24-hour timeline where both slowdowns trace back to the same app."
              />
            </div>
          </div>

          <div className="max-w-[420px]">
            <ScreenshotFrame
              src="/images/antifreeze-safety.png"
              alt="Anti-Freeze safety check: Chrome looks busy, so the default button is Keep Chrome open"
              width={840}
              height={676}
              sizes="(max-width: 480px) 100vw, 420px"
              caption="The safety check before quitting. A busy app gets “Keep it open” as the default button."
            />
          </div>

          <div className={pillRow}>
            {TAGS_ANTIFREEZE.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <Link href="https://github.com/Prime-Cave/anti-freeze/releases/latest" variant="accent">
              Download for macOS ↗
            </Link>
            <Link href="https://github.com/Prime-Cave/anti-freeze">github.com/Prime-Cave/anti-freeze ↗</Link>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article id="the-network" className={`flex flex-col gap-8 mb-[clamp(96px,14vw,160px)] ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>Student social app · App and API · In development</div>
            <h3 className={title}>The Network</h3>
            <p className={dek}>
              A social network for ALU students: meet people you’ve crossed paths with, chat one to one
              and in country groups, post, and find clubs, events and student ventures.
            </p>
          </div>

          <div className={mediaRow}>
            <div className="flex flex-col gap-4.5 max-w-[68ch]">
              <p className={bodyP}>
                It started as a UI-only Flutter prototype. I rebuilt it as a working app with a
                feature-first structure and an in-memory backend, so the whole app runs offline on seeded
                data, plus a live mode that moves each feature onto the real API one phase at a time. A
                shared component library and generated design tokens drive eight themes, with golden tests
                in light, dark and at 200% text size.
              </p>
              <p className={bodyP}>
                The API is NestJS, Prisma and PostgreSQL, built on an earlier student-platform backend and
                largely rewritten. Google ID tokens are checked on the server, so only @alustudent.com
                accounts get in, and refresh tokens rotate. It has a Socket.io gateway for real-time
                updates (the app polls for now), and posting, messaging and reports each have their own
                rate limit. A security review ahead of the planned pilot cut production dependency
                advisories from 214 to 26 and kept search terms and emails out of logs and error reports.
              </p>
              <p className={bodyP}>
                Compass, the in-app helper, sits behind a model interface. Guardrails run before and after
                any model, and its tools are the only way it can reach data. Until a provider is chosen, it
                routes requests by keyword and calls the same tools.
              </p>
            </div>
            <figure className="m-0 flex flex-col gap-3.5 order-first min-[1280px]:order-none">
              <div className="grid grid-cols-3 gap-3">
                {NETWORK_SCREENS.map((s) => (
                  <ScreenshotFrame
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    width={390}
                    height={844}
                    sizes="(max-width: 1000px) 33vw, 280px"
                  />
                ))}
              </div>
              <figcaption className={CAPTION}>
                Home, People and Chat, from the app’s golden-test screenshots with seeded demo accounts.
              </figcaption>
            </figure>
          </div>

          <div className={pillRow}>
            {TAGS_NETWORK.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </div>

          <div className={linkRow}>
            <span className="text-[0.9375rem] text-muted">
              App and API repos · private · pilot planned
            </span>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article id="elvindake" className={`flex flex-col gap-8 mb-[clamp(96px,14vw,160px)] ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>Headless commerce · Solo · Live</div>
            <h3 className={title}>ElvinDake Storefront</h3>
            <p className={dek}>
              I built a live fashion brand’s custom Liquid theme, then moved it onto a headless stack
              without the storefront changing under its customers.
            </p>
          </div>

          <div className={mediaRow}>
            <div className="flex flex-col gap-6">
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
            </div>
            <div className={mediaSlot}>
              <LoopVideo
                name="elvindake"
                label="Animated migration diagram of the ElvinDake storefront. The storefront stays unchanged in the middle while content blocks move from Shopify metaobjects on the left into Sanity on the right, and the stack serving it swaps from the Shopify Liquid theme, built first and run from the Shopify admin, to Hydrogen on Oxygen with GraphQL."
                caption="The Liquid theme came first. Content then moves from Shopify metaobjects into Sanity and the stack swaps to Hydrogen on Oxygen, while the storefront stays the same."
              />
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <article id="petra-house" className={`flex flex-col gap-8 mb-[clamp(96px,14vw,160px)] ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>Client site · Solo · Live</div>
            <h3 className={title}>Petra House Andover</h3>
            <p className={dek}>
              A live site for a church that needed its sermons, programmes and prayer requests in one
              place.
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
        <article id="pixl" className={`flex flex-col gap-8 mb-0 ${bordered} ${anchor}`}>
          <div className="flex flex-col gap-4">
            <div className={eyebrow}>Native desktop app · Solo · Open source</div>
            <h3 className={title}>PIXL</h3>
            <p className={dek}>
              A pixel-art editor with no web platform underneath it. The canvas had to be drawn by hand.
            </p>
          </div>

          <div className={mediaRow}>
            <div className="flex flex-col gap-6">
              <p className={`${bodyP} max-w-[68ch]`}>
                Go and Fyne, with the canvas renderer written by hand in{" "}
                <span className="font-mono text-sm text-ink [overflow-wrap:anywhere]">pxcanvasrenderer.go</span>, mouse input handled
                separately in <span className="font-mono text-sm text-ink [overflow-wrap:anywhere]">mouse.go</span>, and brush behaviour
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
            </div>
            <div className={mediaSlot}>
              <LoopVideo
                name="pixl"
                label="Animated diagram of PIXL. Three separate boxes, the renderer in pxcanvasrenderer.go, input in mouse.go and the brush package, stay apart while a small pixel-art plant is painted onto a canvas one cell at a time."
                caption="Renderer, input and brushes stay in separate boxes while the canvas gets painted cell by cell."
              />
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal>
        <div className="mt-[clamp(48px,7vw,72px)] pt-[clamp(32px,5vw,48px)] border-t border-hairline flex flex-wrap gap-x-10 gap-y-4 items-baseline">
          <div className="text-[0.9375rem] text-muted min-w-[120px]">Also</div>
          <p className="text-[1.0625rem] leading-[1.7] text-muted m-0 max-w-[60ch] text-pretty">
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
