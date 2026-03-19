import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ayoub Sabi — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#080d14",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#38bdf8",
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(56,189,248,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#38bdf8",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              color: "#38bdf8",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Available for Work
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#e8f0fe",
            lineHeight: 1.05,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Ayoub Sabi
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 300,
            color: "rgba(232,240,254,0.6)",
            marginBottom: "48px",
          }}
        >
          Senior Software Engineer — PHP & Laravel
        </div>

        {/* Tech stack pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["PHP", "Laravel", "Symfony", "PostgreSQL", "Redis", "React.js"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(56,189,248,0.25)",
                  color: "rgba(232,240,254,0.7)",
                  fontSize: "15px",
                  backgroundColor: "rgba(56,189,248,0.06)",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Website URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(232,240,254,0.35)",
            fontFamily: "monospace",
          }}
        >
          ayoubsabi.com
        </div>
      </div>
    ),
    size
  );
}
