const nodemailer = require('nodemailer');

class Mailer {
async MailTo(req,res)
{

    let transporter = nodemailer.createTransport({
        host:'mail.el-detox.com',
        port: 465,
        secure: true,
        auth : {
            user:'no-reply@el-detox.com',
            pass: 'i~5vc^?o5cIm'
        }
    })
 
    let mailOptions = {
        from : 'El-Detox Team <no-reply@el-detox.com>',
        // to : 'kristine.arcangel@el-detox.com,dalal.albaker@el-detox.com',
        to : req[0].Email,
        subject:  req[0].Type,
        text: 'hello world',
        html:  req[0].Message,
        // attachments : [{
        //     filename : "logo.png",
        //     path : "https://img.bayengage.com/32bb2557a2c6/studio/6260/logo.png",
        // },
        // {
        //     filename : "Theqa qr.png",
        //     path : "https://img.bayengage.com/32bb2557a2c6/studio/6259/theqa-qr.png"
        // },
        // {
        //     filename : "trustmark-badge",
        //     path : "https://theqa.qa/badge/61d7cecb-1dac-44c1-8f00-ceb7fb5eea8c.svg"
        // }
        // ]
    }
 
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            return console.log(error);
         }
         
         console.log('Message Sent : %s', info.messageId);
         console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
    });
}

}

module.exports = new Mailer();