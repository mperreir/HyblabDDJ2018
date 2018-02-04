'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts


//---------------------
// Initialise le fullpage
var q = [0,0,0,0,0]
$(document).ready(function() {
    $('#fullpage').fullpage();
});
var reponses;
fetch('data/reponses.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {

        reponses = json;
});



function Light(){
    $("#section_illu1").fadeTo("slow", 0.1,function(){
        $("#section_illu1").css({'background-image':'url(img/Illu1/daynight.svg)'});
        $("#nuit").css({'visibility':'visible'});
        $("#jour").css({'visibility':'visible'});
    }).fadeTo('slow', 1);
};



function reponse(bouton)
{
  var x = bouton.parentNode.id;
  var j = 0;
  var rep;
  var more;
  switch(x) {
    case "q1":
        j = 0
        rep = reponses.q1.r1
        var text = document.getElementById('r1');
        break;
    case "q2":
        j = 1
        rep = reponses.q2.r2
        var text = document.getElementById('r2');
        break;
    case "q3":
        j = 2
        rep = reponses.q3.r3
        var text = document.getElementById('r3');
        break;
    case "q4":
        j = 3
        rep = reponses.q4.r4
        var text = document.getElementById('r4');
        more = reponses.q4.more
        var divmore = document.getElementById('more2');
        var textmore = document.getElementById('more21');
        break;
    case "q5":
        j = 4

}
  if(q[j] == 0){
    var parent = bouton.parentNode.childNodes;
    for (var i=1; i< 6; i = i+2)
    {
      if(parent[i].attributes[1].nodeValue =="v button")
      {
        parent[i].style.border="2px solid #4CAF50"
        parent[i].style.color="#4CAF50"
      }
      else
      {
        parent[i].style.border="2px solid #F53855"
        parent[i].style.color="#F53855"
      }

    }
    text.innerText = rep;
    text.style.display = "block";
    text.style.marginBottom = "40px";
    if (more)
    {
      textmore.innerText = more;
      divmore.style.display = "block";
    }

    q[j] == 1
  }
}









// Popmotion
// const { easing, tween, styler } = window.popmotion;
//
// const divStyler = styler(document.querySelector('#train'));
// var myTarget=document.querySelectorAll('#train');
//
//
// tween({
//   from: 200,
//   to: { x: 800, y:500},
//   duration: 1000,
//   // ease: easing.backOut,
//   // flip: 1,
//   // elapsed: 500,
//   // loop: 5,
//   // yoyo: 5
// }).start(divStyler.set);

$(function(){
    $(".polytechs").hover(function(){
        $(".polytech").css({opacity: 1.0});
    }
    ,function(){
        $(".polytech").css({opacity: 0.5});
    }),
    $(".agrs").hover(function(){
        $(".agr").css({opacity: 1.0});
    }
    ,function(){
        $(".agr").css({opacity: 0.5});
    }),
    $(".audencias").hover(function(){
        $(".audencia").css({opacity: 1.0});
    }
    ,function(){
        $(".audencia").css({opacity: 0.5});
    }),
    $(".journalistes").hover(function(){
        $(".journaliste").css({opacity: 1.0});
    }
    ,function(){
        $(".journaliste").css({opacity: 0.5});
    });
});



// chartjs
// Load a dummy json file using the fetch API
fetch('data/nb_V_A_T.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {


        // Get the context of the canvas element we want to select
        var ctx = document.getElementById("myLineChart").getContext("2d");

        // Instantiate a new chart
        var myLineChart = new Chart(ctx , {
            type: "line",
            data: json,
            options : {
               legend: {
                   display: true,
                   position : "bottom",
                   fullWidth : true
               }

             }
        });
    });
// JS Slide 3 --------------------------------------------------
var acc_grav_vehicule;
fetch('data/acc_grav_vehicule.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {

        acc_grav_vehicule = json;
    });
$( "#voiture" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/voiture_graphique.svg" ) {
      $( "#camion" ).css("opacity", "0.5");
      $( "#pieton" ).css("opacity", "0.5");
      $( "#voiture" ).css("opacity", "1");
      $( "#moto" ).css("opacity", "0.5");
      $( "#img_train_slide3" ).css("opacity", "0.5");
  }

});

$( "#voiture" ).click(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/voiture_graphique.svg" ) {
    $( "#voiture" ).css("opacity", "1");
    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("margin-top", "7%");
      $("#pie_veh").css("height", "40%");
      $("#pie_veh").attr("src", "img/Vehicules/voiture_graphique.svg");

    });
    $("#pie_veh").fadeIn("slow");
    $("#grave").fadeOut("slow", function() {
      $("#grave p").text("dont "+ acc_grav_vehicule.voiture.indemme + "% d'indemmes.")
    });
    $("#grave").fadeIn("slow");

    $("#leger").fadeOut("slow");
    $("#leger").fadeOut("slow", function() {
      $("#leger p").text("dont "+ acc_grav_vehicule.voiture.leger + "% de blessé légées.")
    });
    $("#leger").fadeIn("slow");

    $("#hospitalise").fadeOut("slow");
    $("#hospitalise").fadeOut("slow", function() {
      $("#hospitalise p").text("dont "+ acc_grav_vehicule.voiture.hospitalise + "% d'hospitalisées.")
    });
    $("#hospitalise").fadeIn("slow");

    $("#mort").fadeOut("slow");
    $("#mort").fadeOut("slow", function() {
      $("#mort p").text("dont "+ acc_grav_vehicule.voiture.mort + "% de mort.")
    });
    $("#mort").fadeIn("slow");

    $("#infos_accidents").fadeOut("slow");
    $("#infos_accidents").fadeOut("slow", function() {
      $("#infos_accidents").text("Sur "+ acc_grav_vehicule.nb_acc+" accidents, " +acc_grav_vehicule.voiture.nb_acc + " sont causées par des voitures.")
    });
    $("#infos_accidents").fadeIn("slow");
  }
});

$( "#camion" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/camion_graphique.svg" ) {
    $( "#camion" ).css("opacity", "1");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");
  }
});

$( "#camion" ).click(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/camion_graphique.svg" ) {
    $( "#camion" ).css("opacity", "1");
    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("margin-top", "5%");
      $("#pie_veh").css("height", "45%");
      $("#pie_veh").attr("src", "img/Vehicules/camion_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
    $("#grave").fadeOut("slow", function() {
      $("#grave p").text("dont "+ acc_grav_vehicule.camion.indemme + "% d'indemmes.")
    });
    $("#grave").fadeIn("slow");

    $("#leger").fadeOut("slow");
    $("#leger").fadeOut("slow", function() {
      $("#leger p").text("dont "+ acc_grav_vehicule.camion.leger + "% de blessé légées.")
    });
    $("#leger").fadeIn("slow");

    $("#hospitalise").fadeOut("slow");
    $("#hospitalise").fadeOut("slow", function() {
      $("#hospitalise p").text("dont "+ acc_grav_vehicule.camion.hospitalise + "% d'hospitalisées.")
    });
    $("#hospitalise").fadeIn("slow");

    $("#mort").fadeOut("slow");
    $("#mort").fadeOut("slow", function() {
      $("#mort p").text("dont "+ acc_grav_vehicule.camion.mort + "% de mort.")
    });
    $("#mort").fadeIn("slow");

    $("#infos_accidents").fadeOut("slow");
    $("#infos_accidents").fadeOut("slow", function() {
      $("#infos_accidents").text("Sur "+ acc_grav_vehicule.nb_acc+" accidents, " +acc_grav_vehicule.camion.nb_acc + " sont causées par des camions.")
    });
    $("#infos_accidents").fadeIn("slow");
  }
});

$( "#moto" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/moto_graphique.svg" ) {
    $( "#moto" ).css("opacity", "1");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#camion" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");

  }

});

$( "#moto" ).click(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/moto_graphique.svg" ) {
    $( "#moto" ).css("opacity", "1");
    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("margin-top", "5%");
      $("#pie_veh").css("height", "50%");
      $("#pie_veh").attr("src", "img/Vehicules/moto_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
    $("#grave").fadeOut("slow", function() {
      $("#grave p").text("dont "+ acc_grav_vehicule.moto.indemme + "% d'indemmes.")
    });
    $("#grave").fadeIn("slow");

    $("#leger").fadeOut("slow");
    $("#leger").fadeOut("slow", function() {
      $("#leger p").text("dont "+ acc_grav_vehicule.moto.leger + "% de blessé légées.")
    });
    $("#leger").fadeIn("slow");

    $("#hospitalise").fadeOut("slow");
    $("#hospitalise").fadeOut("slow", function() {
      $("#hospitalise p").text("dont "+ acc_grav_vehicule.moto.hospitalise + "% d'hospitalisées.")
    });
    $("#hospitalise").fadeIn("slow");

    $("#mort").fadeOut("slow");
    $("#mort").fadeOut("slow", function() {
      $("#mort p").text("dont "+ acc_grav_vehicule.moto.mort + "% de mort.")
    });
    $("#mort").fadeIn("slow");

    $("#infos_accidents").fadeOut("slow");
    $("#infos_accidents").fadeOut("slow", function() {
      $("#infos_accidents").text("Sur "+ acc_grav_vehicule.nb_acc+" accidents, " +acc_grav_vehicule.moto.nb_acc + " sont causées par des moto.")
    });
    $("#infos_accidents").fadeIn("slow");
  }
});

$( "#pieton" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/personnage_graphique.svg" ) {
    $( "#camion" ).css("opacity", "0.5");
    $( "#pieton" ).css("opacity", "1");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");
  }
});

$( "#pieton" ).click(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/personnage_graphique.svg" ) {
    $( "#pieton" ).css("opacity", "1");
    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("margin-top", "2%");
      $("#pie_veh").css("height", "65%");
      $("#pie_veh").attr("src", "img/Vehicules/personnage_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
    $("#grave").fadeOut("slow", function() {
      $("#grave p").text("dont "+ acc_grav_vehicule.pieton.indemme + "% d'indemmes.")
    });
    $("#grave").fadeIn("slow");

    $("#leger").fadeOut("slow");
    $("#leger").fadeOut("slow", function() {
      $("#leger p").text("dont "+ acc_grav_vehicule.pieton.leger + "% de blessé légées.")
    });
    $("#leger").fadeIn("slow");

    $("#hospitalise").fadeOut("slow");
    $("#hospitalise").fadeOut("slow", function() {
      $("#hospitalise p").text("dont "+ acc_grav_vehicule.pieton.hospitalise + "% d'hospitalisées.")
    });
    $("#hospitalise").fadeIn("slow");

    $("#mort").fadeOut("slow");
    $("#mort").fadeOut("slow", function() {
      $("#mort p").text("dont "+ acc_grav_vehicule.pieton.mort + "% de mort.")
    });
    $("#mort").fadeIn("slow");

    $("#infos_accidents").fadeOut("slow");
    $("#infos_accidents").fadeOut("slow", function() {
      $("#infos_accidents").text("Sur "+ acc_grav_vehicule.nb_acc+" accidents, " +acc_grav_vehicule.pieton.nb_acc + " sont causées par des piétons.")
    });
    $("#infos_accidents").fadeIn("slow");
  }
});

$( "#img_train_slide3" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/train_graphique.svg" ) {
    $( "#camion" ).css("opacity", "0.5");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "1");


  }
});
$( "#img_train_slide3" ).click(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/train_graphique.svg" ) {
    $( "#img_train_slide3" ).css("opacity", "1");
    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("height", "30%");
      $("#pie_veh").css("margin-top", "7%");
      $("#pie_veh").attr("src", "img/Vehicules/train_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
    $("#grave").fadeOut("slow", function() {
      $("#grave p").text("dont "+ acc_grav_vehicule.train.indemme + "% d'indemmes.")
    });
    $("#grave").fadeIn("slow");

    $("#leger").fadeOut("slow");
    $("#leger").fadeOut("slow", function() {
      $("#leger p").text("dont "+ acc_grav_vehicule.train.leger + "% de blessé légées.")
    });
    $("#leger").fadeIn("slow");

    $("#hospitalise").fadeOut("slow");
    $("#hospitalise").fadeOut("slow", function() {
      $("#hospitalise p").text("dont "+ acc_grav_vehicule.train.hospitalise + "% d'hospitalisées.")
    });
    $("#hospitalise").fadeIn("slow");

    $("#mort").fadeOut("slow");
    $("#mort").fadeOut("slow", function() {
      $("#mort p").text("dont "+ acc_grav_vehicule.train.mort + "% de mort.")
    });
    $("#mort").fadeIn("slow");

    $("#infos_accidents").fadeOut("slow");
    $("#infos_accidents").fadeOut("slow", function() {
      $("#infos_accidents").text("Sur "+ acc_grav_vehicule.nb_acc+" accidents, " +acc_grav_vehicule.train.nb_acc + " sont causées par des trains.")
    });
    $("#infos_accidents").fadeIn("slow");
  }
});

$('section_evenements').hover(function() {
    $("#train_slide2").css('opacity', '1');
})
$('section_evenements').focusout(function() {
    $("#train_slide2").css('opacity', '0');
})


$('#div_indication_slide_evt').click(function(){
  $("#indication_slide_evt").animate({opacity: 0}, 800);
  $("#train_slide2").animate(
    {'margin-left': "0px;",
    'display':"block"
  });
  $("#donnees_slide2").animate({
    opacity: 1,
    'top': '10%'
  }, 500);
  $("#train_slide2").animate({
    'left': '-15%'
  }, 500);
})

/* graphe accidents par régions */
// Load a dummy json file using the fetch API
fetch('data/acc_regions.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {


        // Get the context of the canvas element we want to select
        var ctx = document.getElementById("chart_region_acc").getContext("2d");

        // Instantiate a new chart
        var myLineChart = new Chart(ctx , {
            type: "horizontalBar",
            data: json,
            options : {
              scales: {
                  yAxes: [{
                      ticks: {
                          fontSize: 40
                      }
                  }],
                  xAxes: [{
                      ticks: {
                          fontSize: 40
                      }
                  }]
              },
              tooltips: {
                titleFontSize: 40,
                bodyFontSize: 40
              },
              title: {
                    display: true,
                    text: 'Nombre d\'accidents en fonctions des régions',
                    fontSize : 40
                },
               legend: {
                   display: true,
                   position : "bottom",
                   fullWidth : true,
                   labels : {
                     fontSize: 40
                   }
               }

             }
        });
    });
/* CARTE */

var pnDisplay = false;
var accDisplay = false;
var coordacc = false;
var map;
function initmap() {
// paramÃ©trage de la carte
    map = new L.Map('map',{
        attributionControl: false,
        zoomSnap: 1,
        minZoom: 5,
        maxZoom: 10,
        zoomControl:false,
        layers:[pn,accidentRegion,coordAcc,accidentratioRegion]});

    // crÃ©ation des "tiles" avec open street map
    // on centre sur la France
    map.setView(new L.LatLng(46.85, 2.3518), 5);
    map.removeLayer(pn);
    map.removeLayer(accidentRegion);
    map.removeLayer(coordAcc);
    map.removeLayer(accidentratioRegion);
}

var iconPn = L.icon({
            iconUrl: 'img/carte/pointpn.svg',
            iconSize: [20, 20]
});
var iconAcc = L.icon({
            iconUrl: 'img/carte/pointaccident.svg',
            iconSize: [20, 20]
});

var iconRegion = L.icon({
            iconUrl: 'img/carte/R.svg',
            iconSize: [20, 20]
});


/*afficher les pn ou non*/
function AfficherPn(e)
{
    if (pnDisplay == true){
        map.removeLayer(pn);
        pnDisplay = false;
        $(e).removeClass('active');
    }
    else {
        map.addLayer(pn);
        pnDisplay = true;
        $(e).addClass('active');
    }

}

function AfficherCoordAcc(e)
{
    if (coordacc == true){
        map.removeLayer(coordAcc);
        coordacc = false;
        $(e).removeClass('active');
    }
    else {
        map.addLayer(coordAcc);
        coordacc = true;
        $(e).addClass('active');
    }

}

function AfficherAcc(e)
{
    var truc = document.getElementsByClassName('lie')
    if (accDisplay == true && map.hasLayer(accidentratioRegion) == false){
        map.removeLayer(accidentRegion);
        accDisplay = false;
        $(e).removeClass('active');
    }
    else if (accDisplay == false && map.hasLayer(accidentratioRegion) == false){
        map.addLayer(accidentRegion);
        accDisplay = true;
        $(e).addClass('active');
    }
    else if (accDisplay == true && map.hasLayer(accidentratioRegion) == true){
        map.removeLayer(accidentratioRegion);
        map.addLayer(accidentRegion);
        accDisplay = true;
        $(e).addClass('active');
        truc[1].classList.remove('active');
    }

}

function AfficherRatioRegion(e)
{
    var truc = document.getElementsByClassName('lie')
    console.log(truc);
    if (accDisplay == true && map.hasLayer(accidentRegion) == false){
        map.removeLayer(accidentratioRegion);
        accDisplay = false;
        $(e).removeClass('active');
    }
    else if (accDisplay == false && map.hasLayer(accidentRegion) == false){
        map.addLayer(accidentratioRegion);
        accDisplay = true;
        $(e).addClass('active');
    }
    else if (accDisplay == true && map.hasLayer(accidentRegion) == true){
        map.removeLayer(accidentRegion);
        map.addLayer(accidentratioRegion);
        accDisplay = true;
        $(e).addClass('active');
        truc[0].classList.remove('active');
    }
}

/* creation des clusters */
function addPn ()
{
    var markers = L.markerClusterGroup({
        removeOutsideVisibleBounds:true,
        spiderfyOnMaxZoom:false,
        disableClusteringAtZoom: 9,
        iconCreateFunction: function (cluster) {
            var marker = cluster.getAllChildMarkers();
            var n = 0;
            for (var i = 0; i < marker.length; i++) {
                n += 1
            }
            return L.divIcon({ html:n , className: 'myclusterpn'});
    }});
    fetch('data/pn.geojson')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (Geojson) {

        for (var i in Geojson.features)
        {
            markers.addLayer(L.marker(Geojson.features[i].geometry.coordinates, {
            icon : iconPn,
            pane:"markerPane",
            }));
        }
    });
    return markers;
}
var pn = addPn();


/* Region accident */
function addRegionAccident(){
  var markers=L.layerGroup();
  fetch('data/region.geojson')
  // this promise will be fulfilled when the json fill will be
  .then(function (response){
  // if we could load the resource, parse it
    if( response.ok )
        return response.json();
    else // if not, send some error message as JSON data
        return {data: "JSON file not found"};

  })
  // in case of invalid JSON (parse error) send some error message as JSON data
  .catch( function (error){
      return {data: "Invalid JSON"};
  })
  // this promise will be fulfilled when the json will be parsed
  .then(function (Geojson) {
    for (var i in Geojson.features)
    {
        var marker=L.marker(Geojson.features[i].geometry.coordinates,{
          icon : iconRegion,
          pane:"markerPane",
        }).bindPopup(Geojson.features[i].properties.Region+' avec '+ Geojson.features[i].properties.Accidents+' d\'accidents'
          )
        markers.addLayer(marker);
    }
  });
  return markers;
}

var accidentRegion = addRegionAccident();

function addRationRegionAccident(){
  var markers=L.layerGroup();
  fetch('data/ratioregion.geojson')
  // this promise will be fulfilled when the json fill will be
  .then(function (response){
  // if we could load the resource, parse it
    if( response.ok )
        return response.json();
    else // if not, send some error message as JSON data
        return {data: "JSON file not found"};

  })
  // in case of invalid JSON (parse error) send some error message as JSON data
  .catch( function (error){
      return {data: "Invalid JSON"};
  })
  // this promise will be fulfilled when the json will be parsed
  .then(function (Geojson) {
    for (var i in Geojson.features)
    {
        var marker=L.marker(Geojson.features[i].geometry.coordinates,{
          icon : iconRegion,
          pane:"markerPane",
        }).bindPopup(Geojson.features[i].properties.Region+' avec '+ Geojson.features[i].properties.Accidents+' de risque d\'accident en traversant un PN')
        markers.addLayer(marker);
    }
  });
  return markers;
}

var accidentratioRegion = addRationRegionAccident();

function addCoordAcc(){
  var markers = L.markerClusterGroup({
        removeOutsideVisibleBounds:true,
        spiderfyOnMaxZoom:false,
        disableClusteringAtZoom: 7,
        iconCreateFunction: function (cluster) {
            var marker = cluster.getAllChildMarkers();
            var n = 0;
            for (var i = 0; i < marker.length; i++) {
                n += 1
            }
            return L.divIcon({ html:n , className: 'myclusteracc'});
    }});
    fetch('data/coordacc.geojson')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (Geojson) {

        for (var i in Geojson.features)
        {
            markers.addLayer(L.marker(Geojson.features[i].geometry.coordinates, {
            icon : iconAcc,
            pane:"markerPane",
            }));
        }
    });
    return markers;
}

var coordAcc = addCoordAcc();

/* création fond de carte (France avec regions)*/

fetch('data/france.geojson')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (Geojson) {
        // Get the context of the canvas element we want to select
        L.geoJSON(Geojson, {style:function(feature) {
            return {
                'fillColor': '#30354C',
                'weight': 0.5,
                'opacity': 1,
                'color': 'white',
                'dashArray':'3',
                'fillOpacity': 1
            }
        }}).addTo(map);
});
initmap();

$("#map").css("height", "70%");
$("#map").css("width", "40%");

/* filtres */
/*var pnDisplay = false;
var accDisplay = false;
var coordacc = false;*/



var switchClick = function(e) {
  $(this).toggleClass('active');
};

(function($) {
  $.fn.materialSwitch = function(options) {
    this.each(function() {
      $('<div class="bar" />').appendTo($(this));
      $('<div class="thumb-container" />').append(
        $('<div class="thumb" />').append(
          $('<div class="ripple"/>')
        )
      ).appendTo($(this));
    });
    return this;
  };

  $('.material-switch').materialSwitch();

}(jQuery));
