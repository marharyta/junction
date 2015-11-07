'use strict';

angular
	.module('myApp.seat', [])
	.directive('seatList', function() {
		var controller = function($scope){

	//seat list
		$scope.items = [{
			id: 1,
		    name: 'Beyonce',
		    price: 70000,
		    description: 'first-class',
		    status: "reserved",
		    pic: "",
		    linkLinkedIn: " "
		  },
		  {
		    id: 2,
		    name: 'Shakira',
		    price: 600,
		    description: 'first-class',
		    status: "reserved",
		    pic: "",
		    linkLinkedIn: " "
		  },
		  {
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
		  }];

		  //

		};

		return {
			scope: {},
			templateUrl: 'components/seat/seatList.html',
			link: controller
			//controller of the scope in productList.html is the var controller created above

		}
	})
	.controller('arrangeSeats', arrangeSeats)