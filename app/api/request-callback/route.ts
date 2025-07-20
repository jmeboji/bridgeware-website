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
    const emailText = `
New Callback Request

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'Not provided'}
Service: ${data.service}
Best Time to Call: ${data.callTime}
Preferred Date: ${data.preferredDate || 'Not specified'}
Project Urgency: ${data.urgency || 'Not specified'}
Budget: ${data.budget || 'Not specified'}

Project Description:
${data.projectDescription}

Newsletter Subscription: ${data.newsletter ? 'Yes' : 'No'}
`;

    const emailHtml = `
<h2>New Callback Request</h2>
<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${data.email}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${data.company || 'Not provided'}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${data.service}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Best Time to Call:</td><td style="padding: 8px;">${data.callTime}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td style="padding: 8px;">${data.preferredDate || 'Not specified'}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Project Urgency:</td><td style="padding: 8px;">${data.urgency || 'Not specified'}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${data.budget || 'Not specified'}</td></tr>
  <tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">Newsletter:</td><td style="padding: 8px;">${data.newsletter ? 'Yes' : 'No'}</td></tr>
</table>
<h3 style="margin-top: 20px;">Project Description:</h3>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-family: Arial, sans-serif;">${data.projectDescription}</div>
`;

    const mailOptions = {
      from: `"Callback Request" <${process.env.SMTP_USER}>`,
      to: 'jmeboji@hotmail.com',
      subject: `Callback Request: ${data.service}`,
      text: emailText,
      html: emailHtml
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 