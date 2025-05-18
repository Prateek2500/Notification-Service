const nodemailer = require("nodemailer");

exports.sendEmail = async (recipientEmail, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  
      }
    });

    const info = await transporter.sendMail({
      from: `"Notification Service" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: "New Notification",
      text: message,
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error; 
  }
};
