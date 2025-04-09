# Book Review Application

## About the App
This is a RESTful API application for managing book reviews. Users can create, read, update, and delete book reviews. Each review contains information about the book including its title, author, genre, review content, and rating. The application features a clean, minimalist interface that makes it easy to manage book reviews with full CRUD (Create, Read, Update, Delete) functionality.

## Features
- Create new book reviews with title, author, genre, content, and rating
- View all existing reviews in a clean, organized layout
- Update review content, ratings, and other details through an inline edit form
- Delete reviews you no longer wish to keep
- Simple in-memory data storage
- Minimalist, responsive design with intuitive user interface

## Project Structure
```
book-review-app/
├── src/
│   ├── index.js           # Application entry point
│   ├── routes/            # Route definitions
│   │   └── reviews.js     # Review routes
│   ├── controllers/       # Route controllers
│   │   └── reviews.js     # Review controllers
│   └── models/           # Data models
│       └── reviews.js     # Review model
├── public/
│   └── index.html        # Frontend interface
└── README.md             # Project documentation
```

## Installation and Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The server will start on `http://localhost:3000`

## API Endpoints
- GET `/api/reviews` - Get all reviews
- GET `/api/reviews/:id` - Get a specific review
- POST `/api/reviews` - Create a new review
- PUT `/api/reviews/:id` - Update a review
- DELETE `/api/reviews/:id` - Delete a review

## Dependencies
- express: Web framework for Node.js
- morgan: HTTP request logger middleware
- body-parser: Request body parsing middleware
- cors: Cross-Origin Resource Sharing middleware
- nodemon: Development dependency for auto-reloading

## Frontend Features
- Responsive design that works on desktop and mobile devices
- Clean, intuitive user interface
- Real-time updates when creating, editing, or deleting reviews
- Form validation for required fields
- Rating system (1-5 stars)
- Inline editing functionality
- Confirmation feedback for user actions

## Links
- GitHub Repository: TODO
- Hosted Application: TODO

## Contributing
Feel free to submit issues and enhancement requests.