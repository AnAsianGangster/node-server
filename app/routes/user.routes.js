const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function (router) {
    router.use(function (req, res, next) {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });

    router.get('/all/:numberOfBooks', controller.allAccess);

    router.get('/user', [authJwt.verifyToken], controller.userBoard);

    router.get('/userProfile/:reviewerID', [authJwt.verifyToken], controller.userProfile);

    router.get('/mod', [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

    router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
};
