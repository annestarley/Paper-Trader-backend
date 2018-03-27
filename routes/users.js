const express = require('express');
const app = express();
const ctrl = require('../controller/users.js')

app.post('/login', ctrl.getPassword);
//add a new user TODO: test this
app.post('/newUser', ctrl.controllerPostNewUser);
//return the users current funds
app.get('/funds',ctrl.controllerGetFunds);
app.get('/logoff',ctrl.controllerGetLogoff);

module.exports = app;
