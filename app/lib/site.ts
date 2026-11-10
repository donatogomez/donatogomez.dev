export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.donatogomez.dev";

export const siteName = "Donato Gómez";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/donatogomez/",
  github: "https://github.com/donatogomez",
  medium: "https://medium.com/@donatogomez",
} as const;

export const defaultContactEmail = "donatogomez.dev@gmail.com";

export const seoCopy = {
  es: {
    title: "Donato Gómez · Desarrollador iOS · Swift y SwiftUI",
    description:
      "Desarrollador iOS con 4 años de experiencia en apps nativas con Swift 6 y SwiftUI. Autor de ZonaSalsa, en App Store y Google Play.",
    jobTitle: "Desarrollador iOS",
  },
  en: {
    title: "Donato Gómez · iOS Developer · Swift & SwiftUI",
    description:
      "iOS developer with 4 years of experience building native apps with Swift 6 and SwiftUI. Creator of ZonaSalsa, on the App Store and Google Play.",
    jobTitle: "iOS Developer",
  },
} as const;

export function englishHomeUrl(): string {
  return `${siteUrl}/en`;
}
