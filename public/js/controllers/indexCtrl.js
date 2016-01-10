define(['./controllers'], function (controllers) {
	'use strict';
	controllers.controller('IndexCtrl', [function ($scope, toastr) {
		toastr.success('hello world!', 'X-MEAN-SEED');
	}]);
});