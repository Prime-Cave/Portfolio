const INK = "#EAEAEA";
const ACCENT = "#34B67A";

// T and A fused: the T's bar caps the A, and the A's crossbar carries the accent.
export default function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect x="9" y="11" width="46" height="8" fill={INK} />
      <path d="M27.5 19h9L55 55h-9L32 27.5 18 55H9z" fill={INK} />
      <path d="M26.2 37.8h11.6l3.6 7.2H22.6z" fill={ACCENT} />
    </svg>
  );
}
