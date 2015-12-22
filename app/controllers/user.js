'use strict';
var userController = {},
	userDao = require('../dao/user'),
	userModel = require('../models/index').user;

userController.list = function (req, res, next) {
	userDao.list(function (err, data) {
		res.json(data);
	});
	// res.send('respond with a resource');
}

userController.get = function (req, res, next) {
	res.send('id : ' + req.params.id);
}

userController.add = function (req, res, next) {
	var user = new userModel({
		username: 'Jarrick' + Math.random() * 1000, name: 'Jarrick', gender: '0', phone: '12345678901',
		address: {city: 'dalian', 'street': 'xigang', test: 'test'}
	});
	user.save(function (data) {
		res.send('add.' + data);
	});
}

userController.delete = function (req, res, next) {
	res.send('delete');
}

userController.update = function (req, res, next) {
	res.send('update');
}

module.exports = userController;