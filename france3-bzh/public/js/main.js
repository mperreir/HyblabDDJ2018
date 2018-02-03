'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts


//---------------------
// Initialise le fullpage
$(document).ready(function() {
    $('#fullpage').fullpage();
});




function Light(){
    $("#section_illu1").fadeTo("slow", 0.1,function(){
        $("#section_illu1").css({'background-image':'url(img/Illu1/daynight.svg)'});
        $("#nuit").css({'visibility':'visible'});
        $("#jour").css({'visibility':'visible'});
    }).fadeTo('slow', 1);
};





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
        console.log(json);


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
// JS Slide 3
$( "#voiture" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/voiture_graphique.svg" ) {
    $("#pie_veh").fadeOut("slow", function() {
      $( "#camion" ).css("opacity", "0.5");
      $( "#pieton" ).css("opacity", "0.5");
      $( "#voiture" ).css("opacity", "1");
      $( "#moto" ).css("opacity", "0.5");
      $( "#img_train_slide3" ).css("opacity", "0.5");

      $("#pie_veh").css("width", "25%");
      $("#pie_veh").attr("src", "img/Vehicules/voiture_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
  }

});

$( "#camion" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/camion_graphique.svg" ) {
    $( "#camion" ).css("opacity", "1");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");

    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("width", "25%");
      $("#pie_veh").attr("src", "img/Vehicules/camion_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
  }


});

$( "#moto" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/moto_graphique.svg" ) {
    $( "#moto" ).css("opacity", "1");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#camion" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");

    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("width", "25%");
      $("#pie_veh").attr("src", "img/Vehicules/moto_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
  }

});

$( "#pieton" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/personnage_graphique.svg" ) {
    $( "#camion" ).css("opacity", "0.5");
    $( "#pieton" ).css("opacity", "1");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "0.5");

    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("width", "7%");
      $("#pie_veh").attr("src", "img/Vehicules/personnage_graphique.svg");
    });
    $("#pie_veh").fadeIn("slow");
  }


});

$( "#img_train_slide3" ).mouseover(function() {
  if (   $("#pie_veh").attr("src") != "img/Vehicules/train_graphique.svg" ) {
    $( "#camion" ).css("opacity", "0.5");
    $( "#pieton" ).css("opacity", "0.5");
    $( "#voiture" ).css("opacity", "0.5");
    $( "#moto" ).css("opacity", "0.5");
    $( "#img_train_slide3" ).css("opacity", "1");

    $("#pie_veh").fadeOut("slow", function() {
      $("#pie_veh").css("width", "25%");
      $("#pie_veh").attr("src", "img/Vehicules/train_graphique.svg");

    });
    $("#pie_veh").fadeIn("slow");
  }
});

var pnDisplay = true;
var map;
function initmap() {
// paramÃ©trage de la carte
    map = new L.Map('map',{
        zoomSnap: 1,
        minZoom: 5,
        maxZoom: 10,
        zoomControl:false,
        layers:[pn]});

    // crÃ©ation des "tiles" avec open street map
    // on centre sur la France
    map.setView(new L.LatLng(46.85, 2.3518), 5);
}

var iconPn = L.icon({
            iconUrl: 'img/carte/pointpn.svg',
            iconSize: [20, 20],
});
var iconAcc = L.icon({
            iconUrl: 'img/carte/pointaccident.svg',
            iconSize: [38, 95]
});

function AfficherPn()
{
    if (pnDisplay == true){
        map.removeLayer(pn);
        pnDisplay = false;
    }
    else {
        map.addLayer(pn);
        pnDisplay = true;
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
            return L.divIcon({ html:n , className: 'mycluster'});
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

console.log(pn);



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
console.log(map);



