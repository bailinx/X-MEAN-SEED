define(['./app'], function (app) {
	'use strict';
	return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'partials/partial1.html',
			controller: 'UserCtrl'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'partials/partial2.html',
			controller: 'IndexCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/view1'
		});
	}]);
});