var db = require('../models');

module.exports = function(app) {

  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });


  app.put('/api/items/:id/:score'), function(req,res){
  	
    db.Item.findById({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });

    db.Item.findById({
      where:{
        id:req.params.id
        }
      }).then( Item => {
      return Item.increment('score', {by: 1})
    }).then(function(dbItem){
      res.json(dbItem);
    });


    db.Item.findById({
      where:{
        id:req.params.id
        }
      }).then( Item => {
      return Item.decrement('score', {by: 1})
    }).then(function(dbItem){
      res.json(dbItem);
      });
    };


  };

  


  
