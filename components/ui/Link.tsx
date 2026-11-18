import type { AnchorHTMLAttributes } from "react";

type Variant = "quiet" | "accent" | "inline" | "contact" | "button" | "ghost";

const base = "transition-colors duration-200 ease-out";

// Small text links look 19–24px tall; this invisible box around them makes the
// tappable area about 44px tall without moving anything in the layout.
const hitArea = "relative after:absolute after:-inset-x-1.5 after:-inset-y-3 after:content-['']";

// Shared shape for the two hero buttons (44px tall, pill-shaped).
const pill =
  "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-mono text-xs tracking-[0.06em]";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Small muted mono link that brightens on hover (hero socials, work meta).
  quiet: `${base} ${hitArea} font-mono text-xs text-muted border-b border-hairline pb-0.5 hover:text-ink hover:border-accent`,
  // Text CTA link — accent underline, ink text (project links).
  accent: `${base} ${hitArea} font-mono text-xs tracking-[0.06em] text-ink border-b border-accent pb-0.5 hover:text-accent-hover`,
  // Link inline within a paragraph of body text.
  inline: `${base} text-ink border-b border-hairline hover:border-accent`,
  // Contact-section link list (ink text, hairline underline, accent on hover).
  contact: `${base} ${hitArea} font-mono text-[13px] tracking-[0.04em] text-ink border-b border-hairline pb-[3px] hover:border-accent`,
  // Primary button: filled accent (hero "View CV").
  button: `${base} ${pill} bg-accent text-bg font-medium hover:bg-accent-hover`,
  // Secondary button: outlined (hero "Email me").
  ghost: `${base} ${pill} border border-hairline text-ink hover:border-accent`,
};

export default function Link({
  variant = "quiet",
  className = "",
  ...props
}: { variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`${VARIANT_CLASSES[variant]} ${className}`.trim()} {...props} />;
}
