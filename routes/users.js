const express = require('express');
const app = express();
const ctrl = require('../controller/users.js');
const token = require('../controller/tokens.js');

app.post('/login', ctrl.getPassword, ctrl.postLogin);
//add a new user TODO: test this
app.post('/newUser', ctrl.postNewUser);
//return the users current funds
app.get('/funds',token, ctrl.getFunds);

module.exports = app;
