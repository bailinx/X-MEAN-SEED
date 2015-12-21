/**
 * Created by radishj on 2015/12/20.
 */
'use strict';
module.exports = {
    /* production: 生产环境 development: 开发环境 */
    env                     : 'development',
    port                    : 3000,
    cookieSecret            : 'X-MEAN-SEED',// cookie密钥
    connectionString        : 'mongodb://localhost/xmean'
}