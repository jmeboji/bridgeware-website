import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { recaptchaToken, ...data } = await req.json();
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }
    // Verify reCAPTCHA token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const params = new URLSearchParams();
    params.append('secret', secretKey!);
    params.append('response', recaptchaToken);
    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });
    const recaptchaJson = await recaptchaRes.json();
    if (!recaptchaJson.success || (recaptchaJson.score !== undefined && recaptchaJson.score < 0.5)) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA failed' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Callback Request" <${process.env.SMTP_USER}>`,
      to: 'jmeboji@hotmail.com',
      subject: 'New Callback Request',
      text: `You have a new callback request:\n\n${JSON.stringify(data, null, 2)}`,
      html: `<h2>New Callback Request</h2><pre>${JSON.stringify(data, null, 2)}</pre>`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 