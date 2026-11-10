import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_LIMITS, type ContactErrorCode } from "../../lib/contact";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fail(error: ContactErrorCode, status: number) {
  return NextResponse.json({ error }, { status });
}

function field(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    return fail("not_configured", 503);
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null) return fail("invalid", 400);
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("invalid", 400);
  }

  // Campo trampa: invisible para personas; si llega relleno, es un bot.
  // Se responde como si se hubiera enviado para no darle pistas.
  if (field(body.website)) {
    return NextResponse.json({ success: true });
  }

  const name = field(body.name).replace(/\s+/g, " ");
  const email = field(body.email);
  const message = field(body.message);

  if (!name || !email || !message) return fail("required", 400);
  if (
    name.length > CONTACT_LIMITS.name ||
    email.length > CONTACT_LIMITS.email ||
    message.length > CONTACT_LIMITS.message ||
    !EMAIL_PATTERN.test(email)
  ) {
    return fail("invalid", 400);
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Contacto landing <${FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Contacto desde la web: ${name.slice(0, 50)}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });
    if (error) {
      console.error("Resend error", error);
      return fail("send_failed", 502);
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact form error", e);
    return fail("send_failed", 500);
  }
}
