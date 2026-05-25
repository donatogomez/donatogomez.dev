import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad · Donato Gómez",
  description: "Información sobre el tratamiento de datos personales recogidos a través del formulario de contacto.",
  robots: { index: false },
};

export default function PrivacyPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "donatogomez.dev@gmail.com";

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            ← Donato Gómez
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900">
          Política de Privacidad
        </h1>
        <p className="mb-12 text-sm text-zinc-500">Última actualización: mayo de 2026</p>

        <div className="space-y-10 text-base leading-8 text-zinc-600">

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">1. Responsable del tratamiento</h2>
            <p>
              Jose Donato Gómez Carrillo, en adelante <strong>el Responsable</strong>.<br />
              Contacto: <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-zinc-900">{email}</a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">2. Datos que se recogen</h2>
            <p>
              Únicamente a través del formulario de contacto de esta web se recogen los siguientes datos:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Mensaje libre</li>
            </ul>
            <p className="mt-3">
              No se recogen datos de navegación, no se instalan cookies propias y no se utilizan herramientas de seguimiento más allá de las métricas anónimas de Vercel Analytics, que no permiten identificar a ningún usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">3. Finalidad y base legal</h2>
            <p>
              Los datos facilitados a través del formulario se utilizan exclusivamente para responder a la consulta planteada. La base legal es el <strong>interés legítimo</strong> del Responsable en atender comunicaciones profesionales (art. 6.1.f RGPD), junto con el <strong>consentimiento expreso</strong> del usuario al enviar el formulario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">4. Plazo de conservación</h2>
            <p>
              Los datos se conservan únicamente durante el tiempo necesario para responder a la consulta y durante un período máximo de 12 meses, transcurrido el cual se eliminan.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">5. Destinatarios</h2>
            <p>
              Los datos son tratados por <strong>Resend</strong> (plataforma de envío de correo electrónico), cuyas instalaciones se encuentran en la UE/EEE o bajo las garantías adecuadas del art. 46 RGPD. No se ceden datos a terceros con fines comerciales ni publicitarios.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">6. Derechos del usuario</h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li><strong>Acceso</strong>: conocer qué datos se tienen sobre ti.</li>
              <li><strong>Rectificación</strong>: corregir datos inexactos.</li>
              <li><strong>Supresión</strong>: solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición</strong>: oponerte al tratamiento.</li>
              <li><strong>Portabilidad</strong>: recibir tus datos en formato estructurado.</li>
              <li><strong>Limitación</strong>: solicitar la restricción del tratamiento.</li>
            </ul>
            <p className="mt-3">
              Para ejercerlos, envía un correo a{" "}
              <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-zinc-900">{email}</a>{" "}
              indicando el derecho que deseas ejercer. Tienes derecho a presentar una reclamación ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-zinc-900">
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">7. Seguridad</h2>
            <p>
              Esta web utiliza HTTPS en todas sus comunicaciones. El formulario de contacto envía los datos a través de la API de Resend mediante conexiones cifradas. No se almacenan los datos en ninguna base de datos propia.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-zinc-200 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-zinc-500 sm:px-8">
          <Link href="/" className="underline underline-offset-4 hover:text-zinc-900">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
}
