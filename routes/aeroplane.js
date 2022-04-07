var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aeroplane', { title: 'search results for aeroplane' });
});

module.exports = router;
