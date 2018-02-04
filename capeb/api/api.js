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
				  'NombreDeRecrutementsEnvisage_2017.csv',
				  'DD_2017.csv',
				  'Contrats_2014-2017.csv',
				  'recrutement2014_2017.csv',
				  'recrutement_Activité2014_2017.csv'
				  ].map(f => path.join(__dirname,"./data/stats/".concat(f)))

var stats_json = {}
var critere = ['Activite',
  			   'Marches_publics',
  			   'Zone_intervention',
			   'Nombre_Recrutements_Envisage_2017',
  			   'Developpement_durable',
  			   'Contrats',
  			   'Recrutement_Evo',
  			   'Recrutement_Evo_Act'
  			  ]

var keys = []
var crt_arr = []

app.get('/:epci/stats', function(req, res) {

	stat_files.forEach(function(file, idf){
		var json = {}
		crt_arr = []
		var data = fs.readFileSync(file, 'utf8');
		data.split(/\r\n|\n/).forEach(function(line, id) {
			if(id == 0){
				keys = line.split(",");
				json['labels'] = keys.slice(1);
				json['values'] =  Array.from({length: json['labels'].length}, (v, i) => []);
			}
			else{
				var cells = line.split(',')

				if(cells[0] == req.params.epci){
					if(idf >= 4){
						cells.slice(1).map(function(val, j) {
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
    var moyenne2014=0, moyenne2015=0, moyenne2016=0, moyenne2017=0;
    var nb4 =0, nb5=0, nb6=0, nb7=0;
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

            //also do stats for region, because it's easy here

            if(cells[1] == 2014){
                moyenne2014+=parseFloat(cells[2]);
                nb4++;
            } else if(cells[1] == 2015){
                moyenne2015+=parseFloat(cells[2]);
                nb5++;
            } else if(cells[1] == 2016){
                moyenne2016+=parseFloat(cells[2]);
                nb6++;
            } else if(cells[1] == 2017){
                moyenne2017+=parseFloat(cells[2]);
                nb7++;
            }
        }
    });

    moyenne2014/=nb4;
    moyenne2015/=nb5;
    moyenne2016/=nb6;
    moyenne2017/=nb7;

    json.region = [['2014', moyenne2014, 1-moyenne2014], ['2015', moyenne2015, 1-moyenne2015], ['2016', moyenne2016, 1-moyenne2016], ['2017', moyenne2017, 1-moyenne2017]];

    res.json(json);
});

app.get('/:epci/recrutements', function(req, res){
    var csv = path.join(__dirname,'./data/stats/NombreDeRecrutementsEnvisage_2017.csv');
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
