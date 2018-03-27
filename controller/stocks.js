const model = require('../models/stocks.js')

//GET
const controllerGetWatching = (req, res) => {
//verify if still logged in
//pull from the database everything that this person is watching
//return it

}

const controllerGetTrades = (req, res) => {
//get the history for all trades for a particular user

}

const controllerGetStock = (req, res) => {
//or maybe this was it...

}

//POST
const controllerPostTrade = (req, res) => {

}

module.exports = {
  controllerGetWatching,
  controllerGetTrades,
  controllerGetStock,
  controllerPostTrade
}
