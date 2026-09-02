import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(5000),
  social: z.string().trim().max(300).optional().or(z.literal("")),
});

// Header values must stay on a single line so a submitted name cannot inject headers.
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Contact form: SMTP_USER and SMTP_PASSWORD are not configured."
    );
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  let data: z.infer<typeof contactSchema>;
  try {
    data = contactSchema.parse(await req.json());
  } catch {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const name = singleLine(data.name);
  const social = data.social ? singleLine(data.social) : "";

  try {
    await transporter.sendMail({
      // Gmail only accepts the authenticated account as the sender, so the
      // visitor's address goes in Reply-To instead.
      from: { name: "Portfolio contact form", address: user },
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: { name, address: data.email },
      subject: `Portfolio contact — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${data.email}`,
        social ? `Social: ${social}` : null,
        "",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 16px">New message from your portfolio</h2>
          <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0"><strong>Email:</strong>
            <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>
          </p>
          ${
            social
              ? `<p style="margin:0"><strong>Social:</strong> ${escapeHtml(social)}</p>`
              : ""
          }
          <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Could not send your message. Please email me directly." },
      { status: 500 }
    );
  }
}
