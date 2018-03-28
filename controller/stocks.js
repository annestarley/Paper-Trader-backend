const model = require('../models/stocks.js');
const axios = require('axios');

//GET
const getWatching = (req, res) => {
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

const getTrades = (req, res) => {
//get the history for all trades for a particular user
  model.getTrades(req.body.uid)
  .then(x=>{
    return res.status(200).send(x)
  })
  .catch(x=>{

  })
}

const getStock = (req, res) => {
//or maybe this was it...
model.getStocks(req.params.stockSymbol, req.body.uid)
  .then(x=>{
    return res.status(200).send(x)
  })
  .catch(x=>{

  })
}

//POST
const postTrade = (req, res) => {
  model.postTrade = (req.body.uid, req.params.stockSymbol, req.body.amount, req.body.price, res);
}

//no error checking, please dont pass me something with spaces.
const finder = (req, res) => {
  axios.get('http://autoc.finance.yahoo.com/autoc?query='+req.body.symbol+'&region=1&lang=en')
  .then(x=>{return res.status(200).send(x)})
}

module.exports = {
  getWatching,
  getTrades,
  getStock,
  postTrade,
  finder
}
