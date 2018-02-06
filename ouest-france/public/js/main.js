'use strict'

function controleurPlan(){
    var textePlan = document.getElementById("textePlan");
    var anneeEvolution = document.getElementById("carteEvolution");
    var annee2006 = document.getElementById("carte2006");
    var annee2007 = document.getElementById("carte2007");
    var annee2008 = document.getElementById("carte2008");
    var annee2009 = document.getElementById("carte2009");
    var annee2010 = document.getElementById("carte2010");
    var annee2011 = document.getElementById("carte2011");
    var annee2012 = document.getElementById("carte2012");
    var annee2013 = document.getElementById("carte2013");
    var annee2014 = document.getElementById("carte2014");
    var annee2015 = document.getElementById("carte2015");
    var annee2016 = document.getElementById("carte2016");
    var annee2017 = document.getElementById("carte2017");

    var tabAnnees = [anneeEvolution, annee2006, annee2007, annee2008, annee2009, annee2010, annee2011, annee2012, annee2013, annee2014, annee2015, annee2016, annee2017];

    var scene1 = document.getElementById("scene1");
    var scene2 = document.getElementById("scene2");
    var scene3 = document.getElementById("scene3");
    var scene4 = document.getElementById("scene4");
    var scene5 = document.getElementById("scene5");
    var scene6 = document.getElementById("scene6");
    var scene7 = document.getElementById("scene7");

    var tabScenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7];

    var legendeScene1 = document.getElementById("legendeScene1");
    var legendeScene2 = document.getElementById("legendeScene2");
    var legendeScene3 = document.getElementById("legendeScene3");
    var legendeScene4 = document.getElementById("legendeScene4");
    var legendeScene5 = document.getElementById("legendeScene5");
    var legendeScene6 = document.getElementById("legendeScene6");
    var legendeScene7 = document.getElementById("legendeScene7");

    var couleur = ['#d6f2b3', '#bbdb83', '#8eaf46', '#a9ff88', '#85c275', '#57664d', '#66cc33', '#479116', '#3f5b33'];

    anneeEvolution.onclick = function(){
        textePlan.textContent = "J’ai pu voir passer sur la Main 01 près de 306 groupes au Hellfest. Une vraie ribambelle d’artistes depuis plus de 13 ans. Cela est dû au nombre grandissant de mes amis les festivaliers. De 22 000 à 152 000 tickets vendus en 13 ans, quelle évolution, c’est incroyable! Venez vite voir cet élargissement considérable du Hellfest !";

        setYearActive(tabAnnees, 0);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
    }

    annee2006.onclick = function(){
        textePlan.textContent = "Les 72 groupes invités à la première édition du Hellfest sont équitablement répartis entre deux scènes : Main (la scène principale) et Hard n'Heavy stage.";

        setYearActive(tabAnnees, 1);

        document.getElementById("carte06").className = "2006 divCarte ";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "fadeInDown animated pin--2006-1"
        document.getElementById("pin2006-02").className = "fadeInDown animated pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2006 && groupe.Scene === "Hard n'Heavy stage" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2006 && groupe.Scene === "Main" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        var pays1 = camembertScene(2006, "Hard n'Heavy stage", "#pieScene1");
        for (var i = 0; i<pays1.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays1[i];
            var point = document.createElement('div');
            point.className = "pointLegendeScene";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendeScene1.appendChild(legende);
        }
        var pays2 = camembertScene(2006, "Main", "#pieScene2");
        for (var i = 0; i<pays2.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays2[i];
            var point = document.createElement('div');
            point.className = "pointLegendeScene";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendeScene2.appendChild(legende);
        }
    }

    annee2007.onclick = function(){
        textePlan.textContent = "En 2007, la Hard n'Heavy est remplacée par la Gibson Stage.S'y ajoute la Discover stage, une nouvelle scène, sur laquelle 30 groupes se produisent.";

        setYearActive(tabAnnees, 2);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "fadeInDown animated pin--2007-1"
        document.getElementById("pin2007-02").className = "fadeInDown animated pin--2007-2"
        document.getElementById("pin2007-03").className = "fadeInDown animated pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2007 && groupe.Scene === "Discover stage" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2007 && groupe.Scene === "Gibson stage" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2007 && groupe.Scene === "Main" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });

        var pays1 = camembertScene(2007, "Discover stage", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2007, "Gibson stage", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2007, "Main", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
    }
    annee2008.onclick = function(){
        textePlan.textContent = "Le nombre de groupes augmentente considérablement par rapport à 2007, passant de 84 à 108. Les groupes sont répartis entre 3 scènes distinctes et hiérarchisées : la main, la second stage et enfin la discover stage.";

        setYearActive(tabAnnees, 3);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte";
        document.getElementById("carte09").className = "2009 divCarte--hidden";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "fadeInDown animated pin--2008-1"
        document.getElementById("pin2008-02").className = "fadeInDown animated pin--2008-2"
        document.getElementById("pin2008-03").className = "fadeInDown animated pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2008 && groupe.Scene === "Discover stage" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2008 && groupe.Scene === "Second stage" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2008 && groupe.Scene === "Main" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });

        var pays1 = camembertScene(2008, "Discover stage", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2008, "Second stage", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2008, "Main", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
    }

    annee2009.onclick = function(){
        textePlan.textContent = "En 2009, une quatrième scène est crée. La Main 02, complétant la Main 01, favorise les groupes de métal alternatif, nu métal, métalcore et trashmétal. Les deux scènes accueillent toutes les deux 27 groupes.";

        setYearActive(tabAnnees, 4);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte ";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
        document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
        document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
        document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2009 && groupe.Scene === "Main 01" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2009 && groupe.Scene === "Main 02" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2009 && groupe.Scene === "Rock Hard tent" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2009 && groupe.Scene === "Terrorizer tent" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });

        var pays1 = camembertScene(2009, "Main 01", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2009, "Main 02", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2009, "Rock Hard tent", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2009, "Terrorizer tent", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }

    }
    annee2010.onclick = function(){
        textePlan.textContent = "En 2010, le festival conserve les mêmes scènes et le même nombre de groupes qu’en 2009. La Main 01 produit principalement les groupes de heavy metal tradiotionnel et de hardrock.";

        setYearActive(tabAnnees, 5);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte ";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
        document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
        document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
        document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2010 && groupe.Scene === "Main 01" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2010 && groupe.Scene === "Main 02" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2010 && groupe.Scene === "Rock Hard tent" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2010 && groupe.Scene === "Terrorizer tent" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });

        var pays1 = camembertScene(2010, "Main 01", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2010, "Main 02", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2010, "Rock Hard tent", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2010, "Terrorizer tent", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
    }
    annee2011.onclick = function(){
        textePlan.textContent ="118 groupes sont présents en 2011. C’est un nombre relativement constant depuis l’édition de 2008.";

        setYearActive(tabAnnees, 6);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte ";
        document.getElementById("carte12").className = "2012 divCarte--hidden";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
        document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
        document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
        document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
        document.getElementById("pin2012-01").className = "pin--2012-1"
        document.getElementById("pin2012-02").className = "pin--2012-2"
        document.getElementById("pin2012-03").className = "pin--2012-3"
        document.getElementById("pin2012-04").className = "pin--2012-4"
        document.getElementById("pin2012-05").className = "pin--2012-5"
        document.getElementById("pin2012-06").className = "pin--2012-6"
        document.getElementById("pin2012-07").className = "pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2011 && groupe.Scene === "Main 01" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2011 && groupe.Scene === "Main 02" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2011 && groupe.Scene === "Rock Hard tent" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2011 && groupe.Scene === "Terrorizer tent" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });

        var pays1 = camembertScene(2011, "Main 01", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2011, "Main 02", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2011, "Rock Hard tent", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2011, "Terrorizer tent", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
    }
    annee2012.onclick = function(){
        textePlan.textContent ="Le Hellfest n'accueille plus 4 scènes mais bien 7 scènes pour un total de 170 artistes en cette année 2012, un véritable boom par rapport à l’année précédente. La Warzone met à l’honneur le punk hardcore, la Valley  le sludge/ stoner et le Metal Corner déniche les talents de demain . Autres changements, la Terrorizer tent laisse place au Temple (doom / pagan metal / black metal) et la Rock Hard tent devient l’Altar ( death metal / grind).";

        setYearActive(tabAnnees, 7);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2012 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2012 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });

        var pays1 =  camembertScene(2012, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2012, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2012, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2012, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2012, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2012, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2012, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }
    }
    annee2013.onclick = function(){
        textePlan.textContent ="170 artistes montent sur les planches du Hellfest en 2013, une répétition de 2012 avec les mêmes scènes.";

        setYearActive(tabAnnees, 8);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2013 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2013 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });

        var pays1 =  camembertScene(2013, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2013, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2013, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2013, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2013, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2013, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2013, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }
    }
    annee2014.onclick = function(){
        textePlan.textContent ="Le format des scènes du Hellfest de 2012 reste toujours le même pour acceuillir le même nombre d’artistes.";

        setYearActive(tabAnnees, 9);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2014 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2014 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });

        var pays1 =  camembertScene(2014, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2014, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2014, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2014, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2014, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2014, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2014, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }

    }
    annee2015.onclick = function(){
        textePlan.textContent ="Très légère baisse de nombre d’artistes en 2015 puisque les 7 scènes reçoivent 166 groupes.";

        setYearActive(tabAnnees, 10);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2015 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2015 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });


        var pays1 =  camembertScene(2015, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2015, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2015, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2015, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2015, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2015, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2015, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }
    }
    annee2016.onclick = function(){
        textePlan.textContent ="Le Metal Corner en partenariat avec Deezer Open Hell'Stage en 2016 accueille presque le double de ce qu’il a l’habitude d’avoir. Cette scène où les groupes de métals s’affrontent pour se produirent sur une “main stage” rencontre un véritable succès.";

        setYearActive(tabAnnees, 11);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2016 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2016 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });

        var pays1 =  camembertScene(2016, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2016, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2016, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2016, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2016, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2016, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2016, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }
    }
    annee2017.onclick = function(){
        textePlan.textContent ="167 artistes font monter les décibels en 2017 pour faire vibrer les festivaliers.";

        setYearActive(tabAnnees, 12);

        document.getElementById("carte06").className = "2006 divCarte--hidden";
        document.getElementById("carte07").className = "2007 divCarte--hidden";
        document.getElementById("carte08").className = "2008 divCarte--hidden";
        document.getElementById("carte09").className = "2009 divCarte--hidden ";
        document.getElementById("carte12").className = "2012 divCarte ";
        document.getElementById("pin2006-01").className = "pin--2006-1"
        document.getElementById("pin2006-02").className = "pin--2006-2"
        document.getElementById("pin2007-01").className = "pin--2007-1"
        document.getElementById("pin2007-02").className = "pin--2007-2"
        document.getElementById("pin2007-03").className = "pin--2007-3"
        document.getElementById("pin2008-01").className = "pin--2008-1"
        document.getElementById("pin2008-02").className = "pin--2008-2"
        document.getElementById("pin2008-03").className = "pin--2008-3"
        document.getElementById("pin2009-01").className = "pin--2009-1"
        document.getElementById("pin2009-02").className = "pin--2009-2"
        document.getElementById("pin2009-03").className = "pin--2009-3"
        document.getElementById("pin2009-04").className = "pin--2009-4"
        document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
        document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
        document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
        document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
        document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
        document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
        document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
        $('li').remove();
        var json = loadData("data/AnneeSceneTypeGroupe.json");
        var listeGroupe1 = new Array();
        var listeGroupe2 = new Array();
        var listeGroupe3 = new Array();
        var listeGroupe4 = new Array();
        var listeGroupe5 = new Array();
        var listeGroupe6 = new Array();
        var listeGroupe7 = new Array();
        json.forEach(function(groupe){
            if (groupe.Annee === 2017 && groupe.Scene === "Altar" )
            {
                listeGroupe1.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Main 01" )
            {
                listeGroupe2.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Main 02" )
            {
                listeGroupe3.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Metal Corner" )
            {
                listeGroupe4.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Temple" )
            {
                listeGroupe5.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Valley" )
            {
                listeGroupe6.push(groupe.Groupe);
            }
            if (groupe.Annee === 2017 && groupe.Scene === "Warzone" )
            {
                listeGroupe7.push(groupe.Groupe);
            }
        });
        listeGroupe1.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene1.appendChild(choix);
        });
        listeGroupe2.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene2.appendChild(choix);
        });
        listeGroupe3.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene3.appendChild(choix);
        });
        listeGroupe4.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene4.appendChild(choix);
        });
        listeGroupe5.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene5.appendChild(choix);
        });
        listeGroupe6.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene6.appendChild(choix);
        });
        listeGroupe7.forEach(function(groupe){
            var choix = document.createElement('li');
            choix.textContent = groupe;
            scene7.appendChild(choix);
        });
        var pays1 =  camembertScene(2017, "Altar", "#pieScene1");
            for (var i = 0; i<pays1.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays1[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene1.appendChild(legende);
            }
            var pays2 = camembertScene(2017, "Main 01", "#pieScene2");
            for (var i = 0; i<pays2.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays2[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene2.appendChild(legende);
            }
            var pays3 = camembertScene(2017, "Main 02", "#pieScene3");
            for (var i = 0; i<pays3.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays3[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene3.appendChild(legende);
            }
            var pays4 = camembertScene(2017, "Metal Corner", "#pieScene4");
            for (var i = 0; i<pays4.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays4[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene4.appendChild(legende);
            }
            var pays5 = camembertScene(2017, "Temple", "#pieScene5");
            for (var i = 0; i<pays5.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays5[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene5.appendChild(legende);
            }
            var pays6 = camembertScene(2017, "Valley", "#pieScene6");
            for (var i = 0; i<pays6.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays6[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene6.appendChild(legende);
            }
            var pays7 = camembertScene(2017, "Warzone", "#pieScene7");
            for (var i = 0; i<pays7.length; i++)
                {
                    var legende = document.createElement('li');
                legende.textContent = pays7[i];
                var point = document.createElement('div');
                point.className = "pointLegendeScene";
                point.style.background = couleur[i];
                legende.appendChild(point);
                legendeScene7.appendChild(legende);
            }
    }

}


function controleurPodium()
{
    var PodiumEvolution = document.getElementById("PodiumEvolution");
    var Podium2006 = document.getElementById("Podium2006");
    var Podium2007 = document.getElementById("Podium2007");
    var Podium2008 = document.getElementById("Podium2008");
    var Podium2009 = document.getElementById("Podium2009");
    var Podium2010 = document.getElementById("Podium2010");
    var Podium2011 = document.getElementById("Podium2011");
    var Podium2012 = document.getElementById("Podium2012");
    var Podium2013 = document.getElementById("Podium2013");
    var Podium2014 = document.getElementById("Podium2014");
    var Podium2015 = document.getElementById("Podium2015");
    var Podium2016 = document.getElementById("Podium2016");
    var Podium2017 = document.getElementById("Podium2017");

    var couleur = ['#d6f2b3', '#bbdb83', '#8eaf46', '#a9ff88', '#85c275', '#57664d', '#66cc33', '#479116', '#3f5b33'];

    var tabPodiums = [PodiumEvolution, Podium2006, Podium2007, Podium2008, Podium2009, Podium2010, Podium2011, Podium2012, Podium2013, Podium2014, Podium2015, Podium2016, Podium2017];

    var TextePodium = document.getElementById("textePodium");

    var légende = document.getElementById("legendePodium");

    PodiumEvolution.onclick = function(){

        setYearActive(tabPodiums, 0);

        TextePodium.textContent = "Environ ⅓ des groupes présents pendant ces éditions viennent du pays de la country. Ils devancent de loin la France et le Royaume-Uni qui à eux deux ne parviennent même pas à égaler les Etats-Unis."
        document.getElementById("podium").className = "podium--hidden";
        document.getElementById("question").className = "texteGlobal2";
        document.getElementById("reponse").className = "dateMenu";
        document.getElementById("saviez").className = "dateMenu";
        document.getElementById("graph").className = "graph";
    }

    Podium2006.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Pour cette première édition du Hellfest, 35% des groupes proviennent des Etats-Unis. En deuxième position se trouvent la France et l'Angleterre, représentant respectivement 16% et 11% du total des groupes. 15% des groupes viennent de pays scandinaves, dont la moitié de la Suède.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";

        setYearActive(tabPodiums, 1);
        var pays = camembertPodium(2006);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }
        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2007.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "2007 s'accompagne d'une nette hausse de participation des groupes français, aussi nombreux que les groupes américains. La somme des deux représente plus de la moitié du total des groupes.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 2);
        var pays = camembertPodium(2007);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }
        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "fadeInDown animated allemand troisieme drapeau";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2008.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "En 2008, le Hellfest élargit ses horizons et accueille des groupes japonais, autrichiens et irlandais. La participation de la France diminue et équivaut presque à celle de l'Angleterre et de la Suède.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 3);
        var pays = camembertPodium(2008);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }
        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2009.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Jamais les Etats-Unis n'ont atteint un tel taux de participation : ils représentent en 2009 plus de 40% des groupes ! En revanche, les participation des pays scandinaves recule.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 4);
        var pays = camembertPodium(2009);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2010.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Les groupe français sont en perte de vitesse en cette année 2010... La Roumanie fait son entrée dans le festival avec le groupe Negurâ Bunget.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 5);
        var pays = camembertPodium(2010);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "francais deuxieme drapeau--hidden";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "fadeInDown animated anglais deuxieme drapeau";
        document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
        document.getElementById('troisiemeSuede').className = "fadeInDown animated suede troisieme drapeau";
    }
    Podium2011.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Alors que la France est toujours moins bien représentée, de nouveaux pays font leur apparition sur la scène du métal. L'Ecosse, la Russie, l'Irlande du Nord et la Letonnie sont les petits nouveaux de 2011.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 6);
        var pays = camembertPodium(2011);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "francais deuxieme drapeau--hidden";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "fadeInDown animated anglais deuxieme drapeau";
        document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
        document.getElementById('troisiemeSuede').className = "fadeInDown animated suede troisieme drapeau";
    }
    Podium2012.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "2012 est synonyme d'âge d'or des groupes français. Ils connaissent une fulgurante augmentation pour la représentativité du pays. Pour la première fois le groupe Solstafir devient ambassadeur de son pays : l'Islande.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 7);
        var pays = camembertPodium(2012);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2013.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "La Suède et l'Angleterre sont au coude à coude sur la troisième place du podium. Quant aux iles Féroé, le Chili et la Colombie, ils s'installent pour la première fois au Hellfest.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 8);
        var pays = camembertPodium(2013);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2014.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Encore jamais représentée au Hellfest, cette année l'Afrique du sud fait son entrée dans le palmarès des groupes présent au festival.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 9);
        var pays = camembertPodium(2014);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }
        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2015.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Pour la seconde fois, l'Irlande du nord est présente au Hellfest pour des représentations toujours plus impressionnantes !";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 10);
        var pays = camembertPodium(2015);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2016.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "En 2016, pour la première fois depuis la création du Hellfest, un groupe ukrainien se produit sur l'une des scènes du festival, pour le plaisir de nos oreilles.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 11);
        var pays = camembertPodium(2016);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "fadeInDown animated allemand troisieme drapeau";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
    Podium2017.onclick = function(){
        document.getElementById("podium").className = "";
        TextePodium.textContent = "Apparition inédite dans la programmation du festival en cette année 2017, la Tunisie invite le public à découvrir ses artistes aux multiples talents.";
        document.getElementById("question").className = "texteGlobal2--hidden";
        document.getElementById("reponse").className = "dateMenu--hidden";
        document.getElementById("saviez").className = "dateMenu--hidden";
        document.getElementById("graph").className = "graph--hidden";
        setYearActive(tabPodiums, 12);
        var pays = camembertPodium(2017);
        $('li').remove();
        for (var i = 0; i<pays.length; i++)
        {
            var legende = document.createElement('li');
            legende.textContent = pays[i];
            var point = document.createElement('div');
            point.className = "pointLegendePodium";
            point.style.background = couleur[i];
            legende.appendChild(point);
            legendePodium.appendChild(legende);
        }

        document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
        document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
        document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
        document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
        document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
        document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
        document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
        document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
        document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
        document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
        document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
        document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
        document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
    }
}

function pin(){

    var pin200601 =document.getElementById("pin2006-01");
    var pin200602 =document.getElementById("pin2006-02");
    var pin200701 =document.getElementById("pin2007-01");
    var pin200702 =document.getElementById("pin2007-02");
    var pin200703 =document.getElementById("pin2007-03");
    var pin200801 =document.getElementById("pin2008-01");
    var pin200802 =document.getElementById("pin2008-02");
    var pin200803 =document.getElementById("pin2008-03");
    var pin200901 =document.getElementById("pin2009-01");
    var pin200902 =document.getElementById("pin2009-02");
    var pin200903 =document.getElementById("pin2009-03");
    var pin200904 =document.getElementById("pin2009-04");
    var pin201201 =document.getElementById("pin2012-01");
    var pin201202 =document.getElementById("pin2012-02");
    var pin201203 =document.getElementById("pin2012-03");
    var pin201204 =document.getElementById("pin2012-04");
    var pin201205 =document.getElementById("pin2012-05");
    var pin201206 =document.getElementById("pin2012-06");
    var pin201207 =document.getElementById("pin2012-07");

    var s1 = document.getElementById("scene1");
    var s2 = document.getElementById("scene2");
    var s3 = document.getElementById("scene3");
    var s4 = document.getElementById("scene4");
    var s5 = document.getElementById("scene5");
    var s6 = document.getElementById("scene6");
    var s7 = document.getElementById("scene7");

    var l1 = document.getElementById("legendeScene1");
    var l2 = document.getElementById("legendeScene2");
    var l3 = document.getElementById("legendeScene3");
    var l4 = document.getElementById("legendeScene4");
    var l5 = document.getElementById("legendeScene5");
    var l6 = document.getElementById("legendeScene6");
    var l7 = document.getElementById("legendeScene7");

    var p1 = document.getElementById("pieScene1");
    var p2 = document.getElementById("pieScene2");
    var p3 = document.getElementById("pieScene3");
    var p4 = document.getElementById("pieScene4");
    var p5 = document.getElementById("pieScene5");
    var p6 = document.getElementById("pieScene6");
    var p7 = document.getElementById("pieScene7");

    var scenes = [s1, s2, s3, s4, s5, s6, s7];

    var pies = [p1, p2, p3, p4, p5, p6, p7];

    var legende = [l1, l2, l3, l4, l5, l6, l7];

    var popup = document.getElementById("fenetrePopup");
    var croix = document.getElementById("croix");
    var titre = document.getElementById("scène");

    croix.onclick = function(){
        popup.className = "fenetrePopup--hidden";
    }

    pin200601.onclick = function(){
        titre.textContent = "Hard n'Heavy";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 0);
        setElementsHidden(pies, "camembertScene",0);
        setElementsHidden(legende, "legendeScene",0);
    }
    pin200602.onclick = function(){
        titre.textContent = "Main Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 1);
        setElementsHidden(pies, "camembertScene",1);
        setElementsHidden(legende, "legendeScene",1);
    }
    pin200701.onclick = function(){
        titre.textContent = "Discover Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 0);
        setElementsHidden(pies, "camembertScene",0);
        setElementsHidden(legende, "legendeScene",0);
    }
    pin200702.onclick = function(){
        titre.textContent = "Gibson Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 1);
        setElementsHidden(pies, "camembertScene",1);
        setElementsHidden(legende, "legendeScene",1);
    }
    pin200703.onclick = function(){
        titre.textContent = "Main Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 2);
        setElementsHidden(pies, "camembertScene",2);
        setElementsHidden(legende, "legendeScene",2);


    }
    pin200801.onclick = function(){
        titre.textContent = "Discover Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 0);
        setElementsHidden(pies, "camembertScene",0);
        setElementsHidden(legende, "legendeScene",0);
    }
    pin200802.onclick = function(){
        titre.textContent = "Main 2 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 1);
        setElementsHidden(pies, "camembertScene",1);
        setElementsHidden(legende, "legendeScene",1);
    }
    pin200803.onclick = function(){
        titre.textContent = "Main 1 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 2);
        setElementsHidden(pies, "camembertScene",2);
        setElementsHidden(legende, "legendeScene",2);
    }
    pin200901.onclick = function(){
        titre.textContent = "Main 1 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 0);
        setElementsHidden(pies, "camembertScene",0);
        setElementsHidden(legende, "legendeScene",0);
    }
    pin200902.onclick = function(){
        titre.textContent = "Main 2 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 1);
        setElementsHidden(pies, "camembertScene",1);
        setElementsHidden(legende, "legendeScene",1);
    }
    pin200903.onclick = function(){
        titre.textContent = "Rock Hard tent";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 2);
        setElementsHidden(pies, "camembertScene",2);
        setElementsHidden(legende, "legendeScene",2);
    }
    pin200904.onclick = function(){
        titre.textContent = "Terrorizer tent";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 3);
        setElementsHidden(pies, "camembertScene",3);
        setElementsHidden(legende, "legendeScene",3);
    }
    pin201201.onclick = function(){
        titre.textContent = "Altar";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 0);
        setElementsHidden(pies, "camembertScene",0);
        setElementsHidden(legende, "legendeScene",0);
    }
    pin201202.onclick = function(){
        titre.textContent = "Main 1 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 1);
        setElementsHidden(pies, "camembertScene",1);
        setElementsHidden(legende, "legendeScene",1);
    }
    pin201203.onclick = function(){
        titre.textContent = "Main 2 Stage";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 2);
        setElementsHidden(pies, "camembertScene",2);
        setElementsHidden(legende, "legendeScene",2);
    }
    pin201204.onclick = function(){
        titre.textContent = "Métal Corner";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 3);
        setElementsHidden(pies, "camembertScene",3);
        setElementsHidden(legende, "legendeScene",3);
    }
    pin201205.onclick = function(){
        titre.textContent = "Temple";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 4);
        setElementsHidden(pies, "camembertScene",4);
        setElementsHidden(legende, "legendeScene",4);
    }
    pin201206.onclick = function(){
        titre.textContent = "Valley";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 5);
        setElementsHidden(pies, "camembertScene",5);
        setElementsHidden(legende, "legendeScene",5);
    }
    pin201207.onclick = function(){
        titre.textContent = "Warzone";
        popup.className = "fenetrePopup";
        setElementsHidden(scenes, "listeScene", 6);
        setElementsHidden(pies, "camembertScene",6);
        setElementsHidden(legende, "legendeScene",6);
    }
}

function controleurFrance() {

    var villes = document.getElementById("mapFrance").contentDocument;
    var villes_svg = document.getElementById("mapFrance").contentDocument.querySelectorAll(".ville");
    for (var i = 0, length = villes_svg.length; i < length; i++) {
        villes_svg[i].addEventListener("click", function() {
            popup(this.id, currentYear, dataFrance);
        },false);
    }
    d3.select(villes).selectAll("circle")
                     .attr("onmouseover", "evt.target.setAttribute('opacity', '0.5');")
                     .attr("onmouseout", "evt.target.setAttribute('opacity','1)');");

    var dataFrance = loadData('data/AnneeGroupeVilleNombreGroupes.json');


    var franceTotal = document.getElementById("franceTotal");
    var france2006 = document.getElementById("france2006");
    var france2007 = document.getElementById("france2007");
    var france2008 = document.getElementById("france2008");
    var france2009 = document.getElementById("france2009");
    var france2010 = document.getElementById("france2010");
    var france2011 = document.getElementById("france2011");
    var france2012 = document.getElementById("france2012");
    var france2013 = document.getElementById("france2013");
    var france2014 = document.getElementById("france2014");
    var france2015 = document.getElementById("france2015");
    var france2016 = document.getElementById("france2016");
    var france2017 = document.getElementById("france2017");

    var buttons = [franceTotal, france2006, france2007, france2008, france2009, france2010, france2011, france2012, france2013, france2014, france2015, france2016, france2017];

    var currentYear = "global";


    var croix = document.querySelector("#fenetrePopupFrance .croix");

    croix.onclick = function(){
        closePopup();
    }

    france2006.onclick = function(){
        currentYear = "2006";
        setYearActive(buttons, 1);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2006");
    }

    france2007.onclick = function(){
        currentYear = "2007";
        setYearActive(buttons, 2);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2007");
    }

    france2008.onclick = function(){
        currentYear = "2008";
        setYearActive(buttons, 3);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2008");
    }

    france2009.onclick = function(){
        currentYear = "2009";
        setYearActive(buttons, 4);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2009");
    }

    france2010.onclick = function(){
        currentYear = "2010";
        setYearActive(buttons, 5);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2010");
    }

    france2011.onclick = function(){
        currentYear = "2011";
        setYearActive(buttons, 6);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2011");
    }

    france2012.onclick = function(){
        currentYear = "2012";
        setYearActive(buttons, 7);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2012");
    }

    france2013.onclick = function(){
        currentYear = "2013";
        setYearActive(buttons, 8);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2013");
    }

    france2014.onclick = function(){
        currentYear = "2014";
        setYearActive(buttons, 9);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2014");
    }

    france2015.onclick = function(){
        currentYear = "2015";
        setYearActive(buttons, 10);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2015");
    }

    france2016.onclick = function(){
        currentYear = "2016";
        setYearActive(buttons, 11);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2016");
    }

    france2017.onclick = function(){
        currentYear = "2017";
        setYearActive(buttons, 12);
        reinitVilles(villes, dataFrance);
        montrerVilles(villes, dataFrance, "2017");
    }

    franceTotal.onclick = function(){
        currentYear = "global";
        setYearActive(buttons, 0);
        totalVilles(villes, dataFrance);
    }
}

/**************************************************************************************************/


function popup(nomVille, anneeCourante, data){

    if (anneeCourante !== "global") {
        document.getElementById("fenetrePopupFrance").className = "fenetrePopup";
        document.getElementById("ville").innerHTML = nomVille;
        for(var i = 0; i < data.length ; i++) {
            if (data[i].Annee == anneeCourante && data[i].Ville == nomVille) {
                addItem("artistes", data[i].Groupe);
            }
        }

    }

}

function closePopup() {
    removeItem("artistes");
    document.getElementById("fenetrePopupFrance").className = "fenetrePopup--hidden";
}


function chargement(){
    document.getElementById('jackGif').className = "jackGif--hidden";
    document.getElementById('logo').className = "logo";
    document.getElementById('bulleAccueil').className = "accueil-obtuse";
    document.getElementById('jackAccueil').className = "jackAccueil";
}


function loadData(JsonPath)
{
    var json = null;
    $.ajax({
        'async': false,
        'global':false,
        'url':JsonPath,
        'dataType':"json",
        'success':function(data)
        {
            json = data;
        }
    });
    return json;
}

function totalVilles(villes, dataFrance) {
    for (var i = 0; i < dataFrance.length; i++) {
        var circle = villes.getElementById(dataFrance[i].Ville).getElementsByTagName("circle");
        circle[0].setAttribute("r", 3.3);
        villes.getElementById(dataFrance[i].Ville).style.display = "inline";
    }
}

function reinitVilles(villes, dataFrance) {
    for (var i = 0; i < dataFrance.length; i++) {
        document.getElementById("mapFrance").contentDocument.getElementById(dataFrance[i].Ville).style.display = "none";
    }
}

function montrerVilles(villes, dataFrance, annee) {

    for (var i = 0; i < dataFrance.length; i++) {
        if (dataFrance[i].Annee == annee) {
            var circle = document.getElementById("mapFrance").contentDocument.getElementById(dataFrance[i].Ville).getElementsByTagName("circle");
            circle[0].setAttribute("r", 2.8+ 1.15*dataFrance[i].NombreGroupes);
            document.getElementById("mapFrance").contentDocument.getElementById(dataFrance[i].Ville).style.display = "inline";

        }
    }
}

function setYearActive(tabButtons, index){

    tabButtons[0].className = "pointEvolution";

    for (var i = 1; i < tabButtons.length; i++) {
        tabButtons[i].className = "point";
    }

    tabButtons[index].className = tabButtons[index].className + " active";
}

function setElementsHidden(tabElements, className, index) {

    for (var i = 0; i < tabElements.length; i++) {
        tabElements[i].className = className + "--hidden";
    }

    tabElements[index].className = className;
}

function camembert(data, id){
    var couleur = ['#d6f2b3', '#bbdb83', '#8eaf46', '#a9ff88', '#85c275', '#57664d', '#66cc33', '#479116', '#3f5b33'];
    var cam = [];
    var pour = 0;
    var j = 0;
    for (var i = 0; i < data.length; i++)
    {
        if (data[i] >=5)
        {
            cam.push({ color : couleur[j], percentage : data[i]});
            j++;
        }
        else
        {
            pour += data[i];
        }
    }
    cam.push({ color : couleur[j], percentage : pour});
    console.log(cam);
    $(function(){
        $(id).rotapie({
            slices: cam,
            sliceIndex: 0, // Start index selected slice.
            deltaAngle: 0.2, // The rotation angle in radians between frames, smaller number equals slower animation.
            minRadius: 60, // Radius of unselected slices, can be set to percentage of container width i.e. '50%'
            maxRadius: 70, // Radius of selected slice, can be set to percentage of container width i.e. '45%'
            minInnerRadius: 35, // Smallest radius inner circle when animated, set to 0 to disable inner circle, can be set to percentage of container width i.e. '35%'
            maxInnerRadius: 45, // Normal radius inner circle, set to 0 to disable inner circle, can be set to percentage of container width i.e. '30%'
            innerColor: '#fff', // Background color inner circle.
            minFontSize: 30, // Smallest fontsize percentage when animated, set to 0 to disable percentage display, can be set to percentage of container width i.e. '20%'
            maxFontSize: 40, // Normal fontsize percentage, set to 0 to disable percentage display, can be set to percentage of container width i.e. '10%'
            fontYOffset: 0, // Vertically offset the percentage display with this value, can be set to percentage of container width i.e. '-10%'
            fontFamily: 'Times New Roman', // FontFamily percentage display.
            fontWeight: 'bold', // FontWeight percentage display.
            decimalPoint: '.', // Can be set to comma or other symbol.
            clickable: true // If set to true a user can select a different slice by clicking on it.
        });
    });
    return j;
}

function camembertPodium(annee)
{
    var json = loadData("data/AnneePaysPourcentage.json");
    var pourcentage = [];
    var p = [];
    json.forEach(function(nation){
        if (nation.Annee === annee)
        {
            pourcentage.push(nation.Pourcentage);
            p.push(nation.Pays)
        }
    });
    var j = camembert(pourcentage, "#piePodium");
    var pays = [];
    var i = 0;
    var k = 0;
    while(i<j)
    {
        if (pourcentage[k] >=5)
                {
                    pays.push(p[k]);
                k++;
                i++;
            }
            else
            {
                k++;
            }
    }
    pays.push("Autres");
    return pays;
}

function camembertScene(annee, scene, id)
{
    var json = loadData("data/AnneeScenePaysNombreTotalPourcentage.json");
    var pourcentage = [];
    var p = [];
    json.forEach(function(nation){
        if (nation.Annee === annee && nation.Scene === scene )
        {
            pourcentage.push(nation.Pourcentage);
            p.push(nation.Pays)
        }
    });
    var j = camembert(pourcentage, id);
    var pays = [];
    var i = 0;
    var k = 0;
    while(i<j)
    {
        if (pourcentage[k] >=5)
                {
                    pays.push(p[k]);
                k++;
                i++;
            }
            else
            {
                k++;
            }
    }
    pays.push("Autres");
    return pays;
}

function pourcentagePays(pays)
{
    var json = loadData("data/AnneePaysPourcentage.json");
    var pourcentage = [];
    json.forEach(function(nation){
        if (nation.Pays === pays)
        {
            pourcentage.push(nation.Pourcentage);
        }
    });
    return pourcentage;
}

function addItem(ulId, value){
    var ul = document.getElementById(ulId);
    var li = document.createElement("li");
    li.setAttribute('id', value);
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
}

function removeItem(ulId){
    var ul = document.getElementById(ulId);
    var children = ul.childNodes;
    var array = Array.from(children);
    array.forEach(function(item){
        ul.removeChild(item);
    });

}

function graphiqueLine()
{
    var us = pourcentagePays("Etats-Unis");
    var fr = pourcentagePays("France");
    var al = pourcentagePays("Allemagne");
    var uk = pourcentagePays("Angleterre");
    var lineData = {
    labels : ["2006","2008","2009","2010","2011","2012","2013", "2014", "2015", "2016", "2017"],
    datasets : [
    {
      label: "My First dataset",
      fillColor : "#a9ff88",
      strokeColor : "#a9ff88",
      pointColor : "#a9ff88",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "#a9ff88",
      data : us
    },
    {
      label: "My Second dataset",
      fillColor : "rgba(151,187,205,0.2)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(151,187,205,1)",
      data : fr
    },
    {
      label: "My third dataset",
      fillColor : "rgba(151,187,205,0.2)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(151,187,205,1)",
      data : al
    },{
      label: "My last dataset",
      fillColor : "rgba(151,187,205,0.2)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(151,187,205,1)",
      data : uk
    }
    ]

  }

    // doughnut chart options
    var lineOptions = {
      responsive: true
    }

  // get line chart canvas
  var line = document.getElementById('line').getContext('2d');

  // draw line chart
  new Chart(line).Line(lineData, lineOptions);

  /* 
   * E. line chart
   */

  /* 
   * S. bar chart 
   */

  // bar chart data

}


/**********************************************************************************************************************/
//loadData();

setTimeout(function(){
    graphiqueLine();
    pin();
    controleurPodium();
    controleurFrance();
    controleurPlan();
    chargement()
},2000);

