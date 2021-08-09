const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A pet name is required"],
		minLength: [3, "A pet name must be at least 3 characters long"],
    },

    type: {
        type: String,
        required: [true, "A pet type is required"],
		minLength: [3, "A pet type must be at least 3 characters long"],
    },

    description: {
        type: String,
        required: [true, "A pet description is required"],
		minLength: [3, "A pet description must be at least 3 characters long"],
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model("Pet", PetSchema);