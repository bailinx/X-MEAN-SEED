'use strict';
var config = require('../config/config');
module.exports = function (app, middleware) {
    middleware.setPowerBy = function (req, res, next) {
        res.setHeader('X-Powered-By', config.name);
        next();
    }
    return middleware;
}