const express = require('express');
const router = express.Router();
const Register = require('./Registration/Register');
const Confirmation = require('./Confirmation/Confirmation');
const Thankyou = require('./Thankyou/Thankyou');
const woym = require('./woym/woym');
const Coupon = require('./Promo/coupon');
const failed = require('./Reminder/Failed');
const marketing = require('./Marketing/marketing');
const newregister = require('./Registration/NewRegister');

router.post('/Register', (req, res) => Register.Register(req, res));
router.post('/Confirm', (req, res) => Confirmation.Confirmation(req, res));
router.post('/Thankyou',(req,res) => Thankyou.thankyou(req,res));
router.post('/woym',(req,res) => woym.woym(req,res));
router.post('/Coupon',(req,res) => Coupon.Coupon(req,res));
router.post('/failed',(req,res) => failed.failed(req,res));
router.post('/newregister', (req,res) => newregister.newRegister(req,res));

router.post('/Marketing',(req,res) => marketing.SendEmail(req,res));

module.exports = router;