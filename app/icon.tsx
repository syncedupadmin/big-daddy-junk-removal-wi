import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f05a28", color: "#202321", fontSize: 13, fontWeight: 900, letterSpacing: -1, fontFamily: "Arial" }}>
      BIG DADDY
    </div>,
    size,
  );
}
