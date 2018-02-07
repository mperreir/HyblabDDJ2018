function getMean(array) {
    var sum = 0;
    var nbElements = 0;
    var keys = Object.keys(array);
    var textFields = ["Echelle", "Indicateur", "Source", "Type", "RN", "RSN", "RNSN", "ERN", "ERSN", "ERNSN", "Type", "Moyenne", "Mediane", "Min", "Max"];
    for(var i=0; i<keys.length; i++) {
        if(!textFields.includes(keys[i])) {
            value = parseFloat(array[keys[i]]);
            sum += value;
            nbElements += 1;
        }
    }
    return(sum / nbElements);
}


function getChartLabels(dataArray) {
    var keys = Object.keys(dataArray);
    var cities = [];
    var textFields = ["Echelle", "Indicateur", "Source", "Type", "RN", "RSN", "RNSN", "ERN", "ERSN", "ERNSN", "Type", "Moyenne", "Mediane", "Min", "Max"];
    for(var i=0; i<keys.length; i++) {
        if(!textFields.includes(keys[i])) {
            cities.push(keys[i]);
        }
    }    
    return cities;
}


function getChartValues(dataArray) {
    var chartValues = [];
    var keys = Object.keys(dataArray);
    var values = [];
    var indicator;
    var textFields = ["Echelle", "Indicateur", "Source", "Type", "RN", "RSN", "RNSN", "ERN", "ERSN", "ERNSN", "Type", "Moyenne", "Mediane", "Min", "Max"];
    for(var i=0; i<keys.length; i++) {
        if(!textFields.includes(keys[i])) {
            value = parseFloat(dataArray[keys[i]].replace(",", ""));
            values.push(value);
        }
        if(keys[i] == "Indicateur") {
            value = dataArray[keys[i]];
            indicator = value;
        }
    }    
    chartValues["indicator"] = indicator;
    chartValues["data"] = values;
    return chartValues;
}

function createChartData(dataArray) {
    console.log(dataArray)
    var dataSets = [];
    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i])
        values = getChartValues(dataArray[arguments[i]]);
        
        dataSet = {
            label: values["indicator"],
            data: values["data"],
            backgroundColor: ["#34B6B3", "#34B6B3","#34B6B3","#FFCC01","#FFCC01","#FFCC01 ","#FFCC01 ","#FFCC01 ","#FFCC01 ","#FFCC01 ","#FFCC01 ","#FFCC01 "]
        };
        //console.log(dataSet);
        dataSets.push(dataSet);
    }
    return dataSets;
}

function triCroissant(cities, dataSets) {
    
    var datas = dataSets[0];
    for (var ind01 = 0; ind01 < datas.data.length; ind01++) {
        for (var ind02 = ind01; ind02 < datas.data.length; ind02++) {
            if (datas.data[ind01] > datas.data[ind02]) {
                temp = datas.data[ind01];
                temp2 = cities[ind01];
                temp3 = datas.backgroundColor[ind01];
                datas.data[ind01] = datas.data[ind02];
                cities[ind01] = cities[ind02];
                datas.backgroundColor[ind01] = datas.backgroundColor[ind02];
                datas.data[ind02] = temp;
                cities[ind02] = temp2;
                datas.backgroundColor[ind02] = temp3;
            }
        }
    }
    for (var j = 0; j < datas.data.length; j++) {
        for (var i = 0; i < datas.data.length - 1; i++) {
            if (datas.data[i] == 0) {
                temp = datas.data[i];
                temp2 = cities[i];
                temp3 = datas.backgroundColor[i];
                datas.data[i] = datas.data[i+1];
                cities[i] = cities[i+1];
                datas.backgroundColor[i] = datas.backgroundColor[i+1];
                datas.data[i+1] = temp;
                cities[i+1] = temp2;
                datas.backgroundColor[i+1] = temp3;
            }
        }
    }
    cities = cities.slice(0,8);
    datas.data = datas.data.slice(0,8);
    datas.backgroundColor = datas.backgroundColor.slice(0,8);
    return ([cities, [datas]])
}

function triDecroissant(cities, dataSets) {

    var datas = dataSets[0];
    for (var ind01 = 0; ind01 < datas.data.length; ind01++) {
        for (var ind02 = ind01; ind02 < datas.data.length; ind02++) {
            if (datas.data[ind01] < datas.data[ind02]) {
                temp = datas.data[ind01];
                temp2 = cities[ind01];
                temp3 = datas.backgroundColor[ind01];
                datas.data[ind01] = datas.data[ind02];
                cities[ind01] = cities[ind02];
                datas.backgroundColor[ind01] = datas.backgroundColor[ind02];
                datas.data[ind02] = temp;
                cities[ind02] = temp2;
                datas.backgroundColor[ind02] = temp3;
            }
        }
    }
    for (var j = 0; j < datas.data.length; j++) {
        for (var i = 0; i < datas.data.length - 1; i++) {
            if (datas.data[i] == 0) {
                temp = datas.data[i];
                temp2 = cities[i];
                temp3 = datas.backgroundColor[i];
                datas.data[i] = datas.data[i+1];
                cities[i] = cities[i+1];
                datas.backgroundColor[i] = datas.backgroundColor[i+1];
                datas.data[i+1] = temp;
                cities[i+1] = temp2;
                datas.backgroundColor[i+1] = temp3;
            }
        }
    }
    cities = cities.slice(0,8);
    datas.data = datas.data.slice(0,8);
    datas.backgroundColor = datas.backgroundColor.slice(0,8);
    return ([cities, [datas]])
}

function printBarChart(cities, dataSets, chartId) {
    var ctx = document.getElementById(chartId);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cities,
            datasets: dataSets
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false,
                  labels: {
                    display: false
                  }
              }
        }
    });
}
/*
        data: {
            labels: cities,
            datasets: [{
                label: 'Revenu',
                data: values,
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
            }]
        }
*/

function printBarChartDoughnut() {
        Chart.pluginService.register({
        beforeDraw: function (chart) {
            if (chart.config.options.elements.center) {
        //Get ctx from string
        var ctx = chart.chart.ctx;
        
                //Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
        ctx.font = "30px " + fontStyle;
        
        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);

        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);

        //Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse+"px " + fontStyle;
        ctx.fillStyle = color;
        
        //Draw text in center
        ctx.fillText(txt, centerX, centerY);
            }
        }
    });
        var config = {
            type: 'doughnut',
            data: {
                labels: [
                  'Pourcentage de jours avec un indice très bon à bon 1 à 4',
                'Pourcentage de jours avec un indice faible'
                ],
                datasets: [{
                    data: [82,18 ],
                    backgroundColor: ["#34B6B3","#FFCC01"],
                hoverBackgroundColor: ["black ", "black"]
                }]
            },
        options: {
            elements: {
                center: {
                    text: '82%',
          color: '#34B6B3', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            },
            legend: {
                display: false,
                labels: {
                    boxWidth: 2,
            }
        }
    }};


    var ctx = document.getElementById("qualiteair").getContext("2d");
    var myChart = new Chart(ctx, config);
}

function synthese(dataSets) {
    var marksCanvas = document.getElementById("synthese-chart");
    var color = Chart.helpers.color;
    var config = {
        type: 'radar',
        data: {
            labels: ['Emploi', 'Transport', 'Culture', 'Enseignement', ['Industrie', 'de pointe'], ['Développement', 'numérique'], ['Cadre', 'de vie']],
            datasets: dataSets
        },
        options: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 2,
                }
            },
            title: {
                display: true,
                text: 'Comparaison générale des villes concurrentes'
            },
            scale: {
                ticks: {
                    reverse: true,
                    beginAtZero: true,
                    min: 1,
                    max: 10
                }    
            }
        }
    };

    var chart = new Chart(document.getElementById('synthese-chart'), config);
}


//Fonction construisant les données du graphique radar de la synthèse
function getSynthData(cities, dataJson) {
    var dataSets = [];
    var colors = ["#34B6B3","#ffcc01", "#ed524a", "#dabf98", "#b1d952", "#7a4785", "#ea8c40", "#565656", "#8fd8ff", "#20c997", "#6610f2"]
    var averages = [3, 8, 13, 19, 25, 30, 34];
    var cpt = 0;
    cities.forEach(function(city) {
        var values = [];
        averages.forEach(function(line) {
            values.push(dataJson[line][city]);
        });
        var hiddenVal = (cpt > 0);
        dataSets.push({label: city, borderColor: colors[cpt], pointBackgroundColor: colors[cpt], data : values, hidden: hiddenVal});
        cpt++;

    });
    return(dataSets);
}

$(document).ready(function() {

    fetch('/nantes-st-nazaire-dev/actifs', {
      method: 'post',
      body: JSON.stringify(),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
      .then(function(data) {
            console.log( "success" );

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 21);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "evolVoyageurs");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 22);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "kmTsprt");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 23);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "tpsParis");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 37);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "loyer");

            printBarChartDoughnut();

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 29);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "baccalaureat");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 39);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "diplomes");

             var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 18);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "chomage");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 20);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "nbEtabl");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 19);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "cadres");

             var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 24);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "congres");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 25);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "icc");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 32);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "emploisaeronautique");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 30);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "emploisnavale");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 34);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "emploisnumerique");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 36);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "emploisrecherche");

            })

        
        update();
});

    function update() {
      fetch('/nantes-st-nazaire-dev/rangs', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(checkStatus)
        .then(function(json) {
            console.log(json);
            var cities = ["Nantes-St-Nazaire", "Lyon", "Bordeaux", "Toulouse", "Rennes", "Lille", "Nice", "Strasbourg", "Grenoble","Aix-Marseille"];
            var synthDataSets = getSynthData(cities, json);
            var synthChart = synthese(synthDataSets);
        });

    }

    function checkStatus(response) {
        /*
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
      */
      return response.json()
    }