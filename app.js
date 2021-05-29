const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const cron = require('node-cron');
const remind = require('./Reminder/Remider')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eldetoxc_live',
    port:3306
  });

app.use(cors());
app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname,'public')));

const EmailRegister = require('./EmailRoutes');
app.use('/Email/', EmailRegister);

cron.schedule('* * * * *', function() {
    con.query(`select O.id,O.billing_fname,O.billing_lname,O.billing_email,P.name,OP.quantity,P.price from orders O 
    inner join order_product OP
    ON o.id = OP.order_id
    inner join products P 
    ON P.id = OP.product_id
    where status = 'pending' and user_id is not null`, function(err, orderProductsToEmail) {
        if(err){
          console.log('Query error: ', err);
          return;
        }
        // console.log(orderProductsToEmail);
        // 
        var str = "";
        let products = [];
        let orders = [];
        let final = [];
        orderProductsToEmail.forEach(element => {
       
            if(str != element["id"])
            {   
              if(orders.length > 0 || products.length > 0)
              {
                final.push({
                  "orders": orders
                },
                {
                  "products" : products
                });

                orders = [];
                products = [];
                 remind.remind(final,res => {
                  console.log(res);
                });
                
                final = [];
            
              }
                str = element["id"];
                var price = insertDecimal(element["price"]);
                orders.push({
                  billing_fname : element["billing_fname"],
                  billing_lname : element["billing_lname"],
                  billing_email : element["billing_email"]
                });
                var price = insertDecimal(element["price"]);
                products.push({
                  product_id : element["name"],
                  price : price,
                  quantity : element["quantity"]
                });
            }
            else if(str == element["id"])
            {
              products.push({
                product_id : element["name"],
                price : element["price"],
                quantity : element["quantity"]
              });
            }  
        });
    });
      
  });
  function insertDecimal(num) {
    return (num / 100).toFixed(2);
 }
 
app.listen(3000, () => console.log('Server Started...'))