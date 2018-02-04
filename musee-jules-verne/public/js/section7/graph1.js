// ================ Graphique 1 de la section 7 (les mots clés)
// Framework utilisé: High Chart

var data = [{
    'id': '0.0',
    'parent': '',
    'name': 'Jules Verne'
}, {
    'id': '1.1',
    'parent': '0.0',
    'name': 'Divers'
}, {
    'id': '1.2',
    'parent': '0.0',
    'name': 'Arts de la scène'
}, {
    'id': '1.3',
    'parent': '0.0',
    'name': 'Littérature'
},{
    'id': '1.4',
    'parent': '0.0',
    'name': 'Tourisme'
}, {
    'id': '1.5',
    'parent': '0.0',
    'name': 'Exposition'
},{
    'id': '1.6',
    'parent': '0.0',
    'name': 'Audiovisuel'
},{
    'id': '1.7',
    'parent': '0.0',
    'name': 'Sciences et techniques'
},{
    'id': '1.8',
    'parent': '0.0',
    'name': 'Animation'
},{
    'id': '1.9',
    'parent': '0.0',
    'name': 'Conférence'
},{
    'id': '1.10',
    'parent': '0.0',
    'name': 'Politique'
},

/* 1.1 - Divers*/

{'id': '2.01',"parent":1.1,"name":"Le Tour du Monde en 80 Jours","value":698},
{'id': '2.02',"parent":1.1,"name":"20 000 Lieux sous les Mers","value":396},
{'id': '2.03',"parent":1.1,"name":"Nantes","value":407},
{'id': '2.04',"parent":1.1,"name":"Amiens","value":315},
{'id': '2.05',"parent":1.1,"name":"Vente","value":299},
{'id': '2.06',"parent":1.1,"name":"Phileas Fogg","value":210},
{'id': '2.07',"parent":1.1,"name":"Nautilus","value":204},
{'id': '2.08',"parent":1.1,"name":"Voyages Extraordinaires","value":203},
{'id': '2.09',"parent":1.1,"name":"Voyage au Centre de la Terre","value":201},
{'id': '2.10',"parent":1.1,"name":"Paris","value":183},


/***********/

/* 1.2 - Arts de la scène */

{'id': '2.11',"parent":1.2,"name":"Le Tour du Monde en 80 Jours","value":1865},
{'id': '2.12',"parent":1.2,"name":"20 000 Lieux sous les Mers","value":1245},
{'id': '2.13',"parent":1.2,"name":"Théâtre","value":1164},
{'id': '2.14',"parent":1.2,"name":"Sébastien Azzopardi","value":650},
{'id': '2.15',"parent":1.2,"name":"Phileas Fogg","value":492},
{'id': '2.16',"parent":1.2,"name":"Sydney Bernard","value":323},
{'id': '2.16',"parent":1.2,"name":"Passepartout","value":332},
{'id': '2.17',"parent":1.2,"name":"Magie","value":317},
{'id': '2.18',"parent":1.2,"name":"Sasha Danino","value":313},
{'id': '2.19',"parent":1.2,"name":"Dany Lary","value":286},

/***********/

/* 1.3 -  Littérature */


{'id': '2.20',"parent":1.3,"name":"Voyages Extraordinaires","value":493},
{'id': '2.21',"parent":1.3,"name":"Bande Dessinée","value":456},
{'id': '2.22',"parent":1.3,"name":"Le Tour du Monde en 80 Jours","value":364},
{'id': '2.23',"parent":1.3,"name":"20 000 Lieux sous les Mers","value":326},
{'id': '2.24',"parent":1.3,"name":"Science-Fiction","value":297},
{'id': '2.25',"parent":1.3,"name":"Hetzel","value":238},
{'id': '2.26',"parent":1.3,"name":"Voyage au Centre de la Terre","value":228},
{'id': '2.27',"parent":1.3,"name":"Lecture","value":170},
{'id': '2.28',"parent":1.3,"name":"Littérature","value":163},
{'id': '2.29',"parent":1.3,"name":"Manuscrit","value":160},

/***********/

/* 1.4 -  Tourisme */
{'id': '2.30',"parent":1.4,"name":"Nantes","value":649},
{'id': '2.31',"parent":1.4,"name":"Amiens","value":549},
{'id': '2.32',"parent":1.4,"name":"Voyages Extraordinaires","value":424},
{'id': '2.33',"parent":1.4,"name":"Le Tour du Monde en 80 Jours","value":341},
{'id': '2.34',"parent":1.4,"name":"Les Machines de l'Île","value":240},
{'id': '2.35',"parent":1.4,"name":"Futuroscope","value":229},
{'id': '2.36',"parent":1.4,"name":"La Maison de Jules Verne","value":209},
{'id': '2.37',"parent":1.4,"name":"Montgolfière","value":174},
{'id': '2.38',"parent":1.4,"name":"20 000 Lieux sous les Mers","value":171},
{'id': '2.39',"parent":1.4,"name":"Voyage au Centre de la Terre","value":156},

/***********/

/* 1.5 -  Exposition */


{'id': '2.40',"parent":1.5,"name":"20 000 Lieux sous les Mers","value":204},
{'id': '2.41',"parent":1.5,"name":"Amiens","value":191},
{'id': '2.42',"parent":1.5,"name":"Nantes","value":177},
{'id': '2.43',"parent":1.5,"name":"Science-Fiction","value":161},
{'id': '2.44',"parent":1.5,"name":"Voyages Extraordinaires","value":148},
{'id': '2.45',"parent":1.5,"name":"INSERM","value":144},
{'id': '2.46',"parent":1.5,"name":"Musée Jules Verne","value":143},
{'id': '2.47',"parent":1.5,"name":"Maison Jules Verne","value":130},
{'id': '2.48',"parent":1.5,"name":"Bibliothèque","value":113},
{'id': '2.49',"parent":1.5,"name":"Paris","value":110},


/***********/

/* 1.6 -  Audiovisuel */
{'id': '2.50',"parent":1.6,"name":"20 000 Lieux sous les Mers","value":401},
{'id': '2.51',"parent":1.6,"name":"Film","value":258},
{'id': '2.52',"parent":1.6,"name":"Voyage au Centre de la Terre","value":247},
{'id': '2.53',"parent":1.6,"name":"Cinéma","value":242},
{'id': '2.54',"parent":1.6,"name":"Le Tour du Monde en 80 Jours","value":181},
{'id': '2.55',"parent":1.6,"name":"David Fincher","value":177},
{'id': '2.56',"parent":1.6,"name":"Voyages Extraordinaires","value":160},
{'id': '2.57',"parent":1.6,"name":"Georges Méliès","value":159},
{'id': '2.58',"parent":1.6,"name":"L'Ile Mystérieuse ","value":138},
{'id': '2.59',"parent":1.6,"name":"Festival","value":136},

/***********/

/* 1.7 -  Sciences */
{'id': '2.60',"parent":1.7,"name":"Mer","value":246},
{'id': '2.61',"parent":1.7,"name":"20 000 Lieux sous les Mets","value":245},
{'id': '2.62',"parent":1.7,"name":"Énergie","value":231},
{'id': '2.63',"parent":1.7,"name":"Voyages Extraordinaires","value":176},
{'id': '2.64',"parent":1.7,"name":"Voyage au Centre de la Terre","value":125},
{'id': '2.65',"parent":1.7,"name":"Voiture Volante","value":120},
{'id': '2.66',"parent":1.7,"name":"Nautilus","value":115},
{'id': '2.67',"parent":1.7,"name":"Stefan Klein","value":113},
{'id': '2.68',"parent":1.7,"name":"Antoine de Saint-Exupéry","value":111},
{'id': '2.69',"parent":1.7,"name":"Le Tour du Monde en 80 Jours","value":109},


/***********/

/* 1.8 -  Animation */


{'id': '2.70',"parent":1.8,"name":"Amiens","value":280},
{'id': '2.71',"parent":1.8,"name":"Maison Jules Verne","value":228},
{'id': '2.72',"parent":1.8,"name":"Le Tour du Monde en 80 Jours","value":190},
{'id': '2.73',"parent":1.8,"name":"Nantes","value":163},
{'id': '2.74',"parent":1.8,"name":"20 000 Lieux sous les Mers","value":151},
{'id': '2.75',"parent":1.8,"name":"Voyages Extraordinaires","value":137},
{'id': '2.76',"parent":1.8,"name":"Musée Jules Verne","value":116},
{'id': '2.77',"parent":1.8,"name":"Centre de Loisirs","value":110},
{'id': '2.78',"parent":1.8,"name":"Lecture","value":90},
{'id': '2.79',"parent":1.8,"name":"Nautilus","value":83},


/***********/

/* 1.9 -  Conférence */
{'id': '2.80',"parent":1.9,"name":"Jean-Yves Paumier","value":81},
{'id': '2.81',"parent":1.9,"name":"Nantes","value":76},
{'id': '2.82',"parent":1.9,"name":"Jules Verne","value":72},
{'id': '2.83',"parent":1.9,"name":"Amiens","value":63},
{'id': '2.84',"parent":1.9,"name":"Olivier Sauzereau","value":46},
{'id': '2.85',"parent":1.9,"name":"Voyages Extraordinaires","value":45},
{'id': '2.86',"parent":1.9,"name":"Science-Fiction","value":34},
{'id': '2.87',"parent":1.9,"name":"L'Ile dans l'œuvre de Jules Verne","value":29},
{'id': '2.88',"parent":1.9,"name":"Salon International du livre insulaire","value":29},
{'id': '2.89',"parent":1.9,"name":"Astronomie","value":24},

/***********/

/* 1.10 -  Politique */

{'id': '2.81','parent': '1.10',"name":"Interview Jean-Marc Ayrault","value":119},
{'id': '2.82','parent': '1.10',"name":"Nantes","value":15},
{'id': '2.83','parent': '1.10',"name":"Amiens","value":14},
{'id': '2.84','parent': '1.10',"name":"Euro","value":8},
{'id': '2.85','parent': '1.10',"name":"Voyages Extraordinaires","value":7},
{'id': '2.86','parent': '1.10',"name":"Michel Strogoff","value":6},
{'id': '2.87','parent': '1.10',"name":"Nicolas Sarkozy","value":6},
{'id': '2.88','parent': '1.10',"name":"Phileas Fogg","value":6},
{'id': '2.89','parent': '1.10',"name":"Voyage au Centre de la Terre","value":5},
{'id': '2.90','parent': '1.10',"name":"Le Tour du Monde en 80 Jours","value":5},
];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');

 $('#container_slide7_graphique1').highcharts({

    title: {
        text: 'Mots-clés associés à Jules Verne',
        marginTop: 20,
    },
    plotOptions: {
        sunburst: {
        }

  },
    colors: [
        'white',//pour le centre du graphique
        '#323FDE',
        '#365bf7',
        '#447efb',
        '#239ee7',
        '#55B4EC',
        '#7DC3EC',
        '#856CFF',
        '#7274f6',
        '#7129f7',
        '#3e12cf',


            ],
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 10
            }

        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                rotationMode: 'parallel',
                filter: {
                  property: 'outerArcLength',
                  operator: '>',
                    value: 64
                }

            }
        }, {
            level: 2,
            colorByPoint: true,
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            },
        }]

    }],
    tooltip: {
        headerFormat: "",
        pointFormat: '<b>{point.value}</b> occurances pour le thème <b>{point.name}</b> '
    }

});


// ================ Fin du Graphique 1 de la section 7 (les mots clés)
