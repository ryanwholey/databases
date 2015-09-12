var controllers = require('./controllers');
var router = require('express').Router();
var models = require('./models');
for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

router.options('/*', function(req, res) {
  res.end();
});

router.get('/users/:username', function(req,res){
  models.users.find({
    where: {
      name: req.params.username
    }
  }).then(function(user){
    if(user){
      res.send(JSON.stringify(user));
    }else{
      return models.users.create({
        name: req.params.username
      });
    }
  }).then(function(user){
    res.send(JSON.stringify(user));
  });
});

module.exports = router;

