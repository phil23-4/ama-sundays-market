export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.SENDGRID_CONTACT_API_KEY,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.WEBSITE_EMAIL,
    to: 'info@amasundayfarmersmarket.com',
    subject: `Message From ${req.body.firstname}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
