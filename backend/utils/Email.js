import nodemailer from "nodemailer";

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

async function sendResetPasswordEmail(name, email, token) {
    const mailOptions = {
      from: user,
      to: email,
      subject: "Reset Password",
      html: `<h1>Hello ${name}</h1>
        <p>Please click on the link below to reset your password</p>
        <a href="http://localhost:3000/resetPassword/${token}">Reset Password</a>`,
    };
  
    await transport.sendMail(mailOptions);
    console.log("reset password email was sent");
  }
  
  export  { sendResetPasswordEmail };
