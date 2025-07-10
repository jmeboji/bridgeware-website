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
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}

Newsletter Subscription: ${data.newsletter ? 'Yes' : 'No'}
`;

    const emailHtml = `
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%;">
  <tr><td><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
  <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
  <tr><td><strong>Phone:</strong></td><td>${data.phone || 'Not provided'}</td></tr>
  <tr><td><strong>Company:</strong></td><td>${data.company || 'Not provided'}</td></tr>
  <tr><td><strong>Service:</strong></td><td>${data.service}</td></tr>
  <tr><td><strong>Budget:</strong></td><td>${data.budget || 'Not specified'}</td></tr>
  <tr><td><strong>Newsletter:</strong></td><td>${data.newsletter ? 'Yes' : 'No'}</td></tr>
</table>
<h3>Message:</h3>
<p style="white-space: pre-wrap;">${data.message}</p>
`;

    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,
      to: 'jmeboji@hotmail.com',
      subject: `New Contact Form Submission - ${data.service}`,
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
