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
      "Juan Bolsa's 2 bodyguards",
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
      "4 Cartel assassins",
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
      "2 Albuquerque Mafia guards",
      "Walter White",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 02",
      "Peter Schuler",
      "Peter Schuler",
      "-",
      "Suicide by placing one end of a defibrillator in his mouth and the other over his heart"
    ],
    [
      "Season 5, Episode 02",
      "Duane Chow",
      "Chris Mara",
      "Lydia Rodarte-Quayle",
      "Shot"
    ],
    [
      "Season 5, Episode 02",
      "Chris Mara",
      "Mike Ehrmantraut",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 05",
      "Drew Sharp",
      "Todd Alquist",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 07",
      "Mike Ehrmantraut",
      "Walter White",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 08",
      "Dan Wachsberger",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Ron Forenall",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Jack McGann",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Andrew Holt",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Anthony Perez",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Isaac Conley",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "William Moniz",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Harris Boivin",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Raymond Martinez",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Stabbed to death"
    ],
    [
      "Season 5, Episode 08",
      "Dennis Markowski",
      "Prison inmates",
      "Ordered by Jack Welker, contracted by Walter White",
      "Doused in rubbing alcohol, set on fire and burned alive"
    ],
    [
      "Season 5, Episode 10",
      "8 of Declan's men and his cook",
      "White supremacist gang",
      "Lydia Rodarte-Quayle and Jack Welker",
      "Shot"
    ],
    [
      "Season 5, Episode 10",
      "Declan",
      "Jack Welker",
      "Lydia Rodarte-Quayle",
      "Shot"
    ],
    [
      "Season 5, Episode 14",
      "Steven Gomez",
      "White supremacist gang",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 14",
      "Hank Schrader",
      "Jack Welker",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 15",
      "Andrea Cantillo",
      "Todd Alquist",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 16",
      "Kenny",
      "Walter White",
      "-",
      "Shot repeatedly by remote-activated M60 machine gun"
    ],
    [
      "Season 5, Episode 16",
      "Matt",
      "Walter White",
      "-",
      "Shot repeatedly by remote-activated M60 machine gun"
    ],
    [
      "Season 5, Episode 16",
      "Frankie",
      "Walter White",
      "-",
      "Shot repeatedly by remote-activated M60 machine gun"
    ],
    [
      "Season 5, Episode 16",
      "Lester",
      "Walter White",
      "-",
      "Shot repeatedly by remote-activated M60 machine gun"
    ],
    [
      "Season 5, Episode 16",
      "2 unnamed white supremacist gang members",
      "Walter White",
      "-",
      "Shot repeatedly by remote-activated M60 machine gun"
    ],
    [
      "Season 5, Episode 16",
      "Todd Alquist",
      "Jesse Pinkman",
      "-",
      "Strangled to death with chain"
    ],
    [
      "Season 5, Episode 16",
      "Jack Welker",
      "Walter White",
      "-",
      "Shot"
    ],
    [
      "Season 5, Episode 16",
      "Lydia Rodarte-Quayle",
      "Walter White",
      "-",
      "Poisoned with ricin"
    ],
    [
      "Season 5, Episode 16",
      "Walter White",
      "-",
      "-",
      "Accidentally shot himself with remote-activated M60 machine gun, bled out"
    ]
  ];


  $scope.dataTableOpt = {
    //custom datatable options
    "retrieve": true,
    "aLengthMenu": [
      [10, 50, 100, -1],
      [10, 50, 100, 'All']
    ],
  };
});
