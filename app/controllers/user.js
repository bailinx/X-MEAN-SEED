'use strict';
var userController = {},
	userModel = require('../models/mapping').user,
    crypto = require('../utils/crypto');

userController.list = function (req, res, next) {
	userModel.find({}, function (err, data) {
		res.json(data);
	});
	// res.send('respond with a resource');
}

userController.get = function (req, res, next) {
	res.send('id : ' + req.params.id);
}

userController.register = function (req, res, next) {
	var user = {
		username: 'radishj' + Math.floor(Math.random()*100) + '@qq.com',
		password: '111'
	};
	user.create(user, function (err, data) {
		res.send(data);
	});
}

userController.delete = function (req, res, next) {
	res.send('delete');
}

userController.update = function (req, res, next) {
	res.send('update');
}

userController.login = function (req, res) {
    var encryptPsd = crypto.encryptPassword(req.body.password);
    userModel.findOne({ 'username': req.body.email, 'hash_psd': encryptPsd }, function (err, doc) {
        if( null == doc ) {
            res.json({'result': 'failed'});
        } else {
            res.json({'result': 'success', 'data': doc});
        }
    });
}

module.exports = userController;