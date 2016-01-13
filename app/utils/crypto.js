'use strict';
var crypto = require('crypto'),
    cryptoUtil = {};

cryptoUtil.encryptPassword = function ( password ) {
    return crypto.createHash('md5').update(password).digest('base64');
}

module.exports = cryptoUtil;