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

    //INDEX

    $(function() {
        $('#boutonGauche').hide();
        $('#enSavoirPlus').hide();
        $('#intro2').hide();
    })

    $('#boutonDroite').click(function() {
        $('#intro1').hide();
        $('#intro2').show();
        $('#boutonEnSavoirPlus').show();
        $('#boutonDroite').hide();
        $('#boutonGauche').show();
    });

    $('#boutonGauche').click(function() {
        $('#intro2').hide();
        $('#intro1').show();
        $('#boutonEnSavoirPlus').hide();
        $('#boutonGauche').hide();
        $('#boutonDroite').show();
    });

    $('#boutonEnSavoirPlus').click(function() { 
        $('#displayOn').css('filter','blur(3px)');
        $('#enSavoirPlus').show();
        
    });

    $('#boutonExit').click(function() { 
        $('#displayOn').css('filter','blur(0px)');
        $('#enSavoirPlus').hide();
    });

    //DATAVIZ

    $('#buttonSP').click(function() { 
        $('#page1DisplayOn').css('filter','blur(3px)');
        $('#d22').show();
    });

    $('#d22 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d22').hide();
    });

    $('#d29 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d29').hide();
    });

    $('#d35 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d35').hide();
    });

    $('#d44 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d44').hide();
    });

    $('#d53 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d53').hide();
    });

    $('#d56 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d56').hide();
    });

    $('#d49 .boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#d49').hide();
    });

    $('#d22 .suivant').click(function() {
        $('#d22').hide();
        $('#d29').show();
    });

    $('#d29 .suivant').click(function() {
        $('#d29').hide();
        $('#d35').show();
    });

    $('#d35 .suivant').click(function() {
        $('#d35').hide();
        $('#d44').show();
    });

    $('#d44 .suivant').click(function() {
        $('#d44').hide();
        $('#d49').show();
    });

    $('#d49 .suivant').click(function() {
        $('#d49').hide();
        $('#d53').show();
    });

    $('#d53 .suivant').click(function() {
        $('#d53').hide();
        $('#d56').show();
    });

    $('#d56 .suivant').click(function() {
        $('#d56').hide();
        $('#d22').show();
    });

    /*$('.suivant').click(function() {
        if ($('.enSavoirPlusP1').att('id') == 'd22') {
            $('#d22').hide();
            $('#d29').show();
            i++;
        }
        else if ($('.enSavoirPlusP1').att('id') == 'd29') {
            $('#d29').hide();
            $('#d35').show();
            i++;
        }
        else if ($('.enSavoirPlusP1').att('id') == 'd35') {
            $('#d35').hide();
            $('#d44').show();
            i++;
        }
        else if ($('.enSavoirPlusP1').att('id') == 'd44') {
            $('#d44').hide();
            $('#d49').show();
            i++;
        }
        else if ($('.enSavoirPlusP1').att('id') == 'd49') {
            $('#d49').hide();
            $('#d53').show();
            i++;
        }
        else if ($('.enSavoirPlusP1').att('id') == 'd53') {
            $('#d53').hide();
            $('#d56').show();
            i++;
        }
        else {
            $('#d56').hide();
            $('#d22').show();
            i = 1;
        }
    });*/