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

app.factory('getUserData', function () {

    var factory = {};

    factory.getUser = function () {
        //..
    }

    return factory;
});