'use strict';
define([
		"angular",
		'angular-route',
		'controllers/index',
		'services/index',
		'directives/index',
		'filters/index'
	], function BaseManager(angular) {
		return angular.module('app', ['controller', 'directives', 'filters', 'services', 'ngRoute']);
	}
);