/*
============================================
; Title:  user.js (Update V)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 23 June 2019
; Description: User Model File
;===========================================
*/

/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});


const User = module.exports = mongoose.model('User', userSchema);


/**
 Database queries
 */

// A query is used to add a new user in our database.
module.exports.add = (user, callback) => {
    user.save(callback);
}

// A query for finding individual users by id in our database.
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

// A query for finding individual users by email address in our database.
module.exports.getOne = (e, callback) => {
  var query = { email: e};
  User.findOne(query, callback);
}
