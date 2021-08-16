const Game = require('../models/game.model');

module.exports.getAll = (req, res) => {
	console.log("inside get all");

	Game.find()
		.then((allGames) => {
			console.log(allGames);
			res.json(allGames);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

module.exports.create = (req, res) => {
	console.log("inside create");
	console.log(req.body);
	
	let data = {...req.body}
	// handle file pathname
	let imagePath = ""
	const files = req.files
	if(files.length > 0){
		console.log(files[0].size)
		console.log(files[0].path) 
		imagePath = files[0].path.replace("public/", "") // remove the "public/" to get the correct path showing

	}
	
	data.images = imagePath
	Game.create(data)
		.then((newGame) => {
			console.log(newGame);
			res.json(newGame);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

	// get a single game
module.exports.getOne = (req, res) => {
	console.log("inside getOne");
	console.log("looking for id: " + req.params.id);

	Game.findById(req.params.id)
		.then((oneGame) => {
			console.log(oneGame);
			res.json(oneGame);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

// update a single game
module.exports.update = (req, res) => {
	console.log("inside update");
	console.log("looking for id: " + req.params.id);
	console.log(req.body);

	let data = {...req.body}
	// handle file pathname
	let imagePath = ""
	const files = req.files
	if(files.length > 0){
		console.log(files[0].size)
		console.log(files[0].path) 
		imagePath = files[0].path.replace("public/", "") // remove the "public/" to get the correct path showing
	}
	
	data.images = imagePath
	Game.findByIdAndUpdate(req.params.id, data, {
		new: true,
		runValidators: true,
	})
		.then((updatedGame) => {
			console.log(updatedGame);
			res.json(updatedGame);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}

	// delete a single game
module.exports.delete = (req, res) => {
	console.log("inside delete");
	console.log("looking for id: " + req.params.id);

	Game.findByIdAndDelete(req.params.id)
		.then((deletedGame) => {
			console.log(deletedGame);
			res.json(deletedGame);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}