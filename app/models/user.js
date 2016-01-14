'use strict';
var base = require('./base'),
	userEntity = require('./mapping').user,
	logger = require('../utils/log').logger;

var userModel = new base (userEntity);

// 扩展方法

module.exports = userModel;