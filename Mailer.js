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
            pass: '4p0AY6cUBFVn'
        }
    })
 
    let mailOptions = {
        from : 'El-Detox Team <no-reply@el-detox.com>',
        to : req[0].Email,
        subject:  req[0].Type,
        text: 'hello world',
        html:  req[0].Message,
       
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