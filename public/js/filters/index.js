'use strict';
define(['./filters'], function (filters) {
	return filters.filter('interpolate', ['version', function (version) {
		return function (text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		}
	}])
});