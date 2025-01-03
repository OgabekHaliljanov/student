const Food = require("../models/foodModel");


// Get all foods
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json({ success: true, data: foods });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch foods" });
  }
};

// Create a new food
exports.createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.json({ success: true, data: food });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to create food" });
  }
};

// Update an existing food
exports.updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
    res.json({ success: true, data: updatedFood });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to update food" });
  }
};

// Delete a food
exports.deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
    res.json({ success: true, message: "Food deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to delete food" });
  }
};
