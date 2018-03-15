var express = require('express');
    homer = require('./routes/homer');

var app = express();

app.use('/homer', homer);

app.listen(8080);