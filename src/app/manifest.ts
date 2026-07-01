import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amazing Minds Africa",
    short_name: "AMA",
    description:
      "Mental Health, Art, Talent & Youth Platform for African communities. Powered by Amazing AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#1A1A2E",
    theme_color: "#C1440E",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["health", "lifestyle", "social"],
    lang: "en",
  };
}
