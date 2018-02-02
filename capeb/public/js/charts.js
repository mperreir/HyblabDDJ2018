var colors = [
			'rgb(230, 25, 75)',
			'rgb(60, 180, 75)',
			'rgb(255, 225, 25)',
			'rgb(0, 130, 200)',
			'rgb(245, 130, 48)',
			'rgb(70, 240, 240)',
			'rgb(240, 50, 230)',
			'rgb(210, 245, 60)',
			'rgb(250, 190, 190)',
			'rgb(0, 128, 128)',
			'rgb(230, 190, 255)',
			'rgb(170, 110, 40)',
			'rgb(255, 250, 200)',
			'rgb(128, 0, 0)',
			'rgb(170, 255, 195)',
			'rgb(128, 128, 0)'
			];

function flush(){
	var cvs = document.getElementById("page3");
	cvs.innerHTML = ""
}
function drawLineChart(data, title){
	var sec = document.getElementById("page3").appendChild(document.createElement('section'));
	sec.className = "chart";

	var h3 = sec.appendChild(document.createElement('h3'))
			h3.innerHTML = title;

	var cvs = sec.appendChild(document.createElement('canvas'))

	var d = data.values.slice(1).map((val, i) => {return {
														label: data.labels[i+1], 
														backgroundColor: colors[i], 
														borderColor: colors[i], 
														data: val,
													    fill: false
														}
												})
	var ctx = cvs.getContext("2d")
		new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',

		// The data for our dataset
		data: {
			labels: data.values[0],
			datasets: d
		},
		// Configuration options go here
		options: { 
				responsive:false,
				maintainAspectRatio: false
				}	
	});

}
function drawBarChart(data, title){
	var sec = document.getElementById("page3").appendChild(document.createElement('section'))
	sec.className = "chart"

	var h3 = sec.appendChild(document.createElement('h3'))
			h3.innerHTML = title

	var cvs = sec.appendChild(document.createElement('canvas'))


	var ctx = cvs.getContext("2d")
	new Chart(ctx, {
		// The type of chart we want to create
		type: 'bar',

		// The data for our dataset
		data: {
			labels: data.labels,
			datasets: [{
				label: "Activte",
				backgroundColor: colors,
				borderColor: colors,
				data: data.values,
			}]
		},

		// Configuration options go here
		options: { 
				responsive:false,
				maintainAspectRatio: false
				}	
	});

}
function drawPieChart(data, title){
	var sec = document.getElementById("page3").appendChild(document.createElement('section'))
	sec.className = "chart"

	var h3 = sec.appendChild(document.createElement('h3'))
		h3.innerHTML = title

	var cvs2 = sec.appendChild(document.createElement('canvas'))
	var ctx2 = cvs2.getContext("2d")

	new Chart(ctx2,{
		type: 'pie',
		data: {
				labels: data.labels,
				datasets: [{
					label: "Activte",

					data: data.values,
					backgroundColor: colors,
				}]
			},
		options: { responsive:false,
		maintainAspectRatio: false,
		}
	});
}

function drawBubbleChart(data){

	function scale(number){
		var start = 10;
		var inc = 8;
		if (number == 0){
			return start;
		} else if(number <= 2){
			return start+inc;
		} else if(number <= 5){
			return start+inc*2;
		} else if(number <= 10){
            return start+inc*3;
        } else {
			return start+inc*4;
		}
	}

    var sec = document.getElementById("page3").appendChild(document.createElement('section'));
    sec.className = "chart";

    var h3 = sec.appendChild(document.createElement('h3'));
    h3.innerHTML = "Jusqu'où peuvent-ils aller ?";

    var cvs = sec.appendChild(document.createElement('canvas'));
    var ctx = cvs.getContext("2d");
    ctx.canvas.width = 500;
    ctx.canvas.height = 700;

    var points = {datasets: [{
			data:[]
		}]};

	data.values.forEach(function(value){
        var point = {};
		point.x = value[2];
		point.y = 0.5;
		point.r = scale(value[1]);
		point.metier = value[0];
		points.datasets[0].data.push(point);
	});

	var colorMatch = {
		Aut:colors[0],
		Ele: colors[1],
		maç: colors[2],
    	men: colors[3],
        Mét: colors[4],
        Pei: colors[5],
        plâ: colors[6],
        plo: colors[7],
        Tra: colors[8]
};

    var options = {
        legend: false,
    	tooltips: false,
        elements: {
            point: {
                backgroundColor: function(context){
                    var value = context.dataset.data[context.dataIndex];
                    return colorMatch[value.metier.substr(0, 3)];
				},

            	r: function (context) {
                    var value = context.dataset.data[context.dataIndex];
                    var size = context.chart.width;
                    var base = Math.abs(value.v) / 1000;
                    return (size *2) * base;
                }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                },
				scaleLabel : {
                	display: true,
					labelString: "Distance en kilomètres"
				}
            }],
            yAxes: [{
            	ticks: {
            		display:false
				},
                gridLines: {
                    display:false,
					drawBorder: false
                }
            }]
        }
    };


    new Chart(ctx, {
        type: 'bubble',
        data: points,
        options: options
    });

}