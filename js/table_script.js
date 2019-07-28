//==================================== 
var app1 = angular.module('formvalid', ['ui.bootstrap', 'ui.utils']);
app1.controller('validationCtrl', function($scope) {




  angular.element(document).ready(function() {
    // Setup - add a text input to each footer cell


    $('#example tfoot th').each(function() {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder="Search" />');
    });



    console.log('  document ready function, add search by column feature ');



    /*
													        earlier angularjs initialize datatable( must add "retrieve": true,) , but don't get a table handle, 
													    	
														  	later here, $('#id').DataTable(); will 1) if existing, will retrieve table handle.
					                                                                               2) if not exsiting, will create a new table. 
														
														
													 */

    var table = $('#example').DataTable();



    // Apply the search
    table.columns().every(function() {
      var that = this;

      $('input', this.footer()).on('keyup change', function() {
        if (that.search() !== this.value) {
          that
            .search(this.value)
            .draw();
        }
      });
    });




  }); // document ready				  








  $scope.data = [
    [
      "Season 1, Episode 01",
      "Emilio Koyoma",
      "Walter White",
      "-",
      "Poisoned by phosphine gas"
    ],
    [
      "Season 1, Episode 03",
      "Domingo Gallardo \"Krazy-8\" Molina",
      "Walter White",
      "-",
      "Strangled to death with a bike lock"
    ],
    [
      "Season 2, Episode 01",
      "No-Doze",
      "Tuco Salamanca",
      "-",
      "Beaten to death"
    ],
    [
      "Season 2, Episode 01",
      "Gonzo",
      "-",
      "-",
      "Accidentally crushed by a car"
    ],
    [
      "Season 2, Episode 02",
      "Tuco Salamanca",
      "Hank Schrader",
      "-",
      "Shot"
    ],
    [
      "Season 2, Episode 06",
      "Convenience Store Clerk",
      "Spooge",
      "-",
      "Stabbed"
    ],
    [
      "Season 2, Episode 06",
      "Spooge",
      "Spooge's Lady",
      "-",
      "Crushed with an ATM"
    ],
    [
      "Season 2, Episode 07",
      "Tortuga",
      "The Cousins",
      "Juan Bolsa",
      "Decapitated with a machete"
    ],
    [
      "Season 2, Episode 07",
      "Unnamed DEA agent",
      "Juan Bolsa",
      "-",
      "Blown up with a bomb on a tortoise"
    ],
    [
      "Season 2, Episode 11",
      "Christian \"Combo\" Ortega",
      "Tomàs Cantillo",
      "Rival Dealers",
      "Shot"
    ],
    [
      "Season 2, Episode 12",
      "Jane Margolis",
      "Walter White",
      "-",
      "Asphyxiated on her own vomit while on heroin, negligent homicide"
    ],
    [
      "Season 2, Episode 13",
      "167 passengers on the Wayfarer 515 and JM 21 flights",
      "Donald Margolis",
      "-",
      "Airplane Crash"
    ],
    [
      "Season 3, Episode 01",
      "9 Mexicans",
      "The Cousins",
      "-",
      "Shot"
    ],
    [
      "Season 3, Episode 01",
      "Coyote Driver",
      "The Cousins",
      "-",
      "Shot"
    ],
    [
      "Season 3, Episode 06",
      "Mrs. Peyketewa",
      "The Cousins",
      "-",
      "Unspecified "
    ],
    [
      "Season 3, Episode 06",
      "Deputy Bobby Kee",
      "The Cousins",
      "-",
      "Struck in the back with an axe"
    ],
    // [
    //   "Season 3, Episode 07",
    //   "Chief Financial Officer (CFO)",
    //   "New York",
    //   "3059",
    //   "2010\/06\/09"
    // ],
    // [
    //   "Season 3, Episode 07",
    //   "Systems Administrator",
    //   "New York",
    //   "1721",
    //   "2009\/04\/10"
    // ],
    // [
    //   "Season 3, Episode 08",
    //   "Software Engineer",
    //   "London",
    //   "2558",
    //   "2012\/10\/13"
    // ],
    // [
    //   "Season 3, Episode 08",
    //   "Personnel Lead",
    //   "Edinburgh",
    //   "2290",
    //   "2012\/09\/26"
    // ],
    // [
    //   "Season 3, Episode 08",
    //   "Development Lead",
    //   "New York",
    //   "1937",
    //   "2011\/09\/03"
    // ],
    // [
    //   "Season 3, Episode 12",
    //   "Chief Marketing Officer (CMO)",
    //   "New York",
    //   "6154",
    //   "2009\/06\/25"
    // ],
    // [
    //   "Season 3, Episode 12",
    //   "Pre-Sales Support",
    //   "New York",
    //   "8330",
    //   "2011\/12\/12"
    // ],
    // [
    //   "Season 3, Episode 12",
    //   "Sales Assistant",
    //   "Sidney",
    //   "3023",
    //   "2010\/09\/20"
    // ],
    // [
    //   "Season 3, Episode 13",
    //   "Chief Executive Officer (CEO)",
    //   "London",
    //   "5797",
    //   "2009\/10\/09"
    // ],
    // [
    //   "Season 3, Episode 13",
    //   "Developer",
    //   "Edinburgh",
    //   "8822",
    //   "2010\/12\/22"
    // ],
    // [
    //   "Season 4, Episode 01",
    //   "Regional Director",
    //   "Singapore",
    //   "9239",
    //   "2010\/11\/14"
    // ],
    // [
    //   "Season 4, Episode 04",
    //   "Software Engineer",
    //   "San Francisco",
    //   "1314",
    //   "2011\/06\/07"
    // ],
    // [
    //   "Season 4, Episode 04",
    //   "Chief Operating Officer (COO)",
    //   "San Francisco",
    //   "2947",
    //   "2010\/03\/11"
    // ],
    // [
    //   "Season 4, Episode 06",
    //   "Regional Marketing",
    //   "Tokyo",
    //   "8899",
    //   "2011\/08\/14"
    // ],
    // [
    //   "Season 4, Episode 06",
    //   "Integration Specialist",
    //   "Sidney",
    //   "2769",
    //   "2011\/06\/02"
    // ],
    // [
    //   "Season 4, Episode 08",
    //   "Developer",
    //   "London",
    //   "6832",
    //   "2009\/10\/22"
    // ],
    // [
    //   "Season 4, Episode 09",
    //   "Technical Author",
    //   "London",
    //   "3606",
    //   "2011\/05\/07"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Team Leader",
    //   "San Francisco",
    //   "2860",
    //   "2008\/10\/26"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Post-Sales support",
    //   "Edinburgh",
    //   "8240",
    //   "2011\/03\/09"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Marketing Designer",
    //   "San Francisco",
    //   "5384",
    //   "2009\/12\/09"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Office Manager",
    //   "San Francisco",
    //   "7031",
    //   "2008\/12\/16"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Secretary",
    //   "San Francisco",
    //   "6318",
    //   "2010\/02\/12"
    // ],
    // [
    //   "Season 4, Episode 10",
    //   "Financial Controller",
    //   "San Francisco",
    //   "9422",
    //   "2009\/02\/14"
    // ],
    // [
    //   "Season 4, Episode 13",
    //   "Office Manager",
    //   "London",
    //   "7580",
    //   "2008\/12\/11"
    // ],
    // [
    //   "Season 4, Episode 13",
    //   "Director",
    //   "New York",
    //   "1042",
    //   "2008\/09\/26"
    // ],
    // [
    //   "Season 4, Episode 13",
    //   "Support Engineer",
    //   "Singapore",
    //   "2120",
    //   "2011\/02\/03"
    // ],
    // [
    //   "Season 4, Episode 13",
    //   "Software Engineer",
    //   "London",
    //   "6222",
    //   "2011\/05\/03"
    // ],
    // [
    //   "Season 5, Episode 02",
    //   "Support Engineer",
    //   "Tokyo",
    //   "9383",
    //   "2009\/08\/19"
    // ],
    // [
    //   "Season 5, Episode 02",
    //   "Developer",
    //   "New York",
    //   "8327",
    //   "2013\/08\/11"
    // ],
    // [
    //   "Season 5, Episode 02",
    //   "Support Engineer",
    //   "San Francisco",
    //   "2927",
    //   "2009\/07\/07"
    // ],
    // [
    //   "Serge Baldwin",
    //   "Data Coordinator",
    //   "Singapore",
    //   "8352",
    //   "2012\/04\/09"
    // ],
    // [
    //   "Zenaida Frank",
    //   "Software Engineer",
    //   "New York",
    //   "7439",
    //   "2010\/01\/04"
    // ],
    // [
    //   "Zorita Serrano",
    //   "Software Engineer",
    //   "San Francisco",
    //   "4389",
    //   "2012\/06\/01"
    // ],
    // [
    //   "Jennifer Acosta",
    //   "Junior Javascript Developer",
    //   "Edinburgh",
    //   "3431",
    //   "2013\/02\/01"
    // ],
    // [
    //   "Cara Stevens",
    //   "Sales Assistant",
    //   "New York",
    //   "3990",
    //   "2011\/12\/06"
    // ],
    // [
    //   "Hermione Butler",
    //   "Regional Director",
    //   "London",
    //   "1016",
    //   "2011\/03\/21"
    // ],
    // [
    //   "Lael Greer",
    //   "Systems Administrator",
    //   "London",
    //   "6733",
    //   "2009\/02\/27"
    // ],
    // [
    //   "Jonas Alexander",
    //   "Developer",
    //   "San Francisco",
    //   "8196",
    //   "2010\/07\/14"
    // ],
    // [
    //   "Shad Decker",
    //   "Regional Director",
    //   "Edinburgh",
    //   "6373",
    //   "2008\/11\/13"
    // ],
    // [
    //   "Michael Bruce",
    //   "Javascript Developer",
    //   "Singapore",
    //   "5384",
    //   "2011\/06\/27",
    //   "$183,000"
    // ],
    // [
    //   "Donna Snider",
    //   "Customer Support",
    //   "New York",
    //   "4226",
    //   "2011\/01\/25",
    //   "$112,000"
    // ]
  ];


  $scope.dataTableOpt = {
    //custom datatable options 
    // or load data through ajax call also
    // "data": $scope.data00, // this is not real binding, the real binding is ui-jq="dataTable" ui-options="dataTableOpt", fill $scope.data
    "retrieve": true, // angularjs at begining initialize datatable, but don't get a handle to the table, later you want to add search column, you need to get the table handle.
    "aLengthMenu": [
      [10, 50, 100, -1],
      [10, 50, 100, 'All']
    ],
  };






});
