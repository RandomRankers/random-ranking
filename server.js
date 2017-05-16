var express = require("express");
var db = require("./models");

var PORT = process.env.NODE_ENV || 3000;
var app = express();

db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("listening on port " + PORT);
	});
});