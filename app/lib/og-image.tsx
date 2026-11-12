import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { copy, type Lang } from "../content/copy";
import { siteName } from "./site";

export const ogSize = { width: 1200, height: 630 };

// Imagen para compartir en redes (LinkedIn, X, Slack…). Se genera en el build
// a partir de los mismos textos de la landing, una por idioma.
export async function renderOgImage(lang: Lang) {
  const t = copy[lang];
  const portrait = await readFile(join(process.cwd(), "public/portrait.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "#fafafa",
          color: "#18181b",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 8, borderRadius: 4, background: "#F05138" }} />
          <div style={{ marginTop: 32, fontSize: 76, letterSpacing: -2 }}>
            {siteName}
          </div>
          <div style={{ marginTop: 8, fontSize: 38, color: "#3f3f46" }}>
            {`${t.roleTitle} · Swift & SwiftUI`}
          </div>
          <div style={{ marginTop: 32, fontSize: 28, lineHeight: 1.4, color: "#52525b" }}>
            {t.heroTagline}
          </div>
          <div style={{ marginTop: 40, fontSize: 26, color: "#52525b" }}>donatogomez.dev</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse solo admite <img> */}
        <img src={portraitSrc} width={360} height={450} alt="" style={{ borderRadius: 32 }} />
      </div>
    ),
    ogSize,
  );
}
