'use strict';
var userController = {};

userController.list = function(req, res, next) {
    res.send('respond with a resource');
}

module.exports = userController;