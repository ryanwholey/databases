var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.db.sync().then(function(){
        return models.messages.findAll({include: models.users});
      }).then(function(messages){
        res.end(JSON.stringify(messages));
      })
      // models.messages.get(function(rows){
      //   res.end(JSON.stringify(rows));
      // });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.db.sync().then(function(){
        return models.messages.create({
          UserId: req.body.UserId,
          body: req.body.body,
          roomname: req.body.roomname
        })
      }).then(function(messages){
        res.end(JSON.stringify(messages))
      });

      // models.messages.post(req.body, function(rows){

      //   res.end(JSON.stringify(rows));
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
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

