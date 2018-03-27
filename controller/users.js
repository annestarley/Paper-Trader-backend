const model = require('../models/users.js')

const controllerPostLogin = (req,res, hashed) =>{
  if(model.verifyPassword(req.body.password, hashed))
  {
    //positive response, logged in
    res.status(200).send('logged in?')
    //generate and send a token here instead of this test response
  }
  else {
    res.status(400).send('failed login?')
  }
}

const controllerPostNewUser = (req,res, loggedIn) =>{
  model.addNewUser(un, pw).then(result=>{
  })
}

const controllerGetFunds = (req, res) =>{
  model.MGFunds(getUserId(req.params.token), res);
}

const getUserId = (token) =>{
  return loggedInUsers.filter(x=>x.token == token)[0].userID;
}

const controllerGetLogoff = (req,res) =>{
  model.MGLogoff(req.params.token, res);
}

const getPassword = (req,res,next)=>{
  un = req.body.username;
  pw = req.body.password;
  if(!un || !pw)
  {
    res.status(400).send('failed login?  try entering stuff')
  }
  model.getPassword(un, pw).then(x=>{
    controllerPostLogin(req, res, x)
  })
}

module.exports = {controllerPostLogin, controllerPostNewUser, controllerGetFunds, getUserId, controllerGetLogoff,getPassword}
