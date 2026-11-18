export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[13px] leading-none text-muted bg-surface rounded-full px-3 py-[7px]">
      {children}
    </span>
  );
}
