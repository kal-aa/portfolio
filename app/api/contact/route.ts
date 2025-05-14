// /pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
console.log("Resend API Key:", resendApiKey);


if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}
const resend = new Resend(resendApiKey);

// const resend = new Resend(process.env.RESEND_API_KEY!);// Non-null assertion because the key should exist

type Data = {
  success: boolean;
  error?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  try {
    // const data =
    await resend.emails.send({
      from: "sadkalshayee@gmail.com", // Change this to your email address
      to: "sadkalshayee@gmail.com", // Change this to your email address
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      //      text: `
      //   Name: ${name}
      //   Email: ${email}
      //   Phone: ${phone}  // New phone number
      //   Message: ${message}
      // `,  // Include the phone number and other details
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return res.status(500).json({ success: false, error: errorMessage });
  }
}
