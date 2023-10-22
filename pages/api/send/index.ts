import { IFormContact } from "@/src/features/FormContact";
import { ContactEmail } from "@/src/features/Resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return sentEmail(req, res);
    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const sentEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, fullName, message, subject } = req.body as IFormContact;
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["hmartinezmoreira81@gmail.com"],
      subject,
      react: ContactEmail({ name: fullName, email, subject, message }),
      text: "",
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
