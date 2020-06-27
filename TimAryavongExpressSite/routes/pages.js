'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Directory' });
});
router.get('/about', function (req, res) {
    res.render('about', { title: 'About Tim' }); // renders about.pug
});
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' }); // renders about.pug
});
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' }); // renders about.pug
});
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Tim' }); // renders about.pug
});
module.exports = router;
