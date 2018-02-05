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
    for (var i = 0; i < datas.data.length; i++) {
        
        if (datas.data[i] == "null") {
            var k = datas.data.length
            var verif = datas.data[k];
            while (verif == "null") {
                k -= 1;
            }
            temp = datas.data[i];
            temp2 = cities[i];
            temp3 = datas.backgroundColor[i];
            datas.data[i] = datas.data[k];
            cities[i] = cities[k];
            datas.backgroundColor[i] = datas.backgroundColor[k];
            datas.data[k] = temp;
            cities[k] = temp2;
            datas.backgroundColor[k] = temp3;
        }
    }
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
}

function triDecroissant(cities, dataSets) {

    var datas = dataSets[0];
    for (var i = 0; i < datas.data.length; i++) {
        console.log(datas.data[i])
        if (datas.data[i] == NaN) {
            var k = datas.data.length
            var verif = datas.data[k];
            while (verif == NaN) {
                k -= 1;
            }
            temp = datas.data[i];
            temp2 = cities[i];
            temp3 = datas.backgroundColor[i];
            datas.data[i] = datas.data[k];
            cities[i] = cities[k];
            datas.backgroundColor[i] = datas.backgroundColor[k];
            datas.data[k] = temp;
            cities[k] = temp2;
            datas.backgroundColor[k] = temp3;
        }
    }
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
                labels: {
                    boxWidth: 2,
                }
            },
            title: {
                display: true,
                text: 'Comparaison des rangs des villes selon nos critères'
            },
            scale: {
                ticks: {
                    reverse: true,
                    beginAtZero: true,
                    min: 1
                }
                
            }
                
        }
        
    };

    new Chart(document.getElementById('synthese-chart'), config);

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "blue",
                ],
                label: 'Dataset 1'
            }],
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
            ]
        },
        options: {
            legend: {
                labels: {
                    boxWidth: 0,
            }

        },

}
    };

        //var myPie = new Chart(document.getElementById('synthese-chart'), config);
}

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
        var hiddenVal = (cpt > 3);
        dataSets.push({label: city, borderColor: colors[cpt], pointBackgroundColor: colors[cpt], data : values, hidden: hiddenVal});

        cpt++;

    });
    return(dataSets);
}

$(document).ready(function() {
        //http://hyblab.polytech.univ-nantes.fr/nantes-st-nazaire-dev/rangs
        //$.post( "http://localhost:8081/nantes-st-nazaire-dev/rangs")
        /*
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
*/

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    //http://hyblab.polytech.univ-nantes.fr/nantes-st-nazaire-dev/actifs
    /*
    var jqxhr = $.post( "http://localhost:8081/nantes-st-nazaire-dev/actifs")
        .done(function(data) {
            console.log( "success" );

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
            //printBarChart(cities, dataSets, "transport2");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 23);
            triDecroissant(cities,dataSets);
            console.log(cities)
            console.log(dataSets)
            //printBarChart(cities, dataSets, "transport3");

            })
        .fail(function() {
            console.log( "error" );
        });
*/
        
        update();
});
    function update(data) {
      return fetch('/nantes-st-nazaire-dev/rangs', {
        method: 'post',
        body: JSON.stringify(data),
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
            synthese(synthDataSets);
        });
    }

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }