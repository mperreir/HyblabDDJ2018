'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts


//---------------------
// Initialise le fullpage
$(document).ready(function() {
    $('#fullpage').fullpage();
});



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

    // leaflet
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
   maxZoom: 18,
   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
   id: 'mapbox.streets'
}).addTo(mymap);
