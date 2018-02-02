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
                document.getElementById("page3").style.display = "block";
                $('html,body').animate({
                        scrollTop: $("#page3").offset().top},
                    'slow');
//sunBurst chart
				fetch("/capeb/data/" + d.properties.siren_epci + "/sunburst")
                    .then(function (value) {
                        return value.json();
                    })
                    .catch(function (error) {
                        console.log("error");
                        console.log(error);
                        return {};
                    })
                    .then(function(json){
						$("svg#sunburst").remove();
                        sunBurst(json);
                    });
                document.location.href = document.location + "/slide2";
                document.getElementById("nom_epci").innerText = d.properties.nom_comple;                

                // sunburst and basic charts
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
						console.log(d.properties.siren_epci);

                        flush();
                        drawBarChart(json.Activite, "Répartion des activités entre 2014 et 2017");
                        drawPieChart(json.Developpement_durable, "Dévoloppement durable en 2016");
                        drawPieChart(json.Marches_publics, "Marchés publics");
                        drawLineChart(json.Contrats, "Contrats");
                        //sunBurst(json);

                    });
				/*
                // bubble chart
                fetch("/capeb/data/" + d.properties.siren_epci + "/bubble")
                    .then(function (value) {
                        return value.json();
                    })
                    .catch(function (error) {
                        console.log("error");
                        console.log(error);
                        return {};
                    })
                    .then(function(json){
                        // drawBubbleChart(json);
                    });
				*/
				
				
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


