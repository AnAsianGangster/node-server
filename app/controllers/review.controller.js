const db = require('../models/index');
const Review = db.reviews;

// create a new review
exports.createReview = (req, res) => {
    // Validate request
    if (!req.body.userId) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a review
    const review = {
        userId: req.body.userId,
        name: req.body.name,
        text: req.body.text,
        bookId: req.body.bookId,
    };

    // Save book in the database
    Review.create(review)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the book.',
            });
        });
};

// get review for review id
exports.findReviewById = (req, res) => {
    const id = req.params.id;

    Review.findByPk(id, { include: ['book'] })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the book.',
            });
        });
};

// all reviews
exports.findAllReviews = (req, res) => {
    Review.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while finding all reviews',
            });
        });
};
