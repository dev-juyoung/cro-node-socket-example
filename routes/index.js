var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public', 'chat.html'))
});

module.exports = router;
