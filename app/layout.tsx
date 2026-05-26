import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PersonJsonLd } from "./components/person-json-ld";
import { seoCopy, siteName, siteUrl } from "./lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const { title, description } = seoCopy.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/?lang=en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 1200,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/avatar.png"],
  },
  // Favicon: app/icon.svg · Añadir a inicio: app/apple-icon.png (desde avatar)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <PersonJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
