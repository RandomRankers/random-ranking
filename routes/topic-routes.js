var db = require("../models");

module.exports = function(app) {

	app.get("/api/topics", function(req, res) {
    db.Topics.findAll({}).then(function(dbTopics) {
      res.json(dbTopics);
    });
  });

};
