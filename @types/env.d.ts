export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;

      NODE_ENV: "test" | "development" | "production";

      RESEND_API_KEY: string;

      GOOGLE_OAUTH_CLIENT_ID: string;
      GOOGLE_OAUTH_SECRET: string;
      GOOGLE_OAUTH_REFRESH: string;
    }
  }
}
