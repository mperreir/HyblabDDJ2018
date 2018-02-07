var theme = {
          color: [
              '#6cb756', '#347e1d', '#ffcc00', '#43a326', '#96cb86', '#c0e0b6', '#d5eace', '#1d4810',            
          ],
		  
		  /* 8-Places 7-Guyanne 6-Haute-Corse 5-Nord 4-Paris 3-Loire At 2-HL 1-Moyenne*/

          textStyle: {
			  fontSize: 14,
			  fontWeight: 'bold'
          }
      };

	  
		/*echartFunnel*/
      var echartFunnel = echarts.init(document.getElementById('echart_pyramid'), theme);

      echartFunnel.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          data: ['Something #1', 'Something #2', 'Something #3', 'Something #4', 'Something #5'],
          orient: 'vertical',
          x: 'left',
          y: 'bottom'
        },
        calculable: true,
        series: [{
          name: 'Taux de couverture',
          type: 'funnel',
          width: '40%',
          data: [{
            value: 58.9,
            name: 'Moyenne nationale'
          }, {
            value: 92.5,
            name: '1er - Haute-Loire'
          }, {
            value: 78.1,
            name: '3ème - Loire-Atlantique'
          }, {
            value: 67,
            name: '24ème - Paris'
		  }, {
            value: 54.8,
            name: '71ème - Nord'
          }, {
		  value: 36.4,
            name: '96ème - Haute-Corse'
          }, {
		  value: 9.9,
            name: '100ème - Guyane'
          }, {
            value: 100,
            name: 'Places non disponibles'
          }]
        }]
      });