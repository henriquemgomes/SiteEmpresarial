var express = require('express');
var app = express();
var engine = require('consolidate');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('public'));

//teste branch dev



module.exports = app;