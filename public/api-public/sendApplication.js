// src\api\sendApplication.js
import formidable from 'formidable';
import fs from 'fs';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // Required for formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const form = formidable({ multiples: false, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error parsing form' });

    const { name, email, phone, message } = fields;
    const resumeFile = files.resume;

    try {
      const transporter = nodemailer.createTransport({
        service: 'Outlook365', // Or use SMTP
        auth: {
          user: process.env.FORM_SENDER_EMAIL,
          pass: process.env.FORM_SENDER_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.FORM_SENDER_EMAIL,
        to: 'admin@indivirtus.com',
        subject: `New Job Application: ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Cover Letter: ${message}
        `,
        attachments: [
          {
            filename: resumeFile.originalFilename,
            content: fs.createReadStream(resumeFile.filepath),
          },
        ],
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Email send failed:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });
}
