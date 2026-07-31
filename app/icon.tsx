import { ImageResponse } from "next/server";

export const runtime = "edge";
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
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          color: "#58a6ff",
          fontFamily: "monospace",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        J
      </div>
    ),
    { ...size }
  );
}
