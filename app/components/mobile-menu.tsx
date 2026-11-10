"use client";

import { useState } from "react";
import Link from "next/link";
import type { HomeCopy, Lang } from "../content/copy";

export function MobileMenu({ t, lang }: { t: HomeCopy; lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-14 z-10 border-b border-zinc-200 bg-white px-6 py-4 shadow-lg md:hidden"
          role="dialog"
          aria-label="Menú de navegación"
        >
          <nav className="flex flex-col gap-3" aria-label="Principal">
            <a href="#apps" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
              {t.navProjects}
            </a>
            <a href="#about" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
              {t.aboutHeading}
            </a>
            <a href="#contact" className="py-2 text-sm text-zinc-700 hover:text-zinc-900" onClick={closeMenu}>
              {t.contactHeading}
            </a>
            <div className="flex gap-2 border-t border-zinc-200 pt-3">
              <span className="py-2 text-xs text-zinc-500">Idioma</span>
              <Link
                href="/"
                hrefLang="es"
                lang="es"
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${lang === "es" ? "bg-zinc-900 text-white" : "text-zinc-700"}`}
                aria-current={lang === "es" ? "page" : undefined}
              >
                ES
              </Link>
              <Link
                href="/en"
                hrefLang="en"
                lang="en"
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${lang === "en" ? "bg-zinc-900 text-white" : "text-zinc-700"}`}
                aria-current={lang === "en" ? "page" : undefined}
              >
                EN
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
