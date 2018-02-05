
//paramètres
var bandWidth = 600;
var bandHeight = 30;
var circleRadius = 40;
var borneX = 1600;

var nomAides = {"pass-permis" : "Pass permis", "pass-apprenti" : "Pass apprenti","mobili-jeune" : "Mobili jeune"};

var descriptionAides = {"pass-permis" : "Le Pass permis apprenti est une aide de 400 € (sous conditions de ressources)\n" +
    "        pour le financement du permis de conduire, destinée aux jeunes en Centre de\n" +
    "        formation d’apprentis (CFA), en contrepartie d’un engagement actif dans la\n" +
    "        vie de l’établissement.", "pass-apprenti" : "Le Pass apprenti vous aide à faire" +
    " face à vos frais de transport, d’hébergement et de restauration.","mobili-jeune" : "L’aide" +
    " au logement Mobili-Jeune s’adresse aux jeunes de moins de 30 ans en formation en alternance " +
    "dans une entreprise du secteur privé."};

function displayValue(event, variable){
    var varMin = document.getElementById("min" + variable).value;
    var varMax = document.getElementById("max" + variable).value;
    var afficheVar = document.getElementById("intervalle" + variable);
    afficheVar.innerHTML = variable + " entre " + varMin + " et " + varMax;
}

function actualize(event, variable){
    displayValue(event, variable);
    afficheBarres(datas, listeAides);
}

displayValue("", 'Age'); //affichage des données par défaut
displayValue("", 'Quotient');
displayValue("", 'Niveau');
displayValue("", 'Distance');

var margin, y,x;

var nbCatAides;
var nomCatAides = [];

var vakken,bars;

var datas = [],idSVG = [];

var xAxis, yAxis, color;

var couleurs = ["#019AC6", "#ABCD21", "#7B2F87", "#92c6db", "#086fad"];
var nbCouleursUtilisees = 3;
var couleursUtilisees = [];

var listeAides = [], jsonCircles = [];

function getAides(){
    $.getJSON( "data/aides.json", function(data) {
        margin = {top: 50, right: 20, bottom: 10, left: 95},
            width = bandWidth - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

        y = d3.scale.ordinal()
            .rangeRoundBands([0, bandHeight]);

        x = d3.scale.linear()
            .rangeRound([0, width]);

        //   nbCatAides = Object.keys(data).length; //on récupère le nombre de catégories d'aides
        nbCatAides = 1; //on récupère le nombre de catégories d'aides
        nomCatAides = [];

        $.each(data, function(i, aide) {
            var sommeMontants = 0;
            var liste = [];
            liste.boxes = [];

            nomCatAides.push(i);

            aide.forEach(function (d) {
                liste.push(d);
                liste.boxes.push({
                    name: d.nomaide,
                    x0: sommeMontants,
                    x1: d.montant + sommeMontants,
                    montant: d.montant,
                    agemin: d.agemin,
                    agemax: d.agemax,
                    niveaumin: d.niveaumin,
                    niveaumax: d.niveaumax,
                    distancemin: d.distancemin,
                    distancemax: d.distancemax,
                    quotientmin: d.quotientmin,
                    quotientmax: d.quotientmax,
                    subventionrepas: d.subventionrepas,
                    commentaire: d.subventionrepas
                });

                sommeMontants += d.montant;
            }, sommeMontants);

            datas.push(liste);
            var nomAide = String("aide-" + i);
            idSVG.push(nomAide);
        });

        for (var k = 0; k < nbCouleursUtilisees; k++){
            couleursUtilisees.push(couleurs[k]);
        }

        color = d3.scale.ordinal()
            .range(couleursUtilisees);

        xAxis = d3.svg.axis()
            .scale(x)
            .orient("top");

        yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        for (var j = 0; j < nbCatAides; j++) {

            x.domain([0, borneX]);
            y.domain(datas[j].map(function (d) { return nomCatAides[j]; }));

            listeAides.push(d3.select("#figure").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("id", idSVG[j]) //idSVG[j] contient aide-...
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")"));

            //affiche axe
            /*       listeAides[j].append("g")
                       .attr("class", "x axis")
                       .call(xAxis);*/

            listeAides[j].append("g")
                .attr("class", "y axis")
                .call(yAxis);
        }
        afficheBarres(datas, listeAides);

    });
}

getAides();

function getValueVariable(variable) {
    var intervalleVariable = [];
    if (document.getElementById("min" + variable).value < document.getElementById("max" + variable).value) {
        intervalleVariable.push(parseInt(document.getElementById("min" + variable).value, 10));
        intervalleVariable.push(parseInt(document.getElementById("max" + variable).value, 10));
    } else {
        intervalleVariable.push(parseInt(document.getElementById("max" + variable).value, 10));
        intervalleVariable.push(parseInt(document.getElementById("min" + variable).value, 10));
    }
    return intervalleVariable;
}

function afficheDescriptionAide(aide) {
    var idAide = aide.split("\ ")[0]+"-"+aide.split("\ ")[1];
    console.log(document.getElementById("description-aide"));
    console.log(document.getElementById("nom-aide"));
    document.getElementById("description-aide").childNodes[0].textContent = descriptionAides[idAide];
    document.getElementById("nom-aide").childNodes[0].textContent = nomAides[idAide];
 /*   document.getElementsByClassName("descriptionAide").style.opacity = '1';*/
    document.getElementById("description-aide").style.opacity = '1';
    document.getElementById("nom-aide").style.opacity = '1';
}

function masqueDescriptionAide(aide) {
  /*  document.getElementsByClassName("descriptionAide").style.opacity = '0';*/
    document.getElementById("description-aide").style.opacity = '0';
    document.getElementById("nom-aide").style.opacity = '0';
}

function afficheBarres(datas, listeAides){
    var age = getValueVariable('Age');
    var quotient = getValueVariable('Quotient');
    var niveau = getValueVariable('Niveau');
    var distance = getValueVariable('Distance');

    jsonCircles = [];

    for (var j = 0; j < nbCatAides; j++) {
        //on sélectionne les datas correspondantes
        var boxesU = [];
        var xU = 0;
        var previous = {name: "", montant: 0};

        datas[j].boxes.forEach(function (aide) {

            var pass = true;
            if (((aide.agemin !== null) && (aide.agemin > age[1])) || ((aide.agemax !== null) && (aide.agemax < age[0]))) {
                pass = false;
            }
            if (((aide.quotientmin !== null) && (aide.quotientmin > quotient[1])) || ((aide.quotientmax !== null) && (aide.quotientmax < quotient[0]))) {
                pass = false;
            }
            if (((aide.niveaumin !== null) && (aide.niveaumin > niveau[1])) || ((aide.niveaumax !== null) && (aide.niveaumax < niveau[0]))) {
                pass = false;
            }
            if (((aide.distancemin !== null) && (aide.distancemin > distance[1])) || ((aide.distancemax !== null) && (aide.distancemax < distance[0]))) {
                pass = false;
            }

            if (pass && aide.name === previous.name) {
                // si le précédent était la meme aide mais avec un montant inférieur, on l'enlève
                if (aide.montant > previous.montant) {
                    boxesU.pop();
                    if (xU - previous.montant >=0) {
                        xU = xU - previous.montant;
                    } else xU = 0;
                } else { //sinon, on ajoute pas celui ci
                    aide.x0 = previous.x0;
                    aide.x1 = previous.x1;
                    aide.montant = previous.montant;
                    pass = false;
                }
            }

            if (pass) {
                if ( boxesU.length >= 1 ) {
                    aide.x0 = boxesU[boxesU.length-1].x1;
                } else {
                    aide.x0 = xU;
                }
                aide.x1 = aide.montant + xU;
                boxesU.push(aide);
                xU += aide.montant;
            }
            previous = aide;
        }, xU, previous);

        var colorsCircles = ["green", "red", "blue"];

        for (var i = 0; i < boxesU.length ; i++){
            jsonCircles.push({ "x_axis": boxesU[i].x1 *(width / borneX), "y_axis": bandHeight/2, "radius": circleRadius/2, "color" : colorsCircles[i], name: "cc" });
        }

        vakken = listeAides[j].selectAll(".question")
            .data(datas[j])
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function (d) { return "translate(0," + y(d.name) + ")"; });

        bars = vakken.selectAll("rect")
            .data(boxesU)
            .enter().append("g").attr("class", "subbar");

        bars.append("rect")
            .attr("height", y.rangeBand())
            .attr("x", function (d) { return x(d.x0); }) //d.x0 au lieu de 0
            .attr("width", function (d) { return x(d.x1) - x(d.x0); }) //d.x0 au lieu de 0
            .style("fill", function (d) { return color(d.name); })
            .on('mouseover', function(d) { afficheDescriptionAide(d.name)})
            .on('mouseout', function(d) { masqueDescriptionAide(d.name)});

        bars.append("text")
            .attr("x", function (d) { return x(d.x0); })  //d.x0 au lieu de 0
            .attr("y", y.rangeBand() / 2)
            .attr("dy", "0.5em") // pour le petit décalage
            .attr("dx", "0.5em")
            .style("font", "10px sans-serif")
            //            .style("text-anchor", "begin")
            .text(function (d) { return d.name });

        vakken.insert("rect", ":first-child")
            .attr("height", y.rangeBand())
            .attr("x", "1")
            .attr("width", width)
            .attr("fill-opacity", "0.5")
            .style("fill", "#F5F5F5");

        listeAides[j].append("g")
            .attr("class", "y axis")
            .append("line")
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y2", height);

        //pour l'aspect des axes
        listeAides[j].selectAll(".axis path")
            .style("fill", "none")
            //   .style("stroke", "#00913c")
            .style("shape-rendering", "crispEdges");

        var circles = listeAides[j].selectAll("circle")
            .data(jsonCircles)
            .enter()
            .append("circle");

        var truc = listeAides[j].selectAll("g")
            .data(jsonCircles);

        var styleCircles = circles
            .attr("cx", function (d) { return d.x_axis; })
            .attr("cy", function (d) { return d.y_axis; })
            .attr("r", function (d) { return d.radius; })
            .attr("stroke","black")
            .attr("fill", function (d) { return "white"; });

        truc.append("text")
            .attr("dx", function(d){return d.x_axis-20})
            .attr("dy", function(d){return d.y_axis-30})
            .text(function(d){return d.color;});


        //listeAides[0]
        /*         var svg2 = d3.select("body").append("svg")
                     .attr("width", width2)
                     .attr("height", height2);*/

        /* Define the data for the circles */
        /*          var elem2 = svg2.selectAll("g")
                      .data(jsonCircles);*/

        /*Create and place the "blocks" containing the circle and the text */
        /*      var elemEnter2 = elem2.enter()
                  .append("g")
                  .attr("transform", function(d){return "translate("+d.x_axis+",80)"});*/

        var elem2 = listeAides[j].selectAll("g")
            .data(jsonCircles);

        /*      var elemEnter2 = elem2.enter()
                  .append("g")
                  .attr("transform", function(d){return "translate("+d.x_axis+",80)"});*/

        /*             var circle2 = elem2.append("circle")
                         .attr("r", function(d){return d.radius} )
                         .attr("cx", function (d) { return d.x_axis; })
                         .attr("cy", function (d) { return 0; })
                         .attr("stroke","black")
                         .attr("fill", "blue");*/

        /*      elem2.append("text")
                  .attr("dx", function(d){return 50})
                  .text(function(d){console.log(d);return d.x_axis});*/



        /*         var width2 = 960,
                     height2 = 500;

                 var svg = d3.select("body").append("svg")
                     .attr("width", width2)
                     .attr("height", height2);

                     // Define the data for the circles
                     var elem = svg.selectAll("g")
                         .data(jsonCircles);

                     //Create and place the "blocks" containing the circle and the text
                     var elemEnter = elem.enter()
                         .append("g")
                         .attr("transform", function(d){return "translate("+d.x_axis+",20)"});

                     //Create the circle for each block
                     var circle = elemEnter.append("circle")
                         .attr("r", function(d){return d.radius} )
                         .attr("stroke","black")
                         .attr("fill", "blue");

                     // Create the text for each block
                     elemEnter.append("text")
                         .attr("dx", function(d){return -5})
                         .text(function(d){return "blop"});*/



    }
}