define(['./app'], function (app) {
	'use strict';
	// 中括号不能放在['$routeProvider']，坑..
	return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'partials/partial2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.otherwise({
			redirectTo: '/view1'
		});
	}]);
});