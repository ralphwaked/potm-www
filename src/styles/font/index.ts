import localFont from "next/font/local";

export const fontMonument = localFont({
  src: [
    {
      path: "./fonts/MonumentExtended-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MonumentExtended-Ultrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-monument",
  display: "swap",
});

export const fontNeutralFace = localFont({
  src: [
    {
      path: "./fonts/neutralface-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neutralface-bold-webfont.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neutralFace",
  display: "swap",
});
