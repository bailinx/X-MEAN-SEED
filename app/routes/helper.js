'use strict';

var helper = {};

/**
 * 自定义路由(源于Github/NodeBB)
 * @param router
 * @param name
 * @param middleware
 * @param middlewares
 * @param controller
 */
helper.setupRoute = function(router, name, middleware, middlewares, controller) {
    //middlewares = middlewares.concat([middleware.pageView, middleware.pluginHooks]);

    router.get(name, middlewares, controller);
};

module.exports = helper;