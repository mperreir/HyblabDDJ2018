var params_jules_verne = {
        container: document.getElementById('jules_verne'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: jules_verne,
	name: 'julesverne',
    };


    var anim_jules_verne;


function anim_chiffre1() {
	anim_chiffre_1 = lottie.loadAnimation(params_chiffre_1);
}

function anim_chiffre2() {
	anim_chiffre_2 = lottie.loadAnimation(params_chiffre_2);
}

function anim_chiffre3() {
	anim_chiffre_3 = lottie.loadAnimation(params_chiffre_3);
}

function anim_chiffre4() {
	anim_chiffre_4 = lottie.loadAnimation(params_chiffre_4);
}

function anim_chiffre5() {
	anim_chiffre_5 = lottie.loadAnimation(params_chiffre_5);
}

function anim_jules_verne() {
	lottie.play();
}
	  
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        afterLoad: function(anchorLink, index){
    	  			  //Anim CSS arrière Plan class:visited
        var currentSection = $('#fullpage').children().eq(index - 1);
        currentSection.addClass('visited');
    	var loadedSection = $(this);

        //Anim Jules Verne section se lance à l'entrée

        if(index === 2 && jules_verne_activ === 0){
			
            setTimeout(anim_jules_verne, 1000);
			lottie.play();
            jules_verne_activ = 1;
        }
    	  
    	//Anim chiffre section se lance à l'entrée
        if(index === 3 && chiffre1_activ === 0){
    	   setTimeout(anim_chiffre1, 1000);
    	   chiffre1_activ = 1;
        }

    	if(index === 4 && chiffre2_activ === 0){
    	   setTimeout(anim_chiffre2, 1000);
    	   chiffre2_activ = 2;
    	}

    	if(index === 5 && chiffre3_activ === 0){
    	   setTimeout(anim_chiffre3, 1000);
    		chiffre3_activ = 3;
    	}
    	  
        if(index === 6 && chiffre4_activ === 0){
    	   setTimeout(anim_chiffre4, 1000);
    		chiffre4_activ = 4;
    	  }

    	if(index === 7 && chiffre5_activ === 0){
    	   setTimeout(anim_chiffre5, 1000);
    		chiffre5_activ = 5;
    	}
        }			  
          
    });
});

var chiffre1_activ = 0;
var chiffre2_activ = 0;
var chiffre3_activ = 0;
var chiffre4_activ = 0;
var chiffre5_activ = 0;
var jules_verne_activ = 0;

var params_chiffre_1 = {
        container: document.getElementById('chiffre1'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: chiffre_1,
    };


 	var anim_chiffre_1;

var params_chiffre_2 = {
        container: document.getElementById('chiffre2'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: chiffre_2,
    };


 	var anim_chiffre_2;

var params_chiffre_3 = {
        container: document.getElementById('chiffre3'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: chiffre_3,
    };


 	var anim_chiffre_3;

var params_chiffre_4 = {
        container: document.getElementById('chiffre4'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: chiffre_4,
    };


 	var anim_chiffre_4;

var params_chiffre_5 = {
        container: document.getElementById('chiffre5'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: chiffre_5,
    };


 	var anim_chiffre_5;

var params_jules_verne = {
        container: document.getElementById('jules_verne'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: jules_verne,
	name: 'jules_verne',
    };


    var anim_jules_verne;

    anim_jules_verne = lottie.loadAnimation(params_jules_verne);

	