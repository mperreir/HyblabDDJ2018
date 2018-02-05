var displayBulle2=0;
var displayBulle3=0;
var displayBulle6=0;
				
function definition(id){
			
	if(id == 2){
		if(displayBulle2==0){
			document.getElementsByClassName("bulle2")[0].style.display = 'table';
			displayBulle2=1;
		}
		else if(displayBulle2==1){
			document.getElementsByClassName("bulle2")[0].style.display = 'none';
			displayBulle2=0;
		}
	}	
			
	else if(id == 3){
		if(displayBulle3==0){
			document.getElementsByClassName("bulle3")[0].style.display = 'table';
			displayBulle3=1;
		}
		else if(displayBulle3==1){
			document.getElementsByClassName("bulle3")[0].style.display = 'none';
			displayBulle3=0;
		}
	}
	
	else if(id == 6){
		if(displayBulle6==0){
			document.getElementsByClassName("bulle6")[0].style.display = 'table';
			displayBulle6=1;
		}
		else if(displayBulle6==1){
			document.getElementsByClassName("bulle6")[0].style.display = 'none';
			displayBulle6=0;
		}
	}
}