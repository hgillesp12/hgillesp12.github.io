import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  replyTo?: string
) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    replyTo: replyTo || process.env.EMAIL_USER,
    subject,
    html,
  });
}
