//initializing express router for serving as endpoint
const searchEndpoint = require('express').Router();

//default search endpoint
searchEndpoint.get('/', (req, res) => {
    res.send("IFSC code to search is missing...")
});

//import search ifsc function
const searchIFSC = require('../logic/search-ifsc');

//search ifsc with path param endpoint
searchEndpoint.get('/ifsc/:ifsc', (req, res) => {
    searchIFSC(req.params.ifsc).then((result) => {
        res.send(result);
    });
});

//import search micr function
const searchMICR = require('../logic/search-micr');

//search micr with path param endpoint
searchEndpoint.get('/micr/:micr',(req,res) => {
    searchMICR(Number(req.params.micr)).then((result) => {
        return res.send(result);
    });
});

//import search banks function
const searchBank = require('../logic/search-record')

//search bankname with path param endpoint
searchEndpoint.get('/banks/:bank', (req,res) => {
    searchBank(req.params.bank).then((result) => {
        return res.send(result);
    });
});

//exporting module
module.exports = searchEndpoint;