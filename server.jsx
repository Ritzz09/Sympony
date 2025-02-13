const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { render } = require("@testing-library/react");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication

// Configure the transporter (Use your email & app password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "seexpert111@gmail.com", // Replace with your Gmail
    pass: "kylh tuyb bosm kudj",    // Use App Password, not your Gmail password
  },
});

// Email sending route
app.post("/send-email", (req, res) => {
  const { name, email, mobile, interest, message, appointmentDate } = req.body;

  const mailOptions = {
    from: "seexpert111@gmail.com", // User's email
    to: "seexpert111@gmail.com", // Doctor's email
    subject: "New Appointment Request",
    text: `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Interest: ${interest}
      Appointment Date: ${appointmentDate}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      return res.status(500).json({ message: "Failed to send email" });
    }
    // console.log("Email sent: " + info.response);
    // res.status(200).json({ message: "Email sent successfully!" });
  });
});

// Start server on port 5000
app.listen(5000, () => console.log("Server running on port 5000"));
