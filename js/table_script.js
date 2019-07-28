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
      "Head crushed with an ATM"
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
    [
      "Season 3, Episode 07",
      "Unnamed Man",
      "The Cousins",
      "-",
      "Shot"
    ],
    [
      "Season 3, Episode 07",
      "Marco Salamanca",
      "Hank Schrader",
      "Gustavo Fring",
      "Shot"
    ],
    [
      "Season 3, Episode 08",
      "Leonel Salamanca",
      "Mike Ehrmantraut",
      "Gustavo Fring",
      "Poisoned with a fatal injection"
    ],
    [
      "Season 3, Episode 08",
      "Juan Bolsa's 2 Bodyguards",
      "Mexican federales",
      "Gustavo Fring",
      "Shot"
    ],
    [
      "Season 3, Episode 08",
      "Juan Bolsa",
      "Mexican federales",
      "Gustavo Fring",
      "Shot"
    ],
    [
      "Season 3, Episode 12",
      "Tomàs Cantillo",
      "Rival Dealers",
      "-",
      "Shot"
    ],
    [
      "Season 3, Episode 12",
      "Rival Dealer #1",
      "Walter White",
      "-",
      "Run over with a van"
    ],
    [
      "Season 3, Episode 12",
      "Rival Dealer #2",
      "Walter White",
      "-",
      "Shot"
    ],
    [
      "Season 3, Episode 13",
      "4 Cartel Assassins",
      "Mike Ehrmantraut",
      "Gustavo Fring",
      "Shot"
    ],
    [
      "Season 3, Episode 13",
      "Gale Boetticher",
      "Jesse Pinkman",
      "Walter White",
      "Shot"
    ],
    [
      "Season 4, Episode 01",
      "Victor",
      "Gustavo Fring",
      "-",
      "Throat slit with a boxcutter"
    ],
    [
      "Season 4, Episode 04",
      "Los Pollos Driver #1",
      "Juárez Cartel assassins",
      "-",
      "Shot"
    ],
    [
      "Season 4, Episode 04",
      "2 Cartel Assassins",
      "Mike Ehrmantraut",
      "-",
      "Shot"
    ],
    [
      "Season 4, Episode 06",
      "Los Pollos Driver #2",
      "Juárez Cartel assassins",
      "-",
      "Shot"
    ],
    [
      "Season 4, Episode 06",
      "2 Los Pollos Guards",
      "Juárez Cartel assassins",
      "-",
      "Suffocated by exhaust fumes"
    ],
    [
      "Season 4, Episode 08",
      "Maximino Arciniega",
      "Hector Salamanca",
      "Don Eladio Vuente",
      "Shot"
    ],
    [
      "Season 4, Episode 09",
      "Nick",
      "Gaff",
      "-",
      "Shot"
    ],
    [
      "Season 4, Episode 10",
      "Benicio Fuentes",
      "Gustavo Fring",
      "-",
      "Poisoned tequila"
    ],
    [
      "Season 4, Episode 10",
      "Miguel",
      "Gustavo Fring",
      "-",
      "Poisoned tequila"
    ],
    [
      "Season 4, Episode 10",
      "9 Juárez Cartel Dons",
      "Gustavo Fring",
      "-",
      "Poisoned tequila"
    ],
    [
      "Season 4, Episode 10",
      "Gaff",
      "Mike Ehrmantraut",
      "Gustavo Fring",
      "Strangled with a fiberwire"
    ],
    [
      "Season 4, Episode 10",
      "Don Eladio Vuente",
      "Gustavo Fring",
      "-",
      "Poisoned tequila"
    ],
    [
      "Season 4, Episode 10",
      "Joaquin Salamanca",
      "Jesse Pinkman",
      "-",
      "Shot"
    ],
    [
      "Season 4, Episode 13",
      "Hector Salamanca",
      "Hector Salamanca and Walter White",
      "-",
      "Suicide bombed by a bomb detonated by a wheel-chair"
    ],
    [
      "Season 4, Episode 13",
      "Tyrus Kitt",
      "Hector Salamanca and Walter White",
      "-",
      "Blown up by a bomb detonated by a wheel-chair"
    ],
    [
      "Season 4, Episode 13",
      "Gustavo Fring",
      "Hector Salamanca and Walter White",
      "-",
      "Blown up by a bomb detonated by a wheel-chair"
    ],
    [
      "Season 4, Episode 13",
      "2 Albuquerue Mafia guards",
      "Walter White",
      "-",
      "Shot"
    ],
    // [
    //   "Season 5, Episode 02",
    //   "",
    //   "",
    //   "-",
    //   ""
    // ],
    // [
    //   "Season 5, Episode 02",
    //   "",
    //   "",
    //   "-",
    //   ""
    // ],
    // [
    //   "Season 5, Episode 02",
    //   "",
    //   "",
    //   "-",
    //   ""
    // ],
    // [
    //   "Serge Baldwin",
    //   "Data Coordinator",
    //   "Singapore",
    //   "-",
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
