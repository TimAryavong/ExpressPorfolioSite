'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('home', {
    page: {
      title: 'Tim Aryavongs\'s Portfolio Site',
      contents: 'Welcome! My name\'s Tim and ....stuff'
    }
  });
});

module.exports = router;
