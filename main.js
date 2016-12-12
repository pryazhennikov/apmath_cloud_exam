const express = require('express');
const app = express();

app.use('/', function(req, res) {
    res.end('Hello world');
});

app.listen('3000', () => console.log('Works on 3000 port'));
