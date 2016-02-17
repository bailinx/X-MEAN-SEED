var express = require('express'),
	router = express.Router(),
	idxController = require('../controllers/index');

/* GET home page. */
router.get('/index', idxController.index);

module.exports = router;
