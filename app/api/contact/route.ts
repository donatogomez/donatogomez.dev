import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 }
    );
  }
  const resendClient = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.CONTACT_EMAIL_TO;

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resendClient.emails.send({
      from: `Contacto landing <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `Contacto desde la web: ${name.trim().slice(0, 50)}`,
      text: `Nombre: ${name.trim()}\nEmail: ${email.trim()}\n\nMensaje:\n${message.trim()}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
