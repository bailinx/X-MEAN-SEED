'use strict';
module.exports = {
    name                    : 'X-MEAN-SEED',
    /* production: 生产环境 development: 开发环境 */
    env                     : 'development',
    port                    : 3000,
    cookieSecret            : 'X-MEAN-SEED',// cookie密钥
    connectionString        : 'mongodb://localhost/xmean'
}