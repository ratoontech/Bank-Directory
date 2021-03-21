//importing express
const Express = require('express');

//initializing server
const app = Express();

//default route
app.get('/', (req, res) => {
    //res.send('Hey, This is Bank Directory API...');
    res.sendFile(__dirname + '/view/search.html');
});

//importing search endpoint
const searchEndpoint = require('./routes/search');

//setting search route
app.use('/search', searchEndpoint);

//app listening
app.listen(process.env.PORT || 3000);