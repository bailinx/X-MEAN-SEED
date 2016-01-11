define([
		"angular",
		'uiRouter',
		'angularAnimate',
		'angularToastr',
		'./controllers/index',
		'./directives/index',
		'./filters/index',
		'./services/index'
	], function (ng) {
		'use strict';
		return ng.module('app', [
			'ngAnimate',
			'toastr',
			'app.controllers',
			'app.directives',
			'app.filters',
			'app.services',
			'ui.router'
		]);
	}
);
