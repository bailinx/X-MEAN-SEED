'use strict';
var base = require('./base'),
	user = require('./mapping').user,
	logger = require('../utils/log').logger;

var userModel = new base( user );

// 扩展方法

module.exports = userModel;
