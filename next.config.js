import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

/** @type {((nextConfig: import("next").NextConfig | undefined) => import("next").NextConfig)[]} */
const plugins = [withNextIntl];

/** @type {import("next").NextConfig} */
let config = {
  reactStrictMode: true,

  swcMinify: true,

  experimental: {
    useLightningcss: true,
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
  },

  transpilePackages: ["lucide-react"],

  // We already do linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com",
      },
    ],
  },
};

for (const plugin of plugins.filter(Boolean)) {
  config = {
    ...config,
    ...plugin(config),
  };
}

export default config;
