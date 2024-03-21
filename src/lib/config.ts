const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
).href;

export const appConfig = {
  brand: {
    name: "Production on the Move",
    description: "Book a meeting with a member of Production on the Move",
    url:
      process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000",
  },

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};

export type ILocale = (typeof appConfig.i18n.locales)[number];
