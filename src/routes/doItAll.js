var express = require('express');
    router = express.Router();
    query = require('../bq');
    publish = require('../ps');

router.get('/', function(req, res) {
    query();

    setTimeout(function(){
        //do what you need here
        publish();
        res.status(200).send();
    }, 15000);
    
});

module.exports = router;