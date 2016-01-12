define(['./app'], function (app) {
	'use strict';
	return app.config(function ( $stateProvider , $urlRouterProvider ) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'AuthCtrl'
		})
		.state('index', {
			url: '/index',
			templateUrl: 'partials/index.html',
			controller: 'IndexCtrl'
		});
		$urlRouterProvider.otherwise('/login');
	});
});