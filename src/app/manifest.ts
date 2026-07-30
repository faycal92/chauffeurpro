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
        src: "/icon/192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
