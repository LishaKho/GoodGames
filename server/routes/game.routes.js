const GameController = require('../controllers/game.controller');

module.exports = (app) => {
	app.get("/api/games", GameController.getAll);
	// create a new game
	app.post("/api/games", GameController.create);
	// get a single game
	app.get("/api/games/:id", GameController.getOne);
	// update a single game
	app.put("/api/games/:id", GameController.update);
	// delete a single game
	app.delete("/api/games/:id", GameController.delete);
}