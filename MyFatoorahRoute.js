const express = require('express');
const router = express.Router();
const initiatePayment = require('./MyFatoorah/InitiatePayment');
const executePayment = require('./MyFatoorah/ExecutePayment');
const capturePayment = require('./MyFatoorah/CaptureFatoorah');

router.post('/initiate',(req,res) => initiatePayment.InitiatePayment(req,res));
router.post('/execute',(req,res) => executePayment.executePayment(req,res));
router.post('/capture', (req,res) => capturePayment.capturePayment(req,res));

module.exports = router;