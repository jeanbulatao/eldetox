const express = require('express');
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
// var whitelist = ['http://localhost:4200', 'https://www.el-detox.com','http://127.0.0.1:4200','http://127.0.0.1:8000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));
app.use(cors());
app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());


const EmailRegister = require('./EmailRoutes');
app.use('/Email/', EmailRegister);

const myfatoorah = require('./MyFatoorahRoute');
const { response } = require('express');
app.use('/myfatoorah/', myfatoorah);

const recaptcha = require('./RecaptchaRoute');
app.use('/recaptcha/', recaptcha);

app.listen(port, () => console.log('Server listening on port ' + port))