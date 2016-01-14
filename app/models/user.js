'use strict';
var userModel = require('../models/mapping').user,
	logger = require('../utils/log').logger;

var userDao = function (user) {
	this.user = user || {};
};

userDao.create = function (callback) {
	var userEntity = new userModel(this.user);
	userEntity.save(function (err, data) {
		if (err) {
			logger.error(err);
		}
		callback(data);
	})
};

userDao.list = function (callback) {
	userModel.find({}, function (err, data) {
		if (err) {
			return callback(err, null);
		}
		return callback(null, data);
	})
};

module.exports = userDao;