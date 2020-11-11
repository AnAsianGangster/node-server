module.exports = (router) => {
    const reviews = require('../controllers/review.controller.js');

    // Create a new review
    router.post('/reviews', reviews.createReview);

    // Retrieve all reviews
    router.get('/reviews', reviews.findAllReviews);

    // Retrieve a single review with id
    router.get('/reviews/:id', reviews.findReviewById);
};
