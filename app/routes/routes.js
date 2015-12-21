'use strict';
var index   = require('./index'),
    user    = require('./user'),
    helper  = require('./helper');

var setupRotue = helper.setupRoute;
module.export = function(app, middleware) {
    var route = express.Router();
    mainRoutes(route, middleware, function(req, res){

    });
};
function mainRoutes(app, middleware, controller) {
    // 公共路由
}