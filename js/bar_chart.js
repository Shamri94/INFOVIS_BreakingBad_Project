

    
    $(function() {
      var defaultTitle = "Breaking bad";
      var drilldownTitle = "More about ";
    
      // Create the chart
      var chart = new Highcharts.Chart({
        chart: {
          type: 'column',
          renderTo: 'container',
          events: {
            drilldown: function(e) {
              chart.setTitle({
                text: drilldownTitle + e.point.name
              });
            },
            drillup: function(e) {
              chart.setTitle({
                text: defaultTitle
              });
            }
          }
        },
        title: {
          text: defaultTitle
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'logarithmic',
          title: {
            text: 'Total deaths'
          }
        },
        legend: {
          enabled: false
        },
    
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
            }
          }
        },
    
        series: [{
          name: 'season view',
          colorByPoint: true,
          data: [{
            name: 'Season 1',
            y: 2,
            drilldown: 'Season 1',
            color: '#01a857'
          }, {
            name: 'Season 2',
            y: 176,
            drilldown: 'Season 2',
            color: '#01a857'
          }, {
            name: 'Season 3',
            y: 26,
            drilldown: 'Season 3',
            color: '#01a857'
          }, {
            name: 'Season 4',
            y: 28,
            drilldown: 'Season 4',
            color: '#01a857'
          }, {
            name: 'Season 5',
            y: 38,
            drilldown: 'Season 5',
            color: '#01a857'
          }]
        }],
        drilldown: {
          series: [{
            id: 'Season 1',
            data: [
              ['Episode 1', 1],
              ['Episode 2', 0],
              ['Episode 3', 1],
              ['Episode 4', 0],
              ['Episode 5', 0],
              ['Episode 6', 0],
              ['Episode 7', 0]
            ]
          }, {
            id: 'Season 2',
            data: [
              ['Episode 1', 2],
              ['Episode 2', 1],
              ['Episode 3', 0],
              ['Episode 4', 0],
              ['Episode 5', 0],
              ['Episode 6', 2],
              ['Episode 7', 2],
              ['Episode 8', 0],
              ['Episode 9', 0],
              ['Episode 10', 0],
              ['Episode 11', 1],
              ['Episode 12', 1],
              ['Episode 13', 167]
            ]
          }, {
            id: 'Season 3',
            data: [
              ['Episode 1', 10],
              ['Episode 2', 0],
              ['Episode 3', 0],
              ['Episode 4', 0],
              ['Episode 5', 0],
              ['Episode 6', 2],
              ['Episode 7', 2],
              ['Episode 8', 4],
              ['Episode 9', 0],
              ['Episode 10', 0],
              ['Episode 11', 0],
              ['Episode 12', 3],
              ['Episode 13', 5]
            ]
          }, {
            id: 'Season 4',
            data: [
              ['Episode 1', 1],
              ['Episode 2', 0],
              ['Episode 3', 0],
              ['Episode 4', 3],
              ['Episode 5', 0],
              ['Episode 6', 3],
              ['Episode 7', 0],
              ['Episode 8', 1],
              ['Episode 9', 1],
              ['Episode 10', 14],
              ['Episode 11', 0],
              ['Episode 12', 0],
              ['Episode 13', 5]
            ]
          }, {
            id: 'Season 5',
            data: [
              ['Episode 1', 0],
              ['Episode 2', 3],
              ['Episode 3', 0],
              ['Episode 4', 0],
              ['Episode 5', 1],
              ['Episode 6', 0],
              ['Episode 7', 1],
              ['Episode 8', 10],
              ['Episode 9', 0],
              ['Episode 10', 10],
              ['Episode 11', 0],
              ['Episode 12', 0],
              ['Episode 13', 0],
              ['Episode 14', 2],
              ['Episode 15', 1],
              ['Episode 16', 10]
            ]
          }]
        }
      })
    });
    
    
    
  