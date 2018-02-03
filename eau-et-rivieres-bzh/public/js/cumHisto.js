"use strict";

var annee = "2012";
var dep1 = "Finistere";
var dep2 = "Cotes_Armor";
var lastChanged = dep1;
buildHisto("#histGauche",annee,dep1);
buildHisto("#histDroite",annee,dep2);

$('#2012').on('click', function(event) {annee="2012";upDateHisto('#histGauche');upDateHisto('#histDroite');});
$('#2013').on('click', function(event) {annee="2013";upDateHisto('#histGauche');upDateHisto('#histDroite');});
$('#2014').on('click', function(event) {annee="2014";upDateHisto('#histGauche');upDateHisto('#histDroite');});
$('#2015').on('click', function(event) {annee="2015";upDateHisto('#histGauche');upDateHisto('#histDroite');});
$('#2016').on('click', function(event) {annee="2016";upDateHisto('#histGauche');upDateHisto('#histDroite');});

//onClick for Cotes_Armor
$('#FR-22').on('click', function(event) {changeOneHisto("Cotes_Armor")});
$('#FR-29').on('click', function(event) {changeOneHisto("Finistere")});
$('#FR-35').on('click', function(event) {changeOneHisto("Ile_et_Vilaine")});
$('#FR-44').on('click', function(event) {changeOneHisto("Loire_Atlantique")});
$('#FR-49').on('click', function(event) {changeOneHisto("Maine_et_Loire")});
$('#FR-53').on('click', function(event) {changeOneHisto("Mayenne")});
$('#FR-56').on('click', function(event) {changeOneHisto("Morbihan")});

function changeOneHisto(newDep){
  if(lastChanged == dep1){
		dep2 = newDep;
		upDateHisto("#histDroite");
    lastChanged = dep2;
	}else{
		dep1 = newDep;
		upDateHisto("#histGauche");
		lastChanged = dep1;
	}
}

function upDateHisto(histo){
   if(histo == "#histGauche"){
		 		$("#histGauche").empty();
				buildHisto(histo,annee,dep1);
	 }else{
		 		$("#histDroite").empty();
		 		buildHisto(histo,annee,dep2);
	 }
}

function buildHisto(parent, ann, dep){

	var svg = d3.select(parent),
	    margin = {top: 20, right: 20, bottom: 30, left: 40},
	    width = +svg.attr("width") - margin.left - margin.right,
	    height = +svg.attr("height") - margin.top - margin.bottom,
	    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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

	  data.sort(function(a, b) { return b.total - a.total; });
	  x.domain(data.map(function(d) { return d.DEPARTEMENT; }));
	  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
	  z.domain(keys);

	  g.append("g")
	    .selectAll("g")
	    .data(d3.stack().keys(keys)(data))
	    .enter().append("g")
	      .attr("fill", function(d) { return z(d.key); })
	    .selectAll("rect")
	    .data(function(d) { return d; })
	    .enter().append("rect")
	      .attr("x", function(d) { return x(d.data.DEPARTEMENT); })
	      .attr("y", function(d) { return y(d[1]); })
	      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
	      .attr("width", x.bandwidth());

	  g.append("g")
	      .attr("class", "axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(d3.axisBottom(x));

	  g.append("g")
	      .attr("class", "axis")
	      .call(d3.axisLeft(y).ticks(null, "s"))
	    .append("text")
	      .attr("x", 2)
	      .attr("y", y(y.ticks().pop()) + 0.5)
	      .attr("dy", "0.32em")
	      .attr("fill", "#000")
	      .attr("font-weight", "bold")
	      .attr("text-anchor", "start")
	      .text("Population");

	  var legend = g.append("g")
	      .attr("font-family", "sans-serif")
	      .attr("font-size", 10)
	      .attr("text-anchor", "end")
	    .selectAll("g")
	    .data(keys.slice().reverse())
	    .enter().append("g")
	      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	  legend.append("rect")
	      .attr("x", width - 19)
	      .attr("width", 19)
	      .attr("height", 19)
	      .attr("fill", z);

	  legend.append("text")
	      .attr("x", width - 24)
	      .attr("y", 9.5)
	      .attr("dy", "0.32em")
	      .text(function(d) { return d; });
	});
}
