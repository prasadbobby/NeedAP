const nodemailer = require("nodemailer");

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "YourEmailService", // e.g., "Gmail" or use your SMTP server settings
  auth: {
    user: "your@email.com",
    pass: "your-email-password",
  },
});

// Email data
const mailOptions = {
  from: "your@email.com",
  to: "recipient@email.com",
  subject: "Hello from Node.js",
  text: "This is a test email sent from Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
