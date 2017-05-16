var path = require('path');

module.exports = function(app){

	app.get ('/', function(req, res){

		res.sendfile(path.file(__dirname + '../public/js/index.js'))
		
	});

	app.get('/ranking', function(req,res){
		res.sendfile(path.file(__dirname + '../public/js/ranking.js'))
	});

};