'use strict';
require.config({
	paths: {
		'angular': "../libs/angular/angular",
		'angularRoute': "../libs/angular-route/angular-route",
		'angularAnimate': "../libs/angular-animate/angular-animate",
		'angularToastr': "../libs/angular-toastr/dist/angular-toastr.tpls",
		'domReady': "../libs/requirejs-domready/domReady"
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'angularRoute': {
			deps: ['angular']
		},
		'angularAnimate': {
			deps: ['angular']
		},
		'angularToastr': {
			deps: ['angular']
		}
	},
	deps: ['./bootstrap']
});