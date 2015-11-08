'use strict';

angular
	.module('myApp.flightOptions', [])
	.directive('optionsList', function() {
		var controller = function($scope){

	//seat list
		$scope.items = [{

				id: 1,
			    name: 'Luggage',
			    price: 7,
			    description: 'first-class',
			    status: "reserved"
			
		  },
		  {
		  		id: 2,
			    name: 'Something else',
			    price: 7,
			    description: 'first-class',
			    status: "reserved"
			    

		  	
		  },
		  {
		  		id: 3,
			    name: 'Connect to LinkedIn',
			    price: 7,
			    description: 'first-class',
			    status: "reserved"

		  	
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
			templateUrl: 'components/flightOptions/optionsList.html',
			link: controller
			//controller of the scope in productList.html is the var controller created above

		}
	})
	.controller('clickController', function clickControlling($scope) {

   			$scope.myVar = true;
   			$scope.toggle = function() {
		        $scope.myVar = !$scope.myVar;
		    }

		}
		);