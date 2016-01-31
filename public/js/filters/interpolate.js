define(['./module'], function (filters) {
	'use strict';

	return filters.filter('interpolate', [function () {
		return function (text) {
			return String(text).replace(/\%VERSION\%/mg, "1.0.0");
		}
	}]);
});