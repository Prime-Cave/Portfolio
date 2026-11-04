import { interpolate, useCurrentFrame } from "remotion";
import { envelope, ramp } from "../anim";
import { Connector } from "../components/Connector";
import { NodeBox } from "../components/NodeBox";
import { Pulse } from "../components/Pulse";
import { Stage } from "../components/Stage";
import { COLORS, MONO, monoLabel } from "../tokens";

const COLUMN = { width: 360, left: 80, right: 1160 };
const THEME = { y: 240, height: 150 };
const GRAPHQL = { y: 70, height: 110 };
const CONTENT = { y: 620, height: 210 };
const STORE = { x: 560, y: 70, width: 480, height: 490 };

const BLOCK = 64;
const BLOCK_GAP = 16;
const BLOCK_COUNT = 4;
const BLOCK_Y = CONTENT.y + 116;
const BLOCK_INSET = 28;

const slotX = (column: number, i: number) =>
  column + BLOCK_INSET + i * (BLOCK + BLOCK_GAP);

const leftEdge = COLUMN.left + COLUMN.width;
const themeY = THEME.y + THEME.height / 2;
const leftWire = `M ${leftEdge} ${themeY} L ${STORE.x} ${themeY}`;
const rightWire = `M ${COLUMN.right} ${themeY} L ${STORE.x + STORE.width} ${themeY}`;
const leftCenter = COLUMN.left + COLUMN.width / 2;
const rightCenter = COLUMN.right + COLUMN.width / 2;
const metaobjectsWire = `M ${leftCenter} ${CONTENT.y} L ${leftCenter} ${THEME.y + THEME.height}`;
const sanityWire = `M ${rightCenter} ${CONTENT.y} L ${rightCenter} ${THEME.y + THEME.height}`;
const adminWire = `M ${leftCenter} ${GRAPHQL.y + GRAPHQL.height} L ${leftCenter} ${THEME.y}`;
const graphqlWire = `M ${rightCenter} ${GRAPHQL.y + GRAPHQL.height} L ${rightCenter} ${THEME.y}`;
const rail = `M ${leftEdge} ${BLOCK_Y + BLOCK / 2} L ${COLUMN.right} ${BLOCK_Y + BLOCK / 2}`;

const MOVE_START = 56;
const MOVE_STEP = 34;
const SWAP = MOVE_START + MOVE_STEP * BLOCK_COUNT;
const LIVE_START = SWAP + 44;
const RESET = 318;
const PULSE_PERIOD = 40;

// The storefront never animates: it is the same pixels for the whole loop.
const Storefront = () => (
  <div
    style={{
      position: "absolute",
      left: STORE.x,
      top: STORE.y,
      width: STORE.width,
      height: STORE.height,
      boxSizing: "border-box",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      backgroundColor: COLORS.surface,
      border: `2px solid ${COLORS.hairline}`,
      borderRadius: 12,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...monoLabel,
          fontSize: 30,
          letterSpacing: "0.2em",
          color: COLORS.ink,
        }}
      >
        Elvin Dake
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{ width: 34, height: 4, backgroundColor: COLORS.muted }}
          />
        ))}
      </div>
    </div>
    <div style={{ flex: 1, backgroundColor: COLORS.hairline, borderRadius: 6 }} />
    <div style={{ display: "flex", gap: 16 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 130,
            backgroundColor: COLORS.hairline,
            borderRadius: 6,
          }}
        />
      ))}
    </div>
  </div>
);

const Block = ({ x, opacity, moving }: { x: number; opacity: number; moving: number }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: BLOCK_Y,
      width: BLOCK,
      height: BLOCK,
      borderRadius: 6,
      opacity,
      backgroundColor: moving > 0 ? COLORS.accent : COLORS.muted,
    }}
  />
);

export const ElvinDake = () => {
  const frame = useCurrentFrame();

  const swapOut = ramp(frame, SWAP, 22);
  const reset = ramp(frame, RESET, 32);
  const newStack = ramp(frame, SWAP + 14, 26);
  const sanityIn = ramp(frame, 24, 20);

  const rightVisible = 1 - reset;
  const oldDim = swapOut * (1 - reset);
  const live = envelope(frame, LIVE_START, RESET, 10);

  // The two "served by" labels share a spot, so one clears before the other shows.
  const served = newStack * rightVisible;
  const servedByLiquid = Math.max(0, 1 - served * 2);
  const servedByHydrogen = Math.max(0, served * 2 - 1);

  const blocks = Array.from({ length: BLOCK_COUNT }, (_, n) => {
    const i = BLOCK_COUNT - 1 - n;
    const start = MOVE_START + n * MOVE_STEP;
    const move = ramp(frame, start, MOVE_STEP - 4);
    const x = interpolate(
      move,
      [0, 1],
      [slotX(COLUMN.left, i), slotX(COLUMN.right, i)],
    );
    return { key: i, x, move, moving: envelope(frame, start, start + MOVE_STEP - 2, 1) };
  });

  return (
    <Stage
      wires={
        <>
          <Connector d={rail} opacity={0.25} />
          <Connector d={leftWire} progress={1 - oldDim} active={oldDim === 0} />
          <Connector d={metaobjectsWire} opacity={0.5 - oldDim * 0.3} />
          <Connector d={adminWire} opacity={0.5 - oldDim * 0.3} />
          <g opacity={rightVisible}>
            <Connector d={rightWire} progress={newStack} active />
            <Connector d={graphqlWire} progress={newStack} />
            <Connector d={sanityWire} progress={newStack} />
            <Pulse d={graphqlWire} t={frame / PULSE_PERIOD} opacity={live} />
            <Pulse d={sanityWire} t={(frame + 20) / PULSE_PERIOD} opacity={live} />
          </g>
        </>
      }
    >
      <Storefront />

      <NodeBox
        x={COLUMN.left}
        y={GRAPHQL.y}
        width={COLUMN.width}
        height={GRAPHQL.height}
        title="Shopify admin"
      >
        <div style={{ ...monoLabel, color: COLORS.muted }}>Managed</div>
      </NodeBox>
      <NodeBox
        x={COLUMN.left}
        y={THEME.y}
        width={COLUMN.width}
        height={THEME.height}
        title="Shopify Liquid"
        active={1 - oldDim}
        dim={oldDim}
      >
        <div style={{ ...monoLabel, color: COLORS.muted }}>Built first</div>
      </NodeBox>
      <NodeBox
        x={COLUMN.left}
        y={CONTENT.y}
        width={COLUMN.width}
        height={CONTENT.height}
        dim={oldDim}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            fontSize: 32,
            fontWeight: 500,
            whiteSpace: "nowrap",
            color: COLORS.ink,
          }}
        >
          Shopify metaobjects
        </div>
      </NodeBox>

      <NodeBox
        x={COLUMN.right}
        y={THEME.y}
        width={COLUMN.width}
        height={THEME.height}
        title="Hydrogen"
        progress={newStack * rightVisible}
        active={newStack}
      >
        <div style={{ ...monoLabel, color: COLORS.muted }}>on Oxygen</div>
      </NodeBox>
      <NodeBox
        x={COLUMN.right}
        y={GRAPHQL.y}
        width={COLUMN.width}
        height={GRAPHQL.height}
        title="GraphQL"
        progress={newStack * rightVisible}
      />
      <NodeBox
        x={COLUMN.right}
        y={CONTENT.y}
        width={COLUMN.width}
        height={CONTENT.height}
        progress={sanityIn * rightVisible}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            fontSize: 32,
            fontWeight: 500,
            whiteSpace: "nowrap",
            color: COLORS.ink,
          }}
        >
          Sanity
        </div>
      </NodeBox>

      {blocks.map(({ key, x, move, moving }) =>
        move > 0 && reset > 0 ? (
          [
            <Block key={`in-${key}`} x={x} opacity={1 - reset} moving={0} />,
            <Block key={`back-${key}`} x={slotX(COLUMN.left, key)} opacity={reset} moving={0} />,
          ]
        ) : (
          <Block key={key} x={x} opacity={1} moving={moving} />
        ),
      )}

      <div
        style={{
          position: "absolute",
          left: STORE.x,
          width: STORE.width,
          top: STORE.y + STORE.height + 16,
          height: 40,
          textAlign: "center",
          fontFamily: MONO,
        }}
      >
        <div
          style={{
            ...monoLabel,
            position: "absolute",
            width: "100%",
            color: COLORS.muted,
            opacity: servedByLiquid,
          }}
        >
          Served by Liquid
        </div>
        <div
          style={{
            ...monoLabel,
            position: "absolute",
            width: "100%",
            color: COLORS.accent,
            opacity: servedByHydrogen,
          }}
        >
          Served by Hydrogen
        </div>
      </div>

      <div
        style={{
          ...monoLabel,
          position: "absolute",
          left: STORE.x,
          width: STORE.width,
          top: BLOCK_Y + BLOCK + 22,
          textAlign: "center",
          color: COLORS.muted,
        }}
      >
        Content blocks
      </div>
    </Stage>
  );
};
