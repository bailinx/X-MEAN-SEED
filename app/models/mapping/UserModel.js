/**
 * Created by radishj on 2015/12/20.
 */
'use strict';
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var schema = new Schema({
    username:String,
    hash_psd:String,
    name:String,
    gender:Number,
    phone:String,
    address:{
        city:String,
        street:String
    }
});

schema.virtual("password").set(function(password) {
    this.hash_psd = encryptPassword(password);
});

schema.method("authenticate", function(plainText) {
    return encryptPassword(plainText) === this.hash_psd;
});

function encryptPassword(password) {
    return crypto.createHash('md5').update(password).digest('base64');
}
mongoose.model('User', schema);