import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const emailMessage = (await req.json()) as unknown as {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message?: string;
    };

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'POTM Contact Form Submission',
        text: JSON.stringify(emailMessage),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent', info });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email', error }, {
            status: 500
        });
    }
} 