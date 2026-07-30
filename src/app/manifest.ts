import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DriveConnect — Sites Web pour Chauffeurs VTC",
    short_name: "DriveConnect",
    description:
      "Création de sites web sur-mesure pour chauffeurs VTC et taxi en France.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
