const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviews');

// Get all reviews
router.get('/', reviewController.getAllReviews);

// Get a specific review
router.get('/:id', reviewController.getReview);

// Create a new review
router.post('/', reviewController.createReview);

// Update a review
router.put('/:id', reviewController.updateReview);

// Delete a review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;