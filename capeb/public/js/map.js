"use strict";

var body = d3.select("#page2");
var svg = body.append("svg");
svg.attr("width", 1000).attr("height", 1000);
var projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(15000)
    .translate([1250, 750]);
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
        .on("mouseover", function(d) {
            d3.select(this).transition()
                .delay("50")
                .duration("200")
                .style("fill", "blue");
            d3.select("#bigText").text(d.properties.nom_comple);
        })
        .on("mouseout", function(d) {
            d3.select(this).transition()
                .delay("50")
                .duration("200")
                .style("fill", "white");
            d3.select("#bigText").text('');
        })
        .append("svg:title")
        .text(function (d) {
            return d.properties.nom_comple
        });

});
