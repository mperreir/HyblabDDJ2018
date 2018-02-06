"use strict";

var annee = "2012";
var anneeCambon = "2012";
var dep1 = "Finistere";
var dep2 = "Cotes_Armor";
var lastChanged = dep1;

buildHisto("#histGauche",annee,dep1);
buildHisto("#histDroite",annee,dep2);
buildHisto("#bonhomme",anneeCambon,"Campbon");
upDateTexteGauche();
upDateTexteDroite();
$("#descriptionHisto").hide();

$('#2012').on('click', function(event) {
	annee="2012";
	upDateHisto('#histGauche');
	upDateHisto('#histDroite');
	upDateTexteGauche();
	upDateTexteDroite();
	$('#2012').css('background-color','#404142');
	$('#2013, #2014, #2015, #2016').css('background-color','white');
});

$('#2013').on('click', function(event) {
	annee="2013";
	upDateHisto('#histGauche');
	upDateHisto('#histDroite');
	upDateTexteGauche();
	upDateTexteDroite();
	$('#2013').css('background-color','#404142');
	$('#2012, #2014, #2015, #2016').css('background-color','white');
});


$('#2014').on('click', function(event) {
	annee="2014";
	upDateHisto('#histGauche');
	upDateHisto('#histDroite');
	upDateTexteGauche();
	upDateTexteDroite();
	$('#2014').css('background-color','#404142');
	$('#2012, #2013, #2015, #2016').css('background-color','white');
});

$('#2015').on('click', function(event) {
	annee="2015";
	upDateHisto('#histGauche');
	upDateHisto('#histDroite');
	upDateTexteGauche();
	upDateTexteDroite();
	$('#2015').css('background-color','#404142');
	$('#2012, #2013, #2014, #2016').css('background-color','white');
});

$('#2016').on('click', function(event) {
	annee="2016";
	upDateHisto('#histGauche');
	upDateHisto('#histDroite');
	upDateTexteGauche();
	upDateTexteDroite();
	$('#2016').css('background-color','#404142');
	$('#2012, #2013, #2014, #2015').css('background-color','white');
});

//onClick for Cotes_Armor
$('#FR-22').on('click', function(event) {changeOneHisto("Cotes_Armor");});
$('#FR-29').on('click', function(event) {changeOneHisto("Finistere");});
$('#FR-35').on('click', function(event) {changeOneHisto("Ile_et_Vilaine");});
$('#FR-44').on('click', function(event) {changeOneHisto("Loire_Atlantique");});
$('#FR-49').on('click', function(event) {changeOneHisto("Maine_et_Loire");});
$('#FR-53').on('click', function(event) {changeOneHisto("Mayenne");});
$('#FR-56').on('click', function(event) {changeOneHisto("Morbihan");});

$('#C2012').on('click', function(event) {
	anneeCambon="2012";
	upDateHisto('#bonhomme');
	$('#C2012').css('background-color','#404142');
	$('#C2013, #C2014, #CC2015, #C2016').css('background-color','white');
});
$('#C2013').on('click', function(event) {
	anneeCambon="2013";
	upDateHisto('#bonhomme');
	$('#C2013').css('background-color','#404142');
	$('#C2012, #C2014, #C2015, #C2016').css('background-color','white');
});
$('#C2014').on('click', function(event) {
	anneeCambon="2014";
	upDateHisto('#bonhomme');
	$('#C2014').css('background-color','#404142');
	$('#C2012, #C2013, #C2015, #C2016').css('background-color','white');
});
$('#C2015').on('click', function(event) {
	anneeCambon="2015";
	upDateHisto('#bonhomme');
	$('#C2015').css('background-color','#404142');
	$('#C2012, #C2013, #C2014, #C2016').css('background-color','white');
});
$('#C2016').on('click', function(event) {
	anneeCambon="2016";
	upDateHisto('#bonhomme');
	$('#C2016').css('background-color','#404142');
	$('#C2012, #C2013, #C2014, #C2015').css('background-color','white');
});


function changeOneHisto(newDep){
	if(newDep != dep1 & newDep != dep2){
	  if(lastChanged == dep1){
			dep2 = newDep;
			upDateHisto("#histDroite");
			upDateTexteDroite();
	    	lastChanged = dep2;
		}else{
			dep1 = newDep;
			upDateHisto("#histGauche");
			upDateTexteGauche();
			lastChanged = dep1;
		}
	}
}

function upDateTexteGauche(){
	$("#descriptionGauche").text($("#"+dep1+" ."+annee).text());
}

function upDateTexteDroite(){
	$("#descriptionDroite").text($("#"+dep2+" ."+annee).text());
}

function upDateHisto(histo){
   if(histo == "#histGauche"){
		 		$("#histGauche").empty();
				buildHisto(histo,annee,dep1);
	 }else if (histo == "#histDroite"){
		 		$("#histDroite").empty();
		 		buildHisto(histo,annee,dep2);
	 }else if (histo == "#bonhomme"){
		 		$("#bonhomme").empty();
		 		buildHisto(histo,anneeCambon,"Campbon");
	 }
}

function buildHisto(parent, ann, dep){

	var svg = d3.select(parent),
	    margin = {top: 120, right: 80, bottom: 0, left: 80},
	    width = +svg.attr("width") - margin.left - margin.right,
	    height = +svg.attr("height") - margin.top - margin.bottom-50,
	    g = svg.append("g").attr("transform", "translate(" + (margin.left) + "," + (margin.top) + ")");

	var x = d3.scaleBand()
	    .rangeRound([0, width])
	    .paddingInner(0.05)
	    .align(0.1);

	var y = d3.scaleLinear()
	    .rangeRound([height, 0]);

	var z = d3.scaleOrdinal()
	    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	d3.csv("data/datas.csv",function(d){
	  var t=0;
	  var myVals=Object.values(d);
	  for (var i = 3; i < myVals.length; i++)
		t += parseInt(myVals[i]);

	  d.total = t;

	  return d;
	},function(error, FullData) {

    var columns = FullData.columns;
		var data;

		for (var i=0;i<FullData.length;i++){
			if(FullData[i].DEPARTEMENT == dep && FullData[i].ANNEE == ann){
				data = [FullData[i]]
			}
		}

	  var keys = columns.slice(2);
	  //console.log(keys);

	  //data.sort(function(a, b) { return b.total - a.total; });
	  x.domain(data.map(function(d) { return d.DEPARTEMENT; }));
	  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
	  z.domain(keys);

		var lastCol = "ORGANES";
		var coeffRed_histo = 0.99;
		var coeffRed =1;
		var coeffTr = 0;

	  g.append("g")
	    .selectAll("g")
	    .data(d3.stack().keys(keys)(data))
			.attr("height",100)
	    .enter().append("g")
	      .attr("fill", function(d) { return z(d.key); })
	    .selectAll("rect")
	    .data(function(d) { return d; })
	    .enter().append("rect")
	      .attr("x", function(d) { return (d.data.DEPARTEMENT); })
	      .attr("y", function(d) { return y(d[1])+coeffTr; })
	      .attr("height", function(d) { return (y(d[0]) - y(d[1])); })
				.attr("fill", getColor)
	      .attr("width", x.bandwidth());

		function getColor(d){

			if(lastCol == "ORGANES"){
				lastCol = "MORTEL";
				return "#D42E1E";
			}else if(lastCol == "MORTEL"){
				lastCol="CANCER";
				return "#F8C000";
			}else if(lastCol == "CANCER"){
				lastCol = "TOXIQUE";
				return "#7CCAE2";
			}else if(lastCol == "TOXIQUE"){
				lastCol="GENETIQUE";
				return "#008442";
			}else  if(lastCol == "GENETIQUE"){
				lastCol = "FOETUS";
				return "#58BC81";
			}else  if(lastCol == "FOETUS"){
				lastCol = "ORGANES"
				return "#AA3565";
			}else  if(lastCol == "ORGANES"){
				lastCol = "MORTEL";
				return "black";
			}else{
				return "white";
			}
		}




		if(dep == "Campbon"){
			/*g.append("image")
				.attr("xlink:href","img/Corps.svg")
				.attr("width", 420)
				.attr("height", 400)
				.attr("x",-120)
				.attr("y",-20);*/
		}else{
			//The water butt width has to be the same than the
			//histogram width
			var widthWatBut =  x.bandwidth();
			var heightWatBut =  height*1.5;

			g.append("image")
				.attr("xlink:href","img/Citerne2.svg")
				.style("width", widthWatBut)
				.style("height", heightWatBut)
				.attr("y",-90)
				.attr("preserveAspectRatio","none");
				//.attr("transform", "translate(" + width/2 + "," + height/2 + ")");

		}


	  //g.append("g")
	  //    .attr("class", "axis")
	  //    .attr("transform", "translate(0," + String(height) + ")")
	  //    .call(d3.axisBottom(x));

		g.append("g")
				.append("text")
				.attr("x",100)
				.attr("y",230)
				.text(getCleanDepName)
				.attr("font-family", "sans-serif")
				.attr("font-size", "30px")
				.style("text-anchor", "middle")

		function getCleanDepName(){
			switch(dep) {
    		case "Finistere":
        	return "Finistère";
        break;
    		case "Maine_et_Loire":
        	return "Maine-et-Loire";
        break;
				case "Loire_Atlantique":
					return "Loire-Atlantique";
				break;
				case "Ile_et_Vilaine":
					return "Ille-et-Vilaine";
				break;
				case "Cotes_Armor":
					return "Côtes-d'Armor";
				break;
    		default:
					return dep;
				break;
			}
		}


	  g.append("g")
	      .attr("class", "axis")
	      .call(d3.axisLeft(y).ticks(null, "s"))
	    .append("text")
	      .attr("x", 2)
	      .attr("y", y(y.ticks().pop()) )
	      .attr("dy", "0.32em")
	      .attr("fill", "#000")
	      .attr("font-weight", "bold")
	      .attr("text-anchor", "start")


		function getLab(d){

			if(lastLab == "ORGANES"){
				lastLab = "MORTEL";
			}else if(lastLab == "MORTEL"){
				lastLab="CANCER";
			}else if(lastLab == "CANCER"){
				lastLab = "TOXIQUE";
			}else if(lastLab == "TOXIQUE"){
				lastLab="GENETIQUE";
			}else  if(lastLab == "GENETIQUE"){
				lastLab = "FOETUS";
			}else  if(lastLab == "FOETUS"){
				lastLab = "ORGANES"
			}else  if(lastLab == "ORGANES"){
				lastLab = "MORTEL";
		  }
			return lastLab;
		}

		if(dep != dep1){
			/*
			var lastLab = "ORGANES";
		  var legend = g.append("g")
		      .attr("font-family", "sans-serif")
		      .attr("font-size", 10)
		      .attr("text-anchor", "end")
		    .selectAll("g")
		    .data(keys.slice().reverse())
		    .enter().append("g")
		      .attr("transform", function(d, i) { return "translate(0," + (120-i * 20) + ")"; });
		  legend.append("rect")
		      .attr("x", width )
		      .attr("width", 120)
		      .attr("height", 19)
		      .attr("fill", getColor);
		  legend.append("text")
		      .attr("x", width +40)
		      .attr("y", 9.5)
		      .attr("dy", "0.32em")
					.style("text-anchor", "middle")
		      .text(getLab);
			*/
		}
	});
}
