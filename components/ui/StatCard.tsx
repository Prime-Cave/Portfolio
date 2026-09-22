export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-bg px-[clamp(16px,2.5vw,26px)] py-6 flex flex-col gap-2 transition-colors duration-200 ease-out hover:bg-surface">
      <span className="font-mono text-[clamp(22px,3vw,28px)] tracking-[-0.02em] text-ink">{value}</span>
      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">{label}</span>
    </div>
  );
}
