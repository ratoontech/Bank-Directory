//import db search with bankname as keyword
const { searchRecord } = require('../db/functions/db-banks')

//fetch bank details for given bankname
const searchBanks = (keyword) => {
    return searchRecord("BANK",keyword).then((data) => {
        return data;
    });
};

//exporting module
module.exports = searchBanks