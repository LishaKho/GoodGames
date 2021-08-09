const Pet = require('../models/pet.model');

module.exports.getAll = (req, res) => {
	console.log("inside get all");

	Pet.find()
		.then((allPets) => {
			console.log(allPets);
			res.json(allPets);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		})
};

module.exports.create = (req, res) => {
	console.log("inside create");
	console.log(req.body);

	Pet.create(req.body)
		.then((newPet) => {
			console.log(newPet);
			res.json(newPet);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

	// get a single pet
module.exports.getOne = (req, res) => {
	console.log("inside getOne");
	console.log("looking for id: " + req.params.id);

	Pet.findById(req.params.id)
		.then((onePet) => {
			console.log(onePet);
			res.json(onePet);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
};

// update a single pet
module.exports.update = (req, res) => {
	console.log("inside update");
	console.log("looking for id: " + req.params.id);
	console.log(req.body);

	Pet.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedPet) => {
			console.log(updatedPet);
			res.json(updatedPet);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}

	// delete a single pet
module.exports.delete = (req, res) => {
	console.log("inside delete");
	console.log("looking for id: " + req.params.id);

	Pet.findByIdAndDelete(req.params.id)
		.then((deletedPet) => {
			console.log(deletedPet);
			res.json(deletedPet);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}