import type { AnchorHTMLAttributes } from "react";

type Variant = "quiet" | "accent" | "inline" | "contact" | "button" | "ghost";

const base = "transition-[color,border-color,background-color,transform] duration-200 ease-out";

// Small text links look 19–24px tall; this invisible box around them makes the
// tappable area about 44px tall without moving anything in the layout.
const hitArea = "relative after:absolute after:-inset-x-1.5 after:-inset-y-3 after:content-['']";

// Shared pill shape, matching the hero's buttons. A slight press on click.
const pill =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-[0.9375rem] font-medium active:scale-[0.97]";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Muted secondary link that brightens on hover.
  quiet: `${base} ${hitArea} text-[0.9375rem] text-muted hover:text-ink`,
  // Primary text link (project links).
  accent: `${base} ${hitArea} text-[0.9375rem] text-ink border-b border-accent pb-0.5 hover:text-accent-hover`,
  // Link inline within a paragraph of body text.
  inline: `${base} text-ink border-b border-hairline hover:border-accent`,
  // Contact-section link list.
  contact: `${base} ${hitArea} text-[0.9375rem] text-muted hover:text-ink`,
  // Primary button: filled.
  button: `${base} ${pill} bg-ink text-bg hover:bg-white`,
  // Secondary button: outlined.
  ghost: `${base} ${pill} border border-hairline text-ink hover:border-muted`,
};

export default function Link({
  variant = "quiet",
  className = "",
  ...props
}: { variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`${VARIANT_CLASSES[variant]} ${className}`.trim()} {...props} />;
}
