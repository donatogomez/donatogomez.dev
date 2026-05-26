import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://donatogomez.dev";

const title = "Donato Gómez · Swift 6 & SwiftUI · Native Apple Apps";
const description =
  "Swift developer specialised in native apps for the Apple ecosystem. Swift 6, SwiftUI, Clean Architecture. Ships production apps that scale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Donato Gómez",
    title,
    description,
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 1200,
        alt: "Donato Gómez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/avatar.png"],
  },
  // Favicon: app/icon.svg (iniciales DG en fondo oscuro)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
