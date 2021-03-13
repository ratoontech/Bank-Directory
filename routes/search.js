//initializing express router for serving as endpoint
const searchEndpoint = require('express').Router();

//default search endpoint
searchEndpoint.get('/', (req, res) => {
    res.send("IFSC code to search is missing...")
});

//import search ifsc function
const searchIFSC = require('../logic/search-ifsc');

//search ifsc with path param endpoint
searchEndpoint.get('/:ifsc', (req, res) => {
    return searchIFSC(req.params.ifsc).then((result) => {
        res.send(result);
    });
});

//exporting module
module.exports = searchEndpoint;