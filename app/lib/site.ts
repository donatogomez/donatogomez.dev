export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://donatogomez.dev";

export const siteName = "Donato Gómez";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/donatogomez/",
  github: "https://github.com/donatogomez",
  medium: "https://medium.com/@donatogomez88",
} as const;

export const defaultContactEmail = "donatogomez.dev@gmail.com";

export const seoCopy = {
  es: {
    title: "Donato Gómez · Swift 6 y SwiftUI · Apps nativas Apple",
    description:
      "Desarrollador Swift especializado en apps nativas para el ecosistema Apple. Swift 6, SwiftUI, Clean Architecture. Apps en producción que escalan.",
    jobTitle: "Desarrollador Swift Senior",
  },
  en: {
    title: "Donato Gómez · Swift 6 & SwiftUI · Native Apple Apps",
    description:
      "Swift developer specialised in native apps for the Apple ecosystem. Swift 6, SwiftUI, Clean Architecture. Ships production apps that scale.",
    jobTitle: "Senior Swift Developer",
  },
} as const;

export function englishHomeUrl(): string {
  return `${siteUrl}/?lang=en`;
}
