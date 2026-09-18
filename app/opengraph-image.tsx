import { ImageResponse } from "next/og";
export const alt = "Big Daddy Junk Removal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", background: "#202321", color: "#f3f0e8", fontFamily: "Arial" }}><div style={{ display: "flex", color: "#f05a28", fontSize: 28, letterSpacing: 8 }}>MILWAUKEE AREA · JUNK REMOVAL</div><div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: .85, fontWeight: 900, marginTop: 28 }}><span style={{ display: "flex" }}>CLEAR THE</span><span style={{ display: "flex" }}>BIG STUFF.</span></div><div style={{ display: "flex", fontSize: 26, marginTop: 32 }}>Call or text 414-600-9705</div></div>, { ...size }); }
