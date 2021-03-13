//importing express
const Express = require('express');

//initializing server
const app = Express();

//default route
app.get('/', (req, res) => {
    res.send('Hey, This is Bank Directory API...');
});

//importing search endpoint
const searchEndpoint = require('./routes/search');

//setting search route
app.use('/search', searchEndpoint);

//app listening
app.listen(3000);