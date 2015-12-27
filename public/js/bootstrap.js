define(['require', 'angular', 'app', 'routes'],
	function (domcument, ng) {
		'use strict';
		require(['domReady!'], function (document) {
			ng.bootstrap(document, ['app']);
		});
	}
);
