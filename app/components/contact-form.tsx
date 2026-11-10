"use client";

import { useState } from "react";
import type { HomeCopy } from "../content/copy";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({ t, contactEmail }: { t: HomeCopy; contactEmail: string }) {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

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

  return formStatus === "success" ? (
    <p className="rounded-lg bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
      {t.contactSuccess}
    </p>
  ) : (
    <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
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
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-[#F05138] focus:outline-none focus:ring-1 focus:ring-[#F05138] disabled:opacity-60"
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
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-[#F05138] focus:outline-none focus:ring-1 focus:ring-[#F05138] disabled:opacity-60"
            placeholder={t.contactEmailLabel}
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
          disabled={formStatus === "loading"}
          className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-[#F05138] focus:outline-none focus:ring-1 focus:ring-[#F05138] disabled:opacity-60"
          placeholder={t.contactMessageLabel}
        />
      </div>
      {formError && (
        <p className="text-sm text-red-600" role="alert">
          {formError}
        </p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={formStatus === "loading"}
          className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-xl bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-[#F05138] focus:outline-none focus:ring-2 focus:ring-[#F05138] focus:ring-offset-2 disabled:opacity-60"
        >
          {formStatus === "loading" ? "…" : t.contactSend}
        </button>
      </div>
    </form>
  );
}
