import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Harish Yadav & Mamta Yadav - Ward Councillors, Khanpur";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAF5ED 0%, #ffffff 40%, #FAF5ED 100%)",
          position: "relative",
        }}
      >
        {/* Top saffron bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #FF6B12, #D5AD36)",
          }}
        />

        {/* BJP badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #FF6B12, #D5AD36)",
              borderRadius: 12,
              padding: "8px 16px",
              color: "white",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            BJP
          </div>
          <span style={{ color: "#FF6B12", fontSize: 16, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" as const }}>
            Ward 167 &bull; Khanpur
          </span>
        </div>

        {/* Names */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#1a1a2e" }}>
              Harish
            </span>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#FF6B12" }}>
              Yadav
            </span>
          </div>

          <span style={{ fontSize: 40, color: "#D5AD36", fontWeight: 300 }}>
            &
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#1a1a2e" }}>
              Mamta
            </span>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#FF6B12" }}>
              Yadav
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
          }}
        >
          <div style={{ width: 40, height: 1, background: "#D5AD36" }} />
          <span style={{ fontSize: 18, color: "#1a1a2e", opacity: 0.5 }}>
            निगम पार्षद &bull; खानपुर गाँव &bull; दक्षिण दिल्ली
          </span>
          <div style={{ width: 40, height: 1, background: "#D5AD36" }} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #D5AD36, #FF6B12)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
