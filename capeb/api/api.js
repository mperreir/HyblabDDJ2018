'use strict';
var csv = null;

var express = require('express');
var app = express();
var d3 = require('d3');
var fetch = require('node-fetch');
var path = require('path');
var fs = require('fs');

var data_capeb = path.join(__dirname,'./data/CAPEBPaysDelaLoire_2014-2017.csv')

var data_to_json = []
var keys = []

app.get('/:epci/stats', (req, res) => {

	var data_epci = []
	fs.readFile(data_capeb, 'latin1', function (error, data) {
		if (!error) {
			
			data.split(/\r\n|\n/).forEach((line, id) => {
				if(id == 0){
					keys = line.split(";");
				}
				else{
					var ok = false
					var json = {}
					var cells = line.split(';')

					if(cells[398] == req.params.epci){
						cells.forEach((cell, i)=>{
							json[keys[i]] = cell
						})
						ok = true
					}
					if(ok){
						data_epci.push(json)	
					}
				}
			})
		res.json(data_epci);
		}
		else
		console.log(error);
		res.status(404);
	})
})
module.exports = app;
