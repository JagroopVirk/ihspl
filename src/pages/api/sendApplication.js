import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const resume = formData.get('resume');
    const job = formData.get('job'); // JSON string

    const jobObj = job ? JSON.parse(job) : {};

    const resumeBuffer = await resume.arrayBuffer();
    const resumeContent = Buffer.from(resumeBuffer);

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: 'admin@indivirtuscro.com',
        pass: 'Indivirtus@123',
      },
    });

    const mailOptions = {
      from: `"${name}" `,
      to: 'admin@indivirtus.com',
      replyTo: `${email}`,
      subject: `New Job Application: ${jobObj.title || ''}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Job Title: ${jobObj.title}
Department: ${jobObj.department}
Message: ${message}
      `,
      attachments: [
        {
          filename: resume?.name || 'resume.pdf',
          content: resumeContent,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Email send error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
