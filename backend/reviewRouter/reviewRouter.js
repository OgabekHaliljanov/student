const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// Fetch all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Submit a new review
router.post('/reviews', async (req, res) => {
  try {
    const review = new Review({ content: req.body.content, author: req.body.author });
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: 'Error submitting review' });
  }
});

module.exports = router;
