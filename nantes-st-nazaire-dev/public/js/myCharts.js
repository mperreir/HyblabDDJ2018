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

function createChartData(dataArray, ) {
    console.log(dataArray)
    var dataSets = [];
    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i])
        values = getChartValues(dataArray[arguments[i]]);
        
        dataSet = {
            label: values["indicator"],
            data: values["data"],
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
        };
        console.log(dataSet);
        dataSets.push(dataSet);
    }
    return dataSets;
}

function triCroissant(cities, dataSets) {
    
    var datas = dataSets[0];
    for (var i = 0; i < datas.data.length-1; i++) {
        if (datas.data[i] == "null") {
            cities.splice(i,1);
        }
    }
    for (var ind01 = 0; ind01 < datas.data.length-1; ind01++) {
        for (var ind02 = ind01; ind02 < datas.data.length; ind02++) {
            if (datas.data[ind01] > datas.data[ind02]) {
                temp = datas.data[ind01];
                temp2 = cities[ind01];
                datas.data[ind01] = datas.data[ind02];
                cities[ind01] = cities[ind02];
                datas.data[ind02] = temp;
                cities[ind02] = temp2;
            }
        }
    }
}

function triDecroissant(cities, dataSets) {
    
    var datas = dataSets[0];
    for (var ind01 = 0; ind01 < datas.data.length-1; ind01++) {
        for (var ind02 = ind01; ind02 < datas.data.length; ind02++) {
            if (datas.data[ind01] < datas.data[ind02]) {
                temp = datas.data[ind01];
                temp2 = cities[ind01];
                datas.data[ind01] = datas.data[ind02];
                cities[ind01] = cities[ind02];
                datas.data[ind02] = temp;
                cities[ind02] = temp2;
            }
        }
    }
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
            }
        }
    });
}
/*
function printChart(chartData, chartId) {
    var ctx = document.getElementById(chartId);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cities,
            datasets: [{
                label: 'Revenu',
                data: values,
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
*/

$(document).ready(function() {

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    var jqxhr = $.post( "http://localhost:8080/nantes-st-nazaire-dev/actifs")
        .done(function(data) {
            console.log( "success" );
            console.log(data)

            console.log("Mean :" + getMean(data[0]));
            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 0);
            console.log(cities)
            console.log(dataSets)
            triCroissant(cities,dataSets);
            printBarChart(cities, dataSets, "histogrammeEmploi1");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 2);
            console.log(cities)
            console.log(dataSets)
            triDecroissant(cities,dataSets);
            printBarChart(cities, dataSets, "histogrammeEmploi2");


/*
            new Chart(document.getElementById("cdv1"), {
            type: 'bar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: [2478,5267,734,784,433]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
              }
            }
        });
            */
            })
        .fail(function() {
            console.log( "error" );
        });

});