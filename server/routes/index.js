/**
 * Main application routes
 */

'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');

router.get('/*', function(req, res) {
    res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


router.get('/other', function(req, res) {

});


module.exports = router;