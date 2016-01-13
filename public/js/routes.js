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
		})
		.state('index.index', {
			url: '/index/index',
			templateUrl: 'partials/Index/index.html',
			controller: 'IndexCtrl'
		});
		$urlRouterProvider.otherwise('/login');
	});
});