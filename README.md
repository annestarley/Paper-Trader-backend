# Paper-Trader-backend

routes

returns all symbols that the user is watching
app.get('/watching', token, controller.getWatching)

returns all trades for a given user
app.get('/trades', token, controller.getTrades)

returns all trades for a given stock for a given user
app.get('/:stockSymbol', token, controller.getStock)

trades for a specific user
app.post('/:stockSymbol/trade', token, controller.postTrade)

returns the yahoo search for name results... may break if it has spaces
app.post('/find', controller.finder)


takes username and password and returns a token
app.post('/login', ctrl.getPassword, ctrl.postLogin);


//add a new user, takes name, password and email
app.post('/newUser', ctrl.postNewUser);


//return the users current funds
app.get('/funds',token, ctrl.getFunds);
