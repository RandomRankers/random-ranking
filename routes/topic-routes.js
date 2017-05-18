var db = require('../models');

module.exports = function(app) {

  app.get("/api/topic", function(req, res) {
    db.Topics.findAll({}).then(function(dbTopics) {
      res.json(dbTopics);
    });
  });


};
