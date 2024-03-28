import createMDXPlugin from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { getMDXFiles } from "./scripts/get-mdx-files.js";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

const withMDX = createMDXPlugin({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});

getMDXFiles().catch(() => {
  //
});

/** @type {((nextConfig: import("next").NextConfig | undefined) => import("next").NextConfig)[]} */
const plugins = [withNextIntl, withMDX];

/** @type {import("next").NextConfig} */
let config = {
  reactStrictMode: true,

  swcMinify: true,

  experimental: {
    mdxRs: true,
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

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

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
