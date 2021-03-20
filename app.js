const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname,'public')));

const EmailRegister = require('./EmailRoutes');
app.use('/Email/', EmailRegister);


app.listen(3000, () => console.log('Server Started...'))