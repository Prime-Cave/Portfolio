export default function ChapterSection({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-[clamp(96px,15vw,176px)] scroll-mt-[64px] ${className}`.trim()}>
      {children}
    </section>
  );
}
