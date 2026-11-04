import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0E0E10",
          color: "#EAEAEA",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8A8A85",
            marginBottom: 32,
          }}
        >
          Software Engineer · Systems &amp; Problem-Solving
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: -2, marginBottom: 28 }}>
          Tomisin Akinfemiwa
        </div>
        <div style={{ display: "flex", fontSize: 34, lineHeight: 1.4, color: "#EAEAEA", maxWidth: 1008 }}>
          I solve hard problems and build the <span style={{ color: "#34B67A", marginLeft: 12 }}>systems</span>
          <span style={{ marginLeft: 12 }}>around them.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
