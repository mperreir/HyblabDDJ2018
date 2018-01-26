'use strict';

// general routing framework
var express = require('express')
//var basicAuth = require('basic-auth-connect');
var app = express()

// password protection
//app.use(basicAuth('ddj2017', 'iloveddj'));

// declare the list of sub apps
var app_names = ['simple-example', 'ouest-france', 'region-pdl', 'france3-bzh', 
'eau-et-rivieres-bzh', 'nantes-st-nazaire-dev', 'france3-pdl', 'dpt-loire-atlantique',
'musee-jules-verne', 'capeb'];

var ddj2018_names = [];

app_names.push.apply(app_names, ddj2018_names);

var sub_apps = [];

// create sub apps
// and register sub-apps
app_names.forEach( function( element, index, array) {
  console.log('Registering: ' + element);
	sub_apps[element] = require('./' + element + '/server');
	app.use('/' + element, sub_apps[element]);
});

// redirect catch all url to hyblab website
app.use(/\/$/,function(req, res, next){
	res.redirect('http://www.hyblab.fr/');
});


// launch main server app
var port = 'PORT' in process.env ? process.env.PORT : 8082;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Hyblab routing app listening at http://%s:%s', host, port)

})
