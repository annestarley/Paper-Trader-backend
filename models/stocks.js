const env = 'development';
const config = require('../knexfile')[env]
const knex = require('knex')(config)

const getWatching = (userID) => {
  return knex('watchedsymbol')
.where('uid',userID)
}

const getTrades = (userID) => {
  return knex('trades')
  .where('uid',userID);
}

const getStocks = (stockSymbol, id) => {
  knex('trades')
    .where({symbol: stockSymbol, uid: id})
}

const postTrade = (userID,_symbol,_amount,_value, res) =>{
  knex('users')
  .select('funds')
  .where({id:userID})
  .first()
  .then(result=>{
    console.log('result');
    console.log(result);
    let change = _amount*_value;
    if(result.funds-change>0)
    {

      amtToMod = result.funds;
      knex('trades')
      .insert({
        uid:userID,
        symbol:_symbol,
        amount:_amount,
        value:_value
        //,tradeTime:'NOW()'
      })
      .then(results=>{
        console.log('change')
        console.log(change)
        knex('users')
        .first()
        .where({id:userID})
        .update({funds:result.funds-change})
        .then(results=>{
          res.status(200).send(results+'');
        })

      })
    }
    else {
      return res.status(401).send('insufficient funds');
    }
  })
}

module.exports = {
  getWatching,
  getTrades,
  getStocks,
  postTrade
}
