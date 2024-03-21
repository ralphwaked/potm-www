import type { MetadataRoute } from "next";

import { appConfig } from "~/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appConfig.brand.name,
    short_name: appConfig.brand.name,
    description: appConfig.brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
