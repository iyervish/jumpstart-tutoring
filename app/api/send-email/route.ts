import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const { name, email, phone, studentGrade, referralSource, message } = formData;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Jump Start Contact Form <onboarding@resend.dev>', // Replace with your "from" email if you have a custom domain set up in Resend
      to: ['iyervish@gmail.com', 'jumpstartwithus@gmail.com'],
      subject: `New Contact Form Submission`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Student Grade:</strong> ${studentGrade || 'Not provided'}</p>
        <p><strong>How did you hear about us:</strong> ${referralSource || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (err) {
    console.error('Error processing request:', err);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
} 