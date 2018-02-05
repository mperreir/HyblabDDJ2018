function suivant(id){
				
	if(id == 31){
		document.getElementsByClassName("txt3xquestion")[0].style.display = 'none';
		document.getElementsByClassName("txt3xchoix1")[0].style.display = 'none';
		document.getElementsByClassName("txt3xchoix2")[0].style.display = 'none';
		document.getElementsByClassName("txt3xchoix3")[0].style.display = 'none';
		document.getElementsByClassName("txt3xchoix4")[0].style.display = 'none';
		document.getElementsByClassName("suivant3")[0].style.display = 'none';
		document.getElementsByClassName("precedent3")[0].style.display = 'block';							
		document.getElementsByClassName("txt3x3")[0].style.display = 'block';
		document.getElementsByClassName("txt3x4")[0].style.display = 'block';
		document.getElementsByClassName("bulle3")[0].style.display = 'none';
		document.getElementsByClassName("graph3")[0].style.opacity = '1';
		document.getElementsByClassName("graph3")[0].style.zIndex = '2';
		document.getElementsByClassName("graph3")[0].style.left = '25%';
		document.getElementsByClassName("img3x2")[0].style.display = 'block';
	}
					
	else if(id == 41){
		document.getElementsByClassName("txt4xchoix1")[0].style.display = 'none';
		document.getElementsByClassName("txt4xchoix2")[0].style.display = 'none';
		document.getElementsByClassName("txt4xchoix3")[0].style.display = 'none';
		document.getElementsByClassName("txt4xchoix4")[0].style.display = 'none';
		document.getElementsByClassName("suivant4")[0].style.display = 'none';
		document.getElementsByClassName("suivant4x2")[0].style.display = 'block';
		document.getElementsByClassName("txt4xquestion")[0].style.display = 'none';
		document.getElementsByClassName("txt4x3")[0].style.display = 'block';
		document.getElementsByClassName("txt4x4")[0].style.display = 'block';
		document.getElementsByClassName("precedent4")[0].style.display = 'block';
	}
					
	else if(id == 42){
		document.getElementsByClassName("txt4x3")[0].style.display = 'none';
		document.getElementsByClassName("txt4x4")[0].style.display = 'none';
		document.getElementsByClassName("suivant4x2")[0].style.display = 'none';
		document.getElementsByClassName("graph4")[0].style.opacity = '1';
		document.getElementsByClassName("graph4")[0].style.zIndex = '2';
		document.getElementsByClassName("graph4")[0].style.left = '20%';
		document.getElementsByClassName("precedent4")[0].style.display = 'none';
		document.getElementsByClassName("precedent4x2")[0].style.display = 'block';
	}

	else if(id == 7){
		document.getElementsByClassName("txt7xchoix1")[0].style.display = 'none';
		document.getElementsByClassName("txt7xchoix2")[0].style.display = 'none';
		document.getElementsByClassName("txt7xchoix3")[0].style.display = 'none';
		document.getElementsByClassName("txt7xchoix4")[0].style.display = 'none';
		document.getElementsByClassName("suivant7")[0].style.display = 'none';
		document.getElementsByClassName("precedent7")[0].style.display = 'block';
		document.getElementsByClassName("txt7xquestion")[0].style.display = 'none';
		document.getElementsByClassName("txt7x3")[0].style.display = 'block';
		document.getElementsByClassName("txt7x4")[0].style.display = 'block';
	}						
}
				
function precedent(id){
				
	if(id == 31){
		document.getElementsByClassName("txt3xquestion")[0].style.display = 'block';
		document.getElementsByClassName("txt3xchoix1")[0].style.display = 'block';
		document.getElementsByClassName("txt3xchoix2")[0].style.display = 'block';
		document.getElementsByClassName("txt3xchoix3")[0].style.display = 'block';
		document.getElementsByClassName("txt3xchoix4")[0].style.display = 'block';
		document.getElementsByClassName("suivant3")[0].style.display = 'block';
		document.getElementsByClassName("precedent3")[0].style.display = 'none';							
		document.getElementsByClassName("txt3x3")[0].style.display = 'none';
		document.getElementsByClassName("txt3x4")[0].style.display = 'none';
		document.getElementsByClassName("graph3")[0].style.opacity = '0';
		document.getElementsByClassName("graph3")[0].style.zIndex = '-1';
		document.getElementsByClassName("graph3")[0].style.left = '200%';
		document.getElementsByClassName("img3x2")[0].style.display = 'none';
	}
								
	else if(id == 41){
		document.getElementsByClassName("txt4xchoix1")[0].style.display = 'block';
		document.getElementsByClassName("txt4xchoix2")[0].style.display = 'block';
		document.getElementsByClassName("txt4xchoix3")[0].style.display = 'block';
		document.getElementsByClassName("txt4xchoix4")[0].style.display = 'block';
		document.getElementsByClassName("suivant4")[0].style.display = 'block';
		document.getElementsByClassName("suivant4x2")[0].style.display = 'none';
		document.getElementsByClassName("txt4xquestion")[0].style.display = 'block';
		document.getElementsByClassName("txt4x3")[0].style.display = 'none';
		document.getElementsByClassName("txt4x4")[0].style.display = 'none';
		document.getElementsByClassName("precedent4")[0].style.display = 'none';
	}
				
	else if(id == 42){
		document.getElementsByClassName("graph4")[0].style.opacity = '0';
		document.getElementsByClassName("graph4")[0].style.zIndex = '-1';
		document.getElementsByClassName("graph4")[0].style.left = '200%';
		document.getElementsByClassName("txt4x3")[0].style.display = 'block';
		document.getElementsByClassName("txt4x4")[0].style.display = 'block';
		document.getElementsByClassName("suivant4x2")[0].style.display = 'block';
		document.getElementsByClassName("precedent4")[0].style.display = 'block';
		document.getElementsByClassName("precedent4x2")[0].style.display = 'none';
	}
	
	else if(id == 7){
		document.getElementsByClassName("txt7xchoix1")[0].style.display = 'block';
		document.getElementsByClassName("txt7xchoix2")[0].style.display = 'block';
		document.getElementsByClassName("txt7xchoix3")[0].style.display = 'block';
		document.getElementsByClassName("txt7xchoix4")[0].style.display = 'block';
		document.getElementsByClassName("suivant7")[0].style.display = 'block';
		document.getElementsByClassName("precedent7")[0].style.display = 'none';
		document.getElementsByClassName("txt7xquestion")[0].style.display = 'block';
		document.getElementsByClassName("txt7x3")[0].style.display = 'none';
		document.getElementsByClassName("txt7x4")[0].style.display = 'none';
	}						
}