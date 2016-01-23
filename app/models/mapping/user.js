'use strict';
var mongoose = require('mongoose'),
	crypto = require('../../utils/crypto'),
	Schema = mongoose.Schema;

var schema = new Schema({
	username: String,
	hash_psd: String,
	name: String,
	gender: Number,
	phone: String,
	address: {
		city: String,
		street: String
	}
});

schema.virtual("password").set(function (password) {
	this.hash_psd = crypto.encryptPassword(password);
});

schema.method("authenticate", function (plainText) {
	return crypto.encryptPassword(plainText) === this.hash_psd;
});

// users collection
mongoose.model('user', schema);
