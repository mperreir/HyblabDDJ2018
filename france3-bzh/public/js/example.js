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

tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity,
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);
//
// const { css, tween, styler } = window.popmotion;
// const train = document.querySelector('css #train');
// tween({
//   from: { x: 124, y: 200 },
//   to: 0
//   , duration: 1000 })
// 	.start(styler(train).set('x'));
