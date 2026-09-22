import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ChapterSection from "./ui/ChapterSection";

export default function About() {
  return (
    <ChapterSection id="about">
      <Reveal>
        <SectionLabel number="01" label="About" />
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-6 max-w-[68ch]">
          <p className="text-[clamp(17px,2vw,20px)] leading-[1.62] m-0 text-ink text-pretty">
            I&apos;m drawn to the part of a problem other people route around: the data model that has to
            hold many tenants at once, the renderer nobody wants to hand-write, the CSS bug that only
            reproduces under one specificity order.
          </p>
          <p className="text-base leading-[1.66] m-0 text-muted text-pretty">
            Most of my depth is in backend systems. I built the TFSpace backend on my own across 393
            commits: multi-tenant workspaces, three auth flows resolved into one session layer, ten roles
            of access control. Alongside that I keep a standing algorithm practice, and I take work outside
            my defaults on purpose: a desktop pixel editor written in Go, a headless storefront migration in
            Hydrogen. That&apos;s how I learn quickly.
          </p>
          <p className="text-base leading-[1.66] m-0 text-muted text-pretty">
            I also founded and led RUN Tech Space, Redeemer&apos;s University&apos;s official student tech
            community. I secured the university approval and built a structure that outlasted my tenure.
            Same instinct as the code: take ownership of the part nobody else is holding.
          </p>
          <p className="text-base leading-[1.66] m-0 text-muted text-pretty">
            Five languages so far, from Go tooling to TypeScript platforms to a native GUI app.
          </p>
        </div>
      </Reveal>
    </ChapterSection>
  );
}
