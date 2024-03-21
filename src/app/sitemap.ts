import type { MetadataRoute } from "next";

import { absoluteUrl } from "~/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["/"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
