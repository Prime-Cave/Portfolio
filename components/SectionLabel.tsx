export default function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-[clamp(36px,6vw,56px)]">
      <span>{number}</span>
      <span className="w-5 h-px bg-hairline" />
      <span>{label}</span>
    </div>
  );
}
