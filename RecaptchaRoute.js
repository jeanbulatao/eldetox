const express = require('express');
const router = express.Router();
const recaptcha = require('./recaptcha/Recaptcha.js');

router.post('/verify',(req,res) => recaptcha.verify(req,res));

module.exports = router;