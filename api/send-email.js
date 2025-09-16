import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, phone, address, message } = req.body;

    console.log("Form submission received:", { name, phone, address, message });
    console.log("EMAIL_USER is", process.env.EMAIL_USER ? "set" : "missing");
    console.log("EMAIL_PASS is", process.env.EMAIL_PASS ? "set" : "missing");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Elmer" <${process.env.EMAIL_USER}>`,
      to: "melvinmasonry10@gmail.com",
      subject: "New Job Email",
      text: `You have a new email from your website:\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return res
      .status(500)
      .json({ success: false, message: error.message || "Failed to send email." });
  }
}