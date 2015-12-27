'use strict';
require.config({
	paths: {
		'angular': "../libs/angular/angular",
		'angular-route': "../libs/angular-route/angular-route",
		'domReady': "../libs/requirejs-domready/domReady"
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}
	},
	deps: ['./bootstrap']
});