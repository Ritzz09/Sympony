import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, mobile, interest, message, appointmentDate } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seexpert111@gmail.com",
      pass: "kylh tuyb bosm kudj",
    },
  });

  const mailOptions = {
    from: "seexpert111@gmail.com",
    to: "aniketmaghade4626@gmail.com",
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

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
