'use strict';

//time varieables

//var time1 = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//var time2 = new Date(year, month, day, hours, minutes, seconds, milliseconds);


angular
	.module('myApp.flight', ['ngRoute'])
	.directive('flightList', function() {
		var controller = function($scope){

	//flight list
		$scope.flights = [{

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
			    from: 'Prague',
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
			    from: 'Budapest',
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
			    from: 'Milan',
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
	})
	.controller('selectFlight', function($scope){
		
		$scope.flights = [{

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
			    from: 'Prague',
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
			    from: 'Budapest',
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
			    from: 'Milan',
			    to: "Prague",
			    date: "21 Dec 2015",
			    departure: "11:20 AM",
			    arrival: "13:20 PM",
			    price: 678,
			    description: 'first-class',
			    status: "free"
				
		  }];



})

.controller('clickController', function clickControlling($scope) {

   			$scope.myVar = true;
   			$scope.toggle = function() {
		        $scope.myVar = !$scope.myVar;
		    }

		}
		);