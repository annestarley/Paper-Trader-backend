const jwt = require('jsonwebtoken');
const model = require('../models/users.js')

const postLogin = (req,res) =>{
  let loggedIn= model.verifyPassword(req.body.password, req.body.hashedPw)

  if(loggedIn)
  {
    //positive response, logged in
    model.getUserID(req.body.username).then( uid=>{

      console.log(token)
      let payload = {
                  loggedIn: true,
                  sub: {id: uid},
                  exp: Math.floor(Date.now() / 1000) + (60 * 1)
                };
      const token = jwt.sign(payload, 'shhhhh');
      jwt.jwtSignAsync(payload, process.env.TOKEN_SECRET).then(token=>{
        return res.status(200).set('Auth', `Bearer: ${token}`).send('password correct, JWT set in Auth header');
      });
    });
    //generate and send a token here instead of this test response
  }
  else {
    res.status(400).send("login failed")
  }
}

const postNewUser = (req,res, loggedIn) =>{
  let addNew = model.addNewUser(req.body.username, req.body.password, req.body.email);
  if(addNew)
  {
    addNew.then(result=>{
      return res.status(200).send('new account created')
    }).catch(x=>{return res.status(400).send('account creation failed')})
  }
  else {
    return res.status(400).send('account creation failed')
  }
}

const getFunds = (req, res) =>{
  model.MGFunds(getUserId(req.params.token), res);
}

const getUserId = (token) =>{
  return loggedInUsers.filter(x=>x.token == token)[0].userID;
}

//gets and passes the hashed password to the next
const getPassword = (req,res,next)=>{
  let un = req.body.username;
  let pw = req.body.password;
  if(!un || !pw)
  {
    res.status(400).send('failed login?  try entering stuff')
  }
  model.getPassword(un, pw).then(x=>{
    req.body.hashedPw=x;
    next(req, res)
  })
}



module.exports = {postLogin, postNewUser, getFunds, getUserId,getPassword}
