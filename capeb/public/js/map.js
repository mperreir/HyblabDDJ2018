"use strict";
// will be used in dashboard too
var colorsForRegion = [
    "rgba(240,101,85,1)",
    "rgba(244,133,64,1)",
    "rgba(248,165,43,1)",
    "rgba(251,157,21,1)",
    "rgba(255,229,0,1)",
    "rgba(225,223,36,1)",
    "rgba(195,216,76,1)",
    "rgba(165,210,113,1)",
    "rgba(135,203,151,1)",
    "rgba(105,197,185,1)"
];

var conjonctureEPCI = {};


function initializeDashboard() {
    var html = document.getElementById("regionDashboard").innerHTML;
    var sectionDashboard = document.getElementById("dashboard-slide");
    sectionDashboard.innerHTML = html;
    document.getElementsByClassName("backToMap")[0].addEventListener("click", function () {
        var location = document.location.href;
        document.location.href = location.slice(0, location.lastIndexOf("/"));
        document.getElementById("cacheEPCI").innerHTML = "";
        document.getElementsByClassName("conclusion")[0].style.display = "block";
    });
    document.getElementById("nom_epci").innerText = "Région";
    document.getElementById("switchToRegion").checked = true;
    document.getElementById("switchToRegion").addEventListener("change", function () {
        if (this.checked) {
            initializeDashboard();
            document.getElementById("niveau-zoom").style.opacity = 1;
            var goToData = document.getElementsByClassName('goToData');
            for (var i = 0; i < goToData.length; i++) {
                goToData[i].style.display = "none";
            }
        } else {
            var idEpci = document.getElementById("cacheEPCI").innerHTML;
            var path = $(document.getElementById(idEpci));
            onSvgClick(path[0].__data__);
            document.getElementById("niveau-zoom").style.opacity = 0.2;
            var goToData = document.getElementsByClassName('goToData');
            for (var i = 0; i < goToData.length; i++) {
                goToData[i].style.display = "block";
            }
        }
    });
}

$(document).ready(function () {

    fetch("/capeb/data/conjoncture_map")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
            json.values.forEach(function (value) {
                conjonctureEPCI[value[0]] = value[1];
            });
            initializeDashboard();
            drawMap(conjonctureEPCI);
            d3.select(window).on('resize', function () {
                $(".map-pdl").innerHTML = "";
                drawMap();
            });
            $()
        });
});

function onSvgClick(d) {
    fetch("/capeb/data/regionStats")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
            document.getElementById("cacheEPCI").innerHTML = d.properties.siren_epci;
            document.getElementById("nom_epci").innerText = d.properties.nom_comple;
            createModal();
            miniStats(json, d);
            if (document.getElementById("switchToRegion").checked !== false) {
                document.getElementById("switchToRegion").checked = false;
            }
        });
}

function drawMap(conjonctureEpci) {
    var mapPdl = $(".map-pdl");
    var viewportWidth = mapPdl.width();
    var viewportHeight = mapPdl.height();
    var width = viewportWidth;
    var height = viewportHeight;

    var map = d3.select(".map-pdl");

    var svg = document.getElementById("svg-map");
    if (svg !== null) {
        svg.remove();
    }
    svg = map.append("svg")
        .attr("width", width).attr("height", height);
    svg.attr("id", "svg-map");

    d3.json("data/merged.geojson", function (err, geoJSON) {
        var center = d3.geo.centroid(geoJSON);
        var scale = width * 10;
        var offset = [width / 2, height / 2];
        var projection = d3.geo.mercator().scale(scale).center(center).translate(offset);

        var path = d3.geoPath(projection);

        // using the path determine the bounds of the current map and use
        // these to determine better values for the scale and translation
        var bounds = path.bounds(geoJSON);
        var hscale = scale * width / (bounds[1][0] - bounds[0][0]);
        var vscale = scale * height / (bounds[1][1] - bounds[0][1]);
        var scale2 = (hscale < vscale) ? hscale : vscale;
        var offset2 = [width - (bounds[0][0] + bounds[1][0]) / 2, height - (bounds[0][1] + bounds[1][1]) / 2];

        // new projection
        projection = d3.geo.mercator().center(center)
            .scale(scale2).translate(offset2);
        path = path.projection(projection);


        var map = svg.selectAll("path").data(geoJSON.features);
        map.enter()
            .append("path")
            .attr("fill", "white")
            .attr("stroke-width", "0.1px")
            .attr("stroke", "rgba( 29, 29, 27, 0.5 )")
            .attr("id", function (d) {
                return d.properties.siren_epci;
            })
            .attr("d", path)
            .on("click", function (d) {
                onSvgClick(d);
                // move to dashboard
                document.location.href = document.location + "/slide2";
                document.getElementById("nom_epci").innerText = d.properties.nom_comple;
            })
            .on("mouseover", function (d) {
                var conjoncture = conjonctureEpci[d.properties.siren_epci];
                var color = colorsForRegion[matchColor(conjoncture, 0, 5.38, 5.38 / 5, (7.19 - 5.38) / 5, false)];
                d3.select(this).transition()
                    .duration("0")
                    .style("fill", color)
                    .style("cursor", "pointer");
                d3.select("#titre-epci").text(d.properties.nom_comple);
            })
            .on("mouseout", function () {
                d3.select(this).transition()
                    .delay("200")
                    .duration("3000")
                    .style("fill", "white");
                d3.select("#titre-epci").text('');
            })
    });
}
