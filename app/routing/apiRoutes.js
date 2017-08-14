var friends = require("../data/friends.js");

module.exports = function(app) {
	console.log(friends);
	app.get("/api/friends", function(req, res) {
		console.log(req);
		console.log(res);
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		console.log("post request: " + friends);
		var newUser = req.body;
		
		friends.push(newUser);
		res.json(newUser);
	});
}