class Review {
  constructor(id, title, author, genre, content, rating = 0) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.content = content;
    this.rating = rating;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Review;