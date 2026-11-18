export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-[0.04em] text-muted border border-hairline rounded-full px-[11px] py-[5px] transition-colors duration-200 ease-out hover:border-accent hover:text-ink">
      {children}
    </span>
  );
}
