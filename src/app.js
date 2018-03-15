var express = require('express');
    homer = require('./routes/homer');
    readHomer = require('./routes/readHomer');

var app = express();

app.use('/homer', homer);
app.use('/readHomer', readHomer);

app.listen(8080);