const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  film_cast: {
    type: Array,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const movies = new mongoose.model("movies", Movie);
module.exports = movies;
