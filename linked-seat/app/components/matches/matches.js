'use strict';

//time varieables

//var time1 = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//var time2 = new Date(year, month, day, hours, minutes, seconds, milliseconds);


angular
	.module('myApp.matches', [])
	.directive('matchList', function() {
		var controller = function($scope){

	//flight list
		$scope.matches = 
		{

				id: 12345,
			    firstName: "John",
			    secondName: "Hilton",
			    link: "youtube.com",
			    pic: ""
			
		  }
		  /*{
		    id: 3,
		    name: 'Benedict',
		    price: 700,
		    description: 'first-class',
		    status: "reserved",
		    pic: "",
		    linkLinkedIn: " "
		  },
		  {
		    id: 6,
		    name: 'Andre',
		    price: 800,
		    description: 'first-class',
		    status: "reserved",
		    pic: "",
		    linkLinkedIn: " "
		  },
		  {
		    id: 7,
		    name: 'JLo',
		    price: 8000,
		    description: 'first-class',
		    status: "reserved",
		    pic: "",
		    linkLinkedIn: " "
		  }*/

		  //

		};

		return {
			scope: {},
			templateUrl: 'components/matches/matchList.html',
			link: controller
			//controller of the scope in productList.html is the var controller created above

		}
	})
	.controller('selectFlight', function ($scope){


});