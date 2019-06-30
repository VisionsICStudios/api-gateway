/*
============================================
; Title:  check-token.js (Update V)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 23 June 2019
; Description: Global Security File
;===========================================
*/

// Required variables
var jwt = require('jsonwebtoken');
var config = require('./config');

// The created checkToken function with params.
function checkToken(req, res, next) {

  var token = req.headers['x-access-token'];

  if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.'});

  jwt.verify(token, config.web.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

      req.userId = decoded.id;
      next();
  });
}


module.exports = checkToken;
