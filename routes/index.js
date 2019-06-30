/*
============================================
; Title:  index.js (Update V)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 23 June 2019
; Description: Main Index Routing File
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'API Gateway Part V running in Express',
    subTitle: 'Part V | Assignment 8.4' });
  });

  module.exports = router;
