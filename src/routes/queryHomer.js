var express = require('express');
    router = express.Router();
    bq = require('../bq');

router.get('/', function(req, res) {
    bq();

});

module.exports = router;