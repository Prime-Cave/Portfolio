export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-3 pt-6 border-t border-hairline">
      <span className="text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.045em] font-medium text-ink tabular-nums">
        {value}
      </span>
      <span className="text-[15px] leading-snug text-muted">{label}</span>
    </div>
  );
}
