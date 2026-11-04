import { evolvePath } from "@remotion/paths";
import { COLORS } from "../tokens";

// Curves that leave and arrive square to a box edge.
export const verticalCurve = (x1: number, y1: number, x2: number, y2: number) => {
  const mid = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`;
};

export const horizontalCurve = (x1: number, y1: number, x2: number, y2: number) => {
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
};

export const Connector = ({
  d,
  progress = 1,
  active = false,
  opacity = 0.5,
}: {
  d: string;
  progress?: number;
  active?: boolean;
  opacity?: number;
}) => {
  if (progress <= 0) return null;
  return (
    <path
      d={d}
      fill="none"
      stroke={active ? COLORS.accent : COLORS.muted}
      strokeWidth={2}
      strokeOpacity={active ? 1 : opacity}
      {...evolvePath(progress, d)}
    />
  );
};
