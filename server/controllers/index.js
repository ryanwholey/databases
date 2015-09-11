var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.messages.get(function(rows){
        res.end(JSON.stringify(rows));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.messages.post(req.body, function(rows){
        console.log(rows);
        res.end(JSON.stringify(rows));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.users.get(function(rows){
        res.end(JSON.stringify(rows));
      });
    },
    post: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.users.post(req.body, function(rows){
        res.end(JSON.stringify(rows));
      });
    }
  }
};

