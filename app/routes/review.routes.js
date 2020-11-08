module.exports = (app) => {
    const reviews = require('../controllers/reivew.controller.js');

    var router = require('express').Router();

    // Create a new review
    router.post('/', reviews.createReview);

    // Retrieve a single review with id
    router.get('/:reviewId', reviews.findReviewById);

    // Create a new review
    router.post('/comments', reviews.createComment);

    // Retrieve all Tutorials
    router.get('/commemts', reviews.findAll);

    // Retrieve a single comment with id
    router.get('/comments/:id', reviews.findCommentById);

    app.use('/api/reviews', router);
};
