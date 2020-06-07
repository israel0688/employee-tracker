const mysql = require('mysql2');

// Connect to database
const db = new mysql.Database('./db/tracker.db', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the election database.');
});

module.exports = db;