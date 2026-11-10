import type { MetadataRoute } from "next";
import { englishHomeUrl, siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: siteUrl, en: englishHomeUrl() };
  return [siteUrl, englishHomeUrl()].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
