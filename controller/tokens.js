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
    let x= jwt.Verify(auth, 'shhhhh')
      if(x)
      {
        return next(req,res);
      }
      res.status(403).send(`there was an error`)
  }
}

module.exports = tokenVerify;
