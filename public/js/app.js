define([
		"angular",
		'angular-route',
		'./controllers/index',
		'./services/index',
		'./directives/index',
		'./filters/index'
	], function (angular) {
		'use strict';
		return angular.module('app', [
			'app.controller',
			'app.directives',
			'app.filters',
			'app.services',
			'ngRoute'
		]);
	}
);