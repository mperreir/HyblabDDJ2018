var viewportWidth = $(".map-pdl").width();
var viewportHeight = $(".map-pdl").height();
var width = viewportWidth;
var height = viewportHeight;

"use strict";
$ (document).ready(function(){
    document.getElementsByClassName("backToMap")[0].addEventListener("click", function () {
        var location = document.location.href;
        document.location.href = location.slice(0, location.lastIndexOf("/"));
    });
});
// to use on resize
var projection, scale2, offset2;
var map = d3.select(".map-pdl");
var svg = map.append("svg")
    .attr("width", width).attr("height", height);



$ (document).ready(function(){
    d3.json("data/merged.geojson", function (err, geoJSON) {
        var center = d3.geo.centroid(geoJSON);
        var scale = width*10;
        var offset = [width/2, height/2];
        projection = d3.geo.mercator().scale(scale).center(center).translate(offset);

        var path = d3.geoPath(projection);

        // using the path determine the bounds of the current map and use
        // these to determine better values for the scale and translation
        var bounds  = path.bounds(geoJSON);
        var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
        var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
        scale2   = (hscale < vscale) ? hscale : vscale;
        offset2  = [width - (bounds[0][0] + bounds[1][0])/2, height - (bounds[0][1] + bounds[1][1])/2];

        // new projection
        projection = d3.geo.mercator().center(center)
            .scale(scale2).translate(offset2);
        path = path.projection(projection);


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
    var width = document.getElementsByClassName("map-pdl")[0].style.width;
    var height = document.getElementsByClassName("map-pdl")[0].style.height;

    projection
        .scale(scale2)
        .translate([width/2,height/2]);

    d3.select("map-pdl").attr("width",width).attr("height",height);
    d3.select("svg").attr("width",width).attr("height",height);
        d3.selectAll("path").attr('d', path);
}
