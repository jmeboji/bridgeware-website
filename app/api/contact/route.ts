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
    
    // Skip reCAPTCHA verification for fallback tokens
    if (recaptchaToken !== "fallback-token") {
      // Verify reCAPTCHA token with Google
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
      const params = new URLSearchParams();
      params.append('secret', secretKey!);
      params.append('response', recaptchaToken);
      
      try {
        const recaptchaRes = await fetch(verifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params,
        });
        const recaptchaJson = await recaptchaRes.json();
        if (!recaptchaJson.success || (recaptchaJson.score !== undefined && recaptchaJson.score < 0.5)) {
          console.warn('reCAPTCHA verification failed, but allowing submission:', recaptchaJson);
        }
      } catch (error) {
        console.warn('reCAPTCHA verification failed due to network error:', error);
      }
    }

    console.log('Contact form data received:', data);

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'service', 'message'];
    for (const field of requiredFields) {
      if (!data[field]) {
        console.warn(`Missing required field: ${field}`);
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error('Missing SMTP environment configuration');
      return NextResponse.json(
        { success: false, error: 'Email service not properly configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Test SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (verifyError: any) {
      console.error('SMTP connection failed:', verifyError);
      return NextResponse.json(
        { success: false, error: `SMTP connection failed: ${verifyError.message}` },
        { status: 500 }
      );
    }

    // Compose email content
    const emailText = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.service}

Message:
${data.message}
`;

    const emailHtml = `
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${data.email}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">${data.service}</td></tr>
</table>
<h3 style="margin-top: 20px;">Message:</h3>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-family: Arial, sans-serif;">${data.message}</div>
`;

    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,
      to: 'jmeboji@hotmail.com',
      subject: `Contact Form: ${data.service}`,
      text: emailText,
      html: emailHtml,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
