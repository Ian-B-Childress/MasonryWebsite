const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
const cors = require("cors");
app.use(cors());

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, //first time using a real environment variable, pretty neat.
    pass: process.env.EMAIL_PASS, // use an app password for Gmail
  },
});

//in memory storage for the submissions
const customerSubmissions = [];
//in a real application, you would use a database
//switch to postgresql, but atleast we know its working

app.post("/contact", async (req, res) => {
  const { name, phone, address, message } = req.body;
  console.log("Contact form submitted:", { name, phone, address, message });
  customerSubmissions.push({ name, phone, address, message });
  
  try {
    await transporter.sendMail({
      from: '"Ian C" <ian.childress10@gmail.com>',
      to: "ian.childress10@gmail.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
    });
    console.log("Notification email sent");
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.get("/", (req, res) => {
  res.send("masonry-backend is running");
});

app.get("/contact", (req, res) => {
  res.send(customerSubmissions);
});

app.listen(PORT, () => {
  console.log(`Masonry Backend is running on http://localhost:${PORT}`);
});
