import nodemailer from "nodemailer";


const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:'ian.childress10@gmail.com',
    pass: 'mfkn byxh qgro ighe',
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
    text: "Hello world?",
    html: "<b>Hello world?</b>",
});

// basic logging
console.log("Message sent: ", info.messageId);
})().catch(console.error);
