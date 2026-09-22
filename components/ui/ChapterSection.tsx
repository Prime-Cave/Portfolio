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
    <section
      id={id}
      className={`border-t border-hairline py-[clamp(72px,11vw,128px)] scroll-mt-[72px] ${className}`.trim()}
    >
      {children}
    </section>
  );
}
