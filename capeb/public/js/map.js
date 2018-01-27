"use strict";


var body = d3.select("#map");
var svg = body.append("svg");
svg.attr("width", 600).attr("height", 600);
var projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(12000)
    .translate([1000, 500]);
var path = d3.geoPath(projection);

path.projection(projection);
d3.json("data/contours-epci-2017.geojson", function (err, geoJSON) {
    var map = svg.selectAll("path").data(geoJSON.features);
    map.enter()
        .append("path")
        .attr("fill", "white")
        .attr("stroke", "black")
        .attr("d", path)
        .on("click", function (d) {
			alert(d.properties.siren_epci)
            fetch("/capeb/data/" + d.properties.siren_epci + "/stats")
                .then(function (value) {
                    return value.json();
                })
                .catch(function (error) {
                    console.log("error");
                    console.log(error);
                    return {};
                })
                .then(function(json){
                    console.log(json);
                })
        })
        .append("svg:title")
        .text(function (d) {
            return d.properties.nom_comple
        });
});
