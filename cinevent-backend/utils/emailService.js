const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM || '"Cinevent" <noreply@cinevent.com>',
    to,
    subject,
    html,
  };

  if (process.env.NODE_ENV === 'test' || !process.env.EMAIL_USER) {
    console.log(`[EmailService] Sending email to: ${to}`);
    console.log(`[EmailService] Subject: ${subject}`);
    console.log(`[EmailService] Body: ${html}`);
    return;
  }

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
