// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.5).get('rgb')] // darken
        ]
      };
    })
  });
  
  // Build the chart
  Highcharts.chart('bella', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Season Deaths'
    },
    tooltip: {
      pointFormat: ' <b>{point.y} deaths </b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          },
          connectorColor: 'silver'
        }
      }
    },
    series: [{
      name: 'Pie Chart',
      data: [
     
        { name: 'Season 1', y: 2 },
        { name: 'Season 2', y: 176 },
        { name: 'Season 3', y: 26 },
        { name: 'Season 4', y:28 },
        { name: 'Season 5', y: 38 }
        
      ]
    }]
  });