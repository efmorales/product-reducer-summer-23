var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', (request, response, next) => {
  response.send('New user route!!!');
} )

module.exports = router;
