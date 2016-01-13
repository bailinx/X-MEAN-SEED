var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
/* GET users listing. */
router.get('/list', userController.list);
router.get('/:id', userController.get);

router.delete('/:id', userController.delete);

router.post('/register', userController.add);
router.post('/login', userController.login);

router.put('/update', userController.update);

module.exports = router;
