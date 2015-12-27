'use strict';
define('./directives', function (directives) {
	directives.directive('appVersion', function (version) {
		return function (scope, elem) {
			elem.text(version);
		}
	})
});