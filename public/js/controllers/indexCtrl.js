define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('IndexCtrl', ['$scope' , 'toastr', function ($scope, toastr) {
		console.log('indexCtrl..');
		console.log(toastr);
		toastr.success('hello world!', 'X-MEAN-SEED');
	}]);
});