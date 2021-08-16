const GameController = require('../controllers/game.controller');
const multer = require('multer')

let multerStorage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: ( req, file, cb )=> {
        cb( null, file.originalname);
    }
})
const upload = multer({
    storage: multerStorage,
})

module.exports = (app) => {
	app.get("/api/games", GameController.getAll);
	// create a new game
	app.post("/api/games", upload.any(), GameController.create);
	// get a single game
	app.get("/api/games/:id", GameController.getOne);
	// update a single game
	app.put("/api/games/:id", upload.any(), GameController.update);
	// delete a single game
	app.delete("/api/games/:id", GameController.delete);
}