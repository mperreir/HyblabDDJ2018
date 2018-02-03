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
				  'Marchés_publics2017.csv',
				  'Zone_intervention2017.csv',
				  'DD_2017.csv',
				  'Contrats_2014-2017.csv'
				  ].map(f => path.join(__dirname,"./data/stats/".concat(f)))

var stats_json = {}
var critere = ['Activite',
  			   'Marches_publics',
  			   'Zone_intervention',
  			   'Developpement_durable',
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
					if(idf >= 3){
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
    var csv = path.join(__dirname,'./data/stats/Distance.csv');
    var json = {};
    crt_arr = []
    var data = fs.readFileSync(csv, 'utf8');
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
    res.json(json);

});

app.get('/:epci/sunburst', function(req, res){
    var csv = path.join(__dirname,'./data/stats/sunburst.csv');
    var json = {};
    crt_arr = []
    var data = fs.readFileSync(csv, 'utf8');
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

app.get('/:epci/conjoncture', function(req, res){
    var csv = path.join(__dirname,'./data/stats/ConjonctureEPCI.csv');
    var json = {};
    crt_arr = []
    var data = fs.readFileSync(csv, 'utf8');
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

    res.charset = 'utf8';
    res.json(json);
});

app.get('/:epci/investissement', function(req, res){
    var csv = path.join(__dirname,'./data/stats/Investissement2014-2017EPCI.csv');
    var json = {};
    crt_arr = [];
    var data = fs.readFileSync(csv, 'utf8');
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

    res.json(json);
});


<<<<<<< HEAD
=======


>>>>>>> 95e48534314bca55584615372b46b5734331b0be
app.get('/regionStats', function(req, res){
    var json = {};
    var csv = path.join(__dirname,'./data/stats/stats_region.csv');
    var data = fs.readFileSync(csv, 'utf8');
    data.split(/\r\n|\n/).forEach(function (line, id) {

        if(id == 0){
            keys = line.split(";");
            json['labels'] = keys.slice(0);
            json['values'] =  [];
        }
        else{
            var cells = line.split(';');
            json['values'].push(cells.slice(0));
        }
    });
    res.json(json);

});


module.exports = app;
