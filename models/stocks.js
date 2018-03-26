const config = require('../knexfile')[env]
const knex = require('knex')(config)

const modelGetWatching = () => {

}

const modelGetTrades = (res) => {
  knex('trades')
    .then(result => {
      res.status(200).send(results)
    })
}

const modelGetStocks = (stockSymbol, res) => {
  knex('trades')
    .where({symbol: stockSymbol})
}

const modelPostTrade = () => {

}

module.exports = {
  modelGetWatching,
  modelGetTrades,
  modelGetStocks,
  modelPostTrade
}
