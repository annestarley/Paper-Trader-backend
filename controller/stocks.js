const model = require('../models/stocks.js')

//GET
const GetWatching = (req, res) => {
//verify if still logged in
//pull from the database everything that this person is watching
//return it
  model.getWatching(req.body.uid)
  .then(x=>{
    return res.status(200).send()
  })
  .catch(x=>{

  })
}

const GetTrades = (req, res) => {
//get the history for all trades for a particular user
  model.getTrades(req.body.uid)
  .then(x=>{
    return res.status(200).send(x)
  })
  .catch(x=>{

  })
}

const GetStock = (req, res) => {
//or maybe this was it...
model.getStocks(req.params.stockSymbol, req.body.uid)
  .then(x=>{
    return res.status(200).send(x)
  })
  .catch(x=>{

  })
}

//POST
const PostTrade = (req, res) => {
  model.postTrade = (req.body.uid, req.params.stockSymbol, req.body.amount, req.body.price, res);
}

module.exports = {
  GetWatching,
  GetTrades,
  GetStock,
  PostTrade
}
