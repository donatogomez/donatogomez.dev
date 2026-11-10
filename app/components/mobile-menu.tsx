"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { HomeCopy, Lang } from "../content/copy";

const linkClass = "py-2 text-sm text-zinc-700 hover:text-zinc-900";

export function MobileMenu({ t, lang }: { t: HomeCopy; lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setMenuOpen(false);

  // Con el menú abierto: Escape lo cierra y devuelve el foco al botón;
  // un toque fuera del panel (y fuera del botón) también lo cierra.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const langClass = (value: Lang) =>
    `rounded-full px-3 py-1.5 text-sm font-medium ${lang === value ? "bg-zinc-900 text-white" : "text-zinc-700"}`;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMenuOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 md:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? t.menuClose : t.menuOpen}
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

      <div
        ref={panelRef}
        id="mobile-menu"
        hidden={!menuOpen}
        className="absolute left-0 right-0 top-14 z-10 border-b border-zinc-200 bg-white px-6 py-4 shadow-lg md:hidden"
      >
        <nav className="flex flex-col gap-3" aria-label={t.mainNavLabel}>
          <a href="#apps" className={linkClass} onClick={closeMenu}>
            {t.navProjects}
          </a>
          <a href="#about" className={linkClass} onClick={closeMenu}>
            {t.aboutHeading}
          </a>
          <a href="#contact" className={linkClass} onClick={closeMenu}>
            {t.contactHeading}
          </a>
        </nav>
        <div
          role="group"
          aria-label={t.languageLabel}
          className="mt-3 flex items-center gap-2 border-t border-zinc-200 pt-3"
        >
          <span className="py-2 text-xs text-zinc-600" aria-hidden>
            {t.languageLabel}
          </span>
          <Link
            href="/"
            hrefLang="es"
            lang="es"
            className={langClass("es")}
            aria-current={lang === "es" ? "page" : undefined}
          >
            ES
          </Link>
          <Link
            href="/en"
            hrefLang="en"
            lang="en"
            className={langClass("en")}
            aria-current={lang === "en" ? "page" : undefined}
          >
            EN
          </Link>
        </div>
      </div>
    </>
  );
}
