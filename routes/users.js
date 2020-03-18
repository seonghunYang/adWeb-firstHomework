var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/message', function(req, res, next) {
  const message = req.body.message;
  res.render("index.pug", {message: message});
});
module.exports = router;
