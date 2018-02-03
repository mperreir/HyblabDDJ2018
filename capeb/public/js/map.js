"use strict";
document.getElementsByClassName("backToMap")[0].addEventListener("click", function(){
    var location = document.location.href;
    document.location.href = location.slice(0, location.lastIndexOf("/"));

    $.fn.fullpage.setAllowScrolling(true, "up, down");
    $.fn.fullpage.setKeyboardScrolling(true, "up, down");

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
                //disable scroll up and down on dataviz slide
                $.fn.fullpage.setAllowScrolling(false, "up, down");
                $.fn.fullpage.setKeyboardScrolling(false, "up, down");

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
        .then(function(json){
            var dataFrame = document.getElementsByClassName("info-conjoncture")[0];
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = parseFloat(json.values[0][0]).toFixed(2);
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(json.values[0][0], 2.87, 3.78, 0.182, 0.244)];
        });


    //2 : Investissement /  / chart over time compared with region

	//3 & 8 pour eviter re faire un fetch
		fetch("/capeb/data/" + d.properties.siren_epci + "/stats")
		.then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function(stats){
			//3 : contrats / words / sunBurst chart

           var contrats = stats.Contrats.values.slice(1)
           var stat = contrats.map((val, id) => {return {"name": stats.Contrats.labels[id + 1] , "value" : parseInt(val[val.length - 1])};})
           stat = stat.sort((a, b) => {return b.value - a.value})
           
           document.getElementsByClassName("info-contrat")[0].innerHTML = ""
           var h = 1
           $(".info-contrat").append("<h" + h + " class='donnee'>" + stat[0].name + "</h" + h + ">")

           for(var i = 1; i < 4; i++){
			   if(stat[i].value < stat[i - 1].value){
				 h++;
			   }
			   $(".info-contrat").append("<h" + h + " class='donnee'>" + stat[i].name + "</h" + h + ">")
		   }

			//8 : DD / quel aspect le plus représenté / bubble -> camembert
			var names = stats.Developpement_durable.values[0]
			var count = stats.Developpement_durable.values[1]
			
			var stat = names.map((val, id) => {return {"name": names[id] , "value" : parseInt(count[id])};})
			stat = stat.sort((a, b) => {return b.value - a.value})
			$(".info-dd h1").text(stat[0].name)
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
            var dataFrame = document.getElementsByClassName("info-distance")[0];
            var mean = 0;
            json.values.forEach(function(value){
                mean+= parseFloat(value[2]);
            });
            mean/=json.values.length;
            dataFrame.getElementsByClassName("donnee")[0].innerHTML = Math.round(mean);
            dataFrame.style.backgroundColor = colorsForRegion[matchColor(mean, 24, 59, 7, 13.2)];
        });

    //7 : MP / oui/non plus représenté / camembert -> nuage de mots


}

function matchColor(value, min, mean, firstInc, secondInc){
    if(value <= min+firstInc ){
        return 9;
    } else if(value<= min+firstInc *2){
        return 8;
    } else if(value<= min+firstInc *3){
        return 7;
    } else if(value<= min+firstInc *4){
        return 6;
    } else if(value<= min+firstInc *5){
        return 5;
    } else if(value<= mean+secondInc){
        return 4;
    } else if(value<= mean+secondInc *2){
        return 3;
    } else if(value<= mean+secondInc *3){
        return 2;
    } else if(value<= mean+secondInc *4){
        return 1;
    } else if(value<= mean+secondInc *5){
        return 0;
    }
}

