import { Easing, interpolate } from "remotion";

// Same curve the site uses for its reveal transitions.
const ease = Easing.bezier(0.22, 0.61, 0.36, 1);

// 0 → 1 between `start` and `start + duration`.
export const ramp = (frame: number, start: number, duration = 18) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    easing: ease,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

// 0 → 1 → 0: on from `start`, off again by `end`.
export const envelope = (frame: number, start: number, end: number, fade = 8) =>
  Math.min(ramp(frame, start, fade), 1 - ramp(frame, end - fade, fade));
