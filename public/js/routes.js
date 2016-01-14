define(['./app'], function (app) {
	'use strict';
	return app.config(function ( $stateProvider , $urlRouterProvider ) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'AuthCtrl'
		})
		.state('sys', {
			url: '/sys',
			templateUrl: 'partials/Templates/layout.html'
		})
		.state('sys.index', {
			url: '/index',
			templateUrl: 'partials/Index/index.html',
            controller: 'IndexCtrl'
		})
		.state('sys.userList', {
			url: '/userList',
			templateUrl: 'partials/User/list.html',
            controller: 'UserCtrl'
		});
		$urlRouterProvider.otherwise('/login');
	});
});