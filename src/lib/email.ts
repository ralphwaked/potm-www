import type { Transporter } from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { createTransport } from "nodemailer";

interface SendMailParams {
  from: {
    address: string;
    name: string;
  };
  to: string;
  subject: string;
  body: string;
}

/**
 * Configure the mail transporter using OAuth2 authentication.
 * @returns {Transporter} The configured mail transporter object.
 */
function configureTransporter(): Transporter {
  return createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    },
  });
}

/**
 * Sends an email using the nodemailer package with OAuth2 authentication.
 *
 * @param {SendMailParams} options An object containing the recipient's
 * email address, email subject, and email body.
 *
 * @returns {Promise<void>} A promise that resolves when the
 * email is sent successfully.
 */
export async function sendMail({
  to,
  subject,
  body,
  from,
}: SendMailParams): Promise<void> {
  const transporter = configureTransporter();

  await transporter.sendMail({
    from,
    to,
    subject,
    html: body,
    auth: {
      user: from.address,
      refreshToken: process.env.GOOGLE_OAUTH_REFRESH,
    },
  } as Mail.Options & {
    auth: { user: string; refreshToken: string; accessToken?: string };
  });
}
