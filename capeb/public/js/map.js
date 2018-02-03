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
                    .duration("200")
                    .style("fill", "white");
                d3.select("#titre-epci").text('');
            })


    });


});


function miniStats(regionStats, d) {
    console.log(regionStats);

    var colors = {
        $scale_color10: "rgba(240,101,85,1)",
    $scale_color20: "rgba(244,133,64,1)",
    $scale_color30: "rgba(248,165,43,1)",
    $scale_color40: "rgba(251,157,21,1)",
    $scale_color50: "rgba(255,229,0,1)",
    $scale_color60: "rgba(225,223,36,1)",
    $scale_color70: "rgba(195,216,76,1)",
    $scale_color80: "rgba(165,210,113,1)",
    $scale_color90: "rgba(135,203,151,1)",
    $scale_color100: "rgba(105,197,185,1)"
    };



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
        .then(function(json){
            var max = 415;
            var dataFrame = document.getElementsByClassName("info-distance");
            var sum = 0;
            json.values.forEach(function(value){
                sum+= parseFloat(value[2]);
            });
            sum/=json.values.length;
            dataFrame[0].getElementsByClassName("donnee")[0].innerHTML = Math.round(sum);
        });

    //7 : MP / oui/non plus représenté / camembert -> nuage de mots

    //8 : DD / quel aspect le plus représenté / bubble -> camembert

}

function matchColor(value, mean, std){
}
