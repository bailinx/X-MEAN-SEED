'use strict';
define(['require', 'angular', 'app', 'routes'],
	function (domcument, ng) {
		require(['domReady!'], function(document) {
			ng.bootstrap(document, ['app']);
		});
	}
);
