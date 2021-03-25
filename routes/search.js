//initializing express router for serving as endpoint
const searchEndpoint = require('express').Router();

//import search banks function
const searchByField = require('../logic/search-record');

//default search endpoint
searchEndpoint.get('/', (req, res) => {
    
    //getting query params
    const bank = req.query.bank;
    const _branch = req.query.branch;

    //handling no query param
    if(bank && _branch) {
        searchByField('BANK', bank).then(
            (banks) => res.send(banks.filter((branch) => branch.BRANCH.includes(_branch.toUpperCase())))
        );
    }
    else {
        res.status(400).send('Bad Request: Query parameters are mandatory - bank(bank name) and branch(branch name)');
    }
});

//import search ifsc function
const searchIFSC = require('../logic/search-ifsc');

//Handle ifsc path param error
searchEndpoint.get('/ifsc', (req, res) => {
    res.status(400).send('Bad Request: IFSC code is missing in the URL. Please try again by passing IFSC code in url.');
});

//search bank details with path param ifsc
searchEndpoint.get('/ifsc/:ifsc', (req, res) => {
    searchIFSC(req.params.ifsc).then((result) => {
        res.send(result);
    });
});

//import search micr function
const searchMICR = require('../logic/search-micr');

//Handle micr path param error
searchEndpoint.get('/micr', (req, res) => {
    res.status(400).send('Bad Request: MICR code is missing in the URL. Please try again by passing MICR code in url.');
});

//search bank details with path param micr
searchEndpoint.get('/micr/:micr', (req, res) => {
    searchMICR(Number(req.params.micr)).then((result) => res.send(result));
});

//Handle bank name path param error
searchEndpoint.get('/bank', (req, res) => {
    res.status(400).send('Bad Request: Bank name is missing in the URL. Please try again by passing bank name in url.');
});

//search bank details with path param bank name
searchEndpoint.get('/bank/:bank', (req, res) => {
    searchByField('BANK', req.params.bank).then((result) => res.send(result));
});

//Handle branch name path param error
searchEndpoint.get('/branch', (req, res) => {
    res.status(400).send('Bad Request: Branch name is missing in the URL. Please try again by passing branch name in url.');
});

//search bank details with path param branch name
searchEndpoint.get('/branch/:branch', (req, res) => {
    searchByField('BRANCH', req.params.branch).then((result) => res.send(result));
});

//Handle state name path param error
searchEndpoint.get('/state', (req, res) => {
    res.status(400).send('Bad Request: State name is missing in the URL. Please try again by passing state name in url.');
});

//search bank details with path param state name
searchEndpoint.get('/state/:state', (req, res) => {
    searchByField('STATE', req.params.state).then((result) => res.send(result));
});

//Handle district name path param error
searchEndpoint.get('/district', (req, res) => {
    res.status(400).send('Bad Request: District name is missing in the URL. Please try again by passing district name in url.');
});

//search bank details with path param district name
searchEndpoint.get('/district/:district', (req, res) => {
    searchByField('DISTRICT', req.params.district).then((result) => res.send(result));
});

//Handle city name path param error
searchEndpoint.get('/city', (req, res) => {
    res.status(400).send('Bad Request: City name is missing in the URL. Please try again by passing city name in url.');
});

//search bank details with path param city name
searchEndpoint.get('/city/:city', (req, res) => {
    searchByField('CITY', req.params.city).then((result) => res.send(result));
});

//exporting module
module.exports = searchEndpoint;
