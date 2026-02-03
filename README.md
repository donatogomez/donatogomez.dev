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

## Contenido y configuración

- **Favicon** — `app/icon.svg` (iniciales DG). Para “Añadir a pantalla de inicio” en iOS puedes añadir `public/apple-touch-icon.png` (180×180).
- **CV** — El botón de la sección Currículum usa URLs de Google Drive (ES/EN) definidas en `app/page.tsx` (`CV_URL_ES`, `CV_URL_EN`). Para cambiar sin tocar código, puedes usar `NEXT_PUBLIC_CV_URL_ES` y `NEXT_PUBLIC_CV_URL_EN` en `.env.local` si luego enlazas esas variables en el código.
- **Contacto** — El formulario envía correos con [Resend](https://resend.com). En `.env.local` configura `RESEND_API_KEY`. Opcional: `CONTACT_EMAIL_TO`, `RESEND_FROM_EMAIL`.
- **Analytics** — Incluye Vercel Analytics. Para quitarlo, elimina `<Analytics />` de `app/layout.tsx`.

## Despliegue (Vercel)

Despliega en [Vercel](https://vercel.com). Añade las variables de entorno necesarias (p. ej. `RESEND_API_KEY`) en el dashboard.

## Licencia

© Donato Gómez. Reservados todos los derechos. Uso privado / personal. Si quieres reutilizar el código como plantilla, puedes indicar una licencia permisiva (p. ej. MIT) en este repositorio y añadir un archivo `LICENSE`.
