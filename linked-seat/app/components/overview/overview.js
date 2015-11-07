'use strict';

//time varieables

//var time1 = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//var time2 = new Date(year, month, day, hours, minutes, seconds, milliseconds);


angular
	.module('myApp.overview', [])
	.directive('overview', function() {
		var controller = function($scope){

	//flight list
		$scope.items = [{
			flight1:{

				id: "A123",
			    from: 'Helsinki',
			    to: "Prague",
			    departure: "22 Dec",
			    arrival: "22 Dec",
			    price: 300,
			    description: 'first-class',
			    status: "free"
			}
		  },
		  {
		  	flight2:{
		  		id: "A135",
			    from: 'Prague',
			    to: "Helsinki",
			    departure: "25 Dec",
			    arrival: "26 Dec",
			    price: 300,
			    description: 'first-class',
			    status: "free"
		  	}
		    
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
		  }*/];

		  //

		};

		return {
			scope: {},
			templateUrl: 'components/overview/overview.html',
			link: controller
			//controller of the scope in productList.html is the var controller created above

		}
	})
	.controller('selectFlight', function ($scope){


});