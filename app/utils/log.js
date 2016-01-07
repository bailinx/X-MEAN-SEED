'use strict';
var log4js = require('log4js'),
	config = require('../config/config');

log4js.configure({
	appenders: [
		{
			// 输出到控制台
			type: 'console',
			category: 'console'
		},
		{
			// 输出到文件
			type: 'file',
			filename: '../logs/log.log',
			pattern: '_yyyy-MM-dd',
			maxLogSize: 20480,
			backups: 3,
			category: 'dateFileLog'
		}
	],
	replaceConsole: true,
	levels: {
		dateFileLog: 'debug',
		console: 'debug'
	}
});

var dateFileLog = log4js.getLogger('dateFileLog');
var consoleLog = log4js.getLogger('console');
// 当前环境 development 为开发模式
if (config.env === 'development') {
	exports.logger = consoleLog;
} else {
	exports.logger = dateFileLog;
}

exports.use = function (app) {
	app.use(log4js.connectLogger(consoleLog, {level: 'INFO', format: ':method :url'}));
}