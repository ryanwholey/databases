// var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var sequelize = new Sequelize('chat','root','');

module.exports = sequelize; 

// var connection = mysql.createConnection({
//   'host': 'localhost',
//   'user': 'root',
//   'password': '',
//   'database': 'chat'
// });

// connection.connect();

// module.exports = connection;