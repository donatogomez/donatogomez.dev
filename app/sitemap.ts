import type { MetadataRoute } from "next";
import { englishHomeUrl, siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: siteUrl,
          en: englishHomeUrl(),
        },
      },
    },
  ];
}
