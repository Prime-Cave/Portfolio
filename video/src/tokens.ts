import { loadFont as loadGeist } from "@remotion/google-fonts/Geist";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

// Mirrors the @theme tokens in ../app/globals.css.
export const COLORS = {
  bg: "#0e0e10",
  surface: "#161618",
  ink: "#eaeaea",
  muted: "#8a8a85",
  hairline: "#232326",
  accent: "#34b67a",
};

export const WIDTH = 1600;
export const HEIGHT = 900;
export const FPS = 30;

export const SANS = loadGeist("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
}).fontFamily;

export const MONO = loadJetBrainsMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
}).fontFamily;

export const monoLabel = {
  fontFamily: MONO,
  fontSize: 28,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
} as const;
