"use strict";

var page2 = d3.select("#page2");
var svg = page2.append("svg");
svg.attr("width", 1000).attr("height", 1000);
var projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(15000)
    .translate([1250, 750]);
var path = d3.geoPath(projection);

path.projection(projection);

$ (document).ready(function(){

    d3.json("data/merged.geojson", function (err, geoJSON) {
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
                        var keys = Object.keys(json);
                        document.getElementById("page3").style.display = "block";
                        $('html,body').animate({
                                scrollTop: $("#page3").offset().top},
                            'slow');
                        flush();
                        drawBarChart(json.Activite, "Repartion des Activite entre 2014 et 2017");
						drawPieChart(json.Developpement_durable, "Dévolopement durable en 2016");
						drawPieChart(json.Marches_publics, "Marche public");

                    });
            })
            .on("mouseover", function(d) {
                d3.select(this).transition()
                    .delay("50")
                    .duration("200")
                    .style("fill", "blue");
                d3.select("#bigText").text(d.properties.nom_comple);
            })
            .on("mouseout", function() {
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

});
