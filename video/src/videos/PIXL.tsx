import { useCurrentFrame } from "remotion";
import { envelope, ramp } from "../anim";
import { Connector, horizontalCurve } from "../components/Connector";
import { NodeBox } from "../components/NodeBox";
import { Pulse } from "../components/Pulse";
import { Stage } from "../components/Stage";
import { COLORS, monoLabel } from "../tokens";

const CELL = 52;
const GRID = 12;
const CANVAS = { x: 860, y: 138, size: CELL * GRID };

const BOX = { x: 80, width: 520, height: 176 };
const BOXES = [
  { y: 138, label: "Renderer", code: "pxcanvasrenderer.go" },
  { y: 362, label: "Input", code: "mouse.go" },
  { y: 586, label: "Brushes", code: "brush/ package" },
];

const wires = BOXES.map(({ y }, i) =>
  horizontalCurve(
    BOX.x + BOX.width,
    y + BOX.height / 2,
    CANVAS.x,
    CANVAS.y + CANVAS.size * (0.25 + i * 0.25),
  ),
);

const SPRITE = [
  "............",
  ".....aa.....",
  "..a..aa..a..",
  ".aaa.aa.aaa.",
  ".aaaaaaaaaa.",
  "...aaaaaa...",
  ".....mm.....",
  ".....mm.....",
  "...iiiiii...",
  "...iiiiii...",
  "....iiii....",
  "....iiii....",
];

const INK: Record<string, string> = {
  a: COLORS.accent,
  m: COLORS.muted,
  i: COLORS.ink,
};

// Painted the way you would draw it: pot, then stem, then leaves, bottom up.
const LAYERS = ["i", "m", "a"];
const cells = SPRITE.flatMap((row, y) =>
  [...row].flatMap((key, x) => (key === "." ? [] : [{ x, y, key }])),
).sort(
  (p, q) => LAYERS.indexOf(p.key) - LAYERS.indexOf(q.key) || q.y - p.y || p.x - q.x,
);

const PAINT_START = 22;
const FRAMES_PER_CELL = 4;
const PAINT_END = PAINT_START + cells.length * FRAMES_PER_CELL;
const FADE_OUT = 268;
const PULSE_PERIOD = 45;

export const PIXL = () => {
  const frame = useCurrentFrame();

  const paintedIndex = Math.floor((frame - PAINT_START) / FRAMES_PER_CELL);
  const painting = frame >= PAINT_START && frame < PAINT_END;
  const current = cells[Math.max(0, Math.min(cells.length - 1, paintedIndex))];
  const cleared = 1 - ramp(frame, FADE_OUT, 24);
  const live = envelope(frame, PAINT_START - 8, PAINT_END + 8, 8);

  return (
    <Stage
      wires={
        <>
          {wires.map((d) => (
            <Connector key={d} d={d} />
          ))}
          {wires.map((d, i) => (
            <Pulse
              key={d}
              d={d}
              t={(frame + (i * PULSE_PERIOD) / wires.length) / PULSE_PERIOD}
              opacity={live}
            />
          ))}
        </>
      }
    >
      {BOXES.map(({ y, label, code }) => (
        <NodeBox
          key={label}
          x={BOX.x}
          y={y}
          width={BOX.width}
          height={BOX.height}
          label={label}
          code={code}
        >
          {label === "Brushes" ? (
            <div
              style={{
                position: "absolute",
                right: 28,
                top: 28,
                width: 40,
                height: 40,
                borderRadius: 4,
                backgroundColor: INK[current.key],
                opacity: live,
              }}
            />
          ) : null}
        </NodeBox>
      ))}

      <div
        style={{
          position: "absolute",
          left: CANVAS.x,
          top: CANVAS.y,
          width: CANVAS.size,
          height: CANVAS.size,
          boxShadow: `0 0 0 2px ${COLORS.hairline}`,
          backgroundColor: COLORS.surface,
          backgroundImage: `linear-gradient(${COLORS.hairline} 2px, transparent 2px), linear-gradient(90deg, ${COLORS.hairline} 2px, transparent 2px)`,
          backgroundSize: `${CELL}px ${CELL}px`,
          borderRadius: 2,
        }}
      >
        {cells.map(({ x, y, key }, i) =>
          i <= paintedIndex ? (
            <div
              key={`${x}-${y}`}
              style={{
                position: "absolute",
                left: x * CELL + 2,
                top: y * CELL + 2,
                width: CELL - 2,
                height: CELL - 2,
                backgroundColor: INK[key],
                opacity: cleared,
              }}
            />
          ) : null,
        )}
        {painting ? (
          <div
            style={{
              position: "absolute",
              left: current.x * CELL,
              top: current.y * CELL,
              width: CELL,
              height: CELL,
              boxSizing: "border-box",
              border: `3px solid ${COLORS.ink}`,
            }}
          />
        ) : null}
      </div>

      <div
        style={{ ...monoLabel, position: "absolute", left: BOX.x, top: 70, color: COLORS.muted }}
      >
        PIXL
      </div>
      <div
        style={{
          ...monoLabel,
          position: "absolute",
          left: CANVAS.x,
          top: 70,
          color: COLORS.muted,
        }}
      >
        Canvas
      </div>
    </Stage>
  );
};
