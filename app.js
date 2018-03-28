const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }});
let users = require('./routes/users.js');
let stocks = require('./routes/stocks.js');
app.use('',users );
app.use('',stocks );

//const ctrl = require('../controller/stocks.js')


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`listening on: ${port}!`)
  })
}
/*

ok what we need


*/
