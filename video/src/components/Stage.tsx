import type { ReactNode } from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, HEIGHT, SANS, WIDTH } from "../tokens";

// Full-canvas layers: the SVG holds wires and pulses, the rest sits above it.
export const Stage = ({
  wires,
  children,
}: {
  wires?: ReactNode;
  children: ReactNode;
}) => (
  <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: SANS }}>
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0 }}
    >
      {wires}
    </svg>
    {children}
  </AbsoluteFill>
);
