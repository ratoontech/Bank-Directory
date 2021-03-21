//import db search with bankname as keyword
const { searchRecord } = require('../db/functions/db-banks');

//fetch bank details for given fields like bankname, branch, city etc...
const searchByField = (field, keyword) => {
    return searchRecord(field, keyword).then((data) => data);
};

//exporting module
module.exports = searchByField;