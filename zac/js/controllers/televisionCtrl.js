zacApp.controller('televisionController', function($scope,$window) {
	 $scope.go = function() {
		$window.location.href='https://google.com';
	 }
	 $scope.go();
	 console.log("television");
}); 

