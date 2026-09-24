import type { MetadataRoute } from "next";
import { SITE_IS_PUBLIC, SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE_IS_PUBLIC
      ? [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/studio"],
          },
        ]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
