import Image from "next/image";
import Link from "next/link";
import { copy, type Lang } from "../content/copy";
import { articles } from "../content/articles";
import { experience } from "../content/experience";
import { apps, engineering } from "../content/projects";
import { defaultContactEmail, socialLinks } from "../lib/site";
import { ContactForm } from "./contact-form";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { ProjectCard } from "./project-card";

const navLinkClass =
  "text-sm text-zinc-700 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-zinc-900">
        {children}
      </h2>
      <div className="mx-auto h-1 w-10 rounded-full bg-[#F05138]" aria-hidden />
    </div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const cvUrl =
    lang === "es"
      ? (process.env.NEXT_PUBLIC_CV_URL_ES ?? "#")
      : (process.env.NEXT_PUBLIC_CV_URL_EN ?? "#");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || defaultContactEmail;
  const dateFormat = new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const monthFormat = new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatMonth = (value: string) => monthFormat.format(new Date(`${value}-01`));
  const social = [
    { href: socialLinks.linkedin, label: t.linkedin, Icon: LinkedInIcon },
    { href: socialLinks.github, label: t.github, Icon: GitHubIcon },
    { href: socialLinks.medium, label: t.medium, Icon: MediumIcon },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <a
        href="#main"
        className="sr-only rounded-lg bg-zinc-900 text-sm font-medium text-white focus:not-sr-only focus:px-4 focus:py-2 focus:fixed focus:left-4 focus:top-3 focus:z-30 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2"
      >
        {t.skipToContent}
      </a>
      {/* Sticky header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-6 sm:px-8">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600"
          >
            Donato Gómez
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex flex-wrap items-center gap-6" aria-label={t.mainNavLabel}>
              <a href="#apps" className={navLinkClass}>
                {t.navProjects}
              </a>
              <a href="#experience" className={navLinkClass}>
                {t.experienceHeading}
              </a>
              <a href="#articles" className={navLinkClass}>
                {t.articlesHeading}
              </a>
              <a href="#about" className={navLinkClass}>
                {t.aboutHeading}
              </a>
              <a href="#contact" className={navLinkClass}>
                {t.contactHeading}
              </a>
            </nav>
            <div
              role="group"
              className="ml-1 flex rounded-full border border-zinc-200 bg-zinc-50/80 p-0.5 text-sm"
              aria-label={t.languageLabel}
            >
              <Link
                href="/"
                hrefLang="es"
                lang="es"
                className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                  lang === "es"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
                aria-current={lang === "es" ? "page" : undefined}
                aria-label="Español"
              >
                ES
              </Link>
              <Link
                href="/en"
                hrefLang="en"
                lang="en"
                className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
                  lang === "en"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
                aria-current={lang === "en" ? "page" : undefined}
                aria-label="English"
              >
                EN
              </Link>
            </div>
          </div>

          <MobileMenu t={t} lang={lang} />
        </div>
      </header>

      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-6 pb-24 pt-16 text-center focus:outline-none sm:px-8 sm:pt-20 md:pt-24">
        {/* Hero */}
        <section
          className="flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-zinc-50 px-6 pt-10 pb-12 md:flex-row md:gap-10 md:px-10 md:py-12"
          aria-labelledby="hero-heading"
        >
          <div className="min-w-0 flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-[#F05138] md:mx-0" aria-hidden />
              <h1 id="hero-heading" className="font-bold tracking-tighter text-zinc-900" style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}>
                Donato Gómez
              </h1>
              <p className="text-base font-medium text-zinc-700 sm:text-lg">
                {t.roleTitle} · Swift &amp; SwiftUI
              </p>
            </div>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base md:mx-0">
              {t.heroTagline}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#apps"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2"
              >
                {t.viewProjects}
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2"
              >
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.cvDownload}
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 md:justify-start">
              {social.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* En móvil la foto va primero; en escritorio, a la derecha del texto. */}
          <div className="order-first shrink-0 md:order-none">
            <div className="transform-gpu cursor-default transition-transform duration-500 ease-out motion-safe:hover:scale-105">
              <Image
                src="/portrait.jpg"
                alt="Donato Gómez"
                width={1122}
                height={1402}
                sizes="(min-width: 768px) 224px, 160px"
                className="h-auto w-40 rounded-3xl shadow-lg md:w-56"
                preload
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* Apps */}
        <section
          id="apps"
          className="scroll-mt-16 mt-10 space-y-10 pb-20 sm:mt-12 sm:pb-28"
          aria-labelledby="apps-heading"
        >
          <SectionHeading id="apps-heading">{t.appsHeading}</SectionHeading>
          <ul className="space-y-6">
            {apps.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} lang={lang} t={t} />
              </li>
            ))}
          </ul>
        </section>

        {/* Engineering */}
        <section
          id="engineering"
          className="scroll-mt-16 space-y-10 pb-20 sm:pb-28"
          aria-labelledby="engineering-heading"
        >
          <div className="space-y-4">
            <SectionHeading id="engineering-heading">{t.engineeringHeading}</SectionHeading>
            <p className="mx-auto max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
              {t.engineeringIntro}
            </p>
          </div>
          <ul className="space-y-6">
            {engineering.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} lang={lang} t={t} />
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-16 space-y-10 pb-20 sm:pb-28"
          aria-labelledby="experience-heading"
        >
          <SectionHeading id="experience-heading">{t.experienceHeading}</SectionHeading>
          <ol className="space-y-10 border-l border-zinc-200 pl-6 text-left sm:pl-8">
            {experience.map((position) => (
              <li key={position.id} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[#F05138] ring-4 ring-white sm:-left-[39px]"
                  aria-hidden
                />
                <h3 className="font-semibold text-zinc-900">
                  {position.role} · {position.organization[lang]}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  <time dateTime={position.start}>{formatMonth(position.start)}</time>
                  {" – "}
                  {position.end ? (
                    <time dateTime={position.end}>{formatMonth(position.end)}</time>
                  ) : (
                    t.experiencePresent
                  )}
                  {` · ${position.location[lang]}`}
                </p>
                {position.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
                    {position.summary[lang]}
                  </p>
                )}
                {position.items && (
                  <ul className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
                    {position.items.map((item) => (
                      <li key={item.label.en} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                        <span>
                          <span className="font-medium text-zinc-900">{item.label[lang]}:</span>{" "}
                          {item.text[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Articles */}
        <section
          id="articles"
          className="scroll-mt-16 space-y-10 pb-20 sm:pb-28"
          aria-labelledby="articles-heading"
        >
          <div className="space-y-4">
            <SectionHeading id="articles-heading">{t.articlesHeading}</SectionHeading>
            <p className="mx-auto max-w-prose text-sm leading-relaxed text-zinc-600 sm:text-base">
              {t.articlesIntro}
            </p>
          </div>
          <ul className="grid gap-4 text-left md:grid-cols-3">
            {articles.map((article) => (
              <li
                key={article.url}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm transition-colors focus-within:ring-2 focus-within:ring-zinc-600 focus-within:ring-offset-2 hover:border-zinc-300 hover:bg-zinc-50"
              >
                <div className="aspect-video overflow-hidden bg-zinc-900">
                  <Image
                    src={article.cover}
                    alt=""
                    width={800}
                    height={450}
                    sizes="(min-width: 768px) 224px, calc(100vw - 48px)"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-zinc-900" lang="en">
                    {/* El enlace cubre toda la tarjeta. */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{article.summary[lang]}</p>
                  <p className="mt-auto pt-3 text-xs text-zinc-600">
                    <time dateTime={article.published}>{dateFormat.format(new Date(article.published))}</time>
                    {` · ${article.readingMinutes} ${t.articlesReadingTime}`}
                    {t.articlesLanguage && ` · ${t.articlesLanguage}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 underline underline-offset-4 transition-colors hover:text-zinc-900"
          >
            <MediumIcon className="h-4 w-4 shrink-0" />
            {t.articlesAll}
          </a>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-16 space-y-6 pb-20 sm:pb-28"
          aria-labelledby="about-heading"
        >
          <SectionHeading id="about-heading">{t.aboutHeading}</SectionHeading>
          <div className="mx-auto max-w-prose space-y-5 text-base leading-8 text-zinc-600 sm:text-lg sm:leading-9">
            <p>{t.aboutParagraph}</p>
            <p>{t.aboutParagraph2}</p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-16 space-y-6 pb-20 sm:pb-28"
          aria-labelledby="contact-heading"
        >
          <SectionHeading id="contact-heading">{t.contactHeading}</SectionHeading>
          <ContactForm t={t} contactEmail={contactEmail} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-700"
            aria-label={t.footerContactLabel}
          >
            {social.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-600"
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-8 text-center text-xs text-zinc-600">
            <a href="/privacy" className="underline underline-offset-4 hover:text-zinc-900">
              {t.privacyPolicy}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
