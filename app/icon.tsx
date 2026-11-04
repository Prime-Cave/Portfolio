import { ImageResponse } from "next/og";
import LogoMark from "@/components/ui/LogoMark";

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
        }}
      >
        <LogoMark size={28} />
      </div>
    ),
    { ...size },
  );
}
