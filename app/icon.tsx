import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0E10",
          borderRadius: 7,
          border: "1px solid #232326",
          fontFamily: "monospace",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.5,
          color: "#EAEAEA",
        }}
      >
        T<span style={{ color: "#D9743F" }}>A</span>
      </div>
    ),
    { ...size },
  );
}
