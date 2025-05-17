import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message, timeline, budget } = await req.json();

  if (!name || !email || !message || !timeline || !budget) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields",
      },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sadkalshayee@gmail.com",
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: "Kal Portfolio <sadkalshayee@gmail.com>",
      to: ["kalasisa123@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333; max-width: 600px; margin: auto;">
            <div style="text-align: center; margin-bottom: 20px;">
              <!-- Opportunity Icon Image -->
              <img
                src="https://img.icons8.com/color/96/handshake.png"
                alt="Opportunity Icon"
                width="60"
                height="60"
                style={{ display: "block", margin: "auto" }}
              />
            </div>

            <h2 style="color: #0070f3; text-align: center; margin-bottom: 20px;">📩 New message from ${name}</h2>

            <p style="margin: 10px 0; font-size: 16px;">
              <strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a>
            </p>

            <p style="margin: 10px 0; font-size: 16px;">
              <strong>💬 Message:</strong><br />
              <span style="white-space: pre-wrap;">${message}</span>
            </p>

            <p style="margin: 10px 0; font-size: 16px;">
              <strong>⏳ Timeline:</strong> ${timeline}
            </p>

            <p style="margin: 10px 0; font-size: 16px;">
              <strong>💰 Budget:</strong> ${budget}
            </p>
          </div>
        `,
      
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Timeline: ${timeline}
        Budget: ${budget}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
