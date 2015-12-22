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
})