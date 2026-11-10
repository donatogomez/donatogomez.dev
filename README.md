# Donato Gómez — Landing

Landing personal de desarrollador iOS: Swift 6, SwiftUI, apps nativas para el ecosistema Apple. Next.js (App Router), Tailwind CSS, ES/EN.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — build de producción
- `npm run start` — servir build
- `npm run lint` — ESLint

## Variables de entorno (no subas secretos a GitHub)

Copia `.env.example` a `.env.local` y rellena los valores. **Nunca** subas `.env.local` (está en `.gitignore`).

- **RESEND_API_KEY**, **CONTACT_EMAIL_TO** — Obligatorios para el formulario de contacto ([Resend](https://resend.com)). Sin ellos, el formulario devuelve 503.
- **NEXT_PUBLIC_CONTACT_EMAIL** — Email visible junto al formulario y en su mensaje de error. Si falta, se usa `defaultContactEmail` de `app/lib/site.ts`.
- **NEXT_PUBLIC_CV_URL_ES**, **NEXT_PUBLIC_CV_URL_EN** — URLs de descarga directa del CV (p. ej. Google Drive: `https://drive.usercontent.google.com/download?id=FILE_ID&confirm=t`).

El resto de la configuración está en `.env.example`.

## Contenido y configuración

- **Favicon** — `app/icon.svg` (iniciales DG). **Añadir a inicio** — `app/apple-icon.png` (180×180, generado desde el avatar).
- **SEO** — OG/Twitter, JSON-LD (`Person` + `WebSite`), `sitemap.xml`, `robots.txt`, hreflang (`/` español, `/en` inglés; `/?lang=en` redirige a `/en`). Ambas versiones se prerenderizan en el servidor: cada idioma tiene su layout raíz (`app/(es)`, `app/(en)`) con su `<html lang>`, y los textos están en `app/content/copy.ts`. Opcional: `NEXT_PUBLIC_SITE_URL` en Vercel.
- **Imagen para redes** — 1200×630 generada en el build con `next/og` (`app/lib/og-image.tsx`), una por idioma (`app/(es)/opengraph-image.tsx`, `app/(en)/en/opengraph-image.tsx`), con los textos de `copy.ts`.
- **Analytics** — Vercel Analytics. Para quitarlo, elimina `<Analytics />` de `app/components/root-document.tsx`.

## Despliegue (Vercel)

Despliega en [Vercel](https://vercel.com). En el proyecto → Settings → Environment Variables añade las mismas variables que en `.env.example` (sobre todo `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CV_URL_ES`, `NEXT_PUBLIC_CV_URL_EN`).

## Licencia

© Donato Gómez. Reservados todos los derechos. Uso privado / personal. Si quieres reutilizar el código como plantilla, puedes indicar una licencia permisiva (p. ej. MIT) en este repositorio y añadir un archivo `LICENSE`.
