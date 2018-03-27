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

const addNewUser = (un, pw)=>{
  return knex('users')
  .insert({username: un, password: pw});
}

const getPassword = (username, password)=> {
  return knex('users')
    .select('password')
    .first()
    .where({username:username})
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


module.exports = {addNewUser, getPassword, verifyPassword}
