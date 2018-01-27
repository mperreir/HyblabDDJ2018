'use strict';
var csv = null;

var express = require('express');
var app = express();
var d3 = require('d3');
var fetch = require('node-fetch');
var path = require('path');
var fs = require('fs');

var data_capeb = path.join(__dirname,'./data/CAPEBPaysDelaLoire_2014-2017.csv')
var stat_files = ['Activité2017.csv', 'Développement_durable2016.csv', 'Marchés_publics2017.csv', 'Zone_intervention2017.csv'].map(f => path.join(__dirname,"./data/".concat(f)))

console.log(stat_files)
var stats_json = {}
var critere = ['Activité', 'Développement durable', 'Marchés publics', 'Zone intervention']

var keys = []
var crt_arr = []
var json = {}

app.get('/:epci/stats', (req, res) => {

	stat_files.forEach((file, idf) =>{
		crt_arr = []
		var data = fs.readFileSync(file, 'utf8');
		data.split(/\r\n|\n/).forEach((line, id) => {
			if(id == 0){
				keys = line.split(",");
			}
			else{
				var ok = false
				json = {}
				var cells = line.split(',')
				
				if(cells[0] == req.params.epci){
					cells.forEach((cell, i)=>{
						if(i > 0){
							json[keys[i]] = cell
						}
					})
					ok = true
				}
				if(ok){
					stats_json[critere[idf]] = json
				}
			}
		})
	})
	
	res.json(stats_json);
})
module.exports = app;
