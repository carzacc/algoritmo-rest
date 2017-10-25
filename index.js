'use strict';

var http = require('http');
var fs = require('fs');
var util = require('util');
var express = require('express');
var mysql = require('mysql');
var escapeHtml = require('./escape');
var compression = require('compression');
var helmet = require('helmet');
var start = require('./start');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var algoritmo = require('./algo')

var connessione = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
var app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());

app.get('/', function(req,res)  {
  let giornata = req.query.g;
  res.send(algoritmo(giornata))
});


app.use('/', express["static"]('public'));

app.listen(process.env.PORT, function() {
  return console.log("Avviato server su porta " + process.env.PORT);
});
