var answeredQ1 = 0;
var answeredQ2 = 0;
var answeredQ3 = 0;
var answeredQ3x1 = 0;
var answeredQ3x2 = 0;
var answeredQ3x3 = 0;
var answeredQ3x4 = 0;
				
function reponseQ1(id){
									
	if(answeredQ1 == 0){
					
		if(id==1){
			document.getElementsByClassName("txt3xchoix1")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix1")[0].style.color = 'white';
		    document.getElementsByClassName("txt3xchoix1")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
		    document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
			answeredQ1 = 1;					
		}
						
		else if(id==2){
			document.getElementsByClassName("txt3xchoix2")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix2")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix2")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
			answeredQ1 = 1;
		}
						
		else if(id==3){
			document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
			answeredQ1 = 1;
		}
						
		else if(id==4){
			document.getElementsByClassName("txt3xchoix4")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix4")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
			answeredQ1 = 1;
		}
						
		document.getElementsByClassName("suivant3")[0].style.display = 'block';
	}					
}
				
function reponseQ2(id){
									
	if(answeredQ2 == 0){
					
		if(id==1){
			document.getElementsByClassName("txt4xchoix1")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix1")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix1")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix4")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt4xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix4")[0].style.borderColor = '#aec900';
			answeredQ2 = 1;					
		}
						
		else if(id==2){
			document.getElementsByClassName("txt4xchoix2")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix2")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix2")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix4")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt4xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix4")[0].style.borderColor = '#aec900';
			answeredQ2 = 1;
		}
						
		else if(id==3){
			document.getElementsByClassName("txt4xchoix3")[0].style.backgroundColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix3")[0].style.borderColor = '#DD2D4A';
			document.getElementsByClassName("txt4xchoix4")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt4xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix4")[0].style.borderColor = '#aec900';
			answeredQ2 = 1;
		}
						
		else if(id==4){
			document.getElementsByClassName("txt4xchoix4")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt4xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt4xchoix4")[0].style.borderColor = '#aec900';
			answeredQ2 = 1;
		}
						
		document.getElementsByClassName("suivant4")[0].style.display = 'block';
	}					
}
				
function reponseQ3(id){
									
	if(answeredQ3 == 0){
					
		if((id==1)&&(answeredQ3x1==0)){
			document.getElementsByClassName("txt7xchoix1")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt7xchoix1")[0].style.color = 'white';
			document.getElementsByClassName("txt7xchoix1")[0].style.borderColor = '#aec900';
			answeredQ3x1 = 1;					
		}
						
		else if((id==2)&&(answeredQ3x2==0)){
			document.getElementsByClassName("txt7xchoix2")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt7xchoix2")[0].style.color = 'white';
			document.getElementsByClassName("txt7xchoix2")[0].style.borderColor = '#aec900';
			answeredQ3x2 = 1;
		}
						
		else if((id==3)&&(answeredQ3x3==0)){
			document.getElementsByClassName("txt7xchoix3")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt7xchoix3")[0].style.color = 'white';
			document.getElementsByClassName("txt7xchoix3")[0].style.borderColor = '#aec900';
			answeredQ3x3 = 1;
		}
						
		else if((id==4)&&(answeredQ3x4==0)){
			document.getElementsByClassName("txt7xchoix4")[0].style.backgroundColor = '#aec900';
			document.getElementsByClassName("txt7xchoix4")[0].style.color = 'white';
			document.getElementsByClassName("txt7xchoix4")[0].style.borderColor = '#aec900';
			answeredQ3x4 = 1;
		}
						
		if((answeredQ3x1==1)&&(answeredQ3x2==1)&&(answeredQ3x3==1)&&(answeredQ3x4==1)){
			document.getElementsByClassName("suivant7")[0].style.display = 'block';
			answeredQ3=1;
		}
	}					
}
				