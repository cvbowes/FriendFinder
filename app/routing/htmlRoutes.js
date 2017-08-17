var express = require("express");
var path = require("path");

module.exports = function(app) {
	app.use(express.static(path.join(__dirname, '../public')));
	
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});


	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	

}