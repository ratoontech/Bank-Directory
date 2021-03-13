//import db search with condition function
const { getMatchingRows } = require('../db/functions/db-banks');

//fetch bank details for ifsc
const searchIFSC = (IFSC) => {
    return getMatchingRows({ IFSC }).then((data) => {
        return data;
    });
};

//exporting module
module.exports = searchIFSC;