
      var theme = {
			textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif'
          }
      };	
	 	
	/*echartMiniPie*/

      var dataStyle1 = {
        normal: {
		  color: '#26B99A',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      };
	  
	  var dataStyle2 = {
        normal: {
		  color: '#34495E',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      };
	  
	  var dataStyle3 = {
        normal: {
		  color: '#BDC3C7',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      };
	  
	  var dataStyle4 = {
        normal: {
		  color: '#3498DB',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      };
	  
	  var dataStyle5 = {
        normal: {
		  color: '#9B59B6',
          label: {
            show: true
          },
          labelLine: {
            show: true
          }
        }
      };

      var placeHolderStyle = {
        normal: {
          color: 'rgba(0,0,0,0)',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          color: 'rgba(0,0,0,0)'
        }
      };
      var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

      echartMiniPie .setOption({
        title: {
          x: 'center',
          y: 'center',
          itemGap: 20,
          textStyle: {
            color: 'rgba(30,144,255,0.3)',
            fontSize: 27,
            fontWeight: 'bold'
          }
        },
        tooltip: {
          show: true,
          formatter: "<b>{a}</b> <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 190,
          y: 0,
          itemGap: 12,
          data: ['Horaires atypiques', 'Périscolaire', 'Temps partiel', 'Vacances scolaires', 'Mercredi'],
        },
	
		

        series: [{
          name: 'Horaires atypiques',
          type: 'pie',
          clockWise: true,
          radius: [55,70],
          itemStyle: dataStyle1,
          data: [{
            value: 34,
            name: 'Acceptent'
          }, {
            value: 66,
            name: 'Refusent',
            itemStyle: placeHolderStyle
          }]
		  
        }, {
          name: 'Périscolaire',
          type: 'pie',
          clockWise: true,
          radius: [75,90],
          itemStyle: dataStyle2,
          data: [{
            value: 37,
            name: 'Acceptent'
          }, {
            value: 63,
            name: 'Refusent',
            itemStyle: placeHolderStyle
          }]
		  
		}, {
          name: 'Temps partiel',
          type: 'pie',
          clockWise: true,
          radius: [95,110],
          itemStyle: dataStyle3,
          data: [{
            value: 59,
            name: 'Acceptent'
          }, {
            value: 41,
            name: 'Refusent',
            itemStyle: placeHolderStyle
          }]
		  
		}, {
          name: 'Vacances scolaires',
          type: 'pie',
          clockWise: true,
          radius: [135,150],
          itemStyle: dataStyle5,
          data: [{
            value: 84,
            name: 'Acceptent'
          }, {
            value: 16,
            name: 'Refusent',
            itemStyle: placeHolderStyle
          }] 
		  		  
        }, {
          name: 'Mercredi',
          type: 'pie',
          clockWise: true,
          radius: [115,130],
          itemStyle: dataStyle4,
          data: [{
            value: 78,
            name: 'Acceptent'
          }, {
            value: 22,
            name: 'Refusent',
            itemStyle: placeHolderStyle
          }]
        }]
      });
		
		 
