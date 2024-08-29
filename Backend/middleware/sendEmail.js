const nodemailer=require('nodemailer');
require('dotenv').config();
const sendEmail = async (to, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
      const mainOptions = {
        from: "no-reply@meraqui.com",
        to,
        subject,
        text,
      };
      const response = await transporter.sendMail(mainOptions);
      return response;
    } catch (e) {
      return {
        error: true,
        details: e,
      };
    }
  };
  
  module.exports = { sendEmail };