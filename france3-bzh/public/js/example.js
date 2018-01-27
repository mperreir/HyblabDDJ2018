'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

// Load a dummy json file using the fetch API
fetch('data/dummy.json')
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
        // document.querySelector('#data')
        //     .textContent = json.data;
    });


//---------------------
// Initialise le fullpage
$(document).ready(function() {
    $('#fullpage').fullpage();
});



// Popmotion
const { easing, tween, styler } = window.popmotion;

const divStyler = styler(document.querySelector('#train'));
var myTarget=document.querySelectorAll('#train');


tween({
  from: 200,
  to: { x: 800, y:500},
  duration: 1000,
  // ease: easing.backOut,
  // flip: 1,
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);


// chartjs

var data_lum = fetch('data/lum.json')
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
        // document.querySelector('#data')
        //     .textContent = json.data;
    });
console.log(data_lum);
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jour", "Nuit"],
        datasets: [{
            data: data_lum,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
