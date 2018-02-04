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
                position: 'top',
            },
            title: {
                display: true,
                text: 'Comparaison des rangs des villes selon nos critères'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(document.getElementById('synthese-chart'), config);
}

function getSynthData(cities, dataJson) {
    var dataSets = [];
    var colors = ["#265C8E","red", "blue", "yellow", "green", "#BF55EC", "#22A7F0", "#F9690E", "#D2527F", "black", "black"]
    var averages = [3, 8, 13, 19, 25, 30, 34];
    var cpt = 0;
    cities.forEach(function(city) {
        console.log(city);
        var values = [];
        averages.forEach(function(line) {
            values.push(dataJson[line][city]);
        });
        var hiddenVal = (cpt > 3);
        dataSets.push({label: city, borderColor: colors[cpt], pointBackgroundColor: colors[cpt], data : values, hidden: hiddenVal});

        cpt++;
    });
    console.log(dataSets)
    return(dataSets);
}

$(document).ready(function() {

        $.post( "http://localhost:8081/nantes-st-nazaire-dev/rangs")
            .done(function(data) {
                console.log("Données de synthèse reçues");
                var cities = ["Nantes-St-Nazaire", "Lyon", "Bordeaux", "Toulouse", "Rennes", "Lille", "Nice", "Strasbourg", "Grenoble","Aix-Marseille"];
                var synthDataSets = getSynthData(cities, data);
                synthese(synthDataSets);
                })
            .fail(function() {
                console.log( "Erreur requete synthese" );
            });

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    //http://hyblab.polytech.univ-nantes.fr/nantes-st-nazaire-dev/actifs
    var jqxhr = $.post( "http://localhost:8081/nantes-st-nazaire-dev/actifs")
        .done(function(data) {
            console.log( "success" );
            console.log(data)

            console.log("Mean :" + getMean(data[0]));
            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 21);
            triDecroissant(cities,dataSets);
            console.log(cities)
            console.log(dataSets)
            printBarChart(cities, dataSets, "transport1");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 22);
            triDecroissant(cities,dataSets);
            console.log(cities)
            console.log(dataSets)
            printBarChart(cities, dataSets, "transport2");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 23);
            triDecroissant(cities,dataSets);
            console.log(cities)
            console.log(dataSets)
            printBarChart(cities, dataSets, "transport3");

            })
        .fail(function() {
            console.log( "error" );
        });

        


});

