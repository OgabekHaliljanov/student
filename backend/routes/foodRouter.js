// routes/foodRouter.js
const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController"); // Import the controller

// Get all foods
router.get("/foods", foodController.getAllFoods);

// Create a new food
router.post("/foods", foodController.createFood);

// Update an existing food by ID
router.put("/foods/:id", foodController.updateFood);

// Delete a food by ID
router.delete("/foods/:id", foodController.deleteFood);

module.exports = router;
