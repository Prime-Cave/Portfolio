import { getLength, getPointAtLength } from "@remotion/paths";
import { COLORS } from "../tokens";

const FADE = 0.12;

// A dot at position `t` (0–1, wrapping) along `d`. It fades at both ends of the
// path, so a repeating pulse has no visible jump where it wraps.
export const Pulse = ({
  d,
  t,
  opacity = 1,
}: {
  d: string;
  t: number;
  opacity?: number;
}) => {
  const wrapped = ((t % 1) + 1) % 1;
  const point = getPointAtLength(d, getLength(d) * wrapped);
  if (!point) return null;
  const edge = Math.min(wrapped, 1 - wrapped) / FADE;
  return (
    <circle
      cx={point.x}
      cy={point.y}
      r={7}
      fill={COLORS.accent}
      opacity={Math.min(1, edge) * opacity}
    />
  );
};
