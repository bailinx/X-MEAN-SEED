'use strict';
var indexController = {};

indexController.index = function (req, res, next) {
	// 若需使用hbs，请参见app/views
	// res.render('index', {title: 'X-MEAN-SEED'});
	res.send("hello index");
}

module.exports = indexController;