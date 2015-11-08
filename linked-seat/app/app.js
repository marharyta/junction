'use strict';

// Declare app level module which depends on views, and components
/*angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version',
  'myApp.seat',
  'myApp.login',
  'myApp.flight',
  'myApp.overview',
  'myApp.checkIn',
  'myApp.matches',
  'myApp.flightOptions',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/

function flightsFactory ($rootScope) {
  var controller = function($rootScope){

    $rootScope.flights = [{

        id: "A12345",
          from: "Helsinki",
          to: "Prague",
          date: "21 Dec 2015",
          departure: "11:20 AM",
          arrival: "13:20 PM",
          price: 678,
          description: 'first-class',
          status: "free"
    
      },
      {
      
          id: "A12345",
          from: "Prague",
          to: "Prague",
          date: "21 Dec 2015",
          departure: "11:20 AM",
          arrival: "13:20 PM",
          price: 678,
          description: 'first-class',
          status: "free"
        
        
      },
      {
        
        id: "A12345",
          from: "Budapest",
          to: "Prague",
          date: "21 Dec 2015",
          departure: "11:20 AM",
          arrival: "13:20 PM",
          price: 678,
          description: 'first-class',
          status: "free"
        
      },
      {
        
        id: "A12345",
          from: "Milan",
          to: "Prague",
          date: "21 Dec 2015",
          departure: "11:20 AM",
          arrival: "13:20 PM",
          price: 678,
          description: 'first-class',
          status: "free"
        
      }];



      //

    };

    return {
      scope: {},
      templateUrl: 'components/flight/flightList.html',
      link: controller
      //controller of the scope in productList.html is the var controller created above

    }
  };



var app = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view5',
  'myApp.view6',
  'myApp.version',
  'myApp.seat',
  'myApp.login',
  'myApp.flight',
  'myApp.overview',
  'myApp.checkIn',
  'myApp.matches',
  'myApp.flightOptions',
] );

app
.config(function ($routeProvider) {
  $routeProvider
   // route for the home page
   .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'mainController'
  });

}); 

app.service('flightsFactory', flightsFactory);

app.controller('selectFlights', flightsFactory);