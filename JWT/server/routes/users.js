var express = require('express');
var router = express.Router();

//Controllers
var userController = require('./../controllers/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', userController.create);
router.post('/logIn', userController.login);

module.exports = router;
