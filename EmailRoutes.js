const express = require('express');
const router = express.Router();
const Register = require('./Registration/Register');
const Confirmation = require('./Confirmation/Confirmation');
const Thankyou = require('./Thankyou/Thankyou');
const woym = require('./woym/woym');

router.post('/Register', (req, res) => Register.Register(req, res));
router.post('/Confirm', (req, res) => Confirmation.Confirmation(req, res));
router.post('/Thankyou',(req,res) => Thankyou.thankyou(req,res));
router.post('/woym',(req,res) => woym.woym(req,res));

module.exports = router;