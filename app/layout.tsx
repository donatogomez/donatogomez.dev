import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Donato Gómez · Swift 6 & SwiftUI · Native Apple Apps",
  description:
    "Swift developer specialised in native apps for the Apple ecosystem. Swift 6, SwiftUI, Clean Architecture. Ships production apps that scale.",
  // Favicon: app/icon.svg (iniciales DG). Opcional: public/apple-touch-icon.png 180×180 para “Añadir a pantalla de inicio”.
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
