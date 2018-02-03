'use strict';
var csv = null;

var express = require('express');
var app = express();
var d3 = require('d3');
var fetch = require('node-fetch');
var path = require('path');
var fs = require('fs');

var data_capeb = path.join(__dirname,'./data/CAPEBPaysDelaLoire_2014-2017.csv')
var stat_files = ['Activité2017.csv',
				  'Développement_durable2016.csv',
				  'Marchés_publics2017.csv',
				  'Zone_intervention2017.csv',
				  'Contrats_2014-2017.csv'
				  ].map(f => path.join(__dirname,"./data/stats/".concat(f)))

var stats_json = {}
var critere = ['Activite',
  			   'Developpement_durable',
  			   'Marches_publics',
  			   'Zone_intervention',
  			   'Contrats',
  			  ]

var keys = []
var crt_arr = []

app.get('/:epci/stats', (req, res) => {

	stat_files.forEach((file, idf) =>{
		var json = {}
		crt_arr = []
		var data = fs.readFileSync(file, 'utf8');
		data.split(/\r\n|\n/).forEach((line, id) => {
			if(id == 0){
				keys = line.split(",");
				json['labels'] = keys.slice(1);
				json['values'] =  Array.from({length: json['labels'].length}, (v, i) => []);
			}
			else{
				var cells = line.split(',')

				if(cells[0] == req.params.epci){
					if(idf >= 4){
						cells.slice(1).map((val, j) => {
							json['values'][j].push(val)
						});
					}
					else{
						json['values'] = cells.slice(1);
					}
				}
			}
		})
		stats_json[critere[idf]] = json

	})
	res.charset = 'utf8';
	res.json(stats_json);
})

app.get('/:epci/distance', function(req, res){
    var bubblecsv = path.join(__dirname,'./data/stats/Distance.csv');
    var json = {};
    crt_arr = []
    var data = fs.readFileSync(bubblecsv, 'utf8');
    data.split(/\r\n|\n/).forEach(function (line, id) {
        if(id == 0){
            keys = line.split(";");
            json['labels'] = keys.slice(1);
            json['values'] =  [];
        }
        else{
            var cells = line.split(';');
            if(cells[0] == req.params.epci){
                json['values'].push(cells.slice(1));
            }
        }
});
});

app.get('/:epci/sunburst', function(req, res){
    var bubblecsv = path.join(__dirname,'./data/stats/sunburst.csv');
    var json = {};
    crt_arr = []
    var data = fs.readFileSync(bubblecsv, 'utf8');
    data.split(/\r\n|\n/).forEach(function (line, id) {
        if(id == 0){
            keys = line.split(",");
            json['labels'] = keys.slice(1);
            json['values'] =  [];
        }
        else{
            var cells = line.split(',');
            if(cells[0] == req.params.epci){
                json['values'].push(cells.slice(1));
            }
        }
	});

	res.charset = 'utf8';
	res.json(json.values);
});

app.get('/sunburst', function(req, res){
    var bubblecsv = path.join(__dirname,'./data/stats/sunburst.csv');
    var data = fs.readFileSync(bubblecsv, 'utf8');
	
	res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
	res.set('Content-Type', 'text/csv');
	res.status(200).send(data);
});



module.exports = app;
