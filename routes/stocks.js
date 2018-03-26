const express = require('express')
const app = express()
const controller = require('.../controller/stocks.js')

app.get('/watching', controller.controllerGetWatching)
app.get('/trades', controller.controllerGetTrades)
app.get('/:stockSymbol', controller.controllerGetStock)

app.post('/:stockSymbol/trade', controller.controllerPostTrade)

modeul.exports = app;
