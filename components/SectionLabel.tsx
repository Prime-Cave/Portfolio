// Section opener: a small plain label over one large, confident line.
export default function SectionLabel({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <header className="mb-[clamp(48px,8vw,88px)]">
      <p className="text-[15px] text-muted m-0 mb-4">{label}</p>
      <h2 className="text-[clamp(36px,6vw,64px)] leading-[1.02] tracking-[-0.04em] font-medium text-ink m-0 max-w-[16ch] text-balance">
        {title}
      </h2>
    </header>
  );
}
