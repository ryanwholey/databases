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
      models.db.sync().then(function(){
        return models.messages.findAll();
      }).then(function(data){
        res.end(JSON.stringify(data));
      })
      // models.messages.get(function(rows){
      //   res.end(JSON.stringify(rows));
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.db.sync().then(function(){
        return models.messages.create({
          username: req.body.username,
          body: req.body.body,
          roomname: req.body.roomname
        })
      }).then(function(data){
        res.end(JSON.stringify(data))
      });

      // models.messages.post(req.body, function(rows){

      //   res.end(JSON.stringify(rows));
      // });
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
      models.db.sync().then(function(){
        return models.users.findAll();
      }).then(function(users){
        res.end(JSON.stringify(users))
      });

      // models.users.get(function(rows){
      //   res.end(JSON.stringify(rows));
      // });
    },
    post: function (req, res) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Content-Type': 'application/json'
      });
      models.db.sync().then(function(){
        return models.users.create({
          name: req.body.name
        })
      }).then(function(users){
        res.send(JSON.stringify(users))
      });

      // models.users.post(req.body, function(rows){
      //   res.end(JSON.stringify(rows));
      // });
    }
  }
};

