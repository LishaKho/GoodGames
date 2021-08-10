const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A game name is required"],
		minLength: [3, "A game name must be at least 3 characters long"],
    },

    genre: {
        type: String,
        required: [true, "A game genre is required"],
		minLength: [3, "A genre type must be at least 3 characters long"],
    },

    myRating: {
        type: String,
    },

    status: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model("Game", GameSchema);