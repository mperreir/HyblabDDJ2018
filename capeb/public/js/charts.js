var colors = [
    'rgba(223,38,29,1)',
    'rgba(213,188,40,1)',
    'rgba(88,83,83,1)',
    'rgba(100,191,182,1)',
    'rgba(104,192,237,1)',
    'rgba(235,103,105,1)',
    'rgba(29, 29, 27, 1)',
    'rgba(255,224,0,1)',
    'rgba(255,224,0,1)',
    'rgba(255,224,0,1)'
];
var colorZoom = [
    'rgba(223,38,29,0.8)',
    'rgba(104,192,237,0.8)',
    'rgba(255,224,0,0.8)',
];

var wordCloud = (FreinsMP) => {
    var frequency_list = FreinsMP.values[0].map((name, id) => {
        return {
            "text": name,
            "size": FreinsMP.values[1][id]
        };
    })

   var fill = d3.scale.category20();

	var layout = d3.layout.cloud()
    .size([500, 500])
    .words(frequency_list)
    .padding(5)
    .font("Montserrat', sans-serif")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

	layout.start();
    function draw(words) {
		$("#dataviz").html("")
        d3.select("#dataviz").append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) {
                return d.size + "px";
            })
            .style("font-family", "Montserrat', sans-serift")
            .style("fill", function(d, i) {
                return fill(i);
            })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) {
                return d.text;
            });
    };
};

var drawChart3dEmploi = function(data) {

    var sec = document.getElementById("dataviz-section");
    if (sec !== null) {
        sec.remove();
    }
    sec = document.getElementById("dataviz").appendChild(document.createElement('section'));
    sec.setAttribute("id", "dataviz-section");

    var canvas = document.getElementById("canvas-dataviz");
    if (canvas !== null) {
        canvas.remove();
    }
    canvas = document.createElement('canvas');
    canvas.setAttribute("id", "canvas-dataviz");

    var cvs = sec.appendChild(canvas);


    var ctx = cvs.getContext("2d");

    var region = {
        "labels": ["annee", "Moy_recrutement_envi"],
        "values": [
            ["2014", "2015", "2016", "2017"],
            ["1.11538461538462", "1.13223140495868", "1.11678832116788", "1.35028248587571"]
        ]

    };
    data2 = [data.Recrutement_Evo, region];
    var labels = ["Epci", "Région"];
    var d = data2.map(function(val, i) {
        return {
            label: labels[i],
            backgroundColor: colorZoom[i+1],
            borderColor: colorZoom[i+1],
            borderWidth: "0",
            data: val.values[1].map(Number),
            fill: true
        }
    });

    var ch = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: data2[0].values[0],
            datasets: d
        },
        // Configuration options go here
        options: {
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true,
                onHover: function(e) {
                    var point = this.getElementAtEvent(e);
                    if (point.length) e.target.style.cursor = 'pointer';
                    else e.target.style.cursor = 'default';
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Année'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true // minimum value will be 0.
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Moyenne Nb récrutement envisagé'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            }
        }
    });

    cvs.onclick = function(evt) {
        var activePoints = ch.getElementsAtEvent(evt);
        if (activePoints[0]) {
            var chartData = activePoints[0]['_chart'].config.data;
            var idx = activePoints[0]['_index'];

            var label = chartData.labels[idx];
            var value = chartData.datasets[0].data[idx];

            var i = data.Recrutement_Evo_Act.values[0].indexOf(label)
            var p = {
                "labels": data.Recrutement_Evo_Act.labels.slice(1),
                "values": data.Recrutement_Evo_Act.values[1 + i]
            };
            $(".plus").html("");

            drawBarChart(p, "Moyenne Nb récrutement envisagé")
        }
    };
};


function drawLineChart(data){
    var sec = document.getElementById("dataviz-section");
    if(sec !== null) {
        sec.remove();
    }
    sec = document.getElementById("dataviz").appendChild(document.createElement('section'));
    sec.setAttribute("id", "dataviz-section");

    var canvas = document.getElementById("canvas-dataviz");
    if(canvas !== null){
        canvas.remove();
    }
    canvas = document.createElement('canvas');
    canvas.setAttribute("id", "canvas-dataviz");

    var cvs = sec.appendChild(canvas);

	var d =  {
		datasets: [],
		labels: []
	};
    var dataset = {
      data: [],
      label: "EPCI",
      backgroundColor: colorZoom[1],
      borderWidth: "0"};

    var datasetRegion = {data: [], label: "Région", backgroundColor: colorZoom[2],borderWidth: "0"};
    data.region.forEach(function(value){
        datasetRegion.data.push(parseFloat(value[1]));
	});

    data.values.forEach(function(value){
        d.labels.push(value[0]);
		dataset.data.push(parseFloat(value[1]));
    });

    d.datasets.push(dataset);
	d.datasets.push(datasetRegion);

    var ctx = cvs.getContext("2d");
	var c = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',
		// The data for our dataset
		data: d,
		// Configuration options go here
		options: {
			tooltips: {
                mode: 'index',
                intersect: false,
            },
			scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Année'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true // minimum value will be 0.
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Pourcentage de Oui'
                    }
                }]
            }
		}
	});
}

function drawBarChart(data, title) {
    var sec = document.getElementById("dataviz").appendChild(document.createElement('section'));
    sec.className = "plus"

    var cvs = sec.appendChild(document.createElement('canvas'))

    var ctx = cvs.getContext("2d")
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: data.labels,
            datasets: [{
                label: title,
                backgroundColor: colors,
                borderWidth: 0,
                data: data.values,
            }]
        },

        // Configuration options go here
        options: {
          responsive: false,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: {
                  display: false,
                  drawBorder: false
              }
            }]
          }
        }
    });

}

function drawPieChart(data) {
    var sec = document.getElementById("page3").appendChild(document.createElement('section'))
    sec.className = "chart"


    var cvs2 = sec.appendChild(document.createElement('canvas'))
    var ctx2 = cvs2.getContext("2d")

    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: data.labels,
            datasets: [{
                label: "Activte",
                borderWidth: 0,
                data: data.values,
                backgroundColor: colors,
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false
                }
              }]
            }
        }
    });
}

function drawDistanceDataviz(data) {

    var colorMatch = {
        Aut: colors[6],
        Ele: colors[1],
        maç: colors[2],
        men: colors[3],
        Mét: colors[7],
        Pei: colors[4],
        plâ: colors[5],
        plo: colors[0],
        Tra: colors[8]
    };

    function scale(number) {
        var start = 10;
        var inc = 8;
        if (number == 0) {
            return start;
        } else if (number <= 2) {
            return start + inc;
        } else if (number <= 5) {
            return start + inc * 2;
        } else if (number <= 10) {
            return start + inc * 3;
        } else {
            return start + inc * 4;
        }
    }
    var sec = document.getElementById("dataviz-section");
    if (sec !== null) {
        sec.remove();
    }
    sec = document.getElementById("dataviz").appendChild(document.createElement('section'));
    sec.setAttribute("id", "dataviz-section");

    var canvas = document.getElementById("canvas-dataviz");
    if (canvas !== null) {
        canvas.remove();
    }
    canvas = document.createElement('canvas');
    canvas.setAttribute("id", "canvas-dataviz");

    var cvs = sec.appendChild(canvas);
    var ctx = cvs.getContext("2d");

    var points = {
        datasets: []
    };

    data.values.forEach(function(value) {
        var dataset = {};
        var data = [];
        var point = {};
        point.x = value[2];
        point.y = 0.5;
        point.r = scale(value[1]);
        point.metier = value[0];

        data.push(point);
        dataset.data = data;
        dataset.label = value[0];
        dataset.borderWidth = 0;
        dataset.backgroundColor = colorMatch[value[0].substr(0, 3)];
        points.datasets.push(dataset);
    });

    var options = {
        tooltips: false,
        elements: {
            point: {
                backgroundColor: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    return colorMatch[value.metier.substr(0, 3)];
                },

                r: function(context) {
                    var value = context.dataset.data[context.dataIndex];
                    var size = context.chart.width;
                    var base = Math.abs(value.v) / 1000;
                    return (size * 2) * base;
                }
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: "Distance en kilomètres"
                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        },
        legend: {
            display: true,
            labels: {

            }
        }
    };


    new Chart(ctx, {
        type: 'bubble',
        data: points,
        options: options
    });

}

function fetchConjonctureData(d){
    fetch("/capeb/data/" + d.properties.siren_epci + "/conjoncture_facteurs")
        .then(function (value) {
            return value.json();
        })
        .catch(function (error) {
            console.log("error");
            console.log(error);
            return {};
        })
        .then(function (json) {
          createConjonctureDataviz(json);
        });
}

function createConjonctureDataviz(json){
    var labels = ["Chiffre d'affaires", "Marge", "Trésorerie", "Carnet de commandes"];
    var pointsColor = [["#ACF2E2", "#50EC2", "#02998B"], ["#AEDFF8", "#68C0ED", "#427C9A"],["#D8D8D8", "#9B9B9B", "#9B9B9B"],["#EB8D8B", "#DF261D", "#A61B14"]];


    var d = {
        datasets: [],
    };
    var cptx = 1;
    var cpty = 1;
    var dataset = {};
    var data = [];
    var point = {};
    json.values[0].forEach(function(value) {
        point = {};
        point.x = cptx;
        point.y = cpty;
        point.r = radiusmatch(value);
        data.push(point);
        cptx++;
        if (cptx==4){
            dataset.data = data;
            dataset.borderColor = "white";
            dataset.label = labels[cpty-1];
            d.datasets.push(dataset);
            dataset = {};
            data = [];
            cpty++;
            cptx=1;
        }
    });

    function radiusmatch(value){
        if(value<=0.25){
            return 10;
        } else if(value <= 0.50){
            return 18;
        } else if(value<=.75){
            return 26;
        } else if(value<=1){
            return 34;
        }
    }

    var sec = document.getElementById("dataviz-section");
    if (sec !== null) {
        sec.remove();
    }
    sec = document.getElementById("dataviz").appendChild(document.createElement('section'));
    sec.setAttribute("id", "dataviz-section");

    var canvas = document.getElementById("canvas-dataviz");
    if (canvas !== null) {
        canvas.remove();
    }

    canvas = document.createElement('canvas');
    canvas.setAttribute("id", "canvas-dataviz");

    var cvs = sec.appendChild(canvas);
    var ctx = cvs.getContext("2d");

    var chart = new Chart(ctx, {
        type: 'bubble',
        data: d,
        options: {
            legend: {
                display: false
            },
            elements: {
                point: {
                    backgroundColor: function(context) {
                        var value = context.dataset.data[context.dataIndex];
                        return pointsColor[value.y - 1][value.x - 1];
                    }
                }
            },
            tooltips: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        max: 4
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        max: 5
                    }
                }]
            }
        }
    });

}
