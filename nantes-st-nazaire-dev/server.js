// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var xlsx = require('xlsx');

var app = express();

// Minimum routing: serve static content from the html directory
app.use('/',express.static(path.join(__dirname, 'public')));

app.post('/actifs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/actifs.xlsx');
	var sheet_name_list = workbook.SheetNames;
        var actifs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        var actifs = xlsx.utils.sheet_to_html(workbook.Sheets[sheet_name_list[0]]);
        res.json(actifs_json);
        //res.end();

});

app.post('/rangs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/rangs-finaux.xlsx');
	var sheet_name_list = workbook.SheetNames;
    var rangs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    res.send(rangs_json);
    res.end();

});

app.get('/actifs', (req, res) => {
  console.log("xom");


 
  /*
  //res.set('Content-Type', 'text/json;charset=utf-8');
  res.json(db.genres);
  */
});

// You can then add whatever routing code you need

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;
