'use strict';
var http = require('http');
var fs = require('fs');
var util = require('util');
var express = require('express');
//var mysql = require('mysql');
var compression = require('compression');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var algoritmo = require('./algo');
//var connessione = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://algoritmo.carzacc.info");
    next();
});
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(expressValidator());
app.get('/', function (req, res) {
    let giornata = req.query.g;
    res.send(algoritmo(giornata));
});
app.use('/', express["static"]('public'));
let port = process.env.PORT || 3000;
app.listen(port, function () {
    return console.log("Avviato server su porta " + port);
});
