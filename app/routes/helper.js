'use strict';

var helper = {};

/**
 * �Զ���·��(Դ��Github/NodeBB)
 * @param router
 * @param name
 * @param middleware
 * @param middlewares
 * @param controller
 */
helper.setupRoute = function(router, name, middleware, controller) {
    // middlewares = middlewares.concat([middleware.pageView, middleware.pluginHooks]);

    router.get(name, middleware, controller);
};

module.exports = helper;