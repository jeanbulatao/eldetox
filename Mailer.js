const nodemailer = require('nodemailer');

class Mailer {
async MailTo(req,res)
{

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: 'no-reply@el-detox.com',
            pass: '4p0AY6cUBFVn'
        },
    })
 
    let mailOptions = {
        from : 'El-Detox Team <no-reply@el-detox.com>',
        to : req[0].Email,
        subject:  req[0].Type,
        html:  req[0].Message,
       
    }
 
        transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
           return   console.log(error);
         }
         console.log('Message Sent : %s', info.messageId);
         console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
    });
  
}

}

module.exports = new Mailer();




// const nodemailer = require('nodemailer');

// class Mailer {
// async MailTo(req,res)
// {

//     let transporter = nodemailer.createTransport({
//         //host:'mail.el-detox.com',
//         service: 'gmail',
//        // port: 465,
//        // secure: true,
//         auth : {
//             user:'eldetox.trading@gmail.com',
//             pass: 'akosijean'
//         },
    
//     })
 
//     let mailOptions = {
//         from : 'El-Detox Team <eldetox.trading@gmail.com>',
//         to : req[0].Email,
//         subject:  req[0].Type,
//         text: 'hello world',
//         html:  req[0].Message,
       
//     }
 
//     transporter.sendMail(mailOptions,(error, info)=>{
//         if(error){
//             return console.log(error);
//          }
//          console.log('Message Sent : %s', info.messageId);
//          console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
//     });
// }

// }

// module.exports = new Mailer();