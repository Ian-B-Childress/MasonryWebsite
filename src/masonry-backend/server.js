const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());
const cors = require("cors");
app.use(cors());

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ian.childress10@gmail.com",
    pass: "mfkn byxh qgro ighe", // use an app password for Gmail
  },
});

//in memory storage for the submissions
const customerSubmissions = [];
//in a real application, you would use a database
//switch to postgresql, but atleast we know its working

app.post("/contact", async (req, res) => {
  const { name, phone, address, message } = req.body;
  console.log("Contact form submitted:", { name, phone, address, message });
  //here you would typically handle the form data, e.g., save it to a database or send an email
  //we'll just send a success response
  customerSubmissions.push({ name, phone, address, message });

 
    try {
      await transporter.sendMail({
        from: '"Ian C" <ian.childress10@gmail.com>',
        to: "ian.childress10@gmail.com",
        subject: "New Contact Form Submission",
        text: `You have a new contact form submission:\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nMessage: ${message}`,
      });
      console.log("Notification email sent");
    } catch (error) {
      console.error("Error sending email:", error);
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
