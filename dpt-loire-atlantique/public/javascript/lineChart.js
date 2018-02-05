
					  // Line chart
			  var ctx = document.getElementById("lineChart");
			  var lineChart = new Chart(ctx, {
				type: 'line',
				data: {
				  labels: ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
				  datasets: [{
					label: "Nombre d'assistantes maternelles",
					backgroundColor: "rgba(38, 185, 154, 0.31)",
					borderColor: "rgba(38, 185, 154, 0.7)",
					pointBorderColor: "rgba(38, 185, 154, 0.7)",
					pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(22,22,22,1)",
					pointBorderWidth: 3,
					data: [12030, 12318, 12891, 13308, 13721, 13767, 13601, 14079, 14054, 14139, 14538, 14573, 14270, 13931, 13445]
				  }, {
					label: "Nombre de places",
					backgroundColor: "rgba(3, 88, 106, 0.3)",
					borderColor: "rgba(3, 88, 106, 0.70)",
					pointBorderColor: "rgba(3, 88, 106, 0.70)",
					pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(151,187,205,1)",
					pointBorderWidth: 1,
					data: [30873, 31571, 33288, 34450, 35792, 36748, 36928, 39754, 41221, 42710, 44459, 45134, 44589, 44013, 42671]
				  }]
				},
			  });
			