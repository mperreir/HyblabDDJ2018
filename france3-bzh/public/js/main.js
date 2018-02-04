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
      $("#pie_veh").css("height", "25%");
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
      $("#pie_veh").css("height", "35%");
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
      $("#pie_veh").css("height", "40%");
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
      $("#pie_veh").css("height", "20%");
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
// $("#leger").hide();
// $("#mort").hide();
// $("#hospitalise").hide();
// $("#grave").hide();


// Slide 2 train qui avance


// $("#train_slide2").animate(
//   {'margin-left': "300px",
//   'display':"block"
// });

// function blinker() {
//     $('#indication_slide_evt').fadeOut(1500);
//     $('#indication_slide_evt').fadeIn(1500);
// }
//
// var blinkerIntervall = setInterval(blinker, 1000);
$('#div_indication_slide_evt').click(function(){
  $("#indication_slide_evt").animate({opacity: 0}, 800);
  $("#train_slide2").animate(
    {'margin-left': "300px",
    'display':"block"
  });
})


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
        console.log(Geojson);


        // Get the context of the canvas element we want to select
        var map;
        function initmap() {
        // paramÃ©trage de la carte
        map = new L.Map('map',{
            zoomSnap: 0.25,
            minZoom: 5,
            maxZoom: 7,
            zoomControl:false });

        // crÃ©ation des "tiles" avec open street map
        // on centre sur la France
        map.setView(new L.LatLng(46.85, 2.3518), 5);

        L.geoJSON(Geojson, {style:function(feature) {
            return {
                'fillColor': '#5DC1CE',
                'weight': 2,
                'opacity': 1,
                'color': 'white',
                'dashArray':'3',
                'fillOpacity': 1
            }
        }}).addTo(map);
};

        /* on va procÃ©der Ã  l'initialisation de la carte */
        initmap();



});