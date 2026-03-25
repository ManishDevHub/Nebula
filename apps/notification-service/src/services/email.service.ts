import  nodemailer from "nodemailer";

if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
  throw new Error("Missing EMAIL or EMAIL_PASSWORD environment variable");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to: string, message: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: "Notification",
    text: message,
  });

  console.log(" Email sent");
};