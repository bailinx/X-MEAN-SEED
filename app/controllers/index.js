'use strict';
var indexController = {};

indexController.index = function (req, res, next) {
	res.render('index', {title: 'X-MEAN-SEED'});
}

module.exports = indexController;