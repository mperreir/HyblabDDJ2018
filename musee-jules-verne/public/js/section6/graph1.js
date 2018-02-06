//===== Graphique 1 de la slide 6
// Note pour l'intégration: ce graphique est complètement responsive (normalement)
//grâce à la déclaration [options: {  responsive: true, maintainAspectRatio: false,}] ligne 36.

var ctx = document.getElementById('slide6_graphique1');

var slide6_graphique1 = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['Divers', 'Arts de la scène', 'Littérature', 'Tourisme', 'Exposition', 'Audiovisuel', 'Sciences et Techniques', 'Animation', 'Conférence', 'Politique'],
    datasets: [
      {
        label: 'Simple Mention de Jules Verne (%)',
        data: [68.62,11.95,59.82,40.65,33.5,40.17,18.35,18.4,24.4,93.65],
        backgroundColor: '#fff08a',
      },
      {
        label: "Inspiré par Jules Verne (%)",
        data: [20.52,31.45,15.85,39.4,26.35,24.1,58.95,58.95,10.45,1.75],
        backgroundColor: '#ffe570',
      },
      {
        label: "Consacré Jules Verne (%)",
        data: [10.56,3.3,19,19.75,39.6,10.88,20.55,20.55,65.15,4.6],
        backgroundColor: '#ffcc11',
      },
      {
        label: "Adaptation d'une œuvre de Jules Verne (%)",
        data: [0.3,53.3,5.33,0.2,0.55,24.85,2.15,2.1,0,0],
        backgroundColor: '#ffa200',
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    tooltips: {//personnalistion des bulles d'informations
      enabled: true,
        cornerRadius: 4,
        caretSize: 0,//taille de la flèche
        xPadding: 16,
        yPadding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleFontStyle: 'bold',//gestion du titre
        titleMarginBottom: 15,
        titleFontColor: 'black',
        bodyFontColor: 'black',//gestion du texte
        multiKeyBackground: 'white',
      },

    title: {
      display: true,
      text: "Nature de la référence à Jules Verne, selon le sujet de l'article",
      position: 'bottom',
    },

    legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 10,
    },

    },

    scales: {
      yAxes: [{
        stacked: true,
        categoryPercentage: 1.0,
        barPercentage: 0.95, // ces 2 propriétés retirent tout espace en les barres
          gridLines: {
            display: false,
          },
      }],
      xAxes: [{

        stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            max:100, //Force l'échelle à s'arrêter à 100
          },
      }],
    }
  }

});

//===== Fin du Graphique 1 de la slide 6
