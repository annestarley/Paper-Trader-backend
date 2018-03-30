const env = 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const bcrypt = require('bcryptjs');
const saltRounds = 5;
hash('password', saltRounds);

function hash(password, saltRounds) {
  return bcrypt.hashSync(password, saltRounds, function(err, hash) {
    return hash;
  });
}

function compare(plainTextPassword, digest) {
  return bcrypt.compareSync(plainTextPassword, digest)
}

const addNewUser = (un, pw, em)=>{
  if(!un || !pw || !em)
  {
    return false;
  }
  return knex('users')
  .insert({username: un, password: hash(pw, saltRounds), email: em, funds: 50000});
}

const getPassword = (un, password)=> {
  return knex('users')
    .select('password')
    .first()
    .where({username:un})
  }

const getUserID = (un)=>{
  return knex('users')
    .select('id')
    .first()
    .where({username:un})
}

const verifyPassword = (passwordRaw, passwordHash) => {
  if(passwordHash===undefined)
  {
    //console.log('no results from query');
    return false;
  }
  else {
    let bcryptResults = false;
    bcryptResults = bcrypt.compareSync(passwordRaw, passwordHash, function(err, res) {
    });
    return bcryptResults;
  }
  //console.log(typeof(bcrypt.hashSync('test')))
}

getFunds=(uid)=>{
  return knex('users')
    .select('funds')
    .first()
    .where({id:uid})
}


module.exports = {addNewUser, getPassword, verifyPassword, getUserID,getFunds}
