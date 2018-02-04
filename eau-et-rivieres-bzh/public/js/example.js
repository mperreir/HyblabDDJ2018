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

    $(function() {
        $('#finistere').hide();
        $('#illeetvilaine').hide();
        $('#loireatlantique').hide();
        $('#maineetloire').hide();
        $('#mayenne').hide();
        $('#morbihan').hide();
    });

    $('#buttonSP').click(function() { 
        $('#page1DisplayOn').css('filter','blur(3px)');
        $('.enSavoirPlusP1').show();
    });

    $('#boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('.enSavoirPlusP1').hide();
    });

    $('#suivant').click(function() {
        if ($('#cotesdarmor').css('display') != 'none') {
            $('#cotesdarmor').hide();
            $('#finistere').show();
            $('#dpt').attr('src','img/finistere.png');
        }
        else if ($('#finistere').css('display') != 'none') {
            $('#finistere').hide();
            $('#illeetvilaine').show();
            $('#dpt').attr('src','img/illeetvilaine.png');
        }
        else if ($('#illeetvilaine').css('display') != 'none') {
            $('#illeetvilaine').hide();
            $('#loireatlantique').show();
            $('#dpt').attr('src','img/loireatlantique.png');
        }
        else if ($('#loireatlantique').css('display') != 'none') {
            $('#loireatlantique').hide();
            $('#maineetloire').show();
            $('#dpt').attr('src','img/maineetloire.png');
        }
        else if ($('#maineetloire').css('display') != 'none') {
            $('#maineetloire').hide();
            $('#mayenne').show();
            $('#dpt').attr('src','img/mayenne.png');
        }
        else if ($('#mayenne').css('display') != 'none') {
            $('#mayenne').hide();
            $('#morbihan').show();
            $('#dpt').attr('src','img/morbihan.png');
        }
        else {
            $('#morbihan').hide();
            $('#cotesdarmor').show();
            $('#dpt').attr('src','img/cotesdarmor.png');
        }
    });