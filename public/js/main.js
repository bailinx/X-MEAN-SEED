'use strict';
require.config({
	paths: {
		angular: "libs/angular/angular",
		angularRoute: "libs/angular-route/angular-route"
	},
	shim: {
		'angular': {'exports': 'angular'},
		'angularRoute': ['angular']
	}
});
// 参考 https://github.com/maxdow/angularjs-requirejs-seed/tree/master/app/js
require(['app'], function(app) {
	app.init();
})