"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { apps } from "./content/apps";
import { reviews } from "./content/reviews";

const LINKEDIN_URL = "https://www.linkedin.com/in/donatogomez/";
const GITHUB_URL = "https://github.com/donatogomez";
const MEDIUM_URL = "https://medium.com/@donatogomez88";

type Lang = "es" | "en";

const copy: Record<
  Lang,
  {
    seniorSwiftDeveloper: string;
    heroTagline: string;
    viewApps: string;
    linkedin: string;
    appsHeading: string;
    highlightsHeading: string;
    reviewsHeading: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    highlight4: string;
    highlight5: string;
    highlight6: string;
    highlight7: string;
    highlight8: string;
    appStore: string;
    comingSoon: string;
    aboutHeading: string;
    aboutParagraph: string;
    aboutParagraph2: string;
    footerContactLabel: string;
    contactHeading: string;
    contactNameLabel: string;
    contactEmailLabel: string;
    contactMessageLabel: string;
    contactSend: string;
    contactSuccess: string;
    contactErrorPrefix: string;
    contactErrorSuffix: string;
    contactRequired: string;
    cvHeading: string;
    cvSubtitle: string;
    cvNavLabel: string;
    cvDownload: string;
    github: string;
    medium: string;
  }
> = {
  es: {
    seniorSwiftDeveloper: "Desarrollador Swift Senior",
    heroTagline:
      "Apps nativas para el ecosistema Apple · Arquitectura modular · Swift 6 · SwiftUI · Concurrencia estricta · Apps en producción",
    viewApps: "Ver Apps",
    linkedin: "LinkedIn",
    appsHeading: "Apps",
    highlightsHeading: "Destacados",
    reviewsHeading: "Reseñas",
    highlight1:
      "Swift 6 y SwiftUI en producción: iOS, iPadOS y ecosistema Apple con una sola base de código.",
    highlight2:
      "Clean Architecture, MVVM y flujo unidireccional. Código testeable, modular y listo para crecer.",
    highlight3:
      "Concurrencia con async/await y actors. Desarrollo aumentado con IA sin bajar la calidad.",
    highlight4:
      "SwiftData, App Intents y URLSession con async/await. Persistencia, integración con el sistema y red.",
    highlight5:
      "DocC para documentación y Swift Testing para tests. Calidad y mantenibilidad desde el día uno.",
    highlight6:
      "Xcode Cloud, Git y entrega continua. Apps publicadas y mantenidas en producción.",
    highlight7:
      "Accesibilidad: VoiceOver, Dynamic Type y reducción de movimiento. Diseño inclusivo desde el inicio.",
    highlight8:
      "WidgetKit para widgets e integración con el ecosistema. Siri, Shortcuts y App Intents.",
    appStore: "App Store",
    comingSoon: "Próximamente",
    aboutHeading: "Sobre mí",
    aboutParagraph:
      "Desarrollo apps nativas para el ecosistema Apple con un enfoque claro en diseño del software y mantenibilidad. Para mí, escribir código no es solo hacer que algo funcione hoy, sino dejar un sistema que otros puedan entender, extender y evolucionar.",
    aboutParagraph2:
      "Trabajo con Swift 6 y SwiftUI aplicando arquitectura modular y concurrencia estricta, buscando sistemas claros, predecibles y fáciles de mantener en el tiempo. Aplico herramientas de automatización e inteligencia artificial para agilizar tareas repetitivas, mientras conservo el control absoluto del criterio técnico, las revisiones manuales y las decisiones estratégicas de diseño y arquitectura.",
    footerContactLabel: "Contacto",
    contactHeading: "Contacto",
    contactNameLabel: "Nombre",
    contactEmailLabel: "Email",
    contactMessageLabel: "Mensaje",
    contactSend: "Enviar",
    contactSuccess: "Mensaje enviado. Te responderé pronto.",
    contactErrorPrefix: "No se pudo enviar. Intenta de nuevo",
    contactErrorSuffix: "o escribe a",
    contactRequired: "Todos los campos son obligatorios.",
    cvHeading: "Currículum",
    cvSubtitle: "PDF en español o inglés según el idioma seleccionado.",
    cvNavLabel: "CV",
    cvDownload: "Descargar CV",
    github: "GitHub",
    medium: "Medium",
  },
  en: {
    seniorSwiftDeveloper: "Senior Swift Developer",
    heroTagline:
      "Native apps for the Apple ecosystem · Modular architecture · Swift 6 · SwiftUI · Strict concurrency · Apps in production",
    viewApps: "View Apps",
    linkedin: "LinkedIn",
    appsHeading: "Apps",
    highlightsHeading: "Highlights",
    reviewsHeading: "Reviews",
    highlight1:
      "Swift 6 and SwiftUI in production: iOS, iPadOS and the full Apple ecosystem from a single codebase.",
    highlight2:
      "Clean Architecture, MVVM and unidirectional data flow. Testable, modular code built to scale.",
    highlight3:
      "Structured concurrency with async/await and actors. AI-augmented development without compromising quality.",
    highlight4:
      "SwiftData, App Intents and URLSession with async/await. Persistence, system integration and networking.",
    highlight5:
      "DocC for documentation and Swift Testing for tests. Quality and maintainability from day one.",
    highlight6:
      "Xcode Cloud, Git and continuous delivery. Apps shipped and maintained in production.",
    highlight7:
      "Accessibility: VoiceOver, Dynamic Type and reduced motion. Inclusive design from the start.",
    highlight8:
      "WidgetKit for widgets and ecosystem integration. Siri, Shortcuts and App Intents.",
    appStore: "App Store",
    comingSoon: "Coming soon",
    aboutHeading: "About me",
    aboutParagraph:
      "I develop native apps for the Apple ecosystem with a clear focus on software design and maintainability. For me, writing code isn't just about making something work today—it's about leaving a system that others can understand, extend, and evolve.",
    aboutParagraph2:
      "I work with Swift 6 and SwiftUI applying modular architecture and strict concurrency, aiming for clear, predictable systems that are easy to maintain over time. I apply automation and artificial intelligence tools to streamline repetitive tasks, while retaining full control over technical judgment, manual reviews, and strategic design and architecture decisions.",
    footerContactLabel: "Contact",
    contactHeading: "Contact",
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactMessageLabel: "Message",
    contactSend: "Send",
    contactSuccess: "Message sent. I'll get back to you soon.",
    contactErrorPrefix: "Could not send. Try again",
    contactErrorSuffix: "or email",
    contactRequired: "All fields are required.",
    cvHeading: "Resume",
    cvSubtitle: "PDF in Spanish or English depending on the selected language.",
    cvNavLabel: "CV",
    cvDownload: "Download CV",
    github: "GitHub",
    medium: "Medium",
  },
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const t = copy[lang];
  const cvUrl =
    lang === "es"
      ? (process.env.NEXT_PUBLIC_CV_URL_ES ?? "#")
      : (process.env.NEXT_PUBLIC_CV_URL_EN ?? "#");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

  useEffect(() => {
    const id = setInterval(() => {
      setReviewIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || !email || !message) {
      setFormError(t.contactRequired);
      setFormStatus("error");
      return;
    }
    setFormError(null);
    setFormStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        const fallbackMsg = contactEmail ? `${t.contactErrorPrefix} ${t.contactErrorSuffix} ${contactEmail}` : t.contactErrorPrefix;
        setFormError(json.error ?? fallbackMsg);
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      form.reset();
    } catch {
      const fallbackMsg = contactEmail ? `${t.contactErrorPrefix} ${t.contactErrorSuffix} ${contactEmail}` : t.contactErrorPrefix;
      setFormError(fallbackMsg);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6 sm:px-8">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600"
            onClick={closeMenu}
          >
            Donato Gómez
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden flex-wrap items-center gap-4 md:flex md:gap-6"
            aria-label="Principal"
          >
            <a
              href="#about"
              className="text-sm text-zinc-700 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              {t.aboutHeading}
            </a>
            <a
              href="#apps"
              className="text-sm text-zinc-700 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              {t.appsHeading}
            </a>
            <a
              href="#cv"
              className="text-sm text-zinc-700 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              {t.cvNavLabel}
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-700 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              {t.contactHeading}
            </a>
            <nav className="ml-1 flex rounded-full border border-zinc-200 bg-zinc-50/80 p-0.5 text-sm" aria-label="Idioma / Language">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                  lang === "es"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
                aria-pressed={lang === "es"}
                aria-label="Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                  lang === "en"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
                aria-pressed={lang === "en"}
                aria-label="English"
              >
                EN
              </button>
            </nav>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav overlay */}
        {menuOpen && (
          <div
            className="absolute left-0 right-0 top-14 z-10 border-b border-zinc-200 bg-white px-6 py-4 shadow-lg md:hidden"
            role="dialog"
            aria-label="Menú de navegación"
          >
            <nav className="flex flex-col gap-3" aria-label="Principal">
              <a href="#about" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
                {t.aboutHeading}
              </a>
              <a href="#apps" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
                {t.appsHeading}
              </a>
              <a href="#cv" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
                {t.cvNavLabel}
              </a>
              <a href="#contact" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
                {t.contactHeading}
              </a>
              <div className="flex gap-2 border-t border-zinc-200 pt-3">
                <span className="py-2 text-xs text-zinc-500">Idioma</span>
                <button
                  type="button"
                  onClick={() => { setLang("es"); closeMenu(); }}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${lang === "es" ? "bg-zinc-900 text-white" : "text-zinc-700"}`}
                  aria-pressed={lang === "es"}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => { setLang("en"); closeMenu(); }}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${lang === "en" ? "bg-zinc-900 text-white" : "text-zinc-700"}`}
                  aria-pressed={lang === "en"}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16 text-center sm:px-8 sm:pt-20 md:pt-24">
        {/* Orden óptimo: Hero (impacto) → About (contexto) → Apps (portfolio) → Highlights (habilidades) → Reviews (prueba social) → CV (documento) → Contacto (CTA). El menú solo enlaza Apps, About, CV y Contacto. */}
        {/* Hero */}
        <section className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-zinc-50 px-6 pt-10 pb-12 sm:px-8 sm:pb-14" aria-labelledby="hero-heading">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="flex justify-center sm:justify-start">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
                <Image
                  src="/avatar.png"
                  alt="Donato Gómez"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 space-y-6 text-center sm:text-left">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Donato Gómez
              </h1>
              <p className="flex justify-center text-lg text-zinc-700 sm:text-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white">
                  <Image src="/swift-logo.png" alt="" width={18} height={18} className="h-[18px] w-[18px] shrink-0 object-contain" aria-hidden />
                  {t.seniorSwiftDeveloper}
                </span>
              </p>
              <p className="max-w-xl text-lg text-zinc-700 sm:text-xl sm:mx-0 mx-auto">
                {t.heroTagline}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
              aria-label={t.linkedin}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t.linkedin}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
              aria-label={t.github}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.github}
            </a>
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
              aria-label={t.medium}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              {t.medium}
            </a>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-16 mt-10 space-y-6 pb-20 sm:mt-12 sm:pb-28"
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.aboutHeading}
          </h2>
          <div className="mx-auto max-w-prose space-y-4 text-base leading-7 text-zinc-700">
            <p>{t.aboutParagraph}</p>
            <p>{t.aboutParagraph2}</p>
          </div>
        </section>

        {/* Apps */}
        <section
          id="apps"
          className="scroll-mt-16 space-y-12 pb-20 sm:pb-28"
          aria-labelledby="apps-heading"
        >
          <h2 id="apps-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.appsHeading}
          </h2>
          <ul className="grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <li key={app.id}>
                <article className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition-colors hover:border-zinc-300 hover:shadow-md">
                  <div
                    className="mb-4 aspect-square w-16 overflow-hidden rounded-2xl bg-zinc-200"
                    aria-hidden
                  />
                  <h3 className="text-lg font-medium text-zinc-900">
                    {app.name[lang]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">
                    {app.description[lang]}
                  </p>
                  {app.status === "soon" || !app.appStoreUrl ? (
                    <button
                      type="button"
                      disabled
                      className="mt-4 inline-flex h-10 w-full cursor-not-allowed items-center justify-center rounded-lg bg-zinc-200 text-sm font-medium text-zinc-500"
                    >
                      {t.comingSoon}
                    </button>
                  ) : (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                    >
                      {t.appStore}
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews carousel (antes que Destacados) */}
        <section
          id="reviews"
          className="scroll-mt-16 space-y-6 pb-20 sm:pb-28"
          aria-labelledby="reviews-heading"
        >
          <h2 id="reviews-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.reviewsHeading}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 text-left sm:p-8">
            <blockquote className="min-h-[120px] sm:min-h-[100px]">
              <p className="text-base leading-7 text-zinc-700 sm:text-lg">
                "{reviews[reviewIndex].text[lang]}"
              </p>
              <footer className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <cite className="not-italic font-medium text-zinc-900">
                  {reviews[reviewIndex].name}
                </cite>
                <span className="text-sm text-zinc-500">— {reviews[reviewIndex].role}</span>
              </footer>
            </blockquote>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex gap-1.5" aria-label="Reseña actual">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewIndex(i)}
                    className={`h-2 rounded-full transition-colors ${
                      i === reviewIndex ? "w-6 bg-zinc-900" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                    aria-current={i === reviewIndex ? "true" : undefined}
                    aria-label={`Reseña ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  aria-label="Reseña anterior"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setReviewIndex((i) => (i + 1) % reviews.length)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  aria-label="Siguiente reseña"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights (sin enlace en menú) */}
        <section
          id="highlights"
          className="scroll-mt-16 space-y-8 pb-20 sm:pb-28"
          aria-labelledby="highlights-heading"
        >
          <h2 id="highlights-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.highlightsHeading}
          </h2>
          <ul className="grid gap-4 text-left sm:grid-cols-2">
            {[
              { text: t.highlight1, icon: "swift" },
              { text: t.highlight2, icon: "arch" },
              { text: t.highlight3, icon: "concurrency" },
              { text: t.highlight4, icon: "data" },
              { text: t.highlight5, icon: "docs" },
              { text: t.highlight6, icon: "ship" },
              { text: t.highlight7, icon: "a11y" },
              { text: t.highlight8, icon: "widgets" },
            ].map((item, i) => (
              <li key={i}>
                <article className="group flex gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-900" aria-hidden>
                    {item.icon === "swift" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    )}
                    {item.icon === "arch" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                    )}
                    {item.icon === "concurrency" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    )}
                    {item.icon === "data" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                    )}
                    {item.icon === "docs" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                    {item.icon === "ship" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    )}
                    {item.icon === "a11y" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                    {item.icon === "widgets" && (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    )}
                  </span>
                  <p className="min-w-0 flex-1 text-sm leading-relaxed text-zinc-700">
                    {item.text}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* CV */}
        <section
          id="cv"
          className="scroll-mt-16 space-y-6 pb-20 sm:pb-28"
          aria-labelledby="cv-heading"
        >
          <h2 id="cv-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.cvHeading}
          </h2>
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-shadow hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-white" aria-hidden>
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-zinc-600">
                {t.cvSubtitle}
              </p>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-xl border-2 border-zinc-900 bg-zinc-900 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.cvDownload}
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-16 space-y-6 pb-20 sm:pb-28"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight text-zinc-900">
            {t.contactHeading}
          </h2>
          {formStatus === "success" ? (
            <p className="rounded-lg bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
              {t.contactSuccess}
            </p>
          ) : (
            <form onSubmit={handleContactSubmit} className="mx-auto max-w-md space-y-4 text-left">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-zinc-700">
                  {t.contactNameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  disabled={formStatus === "loading"}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60"
                  placeholder={t.contactNameLabel}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-zinc-700">
                  {t.contactEmailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  disabled={formStatus === "loading"}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60"
                  placeholder={t.contactEmailLabel}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-zinc-700">
                  {t.contactMessageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  disabled={formStatus === "loading"}
                  className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 disabled:opacity-60"
                  placeholder={t.contactMessageLabel}
                />
              </div>
              {formError && (
                <p className="text-sm text-red-600" role="alert">
                  {formError}
                </p>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-full bg-zinc-900 px-8 text-base font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:opacity-60"
                >
                  {formStatus === "loading" ? "…" : t.contactSend}
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-700"
            aria-label={t.footerContactLabel}
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-600"
              aria-label={t.linkedin}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t.linkedin}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-600"
              aria-label={t.github}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.github}
            </a>
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-600"
              aria-label={t.medium}
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              {t.medium}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
