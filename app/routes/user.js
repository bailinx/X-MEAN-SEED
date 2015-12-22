var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
/* GET users listing. */
router.get('/', userController.list);
router.get('/:id', userController.get);
router.delete('/:id', userController.delete);
router.post('/', userController.add);
router.put('/', userController.update);

module.exports = router;
