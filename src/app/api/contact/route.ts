import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().min(1).max(120),
  email: z.email().max(254),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
});

const signupSchema = z.object({
  type: z.literal("signup"),
  name: z.string().min(1).max(120),
  email: z.email().max(254),
  company: z.string().max(200).optional(),
});

const submissionSchema = z.discriminatedUnion("type", [
  contactSchema,
  signupSchema,
]);

const TO = process.env.CONTACT_EMAIL ?? "contact@d-alabs.com";
const FROM = process.env.CONTACT_FROM ?? "D-ALabs <noreply@d-alabs.com>";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: z.flattenError(parsed.error).fieldErrors },
      { status: 400 }
    );
  }
  const data = parsed.data;

  const subject =
    data.type === "contact"
      ? `[D-ALabs · contact] ${data.subject}`
      : `[D-ALabs · signup] ${data.name}`;

  const text =
    data.type === "contact"
      ? `From: ${data.name} <${data.email}>\nSubject: ${data.subject}\n\n${data.message}`
      : `Signup\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company ?? "—"}`;

  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: data.email,
        subject,
        text,
      });
      if (error) {
        console.error("[contact] resend error:", error);
        return NextResponse.json(
          { ok: false, error: "Email send failed" },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[contact] resend exception:", err);
      return NextResponse.json(
        { ok: false, error: "Email send failed" },
        { status: 502 }
      );
    }
  } else {
    console.log("[contact] (no RESEND_API_KEY) would send:", { subject, text });
  }

  return NextResponse.json({ ok: true });
}
