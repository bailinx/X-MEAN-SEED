define(['./controllers'], function (controllers) {
	'use strict';
	controllers.controller('IndexCtrl', [function ($scope) {
		$scope.pop = function () {
			toaster.pop('success', 'title', 'text');
		}
	}]);
});