var compteurMarquee = 1;
var marquee1 = document.getElementById("marquee1");
var marquee2 = document.getElementById("marquee2");
var marquee3 = document.getElementById("marquee3");
				
								
function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
				
function marqueeLoad(id){
					
	document.getElementById("marquee1").stop();
	document.getElementById("marquee1").style.display = 'none';
	document.getElementById("marquee2").stop();
	document.getElementById("marquee2").style.display = 'none';
	document.getElementById("marquee3").stop();
	document.getElementById("marquee3").style.display = 'none';
										
	if(compteurMarquee <= 5){
		if(id==1){
			document.getElementById("marquee1").innerHTML = 'EPATENT !';
			document.getElementById("marquee1").stop();
			document.getElementById("marquee1").style.display = 'none';
			document.getElementById("marquee2").stop();
			document.getElementById("marquee2").style.display = 'none';
			document.getElementById("marquee3").stop();
			document.getElementById("marquee3").style.display = 'none';
			document.getElementById("marquee1").start();
			document.getElementById("marquee1").style.display = 'block';
			sleep(2000).then(() => {							
				document.getElementById("marquee2").setAttribute("loop", compteurMarquee);
				document.getElementById("marquee1").onfinish = marqueeLoad(2);
			});						
		}
						
		else if(id==2){
			document.getElementById("marquee2").innerHTML = 'ECLATENT !';
			document.getElementById("marquee1").stop();
			document.getElementById("marquee1").style.display = 'none';
			document.getElementById("marquee2").stop();
			document.getElementById("marquee2").style.display = 'none';
			document.getElementById("marquee3").stop();
			document.getElementById("marquee3").style.display = 'none';
			document.getElementById("marquee2").start();
			document.getElementById("marquee2").style.display = 'block';
			sleep(2000).then(() => {
				document.getElementById("marquee3").setAttribute("loop", compteurMarquee)
				document.getElementById("marquee2").onfinish = marqueeLoad(3);
			});
		}
						
		else if(id==3){
			document.getElementById("marquee3").innerHTML = 'FONT DES PATES !';
			document.getElementById("marquee1").stop();
			document.getElementById("marquee1").style.display = 'none';
			document.getElementById("marquee2").stop();
			document.getElementById("marquee2").style.display = 'none';
			document.getElementById("marquee3").stop();
			document.getElementById("marquee3").style.display = 'none';
			document.getElementById("marquee3").start();
			document.getElementById("marquee3").style.display = 'block';
			compteurMarquee=compteurMarquee+1;
			sleep(2000).then(() => {
				document.getElementById("marquee1").setAttribute("loop", compteurMarquee)
				document.getElementById("marquee3").onfinish = marqueeLoad(1);
			});
		}
	}
					
	else{					
		document.getElementById("marquee1").stop();
		document.getElementById("marquee1").style.display = 'none';
		document.getElementById("marquee2").stop();
		document.getElementById("marquee2").style.display = 'none';
		document.getElementById("marquee3").stop();
		document.getElementById("marquee3").style.display = 'none';
		document.getElementsByClassName("txt1x5")[0].innerHTML = "EPATENT !";	
	}
}
				