"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeCopy } from "../content/copy";
import { CONTACT_LIMITS, type ContactErrorCode } from "../lib/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-[#F05138] focus:outline-none focus:ring-1 focus:ring-[#F05138] read-only:opacity-60";

export function ContactForm({ t, contactEmail }: { t: HomeCopy; contactEmail: string }) {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
  const loading = formStatus === "loading";
  const fallbackError = `${t.contactErrorPrefix} ${t.contactErrorSuffix} ${contactEmail}`;

  // El formulario desaparece al enviarse: se lleva el foco al mensaje de
  // confirmación para que el teclado y los lectores de pantalla no lo pierdan.
  useEffect(() => {
    if (formStatus === "success") successRef.current?.focus();
  }, [formStatus]);

  const errorMessage = (code: ContactErrorCode | undefined) => {
    if (code === "required") return t.contactRequired;
    if (code === "invalid") return t.contactInvalid;
    return fallbackError;
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const payload = {
      name: value("name"),
      email: value("email"),
      message: value("message"),
      website: value("website"),
    };
    if (!payload.name || !payload.email || !payload.message) {
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
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json: { error?: ContactErrorCode } = await res.json().catch(() => ({}));
        setFormError(errorMessage(json.error));
        setFormStatus("error");
        return;
      }
      setFormStatus("success");
      form.reset();
    } catch {
      setFormError(fallbackError);
      setFormStatus("error");
    }
  };

  return formStatus === "success" ? (
    <p
      ref={successRef}
      tabIndex={-1}
      role="status"
      className="rounded-lg bg-zinc-100 px-4 py-3 text-sm text-zinc-700 focus:outline-none"
    >
      {t.contactSuccess}
    </p>
  ) : (
    <form onSubmit={handleContactSubmit} className="relative space-y-4 text-left" aria-busy={loading}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-zinc-700">
            {t.contactNameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={CONTACT_LIMITS.name}
            readOnly={loading}
            className={inputClass}
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
            autoComplete="email"
            required
            maxLength={CONTACT_LIMITS.email}
            readOnly={loading}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-zinc-700">
          {t.contactMessageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={CONTACT_LIMITS.message}
          readOnly={loading}
          className={`${inputClass} resize-y`}
        />
      </div>
      {/* Campo trampa para bots: fuera de pantalla y fuera del orden de tabulación. */}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {formError && (
        <p className="text-sm text-red-700" role="alert">
          {formError}
        </p>
      )}
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-xs text-zinc-600">
          {contactEmail && (
            <p>
              {t.contactDirect}{" "}
              <a href={`mailto:${contactEmail}`} className="underline underline-offset-4 hover:text-zinc-900">
                {contactEmail}
              </a>
            </p>
          )}
          <p>
            {t.contactPrivacyNotice}{" "}
            <a href="/privacy" className="underline underline-offset-4 hover:text-zinc-900">
              {t.privacyPolicy}
            </a>
          </p>
        </div>
        <button
          type="submit"
          aria-disabled={loading}
          className="inline-flex h-11 min-w-[160px] items-center justify-center self-end rounded-xl bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 aria-disabled:opacity-60 sm:self-auto"
        >
          {loading ? t.contactSending : t.contactSend}
        </button>
      </div>
    </form>
  );
}
