module.exports = (app) => {
    const router = require('express').Router();

    // book routes
    require('./book.routes')(router);

    // review routes
    require('./review.routes')(router);

    // root routes
    app.use('/api', router);
};
