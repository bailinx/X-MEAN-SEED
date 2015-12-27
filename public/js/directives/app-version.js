'use strict';
define('directives/directives', function (directives) {
	directives.directive('appVersion', function (version) {
		return function (scope, elem) {
			elem.text(version);
		}
	})
})