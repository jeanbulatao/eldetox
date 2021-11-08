const express = require('express');
const router = express.Router();
const Mailer = require('../Mailer');

class MarketingService {
    async SendEmail(req,res){
        const output = req.body.Template;

     var data = [{
      "Email" : req.body.Email,
      "Message" : output,
      "Type" : 'Marketing'}
      
    ]
      await Mailer.MailTo(data);
      res.status(200).send({
        success: true
      });
    }
}
module.exports = new MarketingService();