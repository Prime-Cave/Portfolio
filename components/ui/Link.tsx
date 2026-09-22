import type { AnchorHTMLAttributes } from "react";

type Variant = "quiet" | "accent" | "inline" | "contact";

const base = "transition-colors duration-200 ease-out";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Small muted mono link that brightens on hover (hero socials, work meta).
  quiet: `${base} font-mono text-xs text-muted border-b border-hairline pb-0.5 hover:text-ink hover:border-accent`,
  // Primary/CTA link — accent underline, ink text (project links, CV).
  accent: `${base} font-mono text-xs tracking-[0.06em] text-ink border-b border-accent pb-0.5 hover:text-accent-hover`,
  // Link inline within a paragraph of body text.
  inline: `${base} text-ink border-b border-hairline hover:border-accent`,
  // Contact-section link list (ink text, hairline underline, accent on hover).
  contact: `${base} font-mono text-[13px] tracking-[0.04em] text-ink border-b border-hairline pb-[3px] hover:border-accent`,
};

export default function Link({
  variant = "quiet",
  className = "",
  ...props
}: { variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`${VARIANT_CLASSES[variant]} ${className}`.trim()} {...props} />;
}
