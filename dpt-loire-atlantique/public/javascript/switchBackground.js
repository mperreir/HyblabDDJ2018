var graph = 0;
document.getElementsByClassName("graph7")[0].style.display = 'none';

function switchBackground(id){
																
		if(id == 0){								
			document.getElementsByClassName("img7x1")[0].src="img/illu_matin.png";
			document.getElementsByClassName("button7x1")[0].style.backgroundColor = '#ffca18';
			document.getElementsByClassName("txt7x9")[0].style.display = 'block';
			document.getElementsByClassName("txt7x10")[0].style.display = 'none';
			document.getElementsByClassName("txt7x11")[0].style.display = 'none';
			document.getElementsByClassName("txt7x12")[0].style.display = 'none';
			document.getElementsByClassName("txt7x13")[0].style.display = 'none';
			
		}
		
		else if(id == 1){					
			document.getElementsByClassName("img7x1")[0].src="img/illu_21h.png";
			document.getElementsByClassName("button7x2")[0].style.backgroundColor = '#f65e53';	
			document.getElementsByClassName("txt7x10")[0].style.display = 'block';
			document.getElementsByClassName("txt7x9")[0].style.display = 'none';
			document.getElementsByClassName("txt7x11")[0].style.display = 'none';
			document.getElementsByClassName("txt7x12")[0].style.display = 'none';
			document.getElementsByClassName("txt7x13")[0].style.display = 'none';
		}
		
		else if(id == 2){						
			document.getElementsByClassName("img7x1")[0].src="img/illu_samedi.png";
			document.getElementsByClassName("button7x3")[0].style.backgroundColor = '#67c7f7';
			document.getElementsByClassName("txt7x11")[0].style.display = 'block';	
			document.getElementsByClassName("txt7x9")[0].style.display = 'none';
			document.getElementsByClassName("txt7x10")[0].style.display = 'none';
			document.getElementsByClassName("txt7x12")[0].style.display = 'none';
			document.getElementsByClassName("txt7x13")[0].style.display = 'none';
		}
		
		else if(id == 3){							
			document.getElementsByClassName("img7x1")[0].src="img/illu_dimanche.png";
			document.getElementsByClassName("button7x4")[0].style.backgroundColor = '#2ae98c';
			document.getElementsByClassName("txt7x12")[0].style.display = 'block';
			document.getElementsByClassName("txt7x9")[0].style.display = 'none';
			document.getElementsByClassName("txt7x10")[0].style.display = 'none';
			document.getElementsByClassName("txt7x11")[0].style.display = 'none';
			document.getElementsByClassName("txt7x13")[0].style.display = 'none';
		}
		
		else if(id == 4){							
			document.getElementsByClassName("img7x1")[0].src="img/illu_nuit.png";
			document.getElementsByClassName("button7x5")[0].style.backgroundColor = '#37004d';
			document.getElementsByClassName("txt7x13")[0].style.display = 'block';	
			document.getElementsByClassName("txt7x9")[0].style.display = 'none';
			document.getElementsByClassName("txt7x10")[0].style.display = 'none';
			document.getElementsByClassName("txt7x11")[0].style.display = 'none';
			document.getElementsByClassName("txt7x12")[0].style.display = 'none';			
		}
		
		else if(id == 5){
					
			if(graph == 0){
				document.getElementsByClassName("graph7")[0].style.display = 'block';
				document.getElementsByClassName("button7x6")[0].style.backgroundColor = '#9B59B6';
				graph = 1;
			}
			
			else if(graph == 1){
				document.getElementsByClassName("graph7")[0].style.display = 'none';
				document.getElementsByClassName("button7x6")[0].style.backgroundColor = '#bbbbbb';
				graph = 0;
			}
		}
}		
					

				