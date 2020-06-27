'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/about', function (req, res) {
    res.render('page', { title: 'About Tim' }); // renders about.pug
});
router.get('/projects', function (req, res) {
    res.render('page', { title: 'Projects' }); // renders about.pug
});
router.get('/services', function (req, res) {
    res.render('page', { title: 'Services' }); // renders about.pug
});
router.get('/contact', function (req, res) {
    res.render('page', { title: 'Contact Tim' }); // renders about.pug
});
module.exports = router;
