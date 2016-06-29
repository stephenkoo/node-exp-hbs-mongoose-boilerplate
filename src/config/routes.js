var express         = require('express');
var router          = express.Router();
var bodyParser      = require('body-parser');
var usersController = require('../controllers/usersController');

router.route('/users')
  .get(usersController.getAll)
  .post(usersController.createUser);

router.route('/users/new')
  .get(usersController.newUser);

router.route('/users/:id')
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .put(usersController.updateUser)
  .delete(usersController.removeUser);

router.route('/users/:id/edit')
  .get(usersController.editUser);

module.exports      = router;