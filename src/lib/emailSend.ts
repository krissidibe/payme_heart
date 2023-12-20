import nodemailer from 'nodemailer';   
const transporter = nodemailer.createTransport({
    host: 'mail.paymefinance.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contact@paymefinance.com',
      pass: 'hE2@T14GUB4pqV*',
    },
  });    
 

  export default transporter;