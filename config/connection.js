let mysql = require("mysql");
let connection;

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MB@mb20031988",
    database: "burger_db"
});

connection.connect( (err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
})

module.exports = connection;