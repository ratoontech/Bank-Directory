//import db search with condition function
const { getMatchingRows } = require('../db/functions/db-banks');

//fetch bank details for micr
const searchMICR = (MICRCODE) => {
    return getMatchingRows({ MICRCODE }).then((data) => data);
};

//exporting module
module.exports = searchMICR;