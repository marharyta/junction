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

				id: "A12345",
			    from: 'Helsinki',
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
			    from: 'Helsinki',
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
			    from: 'Helsinki',
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
			    from: 'Helsinki',
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
			templateUrl: 'components/overview/overview.html',
			link: controller
			//controller of the scope in productList.html is the var controller created above

		}
	})
	.controller('selectFlight', function(){});