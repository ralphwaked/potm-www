import type { MetadataRoute } from "next";

import { appConfig } from "~/lib/config";

/**
 * @see https://github.com/search?q=path%3Aapp%2Frobots.ts&type=code
 * @see https://robotstxt.org/robotstxt.html
 * @see https://rotecna.com/robots.txt
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: `${appConfig.brand.url}/sitemap.xml`,
  };
}
