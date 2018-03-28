const model = require('../models/users.js');
const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next)=>{
    let auth= req.headers.auth;
    if(!auth)
    {
      return res.status(403).send(`token denied`);
    }
    else {
      auth = auth.split(' ')[1]
      jwt.VerifyAsync(auth, process.env.TOKEN_SECRET)
      .then(x=>{
        console.log(x);
        next(req,res);
      })
      .catch(err=>{
        console.log(err)
        res.status(403).send(`there was an error`)
      });
  }
}

module.exports = tokenVerify;
