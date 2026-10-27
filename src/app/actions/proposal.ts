"use server";

import { heroFormSchema, type HeroFormData } from "@/lib/schemas";
import { Resend } from "resend";

type ActionResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const toEmail = process.env.CONTACT_EMAIL_TO || "info@zentristraining.com";

export async function submitProposal(
  formData: FormData
): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries());

  // Honeypot check
  if (raw.website) {
    // Silently succeed to not tip off bots
    return { ok: true };
  }

  const parsed = heroFormSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "_";
      (fieldErrors[key] ??= []).push(issue.message);
    }
    return { ok: false, error: "Please check the form fields.", fieldErrors };
  }

  const data = parsed.data;

  // Send email via Resend if configured
  if (resend) {
    try {
      await resend.emails.send({
        from: "ZENTRIS Website <noreply@zentristraining.com>",
        to: toEmail,
        subject: `New training proposal request from ${data.name}`,
        replyTo: data.email,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Interest: ${data.interest}`,
          data.company ? `Company: ${data.company}` : null,
          data.phone ? `Phone: ${data.phone}` : null,
          "",
          "---",
          "Submitted via the website hero form.",
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (err) {
      console.error("Resend error:", err);
      return {
        ok: false,
        error: "Could not send your request. Please try again or call us directly.",
      };
    }
  } else {
    // No email provider — log for development
    console.log("[proposal]", data);
  }

  return { ok: true };
}
