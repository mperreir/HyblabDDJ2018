var slider = document.getElementById("myRange");
var output = document.getElementById("valueYear");
var age = document.getElementById("txt5x4");
var img = document.getElementById("img5x1");
/*output.innerHTML = slider.value;*/
age.innerHTML = 48;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
					
	/*output.innerHTML = this.value;*/
					
	if((this.value >= 0)&&(this.value <= 21)){
		img.src="img/illu_vieillissement.png";
		age.innerHTML = 48;
	}
					
	else if ((this.value > 21)&&(this.value <= 40)){
		img.src="img/illu_vieillissement2.png";
		age.innerHTML = 43;
	}
	
	else if ((this.value > 40)&&(this.value <= 59)){
		img.src="img/illu_vieillissement2.png";
		age.innerHTML = 39;
	}
					
	else if ((this.value > 59)&&(this.value <= 79)){
		img.src="img/illu_vieillissement3.png";
		age.innerHTML = 35;
	}
					
	else if ((this.value > 79)&&(this.value <= 97)){
		img.src="img/illu_vieillissement3.png";
		age.innerHTML = 30;
	}
	
	else if ((this.value > 97)&&(this.value <= 100)){
		img.src="img/illu_vieillissement3.png";
		age.innerHTML = 20;
	}
}