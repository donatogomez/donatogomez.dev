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
- **NEXT_PUBLIC_CONTACT_EMAIL** — Email que se muestra en el mensaje de error del formulario (“escribe a …”).
- **NEXT_PUBLIC_CV_URL_ES**, **NEXT_PUBLIC_CV_URL_EN** — URLs de descarga directa del CV (p. ej. Google Drive: `https://drive.usercontent.google.com/download?id=FILE_ID&confirm=t`).

El resto de la configuración está en `.env.example`.

## Contenido y configuración

- **Favicon** — `app/icon.svg` (iniciales DG). Opcional: `public/apple-touch-icon.png` (180×180) para “Añadir a pantalla de inicio”.
- **Analytics** — Vercel Analytics. Para quitarlo, elimina `<Analytics />` de `app/layout.tsx`.

## Despliegue (Vercel)

Despliega en [Vercel](https://vercel.com). En el proyecto → Settings → Environment Variables añade las mismas variables que en `.env.example` (sobre todo `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CV_URL_ES`, `NEXT_PUBLIC_CV_URL_EN`).

## Licencia

© Donato Gómez. Reservados todos los derechos. Uso privado / personal. Si quieres reutilizar el código como plantilla, puedes indicar una licencia permisiva (p. ej. MIT) en este repositorio y añadir un archivo `LICENSE`.
