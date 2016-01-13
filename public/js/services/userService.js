define(['./module'], function (services) {
    'use strict';
    services.factory('UserService', ['$rootScope', '$http',
        function ($rootScope, $http) {
            return {
                login: function (credentials) {
                    $http.post('/user/login', credentials)
                        .success(function (data, status) {
                            return data;
                        })
                        .error(function (data, status, headers, config) {
                            return false;
                        });
                }
            };
        }
    ])
});