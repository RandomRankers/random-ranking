var db = require("../models");

module.exports = function(app) {

  app.get("/api/items", function(req, res) {
    db.Items.findAll({}).then(function(dbItems) {
      res.json(dbItems);
    });
  });


  app.put('/api/items/:id/:score'), function(req,res){
  	db.Items.findOne({
    where: {
        id: req.params.id
      }
    }).then(function(dbItems) {

      res.json(dbItems);

    });
  }

  Items.findById(req.params.id).then( Items => {
	  return Items.increment('score', {by: 1})
	}).then(function(dbItems){
		res.json(dbItems);
	  });
	}

  Items.findById(req.params.id).then( Items => {
	  return Items.decrement('score', {by: 1})
	}).then(function(dbItems){
		res.json(dbItems);
	  });
	}
	
};
