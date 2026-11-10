import type { Metadata } from "next";
import type { Lang } from "../content/copy";
import { seoCopy, siteName } from "./site";

const homePath: Record<Lang, string> = { es: "/", en: "/en" };
const ogLocale: Record<Lang, string> = { es: "es_ES", en: "en_US" };

export function homeMetadata(lang: Lang): Metadata {
  const { title, description } = seoCopy[lang];
  const other: Lang = lang === "es" ? "en" : "es";

  return {
    title,
    description,
    alternates: {
      canonical: homePath[lang],
      languages: {
        es: homePath.es,
        en: homePath.en,
        "x-default": homePath.es,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: ogLocale[other],
      url: homePath[lang],
      siteName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
