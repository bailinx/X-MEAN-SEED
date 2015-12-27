'use strict';
require.config({
	paths: {
		'angular': "libs/angular/angular",
		'angular-route': "libs/angular-route/angular-route",
		'domReady': "libs/requirejs-domready/domReady"
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}
	},
	deps: ['./bootstrap']
});

require([
			'app',
			'bootstrap',
			'controllers/controllers',
			'services/services',
			'directives/directives',
			'filters/filters'
	],
	function (app) {
		return app.config(['$routeProvider'], function ($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'pratials/partial1.html',
				controller: 'MyCtrl1'
			});
			$routeProvider.when('/view2', {
				templateUrl: 'pratials/partial2.html',
				controller: 'MyCtrl2'
			});
			$routeProvider.otherwise({
				redirectTo: '/view1'
			});
		})
	}
)