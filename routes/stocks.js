const express = require('express')
const app = express()
const controller = require('../controller/stocks.js')
const token = require('../controller/tokens.js');

app.get('/watching', token, controller.getWatching)
app.get('/trades', token, controller.getTrades)
app.get('/:stockSymbol', token, controller.getStock)
app.post('/:stockSymbol/trade', token, controller.postTrade)
app.post('/find', controller.finder)

module.exports = app;
