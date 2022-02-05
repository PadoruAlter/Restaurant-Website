var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'my_database'
});
module.exports = connection;