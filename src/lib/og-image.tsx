export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_ALT =
  "DriveConnect — Sites Web Professionnels pour Chauffeurs VTC";

export function BrandIcon({ size }: { size: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: size * 0.82,
          height: size * 0.82,
          borderRadius: size * 0.82,
          background:
            "linear-gradient(135deg, #e2c774 0%, #c9a84c 50%, #9c7f36 100%)",
        }}
      >
        <span
          style={{
            display: "flex",
            fontSize: size * 0.48,
            fontWeight: 700,
            color: "#0a0a0a",
          }}
        >
          D
        </span>
      </div>
    </div>
  );
}

export function BrandOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        backgroundImage:
          "radial-gradient(circle at 50% 30%, rgba(201,168,76,0.35), transparent 60%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 110,
          fontWeight: 700,
          color: "#f5f5f0",
          letterSpacing: -2,
        }}
      >
        Drive
        <span
          style={{
            display: "flex",
            backgroundImage: "linear-gradient(135deg, #e2c774 0%, #c9a84c 60%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Connect
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 34,
          color: "rgba(245,245,240,0.75)",
        }}
      >
        Sites Web Professionnels pour Chauffeurs VTC
      </div>
    </div>
  );
}
