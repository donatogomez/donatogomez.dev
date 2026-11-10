import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "./components/root-document";

export const metadata: Metadata = {
  title: "Página no encontrada · Donato Gómez",
  robots: { index: false },
};

// Con dos layouts raíz ((es) y (en)) no hay layout común para las URL
// que no existen; este archivo da al 404 su <html lang> y los estilos.
export default function GlobalNotFound() {
  return (
    <RootDocument lang="es">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 bg-white px-6 text-center font-sans text-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight">Página no encontrada</h1>
        <p className="text-zinc-600" lang="en">Page not found</p>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="underline underline-offset-4 hover:text-zinc-600">
            Volver al inicio
          </Link>
          <Link href="/en" lang="en" className="underline underline-offset-4 hover:text-zinc-600">
            Back to home
          </Link>
        </div>
      </main>
    </RootDocument>
  );
}
