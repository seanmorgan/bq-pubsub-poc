var express = require('express');
    router = express.Router();
    ps = require('../ps');

router.get('/', function(req, res) {
    let data = JSON.stringify({ foo: 'bar' });
    let topic = 'homer';

    ps(topic, data);
    res.status(200).send();
});

module.exports = router;