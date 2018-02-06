var ctx = document.getElementById('slide4_graphique2_tourisme');


var slide4_graphique2_tourisme = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Divers","Arts de la scène","Littérature","Tourisme","Exposition","Audiovisuel","Sciences et Tech","Animation","Conférence","Politique"],
    datasets: [
      {
        label: 'Articles collectés (en %)' ,
        data: [20,19,18,10,9,8,6,5,3,1],
        fill: false,
        backgroundColor: [
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          '#0972ff',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
          'rgba(100,100,100,0.1)',
        ],
      }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {//personnalistion des bulles d'informations
      enabled: true,
      position: 'nearest',
        cornerRadius: 4,
        caretSize: 0,//taille de la flèche
        xPadding: 16,
        yPadding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleFontStyle: 'bold',//gestion du titre
        titleMarginBottom: 15,
        titleFontColor: 'black',
        bodyFontColor: 'black',//gestion du texte
        displayColors: false,
        callbacks: {
                title: function(tooltipItem, data) {
                    return "Pourcentage d'articles sur ce sujet" ;
                },
              },
      },
    title: {
      display: true,
      text: "Répartition des publications par sujet",
      position: 'bottom',
    },

    legend: {
    display: false,
    },

    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false,
      }],
    }
  }
});
