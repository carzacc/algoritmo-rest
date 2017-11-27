/*
* Copyright 2017 Carmine
*
* Licensed under the EUPL, Version 1.1 or – as soon they
will be approved by the European Commission - subsequent
versions of the EUPL (the "Licence");
* You may not use this work except in compliance with the
Licence.
* You may obtain a copy of the Licence at:
*
*
https://joinup.ec.europa.eu/software/page/eupl
*
* Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the Licence for the specific language governing
permissions and limitations under the Licence.
*/
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
var algoritmo = require('./algo')

//var connessione = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
var app = express();

app.use(function(req, res, next) {
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

app.get('/', function(req,res)  {
  let giornata = req.query.g;
  res.send(algoritmo(giornata))
});


app.use('/', express["static"]('public'));
let port = process.env.PORT || 3000;
app.listen(port, function() {
  return console.log("Avviato server su porta " + port);
});
