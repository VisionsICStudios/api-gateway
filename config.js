/*
============================================
; Title:  config.js (Update IV)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 23 June 2019
; Description: Global Configuration File
;===========================================
*/

var config = {};
config.web = {};

config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';

module.exports = config;
