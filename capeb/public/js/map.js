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

    //1 : conjoncture / number / multibubble
    fetch("/capeb/data/" + d.properties.siren_epci + "/conjoncture")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
            var dataFrame = document.getElementsByClassName("info-conjoncture")[0];
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = parseFloat(json.values[0][0]).toFixed(1);
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(json.values[0][0], 2.87, 3.78, 0.182, 0.244, false)];
        });


    //2 : Investissement /  / chart over time compared with region
    fetch("/capeb/data/" + d.properties.siren_epci + "/investissement")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
            var dataFrame = document.getElementsByClassName("info-investissement")[0];
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = (json.values[3][1] * 100).toFixed(1);
            ; // only 2017 and percentage of yes
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(json.values[3][1], 0, 0.15, 0.03, 0.17, false)];
        });


	//3 & 8 & 7 pour eviter re faire un fetch
		fetch("/capeb/data/" + d.properties.siren_epci + "/stats")
		.then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (stats) {
            var contrats = stats.Contrats.values.slice(1);
            var stat = contrats.map(function(val, id) {
                return {
                    "name": stats.Contrats.labels[id + 1],
                    "value": parseInt(val[val.length - 1])
                };
        });
            stat = stat.sort(function(a, b) {return b.value - a.value});

            document.getElementsByClassName("info-contrat")[0].innerHTML = "";
            var h = 1
            $(".info-contrat").append("<h1 class='donneetexte n" + h + "'>" + stat[0].name + "</h>");

            for (var i = 1; i < 4; i++) {
                if (stat[i].value < stat[i - 1].value) {
                    h++;
                }
                $(".info-contrat").append("<h1 class='donneetexte n" + h + "'>" + stat[i].name + "</h>")
            }

            //8 : DD / quel aspect le plus représenté / bubble -> camembert
            var names = stats.Developpement_durable.values[0]
            var count = stats.Developpement_durable.values[1]
            var stat2 = names.map(function(val, id) {return {"name": names[id], "value": parseInt(count[id])};});
            stat2 = stat2.sort(function(a, b) {return b.value - a.value});
            $(".info-dd h1").text(stat2[0].name)
            
            //7 : MP / oui/non plus représenté / camembert -> nuage de mots
			var dataFrame = document.getElementsByClassName("info-mp")[0];
            var mean = parseFloat(stats.Marches_publics.values[0]);
			console.log(mean * 100)
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = Math.round(mean * 100);
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(mean, 0, 0.227, 0.227/5, (0.5 - 0.227)/5, true)];
        });

    fetch("/capeb/data/" + d.properties.siren_epci + "/sunburst")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (jsonContrats) {
            //$("svg#sunburst").remove();
            //sunBurst(jsonContrats);
        });
    //4 : embauche / métier qui embauche le plus/ double chart with rotation
    fetch("/capeb/data/" + d.properties.siren_epci + "/recrutements")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
            var asNumbers = json.values[0].map(Number);
            var indexOfMax = asNumbers.indexOf(Math.max(...asNumbers));
            document.getElementsByClassName("info-emploi")[0].getElementsByClassName("donneetexte")[0].innerHTML = json.labels[indexOfMax];
        });

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
            var dataFrame = document.getElementsByClassName("info-distance")[0];
            var mean = 0;
            json.values.forEach(function(value){
                mean+= parseFloat(value[2]);
            });
            mean/=json.values.length;
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = Math.round(mean);
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(mean, 24, 59, 7, 13.2, true)];
        });



}

//order = true : low is good
//order = false : high is good
function matchColor(value, min, mean, firstInc, secondInc, order){
    var r;
    if(value <= min+firstInc ){
        r = (order ? 9 : 0);
    } else if(value<= min+firstInc *2){
        r = (order ? 8 : 1);
    } else if(value<= min+firstInc *3){
        r =  (order ? 7 : 2);
    } else if(value<= min+firstInc *4){
        r =  (order ? 6 : 3);
    } else if(value<= min+firstInc *5){
        r =  (order ? 5 : 4);
    } else if(value<= mean+secondInc){
        r =  (order ? 4 : 5);
    } else if(value<= mean+secondInc *2){
        r =  (order ? 3 : 6);
    } else if(value<= mean+secondInc *3){
        r =  (order ? 2 : 7);
    } else if(value<= mean+secondInc *4){
        r =  (order ? 1 : 8);
    } else if(value<= mean+secondInc *5){
        r =  (order ? 1 : 9);
    }
    return r;
}

