var nodemailer = require('nodemailer');
const fs = require('fs');
 


var mail = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });


var mailOptions = {
   from: 'youremail@gmail.com',
//    to: req.user.emails[0].value,
  to: 'knvdurgaprasad610@gmail.com',
   subject: 'Sending Email using Node.js',
   html: `<h1>Hello</h1>` 
  

};

mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});