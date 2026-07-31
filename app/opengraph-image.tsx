import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Johans Neira — Ingeniero de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ color: "#58a6ff", fontSize: 28, letterSpacing: 4 }}>
          BYJOHANS.DEV
        </div>
        <div
          style={{
            color: "#e4e4e0",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          Johans Neira
        </div>
        <div style={{ color: "#8b949e", fontSize: 32, marginTop: 16 }}>
          Ingeniero de Software
        </div>
      </div>
    ),
    { ...size }
  );
}
