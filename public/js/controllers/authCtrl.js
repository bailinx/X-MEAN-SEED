define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('AuthCtrl', ['$scope', 'NotifyService',
		function ($scope, notify) {
			$scope.login = function () {
				var email = $scope.email,
					password = $scope.password;
				if (!email || !password) {
					notify.error('用户名密码不能为空.', 'X-MEAN-SEED');
				} else {

				}
			}
		}
	]);
});