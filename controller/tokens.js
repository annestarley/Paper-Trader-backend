const model = require('../models/users.js');
const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next)=>{

  req.body.uid = 3;
  return next();
  //headers not reaching this point, used this so project coulc proceed until issue resolved.
  let auth= req.headers.auth;
  if(!auth)
  {
    console.log(req.headers)
    return res.status(403).send(`token denied`);
  }
  else {
    auth = auth.split(' ')[1]
    let x= jwt.Verify(auth, 'shhhhh')
      if(x)
      {
        return next(req,res);
      }
      console.log(x);
      res.status(403).send(`there was an error`);
  }
}

module.exports = tokenVerify;
