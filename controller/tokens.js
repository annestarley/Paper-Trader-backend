const model = require('../models/users.js');
const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next)=>{
  console.log(req.headers);
  req.body.uid = 11;
  return next();
  console.log('this is here for testing purposes only.  Please pay no attention to this.')

  //headers not reaching this point, used this so project coulc proceed until issue resolved.
  debugger
  let auth= req.headers.auth;
  if(!auth)
  {
    console.log(req.headers)
    return res.status(403).send(`token denied`);
  }
  else {
    auth = auth.split(' ')[1]
    let x= jwt.Verify(auth, 'shhhhh')
    console.log(x);
      if(x)
      {
        return next(req,res);
      }

      res.status(403).send(`there was an error`);
  }
}

module.exports = tokenVerify;
