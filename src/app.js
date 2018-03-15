var express = require('express');
    queryHomer = require('./routes/queryHomer');
    publishHomer = require('./routes/publishHomer');
    doItAll = require('./routes/doItAll');

var app = express();

app.use('/queryHomer', queryHomer);
app.use('/publishHomer', publishHomer);
app.use('/doItAll', doItAll);

app.listen(8080);