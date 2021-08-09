const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
	app.get("/api/pets", PetController.getAll);
	// create a new pet
	app.post("/api/pets", PetController.create);
	// get a single pet
	app.get("/api/pets/:id", PetController.getOne);
	// update a single pet
	app.put("/api/pets/:id", PetController.update);
	// delete a single pet
	app.delete("/api/pets/:id", PetController.delete);
}