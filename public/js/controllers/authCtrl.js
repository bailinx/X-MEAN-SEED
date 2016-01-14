define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('AuthCtrl', ['$scope', '$rootScope', '$state', 'NotifyService', 'UserService',
		function ($scope, $rootScope, $state, notify, userService) {
			$scope.credentials = {
				email: '',
				password: ''
			};
			$scope.login = function (credentials) {
				if (!credentials.email || !credentials.password) {
					notify.error('用户名密码不能为空.', 'X-MEAN-SEED');
				} else {
					userService.login(credentials, function (error, data) {
						if( !error ) {
							if( data && data.result === 'success' ) {
								// 缓存用户信息并跳转至首页
								$state.go('sys.index');
							} else {
								notify.error('用户名或密码错误.', 'X-MEAN-SEED');
							}
						} else {
							notify.error(e, 'X-MEAN-SEED');
						}
					});

				}
			}
		}
	]);
});