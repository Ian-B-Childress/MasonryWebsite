import nodemailer from "nodemailer";


const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ian.childress10@gmail.com",
    pass: "your_app_password_here" // use an app password for Gmail
  },
});

// sends the email with defined transport object
// async in case it takes a while to send
(async () => {
  const info = await transporter.sendMail({
    from: '"Ian C" <ian.childress10@gmail.com>',
    to: " ian.childress10@gmail.com",
    // gotta figure out a way to make this dynamic
    subject: "Hello ✔",
    text: "Hello world?"
});

// basic logging
console.log("Message sent: ", info.messageId);
})().catch(console.error);

export default function SendEmail() {
  return <div>SendEmail</div>;
}