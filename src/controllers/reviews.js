const Review = require('../models/reviews');

// In-memory storage
let reviews = [];
let nextId = 1;

exports.getAllReviews = (req, res) => {
  res.json(reviews);
};

exports.getReview = (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (!review) {
    return res.status(404).json({ message: 'Review not found' });
  }
  res.json(review);
};

exports.createReview = (req, res) => {
  const { title, author, genre, content, rating } = req.body;
  
  if (!title || !author || !genre || !content) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newReview = new Review(nextId++, title, author, genre, content, rating);
  reviews.push(newReview);
  res.status(201).json(newReview);
};

exports.updateReview = (req, res) => {
  const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.id));
  if (reviewIndex === -1) {
    return res.status(404).json({ message: 'Review not found' });
  }

  const { title, author, genre, content, rating } = req.body;
  reviews[reviewIndex] = {
    ...reviews[reviewIndex],
    title: title || reviews[reviewIndex].title,
    author: author || reviews[reviewIndex].author,
    genre: genre || reviews[reviewIndex].genre,
    content: content || reviews[reviewIndex].content,
    rating: rating || reviews[reviewIndex].rating,
    updatedAt: new Date()
  };

  res.json(reviews[reviewIndex]);
};

exports.deleteReview = (req, res) => {
  const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.id));
  if (reviewIndex === -1) {
    return res.status(404).json({ message: 'Review not found' });
  }

  reviews.splice(reviewIndex, 1);
  res.status(204).send();
};