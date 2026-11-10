import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Lang } from "../content/copy";
import { PersonJsonLd } from "./person-json-ld";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/** `<html>` compartido por los layouts raíz de cada idioma (`app/(es)` y `app/(en)`). */
export function RootDocument({
  lang,
  children,
}: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  return (
    <html lang={lang}>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <PersonJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
