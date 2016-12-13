const express = require('express');
const app = express();

app.use('/', function(req, res) {
    res.end('Hello world');
});

app.listen('3000', () => console.log('Listening on 3000 port'));
