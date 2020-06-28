'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/about', function (req, res) {
  res.render('page', {
    page: {
      title: 'About Tim',
      content: 'So you want to know more?(write a smol blurb)'
    }
  }); // renders about.pug
});
router.get('/projects', function (req, res) {
  res.render('page', {
    page: {
      title: 'Projects',
      content: 'So you want to know about projects?(link to github? upload something?)'
    }
  }); // renders about.pug
});
router.get('/services', function (req, res) {
  res.render('page', {
    page: {
      title: 'Services',
      content: 'So you want to know about services?(what can I do?)'
    }
  }); // renders about.pug
});
router.get('/contact', function (req, res) {
  res.render('page', {
    page: {
      title: 'Contact Tim',
      email: 'timaryavong@gmail.com',
      phone: '789-456-1234',
      content: 'For inquiries please email or text.'
    }
  }); // renders about.pug
});
module.exports = router;
