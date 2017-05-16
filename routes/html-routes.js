var path = require('path');

module.export() = function(app){

	app.get ('/', function(req, res){

		res.sendfile.(path.file(__dirname + '../public/index.js'))
		
	});

	app.get('/ranking', function(req,res){
		res.sendfile(path.file(__dirname + '../public/ranking.js'))
	});

};