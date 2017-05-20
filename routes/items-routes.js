var db = require("../models/");

module.exports = function(app) {

  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.post("/api/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });



  app.post("/:id", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      // res.json(dbItem);
      res.redirect('/');
    });
  });


  app.get('/:id', function(req, res) {
    res.send(req.params.ids)
   });


<<<<<<< HEAD
  app.put('/api/items/increment/:id/:score', function(req,res){

    console.log(req.params.id)

  	// db.Item.findOne({
   //  where: {
   //      id: req.params.id
   //    }
   //  }).then(function(dbItem) {

    // res.json(dbItem);

    db.Item.findById(parseInt(req.params.id, 0)).then( Item => {
        return Item.increment('score', {by: 1})
      }).then(function(dbItem){
        res.json(dbItem);
      });

  });
=======
>>>>>>> c90a54455ade78cf4087b69744904ec380c0a996

  app.put('/api/items', function(req,res){

<<<<<<< HEAD
     console.log(req.params.id)

    // db.Item.findById({
    //     where: {
    //         id: req.params.id
    //       }
    //     }).then(function(dbItem) {

    //     res.json(dbItem);

    db.Item.findById(parseInt(req.params.id, 0)).then( Item => {
        return Item.decrement('score', {by: 1})
      }).then(function(dbItem){
      	res.json(dbItem);
      });
    });
=======
    db.Item.update({
        score: req.params.score-1
      },{
        where: {
            id: req.params.id
          }
        }).then(function(dbItem) {
res.json(dbItem)
    });
});

  app.put('/api/items', function(req,res){

    db.Item.update({
        score: req.params.score-1
      },{
        where: {
            id: req.params.id
          }
        }).then(function(dbItem) {
res.json(dbItem)
    });
});

>>>>>>> c90a54455ade78cf4087b69744904ec380c0a996

}
