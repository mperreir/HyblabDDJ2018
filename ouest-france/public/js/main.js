'use strict'
console.log("début main");

function controleur(){
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

	annee2006.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte ";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}

	annee2007.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}
	annee2008.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte";
		document.getElementById("carte09").className = "2009 divCarte hidden";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}

	annee2009.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}
	annee2010.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}
	annee2011.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte hidden";
	}
	annee2012.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
	annee2013.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
	annee2014.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
	annee2015.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
	annee2016.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
	annee2017.onclick = function(){
		document.getElementById("carte06").className = "2006 divCarte hidden";
		document.getElementById("carte07").className = "2007 divCarte hidden";
		document.getElementById("carte08").className = "2008 divCarte hidden";
		document.getElementById("carte09").className = "2009 divCarte hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
	}
}

controleur();