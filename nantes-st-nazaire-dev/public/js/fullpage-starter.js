$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'sectionsColor': ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Introduction', 'Les villes concurrentes', 'Nantes-St-Nazaire', 'Synthèse', 'Remerciements'],
        menu: false,
        anchors:[],
        navigationColor: 'blue',
        scrollBar: false,
        //scrolling
        'css3': true,
        scrollingSpeed: 900,
        autoScrolling: true,

        //Accessibility
        keyboardScrolling: true,
        recordHistory: true
    });

    //Chevrons des titres du menu
    $(".chevron").css("visibility","hidden");
    $(".menu .cat0 .chevron").css("visibility","visible");

    //Les catégories sont désactivées sauf la catégorie d'indice 0 qui est activée par défaut
    setDescriptions(0); 

    $(".categorie").click(function() {
        var id = $(this).attr("id");
        
        if( $(this).hasClass("active-des") != true) {
            console.log("lololo " + id)
            activateDescription(id); //Rend visible la decription de la catégorie qui est survolée
        }
    });

    $(".categorie").css("position", "relative");
    $(".categorie").hover(
    function() {
        var id = $(this).attr("id");
        $("div.cat" + id).velocity({
            width: "+=20",
            height: "+=6",
            marginBottom: "-=6",
            top: "-=3"
            
        }, 100);
        $("div.cat" + id +" h2").velocity({
            fontSize: "+=3",
            marginTop: "+=3"
        }, 100);
    },
    function() {
        var id = $(this).attr("id");
        $("div.cat" + id).velocity({
            width: "-=20",
            height: "-=6",
            marginBottom: "+=6",
            top: "+=3"
        }, 100);
        $("div.cat" + id +" h2").velocity({
            fontSize: "-=3",
            marginTop: "-=3"
        }, 100);
    });

$.fn.fullpage.moveSectionDown(); $.fn.fullpage.moveSectionDown(); $.fn.fullpage.moveSectionDown();
});

function setDescriptions(id) {
    $("section.categorie-des").css("opacity","0");
    $("section.categorie-des").css("z-index","0");
    $("section.categorie-des").velocity({
        left: "+=10"
    });
    
    $("div.cat" + id).addClass("active-des");
    $("div.cat" + id + ' h2').css("color","#FFCC01");
    $("section.cat" + id).addClass("active-des");
    $("section.cat" + id).css("z-index","2");
    
    $("section.cat" + id).velocity({
        opacity: 1,
        left: "-=60"
    });
    
}

function activateDescription(id) {
    var exId = $("div.active-des").attr("id");
    console.log("ex active" + exId)

    $("section.cat" + exId).velocity({
        left: "-=60",
        opacity: 0
      }, 300, function() {
        
    });
    $("section.cat" + exId).velocity({
        
      }, 300, function() {
        
    });

    //Après avoir caché la div active
    $("section.cat" + exId).removeClass("active-des");
    $(".menu .cat" + exId + ' h2').css("color","white");

    $("section.cat" + exId).css("z-index","1");
    $("div.cat" + exId).removeClass("active-des");
    console.log("cach div.cat" + exId)
    //Affichage de la nouvelle div active
    $("section.cat" + id).velocity({
        opacity: 1,
        left: "-=60"
    });
    $("div.cat" + id).addClass("active-des");
    $("section.cat" + id).addClass("active-des");
    $("section.cat" + id).css("z-index","6");
    $(".menu .cat" + id + ' h2').css("color","#FFCC01");
    $(".chevron").css("visibility","hidden");
    $(".menu .cat" + id + ' .chevron').css("visibility","visible");

    $("section.cat" + exId).velocity({
        left: "+=120"
    });
}