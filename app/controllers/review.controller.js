const db = require('../models');
const Review = db.reviews;
const Comment = db.comments;

// create a new review
exports.createReview = (review) => {
    return Review.create({
        productId: review.productId,
        title: review.title,
        price: review.price,
        brand: review.brand,
        imgUrl: review.imgUrl,
        description: review.description,
    })
        .then((review) => {
            console.log('>> Created review: ' + JSON.stringify(review, null, 4));
            return review;
        })
        .catch((err) => {
            console.log('>> Error while creating review: ', err);
        });
};

// create new comments
exports.createComment = (reviewId, comment) => {
    return Comment.create({
        userId: comment.userId,
        name: comment.name,
        text: comment.text,
        reviewId: reviewId,
    })
        .then((comment) => {
            console.log('>> Created comment: ' + JSON.stringify(comment, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log('>> Error while creating comment: ', err);
        });
};

// get comments for a given review
exports.findReviewById = (reviewId) => {
    return Review.findByPk(reviewId, { include: ['comments'] })
        .then((review) => {
            return review;
        })
        .catch((err) => {
            console.log('>> Error while finding review: ', err);
        });
};

// get comment for comment id
exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ['review'] })
        .then((comment) => {
            return comment;
        })
        .catch((err) => {
            console.log('>> Error while finding comment: ', err);
        });
};

// all review with comments
exports.findAll = () => {
    return Review.findAll({
        include: ['comments'],
    }).then((reviews) => {
        return reviews;
    });
};
