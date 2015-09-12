var Sequelize = require('sequelize');
var db = require('../db');

module.exports = {
  // messages: {
  //   get: function (cb) {
  //     db.query('SELECT * FROM messages', function(err, rows){
  //       if(err){console.error(err); }
  //       cb(rows);
  //     });
  //   }, // a function which produces all the messages
  //   post: function (message, cb) {
  //     db.query('INSERT INTO messages (body, username, roomname) VALUES ("' + message.body + '","' + message.username + '","' + message.roomname +'");', function(err, rows){
  //       if(err){console.error(err); }
  //       cb(rows);
  //     });
  //   } // a function which can be used to insert a message into the database
  // },

  messages: db.define('Message',{
    body: Sequelize.STRING,
    username: Sequelize.STRING,
    roomname: Sequelize.STRING
  }, {timestamps: false}),

  users: db.define('User', {
    name: Sequelize.STRING
  }, {timestamps: false}),

  db: db
  // users: {
    // Ditto as above.
  //   get: function (cb) {
  //     db.query('SELECT * FROM users', function(err, rows){
  //       if(err){console.error(err); }
  //       cb(rows);
  //     });
  //   },
  //   post: function (user, cb) {
  //     db.query('INSERT INTO users (name) VALUES ("' + user.name + '");', function(err, rows){
  //       if(err){console.error(err); }
  //       cb(rows);
  //     });
  //   }
  // }
};

