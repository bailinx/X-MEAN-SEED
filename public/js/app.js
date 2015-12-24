'use strict';
define(["angular"], function BaseManager(angular) {
	var init = function() {
		var app = angular.module("myApp", [], function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl: '/templates/main.html',
				controller: MainCtrl
			});

			$routeProvider.otherwise( { redirectTo: '/'});
			$locationProvider.html5Mode(true);
		});

		angular.bootstrap(document, ["myApp"]);
	};
	return {
		init: init
	};
})