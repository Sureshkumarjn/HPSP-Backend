import nodemailer from "nodemailer"



export const sendMessage = (req, res) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sureshkumarjn2001@gmail.com',
        pass: 'epolbtidetywjget'
      }
    });
  
    const mailOptions = {
      from: 'sureshkumarjn2001@gmail.com',
      to,
      subject,
      text
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
   
};
