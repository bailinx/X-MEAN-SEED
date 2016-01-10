'use strict';
require.config({
	paths: {
		'angular': "../libs/angular/angular",
		'angular-route': "../libs/angular-route/angular-route",
		'angular-animate': "../libs/angular-animate/angular-animate",
		'angular-toastr': "../libs/angular-toastr/dist/angular-toastr",
		'domReady': "../libs/requirejs-domready/domReady"
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-animate': {
			deps: ['angular']
		},
		'angular-toastr': {
			deps: ['angular']
		}
	},
	deps: ['./bootstrap']
});