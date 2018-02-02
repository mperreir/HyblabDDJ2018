'use strict';
var path = require('path');
var fs = require('fs');

var root = {
    "name": "Activité",
    "children": []
    }

var file = path.join(__dirname,'./data/stats/sunburst.csv');
fs.readFile(file, 'utf8', (err, data) => {
	if(err){
		throw err;
	}
	else{
		data.split(/\r\n|\n/).forEach((line, id) => {
			if(id == 0){
				var key = line.split(";").slice(1)
			}
		})
	}
})
