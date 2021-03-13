//importing electron db
const db = require('electron-db');

//db config
const config = {
    db: 'DB_Banks',
    path: '.\\db\\data\\'
};

//function to get matching rows with a condition
const getMatchingRows = (condition) => {
    return new Promise((resolve, reject) => {
        db.getRows(config.db, config.path, condition, (success, data) => resolve(data)); 
    });
};

module.exports = { getMatchingRows };