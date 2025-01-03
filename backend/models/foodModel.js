// models/foodModel.js
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,  // The URL of the image for the food item
    required: true
  }
});

module.exports = mongoose.model("Food", foodSchema);
