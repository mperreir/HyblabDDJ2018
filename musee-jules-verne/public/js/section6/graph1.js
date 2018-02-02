
//================= Graphique 1 - Mois

var ctx = document.getElementById("slide3_graphique1").getContext('2d');

  //Définition du dégradé jaune
  var yellow_gradient = ctx.createLinearGradient(0, 0, 0, 600);
  yellow_gradient.addColorStop(0, 'rgba(255,184,0,1)');
  yellow_gradient.addColorStop(0.9, 'rgba(255,184,0,0)');
  yellow_gradient.addColorStop(1, 'rgba(255,184,0,0)');

  //Définition du dégradé jaune au survol
  var hover_yellow_gradient = ctx.createLinearGradient(0, 0, 0, 600);
  hover_yellow_gradient.addColorStop(0, 'rgba(255,184,0,1)');
  hover_yellow_gradient.addColorStop(0.5, 'rgba(255,184,0,0.75)');
  hover_yellow_gradient.addColorStop(1, 'rgba(255,184,0,0)');

  var slide3_graphique1 = new Chart(ctx, {
    type: 'bar',
data: {
  datasets: [{
        label: 'Janvier',
        data: ["Non indiqué", 179, 128, 218, 112, 328, 123, 524, 253, 396, 430],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      }, {
        label: 'Février',
        data: ["Non indiqué", 173, 111, 361, 230, 396, 316, 358, 397, 496, 534],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Mars',
        data: ["Non indiqué", 149, 158, 211, 339, 289, 330, 455, 391, 401, 676],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Avril',
        data: ["Non indiqué", 153, 14, 325, 274, 355, 397, 480, 30, 399, 320],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Mai',
        data: ["Non indiqué", 123, 125, 285, 532, 380, 380, 479, 51, 394, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Juin',
        data: ["Non indiqué", 148, 135, 293, 226, 379, 245, 423, 208, 310, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Juillet',
        data: [65, 323, 364, 240, 238, 415, 378, 333, 427, 432, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Août',
        data: [198, 131, 271, 209, 183, 297, 343, 294, 317, 240, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Septembre',
        data: [107, 121, 173, 243, 316, 231, 347, 396, 379, 344, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Octobre',
        data: [192, 153, 197, 282, 383, 456, 398, 570, 502, 333, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Novembre',
        data: [181, 147, 300, 232, 314, 395, 431, 519, 527, 410, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      },{
        label: 'Décembre',
        data: [261, 106, 243, 133, 200, 174, 391, 466, 475, 676, "Non indiqué"],
        backgroundColor: yellow_gradient,
        hoverBackgroundColor: hover_yellow_gradient,
      }, {
        label: 'Articles publiés par année',
        data: [1004,1906,2219,3032,3347,4095,4079,5297,3957,4831,1970],
        fill: false,
        borderColor: "#0972FF",
        backgroundColor: "#0972FF",
        type: 'line',
        pointBackgroundColor: "rgba(255,255,255,1)",
        pointRadius: 4,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(255,255,255,1)",
        pointHoverBorderColor: "#0972FF",
      }],
  labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
},
      options: {
        responsive: true,
         //maintainAspectRatio: false,

          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      //max:5500, //empêche l'échelle Y de changer / se resizer
                  },
                  gridLines: {
                    lineWidth: 0.5,
                    color: "rgba(0,0,0,0.2)",
                    borderDash: [2,4],
                    zeroLineColor: "rgba(0,0,0,0)",
                  },
              }],
              xAxes: [{
                 categoryPercentage: 1.0,
                  barPercentage: 1, // ces 2 propriétés retirent tout espace en les barres
                  gridLines: {
                    lineWidth: 0.5,
                    color: "rgba(0,0,0,0.5)",
                    borderDash: [2,4],
                    zeroLineColor: "rgba(0,0,0,1)",
                  },
              }]
          },
          legend: {
          labels: {
               filter: function(legendItem, chartData) {
                if (legendItem.datasetIndex === 12) {//fait apparaitre la légende de la 12e data (en l'occurence, le nombre d'articles publiés par années)
                  return true;
                }
               return false;
             },
               fontColor: "#0972FF",

    }
          },
          title: {
            position: 'bottom',
            display: true,
            text: "Nombre d'articles publiés sur Jules Verne, de juillet 2007 à avril 2017" ,
          },
        },

  });
