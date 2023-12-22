import nodemailer from 'nodemailer';   
const transporter = nodemailer.createTransport({
    host: 'mail.paymefinance.com',
    port: 465,
    secure: true,
    auth: {
      user: 'support@paymefinance.com',
      pass: '@Paym3Help@',
    },
  });    
 

  export default transporter;