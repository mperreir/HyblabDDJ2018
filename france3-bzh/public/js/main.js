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

