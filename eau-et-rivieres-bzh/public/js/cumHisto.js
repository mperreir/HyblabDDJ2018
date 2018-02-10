"use strict";


//These global variables indicates the year currently selected by user for the
//datavis on first and third page respectively
var annee = "2012";
var anneeCambon = "2012";
//These global variables indicates what are the two area currently selected by
//for the first datavis
var dep1 = "Finistere";
var dep2 = "Cotes_Armor";
//This indicates what is the last area that was changed (left or right one),
//so we can know what is the next area to change (right or left one)
var lastChanged = dep1;
//These indicates what is the right color to ploted
//For the histograms
var colCounter = 0;
var colIndex = 1;

//Build the initial histograms for the four datavis
buildHisto("#histGauche",annee,dep1);
buildHisto("#histDroite",annee,dep2);
buildHisto("#histTemps","All",dep1);
buildHisto("#bonhomme",anneeCambon,"Campbon");
//Set text for initial left and right histograms of the first page
upDateTexteGauche();
upDateTexteDroite();
$("#descriptionHisto").hide();

//Set the actions for the timeline buttons of the first page
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

//Set the actions for the area buttons for first page
$('#FR-22').on('click', function(event) {changeOneHisto("Cotes_Armor");});
$('#FR-29').on('click', function(event) {changeOneHisto("Finistere");});
$('#FR-35').on('click', function(event) {changeOneHisto("Ile_et_Vilaine");});
$('#FR-44').on('click', function(event) {changeOneHisto("Loire_Atlantique");});
$('#FR-49').on('click', function(event) {changeOneHisto("Maine_et_Loire");});
$('#FR-53').on('click', function(event) {changeOneHisto("Mayenne");});
$('#FR-56').on('click', function(event) {changeOneHisto("Morbihan");});

//Set the action for the timeline buttons of the third page
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

//Set the actions for the button "suivant" of the page "en savoir plus"
$('#suivant').click(function() {
	  $("#histTemps").empty();

		if ($('#cotesdarmor').css('display') != 'none') {

			buildHisto("#histTemps","All","Finistere");
		}
		else if ($('#finistere').css('display') != 'none') {
			buildHisto("#histTemps","All","Ile_et_Vilaine");
		}
		else if ($('#illeetvilaine').css('display') != 'none') {
			buildHisto("#histTemps","All","Loire_Atlantique");
		}
		else if ($('#loireatlantique').css('display') != 'none') {
			buildHisto("#histTemps","All","Maine_et_Loire");
		}
		else if ($('#maineetloire').css('display') != 'none') {
			buildHisto("#histTemps","All","Mayenne");
		}
		else if ($('#mayenne').css('display') != 'none') {
			buildHisto("#histTemps","All","Morbihan");
		}
		else {
			buildHisto("#histTemps","All","Cotes_Armor");
		}
});
//Update one histogram in the first datavis
//The one updated is the one with the oldest last update
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
//Update the description text for the two histograms
//of the first datavis
function upDateTexteGauche(){
	$("#descriptionGauche").text($("#"+dep1+" ."+annee).text());
}

function upDateTexteDroite(){
	$("#descriptionDroite").text($("#"+dep2+" ."+annee).text());
}

//Update one of the two histograms of the first datavis
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
//Display one cumulated histograms on a section parent
// @param parent: the section to display the histo on (string)
// @param ann: the year to choose to display the data (string)
// @param dep: the area to choose to display the data (string)
function buildHisto(parent, ann, dep){

	var svg = d3.select(parent),
	    margin = {top: 50, right: 120, bottom: 0, left: 80},
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

	//Compute the total height of each histogramms
	d3.csv("data/datas.csv",function(d){
	  var t=0;
	  var myVals=Object.values(d);
	  for (var i = 3; i < myVals.length; i++)
		t += parseInt(myVals[i]);

	  d.total = t;

	  return d;
	},function(error, FullData) {

    var columns = FullData.columns;
		var data = [];

		if(ann != "All"){
			for (var i=0;i<FullData.length;i++){
				if(FullData[i].DEPARTEMENT == dep && FullData[i].ANNEE == ann){
					data = [FullData[i]];
				}
			}
		}else{
			for (var i=0;i<FullData.length;i++){
				if(FullData[i].DEPARTEMENT == dep){
					data.push(FullData[i]);
				}
			}
		}

	  var keys = columns.slice(2);

	  x.domain(data.map(function(d) { return d.ANNEE; }));
	  y.domain([0, d3.max(data, function(d) { return 60; })]).nice();
	  z.domain(keys);

		var coeffRed_histo = 0.99;
		var coeffRed =1;
		var coeffTr = 0;
		//The colors used for all the histograms
		var colDict = {
				1: "#D42E1E",
				2: "#F8C000",
				3: "#7CCAE2",
				4: "#008442",
				5: "#58BC81",
				6: "#AA3565",
		};

		//Reseting the color variables
		colCounter = 0;
		colIndex = 1;

		//Return the next color for the histogramms
		function getColor(d){

			if(colCounter < data.length-1){
				colCounter++;
				return colDict[colIndex];
			}else{
				colCounter = 0;
				colIndex = colIndex + 1;
				return colDict[colIndex-1];
			}
		}

		//Plot the cumulated histograms
		//The rectangle are ploted from left to right and then
		//from bottom to top
	  g.append("g")
	    .selectAll("g")
	    .data(d3.stack().keys(keys)(data))
	    .enter().append("g")
	      .attr("fill", function(d) { return z(d.key); })
	    .selectAll("rect")
	    .data(function(d) { return d; })
	    .enter().append("rect")
	      .attr("x", function(d) { return x(d.data.ANNEE)})
	      .attr("y", function(d) {return y(d[1])+1; })
	      .attr("height", function(d) {return (y(d[0]) - y(d[1])); })
				.attr("fill", getColor)
	      .attr("width", coeffRed_histo*x.bandwidth());


		if (ann != "All" && dep != "Campbon"){
			//Add a water butt mask and the name of the area
			//The water butt width has to be the same than the
			//histogram width
			var widthWatBut =  x.bandwidth();
			var coeffHeightWattBut = 0.1;
			var heightWatBut = (height+2)*(1+coeffHeightWattBut);

			//Return the clean area name (without underscore and with accents)
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

			g.append("image")
				.attr("xlink:href","img/Citerne2.svg")
				.style("width", widthWatBut)
				.style("height", heightWatBut)
				.attr("y",-coeffHeightWattBut*height)
				.attr("preserveAspectRatio","none");
			console.log(heightWatBut);
			g.append("g")
					.append("text")
					.attr("x",x.bandwidth()/2)
					.attr("y",height+50)
					.text(getCleanDepName)
					.attr("font-family", "sans-serif")
					.attr("font-size", "30px")
					.style("text-anchor", "middle");
		}else if (dep == "Campbon"){
			//Add a bottle mask for the campbon histogram
			var widthBottle =  x.bandwidth();
			var coeffHeightBottle = 0.2;
			var heightBottle = (height+2)*(1+coeffHeightBottle);

			g.append("image")
				.attr("xlink:href","img/bouteille.svg")
				.style("width", widthBottle)
				.style("height", heightBottle)
				.attr("y",-coeffHeightBottle*height)
				.attr("preserveAspectRatio","none");
		}

		//Add y axis (ticks)
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

		//Add a caption for the y axis
		var trX = -80;
		var trY = -35;
		g.append("g")
				.append("text")
				.attr("x",trX)
				.attr("y",trY)
				.text("Nombre")
				.attr("font-family", "sans-serif")
				.attr("font-size", "15px")
				.style("text-anchor", "start");
		g.append("g")
				.append("text")
				.attr("x",trX)
				.attr("y",trY+15)
				.text("de pesticides")
				.attr("font-family", "sans-serif")
				.attr("font-size", "15px")
				.style("text-anchor", "start");

	});
}
