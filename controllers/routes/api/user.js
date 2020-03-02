const router = require('express').Router();
const userController = require('../../controllers/userController');
const reviewController = require('../../controllers/reviewController');
// Matches with "/api/user/signup"
router.route('/signup').post(userController.create);

// Matches with "/api/user/signout"
router.route('/signout').get(userController.signout);

// finds user information by Id, matches "api/user/info"
router.route('/info').get(userController.findUserById);

// Matches with "/api/user/authenticate"
router.route('/authenticate').post(userController.authenticate);

// Matches with "/api/user"
router.route('/').post(userController.login);

// Matches with '/api/user/update'
router.route('/update').put(userController.update);

// Matches with '/api/user/findAllUsers'
router.route('/findAllUsers').get(userController.findAllUsers);

// Matches with '/api/user/findMonthlyUsers'
router.route('/findMonthlyUsers').get(userController.findMonthlyUsers);

// Matches with '/api/user/findPickUps'
router.route('/findPickUps').get(userController.findPickUps);


// Matches with '/api/user/viewCustomerInfo/:id'
router.route('/viewCustomerInfo/:id').get(userController.adminFindUserById);
    // .put()
    // .delete();

// TO-DO: logout route (delete cookie and session - req.session.destroy)
module.exports = router;
