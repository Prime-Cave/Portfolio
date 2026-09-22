export default function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="chapterLabel">
      <span>{number}</span>
      <span className="rule" />
      <span>{label}</span>
    </div>
  );
}
