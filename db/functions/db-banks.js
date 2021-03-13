//importing electron db
const db = require('electron-db');

//function to get matching rows with a condition
const getMatchingRows = (condition) => {
    return new Promise((resolve, reject) => {
        db.getRows('DB_Banks', '.\\db\\data\\', condition, (success, data) => resolve(data)); 
    });
};

module.exports = { getMatchingRows };