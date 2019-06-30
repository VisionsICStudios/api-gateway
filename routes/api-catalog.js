/*
============================================
; Title:  api-catalog.js (Update V)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 23 June 2019
; Description: Catalog API Routing File
;===========================================
*/

/**
* API Routes
*/

// Required variables to allow script page functionality.
var express = require('express');
var router = express.Router();
var checkToken = require('../check-token');
var auth_controller = require('../controllers/authController');

// POST request for registering a user.
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

// POST request to allow user login requests.
router.post('/auth/login', auth_controller.user_login);

// GET request to  allow user logout requests.
router.get('/auth/logout', auth_controller.user_logout);

// Export the router globally within the application.
module.exports = router;
