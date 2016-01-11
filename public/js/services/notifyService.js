define(['./module'], function (services) {
    'use strict';
    services.factory('notifyService', [ '$rootScope', '$log', 'toastr', 'toastrConfig',
        function ($rootScope, $log, toastr, toastrConfig) {
            toastrConfig.positionClass = 'toast-bottom-right';
            toastrConfig.tapToDismiss = 'true';
            var defaults= {
                // Ä¬ÈÏ²ÎÊý
                allowHtml: true
            };
            return {
                info: function (message, title, options) {
                    if( undefined === options || !options ) {
                        toastr.info(message, title, defaults);
                    } else {
                        toastr.info(message, title, options);
                    }
                    $log.info(message);
                },
                warning: function (message, title, options) {
                    if( undefined === options || !options ) {
                        toastr.warning(message, title, defaults);
                    } else {
                        toastr.warning(message, title, options);
                    }
                    $log.warning(message);
                },
                success: function (message, title, options) {
                    if( undefined === options || !options ) {
                        toastr.success(message, title, defaults);
                    } else {
                        toastr.success(message, title, options);
                    }
                    $log.log(message);
                },
                error: function (message, title, options) {
                    if( undefined === options || !options ) {
                        toastr.error(message, title, defaults);
                    } else {
                        toastr.error(message, title, options);
                    }
                    $log.error(message);
                },
                clear: function () {
                    toastr.clear();
                }
            }
        }
    ]);
});