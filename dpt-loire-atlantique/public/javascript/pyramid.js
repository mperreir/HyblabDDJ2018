var theme = {
          color: [
              '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
              '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
          ],

          textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif'
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
          name: 'Funnel',
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