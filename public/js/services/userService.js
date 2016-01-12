define(['./module'], function (services) {
    'use strict';
    services.factory('UserService', ['$rootScope', '$http',
        function ($rootScope, $http) {
            return {
                login: function (user) {
                    $http({
                        method: 'POST',
                        url: '/api/login',
                        data: user
                    }).success(function (data, status, headers, config) {
                        return true;
                    }).error(function (data, status, headers, config) {
                        return false;
                    });
                }
            };
        }
    ])
});