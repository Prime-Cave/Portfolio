import type { ReactNode } from "react";
import { interpolateColors } from "remotion";
import { COLORS, MONO, monoLabel } from "../tokens";

export const NodeBox = ({
  x,
  y,
  width,
  height,
  title,
  label,
  code,
  progress = 1,
  active = 0,
  dim = 0,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  title?: string;
  label?: string;
  code?: string;
  progress?: number;
  active?: number;
  dim?: number;
  children?: ReactNode;
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width,
      height,
      boxSizing: "border-box",
      padding: "0 28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 6,
      backgroundColor: COLORS.surface,
      border: `2px solid ${interpolateColors(active, [0, 1], [COLORS.hairline, COLORS.accent])}`,
      borderRadius: 12,
      opacity: progress * (1 - dim * 0.45),
      transform: `translateY(${(1 - progress) * 10}px)`,
    }}
  >
    {label ? <div style={{ ...monoLabel, color: COLORS.muted }}>{label}</div> : null}
    {title ? (
      <div style={{ fontSize: 34, fontWeight: 500, color: COLORS.ink }}>{title}</div>
    ) : null}
    {code ? (
      <div style={{ fontFamily: MONO, fontSize: 28, color: COLORS.ink }}>{code}</div>
    ) : null}
    {children}
  </div>
);
