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
    })

    $('#boutonDroite').click(function() {
        $('#intro').text("Les scientifiques me considèrent comme un problème de santé publique. Mes effets sur l’humain, apparaissent à différentes échelles de toxicité : aiguë, chronique et génétique. Je contamine par inhalation, contact et ingestion. Entre mort subite ou prématurée, baisse des défenses immunitaire, atteinte à la fertilité et malformations ou effets tératogènes, je suis un vrai danger pour l’homme. (en savoir plus toxicité des pesticides largement sous-évaluée) Je suis partout : dans vos cheveux, dans vos urines, dans votre alimentation et surtout dans ce qu’il y a plus vital : l’eau. Allons voir comment je m’y cache.");
        $('#boutonEnSavoirPlus').show();
        $('#boutonDroite').hide();
        $('#boutonGauche').show();
    });

    $('#boutonGauche').click(function() {
        $('#intro').text("Substance chimique non naturelle, j’ai été créé et développé par l’homme lors de la révolution chimique du début du XXe siècle. De mon étymologie caedere et pestis, le latin me “tue” et me considère comme un “fléau”. Les anglais quant à eux, me surnomment le “ravageur”. Pour certains je suis un produit phytosanitaire, utilisé en agriculture pour lutter contre les organismes vivants “nuisibles”, mais pour la plupart, je suis connu sous un autre nom : pesticide.");
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
        $('#enSavoirPlusP1').show();
        
    });

    $('#boutonExitP1').click(function() { 
        $('#page1DisplayOn').css('filter','blur(0px)');
        $('#enSavoirPlusP1').hide();
    });