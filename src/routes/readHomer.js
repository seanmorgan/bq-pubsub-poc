var express = require('express');
    router = express.Router();
    bq = require('../bq');

router.get('/', function(req, res) {
    let result = bq();

    res.status(200).send(result);
});

module.exports = router;