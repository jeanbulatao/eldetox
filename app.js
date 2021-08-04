const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');
var whitelist = ['http://localhost:4200', 'https://www.el-detox.com','http://127.0.0.1:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
//app.use(cors());
app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname,'public')));

const EmailRegister = require('./EmailRoutes');
app.use('/Email/', EmailRegister);

const myfatoorah = require('./MyFatoorahRoute');
const { response } = require('express');
app.use('/myfatoorah/', myfatoorah);

app.post('/verify',(req,res) => {
    var userkey = req.body.token
    
    var secret = "6LflDtwbAAAAAG2NfPnSoVhVsnx0xJVy1rYklgut"
    // var secret = "6LeHMacbAAAAAPjhv6KTcNIaaqH1y-TJViBUvEK2"
    axios.get('https://www.google.com/recaptcha/api/siteverify?secret='+ secret +'&response='+userkey).then(response => {
        console.log('key data = ',response );
        if(response.data.success){
            return res.status(200).json({
                response: "verification success"
            });
        }
         return res.status(401).json({
             error: "verification failed"
         })
    }).catch(error =>{
        res.status(500).json({
            error : error
        })
    });
});

app.listen(port, () => console.log('Server listening on port ' + port))