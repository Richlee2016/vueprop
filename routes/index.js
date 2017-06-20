var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/observer', function(req, res, next) {
    res.render('observer', { title: 'observer test' });
});

module.exports = router;