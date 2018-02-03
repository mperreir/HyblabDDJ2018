"use strict";
document.getElementsByClassName("backToMap")[0].addEventListener("click", function(){
    var location = document.location.href;
    document.location.href = location.slice(0, location.lastIndexOf("/"));
});

var page2 = d3.select(".map-pdl");
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



                // bubble chart


                // move to dashboard
                document.location.href = document.location + "/slide2";
                document.getElementById("nom_epci").innerText = d.properties.nom_comple;
            })
            
            .on("mouseover", function(d) {
                d3.select(this).transition()
                    .delay("50")
                    .duration("200")
                    .style("fill", "#CCE748")
                    .style("cursor", "pointer");
                d3.select("#titre-epci").text(d.properties.nom_comple);
            })
            .on("mouseout", function() {
                d3.select(this).transition()
                    .delay("50")
                    .duration("200")
                    .style("fill", "white");
                d3.select("#titre-epci").text('');
            })


    });


});

function miniStats(){
    //1 : conjoncture / number / multibubble

    //2 : Investissement /  / chart over time compared with region

    //3 : contrats / words / sunBurst chart
    fetch("/capeb/data/" + d.properties.siren_epci + "/sunburst")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function(jsonContrats){
            //$("svg#sunburst").remove();
            //sunBurst(jsonContrats);
        });

    //4 : embauche / oui/non plus représenté / double chart with rotation

    //5 : distance / moyenne / bubble chart
    fetch("/capeb/data/" + d.properties.siren_epci + "/distance")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function(jsonDistance){

        });


    //7 : MP / oui/non plus représenté / camembert -> nuage de mots

}
