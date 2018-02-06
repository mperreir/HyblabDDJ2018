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
            backgroundColor: ["#648DF3", "#2A5DDA","#143380","#DA3030","#DA3030","#DA3030","#DA3030","#DA3030","#DA3030","#DA3030","#DA3030","#DA3030"]
        };
        console.log(dataSet);
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
    cities = cities.slice(0,9);
    datas.data = datas.data.slice(0,9);
    datas.backgroundColor = datas.backgroundColor.slice(0,9);
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
    cities = cities.slice(0,5);
    datas.data = datas.data.slice(0,5);
    datas.backgroundColor = datas.backgroundColor.slice(0,5);
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

     $("body").click(function() {
                console.log("skrt1")
                chart.update(chart);
            })

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
                backgroundColor: ["#34B6B3","#ffcc01", "#ed524a", "#dabf98", "#b1d952", "#7a4785", "#ea8c40", "#565656", "#8fd8ff", "#20c997", "#6610f2"],
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

        }
        

}
    };
    return chart;
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
        var hiddenVal = (cpt > 0);
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

    var jqxhr = $.post( "http://localhost:8081/nantes-st-nazaire-dev/actifs")
        .done(function(data) {
            console.log( "success" );

            console.log("Mean :" + getMean(data[0]));

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 21);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution moyenne annuelle du nombre de passagers 2011-2016 (en pourcentages)");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 22);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Nombre de kilomètres parcourus en transport en commun par habitant en 2014");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 23);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Temps de connexion à Paris en train (en minutes)");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 24);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Nombre de congrès internationaux en 2016");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 25);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution annuelle moyenne du nombre d'emplois dans les ICC 2011-2016");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 18);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Taux de chômage 2016");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 19);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution annuelle moyenne 2009-2014 de la part des cadres dans pop act.");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 20);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution annuelle 2011-2016 du Nombre d'établissements");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 32);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Nombre d'emplois dans l'aéronautique");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 30);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Nombre d'emplois dans la l'industrie navale");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 37);
            var result = triCroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Loyer mensuel médian au m2 (parc privé) - 2016");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 38);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Qualité de l’air 2016 (Jours avec un indice très bon à bon -1 à 4-)");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 34);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Part des emplois privés dans le numérique en 2016");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 36);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution annuelle de la part des emploi ''conception recherche'' 2009-2014");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 29);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Taux de réussite au baccalauréat général");

            var cities = getChartLabels(data[0]);
            var dataSets = createChartData(data, 39);
            var result = triDecroissant(cities,dataSets);
            printBarChart(result[0], result[1], "Evolution annuelle moyenne de la part des diplômés de l’enseignement supérieur dans la population (2009-2014)");

            })
        .fail(function() {
            console.log( "error" );
        });

        
        update();
});
    function update(data) {
      fetch('/nantes-st-nazaire-dev/rangs', {
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