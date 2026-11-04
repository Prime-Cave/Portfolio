import { useCurrentFrame } from "remotion";
import { envelope, ramp } from "../anim";
import { Connector, horizontalCurve, verticalCurve } from "../components/Connector";
import { NodeBox } from "../components/NodeBox";
import { Pulse } from "../components/Pulse";
import { Stage } from "../components/Stage";
import { COLORS, monoLabel } from "../tokens";

const COLUMNS = [310, 800, 1290];
const AUTH_FLOWS = ["Google OAuth", "Phone OTP", "Email OTP"];
const WORKSPACES = ["A", "B", "C"];
const ROLE_COUNT = 10;

const AUTH = { y: 56, width: 340, height: 84 };
const JWT = { x: 540, y: 200, width: 520, height: 84 };
const RBAC = { x: 540, y: 332, width: 520, height: 100 };
const CARD = { y: 548, width: 420, height: 296 };

const FLANK = { width: 400, height: 68, leftX: 100, rightX: 1100, rows: [200, 282, 364] };
const LEFT_STACK = ["NestJS API", "Socket.io", "Docker + Kubernetes"];
const RIGHT_STACK = ["PostgreSQL + Prisma", "Supabase storage", "SendGrid email"];

const LANDING_OFFSET = 120;
const authWires = COLUMNS.map((x, i) =>
  verticalCurve(x, AUTH.y + AUTH.height, 800 + (i - 1) * LANDING_OFFSET, JWT.y),
);
const sessionWire = `M 800 ${JWT.y + JWT.height} L 800 ${RBAC.y}`;
const tenantWires = COLUMNS.map((x, i) =>
  verticalCurve(800 + (i - 1) * LANDING_OFFSET, RBAC.y + RBAC.height, x, CARD.y),
);

const flankY = (row: number) => FLANK.rows[row] + FLANK.height / 2;
const leftEdge = FLANK.leftX + FLANK.width;
const rbacY = RBAC.y + RBAC.height / 2;
const jwtY = JWT.y + JWT.height / 2;

// The API and Socket.io feed the core from the left; data services hang off the right.
const leftWires = [
  horizontalCurve(leftEdge, flankY(0), JWT.x, jwtY),
  horizontalCurve(leftEdge, flankY(1), RBAC.x, rbacY),
];
const rightWires = FLANK.rows.map((_, row) =>
  horizontalCurve(JWT.x + JWT.width, rbacY - 18 + row * 18, FLANK.rightX, flankY(row)),
);

const FLANK_START = 226;
const FLANK_STEP = 6;
const FADE_OUT = 332;
const LIVE_START = 268;
const LIVE_END = 328;
const PULSE_PERIOD = 43;

const Row = ({
  text,
  indent,
  progress,
}: {
  text: string;
  indent: number;
  progress: number;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: 42,
      fontSize: 30,
      color: COLORS.ink,
      paddingLeft: indent,
      opacity: progress,
    }}
  >
    <span
      style={{
        width: 18,
        height: 2,
        backgroundColor: COLORS.muted,
        opacity: indent ? 0.7 : 0,
        display: indent ? "block" : "none",
      }}
    />
    {text}
  </div>
);

export const TFSpace = () => {
  const frame = useCurrentFrame();
  const visible = 1 - ramp(frame, FADE_OUT, 24);
  const live = envelope(frame, LIVE_START, LIVE_END, 12);

  return (
    <Stage
      wires={
        <g opacity={visible}>
          {authWires.map((d, i) => (
            <Connector key={d} d={d} progress={ramp(frame, 54 + i * 4, 26)} />
          ))}
          <Connector d={sessionWire} progress={ramp(frame, 100, 12)} />
          {tenantWires.map((d, i) => (
            <Connector key={d} d={d} progress={ramp(frame, 156 + i * 4, 24)} />
          ))}
          {leftWires.map((d, i) => (
            <Connector key={d} d={d} progress={ramp(frame, FLANK_START + i * FLANK_STEP, 12)} />
          ))}
          {rightWires.map((d, i) => (
            <Connector key={d} d={d} progress={ramp(frame, FLANK_START + i * FLANK_STEP, 12)} />
          ))}
          {authWires.map((d, i) => (
            <Pulse
              key={d}
              d={d}
              t={(frame - 54 - i * 4) / 34}
              opacity={envelope(frame, 54 + i * 4, 88 + i * 4, 2)}
            />
          ))}
          {tenantWires.map((d, i) => (
            <Pulse
              key={d}
              d={d}
              t={(frame + i * 14) / PULSE_PERIOD}
              opacity={live}
            />
          ))}
          <Pulse d={leftWires[1]} t={frame / PULSE_PERIOD} opacity={live} />
        </g>
      }
    >
      <div style={{ position: "absolute", inset: 0, opacity: visible }}>
        {AUTH_FLOWS.map((title, i) => {
          const start = 10 + i * 14;
          return (
            <NodeBox
              key={title}
              x={COLUMNS[i] - AUTH.width / 2}
              y={AUTH.y}
              width={AUTH.width}
              height={AUTH.height}
              title={title}
              progress={ramp(frame, start)}
              active={envelope(frame, start, start + 26)}
            />
          );
        })}

        <NodeBox
          {...JWT}
          title="JWT session layer"
          progress={ramp(frame, 80)}
          active={envelope(frame, 80, 112)}
        />

        <NodeBox
          {...RBAC}
          title="RBAC · 10 roles"
          progress={ramp(frame, 110)}
          active={envelope(frame, 110, 158)}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {Array.from({ length: ROLE_COUNT }, (_, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 4,
                  backgroundColor: COLORS.accent,
                  opacity: 0.25 + 0.75 * ramp(frame, 122 + i * 3, 6),
                }}
              />
            ))}
          </div>
        </NodeBox>

        {WORKSPACES.map((letter, i) => {
          const start = 172 + i * 12;
          const treeStart = start + 16;
          return (
            <NodeBox
              key={letter}
              x={COLUMNS[i] - CARD.width / 2}
              y={CARD.y}
              width={CARD.width}
              height={CARD.height}
              progress={ramp(frame, start)}
              active={envelope(frame, start, treeStart + 30)}
            >
              <div style={{ ...monoLabel, color: COLORS.ink }}>Workspace {letter}</div>
              <div style={{ ...monoLabel, color: COLORS.muted }}>Own subdomain</div>
              <div
                style={{
                  height: 2,
                  margin: "12px 0 10px",
                  backgroundColor: COLORS.hairline,
                }}
              />
              <Row text="Spaces" indent={0} progress={ramp(frame, treeStart, 10)} />
              <Row
                text="Properties"
                indent={14}
                progress={ramp(frame, treeStart + 8, 10)}
              />
              <Row
                text="Timelines"
                indent={14}
                progress={ramp(frame, treeStart + 16, 10)}
              />
            </NodeBox>
          );
        })}

        {[LEFT_STACK, RIGHT_STACK].map((stack, side) =>
          stack.map((title, row) => {
            const start = FLANK_START + row * FLANK_STEP;
            return (
              <NodeBox
                key={title}
                x={side ? FLANK.rightX : FLANK.leftX}
                y={FLANK.rows[row]}
                width={FLANK.width}
                height={FLANK.height}
                title={title}
                progress={ramp(frame, start, 14)}
                active={title === "Socket.io" ? live : envelope(frame, start, start + 26)}
              />
            );
          }),
        )}
      </div>
    </Stage>
  );
};
