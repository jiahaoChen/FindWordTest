var express = require('express');
var router = express.Router();
var words = require('./words');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {pattern: null});
});

router.post('/search', function (req, res) {
  console.log(req.body.pattern);
  var result = words.search(req.body.pattern);
  //console.log(result);
  console.log(req.body.pattern);
  res.render('result', {words: result, pattern: req.body.pattern});
  //res.render('result', {pattern: null});
});

module.exports = router;
