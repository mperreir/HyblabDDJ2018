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
			]
function flush(){
	var cvs = document.getElementById("page3")
	cvs.innerHTML = ""
}
function drawBarChart(data, title){
	var sec = document.getElementById("page3").appendChild(document.createElement('section'))
	sec.className = "chart"

	var h3 = sec.appendChild(document.createElement('h3'))
			h3.innerHTML = title

	var cvs = sec.appendChild(document.createElement('canvas'))


	var ctx = cvs.getContext("2d")
	var chart = new Chart(ctx, {
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
options: { responsive:false,
    maintainAspectRatio: false}	});

}
function drawPieChart(data, title){
	var sec = document.getElementById("page3").appendChild(document.createElement('section'))
	sec.className = "chart"

	var h3 = sec.appendChild(document.createElement('h3'))
		h3.innerHTML = title

	var cvs2 = sec.appendChild(document.createElement('canvas'))
	var ctx2 = cvs2.getContext("2d")

	var myPieChart = new Chart(ctx2,{
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

/*
 //RIP lucas
function drawPieChart(data){

    console.log(data);
    var mydata = [10, 20, 100];

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });  

    var svg = d3.select("#page3").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(mydata))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return d.data; });

}
*/
