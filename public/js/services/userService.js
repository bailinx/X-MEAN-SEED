define(['./module'], function (services) {
    'use strict';
    services.factory('UserService', ['$rootScope', '$http',
        function ($rootScope, $http) {
            return {
                login: function (credentials, callback) {
                    $http.post('/user/login', credentials)
                        .success(function (data, status) {
                            callback(null, data);
                        })
                        .error(function (e) {
                            callback(e);
                        });
                }
            };
        }
    ])
});