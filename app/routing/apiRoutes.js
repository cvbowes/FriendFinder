var friends = require("../data/friends.js");

module.exports = function(app) {
	console.log(friends);
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var newUser = req.body;
		res.json(match(newUser));

		friends.push(newUser);
	});
}

function match(user) {
	//to contain differences in answers, indices will match with indices of friends array
	var diffs =[];

	for (var i = 0; i < friends.length; i++) {
		var current = friends[i].scores;
		var diff = 0;
		for (var j = 0; j < current.length; j++) {
			diff += Math.abs(current[j] - user.scores[j]);
			console.log(diff);
		}

		diffs.push(diff);
	}

	console.log(diffs);
	console.log("smallest diff: " + Math.min.apply(null, diffs));
	console.log("index: " + diffs.indexOf( Math.min.apply(null, diffs)));
	console.log("Friend: " + friends[diffs.indexOf( Math.min.apply(null, diffs))]);

	var smallest = Math.min.apply(null, diffs);
	var smIndex = diffs.indexOf(smallest);
	var friend = friends[smIndex];

	return friend;

}