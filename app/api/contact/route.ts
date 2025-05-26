import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createMailOptions, validateBody } from "./lib";

export async function POST(req: Request) {
  const data = await req.json();

  validateBody(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sadkalshayee@gmail.com",
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail(createMailOptions(data));

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
