import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Dynamic favicon generator matching the Able Ventures logo
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 13,
          background: "#F93A3E", // primary brand color oklch mapped hex
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F6F4EE", // contrast brand light cream color
          fontWeight: 800,
          borderRadius: 8,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.06em",
          lineHeight: 1,
          paddingBottom: 1, // minor optical alignment
        }}
      >
        able
      </div>
    ),
    {
      ...size,
    }
  );
}
