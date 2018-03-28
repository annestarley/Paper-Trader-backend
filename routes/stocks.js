const express = require('express')
const app = express()
const controller = require('../controller/stocks.js')
const token = require('../controller/tokens.js');

app.get('/watching', token, controller.GetWatching)
app.get('/trades', token, controller.GetTrades)
app.get('/:stockSymbol', token, controller.GetStock)
app.post('/:stockSymbol/trade', token, controller.PostTrade)

module.exports = app;
