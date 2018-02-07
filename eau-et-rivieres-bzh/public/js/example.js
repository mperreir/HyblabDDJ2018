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
    });

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

    $(function() {
        $('#descriptionBonhomme2012').hide();
        $('#descriptionBonhomme2013').hide();
        $('#descriptionBonhomme2014').hide();
        $('#descriptionBonhomme2015').hide();
        $('#descriptionBonhomme2016').hide();
        $('#descC2012').hide();
        $('#descC2013').hide();
        $('#descC2014').hide();
        $('#descC2015').hide();
        $('#descC2016').hide();
        $('#descriptionBonhomme').html($('#descriptionBonhomme2012').html());
    });

    $('#C2012').click(function() {
        $('#descriptionBonhomme').html($('#descriptionBonhomme2012').html());
        $('#anneeCampbon').text($("#descC2012 p").text());
    })

    $('#C2013').click(function() {
        $('#descriptionBonhomme').html($('#descriptionBonhomme2013').html());
        $('#anneeCampbon').text($("#descC2013 p").text());
    });

    $('#C2014').click(function() {
        $('#descriptionBonhomme').html($('#descriptionBonhomme2014').html());
        $('#anneeCampbon').text($("#descC2014 p").text());
    });

    $('#C2015').click(function() {
        $('#descriptionBonhomme').html($('#descriptionBonhomme2015').html());
        $('#anneeCampbon').text($("#descC2015 p").text());
    });

    $('#C2016').click(function() {
        $('#descriptionBonhomme').html($('#descriptionBonhomme2016').html());
        $('#anneeCampbon').text($("#descC2016 p").text());
    });

    /*$(function() {
        $('.definitionDichloOn').hide();
        $('.definitionDichlo').hide();
    });

    $('.definitionDichloOff').click(function() {
        alert("Hello");
    });*/

    //Santé solutions alternatives
    $(function() {
        $('#popupSolution').hide();
    })

    $('#btnSolution').click(function() {
        $('#sante').css('filter','blur(3px)');
        $('#popupSolution').show();
    })

    $('#exitSolution').click(function() { 
        $('#sante').css('filter','blur(0px)');
        $('#popupSolution').hide();
    })


    /*definitions*/
    $('#herbicide').hover(
        function() {
            $('#defherbicide').show();
            $('#defherbicide').css('left',$('#herbicide').offset().left);
            $('#defherbicide').css('top',($('#herbicide').offset().top)+50);
        }, function() {
            $('#defherbicide').hide();
        }
    );
    $('#parasiticide').hover(
        function() {
            $('#defparasiticide').show();
            $('#defparasiticide').css('left',$('#parasiticide').offset().left);
            $('#defparasiticide').css('top',($('#parasiticide').offset().top)+50);
        }, function() {
            $('#defparasiticide').hide();
        }
    );
    $('#molecule').hover(
        function() {
            $('#defmolecule').show();
            $('#defmolecule').css('left',$('#molecule').offset().left);
            $('#defmolecule').css('top',($('#molecule').offset().top)+50);
        }, function() {
            $('#defmolecule').hide();
        }
    );
    $('#insecticide').hover(
        function() {
            $('#definsecticide').show();
            $('#definsecticide').css('left',$('#insecticide').offset().left);
            $('#definsecticide').css('top',($('#insecticide').offset().top)+50);
        }, function() {
            $('#definsecticide').hide();
        }
    );
    $('#fongicide').hover(
        function() {
            $('#deffongicide').show();
            $('#deffongicide').css('left',$('#fongicide').offset().left);
            $('#deffongicide').css('top',($('#fongicide').offset().top)+50);
        }, function() {
            $('#deffongicide').hide();
        }
    );
    $('#nappeSouterraine').hover(
        function() {
            $('#defnappeSouterraine').show();
            $('#defnappeSouterraine').css('left',$('#nappeSouterraine').offset().left);
            $('#defnappeSouterraine').css('top',($('#nappeSouterraine').offset().top)+50);
        }, function() {
            $('#defnappeSouterraine').hide();
        }
    );
    $('#cocktail').hover(
        function() {
            $('#defcocktail').show();
            $('#defcocktail').css('left',$('#cocktail').offset().left);
            $('#defcocktail').css('top',($('#cocktail').offset().top)+50);
        }, function() {
            $('#defcocktail').hide();
        }
    );
    $('#nappePhreatique').hover(
        function() {
            $('#defnappePhreatique').show();
            $('#defnappePhreatique').css('left',$('#nappePhreatique').offset().left);
            $('#defnappePhreatique').css('top',($('#nappePhreatique').offset().top)+50);
        }, function() {
            $('#defnappePhreatique').hide();
        }
    );
    $('#nappeCampbon').hover(
        function() {
            $('#defnappeCampbon').show();
            $('#defnappeCampbon').css('left',$('#nappeCampbon').offset().left);
            $('#defnappeCampbon').css('top',($('#nappeCampbon').offset().top)+50);
        }, function() {
            $('#defnappeCampbon').hide();
        }
    );


