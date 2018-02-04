"use strict";
$ (document).ready(function(){
    document.getElementsByClassName("backToMap")[0].addEventListener("click", function () {
        var location = document.location.href;
        document.location.href = location.slice(0, location.lastIndexOf("/"));
    });
});


var viewportWidth = $(".map-pdl").width();
var viewportHeight = $(".map-pdl").height();
var width = viewportWidth;
var height = viewportHeight;

var page2 = d3.select(".map-pdl");
var svg = page2.append("svg")
    .attr("width", width).attr("height", height);
var projection = d3.geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(width*10)
    .translate([width, height*0.8]);
var path = d3.geoPath(projection);

path.projection(projection);

$ (document).ready(function(){
    d3.json("data/merged.geojson", function (err, geoJSON) {
        var map = svg.selectAll("path").data(geoJSON.features);
        map.enter()
            .append("path")
            .attr("fill", "white")
            .attr("d", path)
            .on("click", function (d) {

                fetch("/capeb/data/regionStats")
                    .then(function (value) {
                        return value.json();
                    })
                    .catch(function (error) {
                        console.log("error");
                        console.log(error);
                        return {};
                    })
                    .then(function(json){
                        createModal();
                        miniStats(json, d);
                    });

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
                    .duration("1000")
                    .style("fill", "white");
                d3.select("#titre-epci").text('');
            })
    });
});

d3.select(window).on('resize', resize);

function resize() {
    width = parseInt(d3.select('.map-pdl').style('width'));
    width = width;
    height = height;

    projection
        .scale([width*10])
        .translate([width,height*0.8]);

    d3.select("map-pdl").attr("width",width).attr("height",height);
    d3.select("svg").attr("width",width).attr("height",height);

    d3.selectAll("path").attr('d', path);


}
