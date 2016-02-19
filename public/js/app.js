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
		]).config(['$httpProvider', function ($httpProvider) {
			// 在这里构造拦截器
			var interceptor = ['$q', function($q) {
				return {
					'response': function(resp) {
						console.log('get data complete:' + resp, 'ajax');
						return resp;
					},
					'responseError': function(rejection) {
						// 错误处理
						console.warn('Failed with http', (rejection.message || rejection.status), 'status');
						if (rejection.status == 403) {
							console.warn('Forbidden, need login to auth');
							$location.path('/login');
						}
						return $q.reject(rejection);
					}
				};
			}];
			$httpProvider.interceptors.push(interceptor);
		}]);
	}
);
