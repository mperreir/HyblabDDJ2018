'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

// Load a dummy json file using the fetch API
fetch('data/datas.json')
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
        document.querySelector('#data')
            .textContent = json.data;
    });

    $(function() {
        $('#boutonGauche').hide();
        $('#enSavoirPlus').hide();
    })

    $('#boutonDroite').click(function() {
        $('#intro').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque lacus vel urna tincidunt, non iaculis orci fermentum. Donec fringilla risus id dapibus posuere. Maecenas gravida posuere urna eu imperdiet. Proin tempor egestas nisl, a tempus magna. Duis vel euismod augue, vel aliquet mauris. Nullam nec tortor non odio condimentum facilisis. Cras magna ex, ornare at facilisis sed, finibus a eros. Nam commodo est ex, vitae pretium nunc varius scelerisque. Suspendisse nec diam ultrices ante sollicitudin porttitor eget in nibh.");
        $('#boutonEnSavoirPlus').show();
        $('#boutonDroite').hide();
        $('#boutonGauche').show();
    });

    $('#boutonGauche').click(function() {
        $('#intro').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        $('#boutonEnSavoirPlus').hide();
        $('#boutonGauche').hide();
        $('#boutonDroite').show();
    });

    $('#boutonEnSavoirPlus').click(function() { 
        $('#displayOn').css('filter','blur(5px)');
        $('#enSavoirPlus').show();
        $('#enSavoirPlus').css('filter','blur(0px)');
        
    });

    $('#boutonExit').click(function() { 
        $('#displayOn').css('filter','blur(0px)');
        $('#enSavoirPlus').hide();
    });