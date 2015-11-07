'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
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
}]);
