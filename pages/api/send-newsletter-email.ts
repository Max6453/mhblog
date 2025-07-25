import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
  });
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Thanks for subscribing!',
    text: 'You have subscribed to our newsletter.'
  });
  res.status(200).json({ success: true });
}