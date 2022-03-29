const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ranjithajith",
    database:"ukraine-supplies"
})

module.exports = db;